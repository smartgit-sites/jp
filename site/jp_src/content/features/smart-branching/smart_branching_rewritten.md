---
title: "SmartGit ブランチング"
headerH2: "機能フロー、Git-Flow、GitHub フロー"
listTitle: "スマート分岐"
imageAltText: "SmartGit のスマート ブランチング インターフェイスのスクリーンショット。"
linkText: "スマート分岐の詳細"
category: ["feature"]
description: "SmartGit のフィーチャー フローと Git-Flow のガイド付きワークフローを使用して、分岐を簡素化し、コラボレーションを向上させます。ビジュアル ツールと組み込みのガイダンスにより、集中力を維持し、エラーを防ぐことができます。"
ogTitle: "SmartGit ブランチング -- 機能フロー、Git-Flow、GitHub フロー"
ogDesc: "SmartGit のガイド付きワークフロー:Feature Flow、Git-Flow、GitHub Flow など。ビジュアル ツール、間違いの減少、Git の向上。"
weight: 4
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/smart-branching/smart_branching_rewritten.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: c7b19ae4dff7920e50ae357c875692e538f248b8
    modified_committed_at: 2026-03-10T09:19:58Z
    blob: ac19ea7731a162dc50ad0224f5b241e30481cd5d
    sha256: f42340ceccd6679dcedcec6d844c87fc8a46953819901b315ac8d53a3cd8f662
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

# 機能フロー -- 合理化された機能開発

{{<screenshot src="feature-flow-integrate.gif" alt="SmartGit の「機能フロー」統合">}}

SmartGit の **機能フロー** は、機能ブランチを操作するための統合ワークフローを提供します。チームや個人向けに設計されており、開発プロセス中の摩擦を最小限に抑えます。

主な特徴:
- メインまたはリリース ブランチに基づいて新機能を開始する
- シンプルなリベースにより機能を最新の状態に保つ
- 終了前に主な変更を視覚的に統合する
- ガイダンスに従って最終的なマージ、スカッシュ、またはリベースを実行する

SmartGit はクリーンで直線的な履歴を強制し、全体を通して視覚的なフィードバックを提供するため、競合や偶発的なエラーの可能性が軽減されます。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="もっと詳しく知る">}}


# なぜ機能フローなのか?

機能フローは、完全な機能ライフサイクルをガイドします。
- リベースにより複雑なマージコミットを回避する
- 内蔵の安全装置でデータ損失を防止
- SmartGit の統合されたログおよび差分ビューで明確さを得る
- 完了し検証された変更のみをプッシュします

ブランチに対して全責任を負い、統合前にコミットをクリーンアップできます。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="もっと詳しく知る">}}


# 統合して完了 -- 安全かつ制御された配信

{{<screenshot src="feature-flow-finish.gif" alt="SmartGit の「機能フロー」の終了">}}

**統合** および **完了** 操作により、変更が安全に配信されます。

- **Integrate** は、メイン ブランチからの変更をインタラクティブにリベースまたはマージするのに役立ちます
- **完了** はアトミックな操作を保証します。完全な機能が適用されるか、何も変更されません。

部分的な更新や、テストされていないコードの誤ったプルが回避されます。その結果、メインライン ブランチへのクリーンで信頼性の高いコミットが得られます。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="もっと詳しく知る">}}


# Git-Flow -- マルチリリース プロジェクト向けの構造化されたワークフロー

{{<screenshot src="gitflow-full-config.png" alt="Git-Flow (完全) 構成">}}

SmartGit は、複数のアクティブなリリースを管理するチーム向けの従来の **Git-Flow** モデルをサポートしています。

次のプロセスを自動化します。
- 機能、リリース、ホットフィックスの開始と終了
- `develop` と `main` にマージし直す
- リリースサイクルを予測可能かつ一貫性のあるものに保つ

スケジュールされた展開と調整されたチーム ワークフローを伴うプロジェクトに最適です。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow" display="もっと詳しく知る">}}


# Git-Flow Light -- シングル リリース向けの簡素化された Git-Flow

{{<screenshot src="gitflow-light-config.png" alt="Git-Flow Light 構成">}}

**Git-Flow Light** は、アクティブなリリースが 1 つだけあるプロジェクト向けに調整された合理化されたバリアントです。

これにより、完全な Git-Flow から未使用のステップが削除され、構造を維持しながらオーバーヘッドが削減されます。
- 機能とホットフィックスの分岐を簡素化
- `develop` ブランチは必要ありません
- 必要な調整が減り、配信に集中できるようになります

継続的にデプロイする、または Web ベースのプロジェクトに取り組むアジャイル チームに最適です。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow-Light" display="もっと詳しく知る">}}
