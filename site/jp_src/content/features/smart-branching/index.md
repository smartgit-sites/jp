---
title: "Git-Flow と機能フローによるスマートな分岐"
headerH1: "SmartGit ブランチング"
headerH2: "機能フロー、Git-Flow、GitHub フロー"
listTitle: "スマート分岐"
imageAltText: "視覚的なワークフロー ガイダンスを備えたフィーチャー フローおよび Git-Flow 分岐戦略を示す SmartGit のスマート ブランチング ダイアログ"
linkText: "スマート分岐の詳細"
category: ["feature"]
headerMessage: "SmartGit の分岐ヘルパーを使用して、ガイド付き **機能フロー** または従来の **Git-Flow** に従ってください。"
description: "統合されたガイダンスを使用して、Feature Flow または Git Flow を操作します。 SmartGit は、チーム環境での組織化と生産性の維持に役立つ視覚的な分岐戦略をサポートしています。"
ogTitle: "SmartGit ブランチング -- 機能フロー、Git-Flow、GitHub フロー"
ogDesc: "SmartGit の視覚的な分岐戦略:Feature Flow、Git-Flow、GitHub Flow など。組み込みの自動化とガイダンスにより Git を簡素化します。"
weight: 4
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/smart-branching/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 9e282e76978770048be135705f8b694c41c6123d
    modified_committed_at: 2025-09-02T15:04:41Z
    blob: 59e9eb5d461258c19f619cddf3dcefac0d6d9266
    sha256: e7d15cf2f11339c463f6393188a16398cf40452c211a7d469c4f2479e1ecf888
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

ブランチ戦略は複雑である必要はありません。SmartGitは**Feature Flow**と**Git Flow**のガイド付きワークフローを提供します：

- 自動的な**ブランチ**セットアップ
- 統合された**マージ**とクリーンアップステップ
- **GitHub Flow**にも対応

***
{{<screenshot src="feature-flow-integrate.gif" alt="SmartGit Feature Flow Integrateダイアログ。メインブランチの検証とリベースオプションを備えたステップバイステップのブランチ統合を表示">}}

---

SmartGitの**スタンダードウィンドウ**には**Feature Flow**が含まれています -- ガイド付きフィーチャー開発のために設計されたユニークなワークフローです。
フィーチャーの**開始**、アップストリームの変更の**統合**、マージ、リベース、またはスカッシュによる**完了**まで、すべてのステージをカバーします。

Feature Flowは複数のメインブランチをサポートし、ソロ開発者から大規模チームまでスケールします。**組み込みのセーフガード**により、**Gitの経験が様々**な環境で特に価値があります。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="詳細を見る">}}

# SmartGitの機能フロー

Feature FlowはSmartGitに組み込まれたガイド付きGitワークフローで、以下をサポートします：
- メインまたはリリースブランチをベースに新しいフィーチャーを開始（設定に応じて）
- 簡単なリベースでフィーチャーブランチを最新に保つ
- 関連するコミットを視覚的にまとめるための「サイドループ」フィニッシュマージをサポート
- フィニッシュするまで、フィーチャーブランチとすべてのリベースコンフリクトはあなたの責任

**機能フローを使うべき理由：**
- スパゲッティマージを回避：リベースは履歴を線形に保ち、柔軟性のないマージコミットを避けます
- デフォルトで安全：SmartGitは破壊的な操作をブロックし、確認とガイダンスを表示します（スクリーンショットの通り）
- 視覚的な明確さ：SmartGitの統合された履歴とdiffビューで変更をコンテキストで確認
- 準備ができたときだけプッシュ：統合されたステップにより、不完全またはコンフリクトのあるコードをプッシュしません

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="詳細を見る">}}


# 統合して終了

{{<screenshot src="feature-flow-finish.gif" alt="SmartGit Feature Flow Finishダイアログ。ブランチクリーンアップとプッシュオプションを備えたアトミックマージ完了を表示">}}

---

**統合**と**仕上げ**は**機能フロー**の中核です。

これらはGit-Flowを超えて、より多くの**エッジケース**を処理し、**選択的なフェッチとプッシュ**をサポートし、複雑な**分岐したシナリオ**も安全に解決します。

**Integrate**は、完全な制御のための明確なビジュアルサポートでステップバイステップでガイドします。

**Finish**は_アトミック_です -- フィーチャーコミットは完全に_main_に適用されるか、プロセスが停止します。テストされていない_main_の変更が取り込まれることはなく、部分的なコミットセットがプッシュされることもありません。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="詳細を見る">}}


# Git-Flow -- マルチリリースプロジェクトのための構造化ワークフロー

{{<screenshot src="gitflow-full-config.png" alt="SmartGit Git-Flow フル設定ダイアログ。機能、リリース、ホットフィックス、サポートブランチのブランチ命名設定を表示">}}

---

SmartGitは、複数のアクティブなリリースを管理するチームのためにクラシックな**Git-Flow**モデルをサポートし、以下のプロセスを自動化します：

- フィーチャー、リリース、ホットフィックスの開始と完了
- _develop_と_main_へのマージバック
- リリースサイクルを予測可能で一貫性のあるものに保つ

SmartGitの実装は人気のある**AVH Edition**に基づいており、いくつかのオプションの改善が含まれています。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow" display="詳細を見る">}}


# Git-Flow Light -- シングルリリース向けの簡素化されたGit-Flow

{{<screenshot src="gitflow-light-config.png" alt="SmartGit Git-Flow Light設定ダイアログ。featureブランチのみとメイン開発ブランチの簡素化されたブランチ設定を表示">}}

---

**Git‑Flow Light**はシングルリリースワークフロー向けの軽量バージョンです：

- 単一の長命トランクのみ：_develop_（または_main_）
- 新しい作業用の_feature_ブランチ；マージバックで完了
- 別個の_release_、_hotfix_、または_support_ブランチなし

継続的にデプロイするアジャイルチームやWebベースのプロジェクトに最適です。

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow-Light" display="詳細を見る">}}
