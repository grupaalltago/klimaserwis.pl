# Klimaserwis.pl — Cursor Rules

Permanent instruction set for AI-assisted development in this repository.

**Product:** nationwide HVAC SaaS (directory, blog, leads, CRM, ERP, AI assistant, mobile, public REST API).  
**Bar:** every change must be production-ready.  
**Authority:** `docs/` is source of truth. This file is the executable summary for agents.

---

## 0. Agent operating protocol

### Always

1. Treat this repo as production-grade SaaS, not a prototype playground.
2. Follow SOLID, DRY, KISS, Clean Architecture.
3. Read relevant docs before coding: `docs/ARCHITECTURE.md`, `docs/CODING_STANDARDS.md`, `docs/TECH_STACK.md`.
4. Check `docs/architecture/open-decisions.md` before choosing stack, folders for apps, DB, or topology.
5. Keep diffs focused; update docs when behavior or contracts change.
6. Prefer complete, shippable increments over partial scaffolds that cannot run or be reviewed.

### Never

- Make architectural decisions unilaterally.
- Lock a tech stack “to move forward” without an Accepted ADR.
- Implement business logic when the user asked only for docs/structure.
- Commit secrets, credentials, customer data, or real `.env` files.
- Bypass domain boundaries for convenience.
- Add drive-by refactors unrelated to the task.
- Invent microservices, extra databases, or frameworks without need + ADR.

### When unclear

```text
1. State the decision needed
2. Propose ≥2 alternatives + trade-offs
3. Give one non-binding recommendation
4. Stop for Lead / ADR approval before implementing the choice
```

---

## 1. Coding standards

- Write code as if it will run in production tomorrow.
- One module / type / file → one reason to change (SRP).
- Depend on abstractions at boundaries (DIP); implement infra behind ports.
- Do not duplicate business rules; trivial glue may be duplicated over bad shared utils.
- Prefer explicitness over cleverness; no premature abstraction.
- No silent failures: no empty `catch`, no ignored promises, no swallowed validation.
- Validate at trust boundaries; keep invariants in the domain layer.
- Map adapter DTOs ↔ domain explicitly; never expose persistence models as public API.
- Comments explain **why**, never restate **what**.
- Delete dead code; do not leave large commented-out blocks.

**Production-ready checklist (every PR-sized change):**

- [ ] Boundaries respected
- [ ] Failure modes handled
- [ ] No secrets
- [ ] Tests or approved waiver
- [ ] Docs/ADR updated if needed
- [ ] Reviewable diff

Canonical detail: `docs/CODING_STANDARDS.md`.

---

## 2. Architecture principles

### Layers (dependency rule: inward only)

```text
Adapters (HTTP, UI, mobile, workers)
  → Application (use cases)
    → Domain (entities, VOs, domain services, events)
  ← Infrastructure implements ports
```

| Layer | May know | Must not know |
|---|---|---|
| Domain | Business language only | HTTP, ORM, UI, cloud SDKs |
| Application | Domain + ports | Frameworks, SQL dialects, React |
| Infrastructure | Ports + vendors | Domain rules living only here |
| Adapters | Application API | Invariants that belong in domain |

### Domains (bounded contexts)

`hvac-directory` · `blog` · `lead-generation` · `crm` · `erp` · `ai-assistant` · `mobile` (client) · `public-api` (adapter)

- Cross-domain: facade / application API / domain events — **never** direct DB writes to another domain.
- AI calls use cases/tools; AI never owns authoritative rules or writes SQL.
- Public REST API is an adapter over use cases, versioned and OpenAPI-oriented.

### Topology

Default mental model: **modular platform**. Do not split into microservices unless an Accepted ADR says so.

Canonical detail: `docs/ARCHITECTURE.md`.

---

## 3. Naming conventions

### General

- Use domain ubiquitous language (Polish market concepts OK in product copy; code identifiers in **English** unless an ADR says otherwise).
- Names must reveal intent; avoid `Manager`, `Helper`, `Util`, `DataProcessor`, `Common`, `Misc`.
- No abbreviations unless industry-standard (`id`, `url`, `api`, `http`).

### Types & functions

| Kind | Convention | Examples |
|---|---|---|
| Use cases / commands | Verb + noun (imperative) | `SubmitLead`, `ClaimProviderProfile` |
| Queries | `Get` / `List` / `Search` + noun | `SearchProviders`, `GetLeadById` |
| Domain entities | Noun | `Lead`, `ProviderProfile` |
| Value objects | Noun (often descriptive) | `Nip`, `GeoPoint`, `Money` |
| Ports / interfaces | Capability noun or `I`-free suffix `Port` | `LeadRepository`, `Clock`, `Notifier` |
| Adapters | Technology + role | `PostgresLeadRepository`, `SmtpNotifier` |
| DTOs | `*Request` / `*Response` / `*Dto` at edges only | `SubmitLeadRequest` |

### Files & paths

- Match the main export where the language ecosystem expects it.
- Prefer `submit-lead.ts` / `SubmitLead.cs` style consistent with the Accepted language ADR.
- Do not encode layer in every filename if folder already implies layer (`domain/Lead.ts`).

### API (public REST)

- Resources: plural nouns (`/v1/leads`, `/v1/providers`).
- Stable, documented names; no leaky ORM field names.

---

## 4. Commit message format

Use **Conventional Commits**:

```text
<type>(<optional-scope>): <imperative summary>

[optional body]

[optional footer]
```

### Types

