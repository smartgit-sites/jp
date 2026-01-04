---
title: SmartGitスタンダードウィンドウ
headerH2: ベストプラクティスによるより安全なGitワークフロー
listTitle: スタンダードウィンドウ
imageAltText: SmartGitのスタンダードウィンドウ。ベストプラクティスワークフローとCI/CD統合サポートを備えた合理化されたGitインターフェースを提供。
linkText: スタンダードウィンドウについて詳しく
category:
- feature
headerMessage: '**ベストプラクティス**を実践し**より安全なワークフロー**を実現する合理化されたインターフェースで作業。'
description: 'SmartGitは3つの強力なGitウィンドウスタイルを提供：ファイルベース、コミット中心、統合型。スタンダードウィンドウはオールインワンのシンプルさを提供。今すぐSmartGitをお試しください！'
ogTitle: SmartGitの機能 -- 開発者とチームのためのビジュアルGitツール
ogDesc: 'SmartGitのスタンダードウィンドウをご覧ください：最適化されたワークフロー - 開発者、チーム、初心者に最適。'
weight: 7
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/standard-window/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: dccfec861e539ddff6af9927e990c214b888c63b
    modified_committed_at: 2025-09-19T11:36:49Z
    blob: 74573193c11e3b72acb30fd3dbdaba50406a74f0
    sha256: 679ca98834eed2998829b1340e87540d9835a24d09e2976a935c8900e146f7e7
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
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