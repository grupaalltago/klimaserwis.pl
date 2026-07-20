# Domain: Public REST API

## Purpose

Stable, versioned HTTP API for partners, integrations, and first-party clients (web/mobile).

## Responsibilities (logical)

- Resource-oriented REST endpoints
- AuthN/AuthZ for external callers
- Versioning, deprecation, and documentation (OpenAPI expected)
- Rate limiting and abuse controls

## Non-responsibilities

- Embedding domain rules in controllers (delegate to application use cases)
- Breaking changes without versioning policy

## Dependencies

- Identity
- All domains exposed intentionally (explicit public surface, not “export everything”)
- API guidelines: [../api-guidelines.md](../api-guidelines.md)
- Versioning/auth open decisions: OD-006

## Implementation status

Documentation and guidelines only. No route handlers yet.
