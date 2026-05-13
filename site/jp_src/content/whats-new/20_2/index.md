---
title: "バージョン20.2"
headerH2: "SmartGit 20.2 の主な機能強化"
listTitle: "バージョン20.2"
imageAltText: "SmartGit 20.2: Big Sur のサポート、サブツリー操作、よりスマートなグラフ、より豊富な構文。"
linkText: "SmartGit バージョン 20.2 の詳細"
category: ["feature"]
headerMessage: "20.2 では **macOS Big Sur** サポート、視覚的な **ref 管理**、強力な **サブツリー** ツールを利用できます。"
description: "SmartGit 20.2 は、Big Sur との互換性、サブツリー操作、ref 処理の改善、より豊富な構文サポート、およびより高速なグラフ ナビゲーションをもたらします。今すぐ更新して、より洗練された効率的な Git GUI エクスペリエンスをお楽しみください。"
ogTitle: "SmartGit 20.2: Big Sur のサポート、サブツリー操作、よりスマートなグラフ、より豊富な構文。"
ogDesc: "SmartGit 20.2 は、Big Sur との互換性、サブツリー操作、ref 処理の改善、より豊富な構文サポート、およびより高速なグラフ ナビゲーションをもたらします。今すぐ更新して、より洗練された効率的な Git GUI エクスペリエンスをお楽しみください。"
weight: 600
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/20_2/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 9e282e76978770048be135705f8b694c41c6123d
    modified_committed_at: 2025-09-02T15:04:41Z
    blob: 522bc4b7810b26a1345689fcf5de332546c9f5d7
    sha256: e9ee588e4a315a20868a65288ebd0fc007426bab8013f0286220e6e08b5558f0
    fetched_at: 2026-05-13T23:14:41Z
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

{{<screenshot alt="SmartGit 20.2 更新されたインターフェース要素を備えたネイティブmacOS Big Sur互換性" src="support-for-macos-11-big-sur.png">}}

---

SmartGit 20.2は、macOS 11 Big Surをサポートする最初のSmartGitバージョンです。

# ブランチビューとグラフビュー間のRefのドラッグアンドドロップ

{{<screenshot alt="SmartGit 20.2 ブランチビューとグラフビュー間のドラッグアンドドロップref管理" src="drag-and-drop-between-branches-and-graph-view.gif">}}

---

グラフビューでのコミットとrefのドラッグは以前から機能していました。今では、ブランチビューとグラフビュー間でもコミットやrefをドラッグして、マージ、リベース、refの更新ができます。

# 改善された構文カラーリング

{{<screenshot alt="SmartGit 20.2 Swift、Dart、Nim、シェルスクリプトのサポートを備えた強化された構文ハイライト" src="improved-syntax-coloring.png">}}

---

多くの言語で、ファイル比較の構文カラーリングが改善されました。ANTLR、Dart、Innosetupスクリプト、Nim、シェルスクリプト、Swift、...の構文サポートが追加されました。

# サブツリーのサポート

{{<screenshot alt="SmartGit 20.2 視覚的インジケーターとAdd/Merge/Split操作を備えたGitサブツリーサポート" src="subtree-support.png">}}

---

SmartGitはすでに（既存の）サブツリーでの作業をサポートしていました。今では、サブツリーがブランチビューとログラフに表示されます。また、Add、Merge、Splitなどのサブツリー操作が追加されました。

# 強化されたグラフフィルタリング

{{<screenshot alt="SmartGit 20.2 インスタントSHA検索とアクセスしやすいオプションを備えた改善されたグラフフィルタリング" src="enhanced-graph-filtering.png">}}

---

グラフビューをフィルタリングする際、フィルターオプションとアクションがより利用しやすくなりました。SHAでのフィルタリングがすぐに機能するようになりました。

# グラフ：より速いナビゲーション

{{<screenshot alt="SmartGit 20.2 シングルクリックHEADアクセスとブラウザスタイルの履歴を備えた効率化されたグラフナビゲーション" src="graph-faster-navigation.png">}}

---

シングルクリックまたはAlt+HomeでHEADに移動できます。もう一度シングルクリックまたはAlt+Homeでワーキングツリーノードが表示されます。Alt+Left（ブラウザと同様）で以前に選択したコミットに戻ります。

変更されていない場合、ワーキングツリーノードは、別のブランチへの切り替えやコミット後など、HEADが変更されると自動的に非表示になります。

# 強化されたコミットビュー

{{<screenshot alt="SmartGit 20.2 Gravatarサポートと完全なコミットダイアログ機能を備えた強化されたコミットビュー" src="enhanced-commit-view.png">}}

---

コミットビューが以前のコミットダイアログのすべてのオプションをサポートするようになりました。

また、コミットするユーザーのgravatar画像も表示されます。シングルクリックでリポジトリ設定を開いて変更できます。

# UTF-32のサポート

{{<screenshot alt="SmartGit 20.2 コードで絵文字と拡張Unicodeを可能にするUTF-32文字サポート" src="support-for-utf-32.png">}}

---

コードで絵文字やその他のUTF-32文字を自由に使用できます。

# 古いブランチを選択

{{<screenshot alt="SmartGit 20.2 削除されたリモートを持つマージ済みブランチの古いブランチ検出" src="select-obsolete-branches.png">}}

---

マージされたローカルブランチを削除したい場合があります。追跡しているリモートブランチが削除されたローカルブランチを選択し、確認してから削除できるようになりました。

# Refの比較：入れ替え

{{<screenshot alt="SmartGit 20.2 柔軟なブランチ差分分析のためのサイド入れ替えを備えたref比較" src="compare-ref-swapping.png">}}

---

どちらも他方の履歴に含まれていないブランチを比較する場合、どちらを先に表示すべきかは明確ではありません。SmartGitの提案が合わない場合は、サイドを簡単に入れ替えることができます。

# 見える正規表現オプション

{{<screenshot alt="SmartGit 20.2 強化されたフィルター制御アクセシビリティのための見える正規表現トグルボタン" src="visible-regex-option.png">}}

---

すべてのフィルターコントロールは正規表現をサポートしています。これをより明確にするために、各フィルターコントロールのすぐ横に正規表現を有効にするトグルボタンが追加されました。

# タグのグループ化

{{<screenshot alt="SmartGit 20.2 手動設定を備えたビルドおよびバージョンタグのインテリジェントなタググループ化" src="tag-grouping.png">}}

---

SmartGitは大量の類似したタグ（ビルドタグやバージョンタグなど）を検出し、ファイルログでグループ化します。

基礎となるタググループ化設定は手動で調整でき、コミットビューで「最も近いタグ」を表示したり、ブランチビューのタグカテゴリをグループ化したりするためにも使用されます。

# 環境設定：検索

{{<screenshot alt="SmartGit 20.2 簡単な設定オプション発見のための環境設定検索機能" src="preferences-search.png">}}

---

SmartGitは高度にカスタマイズ可能で、多くの設定オプションがあります。

新しい検索フィールドにより、適切なオプションを見つけることがはるかに簡単になりました。












</screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>