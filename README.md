# Klimaserwis.pl

Production-oriented HVAC SaaS platform for Poland.

**Status:** frontend MVP (KS-0005) — Next.js App Router UI only. No auth, database, or API yet.

## Stack (frontend MVP)

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4

## Repository layout

```text
src/app/           Next.js routes (interface adapters)
src/components/    UI composition (layout, home, ui)
src/content/       Static content / placeholders
src/shared/        Shared utilities
docs/              Product, architecture, UX documentation
.cursor/           Agent rules
.github/           CI and templates
docker/            Container scaffolding
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Documentation

- [docs/VISION.md](docs/VISION.md)
- [docs/ux/README.md](docs/ux/README.md)
- [docs/TECH_STACK.md](docs/TECH_STACK.md)
- [docs/architecture/open-decisions.md](docs/architecture/open-decisions.md)
