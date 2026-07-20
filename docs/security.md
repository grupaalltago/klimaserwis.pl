# Security baseline

Expectations for production readiness. Concrete tooling is open (OD-009 and related ADRs).

## Mandatory practices

- No secrets in git; use `.env.example` templates only
- Least-privilege access for humans and services
- Authenticated and authorized access to non-public surfaces
- Input validation at trust boundaries
- Audit trail for sensitive writes (CRM/ERP/leads)
- Dependency and container scanning in CI once pipelines exist
- TLS everywhere outside local dev

## Privacy

- Collect only data required for the use case
- Respect consent for marketing and partner sharing
- Define retention per domain before storing PII at scale

## Threat modeling

Before major launches, run a lightweight threat model for:

- Lead marketplace abuse
- Account takeover
- Partner API abuse
- AI data leakage

## Open items

- IdP / SSO choice
- Secret manager choice
- WAF / DDoS posture
- Penetration test cadence

Do not invent production security controls in code until related ADRs exist; do document risks in PRs.
