---
title: "SmartGit Visual History"
headerH2: "Tailor the History to Your Needs"
listTitle: "Customizable Visual History"
imageAltText: "SmartGit's customizable Graph View displaying Git branching structure, commit history, and visual file diffs for precise repository navigation."
linkText: "More about Customizable Visual History"
category: ["feature"]
headerMessage: "Trace your repository's story with a customizable **graph** and powerful **filters**."
description: "Explore SmartGit's powerful visual Git history: track commits, customize views, and navigate your repository with precision. Try SmartGit now."
ogTitle: "SmartGit Features -- Visual Git Tools for Developers and Teams"
ogDesc: "Customize your Git history with SmartGit's Graph View -- visualize commits, use smart filters, and tailor your Git workflow visually."
weight: 6
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/visual-history/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: 80628f73d5af06f28f629c763f48ab9b871d8ce2
    sha256: 6b0e02e74aa02f94534d93e84af37f00c9235630cd59e063cef9906199c98a42
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---


SmartGitのカスタマイズ可能な**グラフビュー**ですべてのブランチとコミットを可視化：

- 特定の**作者**や**ファイルパス**に焦点を当てる
- プロジェクトの**ブランチ**構造をハイライト
- どのコミットが**プッシュ済み**または保留中かを即座に確認

***
# グラフィカル履歴ビュー - リポジトリを正確に可視化

{{<screenshot src="graphical-history-view.png" alt="SmartGitのグラフィカルGit履歴ビュー。色分けされたブランチとコミット可視化で正確なリポジトリナビゲーションを実現">}}

---

SmartGitの強力なグラフビューは、コミットのリストを超えたものを提供します。Git履歴の構造化された高密度の概要を提供します。
- ブランチは視覚的な追跡を容易にするために一貫して色分けされています
- プッシュ可能なコミットは明確に表示されます
- メインライン開発を明確にするためにファーストペアレントラインが強調されます
- ブランチラベルは明確なコンテキストのためにそれぞれのコミットラインに揃えられています

ログは、詳細やコンテキストを失うことなく、複雑なブランチとマージを一目で理解する必要がある開発者向けに最適化されています。

<div class="plain-links">
  {{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Graph-View" display="グラフビューの詳細">}}<br>
  {{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Log-Window" display="ログウィンドウの詳細">}}<br>
  {{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Standard-Window" display="スタンダードウィンドウの詳細">}}
</div>


# グラフビューでGit履歴をカスタマイズ

{{<screenshot src="index.png" alt="SmartGitのカスタマイズ可能なグラフビューインターフェース。開発者のワークフローに合わせたGitブランチフィルタリングとコミット履歴を表示">}}

---

SmartGitのグラフビューはワークフローに適応します。表示するブランチ、タグ、コミットをカスタマイズし、重要なことだけに焦点を当てます。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/GUI/Graph-View" display="詳細を見る">}}


# Git履歴を微調整

{{<screenshot src="fine-tune-graph.png" alt="SmartGitグラフビューのメニューオプション。カスタマイズ可能なブランチとコミットフィルターでGit履歴表示を微調整">}}

---

≡メニューを使用してグラフビューを微調整し、究極の明確さと制御を実現します。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/GUI/Graph-View" display="詳細を見る">}}


# 正確なインサイトのためのスマートフィルタリング

特定のコミットを見つける必要がありますか？強力なフィルターを使用して、作者、メッセージ、またはファイルの変更で検索します。フローを中断することなく、深いインサイトを素早く取得できます。

{{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Log-Window" display="詳細を見る">}}


# より高速なナビゲーションのためのスマートビュー

{{<screenshot src="smart-views.png" alt="SmartGitのインテリジェントなフィルタリングシステム。焦点を絞ったGit履歴分析のための作者ベースとファイルパスフィルターを表示">}}

---

特定のコミットを見つける必要がありますか？強力なフィルターを使用して、作者、メッセージ、またはファイルの変更で検索します。フローを中断することなく、深いインサイトを素早く取得できます。


# 簡単なドラッグ＆ドロップコミット編集

{{<screenshot src="drag-ref-from-branches-to-graph-bd604c06.gif" alt="SmartGitのドラッグアンドドロップインターフェース。ターミナルコマンドなしでビジュアルGitコミットの並べ替えとブランチ管理を実現">}}

---

Git履歴の書き換えはドラッグアンドドロップと同じくらい簡単です - ターミナルコマンドは必要ありません！
SmartGitの{{< link display="グラフビュー" url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Graph-View" >}}では、コミットを所定の位置にドラッグすることで、簡単に並べ替え、スカッシュ、またはリベースできます。{{< link display="Branchesビュー" url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Branches-view" >}}とグラフビューの間でコミットやrefを移動して、refを更新したり、ブランチをリベースしたり、変更を単一のアクションでマージしたりできます。最小限の労力で最大限の柔軟性を実現します。

<div class="plain-links">
    {{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Graph-View" display="グラフビューの詳細">}}<br>
    {{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Branches-view" display="Branchesビューの詳細">}}
</div>
