# 2. User Journey — MVP

Primary persona for launch: **Homeowner / decision-maker seeking HVAC service in Poland** (install, service, repair of air conditioning / heat pump — exact service labels from seeded data).

Secondary (thin): **Provider** — not a journey in MVP UI; firms are listed by ops. No provider login journey.

---

## Happy path (P0): Search → Trust → Lead

```text
[Need: broken AC / new install]
        │
        ▼
┌───────────────────┐
│ Discover via Google│  Query: “klimatyzacja serwis {miasto}”
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Land on Profile OR │  Prefer deep link to /firma/{slug}
│ Home → Katalog     │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Scan trust cues    │  Name, city, services, verification, phone/CTA
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Decide to act      │  Primary: “Wyślij zapytanie”
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Kontakt form       │  Prefill firm if from profile; short fields
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Success state      │  Confirmation + what happens next
└───────────────────┘
```

**Value created:** one qualified lead with context (service need + location + optional firm).

---

## Journey A — Organic profile landing (highest SEO value)

| Step | Screen | User intent | UX must |
|---|---|---|---|
| 1 | Google SERP | Find local HVAC help | Title/meta promise clarity (content req, not UI chrome) |
| 2 | `/firma/{slug}` | Validate firm | Above-fold: name, city, services, trust badge, CTA |
| 3 | Same page | Reduce risk | Visible scope of services; phone optional; no clutter |
| 4 | CTA tap | Start request | Sticky mobile CTA → `/kontakt?firma={slug}` |
| 5 | `/kontakt` | Complete ask | ≤5 fields; privacy link; firm name shown as context |
| 6 | Success | Relief | “Odezwiemy się / przekażemy firmie” + timeline expectation |

**Drop-off risks:** weak trust above fold; long form; unclear who receives the lead.

---

## Journey B — Browse Katalog then convert

| Step | Screen | UX must |
|---|---|---|
| 1 | `/` or `/katalog` | Immediate search (city + service) |
| 2 | Results list | Scannable cards: name, city, 1–2 services, trust mark, CTA |
| 3 | `/firma/{slug}` | Same as Journey A |
| 4 | `/kontakt` | Lead |

**Drop-off risks:** empty results; filters that return zero without recovery.

---

## Journey C — Blog education → lead (SEO assist)

| Step | Screen | UX must |
|---|---|---|
| 1 | `/blog/{slug}` | Answer the query; readable mobile typography |
| 2 | Mid/end CTA | “Potrzebujesz fachowca?” → Kontakt (optionally with topic tag) |
| 3 | `/kontakt` | Lead with `zrodlo=blog` context for ops (hidden field) |

**Drop-off risks:** CTA-only posts with no substance (hurts SEO + trust).

---

## Journey D — Direct “I just need help” (conversion shortcut)

| Step | Screen | UX must |
|---|---|---|
| 1 | `/` | Primary CTA “Wyślij zapytanie” without forcing browse |
| 2 | `/kontakt` | Global lead (no firm selected) — ops routes manually |

This journey exists so Homepage is not only a catalog gateway.

---

## Emotional arc (design for trust)

```text
Anxiety (“Who can I trust?”)
  → Orientation (“This is an HVAC directory + request service”)
  → Evaluation (“This firm looks real”)
  → Action (“Sending a request is safe and easy”)
  → Certainty (“I know what happens next”)
```

Trust cues used sparingly (no badge spam):

1. Clear company identity (name, city, services)  
2. “Zweryfikowana firma” only if true in data  
3. Privacy link next to submit  
4. Honest success copy (no fake “20 firms calling in 30s” unless true)  

---

## Lead payload (UX fields — minimum)

| Field | Required | Why |
|---|---|---|
| Imię | Yes | Human follow-up |
| Telefon | Yes | Primary contact channel PL market |
| Miasto / kod | Yes | Routing |
| Opis potrzeby | Yes | Qualification |
| E-mail | No | Secondary |
| Firma (context) | Auto | From profile deep link |
| Zgoda RODO | Yes | Legal/trust |

No account creation. No file upload in MVP.

---

## Ops journey (out of UI, in scope of “viable”)

Leads arrive by email/notification to ops → manual assign/call.  
**Product MVP does not include agent inbox UI** — still viable if notification works.

---

## Journey metrics mapping

| Journey | Primary event |
|---|---|
| A/B/C/D | `lead_submitted` |
| A/B | `profile_cta_click` |
| C | `blog_cta_click` |
| B | `search_submit` / `result_click` |
