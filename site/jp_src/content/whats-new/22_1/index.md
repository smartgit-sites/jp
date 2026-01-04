---
title: バージョン 22.1
headerH2: SmartGit 22.1 の主要な強化点
listTitle: バージョン 22.1
imageAltText: 標準ウィンドウインターフェース、強化されたパフォーマンス、効率化されたワークフローを備えたSmartGit 22.1
linkText: SmartGit バージョン 22.1 の詳細
category:
- feature
headerMessage: '22.1で効率化された**UI**、より速い**グラフ**、よりスムーズな**ワークフロー**で作業。'
description: SmartGit 22.1は、効率化されたインターフェース、より良いグラフパフォーマンス、拡張された構文サポート、よりスムーズなコンフリクト処理で、より安全でガイド付きのGit体験を提供します—今すぐダウンロードまたはアップデートしてGitワークフローをレベルアップ。
ogTitle: 'SmartGit 22.1: ガイド付きワークフロー、より速いパフォーマンス、より豊富なUIサポート'
ogDesc: SmartGit 22.1は、効率化されたインターフェース、より良いグラフパフォーマンス、拡張された構文サポート、よりスムーズなコンフリクト処理で、より安全でガイド付きのGit体験を提供します—今すぐダウンロードまたはアップデートしてGitワークフローをレベルアップ。
weight: 400
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/22_1/index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: f2e0f2100d57a5ec316152886e21d8117f75e539
    sha256: 308caea1f91c7d88e60e613a35225dc2d8957edd0a61866bd8458b18db347208
    fetched_at: 2026-01-04T18:02:33Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:33Z
---

SmartGit 22.1は、日常の効率性と安全性に関するユーザーの主要なリクエストに対応し、焦点を絞った新しいインターフェース、速度の向上、よりスムーズなワークフローを導入します：
- スタンダードウィンドウ - シンプルでフロー駆動のUI
- グラフの改善とパフォーマンスの向上
- コンフリクト後のマルチコミットチェリーピック/リバートの続行
- より良いLFS状態の可視性
- 新しい構文カラーリングのサポート

***

# 新しいスタンダードウィンドウ

{{<screenshot src="new-standard-window-1.png" alt="SmartGit 22.1 スタンダードウィンドウ ローカル変更ビュー - 簡略化されたワークフローインターフェース">}}
{{<screenshot src="new-standard-window-2.png" alt="SmartGit 22.1 スタンダードウィンドウ 履歴ビュー - 状態を認識するGitコマンドインターフェース">}}

---

スタンダードウィンドウは、シンプルでありながら強力なSmartGitの新しいウィンドウです。

##### なぜ？

Gitは非常に強力で、多くのコマンドを提供しています。SmartGitのログとワーキングツリーウィンドウは、この完全なコマンドセットへのアクセスを提供します。これは、パワーユーザーがSmartGitを評価する点です。

しかし、多くの可能なリポジトリ状態と組み合わせると、どの状況でどの操作が最も適切かを理解することが難しくなります。

##### どのように？

スタンダードウィンドウでは、ローカル状態（ワーキングツリー）と履歴（ログ）を明確に区別し、現在のリポジトリ状態に応じてGUIを調整します。さらに、Git機能をこの状態に最も適切なものに限定しています。

これにより、ユーザーの選択肢がより限定され、Gitの学習が容易になります。

詳細については、専用の{{< link display="スタンダードウィンドウ" url="https://www.syntevo.com/smartgit/standard-window/" >}}ページを参照してください。 

# ログラフの改善

{{<screenshot src="log-graph-improvements.png" alt="SmartGit 22.1 一貫したブランチ色とプッシュ可能なコミットインジケーターを備えた強化されたログラフ">}}

---

ブランチの色は名前によって決定されるようになったため、同じブランチは各マシンで同じ色になります。ローカルブランチとリモートブランチも同じ色を使用します。

プッシュ可能なコミットは塗りつぶされたドットで表示され、ファーストペアレント履歴はマージされたブランチよりも太く表示され、ブランチラベルはコミットラインと同じ色を使用するようになりました。 

# 新しいGit実装

{{<screenshot src="news-git-implementation.png" alt="SmartGit 22.1 改善されたパフォーマンスとincludeifサポートを備えたカスタムGit実装">}}

