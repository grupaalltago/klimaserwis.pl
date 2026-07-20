# 3–7. Wireframes — MVP

Low-fidelity structural wireframes. **Mobile frame first** (primary). Desktop = same blocks, wider grid — see [05-mobile-first.md](05-mobile-first.md).

Legend:

```text
[====]  primary CTA
(----)  secondary action
······  trust / SEO text
{form}  input
```

---

## 3. Homepage `/`

### Goal

Orient in 5 seconds + push **lead** or **katalog**; establish trust; SEO intro copy.

### Mobile wireframe

```text
┌─────────────────────────────┐
│ [Logo Klimaserwis]    ≡     │  ← sticky top; ≡ opens nav
├─────────────────────────────┤
│                             │
│  Klimatyzacja i HVAC        │  H1 — keyword-honest
│  Sprawdzone firmy           │
│  w Twoim mieście            │
│                             │
│  ··· Krótki lead SEO (2–3   │
│  zdania: co robimy) ···     │
│                             │
│  ┌───────────────────────┐  │
│  │ Miasto             ▾  │  │  search module
│  │ Usługa             ▾  │  │  (max 2 controls)
│  │ [==== Szukaj firm ===]│  │  → /katalog
│  └───────────────────────┘  │
│                             │
│  [== Wyślij zapytanie ==]   │  → /kontakt (Journey D)
│  (---- Zobacz katalog ----) │
│                             │
├─────────────────────────────┤
│  DLACZEGO MY                │
│  ✓ Firmy z danymi kontakt.  │  3 trust points max
│  ✓ Zapytanie w 1 minucie    │
│  ✓ Bez konta i bez opłat    │  (customer-facing honesty)
│    dla szukających          │
├─────────────────────────────┤
│  JAK TO DZIAŁA              │
│  1. Opisz potrzebę          │
│  2. Dobieramy / łączymy     │  truthful to real ops model
│  3. Kontakt zwrotny         │
├─────────────────────────────┤
│  PRZYKŁADOWE FIRMY          │  3 cards from seed data
│  ┌─────────────────────┐    │
│  │ Nazwa · Miasto      │    │
│  │ Usługi · (zwiastun) │    │
│  │ (---- Profil ----)  │    │
│  └─────────────────────┘    │
│  … ×3                       │
├─────────────────────────────┤
│  Z BLOGA                    │  2–3 latest titles (SEO)
│  · Tytuł artykułu →         │
├─────────────────────────────┤
│  [== Wyślij zapytanie ==]   │  repeat CTA
│  FOOTER                     │
└─────────────────────────────┘
```

### Must / Must not

| Must | Must not |
|---|---|
| H1 + unique intro | Hero video, carousels, stats fiction |
| Search + lead CTA above fold on mobile | Pricing tables, partner logos wall |
| 3 trust points | “5000+ firms” if untrue |

---

## 4. Company profile `/firma/{slug}`

### Goal

SERP landing: **trust → CTA**. Primary conversion surface for SEO.

### Mobile wireframe

```text
┌─────────────────────────────┐
│ ← Katalog    [Logo]    ≡    │
├─────────────────────────────┤
│ Nazwa firmy                 │  H1
│ Miasto · Województwo        │
│ ★ Zweryfikowana (if true)   │  single trust badge max
│                             │
│ Usługi: klimatyzacja, …     │  chips / list
│                             │
│ [==== Wyślij zapytanie ====]│  → /kontakt?firma=slug
│ (---- Zadzwoń ----)         │  only if phone in data
│                             │
├─────────────────────────────┤
│ O FIRMIE                    │  unique text (SEO)
│ ··· 800–2000 znaków max ··· │  no lorem; ops-written
│                             │
├─────────────────────────────┤
│ ZAKRES USŁUG                │
│ • …                         │
├─────────────────────────────┤
│ OBSZAR                      │  city / region served
│ ···                         │
├─────────────────────────────┤
│ ZAUFANIE                    │
│ • Widoczne dane firmy       │  NIP optional if available
│ • Jasna prośba o kontakt    │
│ (Brak recenzji? Don’t fake) │  omit empty review blocks
├─────────────────────────────┤
│ [==== Wyślij zapytanie ====]│
│ sticky bar on scroll (mob)  │  see mobile doc
├─────────────────────────────┤
│ FOOTER                      │
└─────────────────────────────┘
```

### Sticky mobile conversion bar

```text
┌─────────────────────────────┐
│ [==== Wyślij zapytanie ====]│  fixed bottom; safe-area
└─────────────────────────────┘
```

### Must / Must not

| Must | Must not |
|---|---|
| Unique H1 (firm name) | Duplicate boilerplate only |
| CTA always reachable | Auto-playing media |
| Honest empty states | Fake ratings / stock photos as “proof” |

---

## 5. Search page `/katalog`

### Goal

Find a firm fast; feed SEO browse; recover from zero results.

### Mobile wireframe

