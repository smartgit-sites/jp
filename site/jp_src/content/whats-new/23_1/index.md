---
title: "Version 23.1"
headerH2: "Major Improvements in SmartGit 23.1"
listTitle: "Version 23.1"
imageAltText: "SmartGit 23.1 with enhanced branch history, safer commits, and improved GitHub integration"
linkText: "More about SmartGit Version 23.1"
category: ["feature"]
headerMessage: "Control **branch history** and preview **commits** safely with smarter **GitHub** handling in 23.1."
description: "SmartGit 23.1 brings smoother branch history customization, safer commit previews, better GitHub email handling, expanded syntax support, and enterprise license server capabilities — update now for a more efficient Git experience."
ogTitle: "SmartGit 23.1: Safer commits, more branch control, smarter GitHub support"
ogDesc: "SmartGit 23.1 brings smoother branch history customization, safer commit previews, better GitHub email handling, expanded syntax support, and enterprise license server capabilities — update now for a more efficient Git experience."
weight: 300
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/23_1/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 6a6e5a97c27e98dcf0e2a4cf169d8de80b499739
    modified_committed_at: 2025-09-02T15:04:52Z
    blob: e51993f307cfd4c7943a1d9116832a2e614be290
    sha256: 3499eb5aaffc8167410447612c812f74596e1a25aaf6e4d0d6f0fee37b2e0409
    fetched_at: 2026-05-12T00:35:06Z
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

{{<screenshot src="my-history-improvements.png" alt="SmartGit 23.1 お気に入りブランチと集中したリポジトリ表示を備えたマイヒストリービュー">}}

---

マイヒストリービューは、リポジトリのログのメインビューです。

デフォルトでは、ローカルブランチ、メインブランチ（例：develop）、プルリクエストのみが表示されます。

新しい「お気に入り」ブランチ機能を使用して、関連する追加のリモートブランチを追加できます：

- 定期的にマージするブランチ
- 重要な作業が行われている他のブランチ
- ...

あなたのお気に入りなので、あなた次第です。 


# マイヒストリーの改善：分岐

{{<screenshot src="my-history-improvements-diverged.png" alt="SmartGit 23.1 直感的なリモート配置を備えたマイヒストリーでの分岐ブランチ表示">}}

---

ローカルブランチがリモートブランチから分岐している場合、リモートブランチはマイヒストリービューでローカルブランチの下に表示されます。これにより、リモートブランチの選択がより直感的になります。 


# タブの並び替え

{{<screenshot src="reorder-tabs.gif" alt="SmartGit 23.1 カスタマイズされたリポジトリワークスペースのためのドラッグアンドドロップタブ並び替え">}}

---

ドラッグアンドドロップを使用してリポジトリタブを並び替えます。


# スマートな修正ロジック

{{<screenshot src="smart-amend-logic.gif" alt="SmartGit 23.1 手動選択を保持するインテリジェントな修正チェックボックスの動作">}}

---

以前のコミットメッセージを再利用するには（若干の変更を加えて）、最近のコミットエリアの以前のコミットをクリックできます。プッシュされていないHEADコミットをクリックすると、修正チェックボックスが自動的に設定されます。ただし、メッセージを変更し始めると、自動的に解除されていました。

修正チェックボックスを手動で設定した場合、コミットメッセージを編集しても解除されなくなりました


# 直感的なブランチ/タグ比較

{{<screenshot src="intuitive-branch-tag-compare.png" alt="SmartGit 23.1 すべてのブランチ+タグビューでのマルチ選択によるブランチ比較">}}

---

ブランチ（またはタグ）で定義された2つのリポジトリ状態を比較するには、すべてのブランチ+タグリストで両方を選択するだけです。


# コミットのチェックアウト

{{<screenshot src="checking-out-a-commit.png" alt="SmartGit 23.1 一時ブランチ自動作成による安全なコミットチェックアウト">}}

---

コミットをチェックアウトすると、通常はさらなる（新しい）コミットが簡単に失われる状態になります。これを避けるため、スタンダードウィンドウでコミットをチェックアウトする際に、（一時的な）ブランチが作成されます。


# ファイルを状態でグループ化

{{<screenshot src="group-files-by-state.png" alt="SmartGit 23.1 整理された変更の可視性を備えた変更状態によるファイルグループ化">}}

---

