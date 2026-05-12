---
title: "Version 26.1 Release Candidate"
headerH1: "Version 26.1 (Release Candidate)"
headerH2: "Major Improvements in Version 26.1 RC"
listTitle: "Version 26.1 (Release Candidate)"
imageAltText: "SmartGit 26.1 with a refreshed visual style, improved GitLab support, Commit Overlap, and Git 3.0 compatibility"
linkText: "More about SmartGit 26.1"
category: ["feature"]
headerMessage: "Enjoy a broader **visual refresh**, improved **GitLab** support, inspect **Commit Overlap**, and prepare for **Git 3.0**."
description: "SmartGit 26.1 brings a refreshed UI, improved GitLab support, smarter worktree behavior, Commit Overlap, flexible AI prompts, and Git 3.0 compatibility."
ogTitle: "SmartGit 26.1: UI refresh, GitLab, Commit Overlap"
ogDesc: "A refreshed UI, improved GitLab support, Commit Overlap, smarter worktree behavior, flexible AI prompts, and Git 3.0 compatibility in SmartGit 26.1 RC."
weight: 198
docsync:
  source:
    repo: git@github.com:smartgit-sites/dev.git
    path: whats-new/26_1/index.md
    commit: b3118ce020dce5cceca135e9159ff4672086ca1d
    committed_at: 2026-05-09T15:55:27Z
    modified_commit: 03fa5036d2e4a97ef86cd1f5de2e778be400330b
    modified_committed_at: 2026-04-07T21:37:07Z
    blob: 6715980d5a1fb4572828a9fdcb1286a770d2be4a
    sha256: bac268e4f83ce75fdec9553fbb0fb9844a9cc3be0bdede6fdcde7986a1a571a4
    fetched_at: 2026-05-12T00:35:06Z
  translation:
    status: draft
    updated_at: 2026-05-12T00:35:06Z
---

SmartGit 26.1 brings a broader UI refresh together with clearer graph and worktree workflows, including:
- A refreshed look with reworked icons, compare colors, and dark theme refinements
- Git 3.0 support for SHA-256 repositories and reftable refs
- New GitLab support in the Standard window with merge requests, CI, browsing, and issue-based commit messages
- Better worktree visibility, synchronization, and Graph interaction
- Commit Overlap
- Easier discovery of SmartGit's main windows
- Custom Ask AI prompts, `{{ branch }}` templates, and AI support for merge commits
- Reworked provider configurations in the Standard and Log windows
- Clearer Pull behavior in multi-remote repositories

***

# UI Refresh

{{<screenshot src="reworked-icon-set.png" alt="SmartGit 26.1 brings a fresh new icon set with distinct colors">}}
{{<screenshot src="dark-theme.png" alt="The dark theme has been improved">}}
{{<screenshot src="reworked-compare-colors.png" alt="SmartGit 26.1 uses more appealing compare colors">}}

---

SmartGit 26.1 brings a broader visual refresh.
It looks more modern, uses a clearer visual language, and feels more coherent across light and dark themes.

**Reworked Icon Set**

The icon set has been completely reworked.
It now looks more modern, uses only a few distinct colors, and comes in different variants for light and dark themes.

* **Cleaner look** -- more modern shapes and a smaller, more deliberate color palette.
* **Better contrast** -- dedicated light and dark variants improve recognition in both themes.

**Improved Dark Theme**

The dark theme has been refined further.

* **Darker overall appearance** -- background tones are deeper and less washed out.
* **Matched icon variants** -- the new icon set includes dedicated dark-theme versions.

**Reworked Compare Colors**

File Compare now uses a more familiar color language.

* **Changed = yellow** -- modified blocks are easier to recognize at a glance.
* **Added = green** -- added content is highlighted with the color users already expect.
* **Deleted = red** -- removed content stands out more naturally than before.

# Git 3.0 compatibility

{{<screenshot src="git-3.0.png" alt="Git 3.0 compatibility with a SHA-256 repository using the reftable ref format">}}

---

Git is evolving toward **SHA-256** object IDs and **reftable** refs.
SmartGit 26.1 is ready for that transition.

* **SHA-256 repositories** -- SmartGit can work with repositories using Git's newer object format.
* **Reftable support** -- the newer ref storage backend is supported as well.

