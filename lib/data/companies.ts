import type { Company } from "@/types/Company";

/**
 * Static company seed — replace with database query in getCompanies().
 */
const companies: Company[] = [
  {
    id: "1",
    slug: "arctic-klima-warszawa",
    name: "Arctic Klima",
    city: "Warszawa",
    citySlug: "warszawa",
    rating: 4.8,
    categories: ["Klimatyzacja", "Serwis"],
    services: [
      "Montaż klimatyzacji split",
      "Serwis i przeglądy sezonowe",
      "Naprawy awaryjne",
      "Czyszczenie jednostek",
    ],
    description:
      "Montaż i serwis klimatyzacji split oraz multi-split w Warszawie i okolicach.",
    logoInitials: "AK",
    createdAt: "2026-01-12",
  },
  {
    id: "2",
    slug: "termo-plus-krakow",
    name: "Termo Plus",
    city: "Kraków",
    citySlug: "krakow",
    rating: 4.6,
    categories: ["Pompy ciepła", "Rekuperacja"],
    services: [
      "Dobór i montaż pomp ciepła",
      "Rekuperacja z odzyskiem ciepła",
      "Audyt energetyczny",
      "Serwis gwarancyjny",
    ],
    description:
      "Pompy ciepła powietrze-woda oraz rekuperacja dla domów jednorodzinnych.",
    logoInitials: "TP",
    createdAt: "2026-02-03",
  },
  {
    id: "3",
    slug: "airflow-wroclaw",
    name: "AirFlow Serwis",
    city: "Wrocław",
    citySlug: "wroclaw",
    rating: 4.9,
    categories: ["Wentylacja", "Rekuperacja"],
    services: [
      "Projekt wentylacji mechanicznej",
      "Montaż rekuperatorów",
      "Pomiary i regulacja instalacji",
      "Konserwacja systemów",
    ],
    description:
      "Projekt i montaż wentylacji mechanicznej z odzyskiem ciepła dla mieszkań i lokali.",
    logoInitials: "AF",
    createdAt: "2026-03-18",
  },
  {
    id: "4",
    slug: "chlodniczy-expert-gdansk",
    name: "Chłodniczy Expert",
    city: "Gdańsk",
    citySlug: "gdansk",
    rating: 4.4,
    categories: ["Klimatyzacja", "Serwis"],
    services: [
      "Diagnostyka awarii",
      "Przeglądy sezonowe",
      "Uzupełnianie czynnika",
      "Wymiana filtrów",
    ],
    description:
      "Szybka diagnostyka awarii i przeglądy sezonowe urządzeń klimatyzacyjnych.",
    logoInitials: "CE",
    createdAt: "2026-04-09",
  },
  {
    id: "5",
    slug: "eko-heat-poznan",
    name: "Eko Heat",
    city: "Poznań",
    citySlug: "poznan",
    rating: 4.7,
    categories: ["Pompy ciepła"],
    services: [
      "Instalacja pomp ciepła powietrze-woda",
      "Dobór mocy urządzenia",
      "Integracja z ogrzewaniem podłogowym",
      "Szkolenie użytkownika",
    ],
    description:
      "Dobór i instalacja pomp ciepła z naciskiem na efektywność energetyczną.",
    logoInitials: "EH",
    createdAt: "2026-05-22",
  },
  {
    id: "6",
    slug: "klima-pro-lodz",
    name: "Klima Pro",
    city: "Łódź",
    citySlug: "lodz",
    rating: 4.5,
    categories: ["Klimatyzacja", "Wentylacja"],
    services: [
      "HVAC dla biur i sklepów",
      "Klimatyzacja VRF/VRV",
      "Wentylacja przemysłowa",
      "Umowy serwisowe",
    ],
    description:
      "Kompleksowa obsługa HVAC dla biur, sklepów i inwestycji deweloperskich.",
    logoInitials: "KP",
    createdAt: "2026-06-14",
  },
];

/**
 * Returns all companies.
 * Swap implementation for a database query without changing callers.
 */
export async function getCompanies(): Promise<Company[]> {
  return companies;
}

/**
 * Returns a company by slug, or null when not found.
 */
export async function getCompanyBySlug(
  slug: string,
): Promise<Company | null> {
  return companies.find((company) => company.slug === slug) ?? null;
}
