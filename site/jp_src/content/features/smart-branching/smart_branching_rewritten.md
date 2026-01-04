---
title: SmartGit Branching
headerH2: Feature Flow, Git-Flow & GitHub Flow
listTitle: Smart Branching
imageAltText: Screenshot of SmartGit's Smart Branching interface.
linkText: More about Smart Branching
category:
- feature
description: Use SmartGit's guided workflows for Feature Flow and Git-Flow to simplify branching and improve collaboration. Visual tools and built-in guidance help you stay focused and error-free.
ogTitle: SmartGit Branching -- Feature Flow, Git-Flow & GitHub Flow
ogDesc: 'Guided workflows in SmartGit: Feature Flow, Git-Flow, GitHub Flow and more. Visual tools, fewer mistakes, better Git.'
weight: 4
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: features/smart-branching/smart_branching_rewritten.md
    commit: 6fc54a1d034d1331f61d555ee9aeb91ac672cb79
    committed_at: 2025-12-18T16:02:11Z
    modified_commit: 8cf4b90bac10de7a2eb94538a587ba5cae122b22
    modified_committed_at: 2025-08-05T21:34:17Z
    blob: 0a8fa52f7f401afde5514f39b72ab9efb4439b00
    sha256: 9c24cceb78bb76aa10d2e13239c9b6ff9f1c27f35d7cf146f8f09bd74b81e869
    fetched_at: 2026-01-04T18:02:32Z
  translation:
    status: draft
    updated_at: 2026-01-04T18:02:32Z
---

# Feature Flow -- Streamlined Feature Development

{{<screenshot src="feature-flow-integrate.gif" alt="SmartGit 'Feature Flow' Integrate">}}

SmartGit’s **Feature Flow** provides an integrated workflow for working with feature branches. Designed for teams and individuals, it minimizes friction during the development process.

Key features:
- Start new features based on main or release branches
- Keep features up to date via simple rebasing
- Integrate main changes visually before finishing
- Perform a final merge, squash, or rebase with guidance

SmartGit enforces a clean, linear history and provides visual feedback throughout, reducing the chance of conflicts or accidental errors.

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="Learn more">}}


# Why Feature Flow?

Feature Flow guides you through the complete feature lifecycle:
- Avoid complex merge commits through rebasing
- Prevent data loss with built-in safeguards
- Gain clarity with SmartGit’s integrated log and diff views
- Only push completed, verified changes

You maintain full responsibility for your branch and can clean up commits before integration.

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="Learn more">}}


# Integrate and Finish -- Safe and Controlled Delivery

{{<screenshot src="feature-flow-finish.gif" alt="SmartGit 'Feature Flow' Finish">}}

The **Integrate** and **Finish** operations ensure safe delivery of your changes:

- **Integrate** helps rebase or merge changes from the main branch interactively
- **Finish** ensures an atomic operation: either the full feature is applied or nothing changes

Partial updates and accidental pulls of untested code are avoided. The result is a clean and reliable commit to your mainline branch.

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Feature-Flow" display="Learn more">}}


# Git-Flow -- Structured Workflow for Multi-Release Projects

{{<screenshot src="gitflow-full-config.png" alt="Git-Flow (Full) Configuration">}}

SmartGit supports the classic **Git-Flow** model for teams managing multiple active releases.

It automates the process of:
- Starting and finishing features, releases, and hotfixes
- Merging back into `develop` and `main`
- Keeping release cycles predictable and consistent

Ideal for projects with scheduled deployments and coordinated team workflows.

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow" display="Learn more">}}


# Git-Flow Light -- Simplified Git-Flow for Single Releases

{{<screenshot src="gitflow-light-config.png" alt="Git-Flow Light Configuration">}}

**Git-Flow Light** is a streamlined variant tailored for projects with only one active release.

It eliminates unused steps from full Git-Flow, reducing overhead while preserving the structure:
- Simplified branching for features and hotfixes
- No `develop` branch required
- Less coordination needed, more focus on delivery

Best suited for agile teams deploying continuously or working on web-based projects.

{{< link url="https://docs.syntevo.com/SmartGit/24.1/Manual/DevelopmentProcesses/Git-Flow-Light" display="Learn more">}}
