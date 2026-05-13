---
title: "バージョン22.1"
headerH2: "SmartGit 22.1 の主な機能強化"
listTitle: "バージョン22.1"
imageAltText: "標準ウィンドウ インターフェイスを備えた SmartGit 22.1、強化されたパフォーマンス、合理化されたワークフロー"
linkText: "SmartGit バージョン 22.1 の詳細"
category: ["feature"]
headerMessage: "22.1 では、合理化された **UI**、高速な **グラフ**、よりスムーズな **ワークフロー**を使用して作業できます。"
description: "SmartGit 22.1 は、合理化されたインターフェイス、より優れたグラフ パフォーマンス、拡張された構文サポート、よりスムーズな競合処理を備えた、より安全でガイド付きの Git エクスペリエンスを提供します。今すぐダウンロードまたは更新して、Git ワークフローをレベルアップしてください。"
ogTitle: "SmartGit 22.1: ガイド付きワークフロー、より高速なパフォーマンス、より豊富な UI サポート"
ogDesc: "SmartGit 22.1 は、合理化されたインターフェイス、より優れたグラフ パフォーマンス、拡張された構文サポート、よりスムーズな競合処理を備えた、より安全でガイド付きの Git エクスペリエンスを提供します。今すぐダウンロードまたは更新して、Git ワークフローをレベルアップしてください。"
weight: 400
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/22_1/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: f2e0f2100d57a5ec316152886e21d8117f75e539
    sha256: b4d1ed61514e8537bc296b8bdf5bb9517120ea96bbc0358756de7a9720907809
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 22.1は、日常の効率性と安全性に関するユーザーの主要なリクエストに対応し、焦点を絞った新しいインターフェース、速度の向上、よりスムーズなワークフローを導入します：
- スタンダードウィンドウ - シンプルでフロー駆動のUI
- グラフの改善とパフォーマンスの向上
- コンフリクト後のマルチコミットチェリーピック/リバートの続行
- より良いLFS状態の可視性
- 新しい構文カラーリングのサポート

***

# 新しいスタンダードウィンドウ

{{<screenshot alt="SmartGit 22.1 スタンダードウィンドウ ローカル変更ビュー - 簡略化されたワークフローインターフェース" src="new-standard-window-1.png">}}
{{<screenshot alt="SmartGit 22.1 スタンダードウィンドウ 履歴ビュー - 状態を認識するGitコマンドインターフェース" src="new-standard-window-2.png">}}

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

{{<screenshot alt="SmartGit 22.1 一貫したブランチ色とプッシュ可能なコミットインジケーターを備えた強化されたログラフ" src="log-graph-improvements.png">}}

---

ブランチの色は名前によって決定されるようになったため、同じブランチは各マシンで同じ色になります。ローカルブランチとリモートブランチも同じ色を使用します。

プッシュ可能なコミットは塗りつぶされたドットで表示され、ファーストペアレント履歴はマージされたブランチよりも太く表示され、ブランチラベルはコミットラインと同じ色を使用するようになりました。

# 新しいGit実装

{{<screenshot alt="SmartGit 22.1 改善されたパフォーマンスとincludeifサポートを備えたカスタムGit実装" src="news-git-implementation.png">}}

---

Gitのデータベース設計は堅牢でシンプルなため、読み取りが簡単で安全です。そのため、JGit（読み取りと書き込みアクセス用の汎用Gitライブラリ）から、SmartGitのニーズに最適化された独自の読み取り専用Git実装に切り替えました。

新しい実装は、パフォーマンスの向上、柔軟性の向上（進行中および将来のGit変更に関して）をもたらし、長年の問題をいくつか解決します：

- git config：includeifのサポート
- .mailmapサポート
- git replaceサポート

# チェリーピックとリバートはコンフリクト後に続行可能

{{<screenshot alt="SmartGit 22.1 コンフリクト解決の続行を備えたマルチコミットチェリーピックとリバート" src="cherry-pick-and-revert-can-continue-after-conflict.png">}}

---

複数のコミットのチェリーピック中にコンフリクトが発生した場合、コンフリクトを解決した後にチェリーピックを続行できるようになりました。リバートも同様です。

# グラフ：改善されたリベース表示

{{<screenshot alt="SmartGit 22.1 現在のコミットステータスとカウンターを備えたリベース進行状況の視覚化" src="graph-improved-rebasing-display.png">}}

---

あらゆる種類のリベース中に、既にリベースされたコミット数と総コミット数が表示されます。

Modify and Split Commitコマンドの場合、「現在の」コミットの表示にはより明示的なラベルが付けられるようになりました：「editing」または「splitting」。

他の種類のリベースの場合、「現在の」コミットは適切であれば「in-progress」とラベル付けされます。

# Git-LFSの改善

{{<screenshot alt="SmartGit 22.1 専用のステータス列と状態を認識するコマンドを備えた強化されたLFSサポート" src="git-lfs-improvements.png">}}

---

ファイルビューにLFS状態を表示する別のテーブル列が追加されました（ステージング時にLFS追跡される追跡されていないファイルも含む）。Track、Lock、Unlockコマンドは、それらが役立つファイル状態でのみ利用可能になりました。

# ブランチ：改善されたAhead/Behind表示

{{<screenshot alt="SmartGit 22.1 目立つahead/behindコミットカウンターを備えたブランチビュー" src="branches-improved-ahead-behind-display.png">}}

---

ブランチビューでは、ahead（送信）およびbehind（受信）のコミット数が右側に表示されるようになり、見つけやすくなりました。

# ログ：複数選択の詳細

{{<screenshot alt="SmartGit 22.1 デュアルコミット比較の詳細表示を備えたログ複数選択" src="log-multi-selection-details.png">}}

---

2つのコミットを選択して2つのリポジトリ状態を比較すると、両方のコミットの詳細がコミットビューに表示されるようになりました。2つ以上のコミットが選択されている場合は、選択されたコミット数が表示されます。

# 改善された最初のコミット

{{<screenshot alt="SmartGit 22.1 より良いリベース互換性のための自動初期空コミット作成" src="improved-first-commit.png">}}

---

SmartGitの外部で新しいリポジトリを作成した場合でも、最初のコミット時に自動的に初期の空のコミットが挿入されます。これにより、Rebaseなどの他のコマンドが最初のコミットにも適用可能になります。

# 日本語翻訳

{{<screenshot alt="SmartGit 22.1 コミュニティによる日本語サポート" src="japanese-translation.png">}}

---

SmartGit 22.1は、SmartGitコミュニティによって日本語に翻訳されました。{{< link url="https://github.com/ktyubeshi" display="クチュベシ" >}}さんに感謝します！

# 環境設定のGitユーザーオプション

{{<screenshot alt="SmartGit 22.1 環境設定インターフェースで直接編集可能なGitユーザー設定" src="git-user-options-in-preferences.png">}}

---

Gitユーザーオプションが環境設定で直接編集できるようになりました。

# ファストフォワードが組み込みコマンドに

{{<screenshot alt="SmartGit 22.1 インテリジェントな利用可能性を備えた組み込みコマンドとしてのファストフォワードマージ" src="fast-forward-became-built-in-command.png">}}

---

ファストフォワードマージが組み込み機能になり、ファストフォワードマージが実際に可能な場合にのみ適用できるようになりました。

以前は、デフォルトの外部ツールにすぎませんでした。
</screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>