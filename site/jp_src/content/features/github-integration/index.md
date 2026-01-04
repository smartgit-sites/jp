---
title: GitHub連携
headerH1: SmartGit GitHub連携
headerH2: デスクトップでGitHub
listTitle: GitHub連携
imageAltText: リポジトリのクローン、プルリクエストの作成、コードレビューの管理をデスクトップから直接行えるSmartGitのGitHub連携インターフェース。
linkText: 分散レビューアドオンについて詳しく
category:
- feature
headerMessage: 'SmartGit内で直接**GitHubプルリクエスト**と**レビュー**を処理。'
description: 'SmartGitでGitHubワークフローを効率化：GitHubからリポジトリをクローン、プルリクエストを作成、レビューとコメントを追加。'
ogTitle: SmartGit GitHub連携をデスクトップで
ogDesc: 'SmartGitでGitHubワークフローを効率化：GitHubからリポジトリをクローン、プルリクエストを作成、レビューとコメントを追加。'
weight: 9
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/github-integration/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: dccfec861e539ddff6af9927e990c214b888c63b
    modified_committed_at: 2025-09-19T11:36:49Z
    blob: 746a8d3fa70cdcdc21d063ab939ed56d671be246
    sha256: 5872ab5cd44ae8fe96fc68221db0806cdd3e5c3b8d8c647424f6608485790a73
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

GitHubワークフローをデスクトップで実現。SmartGitでリポジトリとプルリクエストをシームレスに管理：

- GitHubプロジェクトを**クローン**して閲覧
- プルリクエストを作成して**レビュー**
- **GitHub Enterprise**にも対応

***

# デスクトップでGitHub

{{<youtube-video id="ll7-1GpTj38">}}

---

SmartGitはGitHub向けのGitワークフローを効率化します：GitHubからGitリポジトリをクローン、**プルリクエスト**を作成、**レビュー**して**コメントを追加**。

{{<button-orange url="https://www.smartgit.dev/purchase/license/" display="購入">}}
{{<button-orange url="https://www.smartgit.dev/download/" display="ダウンロード">}}


# プルリクエストの管理

{{<screenshot src="manage-pull-requests.png" alt="SmartGitのBranchesビュー。プルリクエストのマージ、拒否、またはローカルデータの削除のコンテキストメニューを表示">}}

---

**コントリビューター**は変更をコミットした直後にプルリクエストを**作成**して送信できます。
**メンテナー**はプルリクエストをフェッチし、**ローカルでレビュー**、**マージ**、**コメント**、または拒否できます。


# コミットのレビューとコメント

{{<screenshot src="review-and-comment-commits.png" alt="SmartGitのChangesビュー。インラインコードレビューコメントを表示">}}

---

**レビュアー**はコミットをローカルで閲覧し、**個々の行にコメント**してコメントを管理できます。
**開発者**は**自分の**コメントを確認して処理したり、レビュアーに返信して議論を続けたりできます。


# 自分のリポジトリや組織のリポジトリをクローン

{{<screenshot src="clone-your-or-your-orgs-repositories.png" alt="SmartGitのGitHubリポジトリブラウザ。個人および組織のリポジトリをデスクトップインターフェースから直接クローン">}}

---

クローンでは、自分のリポジトリと所属している組織のリポジトリが一覧表示されます。このリストから簡単に選択できます。


# GitHub Enterpriseサポート

{{<screenshot src="github-enterprise-support.png" alt="SmartGitのGitHub Enterprise設定パネル。複数のアカウントとプライベートGitHubインスタンスをサポート">}}

---

すべてのGitHub機能は、会社の{{< link url="https://github.com/enterprise" display="GitHub Enterprise" >}}インスタンスでも動作します。**github.com**用のアカウントと、接続している各**GitHub Enterprise**インスタンス用のアカウントを持つことができます。
