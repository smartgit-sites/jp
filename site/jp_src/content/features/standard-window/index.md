---
title: "SmartGit 標準ウィンドウ"
headerH2: "ベスト プラクティスによるより安全な Git ワークフロー"
listTitle: "標準ウィンドウ"
imageAltText: "SmartGit の標準ウィンドウは、ベスト プラクティスのワークフローと統合された CI/CD サポートを備えた合理化された Git インターフェイスを備えています。"
linkText: "標準ウィンドウの詳細"
category: ["feature"]
headerMessage: "**より安全なワークフロー**のための**ベスト プラクティス**を強制する合理化されたインターフェイスで作業します。"
description: "SmartGit は、ファイルベース、コミット中心、統合という 3 つの強力な Git ウィンドウ スタイルを提供します。標準ウィンドウは、オールインワンのシンプルさを提供します。今すぐ SmartGit を試してください!"
ogTitle: "SmartGit の機能 -- 開発者とチームのためのビジュアル Git ツール"
ogDesc: "SmartGit の標準ウィンドウを探索してください: 最適化されたワークフロー - 開発者、チーム、初心者に最適です。"
weight: 7
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/standard-window/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: 27c2b8ca20f52f6a27219e4b9adaa1f20dfcf9f2
    sha256: 8d66561582dd01309248fbcd42d8f86793660fb7aa537e777eec07d0ad2fc894
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

合理化されたインターフェースをお好みですか？**スタンダードウィンドウ**はベストプラクティスに焦点を当て、高度なオプションを隠します：

- ガイド付き**機能の流れ**
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
- {{< link display="フィーチャーフロー開発プロセス" url="https://docs.syntevo.com/SmartGit/Latest/Manual/DevelopmentProcesses/Feature-Flow" >}}の組み込みサポート
- {{< link display="GitHub アクション" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/GitHub-Actions" >}}、{{< link display="ジェンキンス" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/Jenkins" >}}、{{< link display="チームシティ" url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/TeamCity" >}}との統合
- スマートプル：強制プッシュ後でも、変更されていないすべてのローカルブランチを最新に保ち、分岐を防止

{{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Standard-Window" display="スタンダードウィンドウの詳細">}}


# 私の履歴ビュー

{{<screenshot src="my-history-view.png" alt="SmartGitのMy Historyビュー。ahead-behindステータス、プルリクエスト、CIの結果を含むローカルブランチを表示">}}

---

**My History**ビューは、_あなたの_（ローカル）ブランチ、それらのahead-behind状態、関連するプルリクエスト、CIの結果の焦点を絞ったリストを表示します。


# すべてのブランチ + タグビュー

{{<screenshot src="all-branches-tags-view.png" alt="SmartGitの'All Branches and Tags'ビュー。ブランチ構造、タグ、高速ナビゲーションのための統合検索機能を備えた完全なGit履歴を表示">}}

---

**All Branches and Tags**ビューは、すべてのブランチ、タグ、リモートへのアクセスを提供します。統合された検索が高速なナビゲーションを支援します。


# スタッシュビュー

{{<screenshot src="stashes-view.png" alt="SmartGitのStashesビューインターフェース。詳細な変更プレビューと簡単な適用でGitスタッシュを管理">}}

---

**Stashes**ビューでは、すべてのスタッシュを使用・管理し、詳細な変更を表示できます。


# リブログビュー

{{<screenshot src="reflog-view.png" alt="SmartGitのReflogビュー。失われたコミットの復旧と参照変更の追跡のための時系列Git HEAD履歴を表示">}}

---

**Reflog**ビューは`HEAD`の時系列の履歴を表示し、「失われた」コミットへのアクセスを支援します。


# スタイルを比較

{{< button-orange url="https://www.smartgit.dev/features/three-window-styles/" display="3つのウィンドウスタイルを比較" >}}