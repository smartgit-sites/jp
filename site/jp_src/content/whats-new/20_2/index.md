---
title: "Version 20.2"
headerH2: "Key Enhancements in SmartGit 20.2"
listTitle: "Version 20.2"
imageAltText: "SmartGit 20.2: Big Sur support, subtree ops, smarter graph & richer syntax."
linkText: "More about SmartGit Version 20.2"
category: ["feature"]
headerMessage: "Gain **macOS Big Sur** support, visual **ref management**, and powerful **subtree** tools in 20.2."
description: "SmartGit 20.2 brings Big Sur compatibility, subtree operations, improved ref handling, richer syntax support, and faster graph Navigation — update now to enjoy a sleeker and more efficient Git GUI experience."
ogTitle: "SmartGit 20.2: Big Sur support, subtree ops, smarter graph & richer syntax."
ogDesc: "SmartGit 20.2 brings Big Sur compatibility, subtree operations, improved ref handling, richer syntax support, and faster graph Navigation — update now to enjoy a sleeker and more efficient Git GUI experience."
weight: 600
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/20_2/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 9e282e76978770048be135705f8b694c41c6123d
    modified_committed_at: 2025-09-02T15:04:41Z
    blob: 522bc4b7810b26a1345689fcf5de332546c9f5d7
    sha256: e9ee588e4a315a20868a65288ebd0fc007426bab8013f0286220e6e08b5558f0
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
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












