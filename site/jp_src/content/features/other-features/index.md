---
title: その他の機能
headerH2: Gitワークフローを効率化する強力な追加機能
listTitle: その他の機能
imageAltText: SmartGitの追加機能。コンフリクトソルバー、JIRA連携、Gitワークフロー自動化のための外部ツールを含む。
linkText: SmartGitの追加機能について詳しく
category:
- feature
headerMessage: 'あらゆるGitタスクを効率化する**強力な追加機能**と**自動化**を発見。'
description: 生産性を向上させ、複雑なGitタスクを簡素化するSmartGitの強力な機能を発見 -- 今すぐお試しください！
ogTitle: SmartGitの強力な追加機能でGitワークフローを効率化。
ogDesc: 生産性を向上させ、複雑なGitタスクを簡素化するSmartGitの強力な機能を発見 -- 今すぐお試しください！
weight: 100
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/other-features/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: dccfec861e539ddff6af9927e990c214b888c63b
    modified_committed_at: 2025-09-19T11:36:49Z
    blob: fc86a2be13a0d66790685ea257e52d4bf5047db4
    sha256: b289ab15effb0de2514179c798c96698992aadc7e959016918196b8c2d6358fc
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

SmartGitの**「その他の機能」**は、ワークフローを簡素化し、統合を改善し、日常的なGit使用を強化するツールでコア機能を拡張します：
- 直感的なマージと焦点を絞ったコミット追跡のための組み込み**コンフリクトソルバー**と**ジャーナルビュー**
- 効率的なイシューとコードレビューワークフローのための**JIRA**、**GitLab**、**Bitbucket**、**Gerrit**とのシームレスな統合
- コミットメッセージの**スペルチェック**や**Git LFS**サポートなどのスマート機能
- 操作を自動化・簡素化する**外部ツール**統合と**オンデマンドスタッシュ**
- 個人開発者とチームベースのワークフローの両方を効率的にサポートするよう設計

***

# コンフリクトソルバー

{{<screenshot src="conflict-solver.png" alt="SmartGitの組み込み3ウェイマージコンフリクトソルバー。包括的なマージコンフリクト解決のためのベースファイル変更を表示">}}

---

コンフリクトソルバーは、コンフリクトの解決を支援する組み込みの3ウェイマージツールです。

複雑なコンフリクトで独立した変更をより良く理解するために、ベースファイルの変更も表示できます。

{{< link url="https://www.smartgit.dev/features/conflict-resolution/" display="詳細を見る">}}


# ジャーナル - 気が散らないログ

{{<screenshot src="journal-distraction-free-log.png" alt="SmartGitのジャーナルビュー。関連のないコミットに気を散らされることなく、現在のブランチと1つの他のブランチのGitコミット履歴を表示">}}

---

「ジャーナル」ビューは、現在のブランチ、その追跡ブランチ、および1つのオプションの補助ブランチのコミットを表示します。

関連のないコミットやあまり重要でないコミット接続に気を散らされることなく、現在のブランチでの作業に集中するのに役立ちます。マージ、チェリーピック、リセットなど、ほとんどのブランチ関連コマンドがジャーナルで動作します。

リポジトリの履歴をより広く見るために、フル機能のログも引き続き利用できます。


# イシューリンク

{{<screenshot src="issue-linking.png" alt="SmartGitのイシュートラッカー統合。bugtraqサポートでコミットメッセージのイシューIDをイシュートラッカーリンクに変換">}}

---

SmartGitは、SVNのbugtraq:*プロパティと同様に設定可能なイシュートラッカーIDからURLへの変換をサポートしています。詳細は{{< link url="https://github.com/mstrap/bugtraq" display="github.com/mstrap/bugtraq" >}}で確認できます。 


# JIRA統合

{{<screenshot src="jira-integration.png" alt="SmartGitのAtlassian JIRA統合。オープンイシューをコミットメッセージとして選択し、自動的にイシューを解決">}}

---

ファイルをコミットする際、AtlassianのJIRAからオープンイシューを選択してコミットメッセージとして使用できます。

コミットをプッシュする際、SmartGitは影響を受けるコミットを判断し、JIRAで特定のバージョンとして解決することを提案します。 


# コミットメッセージのスペルチェッカー

{{<screenshot src="spell-checker-for-commit-messages.png" alt="SmartGitの組み込みGitコミットメッセージスペルチェッカー。複数言語辞書サポート">}}

---

SmartGitにはUS-English辞書が同梱されていますが、異なる辞書を使用するよう設定できます。SmartGitはOpenOfficeやLibreOfficeと同じ辞書ファイル形式をサポートしています。複数の辞書が設定されている場合、最も適切なものが自動的に使用されます。 


# Gerritへのプッシュ

{{<screenshot src="push-to-gerrit.png" alt="SmartGitのGerrit統合。コードレビューワークフローのための自動ブランチ検出とプッシュ機能">}}

---

Gerritへのプッシュは、Gerritサーバー上で現在のブランチ``<branch>をrefs/for/<branch>``にプッシュする簡単な方法を提供します。この操作は、SmartGitがリモートの1つが実際にGerritに接続されていることを検出した場合にのみ利用可能になります。 


# BitBucketとAtlassian Stash

{{<screenshot src="bitbucket-and-atlassian-stash.png" alt="SmartGitのBitbucketとAtlassian Stash統合。GitHubと同様のプルリクエスト管理とコメント機能">}}

---

BitBucketとAtlassian Stashは、GitHubと同様にプルリクエストとコメントがサポートされるようになりました。


# GitLabホスティングプロバイダー

{{<screenshot src="gitlab-hosting-provider.png" alt="SmartGitのGitLab統合。gitlab.comまたはプライベートGitLabインストールからのリポジトリクローンとアカウント管理">}}

---

GitLabリポジトリを簡単にクローンできます。{{< link url="https://gitlab.com" disply="gitlab.com" >}}アカウントまたはプライベートGitLabインストールを使用できます。


# Git-LFSサポート

{{<screenshot src="support-for-git-lfs.png" alt="SmartGitのGit LFSサポート。リポジトリ内のラージファイルストレージ追跡ファイルのステータスと管理を表示">}}

---

GIT-LFS管理ファイルのステータスが表示されます。


# 外部ツール

{{<screenshot src="external-tools.png" alt="SmartGitの外部ツール設定。BranchesビューとログGraph内のカスタムコミット操作のための変数サポート">}}

---

外部ツールは**コミット**に対して動作するよう設定できます。そのようなツールは、**Branches**ビューとログ**Graph**の両方で利用可能になります。ファイル名やディレクトリ名を尋ねるための新しい変数が利用可能で、ツールを呼び出す前にオプションでカスタマイズ可能な確認ダイアログを表示できます。 


# オンデマンドスタッシュ

{{<screenshot src="stash-on-demand.png" alt="SmartGitの自動スタッシュ機能。ローカルの変更を一時的に保存してプル/チェックアウトのコンフリクトを解決">}}

---

ローカルの変更が原因でプルやブランチのチェックアウトが失敗した場合、変更を簡単にスタッシュして、コマンドが正常に実行された後に再度適用できます。

