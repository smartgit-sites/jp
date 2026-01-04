---
title: バージョン 20.1
headerH2: SmartGit 20.1 の主要な改善点
listTitle: バージョン 20.1
imageAltText: 改善されたパフォーマンス、統一されたログインターフェース、柔軟なワークツリー管理を備えたSmartGit 20.1
linkText: SmartGit バージョン 20.1 の詳細
category:
- feature
headerMessage: '20.1で**速度向上**、より明確な**ログビュー**、柔軟な**ワークツリー**処理の恩恵を受ける。'
description: SmartGit 20.1は、より速いパフォーマンス、簡素化されたログインターフェース、より良い変更の可視性、効率化されたワークツリー管理を提供 — Git生産性を向上させるために今すぐアップデート。
ogTitle: 'SmartGit 20.1: より速いパフォーマンス、洗練されたログビュー & より良い変更処理。'
ogDesc: SmartGit 20.1は、より速いパフォーマンス、簡素化されたログインターフェース、より良い変更の可視性、効率化されたワークツリー管理を提供 — Git生産性を向上させるために今すぐアップデート。
weight: 700
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/20_1/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: 60d0d86cd2c4185700e2bb5bbc057694c31d7836
    sha256: d9363b22842553d6e108b691ba23fdc8424a7e4776aa20759056e8442c05ad7c
    fetched_at: 2026-01-04T18:02:33Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:33Z
---

SmartGit 20.1は、より速く、より明確で、より柔軟なGitワークフローのための貴重な改善をもたらします：
- 特にGit 2.25以降で顕著に**高速なパフォーマンス**
- より明確にするためにログで**統一されたワーキングツリーとインデックスビュー**
- ワーキングツリーとインデックスで**変更を統合または個別に表示**するオプション
- UIから直接**ワークツリーを簡単に削除**
- 大規模プロジェクト向けのよりスマートな**ファーストペアレント履歴**と**スタッシュの視覚化**

***

# **機能**

# 統一されたワーキングツリー/インデックスノードを持つログラフ

{{<screenshot src="log-graph-unified-workingtree-indexnode.png" alt="SmartGit 20.1 HEAD固定位置を持つログラフの統一されたワーキングツリー/インデックスノード">}}

---

ログラフでは、ワーキングツリーとインデックスノードが1つのノードに統一され、よりコンパクトになりました。ノードは常にHEADに固定されるようになり、特に古いコミットがチェックアウトされている場合でも気が散りにくくなりました。 

# ファイルビュー：ワーキングツリーとインデックスを分離

{{<screenshot src="files-view-separate-workingtree-and-index.png" alt="SmartGit 20.1 空のセクションを自動非表示にする別々のワーキングツリーとインデックスリストのオプション">}}

---

多くの新規ユーザーは、ワーキングツリーとインデックスの変更を別々のリストで見ることに慣れています。すべての変更を1つのリストで見るか、2つのリストに分けて見るかを選択できるようになりました。

ファイルがステージされていないか、すべてステージされている場合、2番目の空のリストは自動的に非表示になります。 

# ワークツリーの削除

{{<screenshot src="remove-worktree.png" alt="SmartGit 20.1 複雑な回避策なしの直接ワークツリー削除機能">}}

---

回避策なしでワークツリーを直接削除できるようになりました。 

# ファーストペアレント履歴の改善

{{<screenshot src="first-parent-history-improved.png" alt="SmartGit 20.1 コンパクトなスタッシュ表示と展開可能なビューを備えた強化されたファーストペアレント履歴">}}

---

ファーストペアレント履歴がコアGitデータから構築されるようになり、巨大なリポジトリでも適切に動作します。

現在のブランチの履歴のみを表示する場合（「ファーストペアレントのみを追跡」オプションが選択されている場合）、スタッシュもコンパクトな形式で表示されます。マウスクリックで展開できます。 

# フィルタリングの改善

{{<screenshot src="filtering-improved.png" alt="SmartGit 20.1 部分文字列マッチングと正規表現境界制御を備えた改善されたフィルタリング">}}

---

フィルタリングが名前やパスの内部に一致するようになりました。ただし、正規表現フィルタリングで^または$が使用されている場合を除きます。


# オフラインGravatarキャッシュ

{{<screenshot src="offline-gravatar-cache.png" alt="SmartGit 20.1 プライバシー重視のワークフロー向けの手動画像設定を備えたオフラインGravatarキャッシュ">}}

---

gravatar.comへのアクセスを望まない場合、``user@domain.com.jpg``または``email-md5-hash.jpg``の形式の画像でgravatar-cacheディレクトリを事前に設定できます。gravatar.comアクセスが無効になっていても、実際に画像が表示されます。 