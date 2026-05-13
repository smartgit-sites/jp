---
title: "バージョン 21.1 および 21.2"
headerH2: "SmartGit 21.1 および 21.2 の主な機能強化"
listTitle: "バージョン 21.1 および 21.2"
imageAltText: "SmartGit 21.1 & 21.2: よりスムーズなワークフロー、よりクリーンなコミット、よりスマートなホスティング統合。"
linkText: "SmartGit バージョン 21.1 および 21.2 の詳細"
category: ["feature"]
headerMessage: "21.1 ～ 21.2 では、最新の **diffs**、緊密な **DevOps 統合**、およびネイティブ **Apple M1** サポートを使用します。"
description: "SmartGit 21.1 では、最新の変更ビュー、DevOps と JIRA の統合、よりスマートな競合処理が提供されます。21.2 では、ネイティブ M1 サポートと安全な更新が追加されています。今すぐアップグレードして、より高速で安全な Git エクスペリエンスを実現してください。"
ogTitle: "SmartGit 21.1 -- 21.2: 最新の差分、DevOps 統合、Apple M1 サポート、安全なアップデート"
ogDesc: "SmartGit 21.1 では、最新の変更ビュー、DevOps と JIRA の統合、よりスマートな競合処理が提供されます。21.2 では、ネイティブ M1 サポートと安全な更新が追加されています。今すぐアップグレードして、より高速で安全な Git エクスペリエンスを実現してください。"
weight: 500
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/21_2/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 8cf4b90bac10de7a2eb94538a587ba5cae122b22
    modified_committed_at: 2025-08-05T21:34:17Z
    blob: 573a727f217cc45cf08e134cc27578113e8e9fc7
    sha256: 6207cac14c04a2a8dc5d6beaaec757f6775ca6580ee634efbaca1bb25f74cce5
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGitバージョン21.1と21.2は、主要な使いやすさ、統合、プラットフォームの機能強化を導入し、特に最新のMacでGitワークフローをより安全で直感的にします。
- 完全に書き直されたChangesビュー
- Azure DevOpsサポート
- Gitグラフでのアバター
- 部分クローンのサポート
- ネイティブApple Silicon（M1）サポート
- 自動更新チャンネルをHTTPSにアップグレード

***

# Apple Siliconのサポート

バージョン21.2の最も重要な新しい変更は、MacOS 11および12でのApple Silicon M1プロセッサのサポートです。

# 再構築されたChangesビュー

{{<screenshot alt="再構築されたChangesビュー - コンパクト" src="rebuilt-changes-view-1.png">}}
{{<screenshot alt="再構築されたChangesビュー - 統合" src="rebuilt-changes-view-2.png">}}

---

新しいChangesビューは、サイドバイサイドの差分よりも長い行を表示できる**統合差分**をサポートしています。

コンパクトモード（同じ行が非表示になる）では、**同じ行を選択的に表示**することが簡単にできます。

すべてのモードで**構文カラーリング**と変更の**ステージング**または**アンステージング**がサポートされています。

# 画像比較付きChangesビュー

{{<screenshot alt="画像比較付きChangesビュー" src="changes-view-with-image-compare.png">}}

---

新しいChangesビューでは、画像をサイドバイサイドで視覚的に比較できます。

# コンフリクト解決用Changesビュー

{{<screenshot alt="コンフリクト解決用Changesビュー" src="changes-view-to-solve-conflicts.png">}}

---

コンフリクトが発生した場合、Changesビューはコンフリクトを解決するための簡単なコマンドを提供します。もちろん、コンフリクトが複雑すぎる場合は、コンフリクトソルバーウィンドウを開くこともできます。

# Azure DevOps統合

{{<screenshot alt="Azure DevOpsの統合" src="azure-devops-integration.png">}}

---

SmartGitは、Azure DevOps（GitHubと同様）のGitワークフローを効率化します：Azure DevOpsからGitリポジトリをクローン、プルリクエストを作成、レビューしてコメントを追加できます。


# グラフでのアバター

{{<screenshot alt="グラフでのアバター" src="avatars-in-graph.png">}}

---

デフォルトでは、グラフは作者のアバター（例：gravatar.comから）を表示します。これにより水平方向のスペースが節約され、プレーンテキストよりも見つけやすくなります。

gravatar.comへのアクセスが無効になっている場合、作者のイニシャルからカラフルなグラバターが生成されます。

# プッシュ：JIRA課題を進行中に設定

{{<screenshot alt="プッシュ：JIRA課題を進行中に設定" src="push-set-jira-issue-in-progress.png">}}

---

Atlassian JIRAの統合は、課題を解決済みにマークするだけでなく、進行中にすることもできます。

# 特定のファイルをチェリーピック

{{<screenshot alt="特定のファイルをチェリーピック" src="cherry-pick-certain-files.png">}}

---

ログのファイルビューから、コミットの特定のファイルをチェリーピックできます。

これはスタッシュの選択したファイルのみを適用するためにも使用できます。

# ファイルを分離

{{<screenshot alt="ファイルを分離" src="split-off-files.png">}}

---

コミットを分割するもう1つの方法は、コミットのファイルを選択し、ファイル分離を使用して、新しいコミットのコミットメッセージを入力することです。

# すべてのコミットを変更（ステップ/続行）

{{<screenshot alt="すべてのコミットを変更（ステップ/続行）" src="modify-all-commits-step-continue-2.png">}}
{{<screenshot alt="すべてのコミットを変更（ステップ/続行）" src="modify-all-commits-step-continue-1.png">}}

---

インタラクティブリベースが強化され、すべてのコミットで停止できるようになりました（例：ビルドが成功するかを確認するため）。**各コミットでステップ**するか、残りのすべてのコミットのリベースを**続行**できます - いわば**コミットデバッガー**のようなものです。

# 部分クローンのサポート

{{<screenshot alt="部分クローンのサポート" src="partial-clone-support.png">}}

---

部分的にクローンされたリポジトリ（Git 2.29以降）がサポートされるようになりました：不足しているオブジェクトはオンデマンドでフェッチされます。クローン時に、フェッチする最大ファイルサイズを制限できます。 </screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>