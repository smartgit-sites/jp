---
title: バージョン 17.1
headerH2: SmartGit 17.1 の主要な改善点
listTitle: バージョン 17.1
imageAltText: 強化されたパフォーマンス、改善されたリベースワークフロー、より良いスタッシュ管理を備えたSmartGit 17.1
linkText: SmartGit バージョン 17.1 の詳細
category:
- feature
headerMessage: '17.1で**高速なリフレッシュ**、よりスマートな**コミット分割**、改善された**スタッシュ制御**を取得。'
description: SmartGit 17.1はパフォーマンスを向上させ、コミット処理を簡素化し、スタッシュとignore管理を改善 — より速く直感的なGitワークフローのために今すぐアップデート。
ogTitle: 'SmartGit 17.1: 高速なリフレッシュ、より良いリベース、よりスマートなスタッシュ & ignore制御'
ogDesc: SmartGit 17.1はパフォーマンスを向上させ、コミット処理を簡素化し、スタッシュとignore管理を改善 — より速く直感的なGitワークフローのために今すぐアップデート。
weight: 1100
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/17_1/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: 86718bd9890e8def5a3ae30ee727270f86c7b2c4
    sha256: dd2dca0bf1875257bb55d7e3692363c269fb8cc2d61ac6669034388589cfbb27
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

SmartGit 17.1は、日常のGit作業の速度、明確さ、制御を改善します：
- 大規模リポジトリでの**高速なリフレッシュ**パフォーマンス
- オプションの**コンパクトなChangesビュー**と行末の可視性
- 強化された**インタラクティブリベース**とコミット分割
- 選択的な操作によるよりスマートな**スタッシュ処理**
- より簡単な**.gitignore編集**とルール追跡

***

# **機能**

# ダークテーマ

{{<screenshot src="dark-theme.png" alt="SmartGit 17.1 OSに依存しない色と包括的なUIカバレッジを備えたダークテーマ">}}

---

SmartGitは、OSに依存しない色のダークテーマをサポートしています。これは{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}で{{< link url="http://smartgit.userecho.com/topics/43" display="#1リクエスト機能" >}}でした。 

# Changesビュー：オプションのコンパクト表示

{{<screenshot src="changes-view-optional-compact-display.png" alt="SmartGit 17.1 集中したコードレビューのために変更されていない行を非表示にするコンパクトなChangesビュー">}}

---

