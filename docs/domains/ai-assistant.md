# Domain: AI Assistant

## Purpose

Assist users and operators with platform workflows (guidance, drafting, triage) without replacing domain ownership of business rules.

## Responsibilities (logical)

- Conversational / assisted UX shells
- Tool/orchestration layer calling domain use cases
- Prompt and policy configuration (safety, PII)

## Non-responsibilities

- Authoritative business rules (must live in domain/application layers)
- Silent writes without audit and authorization

## Dependencies

- All domains via application ports (not direct DB access)
- Model hosting choice (OD-008)
- Observability and cost controls

## Implementation status

Documentation only. Defer implementation until core domains and auth exist.
