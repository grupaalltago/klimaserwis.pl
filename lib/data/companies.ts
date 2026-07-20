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
    description:
      "Montaż i serwis klimatyzacji split oraz multi-split w Warszawie i okolicach.",
    logoInitials: "AK",
  },
  {
    id: "2",
    slug: "termo-plus-krakow",
    name: "Termo Plus",
    city: "Kraków",
    citySlug: "krakow",
    rating: 4.6,
    categories: ["Pompy ciepła", "Rekuperacja"],
    description:
      "Pompy ciepła powietrze-woda oraz rekuperacja dla domów jednorodzinnych.",
    logoInitials: "TP",
  },
  {
    id: "3",
    slug: "airflow-wroclaw",
    name: "AirFlow Serwis",
    city: "Wrocław",
    citySlug: "wroclaw",
    rating: 4.9,
    categories: ["Wentylacja", "Rekuperacja"],
    description:
      "Projekt i montaż wentylacji mechanicznej z odzyskiem ciepła dla mieszkań i lokali.",
    logoInitials: "AF",
  },
  {
    id: "4",
    slug: "chlodniczy-expert-gdansk",
    name: "Chłodniczy Expert",
    city: "Gdańsk",
    citySlug: "gdansk",
    rating: 4.4,
    categories: ["Klimatyzacja", "Serwis"],
    description:
      "Szybka diagnostyka awarii i przeglądy sezonowe urządzeń klimatyzacyjnych.",
    logoInitials: "CE",
  },
  {
    id: "5",
    slug: "eko-heat-poznan",
    name: "Eko Heat",
    city: "Poznań",
    citySlug: "poznan",
    rating: 4.7,
    categories: ["Pompy ciepła"],
    description:
      "Dobór i instalacja pomp ciepła z naciskiem na efektywność energetyczną.",
    logoInitials: "EH",
  },
  {
    id: "6",
    slug: "klima-pro-lodz",
    name: "Klima Pro",
    city: "Łódź",
    citySlug: "lodz",
    rating: 4.5,
    categories: ["Klimatyzacja", "Wentylacja"],
    description:
      "Kompleksowa obsługa HVAC dla biur, sklepów i inwestycji deweloperskich.",
    logoInitials: "KP",
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
