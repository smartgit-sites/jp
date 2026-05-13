---
title: "再販業者向けの購入情報"
headerH1: "購入情報"
headerH2: "再販業者向け"

Summary: "What do you want to order?"

shortLinks:
  - name: "New License"
    desc: "新しいライセンスを注文する"
    icon: "fa-regular fa-sparkles fa-2x"
    link: "#new"
    linkText: "新しいライセンス"
    target: ""
  - name: "Renew License"
    desc: "既存のライセンスを更新する（更新）"
    icon: "fa-regular fa-repeat fa-2x"
    link: "#update"
    linkText: "既存の更新"
    target: ""
  - name: "Resell SmartGit"
    desc: "**便宜的に追加された**再販業者のみ"
    icon: "fa-regular fa-store fa-2x"
    link: "#reseller"
    linkText: "資格を得る"
    target: ""

weight: 30
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: pricing/reseller-information.md
    commit: e6b2b5395e838eabbd1fa131b1c28aca620b15dd
    committed_at: 2026-05-12T12:13:21Z
    modified_commit: b84650c18d8c8ef3a7ca60f82831627113368c73
    modified_committed_at: 2026-01-27T08:43:48Z
    blob: f3ca70a8bfeb729b3bc79b236e9ce606f7504ea7
    sha256: a0ad78dd0b5f79df6b5ad562f04b22f34c659224d72689fe22d2f4d0c82d937a
    fetched_at: 2026-05-13T23:14:41Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:36:05Z
