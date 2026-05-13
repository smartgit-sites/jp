---
title: "分散レビュー アドオン"
headerH1: "SmartGit 分散レビュー アドオン"
headerH2: "サーバーを使用しないローカル コード レビュー。"
listTitle: "分散レビュー アドオン"
imageAltText: "SmartGit の Distributed Reviews アドオンにより、サーバーに依存せずにオフライン コード レビューと Git ベースのフィードバック共有が可能になります。"
linkText: "分散レビュー アドオンの詳細"
category: ["feature"]
headerMessage: "**オフライン**でコードをレビューし、**分散レビュー**を使用してサーバーなしでフィードバックを共有します。"
description: "Distributed Reviews アドオンを使用すると、GitHub や GitLab を必要とせずに、ローカルおよびオフラインでコードをレビューできます。高速かつ安全で、Git ワークフローに完全に統合されています。"
ogTitle: "SmartGit 分散アドオン -- サーバーを使用しないローカル コード レビュー"
ogDesc: "SmartGit の Distributed Reviews Add-on を使用して、サーバーを使用せずにコードをローカルでレビューします。高速、安全、オフラインを維持します。"
weight: 8
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/distributed-reviews/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: d71ee20cdc8ae3d9ad44df2d57020025cc9e853a
    sha256: d1e254c965427c2b21b451766e282cbfd7c1f909c473de83e038098aecbd1812
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
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


# マークダウンサポート

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

