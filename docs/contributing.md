# Contributing

## Before you write code

1. Read [vision.md](vision.md) and [architecture/principles.md](architecture/principles.md).
2. Check [architecture/open-decisions.md](architecture/open-decisions.md). If your change depends on an open decision, **stop and propose alternatives** — do not pick unilaterally.
3. Prefer an ADR for any cross-cutting or hard-to-reverse choice ([architecture/adr/](architecture/adr/)).

## Change rules

- **Production-ready only** — every merged change must be fit for production standards (tests plan, docs, clear boundaries), even if the feature is behind a flag.
- **No drive-by architecture** — do not introduce a new framework, database, or deployment model without an approved ADR.
- **SOLID / DRY / KISS / Clean Architecture** — see principles doc.
- **Small, reviewable PRs** — one concern per PR when practical.
- **No secrets** in the repository. Use env templates and secret managers (choice TBD via ADR).

## Pull requests

Use the GitHub PR template. Include:

- Why the change exists
- What was changed
- How it was verified
- Links to related ADRs or open decisions

## Commits

Write concise messages focused on **why**. Follow repository history once commits exist.

## Documentation

Update docs in the same PR when behavior, boundaries, or decisions change. Code and docs must not diverge.
