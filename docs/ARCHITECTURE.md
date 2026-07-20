# ARCHITECTURE

Logical architecture for Klimaserwis.pl. This document describes **structure and boundaries**, not a locked deployment topology or vendor stack.

Technology options live in [TECH_STACK.md](TECH_STACK.md). Unresolved choices live in [architecture/open-decisions.md](architecture/open-decisions.md).

---

## 1. Architectural intent

Klimaserwis.pl is a **modular SaaS platform** that must scale from a focused MVP to a nationwide HVAC system spanning directory, content, leads, CRM, ERP, AI, mobile, and a public REST API.

We optimize for:

- Clear domain ownership  
- Dependency inversion (Clean Architecture)  
- Replaceable infrastructure  
- API-first externalization  
- Governed evolution via ADRs  

We explicitly defer premature distribution (microservices) until modular boundaries and operational need justify it.

---

## 2. Capability map (bounded contexts)

```text
┌──────────────────────────────────────────────────────────────────┐
│                        Klimaserwis.pl                            │
├────────────────┬────────────────┬────────────────┬───────────────┤
│ HVAC Directory │ Blog           │ Lead           │ CRM           │
│                │                │ Generation     │               │
├────────────────┼────────────────┼────────────────┼───────────────┤
│ ERP            │ AI Assistant   │ Mobile Apps    │ Public REST   │
│                │                │ (clients)      │ API           │
└────────────────┴────────────────┴────────────────┴───────────────┘
                         │
         ┌───────────────┴───────────────┐
         │   Shared platform concerns    │
         │ identity · tenancy · audit    │
         │ notify · files · observe      │
         │ billing (TBD)                 │
         └───────────────────────────────┘
```

| Capability | Owns | Must not own |
|---|---|---|
| HVAC Directory | Listings, search projections for discovery, public profiles | Lead routing rules, CRM pipelines |
| Blog | Content lifecycle, SEO metadata | Lead business rules (delegate to Lead Generation) |
| Lead Generation | Intake, qualify, route, attribute | Long-term relationship CRM; job fulfillment |
| CRM | Accounts, contacts, pipelines, activities | Public marketplace SEO pages; inventory |
| ERP | Jobs/resources/commercial ops (scoped) | Marketing content; lead marketplace policy |
| AI Assistant | Orchestration UX + tool calls | Authoritative domain invariants |
| Mobile | Client UX | Server-side business rules |
| Public REST API | External HTTP contract, versioning, partner auth | Domain logic inside controllers |

Detailed briefs: [domains/](domains/).

---

## 3. Clean Architecture layers

Every capability maps to the same layering model:

```text
┌─────────────────────────────────────────────┐
│ Interface adapters                          │
│ HTTP/REST · UI · Mobile · Workers · CLI     │
├─────────────────────────────────────────────┤
│ Application (use cases / application services) │
├─────────────────────────────────────────────┤
│ Domain (entities, value objects, domain services, events) │
├─────────────────────────────────────────────┤
│ Infrastructure                              │
│ DB · queues · email · LLM vendors · search  │
└─────────────────────────────────────────────┘
```

### Dependency rule

Dependencies point **inward**:

- Domain has no framework, ORM, or HTTP dependencies.  
- Application orchestrates domain and outbound ports.  
- Infrastructure implements ports.  
- Adapters translate transport ↔ application DTOs/commands.

### Production implication

Business rules are testable without spinning up the web server. Controllers stay thin. Vendor SDKs never leak into domain types.

---

## 4. Integration styles between domains

Cross-domain collaboration is explicit. Preferred style is chosen per use case via ADR when it becomes structural.

| Style | Typical use | Consistency |
|---|---|---|
| In-process application API / facade | Same deployable; strong consistency | Immediate |
| Domain events (+ outbox) | Decoupled reactions (e.g. lead created → CRM) | Eventual |
| Internal/public HTTP | Separate clients or deployables | Per-call |

**Anti-pattern:** Domain A writing directly to Domain B’s tables.

---

## 5. Public API as a first-class adapter

The Public REST API is an interface adapter over application use cases:

- Resource-oriented, versioned HTTP ([api-guidelines.md](api-guidelines.md))  
- OpenAPI as the external contract (expected)  
- AuthN/AuthZ and rate limits at the edge  
- No “export the database” endpoints  

Mobile and partner integrations should target stable API versions, not ad-hoc internal shapes.

---

## 6. Identity, tenancy, and authorization

Tenancy is a high-impact open decision (OD-005). Architecturally we require:

- Explicit subject (user/system/partner) on every use case  
- Authorization checked in application layer (policies), not only in UI  
- Audit of sensitive mutations (leads, CRM, ERP, admin)  
- Clear separation of marketplace-public data vs tenant-private data  

Until OD-005 is accepted, deep CRM/ERP modeling remains constrained to designs that can adopt multi-tenant organization boundaries.

---

## 7. Data architecture (logical)

| Concern | Approach |
|---|---|
| Write models | Owned per domain |
| Read models / search | Explicit projections (directory search, reporting) |
| Files / media | Object storage behind a port |
| Integration reliability | Prefer transactional outbox for events when async is chosen |
| PII | Minimized; retention defined per domain before scale storage |

Physical database engines are open (OD-004); the logical ownership rules are not.

---

## 8. Deployment topology (undecided)

Logical modularity does **not** mandate microservices.

| Option | Summary | Fit |
|---|---|---|
| Modular monolith | One deployable, package boundaries | Strong default for MVP |
| Monorepo multi-app | Several deployables, shared libraries | When web/API/worker scale differently |
| Services network | Independently deployed domains | Later, with clear ops need |

See OD-001. Choose via ADR; do not split for fashion.

---

## 9. Cross-cutting platform services

Designed as shared kernels or platform modules (not a dumping ground):

- Identity & session/token validation  
- Tenancy context propagation  
- Structured logging, metrics, tracing ([observability.md](observability.md))  
- Notification dispatch  
- File storage  
- Feature flags (optional; not a substitute for design)  
- Clock/ID generation abstractions for testability  

---

## 10. AI placement

AI sits in the adapter/application orchestration layer:

```text
User → Assistant adapter → tools/use cases → domain
```

Rules:

- Domain remains source of truth.  
- Every write goes through authorized use cases.  
- Prompts and tool results are observable and cost-controlled.  
- Hosting model is open (OD-008).

---

## 11. Quality attributes

| Attribute | Architectural response |
|---|---|
| Maintainability | Bounded contexts + Clean Architecture |
| Scalability | Horizontal adapters; careful write-model ownership; search projections |
| Security | Edge auth, least privilege, audited writes ([security.md](security.md)) |
| Evolvability | ADRs, versioned public API, replaceable infra ports |
| Operability | Correlation IDs, health checks, CI structure |

---

## 12. Repository shape (deferred)

Application trees such as `apps/`, `packages/`, or `services/` are created only after OD-001 (and related stack ADRs) are accepted. Until then this repository holds documentation, agent rules, GitHub config, and Docker scaffolding.

---

## 13. Decision governance

1. Ambiguity → propose ≥2 alternatives with trade-offs.  
2. Significant choice → ADR from [architecture/adr/0000-template.md](architecture/adr/0000-template.md).  
3. No unilateral stack lock-in by agents or contributors.  
4. Coding must follow [CODING_STANDARDS.md](CODING_STANDARDS.md).

---

## Related documents

- [VISION.md](VISION.md)  
- [ROADMAP.md](ROADMAP.md)  
- [TECH_STACK.md](TECH_STACK.md)  
- [architecture/principles.md](architecture/principles.md)  
- [architecture/boundaries.md](architecture/boundaries.md)  
