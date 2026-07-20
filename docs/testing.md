# Testing strategy

Tooling and runners are open until stack ADRs exist. Expectations are not.

## Pyramid (target)

| Layer | Intent |
|---|---|
| Unit | Domain rules and pure application logic |
| Integration | Adapters with real or testcontainers infra |
| Contract | Public API vs OpenAPI / consumer expectations |
| E2E | Few critical journeys |

## Rules

- Business rules tested without HTTP or UI
- Every public API endpoint has contract coverage before external partners onboard
- Flaky tests are treated as defects
- Performance and load tests appear when SLAs are defined

## PR expectation

PRs that add behavior include tests or an explicit, temporary waiver with Lead approval and a follow-up issue.
