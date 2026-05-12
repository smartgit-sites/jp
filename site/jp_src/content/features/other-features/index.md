---
title: "その他の機能"
headerH2: "Git ワークフローを合理化する強力な追加機能"
listTitle: "その他の機能"
imageAltText: "SmartGit の追加機能には、競合ソルバー、JIRA 統合、強化された Git ワークフロー自動化のための外部ツールが含まれます。"
linkText: "SmartGit の追加機能の詳細"
category: ["feature"]
headerMessage: "あらゆる Git タスクを効率化する **強力な追加機能** と **自動化** をご覧ください。"
description: "生産性を向上させ、複雑な Git タスクを簡素化する強力な SmartGit 機能を発見し、今すぐ試してみてください。"
ogTitle: "Git ワークフローを合理化する SmartGit の強力な追加機能。"
ogDesc: "生産性を向上させ、複雑な Git タスクを簡素化する強力な SmartGit 機能を発見し、今すぐ試してみてください。"
weight: 100
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/other-features/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: 6ee6991e61d3a7a69bc035892d8aaaab5d99bd4e
    sha256: 290d9f4628e4746593dec338355b148cd0e284ce198b4e62fea4314397ec8029
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGitの**「その他の機能」**は、ワークフローを簡素化し、統合を改善し、日常的なGit使用を強化するツールでコア機能を拡張します：
- 直感的なマージと焦点を絞ったコミット追跡のための組み込み**コンフリクトソルバー**と**ジャーナルビュー**
- 効率的なイシューとコードレビューワークフローのための**JIRA**、**GitLab**、**Bitbucket**、**Gerrit**とのシームレスな統合
- コミットメッセージの**スペルチェック**や**Git LFS**サポートなどのスマート機能
- 操作を自動化・簡素化する**外部ツール**統合と**オンデマンドスタッシュ**
- 個人開発者とチームベースのワークフローの両方を効率的にサポートするよう設計

***

# コンフリクトソルバー

{{<screenshot alt="SmartGitの組み込み3ウェイマージコンフリクトソルバー。包括的なマージコンフリクト解決のためのベースファイル変更を表示" src="conflict-solver.png">}}

---

コンフリクトソルバーは、コンフリクトの解決を支援する組み込みの3ウェイマージツールです。

複雑なコンフリクトで独立した変更をより良く理解するために、ベースファイルの変更も表示できます。

{{< link url="https://www.smartgit.dev/features/conflict-resolution/" display="詳細を見る" >}}


# ジャーナル - 気が散らないログ

{{<screenshot alt="SmartGitのジャーナルビュー。関連のないコミットに気を散らされることなく、現在のブランチと1つの他のブランチのGitコミット履歴を表示" src="journal-distraction-free-log.png">}}

---

「ジャーナル」ビューは、現在のブランチ、その追跡ブランチ、および1つのオプションの補助ブランチのコミットを表示します。

関連のないコミットやあまり重要でないコミット接続に気を散らされることなく、現在のブランチでの作業に集中するのに役立ちます。マージ、チェリーピック、リセットなど、ほとんどのブランチ関連コマンドがジャーナルで動作します。

リポジトリの履歴をより広く見るために、フル機能のログも引き続き利用できます。


# イシューリンク

{{<screenshot alt="SmartGitのイシュートラッカー統合。bugtraqサポートでコミットメッセージのイシューIDをイシュートラッカーリンクに変換" src="issue-linking.png">}}

---

SmartGitは、SVNのbugtraq:*プロパティと同様に設定可能なイシュートラッカーIDからURLへの変換をサポートしています。詳細は{{< link url="https://github.com/mstrap/bugtraq" display="github.com/mstrap/bugtraq" >}}で確認できます。


# JIRA統合

{{<screenshot alt="SmartGitのAtlassian JIRA統合。オープンイシューをコミットメッセージとして選択し、自動的にイシューを解決" src="jira-integration.png">}}

---

ファイルをコミットする際、AtlassianのJIRAからオープンイシューを選択してコミットメッセージとして使用できます。

コミットをプッシュする際、SmartGitは影響を受けるコミットを判断し、JIRAで特定のバージョンとして解決することを提案します。


# コミットメッセージのスペルチェッカー

{{<screenshot alt="SmartGitの組み込みGitコミットメッセージスペルチェッカー。複数言語辞書サポート" src="spell-checker-for-commit-messages.png">}}

---

SmartGitにはUS-English辞書が同梱されていますが、異なる辞書を使用するよう設定できます。SmartGitはOpenOfficeやLibreOfficeと同じ辞書ファイル形式をサポートしています。複数の辞書が設定されている場合、最も適切なものが自動的に使用されます。


# Gerritへのプッシュ

{{<screenshot alt="SmartGitのGerrit統合。コードレビューワークフローのための自動ブランチ検出とプッシュ機能" src="push-to-gerrit.png">}}

---

Gerritへのプッシュは、Gerritサーバー上で現在のブランチ``<branch>を参照/for/<branch>``にプッシュする簡単な方法を提供します。この操作は、SmartGitがリモートの1つが実際にGerritに接続されていることを検出した場合にのみ利用可能になります。


# BitBucketとAtlassian Stash

{{<screenshot alt="SmartGitのBitbucketとAtlassian Stash統合。GitHubと同様のプルリクエスト管理とコメント機能" src="bitbucket-and-atlassian-stash.png">}}

---

BitBucketとAtlassian Stashは、GitHubと同様にプルリクエストとコメントがサポートされるようになりました。


# GitLabホスティングプロバイダー

{{<screenshot alt="SmartGitのGitLab統合。gitlab.comまたはプライベートGitLabインストールからのリポジトリクローンとアカウント管理" src="gitlab-hosting-provider.png">}}

---

GitLabリポジトリを簡単にクローンできます。{{< link url="https://gitlab.com" disply="gitlab.com" >}}アカウントまたはプライベートGitLabインストールを使用できます。


# Git-LFSサポート

{{<screenshot alt="SmartGitのGit LFSサポート。リポジトリ内のラージファイルストレージ追跡ファイルのステータスと管理を表示" src="support-for-git-lfs.png">}}

---

GIT-LFS管理ファイルのステータスが表示されます。


# 外部ツール

{{<screenshot alt="SmartGitの外部ツール設定。BranchesビューとログGraph内のカスタムコミット操作のための変数サポート" src="external-tools.png">}}

---

外部ツールは**コミット**に対して動作するよう設定できます。そのようなツールは、**Branches**ビューとログ**Graph**の両方で利用可能になります。ファイル名やディレクトリ名を尋ねるための新しい変数が利用可能で、ツールを呼び出す前にオプションでカスタマイズ可能な確認ダイアログを表示できます。


# オンデマンドスタッシュ

{{<screenshot alt="SmartGitの自動スタッシュ機能。ローカルの変更を一時的に保存してプル/チェックアウトのコンフリクトを解決" src="stash-on-demand.png">}}

---

ローカルの変更が原因でプルやブランチのチェックアウトが失敗した場合、変更を簡単にスタッシュして、コマンドが正常に実行された後に再度適用できます。

</screenshot></screenshot></screenshot></screenshot></screenshot></branch></branch></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>