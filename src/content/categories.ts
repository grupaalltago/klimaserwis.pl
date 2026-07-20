export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  href: string;
};

/** Placeholder catalog categories for MVP homepage — no database. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "klimatyzacja",
    name: "Klimatyzacja",
    description: "Montaż, serwis i przeglądy klimatyzacji domowej oraz biurowej.",
    href: "/katalog?usluga=klimatyzacja",
  },
  {
    id: "pompy-ciepla",
    name: "Pompy ciepła",
    description: "Dobór i instalacja pomp ciepła oraz wsparcie posprzedażowe.",
    href: "/katalog?usluga=pompy-ciepla",
  },
  {
    id: "wentylacja",
    name: "Wentylacja",
    description: "Rekuperacja i systemy wentylacji dla domów oraz lokali.",
    href: "/katalog?usluga=wentylacja",
  },
  {
    id: "serwis",
    name: "Serwis awaryjny",
    description: "Szybka diagnoza i naprawa urządzeń HVAC w sezonie szczytowym.",
    href: "/katalog?usluga=serwis",
  },
];
