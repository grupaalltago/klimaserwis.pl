# Architecture overview

Logical view of Klimaserwis.pl. This document does **not** prescribe deployment topology or technology stack.

## Capability view

Platform capabilities (bounded contexts / product areas):

1. **HVAC Directory** — listings, search, profiles, trust signals
2. **Blog** — content publishing and discovery
3. **Lead Generation** — capture, qualify, route, attribute
4. **CRM** — accounts, contacts, pipelines, activities
5. **ERP** — operational back-office (jobs, resources, finance — scope TBD)
6. **AI Assistant** — assisted UX and internal copilots
7. **Mobile Application** — native/hybrid clients consuming platform APIs
8. **Public REST API** — versioned external integration surface

Shared platform concerns (cross-cutting):

- Identity & access
- Tenancy / multi-company model (TBD)
- Audit & compliance
- Billing / subscriptions (TBD)
- Notifications
- Observability
- File / media storage

## Layer view (Clean Architecture)

Regardless of monorepo layout, each capability should map to:

```text
┌────────────────────────────────────────┐
│  Interface adapters (HTTP, UI, jobs)   │
├────────────────────────────────────────┤
│  Application use cases                 │
├────────────────────────────────────────┤
│  Domain model & domain services        │
├────────────────────────────────────────┤
│  Infrastructure (DB, queues, vendors)  │
└────────────────────────────────────────┘
```

- Domain and application layers must not depend on frameworks or vendors.
- Infrastructure implements ports defined inward.
- UI and public API are adapters, not the core.

## Deployment topology (undecided)

Viable shapes are listed in [open-decisions.md](open-decisions.md). Until an ADR is accepted, treat the system as a **logical modular platform**, not a physical microservice fleet.

## Source layout (deferred)

Candidate monorepo layouts are recorded as open decisions. Do not create `apps/` / `services/` trees until layout ADR is accepted.
