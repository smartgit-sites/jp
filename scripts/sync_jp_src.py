#!/usr/bin/env -S uv run python
from __future__ import annotations

import argparse
import hashlib
import os
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent.parent
EN_REPO = ROOT_DIR / "tmp/smartgit.com_dev"
JP_ROOT = ROOT_DIR / "site/jp_src"
JP_CONTENT = JP_ROOT / "content"
SOURCE_REPO = "git@github.com:smartgit-sites/dev.git"

SYNC_DIRS = [
    "archetypes",
    "assets",
    "data",
    "layouts",
    "media",
    "static",
]

TEXT_MIGRATIONS = [
    ("/knowledge-hub/", "/learn/"),
    ("/purchase/", "/pricing/"),
    ('url="/purchase"', 'url="/pricing"'),
]


def run_git(args: list[str]) -> str:
    result = subprocess.run(
        ["git", "-C", str(EN_REPO), *args],
        check=True,
        text=True,
        capture_output=True,
    )
    return result.stdout.strip()


def to_utc_z(value: str) -> str:
    dt = datetime.fromisoformat(value)
    return dt.astimezone(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def now_utc_z() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def tracked_files(prefix: str) -> list[str]:
    output = run_git(["ls-files", prefix])
    return [line for line in output.splitlines() if line]


def split_front_matter(text: str) -> tuple[str, str]:
    lines = text.splitlines(True)
    if not lines or lines[0].strip() != "---":
        return "", text
    for idx in range(1, len(lines)):
        marker = lines[idx].strip()
        if marker == "---" or marker.startswith("----"):
            return "".join(lines[1:idx]), "".join(lines[idx + 1 :])
    return "", text


def without_docsync(front: str) -> str:
    lines = front.splitlines(True)
    out: list[str] = []
    idx = 0
    while idx < len(lines):
        line = lines[idx]
        if line.startswith("docsync:"):
            idx += 1
            while idx < len(lines):
                next_line = lines[idx]
                if next_line.strip() and not next_line.startswith((" ", "\t")):
                    break
                idx += 1
            continue
        out.append(line)
        idx += 1
    return "".join(out).rstrip() + "\n"


def docsync_block(rel_file: str, fetched_at: str) -> str:
    content_rel = rel_file.removeprefix("content/")
    head_commit = run_git(["rev-parse", "HEAD"])
    head_date = to_utc_z(run_git(["show", "-s", "--format=%cI", "HEAD"]))
    modified_commit = run_git(["log", "-n", "1", "--format=%H", "--", rel_file])
    modified_date = to_utc_z(run_git(["log", "-n", "1", "--format=%cI", "--", rel_file]))
    blob = run_git(["rev-parse", f"HEAD:{rel_file}"])
    sha256 = hashlib.sha256((EN_REPO / rel_file).read_bytes()).hexdigest()

    return (
        "docsync:\n"
        "  source:\n"
        f"    repo: {SOURCE_REPO}\n"
        f"    path: {content_rel}\n"
        f"    commit: {head_commit}\n"
        f"    committed_at: {head_date}\n"
        f"    modified_commit: {modified_commit}\n"
        f"    modified_committed_at: {modified_date}\n"
        f"    blob: {blob}\n"
        f"    sha256: {sha256}\n"
        f"    fetched_at: {fetched_at}\n"
        "  translation:\n"
        "    status: draft\n"
        f"    updated_at: {fetched_at}\n"
    )


def alternate_jp_path(content_rel: str) -> Path | None:
    if content_rel.startswith("learn/"):
        return JP_CONTENT / ("knowledge-hub/" + content_rel.removeprefix("learn/"))
    if content_rel.startswith("pricing/"):
        return JP_CONTENT / ("purchase/" + content_rel.removeprefix("pricing/"))
    if content_rel == "contact/_index.md":
        return JP_CONTENT / "company/contact.md"
    return None


def migrated_body(body: str, content_rel: str) -> str:
    if content_rel.startswith(("learn/", "pricing/")):
        for old, new in TEXT_MIGRATIONS:
            body = body.replace(old, new)
    return body


def source_body_for(dest: Path, content_rel: str, en_body: str) -> str:
    source = dest
    if not source.exists():
        alternate = alternate_jp_path(content_rel)
        if alternate and alternate.exists():
            source = alternate
    if source.exists():
        _, body = split_front_matter(source.read_text(encoding="utf-8"))
        if body.lstrip().startswith("---"):
            _, nested_body = split_front_matter(body.lstrip())
            if nested_body != body.lstrip():
                body = nested_body
        return migrated_body(body, content_rel)
    return en_body


def sync_markdown(rel_file: str, fetched_at: str) -> None:
    src = EN_REPO / rel_file
    content_rel = rel_file.removeprefix("content/")
    dest = JP_CONTENT / content_rel
    en_front, en_body = split_front_matter(src.read_text(encoding="utf-8"))
    front = without_docsync(en_front) + docsync_block(rel_file, fetched_at)
    body = source_body_for(dest, content_rel, en_body)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text("---\n" + front + "---\n" + body, encoding="utf-8")


def copy_file(rel_file: str, dest_root: Path | None = None) -> None:
    src = EN_REPO / rel_file
    dest = (dest_root / Path(rel_file).name) if dest_root else JP_ROOT / rel_file
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)


