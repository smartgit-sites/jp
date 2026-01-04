---
title: バージョン 20.2
headerH2: SmartGit 20.2 の主要な強化点
listTitle: バージョン 20.2
imageAltText: 'SmartGit 20.2: Big Surサポート、サブツリー操作、よりスマートなグラフ & より豊富な構文。'
linkText: SmartGit バージョン 20.2 の詳細
category:
- feature
headerMessage: '20.2で**macOS Big Sur**サポート、ビジュアル**ref管理**、パワフルな**サブツリー**ツールを取得。'
description: SmartGit 20.2はBig Sur互換性、サブツリー操作、改善されたref処理、より豊富な構文サポート、より速いグラフナビゲーションを提供 — より洗練された効率的なGit GUI体験のために今すぐアップデート。
ogTitle: 'SmartGit 20.2: Big Surサポート、サブツリー操作、よりスマートなグラフ & より豊富な構文。'
ogDesc: SmartGit 20.2はBig Sur互換性、サブツリー操作、改善されたref処理、より豊富な構文サポート、より速いグラフナビゲーションを提供 — より洗練された効率的なGit GUI体験のために今すぐアップデート。
weight: 600
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/20_2/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 9e282e76978770048be135705f8b694c41c6123d
    modified_committed_at: 2025-09-02T15:04:41Z
    blob: 522bc4b7810b26a1345689fcf5de332546c9f5d7
    sha256: dedfef6eee092c52cef981bdb39f885ac9281fbf6b473e8888e09398a815bf38
    fetched_at: 2026-01-04T18:02:33Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:33Z
---

SmartGit 20.2は、よりスムーズなGit体験のための主要な改善をもたらします：
- **macOS Big Sur**のネイティブサポート
- パワフルな**サブツリー操作**と視覚的インジケーター
- グラフとブランチビュー間の**ドラッグアンドドロップによるref管理**
- Swift、Dart、Nim、シェルスクリプトなどの強化された**構文ハイライト**
- よりスマートな**グラフフィルタリングとナビゲーション**
- Gravatarサポートを備えた改善された**コミットダイアログ**

***

# **機能**

# macOS 11 Big Surのサポート

{{<screenshot src="support-for-macos-11-big-sur.png" alt="SmartGit 20.2 更新されたインターフェース要素を備えたネイティブmacOS Big Sur互換性">}}

---

SmartGit 20.2は、macOS 11 Big Surをサポートする最初のSmartGitバージョンです。  

# ブランチビューとグラフビュー間のRefのドラッグアンドドロップ

{{<screenshot src="drag-and-drop-between-branches-and-graph-view.gif" alt="SmartGit 20.2 ブランチビューとグラフビュー間のドラッグアンドドロップref管理">}}

---

グラフビューでのコミットとrefのドラッグは以前から機能していました。今では、ブランチビューとグラフビュー間でもコミットやrefをドラッグして、マージ、リベース、refの更新ができます。 

# 改善された構文カラーリング

{{<screenshot src="improved-syntax-coloring.png" alt="SmartGit 20.2 Swift、Dart、Nim、シェルスクリプトのサポートを備えた強化された構文ハイライト">}}

---

多くの言語で、ファイル比較の構文カラーリングが改善されました。ANTLR、Dart、Innosetupスクリプト、Nim、シェルスクリプト、Swift、...の構文サポートが追加されました。 

# サブツリーのサポート

{{<screenshot src="subtree-support.png" alt="SmartGit 20.2 視覚的インジケーターとAdd/Merge/Split操作を備えたGitサブツリーサポート">}}

---

SmartGitはすでに（既存の）サブツリーでの作業をサポートしていました。今では、サブツリーがブランチビューとログラフに表示されます。また、Add、Merge、Splitなどのサブツリー操作が追加されました。 

# 強化されたグラフフィルタリング

{{<screenshot src="enhanced-graph-filtering.png" alt="SmartGit 20.2 インスタントSHA検索とアクセスしやすいオプションを備えた改善されたグラフフィルタリング">}}

---

グラフビューをフィルタリングする際、フィルターオプションとアクションがより利用しやすくなりました。SHAでのフィルタリングがすぐに機能するようになりました。 

# グラフ：より速いナビゲーション

{{<screenshot src="graph-faster-navigation.png" alt="SmartGit 20.2 シングルクリックHEADアクセスとブラウザスタイルの履歴を備えた効率化されたグラフナビゲーション">}}

---

シングルクリックまたはAlt+HomeでHEADに移動できます。もう一度シングルクリックまたはAlt+Homeでワーキングツリーノードが表示されます。Alt+Left（ブラウザと同様）で以前に選択したコミットに戻ります。

変更されていない場合、ワーキングツリーノードは、別のブランチへの切り替えやコミット後など、HEADが変更されると自動的に非表示になります。

# 強化されたコミットビュー

{{<screenshot src="enhanced-commit-view.png" alt="SmartGit 20.2 Gravatarサポートと完全なコミットダイアログ機能を備えた強化されたコミットビュー">}}

---

コミットビューが以前のコミットダイアログのすべてのオプションをサポートするようになりました。

また、コミットするユーザーのgravatar画像も表示されます。シングルクリックでリポジトリ設定を開いて変更できます。 

# UTF-32のサポート

{{<screenshot src="support-for-utf-32.png" alt="SmartGit 20.2 コードで絵文字と拡張Unicodeを可能にするUTF-32文字サポート">}}

---

コードで絵文字やその他のUTF-32文字を自由に使用できます。

# 古いブランチを選択

{{<screenshot src="select-obsolete-branches.png" alt="SmartGit 20.2 削除されたリモートを持つマージ済みブランチの古いブランチ検出">}}

---

マージされたローカルブランチを削除したい場合があります。追跡しているリモートブランチが削除されたローカルブランチを選択し、確認してから削除できるようになりました。 

# Refの比較：入れ替え

{{<screenshot src="compare-ref-swapping.png" alt="SmartGit 20.2 柔軟なブランチ差分分析のためのサイド入れ替えを備えたref比較">}}

---

どちらも他方の履歴に含まれていないブランチを比較する場合、どちらを先に表示すべきかは明確ではありません。SmartGitの提案が合わない場合は、サイドを簡単に入れ替えることができます。 

# 見える正規表現オプション

{{<screenshot src="visible-regex-option.png" alt="SmartGit 20.2 強化されたフィルター制御アクセシビリティのための見える正規表現トグルボタン">}}

---

すべてのフィルターコントロールは正規表現をサポートしています。これをより明確にするために、各フィルターコントロールのすぐ横に正規表現を有効にするトグルボタンが追加されました。

# タグのグループ化

{{<screenshot src="tag-grouping.png" alt="SmartGit 20.2 手動設定を備えたビルドおよびバージョンタグのインテリジェントなタググループ化">}}

---

SmartGitは大量の類似したタグ（ビルドタグやバージョンタグなど）を検出し、ファイルログでグループ化します。

基礎となるタググループ化設定は手動で調整でき、コミットビューで「最も近いタグ」を表示したり、ブランチビューのタグカテゴリをグループ化したりするためにも使用されます。 

# 環境設定：検索

{{<screenshot src="preferences-search.png" alt="SmartGit 20.2 簡単な設定オプション発見のための環境設定検索機能">}}

---

SmartGitは高度にカスタマイズ可能で、多くの設定オプションがあります。

新しい検索フィールドにより、適切なオプションを見つけることがはるかに簡単になりました。












