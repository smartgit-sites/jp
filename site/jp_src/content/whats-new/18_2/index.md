---
title: "Version 18.2"
headerH2: "Major Improvements in SmartGit 18.2"
listTitle: "Version 18.2"
imageAltText: "SmartGit 18.2: Unified Log, GitLab merge-request support & enhanced commit workflows."
linkText: "More about SmartGit Version 18.2"
category: ["feature"]
headerMessage: "Unify **Log** and **Working Tree** views and handle **GitLab merge requests** in 18.2."
description: "SmartGit 18.2 elevates productivity by unifying Working Tree and Log views, supporting GitLab workflows, and bolstering commit and rebase Tools — update today to streamline your Git operations."
ogTitle: "SmartGit 18.2: Unified Log, GitLab merge-request support & enhanced commit workflows"
ogDesc: "SmartGit 18.2 elevates productivity by unifying Working Tree and Log views, supporting GitLab workflows, and bolstering commit and rebase Tools — update today to streamline your Git operations."
weight: 900
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/18_2/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: dfda1082dde2791b31799b479c8765851dc32126
    modified_committed_at: 2025-08-06T08:57:42Z
    blob: 9e224fbd153e00071470ee65f8c742d819001a0e
    sha256: 4a2c63619d2925709baa2f9d765476b08422cf3f50def0b82f23a719a4159cb1
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 18.2は、GitLabおよびGit-LFSユーザー向けのよりスマートなワークフローとより良い統合を導入します：
- 1つの場所に**ワーキングツリーとインデックスを持つ統一されたログビュー**
- マージリクエストとコードレビュー用のネイティブ**GitLab統合**
- 主要な**Git-LFSコマンド**の完全サポート（インストール、ロック/アンロック、設定）
- autosquashとスマートな修正を備えた強化された**インタラクティブリベース**
- 改善された**コミットテンプレート**とブランチビューでのより明確なHEADインジケーター

***

# **機能**

# インデックスとワーキングツリーを持つログ

{{<screenshot src="log-with-index-and-workingtree.png" alt="インデックスとワーキングツリーを持つログ">}}

---

ログウィンドウがファーストクラスのメインウィンドウになり、ワーキングツリーとインデックスを表示し、まだ利用可能な「ワーキングツリー」ウィンドウの事実上すべてのコマンドを提供します（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}）。他のGitクライアントのユーザーは、このシングルビューアプローチをより馴染み深く感じるでしょう。

ワーキングツリーとインデックスは、オンデマンドまたは永続的にHEADコミットに添付されたノードとして表示されます（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}）。

ログをより使いやすくするために、いくつかのコマンドの動作を変更する必要がありました。例えば、Pushコマンドは現在のブランチをプッシュするようになりました（選択したコミットのrefではなく）。これはワーキングツリーウィンドウのものと同様です。

環境設定のユーザーインターフェースセクションで、デフォルトでログウィンドウまたはクラシックなワーキングツリーウィンドウを使用するかどうかを設定できます。 

# 高度なGitLab統合

{{<screenshot src="advanced-gitlab-integration.png" alt="高度なGitLab統合">}}

---

GitLabは日々人気が高まっており、特に自社サーバーで使用されています。GitLabでホストされているリポジトリの場合、SmartGitを使用してマージリクエストの作成、適用、拒否、コメントの追加、編集、表示ができます（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}）。 

# Git-LFSコマンド

{{<screenshot src="git-lfs-commands.png" alt="Git-LFSコマンド">}}

---

SmartGitはすでにGit-LFSで管理されたリポジトリを処理できていました。今では、インストール、追跡ファイルの設定、ロックとアンロックなどの主要なGit-LFSコマンドをサポートしています（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}）。

# インタラクティブリベース：より簡単な修正

{{<screenshot src="rebase-interactive-easier-amending.png" alt="インタラクティブリベース：より簡単な修正">}}

---

インタラクティブリベースは、以下の方法で以前のコミットの修正を簡単にします：

- 同じコミットメッセージを持つコミットをハイライト
- それらのコミットを自動的にスカッシュするコマンドを提供

# コミットメッセージテンプレート

{{<screenshot src="commit-messages-template.png" alt="コミットメッセージテンプレート">}}

---

コミットメッセージテンプレート（commit.templateが設定されている場合）では、SmartGitはコメント行（commit.commentCharで始まる）を異なる表示にするため、どの行が最終的なコミットメッセージの一部になり、どの行が無視されるかが明確になります。 

# ブランチビュー：HEAD refを示す

{{<screenshot src="branches-view-indicate-head-refs.png" alt="ブランチビュー：HEAD refを示す">}}

---

ブランチビューでは、HEADコミットを指しているrefは薄い三角形でマークされます。