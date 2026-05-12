#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_URL="git@github.com:smartgit-sites/dev.git"
TARGET_DIR="$ROOT_DIR/tmp/smartgit.com_dev"

usage() {
  cat <<'EOF'
Usage: clone_en_repo.sh [--force]

Clone or update the English repo into tmp/smartgit.com_dev.
  --force  Reset to origin/main and remove untracked files (destructive).
EOF
}

force=false
if [[ "${1:-}" == "--force" ]]; then
  force=true
  shift
fi

if [[ "$#" -ne 0 ]]; then
  usage
  exit 1
fi

if [[ -d "$TARGET_DIR/.git" ]]; then
  current_url="$(git -C "$TARGET_DIR" remote get-url origin 2>/dev/null || true)"
  if [[ -n "$current_url" && "$current_url" != "$REPO_URL" ]]; then
    echo "origin URL is $current_url (expected $REPO_URL)" >&2
    exit 1
  fi

  if [[ "$force" == "true" ]]; then
    git -C "$TARGET_DIR" fetch --prune origin
    git -C "$TARGET_DIR" checkout -B main origin/main
    git -C "$TARGET_DIR" reset --hard origin/main
    git -C "$TARGET_DIR" clean -fdx
  else
    if ! git -C "$TARGET_DIR" diff --quiet || ! git -C "$TARGET_DIR" diff --cached --quiet; then
      echo "Working tree has changes. Commit/stash or run with --force." >&2
      exit 1
    fi
    git -C "$TARGET_DIR" fetch --prune origin
    git -C "$TARGET_DIR" checkout main >/dev/null 2>&1 || git -C "$TARGET_DIR" checkout -B main origin/main
    git -C "$TARGET_DIR" pull --ff-only origin main
  fi
else
  mkdir -p "$(dirname "$TARGET_DIR")"
  git clone "$REPO_URL" "$TARGET_DIR"
fi
