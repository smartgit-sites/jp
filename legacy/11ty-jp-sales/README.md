---
source_worktree: sibling main worktree
source_branch: main
source_commit: 8ee2add
purpose: Preserve the legacy Japanese 11ty sales page implementation before porting its Japan-specific behavior to Hugo.
---

# Legacy 11ty Japanese Sales Page

This directory keeps a copy of the Japanese sales-page implementation from the
legacy `main` worktree. It is intentionally outside the Hugo source tree so the
files can be reviewed and diffed without changing the generated site.

The important Japan-specific behavior in the legacy page includes:

- `/purchase.html` sales page markup in `src/purchase.md`.
- `JPY` as the submitted currency.
- `smartgit.jp` as the submitted partner value.
- Coupon code / reseller ID form controls.
- Japanese purchase and quote button labels.

The copied `assets/javascripts/site.js` and `assets/stylesheets/site.css` are
included as implementation references for the legacy `purchase-form` behavior
and styling.