---
{{% section-with-content sectionClasses="pb-5 mb-5" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/pricing/reseller-information.md" listName="shortLinks" >}}
{{% /section-with-content %}}
{{< message message="再販業者が当社側で導入する諸経費が（通常の顧客と比較して）増加しているため、[便利な追加再販業者](#reseller) を除き、再販業者割引は提供していません。" >}}

{{<headlinebeautifier level="3" text="新しいライセンスを注文する" id="new" class="mt-5" >}}

1. {{< link url="/pricing/#subscription" target="_blank" display="SmartGit購入ページ" >}} に移動し、エンドユーザーのニーズに合わせてオプション（ライセンス数、サポート、アドオンなど）を変更します
2. 見積もりが必要な場合は、**見積もりの​​リクエスト** をクリックしてください。
   {{< message message="最終的なお見積りはメールにてお送りさせていただきます。このメールには、購入プロセス全体を再実行せずに購入を開始するためのリンクが含まれているため、必ず保管してください。" >}}
3. [**Cleverbridge 経由で購入**] をクリックして購入を進めます
   {{< message type="warning" message="Cleverbridgeは当社の決済サービスプロバイダーです。今後は、Cleverbridge がお客様の連絡窓口となります。支払い処理に問題がある場合は、Cleverbridge までご連絡ください。" >}}

{{<headlinebeautifier level="3" text="既存のライセンスを更新する（更新）" id="update" class="mt-5" >}}

1. エンドユーザーが更新したいライセンス ファイルが利用可能であることを確認してください。
   {{< message message="すでに以前の (古い) ライセンスを注文している場合は、(1) ライセンス ファイルを含む電子メールが、liverbridge.com ドメインまたは syntevo.com ドメインから受信されており、(2) このライセンス ファイルがエンドユーザーに転送されています。どちらの場合も、古いライセンス ファイルは電子メール システムにすでに存在します。" >}}
   {{< message message="前のライセンスを注文していない場合は、エンドユーザーにライセンス ファイルを提供するよう依頼してください。(1) 注文後に電子メールでライセンス ファイルを受け取ります。(2) ライセンス ファイルは、SmartGit の設定ディレクトリ内のすべてのマシンにあります。" >}}
2. {{< link url="/pricing/#upgrade" target="_blank" display="SmartGit購入ページ" >}} に移動します（**アップグレード**タブを選択してください）
3. **ライセンス ファイルをアップロード**: ここではエンド ユーザーの以前のライセンス ファイルを使用します。これにより、利用可能な割引が得られます
4. エンドユーザーのニーズに応じてライセンス構成を調整します (ライセンス数、アップデート、サポート、アドオンなど)。
5. 見積りが必要な場合は、「見積り依頼」をクリックしてください
   {{< message message="最終的なお見積りはメールにてお送りさせていただきます。後で購入プロセス全体を再度実行することなく、見積を直接注文書に変換できるように、このメールは必ず保存してください。" >}}
6. [**Cleverbridge 経由で購入**] をクリックして購入を進めます
   {{< message type="warning" message="Cleverbridgeは当社の決済サービスプロバイダーです。今後は、Cleverbridge がお客様の連絡窓口となります。支払い処理に問題がある場合は、Cleverbridge までご連絡ください。" >}}

### サブスクリプション{ class="mt-5"}

サブスクリプションや更新については**見積もりをリクエストする方法**はありません。

再販業者には、サブスクリプションではなく一括払いライセンスの注文をおすすめします。サブスクリプションライセンスは、クレジットカードや PayPal などの自動支払い方法による自動更新を前提としており、更新時に別の価格が合意されていない限り同じ価格で更新されるためです。SmartGit サブスクリプションを注文する場合は、{{< link url="/pricing" target="_blank" display="SmartGit購入ページ" >}} を使用してください。

サブスクリプションまたはその更新に関するお見積りリクエストにはお答えしません。代わりに、サブスクリプションがお客様にとって適切なオプションではないため、1 回払いライセンスの価格をお送りする場合があります。

{{<headlinebeautifier level="3" text="利便性を追加した再販業者" id="reseller" class="mt-5" >}}

「コンビニエンス追加販売代理店」として認定するには、次の条件を満たす必要があります。

- すべての潜在顧客が簡単に見つけられるように、SmartGit を Web サイトに掲載する必要があります。
- 当社が再販契約書やその他のフォームに記入する必要はありません。
- あなたのチームは、当社のウェブサイトに掲載されている価格、見積もり、その他の情報について当社に問い合わせることなく購入を実行できるように編成する必要があります。
- すでに当社製品のライセンスを少なくとも 3 回再販しており、個別の販売ごとに少なくとも 1,000 米ドル/ユーロの注文量があります。

これらの条件を満たしたら、次の情報を記載して {{< cloakemail address="sales@syntevo.com" >}} までメールをお送りください。

- SmartGit をすばやく見つけられる Web サイトのホームページへのリンク

リンクを確認した後、通常価格に基づいて最大 10% の再販業者割引が適用される注文および見積もりリクエスト用の再販業者 ID を送信します。

リセラー ID を受け取ったら、次の手順に従って割引価格で購入してください。

{{% section-with-content sectionClasses="py-5 mb-5" columnClasses="col-12 col-md-6" %}}
#### 新規購入
1. {{< link url="/pricing" target="_blank" display="SmartGit購入ページ" >}} を開きます（**一括払い**タブを選択してください）
2. エンドユーザーのニーズに応じてライセンス構成を変更します (ライセンス数、サポート、アドオンなど)。
3. **再販業者 ID** を入力してください
4. **見積依頼** または **購入** をクリックします
---
#### アップグレード
1. {{< link url="/pricing/#upgrade" target="_blank" display="SmartGit購入ページ" >}} を開きます（**アップグレード**タブを選択してください）
2. **ライセンス ファイルをアップロード**: ここでエンド ユーザーの以前のライセンス ファイルを使用します
3. エンドユーザーのニーズに応じてライセンス構成を調整します (ライセンス数、アップデート、サポート、アドオンなど)。
4. **再販業者 ID** を入力してください
5. **見積依頼** または **購入** をクリックします
{{% /section-with-content %}}

{{< message type="warning" message="お客様が当社にご連絡いただいた購入については、再販業者割引は提供しません (唯一の例外は、購入ページで直接処理できない大量の購入です)。" >}}

### 払い戻し{class="mt-5"}

お客様側のミスによる払い戻しの場合、Cleverbridge の料金および配信されたライセンス ファイルを無効にするための作業として、支払われた価格の 10% が差し引かれる場合があります。
