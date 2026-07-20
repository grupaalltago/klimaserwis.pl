# Boundaries

## Domain boundaries

Each capability owns its core model and use cases. Cross-domain collaboration happens via:

| Style | When to use | Status |
|---|---|---|
| In-process application API / facade | Same deployable, strong consistency needed | Candidate |
| Domain events (async) | Loose coupling, eventual consistency OK | Candidate |
| Public/internal HTTP API | Separate clients or separate deployables | Candidate |

**Do not** pick the integration style globally without an ADR. Prefer documenting the port first.

## Layer boundaries

```text
UI / Mobile / Public API  →  Application  →  Domain
                                 ↑
                          Infrastructure
```

Allowed:

- Adapters call application use cases
- Application calls domain and ports
- Infrastructure implements ports

Forbidden:

- Domain importing HTTP, ORM, UI, or cloud SDKs
- UI calling infrastructure directly (bypass use cases)
- Circular dependencies between domains

## Shared kernel

Only put truly shared concepts in a shared module (e.g. money, identity IDs, clock). Prefer duplication over a polluted shared kernel until patterns stabilize.

## Data ownership

Each domain should own its write model. Read models that span domains (e.g. search) are explicit projections — design TBD via ADR.
