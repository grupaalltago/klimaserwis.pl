# Docker scaffolding for Klimaserwis.pl
#
# No production services are defined yet. Runtime, databases, and hosting are
# open decisions — see docs/architecture/open-decisions.md (OD-002, OD-004, OD-009).
#
# When ADRs are accepted, add:
# - docker-compose.yml (or split compose files per environment)
# - Dockerfiles per deployable
# - .env.example for local wiring (never commit real secrets)

## Layout

| Path | Purpose |
|---|---|
| [README.md](README.md) | This file |
| [compose/.gitkeep](compose/.gitkeep) | Future compose files |
| [images/.gitkeep](images/.gitkeep) | Future Dockerfiles |
| [scripts/wait-for-it.sh](scripts/wait-for-it.sh) | Optional local helper placeholder |

## Local development (future)

Suggested flow after ADRs:

1. Copy env template → local `.env` (gitignored)
2. `docker compose -f docker/compose/docker-compose.yml up`
3. Run app tooling against published ports

## Rules

- One concern per container when services appear
- Prefer official base images pinned by digest or immutable tag policy (ADR)
- No business logic in container entrypoints beyond process supervision
- Keep domain code out of `docker/`; images only package build artifacts
