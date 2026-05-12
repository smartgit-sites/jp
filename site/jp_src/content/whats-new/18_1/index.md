---
title: "Version 18.1"
headerH2: "Major Improvements in SmartGit 18.1"
listTitle: "Version 18.1"
imageAltText: "SmartGit 18.1 with enhanced log visualization, built-in bisect, and improved worktree management"
linkText: "More about SmartGit Version 18.1"
category: ["feature"]
headerMessage: "Experience a smarter **log graph**, built-in **bisect**, and flexible **worktrees** with 18.1."
description: "SmartGit 18.1 refines commit visualization, comparison workflows, bisect assistance, and worktree usability—update now to work smarter and faster with Git."
ogTitle: "SmartGit 18.1: Smarter log graph, built‑in bisect, better worktree & ignore handling"
ogDesc: "SmartGit 18.1 refines commit visualization, comparison workflows, bisect assistance, and worktree usability—update now to work smarter and faster with Git."
weight: 1000
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/18_1/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: 8bc59b523c906b8e41d1a4ac19914b65cdea4ba2
    sha256: c4d30a9ef187785705ddf568e8b3036b74b95709287233115c8ebb77f15721b8
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 18.1は、より良い視覚化、よりスマートな比較、改善されたツールで日常のGitワークフローを強化します：
- より明確なrefとリベースの視覚化のための**色分けされたログラフ**
- 改善された比較アルゴリズムによるよりスマートな**インライン差分**
- 壊れたコミットをより速く特定するための組み込み**ビジュアルbisect**
- 直接**ワークツリーを作成およびプルーン**するUIサポート
- 選択可能で編集可能なignoreファイルによるより簡単な**.gitignore管理**

***

# **機能**

# 刷新されたログとジャーナル

{{<screenshot src="reworked-log-and-journal.png" alt="SmartGit 18.1 改善されたパフォーマンスと専用のref色付けを備えた再設計されたログ">}}

---

ログとジャーナルが書き直され、特に大きなログで**パフォーマンスが向上**しました。

デフォルトのログ色付けは、**選択された各refに専用の色**を使用するようになりました（多すぎる場合を除く）。これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}からの優先度の高いトピックの1つでした。 

# ログ：比較を見つけやすく

{{<screenshot src="log-easier-to-find-compare.png" alt="SmartGit 18.1 ユーザーフレンドリーなインターフェース改善による簡略化されたブランチ比較アクセス">}}

---

ブランチとHEAD間の比較を新規ユーザーが見つけやすくしました。 

# 刷新された比較

{{<screenshot src="reworked-compare.png" alt="SmartGit 18.1 改善されたインライン変更検出とパフォーマンスを備えた強化された比較アルゴリズム">}}

---

比較アルゴリズムが改善され、ブロック全体でインラインの変更を検出します（以前のバージョンのように行単位だけではなく）。これは**より速く**動作し、例えば再フォーマットされたコードブロックで**より良い結果**を提供します。 

# Bisect

{{<screenshot src="bisect.png" alt="SmartGit 18.1 効率的なバグ導入コミット特定のための組み込みbisect機能">}}

---

SmartGitは、bisectコマンドをサポートすることで、バグを導入したコミットの検索をより簡単にしました。これも{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}で頻繁にリクエストされた機能です。 

# 選択可能なIgnoreファイル

{{<screenshot src="selectable-ignore-file.png" alt="SmartGit 18.1 選択可能なターゲットgitignoreファイルオプションを備えたIgnoreコマンド">}}

---

Ignoreコマンドで、ignoreパターンを追加する場所を選択できるようになりました。これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}で頻繁にリクエストされていました。 

# Ignoreの編集

{{<screenshot src="edit-ignore.png" alt="SmartGit 18.1 無視されたファイルのパターンソース識別を備えた直接gitignore編集">}}

---

無視されたファイルについて、どのignoreファイルに一致するパターンが含まれているかを簡単に確認できます。SmartGitでignoreファイルを直接編集できるようになりました。

# インデックスとワーキングツリーファイル

{{<screenshot src="index-workingtree-files.png" alt="SmartGit 18.1 クイック切り替えオプションを備えた専用のインデックスとワーキングツリーファイルビュー">}}

---

インデックスとワーキングツリーファイル用の専用リストが欲しかった方は、**表示** | **インデックスのみ**と**表示** | **ワーキングツリーのみ**を使用して両方をすばやく切り替えることができます。これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエストされていました。

すべてのファイルを表示するデフォルト表示に戻すには、**表示** | **混合**を使用します。 

# ワークツリーコマンド

{{<screenshot src="worktree-commands.png" alt="SmartGit 18.1 既存ブランチ用の作成およびプルーンコマンドを備えたワークツリー管理">}}

---

SmartGitは既存のローカルブランチ用のワークツリーを作成し、古いワークツリーをプルーンできるようになりました。

# アクションを検索、オブジェクトを検索

{{<screenshot src="find-action-find-object.png" alt="SmartGit 18.1 メニュー項目、リポジトリ、ブランチ、コミット用のキーボードフレンドリーな検索">}}

---

これらのコマンドは、キーボード好きなユーザーがメニュー項目をすばやく見つけたり、ショートカットを学んだり、リポジトリを開いたり、ブランチを切り替えたり、コミットのログを表示したりするのに最適です。

これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエストされていました。

# ツールのエクスポートとインポート

{{<screenshot src="tools-export-import.png" alt="SmartGit 18.1 チーム共有用のエクスポート/インポートを備えた外部ツール設定">}}

---

SmartGitは外部ツールをサポートしています。例えばチームですばやく共有するために、簡単にエクスポートおよびインポートできるようになりました。 

# 低レベルのカスタマイズ

{{<screenshot src="low-level-customization.png" alt="SmartGit 18.1 高度なカスタマイズのための環境設定での低レベルプロパティ編集">}}

---

SmartGitは常に低レベルプロパティを使用した非常に良いカスタマイズが可能でした。今では、それらのほとんどを環境設定で編集できます。

これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}からの優先度の高いトピックの1つでした。