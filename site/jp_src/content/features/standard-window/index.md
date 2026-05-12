---
title: "SmartGit Standard Window"
headerH2: "Safer Git Workflows with Best Practices"
listTitle: "Standard Window"
imageAltText: "SmartGit's Standard Window featuring streamlined Git interface with best-practices workflow and integrated CI/CD support."
linkText: "More about Standard Window"
category: ["feature"]
headerMessage: "Work in a streamlined interface that enforces **best practices** for **safer workflows**."
description: "SmartGit offers three powerful Git Window Styles: file-based, commit-focused, and unified. Standard Window offers the All-in-One Simplicity. Try SmartGit now!"
ogTitle: "SmartGit Features -- Visual Git Tools for Developers and Teams"
ogDesc: "Explore SmartGit's Standard Window: optimized Workflows - perfect for developers, teams, and beginners."
weight: 7
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/standard-window/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: 27c2b8ca20f52f6a27219e4b9adaa1f20dfcf9f2
    sha256: 8d66561582dd01309248fbcd42d8f86793660fb7aa537e777eec07d0ad2fc894
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

合理化されたインターフェースをお好みですか？**スタンダードウィンドウ**はベストプラクティスに焦点を当て、高度なオプションを隠します：

- ガイド付き**Feature Flow**
- 簡素化されたコミットと**プッシュ**
- チームの**一貫性**に最適

***

# スタンダードウィンドウの要素

{{<screenshot src="standard-window-elements.png" alt="SmartGitスタンダードウィンドウ。変更されたファイルとステージされたファイル、変更、準備されたコミットメッセージを含むLocal Filesビューを表示">}}

---

スタンダードウィンドウは異なるタスクのために2つの焦点を絞ったビューを使用します：
1) **ローカルファイル：** ディレクトリ、ファイル、変更を含むローカルの変更を表示します。このビューはステージング、コミット、またはコンフリクトの解決に使用します。
2) **履歴：** ビジュアルログ、ブランチ、スタッシュ、タグ、コミットの詳細を表示します。このビューはコミットの追跡、レビュー、または管理に使用します。

{{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Standard-Window" display="詳細を見る">}}


# スタンダードウィンドウのユニークな機能

スタンダードウィンドウはユニークな機能を提供します：
- {{< link display="Feature-Flow開発プロセス" url="https://docs.syntevo.com/SmartGit/Latest/Manual/DevelopmentProcesses/Feature-Flow" >}}の組み込みサポート
- {{< link display="GitHub Actions" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/GitHub-Actions" >}}、{{< link display="Jenkins" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/Jenkins" >}}、{{< link display="TeamCity" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/TeamCity" >}}との統合
- スマートプル：強制プッシュ後でも、変更されていないすべてのローカルブランチを最新に保ち、分岐を防止
 
{{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Standard-Window" display="スタンダードウィンドウの詳細">}}


# My Historyビュー

{{<screenshot src="my-history-view.png" alt="SmartGitのMy Historyビュー。ahead-behindステータス、プルリクエスト、CIの結果を含むローカルブランチを表示">}}

---

**My History**ビューは、_あなたの_（ローカル）ブランチ、それらのahead-behind状態、関連するプルリクエスト、CIの結果の焦点を絞ったリストを表示します。


# All Branches + Tagsビュー

{{<screenshot src="all-branches-tags-view.png" alt="SmartGitの'All Branches and Tags'ビュー。ブランチ構造、タグ、高速ナビゲーションのための統合検索機能を備えた完全なGit履歴を表示">}}

---

**All Branches and Tags**ビューは、すべてのブランチ、タグ、リモートへのアクセスを提供します。統合された検索が高速なナビゲーションを支援します。


# Stashesビュー

{{<screenshot src="stashes-view.png" alt="SmartGitのStashesビューインターフェース。詳細な変更プレビューと簡単な適用でGitスタッシュを管理">}}

---

**Stashes**ビューでは、すべてのスタッシュを使用・管理し、詳細な変更を表示できます。


# Reflogビュー

{{<screenshot src="reflog-view.png" alt="SmartGitのReflogビュー。失われたコミットの復旧と参照変更の追跡のための時系列Git HEAD履歴を表示">}}

---

**Reflog**ビューは`HEAD`の時系列の履歴を表示し、「失われた」コミットへのアクセスを支援します。


# スタイルを比較

{{< button-orange url="https://www.smartgit.dev/features/three-window-styles/" display="3つのウィンドウスタイルを比較" >}} 