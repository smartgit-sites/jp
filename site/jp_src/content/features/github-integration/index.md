---
title: "GitHubの統合"
headerH1: "SmartGit GitHub の統合"
headerH2: "デスクトップ上の GitHub"
listTitle: "GitHubの統合"
imageAltText: "リポジトリのクローン作成、プル リクエストの作成、コード レビューの管理をデスクトップから直接行うための SmartGit の GitHub 統合インターフェイス。"
linkText: "分散レビュー アドオンの詳細"
category: ["feature"]
headerMessage: "**GitHub プル リクエスト** と **レビュー** を SmartGit 内で直接処理します。"
description: "SmartGit は、GitHub のワークフローを合理化します。GitHub からリポジトリのクローンを作成し、プル リクエストを作成し、レビューしてコメントを追加します。"
ogTitle: "デスクトップ上の SmartGit GitHub 統合"
ogDesc: "SmartGit は、GitHub のワークフローを合理化します。GitHub からリポジトリのクローンを作成し、プル リクエストを作成し、レビューしてコメントを追加します。"
weight: 9
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/github-integration/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: b84650c18d8c8ef3a7ca60f82831627113368c73
    modified_committed_at: 2026-01-27T08:43:48Z
    blob: 1222475911dfb1f0a557123f4b506dc326cab242
    sha256: da998a80b7417c40c47b12fccbe89a1ab5c3b3ff5f7dbf21c04e2d6ce3248f89
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
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


# GitHub エンタープライズサポート

{{<screenshot src="github-enterprise-support.png" alt="SmartGitのGitHub Enterprise設定パネル。複数のアカウントとプライベートGitHubインスタンスをサポート">}}

---

すべてのGitHub機能は、会社の{{< link url="https://github.com/enterprise" display="GitHub エンタープライズ" >}}インスタンスでも動作します。**github.com**用のアカウントと、接続している各**GitHub Enterprise**インスタンス用のアカウントを持つことができます。
