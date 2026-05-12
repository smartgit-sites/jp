---
title: "Version 21.1 & 21.2"
headerH2: "Key Enhancements in SmartGit 21.1 & 21.2"
listTitle: "Version 21.1 & 21.2"
imageAltText: "SmartGit 21.1 & 21.2: Smoother workflows, cleaner commits, and smarter hosting integration."
linkText: "More about SmartGit Version 21.1 & 21.2"
category: ["feature"]
headerMessage: "Use modern **diffs**, tight **DevOps integration**, and native **Apple M1** support in 21.1 -- 21.2."
description: "SmartGit 21.1 brings a modern Changes view, DevOps and JIRA integration, and smarter conflict handling -- 21.2 adds native M1 support and secure updates. Upgrade now for a faster, safer Git experience."
ogTitle: "SmartGit 21.1 -- 21.2: Modern diffs, DevOps integration, Apple M1 support & secure updates"
ogDesc: "SmartGit 21.1 brings a modern Changes view, DevOps and JIRA integration, and smarter conflict handling -- 21.2 adds native M1 support and secure updates. Upgrade now for a faster, safer Git experience."
weight: 500
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/21_2/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 8cf4b90bac10de7a2eb94538a587ba5cae122b22
    modified_committed_at: 2025-08-05T21:34:17Z
    blob: 573a727f217cc45cf08e134cc27578113e8e9fc7
    sha256: 6207cac14c04a2a8dc5d6beaaec757f6775ca6580ee634efbaca1bb25f74cce5
    fetched_at: 2026-05-12T00:35:06Z
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

{{<screenshot src="rebuilt-changes-view-1.png" alt="再構築されたChangesビュー - コンパクト">}}
{{<screenshot src="rebuilt-changes-view-2.png" alt="再構築されたChangesビュー - 統合">}}

---

新しいChangesビューは、サイドバイサイドの差分よりも長い行を表示できる**統合差分**をサポートしています。

コンパクトモード（同じ行が非表示になる）では、**同じ行を選択的に表示**することが簡単にできます。

すべてのモードで**構文カラーリング**と変更の**ステージング**または**アンステージング**がサポートされています。 

# 画像比較付きChangesビュー

{{<screenshot src="changes-view-with-image-compare.png" alt="画像比較付きChangesビュー">}}

---

新しいChangesビューでは、画像をサイドバイサイドで視覚的に比較できます。

# コンフリクト解決用Changesビュー

{{<screenshot src="changes-view-to-solve-conflicts.png" alt="コンフリクト解決用Changesビュー">}}

---

コンフリクトが発生した場合、Changesビューはコンフリクトを解決するための簡単なコマンドを提供します。もちろん、コンフリクトが複雑すぎる場合は、コンフリクトソルバーウィンドウを開くこともできます。

# Azure DevOps統合

{{<screenshot src="azure-devops-integration.png" alt="Azure DevOps統合">}}

---

SmartGitは、Azure DevOps（GitHubと同様）のGitワークフローを効率化します：Azure DevOpsからGitリポジトリをクローン、プルリクエストを作成、レビューしてコメントを追加できます。


# グラフでのアバター

{{<screenshot src="avatars-in-graph.png" alt="グラフでのアバター">}}

---

デフォルトでは、グラフは作者のアバター（例：gravatar.comから）を表示します。これにより水平方向のスペースが節約され、プレーンテキストよりも見つけやすくなります。

gravatar.comへのアクセスが無効になっている場合、作者のイニシャルからカラフルなグラバターが生成されます。 

# プッシュ：JIRA課題を進行中に設定

{{<screenshot src="push-set-jira-issue-in-progress.png" alt="プッシュ：JIRA課題を進行中に設定">}}

---

Atlassian JIRAの統合は、課題を解決済みにマークするだけでなく、進行中にすることもできます。 

# 特定のファイルをチェリーピック

{{<screenshot src="cherry-pick-certain-files.png" alt="特定のファイルをチェリーピック">}}

---

ログのファイルビューから、コミットの特定のファイルをチェリーピックできます。

これはスタッシュの選択したファイルのみを適用するためにも使用できます。 

# ファイルを分離

{{<screenshot src="split-off-files.png" alt="ファイルを分離">}}

---

コミットを分割するもう1つの方法は、コミットのファイルを選択し、ファイル分離を使用して、新しいコミットのコミットメッセージを入力することです。

# すべてのコミットを変更（ステップ/続行）

{{<screenshot src="modify-all-commits-step-continue-2.png" alt="すべてのコミットを変更（ステップ/続行）">}}
{{<screenshot src="modify-all-commits-step-continue-1.png" alt="すべてのコミットを変更（ステップ/続行）">}}

---

インタラクティブリベースが強化され、すべてのコミットで停止できるようになりました（例：ビルドが成功するかを確認するため）。**各コミットでステップ**するか、残りのすべてのコミットのリベースを**続行**できます - いわば**コミットデバッガー**のようなものです。

# 部分クローンのサポート

{{<screenshot src="partial-clone-support.png" alt="部分クローンのサポート">}}

---

部分的にクローンされたリポジトリ（Git 2.29以降）がサポートされるようになりました：不足しているオブジェクトはオンデマンドでフェッチされます。クローン時に、フェッチする最大ファイルサイズを制限できます。 