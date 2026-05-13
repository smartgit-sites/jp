---
title: "バージョン24.1"
headerH2: "SmartGit 24.1 の主な改善点"
listTitle: "バージョン24.1"
imageAltText: "SmartGit 24.1 では、サブモジュールの処理が改善され、GitHub との統合が行われ、差分表示が強化されました。"
linkText: "SmartGit バージョン 24.1 の詳細"
category: ["feature"]
headerMessage: "24.1 では、**サブモジュール**を簡単に管理し、**よりクリーンな差分**を表示し、ワンクリックで**GitHub リンク**を開きます。"
description: "SmartGit 24.1 は、よりスマートなサブモジュール処理、よりクリーンな差分、および改善された GitHub 統合により、Git ワークフローを合理化します。今すぐ更新して、より効率的に作業してください。"
ogTitle: "SmartGit 24.1: より高速なワークフロー、よりクリーンなコミット、よりスマートな統合"
ogDesc: "SmartGit 24.1 は、よりスマートなサブモジュール処理、よりクリーンな差分、および改善された GitHub 統合により、Git ワークフローを合理化します。今すぐ更新して、より効率的に作業してください。"
weight: 200
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/24_1/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: f60cb44803501a4e616e2396a9fcb5752ed5c3ae
    sha256: a5df855703ee136dbba8629d3e393a43c8c3cc3788fbd9efca7042aea5ad5133
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 24.1は、サブモジュール、ホスティングプロバイダー、差分、コミット管理に関するワークフローの強力な使いやすさの改善をもたらします：
- より簡単なサブモジュール処理とファイルの大文字小文字の修正
- よりスマートな.gitignore編集
- コミットダイアログでのGitHub課題ピッカー
- ワンクリックで「ホスティングプロバイダーで開く」
- ホワイトスペース無視とロールバックオプションによるクリーンな差分

***

# **スタンダードウィンドウの改善**

# サブモジュールへの切り替えが簡単に

{{<screenshot alt="SmartGit 24.1 合理化されたリポジトリアクセスによる簡略化されたサブモジュール切り替え" src="easier-switching-to-submodule.png">}}

---

サブモジュールを持つリポジトリの場合、そのサブモジュールを開くことがはるかに簡単になりました。

# 大文字小文字が変更されたファイルを修正

{{<screenshot alt="SmartGit 24.1 クロスプラットフォーム互換性のための大文字小文字変更検出と名前変更オプション" src="fix-case-changed-files.png">}}

---

大文字小文字が変更されたファイルが強調表示され、修正するための2つのオプションが提供されます：ワーキングツリーファイルをリポジトリの大文字小文字に戻すか、リポジトリ内のファイルを名前変更するかです。

# Git Ignoreファイルを編集

{{<screenshot alt="SmartGit 24.1 インテリジェントなファイルパターン管理を備えたgitignoreファイルエディター" src="edit-git-ignore-file.png">}}

---

この機能（ワーキングツリーとログウィンドウに既に存在）は、どのGit ignoreファイルがファイルを無視する原因になっているかを特定したり、複数のGit ignoreファイルの1つを簡単に編集したりするのに役立ちます。

# サブディレクトリログ

{{<screenshot alt="SmartGit 24.1 集中した開発のためのサブディレクトリ固有のコミット履歴フィルタリング" src="subdirectory-log.png">}}

---

サブディレクトリログを呼び出して、表示されるコミットをこのサブディレクトリ内に変更を含むものに限定することもできます。

# ホスティングプロバイダーで開く

{{<screenshot alt="SmartGit 24.1 シームレスなブラウザナビゲーションのためのワンクリックGitHub/ホスティングプロバイダー統合" src="open-at-hosting-provider.png">}}

---

ホスティングプロバイダー（例：GitHub）のリポジトリの場合、ブラウザでコミットやリポジトリを開くことが簡単になりました。


# **一般的な改善**

# ホスティングプロバイダーからのクローン

{{<screenshot alt="SmartGit 24.1 OAuth GitHub統合による強化されたリポジトリクローンインターフェース" src="cloning-from-hosting-provider.png">}}

---

ホスティングプロバイダーからのクローンが大幅に改善され、より明確になっただけでなく、視覚的にも魅力的になりました。

GitHubの場合、一覧表示されるリポジトリを指定できます（例：自分のリポジトリやスター付きリポジトリ）。OAuthでアクセスできない組織は一覧プロセスを中断しなくなり、代わりに警告が表示されます。さらに、クエリパフォーマンスが大幅に改善されました。

# クローン：アクティブブランチ

{{<screenshot alt="SmartGit 24.1 リポジトリ設定のデフォルトブランチを使用したインテリジェントなブランチ選択" src="clone-active-branch.png">}}

---

リポジトリの管理者は、リポジトリのアクティブ（メイン）ブランチを設定できます。SmartGitはクローン時にこのブランチを事前選択するようになりました。

# クローン：より簡単なディレクトリ選択

{{<screenshot alt="SmartGit 24.1 トピック固有の整理による改善されたクローンディレクトリピッカー" src="clone-easier-directory-selection.png">}}

---

リポジトリを複数のトピック固有のディレクトリに保存している場合、改善されたディレクトリ選択により、場所の選択やディレクトリ名の変更が簡単になります。

# GitHubから課題を選択

