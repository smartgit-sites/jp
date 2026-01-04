---
title: SmartGitナレッジハブ -- Gitドキュメント＆チュートリアル
ogTitle: SmartGitナレッジハブ -- Gitドキュメント＆チュートリアル
ogDescription: 'SmartGitを始めよう：インターフェースガイド、Gitマニュアル、チュートリアル、トレーニングなど。開発者とチームのために構築されています。'
headerH1: SmartGitナレッジハブ
headerH2: Gitマスターのための総合リソース
workFlowExplorer:
- name: 完全ドキュメント
  desc: マニュアルはSmartGitの全機能を網羅した包括的なガイドです。SmartGitが提供するすべてのオプション、メニュー、ワークフローを詳しく解説しています。パワーユーザーやプロフェッショナルに最適です。
  icon: fa-light fa-books fa-2x
  link: https://docs.syntevo.com/SmartGit/Latest/Manual/
  linkText: ドキュメントを読む
  target: _blank
- name: ハウツー
  desc: SmartGitでの一般的なGitタスクをステップバイステップで学べるハウツーをご覧ください。明確で実践的な内容で、素早く作業を完了できます。
  icon: fa-light fa-circle-question fa-2x
  link: https://docs.syntevo.com/SmartGit/Latest/HowTos/
  linkText: チュートリアルを見る
  target: _blank
- name: ビデオガイド
  desc: YouTubeの短いチュートリアルとウォークスルーで視覚的に学びましょう。
  icon: fa-brands fa-youtube fa-2x
  link: https://www.youtube.com/c/smartgit
  linkText: YouTube
  target: _blank
getInvolved:
- name: テクニカルブログ
  desc: チームによるGitのベストプラクティス、ワークフロー、機能の詳細解説記事をお読みください。
  icon: fa-light fa-list fa-2x
  link: https://blog.syntevo.com/
  linkText: ブログ
  target: _blank
- name: コミュニティフォーラム
  desc: 質問をしたり、ヒントを共有したり、他のSmartGitユーザーとつながりましょう。
  icon: fa-light fa-list-tree fa-2x
  link: https://smartgit.userecho.com/
  linkText: フォーラム
  target: _blank
- name: トレーニング
  desc: 開発者とチーム向けの講師主導のトレーニングで実践的な指導を受けられます。
  icon: fa-light fa-chalkboard-user fa-2x
  link: /knowledge-hub/trainings/
  linkText: トレーニング
  target: ''
workFlowLinks:
- name: ドキュメント
  link: /knowledge-hub/documentation
  target: ''
  icon: fa-light fa-arrow-up-right-from-square
- name: マニュアル
  link: https://docs.syntevo.com/SmartGit/Latest/Manual/
  target: _blank
  icon: fa-light fa-arrow-up-right-from-square
- name: ハウツー
  link: https://docs.syntevo.com/SmartGit/Latest/HowTos/
  target: _blank
  icon: fa-light fa-arrow-up-right-from-square
- name: フォーラム
  link: https://smartgit.userecho.com/
  target: _blank
  icon: fa-light fa-arrow-up-right-from-square
integrationGuides:
- name: ''
  desc: SmartGitをGitHub、GitLab、Bitbucketなどと連携する方法を学びましょう。
  icon: fa-light fa-timeline-arrow fa-lg
- name: ''
  desc: 外部ツールやサービスを設定して、シームレスな体験を実現します。
  icon: fa-light fa-screwdriver-wrench fa-lg
- name: ''
  desc: SmartGitの組み込み機能でタスクを自動化します。
  icon: fa-light fa-bolt-auto fa-lg
bestPractices:
- name: ''
  desc: 専門家が推奨するテクニックでGitワークフローを最適化します。
  icon: fa-light fa-chart-line-up fa-lg
- name: ''
  desc: 小規模から大規模チームまで対応するバージョン管理戦略を学びます。
  icon: fa-light fa-rectangle-vertical-history fa-lg
- name: ''
  desc: 業界のプロフェッショナルが厳選したヒントで、よくある落とし穴を回避します。
  icon: fa-light fa-hand-holding-magic fa-lg
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: knowledge-hub/_index.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 46c8845c759395b5d2859d1a4ebcbb942f8ee77f
    modified_committed_at: 2025-08-06T08:45:03Z
    blob: 5f4c4788c73b7654a00497907ab808b1c924d454
    sha256: 1096ccf2ad0ee6c4e8f07ed773cbb5fce6fe4f9b412ccd1ac6f1d0c901515625
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

{{% section-with-content sectionClasses="pb-5 pb-7" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/knowledge-hub/" listName="workFlowExplorer" >}}
{{% /section-with-content %}}

{{% section-with-content sectionClasses="pt-5 pb-10" columnClasses="col-12" %}}
{{< cards-with-icons listSource="/knowledge-hub/" listName="getInvolved" >}}
{{% /section-with-content %}}

<div style="margin-bottom: 80px;"></div>

{{% section-with-content sectionClasses="bg-sg-gray-100 py-5 mb-5" columnClasses="col-12 col-md-6" isSectionFluid="true" %}}
### **連携**ガイド 
{{< definitionlist listSource="/knowledge-hub/" listName="integrationGuides" dtClass="col-1 sg-indigo-500" ddClass="col-11" >}}
--- 
### **ベスト**プラクティス
{{< definitionlist listSource="/knowledge-hub/" listName="bestPractices" dtClass="col-1 sg-indigo-500" ddClass="col-11" >}}
{{% /section-with-content %}}