```text
┌─────────────────────────────┐
│ [Logo]                 ≡    │
├─────────────────────────────┤
│ Katalog firm HVAC           │  H1
│                             │
│ ┌─────────────────────────┐ │
│ │ Szukaj nazwy         🔍 │ │  optional free text
│ └─────────────────────────┘ │
│ Miasto          [......] ▾  │
│ Usługa          [......] ▾  │
│ [==== Pokaż wyniki =====]   │
│                             │
│ N wyników · Wyczyść filtry  │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Nazwa firmy             │ │  result card
│ │ Miasto                  │ │
│ │ Usługi: …               │ │
│ │ ✓ Zweryfikowana         │ │  if true
│ │ (---- Zobacz profil ---)│ │
│ │ [== Zapytanie ==]       │ │  optional short path
│ └─────────────────────────┘ │
│ … list …                    │
├─────────────────────────────┤
│ (---- Więcej ----)          │  pagination or “load more”
│ FOOTER                      │
└─────────────────────────────┘
```

### Zero results

```text
│ Brak firm dla tych filtrów  │
│ • Zmień miasto / usługę     │
│ [== Wyślij zapytanie ==]    │  still capture demand
```

### Filter budget (7-day)

Only: **miasto**, **usługa**, optional **nazwa**. No price, rating, availability filters.

---

## 6. Contact page `/kontakt`

### Goal

Maximum lead completion, minimum friction. Trust via clarity + RODO.

### Mobile wireframe

```text
┌─────────────────────────────┐
│ [Logo]                 ≡    │
├─────────────────────────────┤
│ Wyślij zapytanie            │  H1
│                             │
│ Kontekst (if any):          │
│ Firma: {Nazwa}              │  dismissible chip if from profile
│                             │
│ ··· Co się stanie po wysłaniu│
│ (1–2 zdania, uczciwie) ···  │
│                             │
│ { Imię *               }    │
│ { Telefon *            }    │
│ { Miasto *             }    │
│ { Opisz potrzebę *     }    │  textarea 3–5 lines
│   (np. serwis AC, termin)   │
│ { E-mail               }    │  optional
│                             │
│ [ ] Akceptuję politykę      │
│     prywatności *           │  link → /polityka-prywatnosci
│                             │
│ [====== Wyślij ======]      │
│                             │
│ Bez konta. Oddzwonimy /     │
│ przekażemy zgłoszenie.      │
├─────────────────────────────┤
│ FOOTER                      │
└─────────────────────────────┘
```

### Success state (same URL or `/kontakt/dziekujemy`)

Prefer **same-page success replace** to avoid extra template — if 7-day cost forces a thin `/kontakt/dziekujemy`, keep it index nofollow.

```text
│ Dziękujemy                  │
│ Numer zgłoszenia: optional  │
│ Co dalej: …                 │
│ (---- Wróć na stronę ----)  │
│ (---- Czytaj blog ----)     │
```

### Error / validation

Inline under fields; keep submit enabled after fix; do not clear textarea on error.

### Must / Must not

| Must | Must not |
|---|---|
| Phone required | Captcha that blocks mobile (use honeypot/rate-limit ops-side) |
| RODO consent | Newsletter upsell on MVP form |
| Context firm shown | 10+ fields, file upload |

---

## 7. Blog

### 7a. Index `/blog`

```text
┌─────────────────────────────┐
│ [Logo]                 ≡    │
├─────────────────────────────┤
│ Blog                        │  H1
│ Poradniki HVAC              │  1-line SEO intro
│                             │
│ ┌─────────────────────────┐ │
│ │ Tytuł artykułu          │ │
│ │ Data · 4 min            │ │
│ │ Lead 1–2 zdania         │ │
│ │ (---- Czytaj ----)      │ │
│ └─────────────────────────┘ │
│ …                           │
│ FOOTER                      │
└─────────────────────────────┘
```

**Launch content budget:** 3–5 solid articles beat 20 thin ones.

### 7b. Article `/blog/{slug}`

```text
┌─────────────────────────────┐
│ ← Blog     [Logo]      ≡    │
├─────────────────────────────┤
│ Tytuł H1                    │
│ Data · Czas czytania        │
│                             │
│ ··· Treść ···               │
│ H2 sekcje                   │
│ akapity krótkie (mobile)    │
│                             │
│ ┌─────────────────────────┐ │
│ │ Potrzebujesz fachowca?  │ │  mid-article CTA box
│ │ [== Wyślij zapytanie ==]│ │
│ └─────────────────────────┘ │
│                             │
│ ··· dalsza treść ···        │
│                             │
│ ┌─────────────────────────┐ │
│ │ Gotowy na kontakt?      │ │  end CTA
│ │ [== Wyślij zapytanie ==]│ │
│ └─────────────────────────┘ │
│                             │
│ Powiązane: 2 tytuły         │  optional if time
│ FOOTER                      │
└─────────────────────────────┘
```

### Blog SEO + conversion rules

- Informational intent first; CTA second.  
- Internal links to `/katalog` or relevant `/firma/{slug}` when natural.  
- No popups on scroll for MVP.

---

## Cross-page conversion map

| Page | Primary CTA | Secondary |
|---|---|---|
| Home | Wyślij zapytanie / Szukaj | Katalog |
| Katalog | Profil / Zapytanie | Clear filters |
| Firma | Wyślij zapytanie | Telefon |
| Kontakt | Wyślij | Privacy |
| Blog | Wyślij zapytanie | Katalog |

**One primary verb everywhere:** “Wyślij zapytanie” (do not synonym-spam CTAs).
