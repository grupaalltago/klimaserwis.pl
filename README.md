# Klimaserwis.pl

Next.js 15 App Router skeleton for the Klimaserwis.pl HVAC platform.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint + Prettier
- Dark mode ready

## Structure

```text
app/                 Routes (App Router)
components/          UI + layout + design system
hooks/               React hooks
lib/                 Shared utilities & content
types/               Shared TypeScript types
public/              Static assets
styles/              Global CSS / design tokens
docs/                Product & architecture docs
```

## Pages

- `/`
- `/firmy`
- `/klimatyzacja`
- `/pompy-ciepla`
- `/rekuperacja`
- `/wentylacja`
- `/poradniki`
- `/dla-firm`
- `/kontakt`

All pages inherit the root layout: Header → Main → Footer.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```
