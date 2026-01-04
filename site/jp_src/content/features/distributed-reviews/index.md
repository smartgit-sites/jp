---
title: 分散レビューアドオン
headerH1: SmartGit分散レビューアドオン
headerH2: サーバー不要のローカルコードレビュー。
listTitle: 分散レビューアドオン
imageAltText: SmartGitの分散レビューアドオン。サーバー依存なしでオフラインコードレビューとGitベースのフィードバック共有を実現。
linkText: 分散レビューアドオンについて詳しく
category:
- feature
headerMessage: '**分散レビュー**を使用して**オフライン**でコードをレビューし、サーバーなしでフィードバックを共有。'
description: 分散レビューアドオンにより、GitHubやGitLabなしでローカルおよびオフラインでコードをレビュー可能。高速、安全、Gitワークフローに完全統合。
ogTitle: SmartGit分散アドオン -- サーバー不要のローカルコードレビュー
ogDesc: SmartGitの分散レビューアドオンでサーバーなしでローカルにコードをレビュー。高速、安全、オフライン対応。
weight: 8
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/distributed-reviews/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: dccfec861e539ddff6af9927e990c214b888c63b
    modified_committed_at: 2025-09-19T11:36:49Z
    blob: 5193f9cc9967731ecf26d7848484aa86b4036dbb
    sha256: f0e53f5464a0963a0a7045890d4c7481a89fddb3dc2eb15691262ba1dc431b27
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

オフラインでもコードレビューを止める必要はありません。**分散レビュー**アドオンでフィードバックを継続：

- 完全に**オフライン**で変更をレビュー
- **プルリクエスト**でフィードバックを共有
- 既存の**Git**ワークフローに統合

***

# 分散レビューアドオン

{{<youtube-video id="8eSjN3B6lm0">}}

---

SmartGitはコードレビューを次のレベルへ：Gitベースの分散型で。**ローカル**、**オフライン**、そして**高速**。

分散レビューアドオンは、サーバー側でレビュープロセスを支援するGitHub、GitLab、または類似のバックエンドがない状況向けに設計されています。


# SmartGitダウンロードに含まれています

分散レビューアドオンは{{< link url="https://www.smartgit.dev/download/" display="SmartGitダウンロード" >}}の一部です。

通常のSmartGit評価版で評価できます。
通常使用の場合は、SmartGitライセンスを注文する際にアドオンをオプションとして注文する必要があります。

{{< link url="https://docs.syntevo.com/" display="詳細については、ドキュメントを参照してください" >}}

{{<button-orange url="https://www.smartgit.dev/download/" display="分散レビューアドオンをダウンロード">}}


# プルリクエストによるコラボレーション

{{<screenshot src="collaboration-by-pull-requests.png" alt="SmartGitのBranchesビュー。プルリクエストワークフローを表示">}}

---

**プルリクエスト**を作成して、別のチームメンバー（担当者）にレビュー後にコミットを特定のターゲットブランチに**マージ**するよう依頼します。担当者は**コメント**、**承認**（または**却下**）し、最終的にプルリクエストを**統合**（マージ）できます。


# ローカル、オフラインレビュー

{{<screenshot src="local-offline-reviewing.png" alt="SmartGitのCommentsビューでの様々な詳細表示を説明">}}

---

**分散レビュー**のメタデータはGitリポジトリ自体に保存され、他のブランチと一緒にプッシュおよびプルされます：**オフライン**で作業し、コメントを適用したり破棄したりして、最終的に**整理された**、**一貫性のある**レビューをプッシュできます。


# Markdownサポート

{{<screenshot src="markdown-support.png" alt="SmartGitのMarkdown対応コメントシステム。リッチなコードレビューフォーマットのためのGitHub flavored markdownに対応">}}

---

すべての種類のコメントで、**markdown**（GitHubのflavored markdownとほぼ同一）を使用できます。


# インラインコメントと返信

{{<screenshot src="inline-comments-and-replies.png" alt="SmartGitのスレッド化されたインラインコメントシステム。詳細なオフラインコードレビュー用">}}

---

**コメント**は**プルリクエスト**、一般的な**コミット**、および変更されたファイルの**個々の行**に適用できます。コメントとその**返信**の関係は追跡され、スレッド表示されます。


# サーバー側のメール通知（オプション）

必要に応じて、分散レビューデータへの変更を追跡する軽量なサーバー側コンポーネントをインストールすることで、（プルリクエストに関連する変更の）メール通知を有効にできます。

{{<button-orange url="https://www.smartgit.dev/download/" display="サーバー側コンポーネントをダウンロード">}}

