---
title: "SmartGit のクリーンなコミット"
description: "SmartGit の視覚的なツールでコミットを分割、スカッシュ、並べ替え。レビューしやすく保守しやすい、クリーンな Git 履歴を作れます。"
headerH2: "クリーンなコミットを簡単に作成"
listTitle: "クリーンなコミット"
imageAltText: "Git コミットを分割、スカッシュ、並べ替えて、リポジトリ履歴をクリーンに保つ SmartGit のツール"
linkText: "クリーンなコミットの詳細"
category: ["feature"]
headerMessage: "**分割**、**スカッシュ**、**並べ替え** を視覚的に行い、整った Git 履歴を作れます。"
ogTitle: "SmartGit の機能 -- 開発者とチームのためのクリーンコミット"
ogDesc: "開発者によって開発者のために構築されました。"
weight: 3
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/clean-commits/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: f31c915f1d3a02f7add866a71b560c0329c707f2
    sha256: 0ad02f41f1c46a9a230a6ee505441699e985d72c7b7bb8d1fa00bef0cdfb22b9
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

私たちは**クリーンなコミット履歴**には大きな価値があると考えています。コミットのレビュー、後からの変更内容の理解、コードの保守に役立つからです。ソフトウェアプロジェクトでは、保守が[最もコストのかかる部分](https://en.wikipedia.org/wiki/Software_maintenance)になることも少なくありません。

SmartGit なら、次の操作でクリーンなコミット履歴を保てます。

- コミットの**分割**
- コミットの**スカッシュ**
- コミットの**並べ替え**

***

{{<youtube-video id="Vw1MiavWnkE">}}

---

**クリーンなコミット**とは一般に、次のようなコミットを指します。
- 適切に構造化されている
- 意味がある
- 理解しやすい

こうしたコミットは、レビュー、後からの変更内容の理解、コードの保守に役立ちます。ソフトウェアプロジェクトでは、保守が[最もコストのかかる部分](https://en.wikipedia.org/wiki/Software_maintenance)になることも少なくありません。

{{<button-orange url="https://www.youtube.com/watch?v=Vw1MiavWnkE" display="動画：SmartGit でクリーンなコミット">}}


# 実務でのクリーンなコミット

- タスクごとに分かれた個別の（アトミックな）コミット。例えば：
  - レイアウトやコードスタイルだけを変更するコミット
  - 共通関数の動作をパラメータ化するために新しい引数を導入するコミット
  - 導入した引数を特定の呼び出し箇所で使うように変更するコミット
- デバッグの残骸や、その他の「ノイズ」がない
- わかりやすく説明的なコミットメッセージ。多くの場合、*なぜ*変更したのかも説明する
  - 適切なフォーマット

フィーチャーブランチで集中して作業している間は、常にこのレベルの整った履歴が必要とは限りません。適切なツールがあり、ブランチをマージする前にコミットを整理できるならなおさらです。
SmartGit は、そのために必要なツールを提供します。


# 基本操作

{{<youtube-video id="2iNN99DCgv0">}}

---

Syntevoでは、クリーンで構造化されたコミット履歴がプロフェッショナルなプロジェクトに不可欠であると確信しています。

そのため SmartGit は、**並べ替え**、**編集**、**分割**、**スカッシュ**によってクリーンなコミットを作るための直感的なコマンドを提供しています。

見やすいビジュアルログと組み込みのセーフガードにより、こうした履歴変更を**簡単**かつ**安心して**実行できます。

{{<button-orange url="https://www.youtube.com/watch?v=2iNN99DCgv0" display="動画を見る">}}


# コミット履歴の変更

{{<youtube-video id="coxXtoV6vjM">}}

---

時には、最新のコミットだけでなく、以前のコミットでミスが発生することがあります。

SmartGit なら、**フィーチャーブランチ**上の**非 HEAD コミット**も安心して編集できます。タイプミスの修正、ファイル内容の更新、以前の作業で書いたコミットメッセージの調整が可能です。

{{<button-orange url="https://www.youtube.com/watch?v=coxXtoV6vjM" display="動画を見る">}}

# コミットの分割：コミット履歴をクリーンアップする方法

{{<youtube-video id="0ahjUb7tlbw">}}

---

フィーチャーブランチでは、関連のない変更が同じコミットに含まれてしまうことがあります。

SmartGit なら、**非 HEAD コミット**を小さく焦点の定まったコミットへ簡単に**分割**できます。しかも安全に、視覚的に行えます。

SmartGit の**分割ツールとセーフガード**は、履歴をクリーンで意味のある状態に保つ助けになります。

{{<button-orange url="https://www.youtube.com/watch?v=0ahjUb7tlbw" display="動画を見る">}}
