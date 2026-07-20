# CODING_STANDARDS

Engineering standards for Klimaserwis.pl. Apply to every change once application code exists. Language-specific lint rules will be added after the backend/frontend ADRs are accepted; the principles below are binding now.

Companion docs: [ARCHITECTURE.md](ARCHITECTURE.md), [architecture/principles.md](architecture/principles.md), [contributing.md](contributing.md).

---

## 1. North-star principles

| Principle | Practical meaning |
|---|---|
| **SOLID** | Small units, abstractions at boundaries, dependency inversion |
| **DRY** | Single source of truth for business rules — not premature shared libraries |
| **KISS** | Simplest design that meets the requirement and preserves seams |
| **Clean Architecture** | Domain/application inward; frameworks at the edges |

If a change violates these, it is not production-ready.

---

## 2. Production-ready definition

A change is production-ready when it:

1. Respects domain and layer boundaries  
2. Handles invalid input and likely failure modes explicitly  
3. Avoids secrets, credentials, and environment hardcoding in source  
4. Includes tests or an approved temporary waiver with a follow-up issue  
5. Updates docs/ADRs when contracts or decisions change  
6. Is reviewable (focused diff, clear intent)  

“Works on my machine” is insufficient.

---

## 3. Architecture compliance

### Allowed

- Adapters (HTTP, UI, workers) calling application use cases  
- Application calling domain and outbound ports  
- Infrastructure implementing ports  
- Cross-domain collaboration via facades, application APIs, or events  

### Forbidden

- Domain importing HTTP frameworks, ORMs, UI kits, or cloud SDKs  
- UI/controllers containing business invariants  
- Domain A writing to Domain B’s persistence directly  
- Silent `catch` / swallowed errors  
- New frameworks, databases, or deploy topologies without an Accepted ADR  

When unclear, **propose alternatives** — do not choose unilaterally ([governance.md](governance.md)).

---

## 4. Code organization (target, post-ADR)

Regardless of final folder names (OD-001), organize by **capability** and **layer**, not by technical type alone.

```text
…/leads/
    domain/
    application/
    infrastructure/
    adapter/http/   (example)
```

Shared code belongs in a carefully curated shared kernel. Prefer duplication of trivial glue over a polluted shared module.

---

## 5. Naming & clarity

- Name types and functions after **business language** (Ubiquitous Language per domain).  
- Prefer explicit names over abbreviations.  
- Use cases read like actions: `SubmitLead`, `ClaimProviderProfile`, `ScheduleJob`.  
- Avoid generic names: `Manager`, `Util`, `Helper`, `DataProcessor` without domain meaning.  
- Public API resources follow [api-guidelines.md](api-guidelines.md).

---

## 6. Error handling & validation

- Validate at trust boundaries (HTTP/API adapters).  
- Keep domain invariants in the domain layer (throw domain errors / result types — style TBD by language ADR).  
- Map errors to stable API problem responses at the edge.  
- Log failures with correlation IDs; never log secrets or unnecessary PII.  
- Retries for side-effecting operations must be idempotent where practical.

---

## 7. API & contracts

- Public REST is contract-first (OpenAPI expected).  
- Additive changes preferred within a version; breaking changes require a new version.  
- DTOs at the edge ≠ domain entities. Map explicitly.  
- Do not expose persistence models as public JSON shapes.

---

## 8. Data & persistence

- One domain owns its write model.  
- Migrations are reviewable and backward-compatible when possible.  
- No cross-domain joins as a substitute for integration design (read models/projections are explicit).  
- Use ports for storage; do not scatter raw SQL/ORM calls across use cases without structure.

---

## 9. Testing standards

| Layer | What to test |
|---|---|
| Domain | Invariants and pure rules (fast, no I/O) |
| Application | Use-case orchestration with mocked ports |
| Integration | Adapters + real infra (containers/test DB) |
| Contract | Public API vs OpenAPI |
| E2E | Few critical journeys only |

See [testing.md](testing.md). Flaky tests are defects.

---

## 10. Security standards

- Least privilege for every actor (user, partner, worker).  
- Authorize in application policies, not only in the UI.  
- Sanitize and validate all external input.  
- Depend on updated packages; scanning belongs in CI once enabled.  
- Follow [security.md](security.md).  

---

## 11. Observability standards

- Structured logs with correlation/request IDs on public and internal requests.  
- Metrics for errors, latency, and key domain counters (e.g. leads submitted).  
- Tracing across async boundaries when workers exist.  
- Vendor SDKs behind ports where feasible ([observability.md](observability.md)).

---

## 12. AI feature standards

- Assistants call use cases/tools; they do not write SQL or mutate state directly.  
- All AI-assisted writes are authorized and audited.  
- Prompt content treated as untrusted input.  
- Cost and latency budgets defined before production rollout.

---

## 13. Documentation standards

- Behavior changes update the relevant `docs/` pages in the same PR.  
- Architectural choices use ADRs.  
- Domain README/briefs stay free of speculative implementation detail.  
- Comments explain **why**, not restate **what**.

---

## 14. Git & review standards

- Small PRs; one primary concern.  
- PR template completed honestly (architecture checklist included).  
- Commit messages explain why.  
- No `--no-verify` unless explicitly required by the Lead for an emergency and documented.  
- Do not commit `.env`, keys, dumps, or customer data.

---

## 15. Language-specific addenda (placeholders)

After OD-002 / OD-003 ADRs are accepted, add:

- Formatter/linter config standards  
- Package management conventions  
- Null/error idioms  
- Module visibility rules  
- Frontend state/data-fetching conventions  

Until then, do not invent parallel standards that conflict with an upcoming ADR.

---

## 16. Review checklist (short)

- [ ] Boundaries respected  
- [ ] No stack decision without ADR  
- [ ] Tests or waiver  
- [ ] Docs updated  
- [ ] No secrets  
- [ ] Errors observable  
- [ ] Names match domain language  

---

## Related documents

- [VISION.md](VISION.md)  
- [ARCHITECTURE.md](ARCHITECTURE.md)  
- [TECH_STACK.md](TECH_STACK.md)  
- [contributing.md](contributing.md)  
- [governance.md](governance.md)  
