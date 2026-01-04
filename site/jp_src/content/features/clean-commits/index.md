---
title: SmartGitクリーンコミット
description: SmartGitのビジュアルツールでコミットを分割、スカッシュ、並べ替え -- レビューと保守が簡単なクリーンなGit履歴を実現。
headerH2: クリーンなコミットを簡単に作成
listTitle: クリーンコミット
imageAltText: クリーンなリポジトリ履歴を維持するためのSmartGitのコミット分割、スカッシュ、並べ替えツール
linkText: クリーンコミットについて詳しく
category:
- feature
headerMessage: 'ビジュアルな**分割**、**スカッシュ**、**並べ替え**ツールで整理されたGit履歴を作成。'
ogTitle: SmartGitの機能 -- 開発者とチームのためのクリーンコミット
ogDesc: 開発者による、開発者のための製品。
weight: 3
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/clean-commits/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: dccfec861e539ddff6af9927e990c214b888c63b
    modified_committed_at: 2025-09-19T11:36:49Z
    blob: 64df2aeae6cc48fa6d7719ccd0b684651ef90287
    sha256: 916ac221d5e9d718a295d9c785de48aaeba630430d1ddd812c0b70f158a59c6d
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

私たちは**クリーンなコミット履歴**の利点を信じています。クリーンなコミット履歴は、コミットのレビュー、後からの変更の理解、コードのメンテナンスに役立ちます。メンテナンスはソフトウェアプロジェクトの[最もコストのかかる部分](https://en.wikipedia.org/wiki/Software_maintenance)であることが多いからです。

SmartGitでは、クリーンなコミット履歴を維持できます：

- **分割**
- **スカッシュ**
- または**並べ替え**

***

{{<youtube-video id="Vw1MiavWnkE">}}

---

**クリーンなコミット**は一般的に以下のように考えられています：
- 適切に構造化されている
- 意味がある
- 理解しやすい

これらは、コミットのレビュー、後からの変更の理解、コードのメンテナンスに役立ちます。メンテナンスはソフトウェアプロジェクトの[最もコストのかかる部分](https://en.wikipedia.org/wiki/Software_maintenance)であることが多いからです。

{{<button-orange url="https://www.youtube.com/watch?v=Vw1MiavWnkE" display="動画：SmartGitでクリーンなコミット">}}


# 実践におけるクリーンなコミット

- 異なるタスクに対する個別（アトミック）なコミット、例えば：
  - 純粋にレイアウトやコードスタイルの変更のためのコミット
  - 共通関数の動作をパラメータ化するための新しいパラメータを導入するコミット
  - 特定の場所で新しく導入されたパラメータを変更するコミット
- デバッグの残骸や他の「ノイズ」がない
- 理解しやすく説明的なコミットメッセージ、多くの場合*なぜ*変更されたかも説明
  - 適切なフォーマット

フィーチャーブランチで集中的に作業している間、このレベルのクリーンさは必ずしも必要ではありません -- 少なくとも適切なツールがあり、ブランチをマージする前にコミットをクリーンアップする場合は。
ここでSmartGitが救いの手を差し伸べます - 適切なツールを提供することで。


# 基本操作

{{<youtube-video id="2iNN99DCgv0">}}

---

Syntevoでは、クリーンで構造化されたコミット履歴がプロフェッショナルなプロジェクトに不可欠であると確信しています。

そのため、SmartGitはクリーンなコミットを形成するための直感的なコマンドを提供しています -- **並べ替え**、**変更**、**分割**、または**スカッシュ**によって。

明確なビジュアルログと組み込みのセーフガードにより、これらの変更を**簡単**かつ**自信を持って**実行できます。

{{<button-orange url="https://www.youtube.com/watch?v=2iNN99DCgv0" display="動画を見る">}}


# コミット履歴の変更

{{<youtube-video id="coxXtoV6vjM">}}

---

時には、最新のコミットだけでなく、以前のコミットでミスが発生することがあります。

SmartGitを使用すると、**フィーチャーブランチ**上の**非HEADコミット**を自信を持って変更できます -- タイプミスの修正、ファイル内容の更新、または以前の作業からのコミットメッセージの調整が可能です。

{{<button-orange url="https://www.youtube.com/watch?v=coxXtoV6vjM" display="動画を見る">}}

# コミットの分割：コミット履歴をクリーンアップする方法

{{<youtube-video id="0ahjUb7tlbw">}}

---

フィーチャーブランチでは、関連のない変更が同じコミットに含まれてしまうことがあります。

SmartGitを使用すると、**非HEADコミット**を簡単に小さく焦点を絞ったコミットに**分割**できます -- 安全かつビジュアルに。

SmartGitの**分割ツールとセーフガード**は、履歴をクリーンで意味のあるものに保つのに役立ちます。

{{<button-orange url="https://www.youtube.com/watch?v=0ahjUb7tlbw" display="動画を見る">}}
