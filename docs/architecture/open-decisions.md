# Open decisions

Unresolved architectural choices. **Do not implement against an assumed answer.**

For each item: propose alternatives, recommend one, wait for Lead/ADR acceptance.

## OD-001 — Repository modularization

| Alternative | Summary | Trade-offs |
|---|---|---|
| A. Modular monolith monorepo | Single deployable, clear packages | Simple ops; risk of soft boundaries |
| B. Monorepo multi-app | `apps/` + `packages/`, multiple deployables | Flexible; more CI/tooling |
| C. Polyrepo | Separate repos per service/app | Strong isolation; higher overhead early |

**Recommendation (non-binding):** A or B for MVP; revisit C only with team/scale pressure.

**Status:** Open

## OD-002 — Primary backend language / runtime

| Alternative | Summary |
|---|---|
| A. Node.js (TypeScript) | Strong web/API ecosystem; shared language with many frontends |
| B. .NET | Strong enterprise/CRM-ERP fit; Windows-friendly ops |
| C. JVM (Kotlin/Java) | Mature enterprise ecosystem |
| D. Other | Only with strong team rationale |

**Status:** Open — requires Lead + team skill map

## OD-003 — Primary web frontend

| Alternative | Summary |
|---|---|
| A. Next.js (React) | SSR/SEO for directory + blog |
| B. Remix / other React meta | Similar goals, different conventions |
| C. Separate SPA + BFF | Clear API boundary; more moving parts |

**Status:** Open

## OD-004 — Data stores

| Concern | Alternatives (examples) |
|---|---|
| Primary OLTP | PostgreSQL / SQL Server / MySQL |
| Search | Postgres FTS / Elasticsearch / OpenSearch / Meilisearch |
| Cache | Redis / in-process (MVP) / cloud cache |
| Object storage | S3-compatible / Azure Blob / local (dev only) |
| Queue / events | Outbox + Postgres / RabbitMQ / SQS / Azure Service Bus |

**Status:** Open — may be decided incrementally via ADRs

## OD-005 — Identity & tenancy

| Alternative | Summary |
|---|---|
| A. Single-tenant ops + public marketplace | Simpler early model |
| B. Multi-tenant SaaS (provider organizations) | Required for CRM/ERP scale |
| C. Hybrid | Public marketplace + tenant back-office |

**Status:** Open — high impact; block deep CRM/ERP work until decided

## OD-006 — Public API style & versioning

| Alternative | Summary |
|---|---|
| A. Versioned REST (`/v1`) | Matches stated Public REST API goal |
| B. REST + OpenAPI-first | Contract-driven |
| C. GraphQL alongside REST | Flexible reads; dual surface cost |

**Note:** Product requires a Public REST API. GraphQL may complement but must not replace the REST mandate without ADR.

**Status:** Open (versioning and auth scheme)

## OD-007 — Mobile approach

| Alternative | Summary |
|---|---|
| A. React Native / Expo | Share TS skills |
| B. Flutter | Strong UI toolkit |
| C. Native (Kotlin/Swift) | Highest platform fidelity |
| D. PWA-first defer native | Fastest MVP mobile web |

**Status:** Open

## OD-008 — AI assistant hosting

| Alternative | Summary |
|---|---|
| A. Vendor LLM APIs + thin orchestration | Fast to market |
| B. Self-hosted / private models | Control & cost at scale |
| C. Hybrid (router by use case) | Flexibility; complexity |

**Status:** Open — defer until core domains exist

## OD-009 — CI/CD & hosting

| Alternative | Summary |
|---|---|
| A. GitHub Actions + container hosting | Fits this repo’s `.github` / `docker` layout |
| B. Azure DevOps + Azure | Strong if OD-002 = .NET |
| C. Other cloud CI + K8s | Scale-oriented |

**Status:** Open

## How to resolve

1. Copy [adr/0000-template.md](adr/0000-template.md).
2. Fill context, alternatives, decision.
3. Set status to Accepted only after Lead approval.
4. Update this file to mark the OD as resolved with ADR link.
