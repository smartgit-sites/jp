---
title: "SmartGit Clean Commits"
description: "Split, squash, and reorder commits with SmartGit's visual tools -- for a clean Git history that's easy to review and maintain."
headerH2: "Create Clean Commits Easily"
listTitle: "Clean Commits"
imageAltText: "SmartGit's tools for splitting, squashing, and reordering Git commits to maintain clean repository history"
linkText: "More about Clean Commits"
category: ["feature"]
headerMessage: "Shape a tidy Git history using visual **split**, **squash**, and **reorder** tools."
ogTitle: "SmartGit Features -- Clean Commits for Developers and Teams"
ogDesc: "Built by developers, for developers."
weight: 3
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/clean-commits/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: f31c915f1d3a02f7add866a71b560c0329c707f2
    sha256: 0ad02f41f1c46a9a230a6ee505441699e985d72c7b7bb8d1fa00bef0cdfb22b9
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
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