変更されたファイルだけでなく、すべてのファイルを表示したい場合は、「状態でグループ化」を選択して、変更された状態をファイルリストの上部に表示できます。


# 複数のメインブランチのサポート

{{<screenshot src="support-for-multiple-main-branches-1.png" alt="SmartGit 23.1 Featureワークフローの柔軟性のための複数のメインブランチ設定">}}
{{<screenshot src="support-for-multiple-main-branches-2.png" alt="SmartGit 23.1 複数のメインブランチ選択オプションを備えたフィーチャー開始ダイアログ">}}

---

Featureワークフローは、メインの開発ブランチ（例：develop）に加えて、複数のメインブランチをサポートするようになりました。たとえば、release-...ブランチを追加のメインブランチとして設定し、そのようなブランチのバグ修正フィーチャーを簡単に開始できます。

このため、複数のメインブランチが設定されている場合、フィーチャー開始ダイアログには追加の「開始元」セレクターが含まれます。 


# より良いマルチリモートサポート

{{<screenshot src="better-multi-remote-support.png" alt="SmartGit 23.1 選択的なフェッチとプルオプションによる強化されたマルチリモート操作">}}

---

マルチリモートリポジトリの場合、すべてまたは特定のリモートからフェッチしたり、すべてからプルしたりすることが簡単になりました。 


# フィルターでのパスサポート

{{<screenshot src="path-support-in-filter-1.png" alt="SmartGit 23.1 検索と整理機能を備えたパスによるリポジトリフィルタリング">}}
{{<screenshot src="path-support-in-filter-2.png" alt="SmartGit 23.1 パスベースのフィルタリングと場所選択を備えたリポジトリ初期化">}}

---

リポジトリタブでは、パスでリポジトリをフィルタリングしたり、既存のものを追加したり、新しいリポジトリを初期化したりできます。


# ツールバーにコマンドを追加

{{<screenshot src="add-more-commands-to-the-toolbar.png" alt="SmartGit 23.1 コンテキスト依存のコマンド追加を備えたカスタマイズ可能なツールバー">}}

---

スタンダードウィンドウの異なるビューには異なるツールバーが表示されます。コンテキストメニューを使用して、これらのツールバーにさらにコマンドを追加できるようになりました。 


# **一般的な改善**

# 見えているものをコミット

{{<screenshot src="commit-what-you-see.png" alt="SmartGit 23.1 フィルタリングされたビューサポートを備えた表示ファイルの選択的コミット機能">}}

---

何もステージされていない場合、コミットビューからすべてのファイルをコミットすることがより直感的で安全になりました。表示されるファイルがサブディレクトリに制限されていたり、名前やタイプでフィルタリングされていても、すべての**表示**ファイルをコミットできるようになりました。 


# コミットメッセージのコメント行

{{<screenshot src="comment-lines-in-commits-messages-1.png" alt="SmartGit 23.1 保持または削除オプションを備えたコミットメッセージコメント処理">}}
{{<screenshot src="comment-lines-in-commits-messages-2.png" alt="SmartGit 23.1 一貫したコミット動作のためのコメント行設定">}}

---

コミットメッセージにコメント行が含まれている場合、デフォルトでSmartGitはそれらをどう処理するか尋ねます。環境設定で、コメント行を常に保持または削除するように設定できます。 


# ファイルを分離

{{<screenshot src="split-off-files.png" alt="SmartGit 23.1 柔軟なコミット配置オプションを備えたファイル分離機能">}}

---

ファイル分離機能を使用すると、コミットの特定の変更されたファイルを2番目のコミットに移動できます。新しいコミットを他のコミットの前に作成するか後に作成するかを指定できるようになりました。


# GitHub、GitLab、BitBucketアカウント

{{<screenshot src="github-gitlab-and-bitbucket-accounts.png" alt="SmartGit 23.1 GitHub、GitLab、Bitbucketアカウント統合のためのOAuth 2.0設定">}}

---

GitHub、GitLab、BitBucketアカウントの設定がOAuth 2.0でより簡単になりました - パスワードをコピーする必要がなくなりました。


# ファイル比較、変更ビュー：ホワイトスペースの表示

{{<screenshot src="file-compare-changes-view-display-of-whitspaces.png" alt="SmartGit 23.1 タブ対スペース検出を備えたファイル比較でのホワイトスペース視覚化">}}

---

