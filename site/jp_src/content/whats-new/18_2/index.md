---
title: バージョン 18.2
headerH2: SmartGit 18.2 の主要な改善点
listTitle: バージョン 18.2
imageAltText: 'SmartGit 18.2: 統一されたログ、GitLabマージリクエストサポート & 強化されたコミットワークフロー'
linkText: SmartGit バージョン 18.2 の詳細
category:
- feature
headerMessage: '18.2で**ログ**と**ワーキングツリー**ビューを統一し、**GitLabマージリクエスト**を処理。'
description: SmartGit 18.2は、ワーキングツリーとログビューの統一、GitLabワークフローのサポート、コミットとリベースツールの強化により生産性を向上 — Git操作を効率化するために今すぐアップデート。
ogTitle: 'SmartGit 18.2: 統一されたログ、GitLabマージリクエストサポート & 強化されたコミットワークフロー'
ogDesc: SmartGit 18.2は、ワーキングツリーとログビューの統一、GitLabワークフローのサポート、コミットとリベースツールの強化により生産性を向上 — Git操作を効率化するために今すぐアップデート。
weight: 900
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/18_2/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 8cf4b90bac10de7a2eb94538a587ba5cae122b22
    modified_committed_at: 2025-08-05T21:34:17Z
    blob: 9e224fbd153e00071470ee65f8c742d819001a0e
    sha256: 1fc0c12ba24cdf4e73021266914de1955af834aa223e984fbb532546531d00b7
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
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