def sync_content(prune: bool, fetched_at: str) -> None:
    expected: set[Path] = set()
    for rel_file in tracked_files("content"):
        content_rel = rel_file.removeprefix("content/")
        dest = JP_CONTENT / content_rel
        expected.add(dest)
        if Path(rel_file).suffix in {".md", ".markdown"}:
            sync_markdown(rel_file, fetched_at)
        else:
            copy_file(rel_file, JP_CONTENT / Path(content_rel).parent)

    if prune:
        prune_tree(JP_CONTENT, expected)


def sync_tracked_dir(rel_dir: str, prune: bool) -> None:
    expected: set[Path] = set()
    for rel_file in tracked_files(rel_dir):
        dest = JP_ROOT / rel_file
        expected.add(dest)
        copy_file(rel_file)
    if prune and (JP_ROOT / rel_dir).exists():
        prune_tree(JP_ROOT / rel_dir, expected)


def prune_tree(root: Path, keep: set[Path]) -> None:
    if not root.exists():
        return
    for file_path in root.rglob("*"):
        if file_path.is_file() and file_path not in keep:
            file_path.unlink()
    for dir_path in sorted((p for p in root.rglob("*") if p.is_dir()), reverse=True):
        try:
            dir_path.rmdir()
        except OSError:
            pass


def sync_hugo_toml() -> None:
    en_text = (EN_REPO / "hugo.toml").read_text(encoding="utf-8")
    jp_path = JP_ROOT / "hugo.toml"
    jp_text = jp_path.read_text(encoding="utf-8") if jp_path.exists() else ""
    committed = subprocess.run(
        ["git", "-C", str(ROOT_DIR), "show", "HEAD:site/jp_src/hugo.toml"],
        text=True,
        capture_output=True,
    )
    if committed.returncode == 0:
        jp_text = committed.stdout

    def get_line_value(text: str, key: str) -> str | None:
        for line in text.splitlines():
            if line.startswith(key + " = "):
                return line
        return None

    replacements = [
        "basepageRef",
        "languageCode",
        "baseURL",
        "disableRobots",
        "description",
        "ogTitle",
        "downloadRef",
    ]
    lines = en_text.splitlines()
    for idx, line in enumerate(lines):
        key = line.split(" = ", 1)[0] if " = " in line else ""
        if key in replacements:
            old_line = get_line_value(jp_text, key)
            if old_line:
                lines[idx] = old_line
    jp_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync tmp/smartgit.com_dev into site/jp_src.")
    parser.add_argument("--all", action="store_true", help="sync content plus shared Hugo source dirs")
    parser.add_argument("--prune", action="store_true", help="remove files not tracked by the English source")
    parser.add_argument("paths", nargs="*", help="tracked paths under tmp/smartgit.com_dev to sync")
    args = parser.parse_args()

    if not (EN_REPO / ".git").is_dir():
        raise SystemExit(f"English repo not found: {EN_REPO}")

    fetched_at = now_utc_z()
    if args.all or not args.paths:
        sync_content(args.prune, fetched_at)
        for rel_dir in SYNC_DIRS:
            if (EN_REPO / rel_dir).exists():
                sync_tracked_dir(rel_dir, args.prune)
        sync_hugo_toml()
        return

    for path in args.paths:
        rel = Path(path).as_posix().removeprefix("./")
        if rel == "content":
            sync_content(args.prune, fetched_at)
        elif rel.startswith("content/") and Path(rel).suffix in {".md", ".markdown"}:
            sync_markdown(rel, fetched_at)
        elif rel.startswith("content/"):
            copy_file(rel, JP_CONTENT / Path(rel).relative_to("content").parent)
        else:
            copy_file(rel)


if __name__ == "__main__":
    main()