「末尾、選択範囲、変更ブロック」オプションが選択されている場合、タブとスペースのどちらが使用されているかをすばやく確認することが簡単になります - テキストを選択するだけです。 


# 変更ビュー

{{<screenshot src="changes-view.png" alt="SmartGit 23.1 精密な変更管理のための選択的な行適用を備えた変更ビュー">}}

---

変更されたブロックの場合、ブロックの先頭または末尾の行の適用がサポートされています。 


# GitHub No-replyメールを使用

{{<screenshot src="use-github-no-reply-emails.png" alt="SmartGit 23.1 プライバシー重視のコミット作成のためのGitHub no-replyメール確認">}}

---

GitHubリポジトリにコミットする際、SmartGitは標準のメールアドレスを公開しないように、使用するメールアドレスの確認を求めます。no-replyメールアドレスは記憶されるので、リポジトリごとに入力する必要はありません。 


# GitHubアバターのサポート

{{<screenshot src="support-for-github-avatars.png" alt="SmartGit 23.1 GitHub no-replyメールアドレス用のGitHubアバター統合">}}

---

``<account>@users.noreply.github.com``メールアドレスを使用してGitHubリポジトリにコミットする場合、アカウントアバターが使用されます。


# 改善されたクリーンワーキングツリー

{{<screenshot src="improves-clean-working-tree.png" alt="SmartGit 23.1 より明確なオプション説明を備えた強化されたクリーンワーキングツリーダイアログ">}}

---

クリーンワーキングツリーコマンドのオプションがより理解しやすくなりました。 


# 刷新されたフォントと色の設定

{{<screenshot src="reworked-font-and-colors-configuration.png" alt="SmartGit 23.1 ライブプレビューとエクスポート機能を備えた再設計されたフォントと色の設定">}}

---

フォントと色を設定するための設定ページが刷新されました。特に、構文色の設定はプレビュー機能の恩恵を受けます。色設定のエクスポートとインポートにより、共有が簡単になります。 


# 新しい構文カラーリング

{{<screenshot src="new-syntax-colorings.png" alt="SmartGit 23.1 Markdown、TOML、Verilogなどの言語向け拡張構文ハイライトサポート">}}

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

{{<screenshot src="on-premise-license-server.png" alt="SmartGit 23.1 集中ライセンス管理のためのエンタープライズオンプレミスライセンスサーバー">}}

---

オンプレミスライセンスサーバーを使用すると、SmartGitライセンスの配布が容易になります。すべての従業員とライセンスファイルを共有する代わりに、（社内の）ライセンスサーバーのURLを共有するだけで十分です。

**注意**：オンプレミスライセンスサーバーはエンタープライズのお客様にのみ提供しています。 


# ファイルログ：ブランチとタグの表示

{{<screenshot src="file-log-branch-and-tag-display.png" alt="SmartGit 23.1 コミット参照のための正確なブランチとタグマッピングインジケーターを備えたファイルログ">}}

---

ファイルログにはすべてのリポジトリコミットのサブセットのみが含まれ、参照はこれらのコミットにマッピングされます。各参照の表示は、参照がそのコミットを正確に指しているか、またはそのコミットにマッピングされただけか（˜）を区別するようになりました。 


# Bisect：良い/悪いコミットの表示改善

{{<screenshot src="biscet-improved-display-of-good-bad-commits.png" alt="SmartGit 23.1 マージされたブランチ全体で良い/悪いコミットを表示するbisect視覚化">}}

---

良いコミットと悪いコミットの表示が、マージされたブランチからのコミットも考慮するようになりました。 


# GitHubなど：プルリクエストの作成がWebブラウザにリダイレクト

{{<screenshot src="github-and-others-creating-pull-request-redirects-to-the-web-browser.png" alt="SmartGit 23.1 事前入力フォームを備えたWebブラウザへのプルリクエスト作成リダイレクト">}}

---

GitHub、GitLab、Bitbucket、Azure DevOps用の組み込みのプルリクエスト作成ダイアログが、ユーザーを直接Webブラウザにリダイレクトする方式に置き換えられました。

リダイレクトの主な利点は、特定のプラットフォームで利用可能なすべてのオプションとチェックが存在し、SmartGitの機能が不足することがないことです。

さらに、SmartGitはプルリクエストフォームを事前入力するための適切なURLを生成します。これにより、以前のダイアログとほぼ同様にシームレスなワークフローが実現します。 









