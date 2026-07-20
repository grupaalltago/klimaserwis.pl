# VISION

## Klimaserwis.pl

Klimaserwis.pl is a production-grade SaaS platform for the Polish HVAC market. The product connects demand (homeowners, property managers, businesses) with supply (installers, service companies, distributors) and equips providers with software to win work, manage relationships, and run operations.

This document defines **why** the platform exists and **what** it must become. It does not prescribe implementation details.

---

## Problem

The HVAC market in Poland is fragmented:

- Customers struggle to find verified, comparable service providers.
- Providers rely on ad-hoc channels for leads and lack a coherent digital back-office.
- Content, reputation, and operations data live in disconnected tools.
- There is no nationwide platform that combines marketplace discovery with CRM/ERP-grade operations and a public integration API.

Klimaserwis.pl closes that gap with one coherent product platform.

---

## Mission

Make HVAC services in Poland discoverable, trustworthy, and operable at scale — through software that serves customers, providers, partners, and internal operators on shared domain foundations.

---

## Product pillars

| Pillar | Outcome |
|---|---|
| **Trust** | Verified providers, transparent signals, accountable lead handling |
| **Demand** | High-quality lead capture, routing, and attribution |
| **Operations** | CRM and ERP capabilities that turn leads into completed work |
| **Reach** | Blog/SEO, mobile clients, and a public REST API for partners |
| **Intelligence** | AI assistance that accelerates workflows without owning business rules |

---

## Long-term capability map

The platform grows into a nationwide HVAC system covering:

1. **HVAC directory** — discovery, profiles, search, trust signals  
2. **Blog** — education and SEO content  
3. **Lead generation** — intake, qualification, routing, attribution  
4. **CRM** — accounts, contacts, pipelines, activities  
5. **ERP** — jobs, scheduling, resources, commercial documents (scope refined by product)  
6. **AI assistant** — guided and automated assistance over domain use cases  
7. **Mobile application** — customer and/or field experiences  
8. **Public REST API** — versioned integrations for partners and first-party clients  

Shared platform concerns (identity, tenancy, audit, notifications, observability, billing) are designed once and reused across capabilities.

---

## Target users

| Audience | Primary value |
|---|---|
| End customers | Find and request trustworthy HVAC services |
| HVAC providers | Receive leads; manage customers and jobs |
| Partners / aggregators | Integrate via Public REST API |
| Internal operators | Moderate directory, content, quality, and marketplace health |
| Field staff (later) | Execute assigned work via mobile |

---

## Strategic principles

1. **MVP without dead ends** — ship a thin vertical slice that preserves clean module seams for CRM, ERP, API, and mobile.  
2. **Domain ownership** — each capability owns its rules; integrations go through explicit ports/events/APIs.  
3. **API-first consumers** — web, mobile, and partners are first-class clients of stable contracts.  
4. **Nationwide readiness** — performance, compliance, and multi-tenant thinking inform design before scale arrives.  
5. **Governed architecture** — significant choices are recorded as ADRs; agents and contributors propose alternatives instead of locking stack unilaterally.

---

## Success signals (directional)

- A clear primary journey from discovery → lead → follow-up works reliably in production.  
- Providers see measurable lead quality and operational time saved as CRM/ERP deepen.  
- Organic traffic and directory coverage expand nationally through content and trust.  
- External partners can integrate against a documented, versioned REST API.  
- The codebase remains modular enough to add AI and mobile without a rewrite.

---

## Non-goals

- Building every ERP module on day one.  
- Premature microservice sprawl without evidence of need.  
- Replacing specialized accounting or CAD tools wholesale (integrate where sensible).  
- AI that silently mutates business state without authorization and audit.

---

## Related documents

- [ROADMAP.md](ROADMAP.md) — phased delivery  
- [ARCHITECTURE.md](ARCHITECTURE.md) — logical structure and boundaries  
- [TECH_STACK.md](TECH_STACK.md) — technology options and decision status  
- [CODING_STANDARDS.md](CODING_STANDARDS.md) — engineering standards  
- [architecture/open-decisions.md](architecture/open-decisions.md) — unresolved ADRs  
