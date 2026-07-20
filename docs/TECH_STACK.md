# TECH_STACK

Technology landscape for Klimaserwis.pl.

**Status legend**

| Status | Meaning |
|---|---|
| **Required (product)** | Mandated by product direction; implementation details still TBD |
| **Recommended (non-binding)** | Lead lean; **not approved** until ADR Accepted |
| **Open** | Alternatives under consideration — do not implement as if decided |
| **Deferred** | Intentionally postponed |

Per project governance: **do not lock stack unilaterally**. Resolve via ADR and update this document.

Canonical open-decision IDs: [architecture/open-decisions.md](architecture/open-decisions.md).

---

## 1. Product-mandated surfaces

| Surface | Requirement | Status |
|---|---|---|
| Public HTTP API | REST, versioned, documented | Required (product) — OD-006 open on versioning/auth details |
| Web product | SEO-capable public pages (directory, blog) | Required (product) — framework open (OD-003) |
| Mobile | Native or cross-platform client(s) | Required (long-term) — approach open (OD-007) |
| Containers | Docker-based local/prod packaging path | Required (repo direction) — images TBD (OD-009) |

---

## 2. Backend runtime (OD-002) — Open

| Option | Strengths | Risks / costs |
|---|---|---|
| **A. Node.js + TypeScript** | Shared language with many frontends; large web ecosystem; fast iteration | Need discipline for CRM/ERP-scale domain modeling |
| **B. .NET** | Excellent for complex business domains, Windows ops familiarity, strong tooling | Frontend language split unless TS remains for UI |
| **C. JVM (Kotlin/Java)** | Mature enterprise patterns, strong concurrency story | Heavier ops/tooling for a small early team |
| **D. Other** | Only with explicit team rationale | Fragmentation risk |

**Recommended (non-binding):** Choose based on team skill map and CRM/ERP depth timeline — document in ADR-XXXX. No default is approved yet.

---

## 3. Web frontend (OD-003) — Open

| Option | Strengths | Risks / costs |
|---|---|---|
| **A. Next.js (React)** | SSR/SSG for SEO; ecosystem fit for directory + blog | Framework coupling; must keep domain out of UI |
| **B. Remix / other React meta-framework** | First-class web fundamentals | Smaller hiring pool vs Next in some markets |
| **C. SPA + BFF** | Clear API boundary | More moving parts; SEO needs extra care |

**Recommended (non-binding):** Option A when SEO time-to-market matters most for MVP; confirm via ADR.

---

## 4. Data & messaging (OD-004) — Open

### Primary OLTP

| Option | Notes |
|---|---|
| PostgreSQL | Strong default candidate for SaaS OLTP + JSON when needed |
| SQL Server | Natural pairing if backend is .NET and org standards prefer it |
| MySQL / MariaDB | Viable; confirm operational preference |

### Search (directory)

| Option | Notes |
|---|---|
| PostgreSQL FTS | Simplest for early MVP |
| OpenSearch / Elasticsearch | Scale and relevance tooling |
| Meilisearch | Developer-friendly search UX |

### Cache

Redis or equivalent — optional in earliest MVP if load is low.

### Object storage

S3-compatible or Azure Blob — select with hosting ADR.

### Async / events

Transactional outbox + worker is a pattern (stack-agnostic). Broker (RabbitMQ, cloud queues, etc.) chosen when async volume justifies it.

**Recommended (non-binding):** PostgreSQL as first OLTP candidate; start search with FTS or a thin search engine only when directory relevance demands it.

---

## 5. Identity & tenancy (OD-005) — Open

| Option | Summary |
|---|---|
| **A. Marketplace + light provider accounts** | Faster MVP; limited CRM/ERP isolation |
| **B. Multi-tenant organizations** | Correct long-term SaaS model for CRM/ERP |
| **C. Hybrid** | Public marketplace + tenant back-office |

IdP options (Auth0, Keycloak, Cognito, Entra ID, custom OIDC, etc.) are secondary to the tenancy model and will be ADR’d separately.

**Recommended (non-binding):** Design hybrid-capable boundaries early even if MVP auth is thinner.

---

## 6. Public API (OD-006) — Partially fixed

| Decision | Status |
|---|---|
| Style = REST | Required (product) |
| OpenAPI-first contract | Recommended (non-binding) |
| URL versioning `/v1` | Recommended (non-binding) |
| GraphQL alongside REST | Open — only as complement, not replacement |
| Auth (API keys, OAuth2, mTLS) | Open |

---

## 7. Mobile (OD-007) — Open / Deferred for MVP

| Option | Notes |
|---|---|
| React Native / Expo | Share TS skills with web |
| Flutter | Strong UI toolkit; Dart skill line |
| Native Kotlin/Swift | Highest fidelity; highest cost |
| PWA-first | Fastest interim mobile web |

**Recommended (non-binding):** Defer native/cross-platform until Public API stabilizes; consider PWA or responsive web for early mobile access.

---

## 8. AI assistant (OD-008) — Open / Deferred

| Option | Notes |
|---|---|
| Vendor LLM APIs + orchestration | Fastest path |
| Self-hosted / private models | Control, compliance, cost at scale |
| Hybrid router | Route by sensitivity/cost |

**Constraint:** AI calls domain use cases via tools/ports; never bypass authorization.

---

## 9. CI/CD & hosting (OD-009) — Open

| Option | Notes |
|---|---|
| GitHub Actions + container hosting | Aligns with current `.github` / `docker` layout |
| Azure DevOps + Azure | Strong if .NET + enterprise Azure standards |
| Other CI + Kubernetes | Scale-oriented; higher early complexity |

Current repo includes a **structure-guard** CI workflow only. Language-specific build/test jobs wait for OD-002.

---

## 10. Engineering toolchain (conventions, not locked products)

Regardless of language choice, the platform expects:

| Concern | Expectation |
|---|---|
| Source control | Git; trunk-based or short-lived PRs |
| Contracts | OpenAPI for public REST |
| Containers | Docker images for deployables |
| Quality gates | Lint, unit/integration tests, dependency scanning (tooling TBD) |
| Observability | Structured logs + metrics + traces (OpenTelemetry preferred pattern) |
| Secrets | Env templates + secret manager; never commit secrets |

---

## 11. Explicitly out of scope for stack docs

- Generating application code before ADRs are accepted  
- Copy-pasting a fashionable “AI SaaS boilerplate” that violates domain boundaries  
- Introducing a second primary OLTP “just for one module” without ADR  

---

## 12. How to change this document

1. Open/update an ADR.  
2. Mark the OD as resolved in `architecture/open-decisions.md`.  
3. Update the relevant section here to **Accepted** with ADR link.  
4. Only then scaffold application runtimes and CI language jobs.

---

## Related documents

- [ARCHITECTURE.md](ARCHITECTURE.md)  
- [ROADMAP.md](ROADMAP.md)  
- [CODING_STANDARDS.md](CODING_STANDARDS.md)  
- [architecture/open-decisions.md](architecture/open-decisions.md)  
