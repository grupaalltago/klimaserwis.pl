# Engineering principles

Every generated file and change must honor these principles.

## SOLID

| Principle | Expectation |
|---|---|
| **S**ingle Responsibility | One reason to change per module/class/file |
| **O**pen/Closed | Extend via new types/adapters; avoid editing stable cores for every feature |
| **L**iskov Substitution | Implementations of a port must honor the contract |
| **I**nterface Segregation | Prefer small, purpose-specific ports over fat interfaces |
| **D**ependency Inversion | Domain/application depend on abstractions; infra implements them |

## DRY

- Share policy and invariants in one place (domain or shared kernel).
- Do not create premature shared libraries for one-off code.
- Duplication of simple glue is acceptable; duplication of business rules is not.

## KISS

- Prefer the simplest design that meets current requirements and preserves seams for growth.
- Do not introduce distributed systems complexity without an accepted ADR and clear need.

## Clean Architecture

- Dependencies point **inward** toward the domain.
- Use cases orchestrate; domain owns rules; adapters translate.
- Frameworks, ORMs, and HTTP libraries stay at the edges.
- Business logic never lives in controllers, React components, or migration scripts alone.

## Production readiness bar

A change is production-ready when:

- Boundaries are respected
- Failure modes are considered (validation, timeouts, idempotency where relevant)
- Observability hooks are planned or present
- Tests or a clear test plan exist
- Docs/ADRs updated when decisions or contracts change
- No secrets or environment-specific hardcoding

## Anti-patterns (reject in review)

- God modules spanning multiple domains
- Domain importing infrastructure packages
- Silent catch-all error handling
- Feature flags as a substitute for design
- “Temporary” architecture that cannot be removed
