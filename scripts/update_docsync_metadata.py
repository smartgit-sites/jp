#!/usr/bin/env -S uv run python
from __future__ import annotations

import argparse
import hashlib
import subprocess
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent.parent
EN_REPO = ROOT_DIR / "tmp/smartgit.com_dev"
JP_CONTENT = ROOT_DIR / "site/jp_src/content"
SOURCE_REPO = "git@github.com:smartgit-sites/dev.git"


@dataclass(frozen=True)
class SourceMetadata:
    content_path: str
    head_commit: str
    head_date: str
    modified_commit: str
    modified_date: str
    blob: str
    sha256: str
    fetched_at: str


@dataclass(frozen=True)
class ExistingDocsync:
    source_path: str | None
    source_commit: str | None
    source_committed_at: str | None
    source_modified_commit: str | None
    source_modified_committed_at: str | None
    source_blob: str | None
    source_sha256: str | None
    translation_status: str | None
    translation_updated_at: str | None


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


def split_front_matter(text: str) -> tuple[str, str]:
    lines = text.splitlines(True)
    if not lines or lines[0].strip() != "---":
        return "", text
    for idx in range(1, len(lines)):
        marker = lines[idx].strip()
        if marker == "---" or marker.startswith("----"):
            return "".join(lines[1:idx]), "".join(lines[idx + 1 :])
    return "", text


def scalar_value(line: str) -> str:
    return line.split(":", 1)[1].strip().strip("\"'")


def extract_docsync_block(front: str) -> str:
    lines = front.splitlines()
    out: list[str] = []
    in_block = False
    for line in lines:
        if line.startswith("docsync:"):
            in_block = True
        elif in_block and line.strip() and not line.startswith((" ", "\t")):
            break
        if in_block:
            out.append(line)
    return "\n".join(out)


def parse_existing_docsync(front: str) -> ExistingDocsync:
    block = extract_docsync_block(front)
    source_path: str | None = None
    source_commit: str | None = None
    source_committed_at: str | None = None
    source_modified_commit: str | None = None
    source_modified_committed_at: str | None = None
    source_blob: str | None = None
    source_sha256: str | None = None
    status: str | None = None
    updated_at: str | None = None
    section: str | None = None

    for line in block.splitlines():
        stripped = line.strip()
        if stripped == "source:":
            section = "source"
            continue
        if stripped == "translation:":
            section = "translation"
            continue
        if section == "source" and stripped.startswith("path:"):
            source_path = scalar_value(stripped)
        elif section == "source" and stripped.startswith("commit:"):
            source_commit = scalar_value(stripped)
        elif section == "source" and stripped.startswith("committed_at:"):
            source_committed_at = scalar_value(stripped)
        elif section == "source" and stripped.startswith("modified_commit:"):
            source_modified_commit = scalar_value(stripped)
        elif section == "source" and stripped.startswith("modified_committed_at:"):
            source_modified_committed_at = scalar_value(stripped)
        elif section == "source" and stripped.startswith("blob:"):
            source_blob = scalar_value(stripped)
        elif section == "source" and stripped.startswith("sha256:"):
            source_sha256 = scalar_value(stripped)
        elif section == "translation" and stripped.startswith("status:"):
            status = scalar_value(stripped)
        elif section == "translation" and stripped.startswith("updated_at:"):
            updated_at = scalar_value(stripped)

    return ExistingDocsync(
        source_path,
        source_commit,
        source_committed_at,
        source_modified_commit,
        source_modified_committed_at,
        source_blob,
        source_sha256,
        status,
        updated_at,
    )


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


def tracked_markdown() -> list[str]:
    output = run_git(["ls-files", "content"])
    return [
        line
        for line in output.splitlines()
        if line and Path(line).suffix in {".md", ".markdown"}
    ]


def source_metadata(rel_file: str, fetched_at: str) -> SourceMetadata:
    content_path = rel_file.removeprefix("content/")
    head_commit = run_git(["rev-parse", "HEAD"])
    head_date = to_utc_z(run_git(["show", "-s", "--format=%cI", "HEAD"]))
    modified_commit = run_git(["log", "-n", "1", "--format=%H", "--", rel_file])
    modified_date = to_utc_z(run_git(["log", "-n", "1", "--format=%cI", "--", rel_file]))
    blob = run_git(["rev-parse", f"HEAD:{rel_file}"])
    sha256 = hashlib.sha256((EN_REPO / rel_file).read_bytes()).hexdigest()
    return SourceMetadata(content_path, head_commit, head_date, modified_commit, modified_date, blob, sha256, fetched_at)