# GitLab in the Standard window

{{<screenshot src="gitlab.png" alt="Standard window with GitLab integration, Browse menu, and repository details">}}

---

The Standard window now includes GitLab support on par with the existing GitHub support.

* **GitLab merge requests** -- merge requests are integrated into the Standard window workflow.
* **GitLab CI in My History** -- CI pipeline state is shown for merge requests, branches, and diverged remotes.
* **Browse in GitLab** -- the active branch or repository can be opened directly in GitLab from the **Browse** button.
* **Commit messages from GitLab issues** -- commit messages can be created from selected GitLab issues.

# Worktree state in Branches and Graph

{{<screenshot src="worktrees.png" alt="Branches and Graph showing branches attached to worktrees and their worktree state">}}

---

Branches attached to worktrees are now shown in **Branches** and the **Graph** together with their current worktree state.

* **See the current worktree state at a glance** -- refs show whether the linked worktree is clean or modified, and tooltips can show the related worktree path.
* **Open worktree repositories stay in sync** -- related open worktree repositories are refreshed immediately, so **Branches** and the **Graph** stay up to date across them.
* **Smoother Graph interaction** -- the "switch to worktree" dialog can be disabled, and clean worktree refs can be dragged in the Graph.

# Commit Overlap

{{<screenshot src="overlap.png" alt="Graph with Commit Overlap column showing overlap states">}}

---

**Commit Overlap** adds a new dimension to the Graph: the **Overlap** column shows how strongly a commit overlaps with a selected or pinned comparison commit.
This makes it easier to spot related commits, identify candidates for reordering or squashing, and notice possible upstream conflicts earlier.

* **Overlap categories** -- SmartGit distinguishes between no overlap, slight overlap, heavy overlap, subset, superset, and same modified files.
* **Tooltip details** -- tooltips can list common files and potential conflicts.

# Discover other SmartGit windows

{{<screenshot src="discover.png" alt="SmartGit 26.1 Discover dialog for switching between the main windows">}}

---

SmartGit's three main windows look similar enough that it is easy to open the wrong one and wonder why the UI suddenly feels so different. It was not always obvious at a glance which main window was currently open or how to get to the other ones.

Each window now has its own identity through easy-to-recognize, easy-to-distinguish icons. SmartGit 26.1 also makes the current window easier to recognize and the other two easier to discover from the top-right corner, giving you **clearer orientation**, noticeably **less confusion**, and **easier switching** if you did open the wrong one.

{{< link url="/window-styles-and-cat-toys/" display="Learn more" >}}

# Ask AI, Prompt Templates, and Rewording

{{<screenshot src="ask-ai.png" alt="Ask AI dialog with a custom prompt for a selected commit">}}

---

SmartGit 26.1 extends the AI workflow in three important ways.

* **Ask AI with custom prompts** -- run **Ask AI** with a user-defined prompt on multiple selected commits at once, for example as a final sanity check of a feature branch.
* **More flexible prompt templates** -- commit message generation, rewording, and **Ask AI** support the `{{ branch }}` placeholder. Templates can use `@ai-marker`, and only that marker is replaced by the LLM response.
* **Merge commits and signed commits** -- **Ask AI** now works for merge commits, and AI rewording preserves signatures of signed commits.

{{< link url="https://docs.syntevo.com/SmartGit/Latest/Manual/Integrations/AI" display="Learn more">}}

# Provider configurations in Standard and Log

{{<screenshot src="provider-rework.png" alt="Provider configuration selector for switching between multiple GitHub accounts">}}

---

Working with multiple provider accounts is now more transparent in the **Standard** and **Log** windows.

* **Switch explicitly** -- select the active provider configuration directly in the UI, so it is clear which account or site is currently in use.
* **Per-remote selection** -- provider configurations can also be selected on remotes.

# Pull vs. Pull All (Standard window)

{{<screenshot src="std-pull-all.png" alt="In the Standard window you can configure the pull behavior in the Pull toolbar button popup menu">}}

---

Multi-remote repositories now make Pull behavior clearer.

* **Choose the default directly** -- set whether Pull uses the current remote or all remotes from the toolbar popup.
* **More control after fetch** -- deleting merged branches after Pull is now optional.
