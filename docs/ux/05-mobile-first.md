# 10. Mobile-first approach — MVP

Design and acceptance start on a **360–390px** wide viewport. Desktop is an enhancement, not the source of truth.

---

## Why mobile-first here

- HVAC intent is often urgent and local → phone in hand.  
- SERP clicks to profiles happen on mobile.  
- Lead conversion depends on thumb-reachable CTA and short forms.

---

## Breakpoints (UX contract)

| Name | Width | Design priority |
|---|---|---|
| Mobile | 360–767px | **Primary — design here first** |
| Tablet | 768–1023px | Stretch columns; same components |
| Desktop | ≥1024px | Horizontal nav; 2-column profile optional |

Do not invent separate “mobile product” features for MVP.

---

## Layout rules

1. **Single column** by default.  
2. **Primary CTA** visible without horizontal scroll; on profile, sticky bottom bar.  
3. **Touch targets** ≥ 44×44px; form fields full width.  
4. **Type:** readable body ≥16px; short paragraphs; H1 wraps cleanly (firm names).  
5. **Spacing:** generous between CTA and secondary actions to prevent mis-taps.  
6. **No hover-only** affordances.  
7. **Images:** optional; if used, lazy and compressed; never block text/CTA.  
8. **Nav drawer** full-height; focus trap not required for UX doc — note for a11y implementers.

---

## Above-the-fold budgets (mobile)

| Page | Must fit in first screen |
|---|---|
| Home | H1 + search or lead CTA |
| Firma | Name + city + trust + primary CTA |
| Katalog | H1 + filters start |
| Kontakt | H1 + first fields + purpose line |
| Blog article | Title + start of content (CTA can be mid/end) |

---

## Sticky conversion pattern (profile)

```text
Content scrolls under header
…
┌─────────────────────────────┐
│ [==== Wyślij zapytanie ====]│  position: fixed bottom
└─────────────────────────────┘  padding-bottom on body
                                 so footer isn’t hidden
```

- Hide sticky bar on `/kontakt` (already converting).  
- One sticky element max (no dual sticky header+footer wars beyond compact header).

---

## Form UX on mobile

- `tel` / appropriate input modes for phone.  
- Submit button always full width.  
- Validation message adjacent to field (no alert-only).  
- Privacy checkbox text tappable; link opens privacy without losing form data (new tab acceptable).  
- Success message avoids “mystery” — next step in plain language.

---

## Performance UX (mobile SEO + conversion)

These are UX acceptance criteria, not stack choices:

- Perceived load: content and CTA usable quickly on 4G.  
- No heavy carousels/sliders.  
- Avoid autoplay video and large hero bitmaps.  
- Cumulative layout shift: reserve space for badges/cards.

---

## Desktop enhancements (only)

| Mobile | Desktop add-on |
|---|---|
| Hamburger | Inline nav links |
| Sticky bottom CTA (profile) | CTA column or top actions still visible; sticky optional |
| Stacked footer | 2–3 columns |
| Single-column profile | Optional 2-col: main + CTA sidebar |

No exclusive desktop features that mobile lacks.

---

## Accessibility baseline (MVP)

- Visible focus states on CTA and fields.  
- Alt text if images exist; decorative images empty alt.  
- Color contrast sufficient for text and primary button.  
- Form labels visible (not placeholder-only).  

---

## 7-day mobile QA script

1. Open `/firma/{slug}` from a cold load on phone → CTA tappable in &lt;3s perception.  
2. Complete `/kontakt` with one thumb → success.  
3. Katalog zero-results → lead CTA still works.  
4. Blog article → both CTAs reach kontakt with context.  
5. Rotate landscape once → no broken sticky overlap.

---

## Definition of mobile-ready MVP

The product is mobile-ready when a first-time user on a mid-range Android phone can go **SERP → profile → lead success** without zooming, without account, and without hunting for the CTA.