def build_docsync_block(meta: SourceMetadata, existing: ExistingDocsync, source_changed: bool) -> str:
    status = existing.translation_status or "draft"
    updated_at = existing.translation_updated_at or meta.fetched_at
    if source_changed:
        status = "needs_update"

    return (
        "docsync:\n"
        "  source:\n"
        f"    repo: {SOURCE_REPO}\n"
        f"    path: {meta.content_path}\n"
        f"    commit: {meta.head_commit}\n"
        f"    committed_at: {meta.head_date}\n"
        f"    modified_commit: {meta.modified_commit}\n"
        f"    modified_committed_at: {meta.modified_date}\n"
        f"    blob: {meta.blob}\n"
        f"    sha256: {meta.sha256}\n"
        f"    fetched_at: {meta.fetched_at}\n"
        "  translation:\n"
        f"    status: {status}\n"
        f"    updated_at: {updated_at}\n"
    )


def write_front_matter(path: Path, front: str, body: str) -> None:
    path.write_text("---\n" + front.rstrip() + "\n---\n" + body, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Check or update only the docsync YAML frontmatter in Japanese Markdown files."
    )
    parser.add_argument("--write", action="store_true", help="update docsync blocks in-place")
    parser.add_argument("--fail-on-stale", action="store_true", help="exit non-zero when stale metadata is found")
    args = parser.parse_args()

    if not (EN_REPO / ".git").is_dir():
        raise SystemExit(f"English repo not found: {EN_REPO}")

    fetched_at = now_utc_z()
    stale: list[str] = []
    field_mismatches: list[str] = []
    missing_jp: list[str] = []
    missing_docsync: list[str] = []
    updated: list[str] = []

    for rel_file in tracked_markdown():
        content_path = rel_file.removeprefix("content/")
        jp_path = JP_CONTENT / content_path
        if not jp_path.exists():
            missing_jp.append(content_path)
            continue

        text = jp_path.read_text(encoding="utf-8")
        front, body = split_front_matter(text)
        existing = parse_existing_docsync(front)
        if not existing.source_path:
            missing_docsync.append(content_path)
        meta = source_metadata(rel_file, fetched_at)
        source_changed = existing.source_sha256 is not None and existing.source_sha256 != meta.sha256
        mismatches = []
        if existing.source_path != content_path:
            mismatches.append("path")
        if existing.source_commit != meta.head_commit:
            mismatches.append("commit")
        if existing.source_committed_at != meta.head_date:
            mismatches.append("committed_at")
        if existing.source_modified_commit != meta.modified_commit:
            mismatches.append("modified_commit")
        if existing.source_modified_committed_at != meta.modified_date:
            mismatches.append("modified_committed_at")
        if existing.source_blob != meta.blob:
            mismatches.append("blob")
        if existing.source_sha256 != meta.sha256:
            mismatches.append("sha256")
        needs_update = (
            not existing.source_path
            or bool(mismatches)
        )

        if source_changed:
            stale.append(content_path)
        if mismatches:
            field_mismatches.append(f"{content_path}: {', '.join(mismatches)}")
        if args.write and needs_update:
            new_front = without_docsync(front) + build_docsync_block(meta, existing, source_changed)
            write_front_matter(jp_path, new_front, body)
            updated.append(content_path)

    jp_markdown = {p.relative_to(JP_CONTENT).as_posix() for p in JP_CONTENT.rglob("*.md")}
    en_markdown = {Path(p).relative_to("content").as_posix() for p in tracked_markdown()}
    orphan_jp = sorted(jp_markdown - en_markdown)

    print("docsync metadata check")
    print(f"  English markdown files: {len(en_markdown)}")
    print(f"  Japanese markdown files: {len(jp_markdown)}")
    print(f"  Missing Japanese files: {len(missing_jp)}")
    print(f"  Japanese files not in English source: {len(orphan_jp)}")
    print(f"  Missing docsync blocks: {len(missing_docsync)}")
    print(f"  Source metadata field mismatches: {len(field_mismatches)}")
    print(f"  Stale source SHA-256: {len(stale)}")
    if args.write:
        print(f"  Updated docsync blocks: {len(updated)}")

    for title, items in (
        ("missing Japanese files", missing_jp),
        ("orphan Japanese files", orphan_jp),
        ("missing docsync", missing_docsync),
        ("field mismatches", field_mismatches),
        ("stale", stale),
        ("updated", updated),
    ):
        if items:
            print(f"\n{title}:")
            for item in items:
                print(f"  {item}")

    if (
        missing_jp
        or orphan_jp
        or (missing_docsync and not args.write)
        or (field_mismatches and not args.write)
        or (args.fail_on_stale and stale and not args.write)
    ):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
