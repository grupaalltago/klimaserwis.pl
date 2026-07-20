# Public API guidelines

Applies when implementing the Public REST API (see [domains/public-api.md](domains/public-api.md)).

## Design rules

- Resource-oriented URLs; consistent naming
- Explicit versioning strategy (OD-006 — do not invent ad hoc versions)
- JSON request/response unless an ADR says otherwise
- Idempotency keys for creating side-effecting resources where retries are expected
- Problem details (or equivalent) for errors — format TBD via ADR
- Pagination, filtering, and sorting conventions documented before public launch
- OpenAPI spec is the contract; code implements the contract

## Auth

- Public ≠ anonymous for privileged resources
- Partner credentials and end-user tokens are separate concerns
- Scopes/permissions mapped to use cases, not to database tables

## Compatibility

- Prefer additive changes within a version
- Breaking changes require a new version and deprecation window
- Document deprecations in changelog and OpenAPI

## Clean Architecture

Controllers/handlers are adapters. Validation of transport concerns may live at the edge; business invariants live in domain/application layers.
