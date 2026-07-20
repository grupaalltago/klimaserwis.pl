export const siteConfig = {
  name: "Klimaserwis.pl",
  tagline: "Sprawdzone firmy HVAC w Twoim mieście",
  description:
    "Klimaserwis.pl to katalog firm HVAC i szybkie zapytania o klimatyzację, pompy ciepła oraz serwis. Znajdź fachowca i wyślij zgłoszenie bez zakładania konta.",
  url: "https://klimaserwis.pl",
  locale: "pl_PL",
} as const;

/** Primary header navigation — flat links only, no dropdowns. */
export const navItems = [
  { href: "/firmy", label: "Firmy" },
  { href: "/klimatyzacja", label: "Klimatyzacja" },
  { href: "/pompy-ciepla", label: "Pompy ciepła" },
  { href: "/rekuperacja", label: "Rekuperacja" },
  { href: "/wentylacja", label: "Wentylacja" },
  { href: "/poradniki", label: "Poradniki" },
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const headerCta = {
  label: "Dodaj firmę",
  href: "/dla-firm",
} as const;

export const footerNav = [
  { href: "/firmy", label: "Firmy" },
  { href: "/klimatyzacja", label: "Klimatyzacja" },
  { href: "/pompy-ciepla", label: "Pompy ciepła" },
  { href: "/rekuperacja", label: "Rekuperacja" },
  { href: "/wentylacja", label: "Wentylacja" },
  { href: "/poradniki", label: "Poradniki" },
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerLegal = [{ href: "/kontakt", label: "Kontakt" }] as const;
