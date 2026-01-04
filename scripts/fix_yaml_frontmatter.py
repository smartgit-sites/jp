#!/usr/bin/env python3
"""
YAMLフロントマターのマークダウン記法を含む値をクオートで囲むスクリプト
"""

import os
import re
from pathlib import Path

def needs_quoting(value: str) -> bool:
    """値がYAMLでクオートが必要かどうかを判定"""
    if not value or value.startswith("'") or value.startswith('"'):
        return False

    # マークダウン記法のパターン
    patterns = [
        r'\*\*.*\*\*',  # 太字 **text**
        r'\*[^*]+\*',    # イタリック *text*
        r'\[.*\]\(.*\)', # リンク [text](url)
        r'^[:\[\]{}#&*!|>\'"%@`]',  # YAML特殊文字で始まる
    ]

    for pattern in patterns:
        if re.search(pattern, value):
            return True
    return False

def quote_value(value: str) -> str:
    """値をシングルクオートで囲む（内部のシングルクオートはエスケープ）"""
    # 既にクオートされている場合はそのまま
    if value.startswith("'") or value.startswith('"'):
        return value
    # シングルクオートを含む場合はダブルクオートを使用
    if "'" in value:
        return f'"{value}"'
    return f"'{value}'"

def fix_yaml_line(line: str) -> str:
    """YAML行のマークダウン記法を含む値をクオートで囲む"""
    # key: value 形式の行かチェック
    match = re.match(r'^(\s*)([\w-]+):\s*(.+)$', line)
    if not match:
        return line

    indent = match.group(1)
    key = match.group(2)
    value = match.group(3).rstrip()

    # 値がクオートを必要とする場合
    if needs_quoting(value):
        quoted_value = quote_value(value)
        return f"{indent}{key}: {quoted_value}\n"

    return line

def process_file(filepath: Path) -> tuple[bool, int]:
    """ファイルを処理し、変更があったかどうかと変更行数を返す"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # フロントマターを抽出
    frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        return False, 0

    frontmatter = frontmatter_match.group(1)
    rest_content = content[frontmatter_match.end():]

    # フロントマターの各行を処理
    lines = frontmatter.split('\n')
    new_lines = []
    changes = 0

    for line in lines:
        new_line = fix_yaml_line(line + '\n').rstrip('\n')
        if new_line != line:
            changes += 1
        new_lines.append(new_line)

    if changes > 0:
        new_frontmatter = '\n'.join(new_lines)
        new_content = f"---\n{new_frontmatter}\n---{rest_content}"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, changes

    return False, 0

def main():
    # スクリプトの場所から相対的にcontent_dirを決定
    script_dir = Path(__file__).resolve().parent
    project_root = script_dir.parent
    content_dir = project_root / 'site' / 'jp_src' / 'content'

    total_files = 0
    modified_files = 0
    total_changes = 0

    for md_file in content_dir.rglob('*.md'):
        total_files += 1
        modified, changes = process_file(md_file)
        if modified:
            modified_files += 1
            total_changes += changes
            print(f"Modified: {md_file.relative_to(content_dir)} ({changes} changes)")

    print(f"\nSummary:")
    print(f"  Total files scanned: {total_files}")
    print(f"  Files modified: {modified_files}")
    print(f"  Total changes: {total_changes}")

if __name__ == '__main__':
    main()
