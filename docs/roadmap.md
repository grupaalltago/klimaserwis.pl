# ROADMAP

Phased plan to grow Klimaserwis.pl from repository bootstrap to a nationwide HVAC SaaS platform.

Dates are directional. Sequencing within a phase is confirmed by product priority. Architecture choices remain governed by ADRs ([architecture/open-decisions.md](architecture/open-decisions.md)).

---

## Phase 0 — Foundation (current)

**Goal:** Production-ready repository, documentation, and delivery hygiene — no business logic yet.

| Workstream | Deliverables |
|---|---|
| Documentation | Vision, roadmap, architecture, stack options, coding standards |
| Tooling | `.cursor` rules, `.github` templates, CI structure guard |
| Containers | Docker scaffolding without locked runtimes |
| Governance | ADR process, open decisions catalog |

**Exit criteria:** Contributors can onboard from docs alone; no silent stack assumptions.

---

## Phase 1 — MVP platform slice

**Goal:** One coherent production journey that proves the marketplace + intake loop.

### Candidate MVP slice (to be confirmed)

**Discovery → request → lead handoff** for a limited geography and service set.

| Area | MVP intent |
|---|---|
| HVAC Directory | Searchable provider profiles (minimum viable fields) |
| Lead Generation | Web intake, validation, routing to provider or ops |
| Identity | Sign-in for providers/ops; public browse for customers |
| Platform | Logging, error handling, basic admin, CI build/test once stack ADR lands |
| Public API | Internal-ready OpenAPI surface; partner access may remain gated |

### Explicitly deferred in Phase 1

- Full CRM pipelines  
- ERP job/inventory/invoicing depth  
- Native mobile apps  
- Advanced AI assistant  

**Exit criteria:** Real users complete the primary journey; metrics exist for lead volume, conversion, and error rates.

**Blockers to resolve before/during Phase 1:** OD-001 (repo layout), OD-002 (backend), OD-003 (web), OD-004 (OLTP), OD-005 (tenancy model at least at MVP depth).

---

## Phase 2 — Growth & relationships

**Goal:** Scale demand generation and relationship management.

| Capability | Focus |
|---|---|
| Blog | Publishing workflow, SEO metadata, content ↔ directory loops |
| Lead Generation | Enrichment, SLA routing, attribution, partner intake |
| CRM | Accounts/contacts, pipelines, activity timeline tied to leads |
| Directory | Coverage expansion, trust signals, claim/verify flows |
| Public REST API | Versioned partner endpoints with auth, rate limits, docs |

**Exit criteria:** Providers manage follow-up in-platform; content contributes measurable acquisition; at least one external integration path is live or in private beta.

---

## Phase 3 — Operations platform

**Goal:** Turn won work into operable jobs and back-office flows.

| Capability | Focus |
|---|---|
| ERP | Work orders, scheduling, resource assignment; quotes/invoices as scoped |
| CRM ↔ ERP | Clear handoff from opportunity to job without duplicated truth |
| Mobile | Field and/or customer app against stable APIs (OD-007) |
| Platform | Stronger tenancy, roles, audit, billing hooks if sold as SaaS seats |

**Exit criteria:** A provider can run a representative job lifecycle without leaving the platform for core steps; mobile covers the agreed audience.

---

## Phase 4 — Intelligence & nationwide scale

**Goal:** Differentiate with AI and harden for national load and partner ecosystem.

| Capability | Focus |
|---|---|
| AI Assistant | Assisted drafting, triage, guidance — always via domain use cases |
| Scale | Performance, search, multi-region options, cost controls |
| API ecosystem | Partner program, webhooks, stricter SLAs |
| Quality | Deeper compliance, pen-tests, marketplace integrity controls |

**Exit criteria:** AI features are audited and cost-bounded; platform meets agreed nationwide SLOs; partners integrate without bespoke one-offs as the default path.

---

## Cross-phase workstreams

These run continuously, not as a single phase:

- Security & privacy (see [security.md](security.md))  
- Observability (see [observability.md](observability.md))  
- Testing discipline (see [testing.md](testing.md))  
- ADR hygiene and boundary reviews  
- Documentation kept in sync with shipped behavior  

---

## Dependency rules

1. Later phases must not force a rewrite of earlier domain boundaries.  
2. Public API and mobile consume application use cases — they do not redefine them.  
3. AI never owns authoritative business rules.  
4. No phase skips governance: stack and topology changes require accepted ADRs.

---

## Near-term decision checklist

Before heavy implementation starts, accept ADRs for:

| ID | Topic | Why it blocks |
|---|---|---|
| OD-001 | Modularization | Source layout and CI |
| OD-002 | Backend runtime | All server code |
| OD-003 | Web frontend | Directory + blog SEO |
| OD-004 | Primary datastore | Persistence model |
| OD-005 | Tenancy | CRM/ERP correctness |

See [TECH_STACK.md](TECH_STACK.md) for option summaries.

---

## Related documents

- [VISION.md](VISION.md)  
- [ARCHITECTURE.md](ARCHITECTURE.md)  
- [architecture/open-decisions.md](architecture/open-decisions.md)  
