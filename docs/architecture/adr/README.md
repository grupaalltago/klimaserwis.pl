# Architecture Decision Records (ADRs)

ADRs capture significant, hard-to-reverse decisions.

## When to write an ADR

- Technology or framework selection
- Modularization / deployment topology
- Data ownership or consistency model
- AuthN/AuthZ or tenancy model
- Public API contracts that external parties depend on
- Any choice that closes an item in [open-decisions.md](../open-decisions.md)

## When not to write an ADR

- Local refactors inside an approved boundary
- Cosmetic naming (unless it becomes a convention)
- Temporary experiments behind a flag that will be discarded

## Process

1. Create `NNNN-title.md` from the template (increment number).
2. Status starts as **Proposed**.
3. Lead reviews; status becomes **Accepted** or **Rejected**.
4. Later changes use a new ADR with **Supersedes** link; old ADR → **Superseded**.

## Index

| ADR | Title | Status |
|---|---|---|
| — | (none yet) | — |

Bootstrap ADRs will be added when open decisions are resolved.
