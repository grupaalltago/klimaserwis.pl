export const siteConfig = {
  name: "Klimaserwis.pl",
  tagline: "Sprawdzone firmy HVAC w Twoim mieście",
  description:
    "Klimaserwis.pl to katalog firm HVAC i szybkie zapytania o klimatyzację, pompy ciepła oraz serwis. Znajdź fachowca i wyślij zgłoszenie bez zakładania konta.",
  url: "https://klimaserwis.pl",
  locale: "pl_PL",
} as const;

export const navItems = [
  { href: "/katalog", label: "Katalog" },
  { href: "/blog", label: "Blog" },
] as const;

export const cta = {
  label: "Wyślij zapytanie",
  href: "/kontakt",
} as const;

export const footerNav = [
  { href: "/katalog", label: "Katalog" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerLegal = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/regulamin", label: "Regulamin" },
] as const;
