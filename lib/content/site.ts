export const siteConfig = {
  name: "Klimaserwis.pl",
  legalName: "Klimaserwis.pl",
  tagline: "Sprawdzone firmy HVAC w Twoim mieście",
  description:
    "Klimaserwis.pl to katalog firm HVAC i szybkie zapytania o klimatyzację, pompy ciepła oraz serwis. Znajdź fachowca i wyślij zgłoszenie bez zakładania konta.",
  url: "https://klimaserwis.pl",
  locale: "pl_PL",
  language: "pl",
  twitterHandle: "@klimaserwis",
  email: "kontakt@klimaserwis.pl",
  sameAs: [] as string[],
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

export const footerQuickLinks = [
  { href: "/firmy", label: "Firmy" },
  { href: "/poradniki", label: "Poradniki" },
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerServices = [
  { href: "/klimatyzacja", label: "Klimatyzacja" },
  { href: "/pompy-ciepla", label: "Pompy ciepła" },
  { href: "/rekuperacja", label: "Rekuperacja" },
  { href: "/wentylacja", label: "Wentylacja" },
] as const;

export const footerInformation = [
  { href: "/dla-firm", label: "Dodaj firmę" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/poradniki", label: "Poradniki" },
] as const;

export const footerLegal = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/polityka-cookies", label: "Polityka cookies" },
] as const;

export const footerGroups = {
  quickLinks: "Nawigacja",
  services: "Usługi",
  information: "Informacje",
} as const;

/** Public indexable routes for sitemap (static shells). */
export const sitemapStaticPaths = [
  "/",
  "/firmy",
  "/klimatyzacja",
  "/pompy-ciepla",
  "/rekuperacja",
  "/wentylacja",
  "/poradniki",
  "/dla-firm",
  "/kontakt",
  "/polityka-prywatnosci",
  "/regulamin",
  "/polityka-cookies",
] as const;
