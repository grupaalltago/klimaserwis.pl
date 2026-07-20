# Observability

## Goals

- Diagnose production issues without SSH archaeology
- Measure user journeys and domain KPIs
- Control cost and latency of AI and partner integrations

## Three pillars

| Pillar | Expectation |
|---|---|
| Logs | Structured, correlatable, no secrets/PII in clear text beyond policy |
| Metrics | RED/USE-style service health + domain counters (leads, API errors) |
| Traces | Request/async flow across adapters when distributed |

## Correlation

Every request on Public API and internal HTTP should carry/propagate a correlation ID.

## Open items

- Vendor (OpenTelemetry + backend choice)
- Log retention
- On-call alerting policy

Do not hardcode a vendor SDK into domain layers; use ports/adapters.
