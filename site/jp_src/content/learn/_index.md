---
title: "Learn SmartGit -- Git Documentation & Tutorials"
ogTitle: "Learn SmartGit -- Git Documentation & Tutorials"
ogDescription: "Get started with SmartGit: Interface guide, Git manual, tutorials, training & more. Built for developers and teams."

headerH1: "Learn SmartGit"
headerH2: "Master Git with confidence"

workFlowExplorer:
    - name: "Full Documentation"
      desc: "The Manual is your comprehensive guide to SmartGit's full feature set. Dive into every option, menu, and workflow SmartGit offers -- perfect for power users and professionals."
      icon: "fa-light fa-books fa-2x"
      link: "https://docs.syntevo.com/SmartGit/Latest/Manual/"
      linkText: "Read Docs"
      target: "_blank"
    - name: "How-Tos"
      desc: "Explore our How Tos to follow step-by-step tutorials for common Git tasks in SmartGit. Designed for clarity and actionability -- get things done, fast."
      icon: "fa-light fa-circle-question fa-2x"
      link: "https://docs.syntevo.com/SmartGit/Latest/HowTos/"
      linkText: "Get Tutorials"
      target: "_blank"
    - name: "Technical Blog"
      desc: "Read articles about Git best practices, workflows, and feature deep dives from our team."
      icon: "fa-light fa-list fa-2x"
      link: "https://blog.syntevo.com/"
      linkText: "Blog"
      target: "_blank"

getInvolved:
    - name: "Video Guides"
      desc: "Learn visually with bite-sized tutorials and walkthroughs on YouTube."
      icon: "fa-brands fa-youtube fa-2x"
      link: "https://www.youtube.com/c/smartgit"
      linkText: "YouTube"
      target: "_blank"
    - name: "Community Forum"
      desc: "Ask questions, share tips, and connect with other SmartGit users."
      icon: "fa-light fa-list-tree fa-2x"
      link: "https://smartgit.userecho.com/"
      linkText: "Forum"
      target: "_blank"
    - name: "Git-Skills"
      desc: "Level up your Git knowledge with structured, hands-on quizzes at Git-Skills."
      icon: "fa-light fa-chalkboard-user fa-2x"
      link: "https://www.git-skills.dev"
      linkText: "Git-Skills"
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
    desc: "Learn how to connect SmartGit with GitHub, GitLab, Bitbucket, and more."
    icon: "fa-light fa-timeline-arrow fa-lg"
  - name: ""
    desc: "Configure external tools and services for a seamless experience."
    icon: "fa-light fa-screwdriver-wrench fa-lg"
  - name: ""
    desc: "Automate tasks with SmartGit's built-in features."
    icon: "fa-light fa-bolt-auto fa-lg"

bestPractices:
  - name: ""
    desc: "Optimize your Git workflow with expert-recommended techniques."
    icon: "fa-light fa-chart-line-up fa-lg"
  - name: ""
    desc: "Learn version control strategies for small and large teams."
    icon: "fa-light fa-rectangle-vertical-history fa-lg"
  - name: ""
    desc: "Avoid common pitfalls with curated tips from industry professionals"
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
