---
title: "バージョン23.1"
headerH2: "SmartGit 23.1 の主な改善点"
listTitle: "バージョン23.1"
imageAltText: "SmartGit 23.1 では、強化されたブランチ履歴、より安全なコミット、および改善された GitHub 統合を備えています"
linkText: "SmartGit バージョン 23.1 の詳細"
category: ["feature"]
headerMessage: "23.1 のよりスマートな **GitHub** 処理により、**ブランチ履歴**を制御し、**コミットを安全にプレビュー**できます。"
description: "SmartGit 23.1 は、よりスムーズなブランチ履歴のカスタマイズ、より安全なコミット プレビュー、より優れた GitHub 電子メール処理、拡張された構文サポート、エンタープライズ ライセンス サーバー機能を提供します。より効率的な Git エクスペリエンスを得るには、今すぐ更新してください。"
ogTitle: "SmartGit 23.1: より安全なコミット、より多くのブランチ制御、よりスマートな GitHub サポート"
ogDesc: "SmartGit 23.1 は、よりスムーズなブランチ履歴のカスタマイズ、より安全なコミット プレビュー、より優れた GitHub 電子メール処理、拡張された構文サポート、エンタープライズ ライセンス サーバー機能を提供します。より効率的な Git エクスペリエンスを得るには、今すぐ更新してください。"
weight: 300
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/23_1/index.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: e51993f307cfd4c7943a1d9116832a2e614be290
    sha256: 3499eb5aaffc8167410447612c812f74596e1a25aaf6e4d0d6f0fee37b2e0409
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 23.1は、日常のGit作業を効率化するための的を絞った機能強化を提供します — ブランチの視覚化、自信を持ったコミット、エンタープライズ環境での作業など：
- よりスマートなブランチ履歴とより安全なコミット
- 改善されたGitHubアイデンティティ処理
- 拡張された構文処理

***

# **スタンダードウィンドウの改善**

# マイヒストリーの改善

{{<screenshot alt="SmartGit 23.1 お気に入りブランチと集中したリポジトリ表示を備えたマイヒストリービュー" src="my-history-improvements.png">}}

---

マイヒストリービューは、リポジトリのログのメインビューです。

デフォルトでは、ローカルブランチ、メインブランチ（例：develop）、プルリクエストのみが表示されます。

新しい「お気に入り」ブランチ機能を使用して、関連する追加のリモートブランチを追加できます：

- 定期的にマージするブランチ
- 重要な作業が行われている他のブランチ
- ...

あなたのお気に入りなので、あなた次第です。


# マイヒストリーの改善：分岐

{{<screenshot alt="SmartGit 23.1 直感的なリモート配置を備えたマイヒストリーでの分岐ブランチ表示" src="my-history-improvements-diverged.png">}}

---

ローカルブランチがリモートブランチから分岐している場合、リモートブランチはマイヒストリービューでローカルブランチの下に表示されます。これにより、リモートブランチの選択がより直感的になります。


# タブの並び替え

{{<screenshot alt="SmartGit 23.1 カスタマイズされたリポジトリワークスペースのためのドラッグアンドドロップタブ並び替え" src="reorder-tabs.gif">}}

---

ドラッグアンドドロップを使用してリポジトリタブを並び替えます。


# スマートな修正ロジック

{{<screenshot alt="SmartGit 23.1 手動選択を保持するインテリジェントな修正チェックボックスの動作" src="smart-amend-logic.gif">}}

---

以前のコミットメッセージを再利用するには（若干の変更を加えて）、最近のコミットエリアの以前のコミットをクリックできます。プッシュされていないHEADコミットをクリックすると、修正チェックボックスが自動的に設定されます。ただし、メッセージを変更し始めると、自動的に解除されていました。

修正チェックボックスを手動で設定した場合、コミットメッセージを編集しても解除されなくなりました


# 直感的なブランチ/タグ比較

{{<screenshot alt="SmartGit 23.1 すべてのブランチ+タグビューでのマルチ選択によるブランチ比較" src="intuitive-branch-tag-compare.png">}}

---

ブランチ（またはタグ）で定義された2つのリポジトリ状態を比較するには、すべてのブランチ+タグリストで両方を選択するだけです。


# コミットのチェックアウト

{{<screenshot alt="SmartGit 23.1 一時ブランチ自動作成による安全なコミットチェックアウト" src="checking-out-a-commit.png">}}

---

コミットをチェックアウトすると、通常はさらなる（新しい）コミットが簡単に失われる状態になります。これを避けるため、スタンダードウィンドウでコミットをチェックアウトする際に、（一時的な）ブランチが作成されます。


