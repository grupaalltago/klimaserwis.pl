export type MockCompany = {
  id: string;
  slug: string;
  name: string;
  city: string;
  rating: number;
  categories: string[];
  description: string;
  logoInitials: string;
};

/** Static mock data for homepage — no database. */
export const latestCompanies: MockCompany[] = [
  {
    id: "1",
    slug: "arctic-klima-warszawa",
    name: "Arctic Klima",
    city: "Warszawa",
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
    rating: 4.5,
    categories: ["Klimatyzacja", "Wentylacja"],
    description:
      "Kompleksowa obsługa HVAC dla biur, sklepów i inwestycji deweloperskich.",
    logoInitials: "KP",
  },
];