{{<screenshot alt="SmartGit 24.1 合理化されたコミットメッセージワークフロー統合のためのGitHub課題ピッカー" src="select-issue-from-github.png">}}

---

JIRA統合と同様に、コミットメッセージ用にGitHubからチケットを選択できるようになりました。

# 同じホスティングプロバイダーで複数のアカウントを使用

{{<screenshot alt="SmartGit 24.1 GitHubワークフローのためのURL-アカウントマッピングによるマルチアカウントサポート" src="work-with-multiple-accounts-at-same-hosting-provider.png">}}

---

GitHubなど1つのホスティングプロバイダーに複数のアカウントがある場合、SmartGitでは使用するアカウントを選択できます。この選択はURL-アカウントマッピングとして記憶され、新しいクローンに自動的に適用されます。

# ファイルログ、Blame、調査：コピーを追跡

{{<screenshot alt="SmartGit 24.1 包括的なコード調査のためのコピー検出を備えたファイル履歴追跡" src="file-log-blame-investigate-follow-copies.png">}}

---

追加されたファイルがゼロから作成されるのではなく、既存のファイルの変更である場合があります。ファイルログ、Blame、調査コマンドは、オプションでこれらのコピーを検出し、コピー元に対して操作を続行できるようになりました。

# 変更ビュー：無関係なホワイトスペースを無視

{{<screenshot alt="SmartGit 24.1 クリーンなコードレビューのための変更ビューでのホワイトスペースフィルタリング" src="changes-view-ignore-irrelevant-whitespace.png">}}

---

ソースコードファイルが再フォーマットされた後などは、無関係なホワイトスペースを無視すると便利です。新しい構文ベースの色付けと組み合わせて、新しいツールバーボタンにより、コードの意味を変えないすべてのホワイトスペースの変更をすばやく非表示にできます。

気づかないうちにホワイトスペースの変更をコミットしてしまうのを避けるため、ローカルファイルの場合、選択が変更されるとこのオプションは自動的にリセットされます。コミット済みファイルの表示では、保持されます。

# ロールバック先

{{<screenshot alt="SmartGit 24.1 正確なワーキングツリーとインデックス状態管理のためのロールバック先コマンド" src="rollback-to.png">}}

---

ロールバック先は、選択したコミットの状態にワーキングツリーまたはインデックスを設定する新しいパワーユーザーコマンドです。コミット全体（すべてのファイルに影響）またはコミット内の特定のファイルに対して実行できます。

この機能は、最後のコミットに以前のフィーチャーブランチの残りのすべての変更を含める必要がある小さなフィーチャーブランチを再構築する場合に非常に役立ちます。

# SmartGitを認証ヘルパーとして使用

{{<screenshot alt="SmartGit 24.1 統一されたGitコマンドライン認証のための認証ヘルパー設定" src="smartgit-as-credential-helper.png">}}

---

SmartGitを使用してリポジトリをクローンする際、コマンドラインでGitコマンドを使用する場合にSmartGitが認証を処理するようにリポジトリを設定できます（オプション）。

これは、主にSmartGitを使用しているが、会社固有のワークフロー用にスクリプトを実行する必要がある場合に非常に便利です。これにより、資格情報が1つの中央の場所に保存されることを確認できます。

# アップストリームリモートを追加

{{<screenshot alt="SmartGit 24.1 GitHubフォークワークフロー管理のための自動アップストリームリモート設定" src="add-upstream-remote.png">}}

---

アップストリームリモートを作成せずにGitHubリポジトリのフォークをクローンした場合、Remote | Addを呼び出すだけで後から追加できます。入力フィールドにはアップストリームデータが事前入力されます。

# バンドルされたGitの選択が簡単に

{{<screenshot alt="SmartGit 24.1 バージョン検出とバンドルオプションを備えたGit実行ファイル選択" src="easier-selection-of-bundled-git.png">}}

---

バンドルされたGitや別のGit実行ファイルを選択することが簡単になりました。

検出されたGitとGit-LFSのバージョンが表示されます。

# 比較：より良い選択色

{{<screenshot alt="SmartGit 24.1 改善された選択ハイライトの持続性を備えた強化された比較ビュー" src="compare-better-selection-color.png">}}

---

コントロールが実際にはフォーカスされていない場合でも（検索ダイアログやコンテキストメニューを表示した場合など）、選択色が保持されるようになりました。

# Mac OSでのコントロール配置を修正

{{<screenshot alt="SmartGit 24.1 適切なフォントベースライン配置によるmacOSインターフェースの改善" src="fixed-control-alignment-on-mac-os.png">}}

---

Mac OSでは、コントロール、特にラベル、チェックボックス、ラジオボタンが、フォントのベースラインに垂直に配置されていませんでした。これが修正されました。

# 合理化されたセットアップ

{{<screenshot alt="SmartGit 24.1 合理化された設定プロセスによる簡略化されたセットアップウィザード" src="stream-lined-setup.png">}}

---

SmartGitのセットアップは、本質的でない部分を削除し（SSHクライアントは環境設定で設定できます）、ページを並べ替えることで合理化されました。

# クラウド/エンタープライズホスティングプロバイダーの分離

{{<screenshot alt="SmartGit 24.1 分離されたクラウドとエンタープライズホスティングプロバイダー設定" src="split-cloud-enterprise-hosting-providers.png">}}

---

ホスティングプロバイダーがクラウドとエンタープライズに分割され、設定が簡略化されました。













</screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>