---

Gitのデータベース設計は堅牢でシンプルなため、読み取りが簡単で安全です。そのため、JGit（読み取りと書き込みアクセス用の汎用Gitライブラリ）から、SmartGitのニーズに最適化された独自の読み取り専用Git実装に切り替えました。

新しい実装は、パフォーマンスの向上、柔軟性の向上（進行中および将来のGit変更に関して）をもたらし、長年の問題をいくつか解決します：

- git config：includeifのサポート
- .mailmapサポート
- git replaceサポート

# チェリーピックとリバートはコンフリクト後に続行可能

{{<screenshot src="cherry-pick-and-revert-can-continue-after-conflict.png" alt="SmartGit 22.1 コンフリクト解決の続行を備えたマルチコミットチェリーピックとリバート">}}

---

複数のコミットのチェリーピック中にコンフリクトが発生した場合、コンフリクトを解決した後にチェリーピックを続行できるようになりました。リバートも同様です。 

# グラフ：改善されたリベース表示

{{<screenshot src="graph-improved-rebasing-display.png" alt="SmartGit 22.1 現在のコミットステータスとカウンターを備えたリベース進行状況の視覚化">}}

---

あらゆる種類のリベース中に、既にリベースされたコミット数と総コミット数が表示されます。

Modify and Split Commitコマンドの場合、「現在の」コミットの表示にはより明示的なラベルが付けられるようになりました：「editing」または「splitting」。

他の種類のリベースの場合、「現在の」コミットは適切であれば「in-progress」とラベル付けされます。 

# Git-LFSの改善

{{<screenshot src="git-lfs-improvements.png" alt="SmartGit 22.1 専用のステータス列と状態を認識するコマンドを備えた強化されたLFSサポート">}}

---

ファイルビューにLFS状態を表示する別のテーブル列が追加されました（ステージング時にLFS追跡される追跡されていないファイルも含む）。Track、Lock、Unlockコマンドは、それらが役立つファイル状態でのみ利用可能になりました。 

# ブランチ：改善されたAhead/Behind表示

{{<screenshot src="branches-improved-ahead-behind-display.png" alt="SmartGit 22.1 目立つahead/behindコミットカウンターを備えたブランチビュー">}}

---

ブランチビューでは、ahead（送信）およびbehind（受信）のコミット数が右側に表示されるようになり、見つけやすくなりました。

# ログ：複数選択の詳細

{{<screenshot src="log-multi-selection-details.png" alt="SmartGit 22.1 デュアルコミット比較の詳細表示を備えたログ複数選択">}}

---

2つのコミットを選択して2つのリポジトリ状態を比較すると、両方のコミットの詳細がコミットビューに表示されるようになりました。2つ以上のコミットが選択されている場合は、選択されたコミット数が表示されます。 

# 改善された最初のコミット

{{<screenshot src="improved-first-commit.png" alt="SmartGit 22.1 より良いリベース互換性のための自動初期空コミット作成">}}

---

SmartGitの外部で新しいリポジトリを作成した場合でも、最初のコミット時に自動的に初期の空のコミットが挿入されます。これにより、Rebaseなどの他のコマンドが最初のコミットにも適用可能になります。

# 日本語翻訳

{{<screenshot src="japanese-translation.png" alt="SmartGit 22.1 コミュニティによる日本語サポート">}}

---

SmartGit 22.1は、SmartGitコミュニティによって日本語に翻訳されました。{{< link url="https://github.com/ktyubeshi" display="ktyubeshi" >}}さんに感謝します！ 

# 環境設定のGitユーザーオプション

{{<screenshot src="git-user-options-in-preferences.png" alt="SmartGit 22.1 環境設定インターフェースで直接編集可能なGitユーザー設定">}}

---

Gitユーザーオプションが環境設定で直接編集できるようになりました。 

# ファストフォワードが組み込みコマンドに

{{<screenshot src="fast-forward-became-built-in-command.png" alt="SmartGit 22.1 インテリジェントな利用可能性を備えた組み込みコマンドとしてのファストフォワードマージ">}}

---

ファストフォワードマージが組み込み機能になり、ファストフォワードマージが実際に可能な場合にのみ適用できるようになりました。

以前は、デフォルトの外部ツールにすぎませんでした。 