Changesビューでは、{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエストされた、変更されていない行を非表示にするオプションがあります。現在、このモードでは構文カラーリングも編集もできません。

# 改善された行末サポート

{{<screenshot src="improved-line-endings-support.png" alt="SmartGit 17.1 オプション表示を備えたChangesビューでの行末変更の視覚化">}}

---

Changesビューはオプションで行末の変更を表示できます（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエスト）。

# 混合行末の警告

{{<screenshot src="warning-for-mixed-line-ednings.png" alt="SmartGit 17.1 誤ったファイル破損を防ぐ混合行末警告ダイアログ">}}

---

SmartGitは、組み込みのファイル比較、インデックスエディター、コンフリクトソルバー（行末なしでファイルの内容のみを表示）で警告ダイアログを表示することにより、混合（一貫性のない）行末を持つテキストファイルを誤って上書きすることを困難にしています。 

# インタラクティブリベース

{{<screenshot src="interactive-rebase.png" alt="SmartGit 17.1 コンフリクト解決とModify/Split Commitコマンドを備えたバッチインタラクティブリベース">}}

---

以前のSmartGitバージョンでは、ジャーナルビューでコミットの並べ替えやスカッシュを即座に行うことができました。しかし、複数の変更を一度に行う必要がある場合、これは完全に便利ではありませんでした。

SmartGitは、このようなインタラクティブリベース操作をバッチ処理できるようになり、コンフリクトを解決できるという利点もあります（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエスト）。

コミットを編集するインタラクティブリベースオプションが、専用の**コミットの変更または分割**コマンドとして利用可能になりました。

# スタッシュの改善

{{<screenshot src="stash-improvements.png" alt="SmartGit 17.1 選択的ファイルスタッシュと名前変更機能を備えた強化されたスタッシュ機能">}}

---

スタッシュコマンドが改善されました：

- 選択したファイルのみをスタッシュするサポート（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエスト）
- オプションでインデックスまたはワーキングコピー全体を保持（スタッシュを変更されたファイルのバックアップにするだけ）
- ツールバーボタンにダイアログなしでクイックスタッシュをサポートするポップアップオプション
- スタッシュの名前変更が可能

追跡されていないファイルを含めるオプションは環境設定に移動されました。 

# コンフリクトソルバー：両方を取る

{{<screenshot src="conflict-solver-take-both.png" alt="SmartGit 17.1 包括的なマージ解決のためのTake Bothオプションを備えたコンフリクトソルバー">}}

---

コンフリクトソルバーが両方のサイドから変更を取るコマンドを提供するようになりました（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエスト）。 

# リフレッシュパフォーマンスの改善

リフレッシュパフォーマンス（特に大規模リポジトリの場合）が約50%改善され、リポジトリの初期スキャン時や**Stage**などの高速なGit操作を呼び出す際に、SmartGitがより応答性が高くなりました（{{< link url="https://smartgit.userecho.com" display="smartgit.userecho.com" >}}でリクエスト）。 

# DeepGit統合

{{<screenshot src="deepgit-integration.png" alt="SmartGit 17.1 高度なコード履歴調査とblame分析のための統合DeepGit">}}

---

{{< link url="https://www.syntevo.com/deepgit/" display="DeepGit" >}}は、ソースコードの履歴を調査するのに役立つBlame/Logツールの組み合わせです。SmartGitにバンドルされており、**クエリ|調査**を使用して呼び出すことができます。

# Gitignoreファイルの場所を特定

{{<screenshot src="locate-gitignore-files.png" alt="SmartGit 17.1 ignoreルールとファイルへの影響を理解するためのgitignoreファイルの場所">}}

---

特定の無視されたファイルがなぜ無視されているか、またはどのgitignoreファイルが選択したファイルやリポジトリに影響を与えているかを知りたい場合、対応するgitignoreファイルを簡単に表示できるようになりました。 

# 改善された検索、検索と置換

{{<screenshot src="improved-find-find-replace.png" alt="SmartGit 17.1 正規表現サポートと直感的なナビゲーションを備えた統一された検索/置換ダイアログ">}}

---

検索と検索＆置換ダイアログが統一され、検索ダイアログが検索＆置換ダイアログの一部になりました。検索機能部分で正規表現を使用できるようになり、前を検索と次を検索の操作がより直感的に使用できるようになりました。

# 追跡ファイルを無視

{{<screenshot src="ignore-tracked-files.png" alt="SmartGit 17.1 自動削除と無視を備えた追跡ファイル用のIgnoreコマンド拡張">}}

---

Ignoreコマンドが拡張され、最初に削除してから無視することで、追跡ファイルもサポートするようになりました。 

# 名前変更検出

{{<screenshot src="rename-detection.png" alt="SmartGit 17.1 Changesビューでファイル関係を表示するワーキングツリー名前変更検出">}}

---

ワーキングツリーで名前変更されたファイル（不足と追跡されていない、または削除と追加のいずれか）を検出できます。Changesビューには、ファイル名と正しいファイル（インデックスとHEAD）からのファイル内容が表示されます。 

# リポジトリ設定

{{<screenshot src="repository-settings.png" alt="SmartGit 17.1 有効なGit config表示とサブモジュールオプションを備えた再設計されたリポジトリ設定">}}

---

ダイアログが刷新され、有効なGit config値の表示と編集がより簡単になりました。サブモジュールをプッシュするときに何をするかの新しいオプションが追加されました。 

# 出力ポップアップ

{{<screenshot src="output-popup-1.png" alt="SmartGit 17.1 コマンドの成功/失敗通知を備えた省スペースな出力ポップアップ">}}
{{<screenshot src="output-popup-2.png" alt="SmartGit 17.1 ESCで閉じられる詳細なコマンド出力ダイアログと自動非表示通知">}}

---

必要以上に画面スペースを無駄にしないために、出力ビューを非表示にしながらもコマンドの成功または失敗について通知を受けるオプションがあります。

コマンドが失敗したり警告メッセージを生成したりすると、正確に呼び出されたコマンドとその出力がダイアログに表示され、ESCで簡単に閉じることができます。

コマンドが成功した場合、または特定の警告メッセージを表示しないようにオプトした場合は、代わりに自動的に非表示になる通知が表示されることがあります。Stageなどの特定のコマンドはダイアログをまったく表示しません。完全な出力を再度表示するには、ウィンドウ | 出力を使用します。 

# より多くのRef並べ替えオプション

{{<screenshot src="more-ref-sorting-options.png" alt="SmartGit 17.1 バージョンベースのブランチ名前付けのための数値認識を備えたインテリジェントなref並べ替え">}}

---

通常、番号の大きいタグやブランチ名は、番号の小さいものよりも重要です。そのため、それを考慮した新しい並べ替えモードが追加されました。

# より簡単なタグ付け

{{<screenshot src="easier-tagging.png" alt="SmartGit 17.1 既存のタグ名用のCtrl+Space補完ポップアップを備えた簡略化されたタグ付け">}}

---

既存のタグの名前を取得して少し変更することで、タグの作成が簡単になりました。Ctrl+Space補完ポップアップがあるため、長いタグリストを検索する必要がなくなりました。 

# ジャーナル：より多くのコミットを表示

{{<screenshot src="journal-show-more-commits-1.png" alt="SmartGit 17.1 拡張された履歴表示のための複数のコミット表示オプションを備えたジャーナル">}}
{{<screenshot src="journal-show-more-commits-2-collapsed-commits.png" alt="SmartGit 17.1 効率的な大規模履歴ナビゲーションのための折りたたまれたコミットビュー">}}

---

より多くのコミットを表示する方法が2つになりました。  

# コマンドへのより速いアクセス

{{<screenshot src="quicker-access-to-commands.png" alt="SmartGit 17.1 確認なしフェッチを含むクイックコマンドアクセスを備えたツールバーポップアップメニュー">}}
{{<screenshot src="quicker-access-to-commands-.png" alt="SmartGit 17.1 リポジトリと選択ベースのログオプションを備えた統合ログツールバーボタン">}}

---

いくつかのツールバーボタンに（クリックして長押しする）ポップアップメニューが追加され、特定のコマンドへのより速いアクセスが可能になりました。例えば、確認ダイアログなしでコミットをフェッチする簡単な方法があります。

新しい統合ログツールバーボタンはリポジトリログを開き、選択したアイテムのログを表示するポップアップがあります。選択に対して常に動作する古いログ（選択）ツールバーボタンも引き続き利用可能です。

# ログ：ファイルツール

{{<screenshot src="log-file-tools.png" alt="SmartGit 17.1 ワーキングツリーファイル操作のための外部ツール統合を備えたログウィンドウ">}}

---

ログで、ワーキングツリーファイルに対して動作する外部ツールを起動できるようになりました。

# ログ：改善されたドラッグアンドドロップ

{{<screenshot src="log-improved-drag-and-drop.png" alt="SmartGit 17.1 クイック操作アクセスのためのポップアップメニューを備えた強化されたログドラッグアンドドロップ">}}

---

ログウィンドウでコミットやrefをドラッグするときに、発生するダイアログがポップアップメニューに置き換えられ、オプションへのより速いアクセスが可能になりました。
