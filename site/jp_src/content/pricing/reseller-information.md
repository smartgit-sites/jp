---
title: "Purchase Information for Resellers"
headerH1: "Purchase Information"
headerH2: "for Resellers"

Summary: "What do you want to order?"

shortLinks:
  - name: "New License"
    desc: "Order a new license"
    icon: "fa-regular fa-sparkles fa-2x"
    link: "#new"
    linkText: "New license"
    target: ""
  - name: "Renew License"
    desc: "Update an existing license (Renewal)"
    icon: "fa-regular fa-repeat fa-2x"
    link: "#update"
    linkText: "Update existing"
    target: ""
  - name: "Resell SmartGit"
    desc: "Only **convenience-added** Resellers"
    icon: "fa-regular fa-store fa-2x"
    link: "#reseller"
    linkText: "Qualify"
    target: ""

weight: 30
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: pricing/reseller-information.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: b84650c18d8c8ef3a7ca60f82831627113368c73
    modified_committed_at: 2026-01-27T08:43:48Z
    blob: f3ca70a8bfeb729b3bc79b236e9ce606f7504ea7
    sha256: a0ad78dd0b5f79df6b5ad562f04b22f34c659224d72689fe22d2f4d0c82d937a
    fetched_at: 2026-05-12T00:36:05Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:36:05Z
---
{{% section-with-content sectionClasses="pb-5 mb-5" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/pricing/reseller-information.md" listName="shortLinks" >}}
{{% /section-with-content %}}
{{< message message="Because of the increasing overhead resellers are introducing on our side (compared to regular customers) we are not offering reseller discounts, except for [convenience-added resellers](#reseller)." >}}

{{<headlinebeautifier level="3" text="Order new license" id="new" class="mt-5" >}}

1. Go to the {{< link url="/pricing/#subscription" target="_blank" display="SmartGit purchase page" >}} and change the options according to the end-user's needs (license count, support, add-ons, ...)
2. If you need a quote, click **Request Quote**
   {{< message message="The final quote will be sent to you by email. Make sure to keep this email, because it contains a link to start the purchase without having to rerun through the entire purchase process." >}}
3. Click **Purchase via Cleverbridge** to proceed with the purchase
   {{< message type="warning" message="Cleverbridge is our payment service provider. From now on, Cleverbridge is your point of contact: if there are any troubles with the payment processing, please contact them!" >}}

{{<headlinebeautifier level="3" text="Update an existing license (Renewal)" id="update" class="mt-5" >}}

1. Make sure you have the license file available which the end-user wants to renew
   {{< message message="If you had already ordered the former (old) license, (1) you will have received an email either from cleverbridge.com-domain or from syntevo.com-domain which contains your license file and (2) you will have forwarded this license file to your end-user. In either case, the old license file will be present in your email system already." >}}
   {{< message message="If you had not ordered the former license, ask your end-user to provide the license file: (1) he will have received it by email after ordering and (2) the license file can be found on every machine in SmartGit's settings directory" >}}
2. Go to the {{< link url="/pricing/#upgrade" target="_blank" display="SmartGit purchase page" >}} (**Upgrade** tab should be selected)
3. **Upload your license file**: use the end-user's previous license file here; this will give you the available discount
4. Refine the license configuration according to the end-user's needs (license count, updates, support, add-ons, ...)
5. If you need a quote, click Request Quote
   {{< message message="The final quote will be sent to you by email. Make sure to preserve this email, so you can later convert the quote directly into a purchase order without having to rerun through the entire purchase process." >}}
6. Click **Purchase via Cleverbridge** to proceed with the purchase
   {{< message type="warning" message="Cleverbridge is our payment service provider. From now on, Cleverbridge is your point of contact: if there are any troubles with the payment processing, please contact them!" >}}

### Subscription{ class="mt-5"}

There is **no way to request quotes** for subscriptions nor for its renewals.

We recommend resellers to not order subscriptions, but rather single-payment licenses, because subscription licenses are meant for automatic renewal with automatic payment options (e.g. credit card, Paypal) for the same price (unless a different price was agreed upon for the renewal). To order SmartGit subscriptions use the {{< link url="/pricing" target="_blank" display="SmartGit purchase page" >}}.

We will not answer quote requests for subscriptions or their renewals. Instead we might send you the prices for single-payment licenses, because then subscriptions obviously are not the right option for you.

{{<headlinebeautifier level="3" text="Convenience-added Resellers" id="reseller" class="mt-5" >}}

To qualify as a "convenience-added reseller" you have to meet following conditions:

- SmartGit must be listed on your website, so every potential customer can find it easily.
- Don't require any reseller contract or other forms be filled out by us.
- Your team must be organized in a way that they will be able to perform purchases without contacting us for prices, quotes or other stuff which can be found on our website.
- You already have resold licenses of our products at least three times with an order volume of at least 1,000 USD/EUR for each individual sale.

Once you meet these conditions, send an email to {{< cloakemail address="sales@syntevo.com" >}} including following information:

- link to your website's homepage capable of quickly finding SmartGit

After we have verified the link, we will send you a reseller ID for ordering and requesting quotes with up to 10% reseller discount based on our regular prices.

Once you have received your reseller-ID, follow these steps to purchase with discount:

{{% section-with-content sectionClasses="py-5 mb-5" columnClasses="col-12 col-md-6" %}}
#### New Purchase
1. Open the {{< link url="/pricing" target="_blank" display="SmartGit purchase page" >}} (**Single Payment** tab should be selected)
2. Change the license configuration according to the end-user's needs (license count, support, add-ons, ...)
3. Enter your **Reseller-ID**
4. Click **Request Quote** or **Purchase**
---
#### Upgrade
1. Open the {{< link url="/pricing/#upgrade" target="_blank" display="SmartGit purchase page" >}} (**Upgrade** tab should be selected)
2. **Upload your license file**: use the end-user's previous license file here
3. Refine the license configuration according to the end-user's needs (license count, updates, support, add-ons, ...)
4. Enter your **Reseller-ID**
5. Click **Request Quote** or **Purchase**
{{% /section-with-content %}}

{{< message type="warning" message="For any purchases for which you are contacting us, we will provide no reseller discount (the only exception are large volume purchases which can't be handled directly over the purchase page)." >}}

### Refunds{class="mt-5"}

For refunds caused by mistakes on your side we may deduct 10% of the paid price for Cleverbridge fees and work for disabling delivered license files. 