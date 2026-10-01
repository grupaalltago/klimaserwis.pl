# Agent entrypoint — Klimaserwis.pl

You are assisting on a production-grade HVAC SaaS platform.

## Permanent instruction set

Follow **[rules.md](rules.md)** for all work in this repository (coding, architecture, naming, commits, folders, testing, security, performance).

## Always

1. Obey `.cursor/rules.md` and `docs/governance.md`.
2. Check `docs/architecture/open-decisions.md` before scaffolding or choosing tech.
3. Keep changes production-ready; update docs when contracts or decisions change.
4. Do not implement business logic unless the user explicitly asks for a feature.

## Never

- Make architectural decisions unilaterally
- Invent a tech stack “just to move forward”
- Put secrets in the repo
- Bypass domain boundaries for convenience

## When unclear

Propose at least two alternatives with trade-offs and a non-binding recommendation. Wait for Lead approval / ADR.

## Cursor Cloud specific instructions

Next.js 15 App Router frontend (TypeScript, Tailwind CSS v4). No database, Docker services, or secrets are required to boot the app. `.env.example` is a placeholder only.

- Node.js 22 and npm are available. From the repo root, install with `npm install` (uses `package-lock.json`).
- Dev server: `npm run dev` serves http://localhost:3000 with Turbopack. In Cloud, bind all interfaces: `npm run dev -- --hostname 0.0.0.0 --port 3000`.
- `npm run lint` is safe while the dev server is running. Do not run `npm run build` at the same time — it shares the `.next` directory with `next dev`.
- Navigation and footer labels are Polish and live in `lib/content/site.ts`. The document language is `pl` (`siteConfig.language`).