| Type | Use for |
|---|---|
| `feat` | New user-facing capability |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `refactor` | Behavior-preserving restructuring |
| `test` | Tests only |
| `chore` | Tooling, repo hygiene |
| `ci` | CI configuration |
| `perf` | Performance improvement |
| `build` | Build/deps packaging |

### Scopes (examples)

`directory` · `blog` · `leads` · `crm` · `erp` · `ai` · `api` · `mobile` · `docs` · `docker` · `cursor`

### Rules

- Subject ≤ 72 chars; imperative mood (`add`, `fix`, not `added` / `fixes`).
- Explain **why** in the body when non-obvious.
- Reference ADR/issue when relevant: `Closes #123`, `ADR-001`.
- One logical change per commit when practical.
- Never commit secrets; never use `--no-verify` unless Lead explicitly requires it.

**Examples:**

```text
docs: add Cursor permanent ruleset
feat(leads): submit lead use case with validation
fix(api): return 404 for unknown provider id
```

---

## 5. Folder organization

### Current (bootstrap)

```text
docs/           Product & engineering documentation
.cursor/        Agent rules (this file + rules/*.mdc)
.github/        CI, PR/issue templates
docker/         Container scaffolding (no locked runtime yet)
```

### Target application layout (after OD-001 ADR — do not create until accepted)

Organize by **capability**, then **layer** (names illustrative):

```text
apps/                 # or services/ — per ADR
  web/
  api/
  worker/
packages/             # or modules/
  <capability>/
    domain/
    application/
    infrastructure/
    adapter/
  platform/           # identity, tenancy, observability ports — keep thin
```

### Rules

- Do **not** invent `apps/` / `packages/` / `services/` trees until OD-001 is Accepted.
- Do **not** put business logic under `docker/` or `.github/`.
- Shared kernel stays small; prefer duplication of trivial code over a junk drawer.
- Feature folders beat “controllers/”, “services/”, “models/” dumps at repo root.

Open decision: `docs/architecture/open-decisions.md` (OD-001).

---

## 6. Testing strategy

| Layer | Purpose | Speed |
|---|---|---|
| Unit (domain) | Invariants & pure rules | Fast, no I/O |
| Application | Use cases with mocked ports | Fast |
| Integration | Adapters + real/testcontainers infra | Medium |
| Contract | Public API vs OpenAPI | Medium |
| E2E | Few critical journeys | Slow, minimal count |

### Rules

- Business rules tested without HTTP/UI.
- Every new use case ships with tests (or Lead-approved waiver + follow-up issue).
- Public endpoints need contract coverage before external partners rely on them.
- Flaky tests are bugs — fix or quarantine immediately.
- Do not test framework internals; test behavior.
- Performance/load tests appear when SLAs exist.

Canonical detail: `docs/testing.md`.

---

## 7. Security rules

- Never commit secrets; use `.env.example` only; real secrets via secret manager / local gitignored `.env`.
- Least privilege for users, partners, workers, and DB roles.
- Authenticate non-public surfaces; authorize in **application** policies, not only UI.
- Validate/sanitize all external input (HTTP, webhooks, AI tool args, files).
- Audit sensitive writes (leads, CRM, ERP, admin, permissions).
- Minimize PII; define retention before storing at scale.
- Treat AI output and prompts as untrusted; no silent privileged writes.
- TLS in non-local environments; secure cookies/tokens per auth ADR.
- Dependency and image scanning belong in CI once enabled.
- Report and document threat-relevant changes in the PR.

Canonical detail: `docs/security.md`.

---

## 8. Performance rules

- Measure before micro-optimizing; fix algorithmic and N+1 issues first.
- Keep request path thin: no unnecessary I/O in loops; batch where appropriate.
- Use pagination/limits on all list/search endpoints by default.
- Avoid unbounded queries and unbounded AI context windows.
- Cache only with clear invalidation ownership; do not cache authorization decisions carelessly.
- Prefer async/messaging for long work; keep HTTP requests within agreed latency budgets (define SLOs when product sets them).
- Directory search should use an explicit read model/projection when OLTP queries become hot — do not denormalize ad hoc across domains.
- Mobile/API clients: support conditional requests / idempotency for writes where retries are expected.
- Add indexes with migrations based on evidence; document why.
- No premature distribution for performance theater.

---

## 9. Documentation & ADR touchpoints

| Change type | Update |
|---|---|
| Product intent | `docs/VISION.md` / `docs/ROADMAP.md` |
| Structure/boundaries | `docs/ARCHITECTURE.md` |
| Stack choice | ADR + `docs/TECH_STACK.md` + open-decisions |
| Engineering norms | `docs/CODING_STANDARDS.md` + this file if agent behavior changes |

---

## 10. Quick reject list (AI)

Refuse or rewrite proposals that:

1. Put business rules in React/controllers/migrations alone  
2. Choose Mongo/Redis/Kafka/etc. without ADR when Postgres-or-pending is unresolved  
3. Create microservices for a single MVP feature  
4. Add “temporary” architecture that cannot be removed  
5. Generate huge boilerplate unrelated to the asked task  
6. Store API keys in source or compose files  

---

## References

- `docs/VISION.md`
- `docs/ROADMAP.md`
- `docs/ARCHITECTURE.md`
- `docs/TECH_STACK.md`
- `docs/CODING_STANDARDS.md`
- `docs/governance.md`
- `docs/architecture/open-decisions.md`
- `.cursor/AGENTS.md`