# ファイルを状態でグループ化

{{<screenshot alt="SmartGit 23.1 整理された変更の可視性を備えた変更状態によるファイルグループ化" src="group-files-by-state.png">}}

---

変更されたファイルだけでなく、すべてのファイルを表示したい場合は、「状態でグループ化」を選択して、変更された状態をファイルリストの上部に表示できます。


# 複数のメインブランチのサポート

{{<screenshot alt="SmartGit 23.1 Featureワークフローの柔軟性のための複数のメインブランチ設定" src="support-for-multiple-main-branches-1.png">}}
{{<screenshot alt="SmartGit 23.1 複数のメインブランチ選択オプションを備えたフィーチャー開始ダイアログ" src="support-for-multiple-main-branches-2.png">}}

---

Featureワークフローは、メインの開発ブランチ（例：develop）に加えて、複数のメインブランチをサポートするようになりました。たとえば、release-...ブランチを追加のメインブランチとして設定し、そのようなブランチのバグ修正フィーチャーを簡単に開始できます。

このため、複数のメインブランチが設定されている場合、フィーチャー開始ダイアログには追加の「開始元」セレクターが含まれます。


# より良いマルチリモートサポート

{{<screenshot alt="SmartGit 23.1 選択的なフェッチとプルオプションによる強化されたマルチリモート操作" src="better-multi-remote-support.png">}}

---

マルチリモートリポジトリの場合、すべてまたは特定のリモートからフェッチしたり、すべてからプルしたりすることが簡単になりました。


# フィルターでのパスサポート

{{<screenshot alt="SmartGit 23.1 検索と整理機能を備えたパスによるリポジトリフィルタリング" src="path-support-in-filter-1.png">}}
{{<screenshot alt="SmartGit 23.1 パスベースのフィルタリングと場所選択を備えたリポジトリ初期化" src="path-support-in-filter-2.png">}}

---

リポジトリタブでは、パスでリポジトリをフィルタリングしたり、既存のものを追加したり、新しいリポジトリを初期化したりできます。


# ツールバーにコマンドを追加

{{<screenshot alt="SmartGit 23.1 コンテキスト依存のコマンド追加を備えたカスタマイズ可能なツールバー" src="add-more-commands-to-the-toolbar.png">}}

---

スタンダードウィンドウの異なるビューには異なるツールバーが表示されます。コンテキストメニューを使用して、これらのツールバーにさらにコマンドを追加できるようになりました。


# **一般的な改善**

# 見えているものをコミット

{{<screenshot alt="SmartGit 23.1 フィルタリングされたビューサポートを備えた表示ファイルの選択的コミット機能" src="commit-what-you-see.png">}}

---

何もステージされていない場合、コミットビューからすべてのファイルをコミットすることがより直感的で安全になりました。表示されるファイルがサブディレクトリに制限されていたり、名前やタイプでフィルタリングされていても、すべての**表示**ファイルをコミットできるようになりました。


# コミットメッセージのコメント行

{{<screenshot alt="SmartGit 23.1 保持または削除オプションを備えたコミットメッセージコメント処理" src="comment-lines-in-commits-messages-1.png">}}
{{<screenshot alt="SmartGit 23.1 一貫したコミット動作のためのコメント行設定" src="comment-lines-in-commits-messages-2.png">}}

---

コミットメッセージにコメント行が含まれている場合、デフォルトでSmartGitはそれらをどう処理するか尋ねます。環境設定で、コメント行を常に保持または削除するように設定できます。


# ファイルを分離

{{<screenshot alt="SmartGit 23.1 柔軟なコミット配置オプションを備えたファイル分離機能" src="split-off-files.png">}}

---

ファイル分離機能を使用すると、コミットの特定の変更されたファイルを2番目のコミットに移動できます。新しいコミットを他のコミットの前に作成するか後に作成するかを指定できるようになりました。


# GitHub、GitLab、BitBucketアカウント

{{<screenshot alt="SmartGit 23.1 GitHub、GitLab、Bitbucket アカウント統合のためのOAuth 2.0設定" src="github-gitlab-and-bitbucket-accounts.png">}}

---

GitHub、GitLab、BitBucketアカウントの設定がOAuth 2.0でより簡単になりました - パスワードをコピーする必要がなくなりました。


# ファイル比較、変更ビュー：ホワイトスペースの表示

{{<screenshot alt="SmartGit 23.1 タブ対スペース検出を備えたファイル比較でのホワイトスペース視覚化" src="file-compare-changes-view-display-of-whitspaces.png">}}

---

