# 1. Site Map — MVP (7 days)

Flat IA. Every URL must be crawlable, shareable, and purposeful.

## Primary tree

```text
klimaserwis.pl
│
├── /                          Homepage
│                              SEO hub + trust + primary CTA
│
├── /katalog                   Search / listing (firmy HVAC)
│   └── ?q=&miasto=&usluga=    Faceted URL params (index carefully)
│
├── /firma/{slug}              Company profile (one URL per firm)
│                              Main SEO + conversion landing
│
├── /kontakt                   Contact / leave a request (lead)
│                              Global lead capture (+ optional firm context)
│
├── /blog                      Blog index
│   └── /blog/{slug}           Article (SEO content)
│
├── /polityka-prywatnosci      Privacy (required for forms) — thin page
└── /regulamin                 Terms — thin page (if leads imply contract)
```

## URL inventory (launch set)

| URL | Purpose | Value |
|---|---|---|
| `/` | Orient, trust, route to search + lead | Conversion + SEO hub |
| `/katalog` | Browse/find firms | SEO + discovery |
| `/firma/{slug}` | Firm detail + CTA | SEO + trust + conversion |
| `/kontakt` | Submit demand | Lead generation |
| `/blog` | Content list | SEO |
| `/blog/{slug}` | Educational article → CTA | SEO + leads |
| `/polityka-prywatnosci` | Legal/trust | Trust / compliance |
| `/regulamin` | Legal | Trust / compliance |

## Page count budget

**8 templates max** (Home, Katalog, Firma, Kontakt, Blog index, Blog post, Privacy, Terms).  
No “O nas”, “Cennik platformy”, “Dla firm” marketing site in MVP unless a single paragraph on Home covers it.

## SEO IA rules

1. **One firm = one permanent `/firma/{slug}`** (stable slug: city + name normalized).  
2. Homepage and Katalog explain *what* and *where*; profiles carry local + service entities.  
3. Blog targets informational queries; each post ends with lead CTA.  
4. Avoid duplicate thin city pages at launch — use Katalog filters + unique profile content.  
5. Canonical tags: self-canonical on core templates; filtered Katalog: decide noindex for thin combos if duplicate risk (ops note for implementers — not a new page type).

## Entry points (how users arrive)

```text
Google (service + city) ──► /firma/{slug} or /blog/{slug} or /
Direct / social ──────────► /
Referral ─────────────────► / or /firma/{slug}
```

## Out of sitemap (explicitly deferred)

- `/konto`, `/panel`, `/logowanie`  
- `/dodaj-firme` (self-serve)  
- `/porownaj`  
- `/uslugi/{slug}` landing factory (phase 2)  
- App deep links  

## Information priority per template

| Template | Must answer in &lt;5 seconds |
|---|---|
| Home | What is this? Can I request help? Are firms real? |
| Katalog | Who matches my need/city? |
| Firma | Is this firm legit? How do I contact / request? |
| Kontakt | Can I send a request with low effort? |
| Blog post | Did I learn something? What’s my next step? |
