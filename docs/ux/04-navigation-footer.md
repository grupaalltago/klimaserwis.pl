# 8–9. Navigation & Footer — MVP

Minimal chrome. Every link must earn its place (SEO, trust, or conversion).

---

## 8. Navigation

### Principles

- ≤ **4** destinations in primary nav (+ logo).  
- Same nav on all pages.  
- Mobile: hamburger; desktop: horizontal text links.  
- Always expose a conversion action (button or emphasized link).

### Primary nav IA

| Item | Target | Role |
|---|---|---|
| Logo | `/` | Home / brand |
| Katalog | `/katalog` | Discovery + SEO |
| Blog | `/blog` | SEO content |
| Kontakt | `/kontakt` | Lead (also styled as button on desktop) |

**Excluded from nav:** O nas, Cennik, Panel firm, Logowanie, Usługi mega-menu, Języki.

### Mobile header

```text
┌─────────────────────────────────┐
│ [Logo]                    [≡]   │
└─────────────────────────────────┘
```

### Mobile drawer (open)

```text
┌─────────────────────────────────┐
│                          [✕]    │
│ Katalog                         │
│ Blog                            │
│ Kontakt                         │
│                                 │
│ [====== Wyślij zapytanie ======]│  duplicate of Kontakt OK
└─────────────────────────────────┘
```

### Desktop header

```text
┌──────────────────────────────────────────────────────────┐
│ [Logo]     Katalog    Blog     [ Wyślij zapytanie ]      │
└──────────────────────────────────────────────────────────┘
```

Note: “Kontakt” label may equal the CTA button on desktop to save a slot — one control, two jobs.

### Active states

- Current section underlined/emphasized.  
- On `/firma/*`, highlight **Katalog** (parent section).  
- On `/blog/*`, highlight **Blog**.

### Scroll behavior

- Header sticky.  
- On profile pages, **do not** fight the sticky bottom CTA — header stays compact (logo + ≡ only if needed).

---

## 9. Footer

### Principles

- Trust + legal + residual SEO links.  
- No link farms.  
- Compact on mobile (stacked).

### Footer IA

```text
┌─────────────────────────────────┐
│ Klimaserwis.pl                  │
│ Krótki claim (1 linia)          │
│                                 │
│ Nawigacja                       │
│ · Katalog                       │
│ · Blog                          │
│ · Kontakt                       │
│                                 │
│ Informacje                      │
│ · Polityka prywatności          │
│ · Regulamin                     │
│                                 │
│ © {year} Klimaserwis.pl         │
└─────────────────────────────────┘
```

### Optional (only if data ready in 7 days)

| Item | Rule |
|---|---|
| E-mail kontaktowy ops | Real address only |
| NIP / company legal name | If platform operator identity required |

### Excluded from footer

Social icon grids, app store badges, newsletter form, “popular cities” 50-link block, partner logos.

### Footer CTA

No second competing button required if page already ends with CTA; Home/Blog may rely on page CTAs. Footer stays informational to reduce noise.

---

## Global CTA consistency

| Surface | Label | Destination |
|---|---|---|
| Nav button | Wyślij zapytanie | `/kontakt` |
| Profile sticky | Wyślij zapytanie | `/kontakt?firma={slug}` |
| Blog boxes | Wyślij zapytanie | `/kontakt?zrodlo=blog&temat={slug}` |
| Zero results | Wyślij zapytanie | `/kontakt` |

One verb. One mental model.
