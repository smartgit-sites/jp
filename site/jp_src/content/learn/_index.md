---
title: "SmartGit を学ぶ -- Git ドキュメントとチュートリアル"
ogTitle: "SmartGit を学ぶ -- Git ドキュメントとチュートリアル"
ogDescription: "SmartGit を始めましょう: インターフェイス ガイド、Git マニュアル、チュートリアル、トレーニングなど。開発者とチーム向けに構築されています。"

headerH1: "SmartGit を学ぶ"
headerH2: "自信を持って Git をマスターする"

workFlowExplorer:
    - name: "Full Documentation"
      desc: "このマニュアルは、SmartGit の全機能セットについての包括的なガイドです。 SmartGit が提供するすべてのオプション、メニュー、ワークフローを詳しく見てみましょう。パワー ユーザーや専門家に最適です。"
      icon: "fa-light fa-books fa-2x"
      link: "https://docs.syntevo.com/SmartGit/Latest/Manual/"
      linkText: "ドキュメントを読む"
      target: "_blank"
    - name: "How-Tos"
      desc: "SmartGit での一般的な Git タスクのステップバイステップのチュートリアルに従うための How To を参照してください。明確さと実用性を重視して設計されており、作業を迅速に完了できます。"
      icon: "fa-light fa-circle-question fa-2x"
      link: "https://docs.syntevo.com/SmartGit/Latest/HowTos/"
      linkText: "チュートリアルを入手する"
      target: "_blank"
    - name: "Technical Blog"
      desc: "Git のベスト プラクティス、ワークフロー、および当社チームによる機能の詳細に関する記事をお読みください。"
      icon: "fa-light fa-list fa-2x"
      link: "https://blog.syntevo.com/"
      linkText: "ブログ"
      target: "_blank"

getInvolved:
    - name: "Video Guides"
      desc: "YouTube の簡単なチュートリアルとウォークスルーで視覚的に学びましょう。"
      icon: "fa-brands fa-youtube fa-2x"
      link: "https://www.youtube.com/c/smartgit"
      linkText: "YouTube"
      target: "_blank"
    - name: "Community Forum"
      desc: "質問したり、ヒントを共有したり、他の SmartGit ユーザーとつながったりできます。"
      icon: "fa-light fa-list-tree fa-2x"
      link: "https://smartgit.userecho.com/"
      linkText: "フォーラム"
      target: "_blank"
    - name: "Git-Skills"
      desc: "Git-Skills の構造化された実践的なクイズで Git の知識をレベルアップします。"
      icon: "fa-light fa-chalkboard-user fa-2x"
      link: "https://www.git-skills.dev"
      linkText: "Git スキル"
      target: "_blank"


workFlowLinks:
  - name: "Docu"
    link: "/learn/documentation"
    target: ""
    icon: "fa-light fa-arrow-up-right-from-square"
  - name: "Manual"
    link: "https://docs.syntevo.com/SmartGit/Latest/Manual/"
    target: "_blank"
    icon: "fa-light fa-arrow-up-right-from-square"
  - name: "How Tos"
    link: "https://docs.syntevo.com/SmartGit/Latest/HowTos/"
    target: "_blank"
    icon: "fa-light fa-arrow-up-right-from-square"
  - name: "Forum"
    link: "https://smartgit.userecho.com/"
    target: "_blank"
    icon: "fa-light fa-arrow-up-right-from-square"

integrationGuides:
  - name: ""
    desc: "SmartGit を GitHub、GitLab、Bitbucket などに接続する方法を学びます。"
    icon: "fa-light fa-timeline-arrow fa-lg"
  - name: ""
    desc: "外部ツールとサービスを構成して、シームレスなエクスペリエンスを実現します。"
    icon: "fa-light fa-screwdriver-wrench fa-lg"
  - name: ""
    desc: "SmartGit の組み込み機能を使用してタスクを自動化します。"
    icon: "fa-light fa-bolt-auto fa-lg"

bestPractices:
  - name: ""
    desc: "専門家が推奨するテクニックを使用して Git ワークフローを最適化します。"
    icon: "fa-light fa-chart-line-up fa-lg"
  - name: ""
    desc: "小規模および大規模なチーム向けのバージョン管理戦略を学びます。"
    icon: "fa-light fa-rectangle-vertical-history fa-lg"
  - name: ""
    desc: "業界の専門家が厳選したヒントでよくある落とし穴を回避"
    icon: "fa-light fa-hand-holding-magic fa-lg"
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: learn/_index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 0b2f965264902be9299acd420f1aa71a354880af
    modified_committed_at: 2026-04-27T09:32:41Z
    blob: 608a61fc087ff38e154bb3153ff588c662f33957
    sha256: d89814b3a8bc362ecb125f740377eece708ff5ba26af177322de58d37dbb747d
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

{{% section-with-content sectionClasses="pb-5 pb-7" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/learn/" listName="workFlowExplorer" >}}
{{% /section-with-content %}}

{{% section-with-content sectionClasses="pt-5 pb-10" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/learn/" listName="getInvolved" >}}
{{% /section-with-content %}}

<div style="margin-bottom: 80px;"></div>

{{% section-with-content sectionClasses="bg-sg-gray-100 py-5 mb-5" columnClasses="col-12 col-md-6" isSectionFluid="true" %}}
### **連携**ガイド
{{< definitionlist listSource="/learn/" listName="integrationGuides" dtClass="col-1 sg-indigo-500" ddClass="col-11" >}}
---
### **ベスト**プラクティス
{{< definitionlist listSource="/learn/" listName="bestPractices" dtClass="col-1 sg-indigo-500" ddClass="col-11" >}}
{{% /section-with-content %}}