「末尾、選択範囲、変更ブロック」オプションが選択されている場合、タブとスペースのどちらが使用されているかをすばやく確認することが簡単になります - テキストを選択するだけです。


# 変更ビュー

{{<screenshot alt="SmartGit 23.1 精密な変更管理のための選択的な行適用を備えた変更ビュー" src="changes-view.png">}}

---

変更されたブロックの場合、ブロックの先頭または末尾の行の適用がサポートされています。


# GitHub No-replyメールを使用

{{<screenshot alt="SmartGit 23.1 プライバシー重視のコミット作成のためのGitHub no-replyメール確認" src="use-github-no-reply-emails.png">}}

---

GitHubリポジトリにコミットする際、SmartGitは標準のメールアドレスを公開しないように、使用するメールアドレスの確認を求めます。no-replyメールアドレスは記憶されるので、リポジトリごとに入力する必要はありません。


# GitHubアバターのサポート

{{<screenshot alt="SmartGit 23.1 GitHub no-replyメールアドレス用のGitHubアバター統合" src="support-for-github-avatars.png">}}

---

``<account>@users.noreply.github.com``メールアドレスを使用してGitHubリポジトリにコミットする場合、アカウントアバターが使用されます。


# 改善されたクリーンワーキングツリー

{{<screenshot alt="SmartGit 23.1 より明確なオプション説明を備えた強化されたクリーンワーキングツリーダイアログ" src="improves-clean-working-tree.png">}}

---

クリーンワーキングツリーコマンドのオプションがより理解しやすくなりました。


# 刷新されたフォントと色の設定

{{<screenshot alt="SmartGit 23.1 ライブプレビューとエクスポート機能を備えた再設計されたフォントと色の設定" src="reworked-font-and-colors-configuration.png">}}

---

フォントと色を設定するための設定ページが刷新されました。特に、構文色の設定はプレビュー機能の恩恵を受けます。色設定のエクスポートとインポートにより、共有が簡単になります。


# 新しい構文カラーリング

{{<screenshot alt="SmartGit 23.1 Markdown、TOML、Verilogなどの言語向け拡張構文ハイライトサポート" src="new-syntax-colorings.png">}}

---

以下の言語の構文カラーリングが追加されました：

- Markdown
- TOML
- Verilog
- X86アセンブラ
- Lua/Nelua
- Odin
- Forth


# オンプレミスライセンスサーバー

{{<screenshot alt="SmartGit 23.1 集中ライセンス管理のためのエンタープライズオンプレミスライセンスサーバー" src="on-premise-license-server.png">}}

---

オンプレミスライセンスサーバーを使用すると、SmartGitライセンスの配布が容易になります。すべての従業員とライセンスファイルを共有する代わりに、（社内の）ライセンスサーバーのURLを共有するだけで十分です。

**注意**：オンプレミスライセンスサーバーはエンタープライズのお客様にのみ提供しています。


# ファイルログ：ブランチとタグの表示

{{<screenshot alt="SmartGit 23.1 コミット参照のための正確なブランチとタグマッピングインジケーターを備えたファイルログ" src="file-log-branch-and-tag-display.png">}}

---

ファイルログにはすべてのリポジトリコミットのサブセットのみが含まれ、参照はこれらのコミットにマッピングされます。各参照の表示は、参照がそのコミットを正確に指しているか、またはそのコミットにマッピングされただけか（˜）を区別するようになりました。


# Bisect：良い/悪いコミットの表示改善

{{<screenshot alt="SmartGit 23.1 マージされたブランチ全体で良い/悪いコミットを表示するbisect視覚化" src="biscet-improved-display-of-good-bad-commits.png">}}

---

良いコミットと悪いコミットの表示が、マージされたブランチからのコミットも考慮するようになりました。


# GitHubなど：プルリクエストの作成がWebブラウザにリダイレクト

{{<screenshot alt="SmartGit 23.1 事前入力フォームを備えたWebブラウザへのプルリクエスト作成リダイレクト" src="github-and-others-creating-pull-request-redirects-to-the-web-browser.png">}}

---

GitHub、GitLab、Bitbucket、Azure DevOps用の組み込みのプルリクエスト作成ダイアログが、ユーザーを直接Webブラウザにリダイレクトする方式に置き換えられました。

リダイレクトの主な利点は、特定のプラットフォームで利用可能なすべてのオプションとチェックが存在し、SmartGitの機能が不足することがないことです。

さらに、SmartGitはプルリクエストフォームを事前入力するための適切なURLを生成します。これにより、以前のダイアログとほぼ同様にシームレスなワークフローが実現します。









</screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></account></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot></screenshot>