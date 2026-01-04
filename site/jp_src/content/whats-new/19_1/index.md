---
title: バージョン 19.1
headerH2: SmartGit 19.1 の主要な改善点
listTitle: バージョン 19.1
imageAltText: 強化されたパフォーマンス、改善されたGit-Flow、洗練されたダークテーマサポートを備えたSmartGit 19.1
linkText: SmartGit バージョン 19.1 の詳細
category:
- feature
headerMessage: '19.1で**高速なパフォーマンス**、洗練された**Git-Flow**、スムーズな**ダークテーマ**をお楽しみください。'
description: SmartGit 19.1は速度、可視性、Git-Flow処理を改善 — Gitでより速くスマートに作業するために今すぐアップデート。
ogTitle: 'SmartGit 19.1: 高速なパフォーマンス、Git-Flowサポート & ダークテーマの改善'
ogDesc: SmartGit 19.1は速度、可視性、Git-Flow処理を改善 — Gitでより速くスマートに作業するために今すぐアップデート。
weight: 800
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/19_1/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: e13423cdaa14213b2a5b2c9f7ba576742fa63a29
    sha256: e92102ddaa68eeb30e34fd762b4e6385b07f142e5bbd93d2f8e1e847c68a37e1
    fetched_at: 2026-01-04T18:02:33Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:33Z
---

SmartGit 19.1は、速度、明確さ、Git-Flowの使いやすさのための主要なアップグレードをもたらします：
- 大規模リポジトリでの高速なパフォーマンス
- すべてのプラットフォームで改善された**ダークテーマ**
- リベースの進行状況とフラットなファーストペアレントビューを備えた強化された**ログラフ**
- **コミット分割の改善**とより安全なワークフロー
- カスタムベースブランチを持つGit-Flow AVH 1.12互換性

***

# **機能**

# 改善されたダークテーマ

{{<screenshot src="improved-dark-theme.png" alt="SmartGit 19.1 システム統合とプラットフォーム固有の機能強化を備えたダークテーマ">}}

---

Windows 10では、ダークテーマがダークタイトルバー、メニューバー、スクロールバーもサポートするようになりました。Windows 10のデフォルトアプリモードがダークに設定されている場合、コンテキストメニューもダークになります。

macOS 10.14およびLinuxでは、現在のシステムテーマに応じてSmartGitがライト/ダークテーマで起動します。

また、Linuxではダークテーマが微調整されました（テーブルヘッダー、選択色、キャレット）。

このトピックは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエストされました。 

# 改善されたコミットビュー

{{<screenshot src="improved-commits-view.png" alt="SmartGit 19.1 リポジトリ状態バナーとリベース進行状況インジケーターを備えたコミットビュー">}}

---

リポジトリが特別な状態（リベース、マージ、チェリーピック、バイセクト、...）の場合、バナーがそれを明確に示し、コンテキストに応じたコマンドを提供します。

リベースの場合、正常に処理されたコミットとまだ処理されていないコミットを一目で確認できるようになりました。 

# 統合された詳細/コミットメッセージビュー

{{<screenshot src="combined-details-commit-message-view.png" alt="SmartGit 19.1 省スペースなコミットワークフローのための統一された詳細/コミットメッセージビュー">}}

---

ログウィンドウの詳細ビューとコミットメッセージビューが統一され、画面スペースを節約できるようになりました。このビューから直接シンプルなコミットを行うことができます。

ワーキングツリーウィンドウのコミットメッセージビューでも、（まだ利用可能なより機能豊富な）ダイアログを使用せずに直接コミットできるようになりました。  

# ログでのディレクトリサポート

{{<screenshot src="directory-support-in-the-log.png" alt="SmartGit 19.1 ワーキングツリーコマンド統合を備えたログウィンドウディレクトリツリー">}}

---

ログのファイルビューがオプションでディレクトリツリーを表示するようになりました。これにより、ディレクトリベースのコマンド（これまでワーキングツリーウィンドウでのみ利用可能だった）を呼び出すことができます。

ログはワーキングツリーウィンドウの基本的にすべてのワーキングツリー機能をサポートするようになりました（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}を参照）。

# Git-Flowの改善

{{<screenshot src="git-flow-improved-integrate.png" alt="SmartGit 19.1 AVH 1.12と柔軟なベースブランチ選択を備えたGit-Flow統合">}}
{{<screenshot src="git-flow-improved-finish.png" alt="SmartGit 19.1 分岐ブランチ処理とIntegrate Developを備えたGit-Flow終了ワークフロー">}}

---

Git-Flow統合がAVH edition 1.12.2をサポートするようになりました。これにより、フィーチャー（またはホットフィックスなど）のベースブランチを指定できます。これにより、フィーチャーの配置や、他のフィーチャーに基づいたフィーチャーの作業がより柔軟になります。

分岐したフィーチャーブランチの場合、デフォルトコマンドがIntegrate Developに変更されました。 

# より高度なリセットオプション

{{<screenshot src="more-advanced-reset-options.png" alt="SmartGit 19.1 説明付きコントロールと別のハードリセットを備えた高度なリセットコマンドオプション">}}

---

一般的なリセットハードが別のコマンドになり、新しいリセット詳細コマンドは説明付きのより多くのオプションをサポートしています。

# より安全な破棄

{{<screenshot src="safer-discard.png" alt="SmartGit 19.1 誤操作のためのマルチファイル確認を備えた強化された破棄安全性">}}

---

SmartGitコマンドは非常に選択ベースです。誤って多くのファイルを破棄しないように、ファイルビューで単一のファイルのみが選択されているが、フォーカスがグラフビューにあるために破棄が複数のファイルを破棄する場合、追加の確認を追加しました。 

# 直感的なコミット分割

{{<screenshot src="intuitive-split-commit.png" alt="SmartGit 19.1 続行コマンドと差分警告を備えた簡略化されたコミット分割ワークフロー">}}

---

コミットの分割について、ワークフローを簡略化しました：新しいコミットを作成し、準備ができたら続行を呼び出します。

新しいコミットが古いコミットと異なる場合、警告が表示されます。シンプルなクリックでSmartGitが差分を表示し、不足している可能性のある変更をコミットできます。 

# フラットログ

{{<screenshot src="flat-log.png" alt="SmartGit 19.1 ファーストペアレント履歴と展開可能なマージコミットスタブを備えたフラットログ視覚化">}}

---

複数のマージを持つ複雑なログラフの場合、新しいファーストペアレント履歴だけを見ると便利なことがあります。マージコミットはスタブのみを表示します。クリックするとマージされたブランチの表示が切り替わります。 
