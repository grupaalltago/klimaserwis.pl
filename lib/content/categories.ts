import type { IconName } from "@/components/design-system";

export type CategoryItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export const categories: CategoryItem[] = [
  {
    id: "klimatyzacja",
    title: "Klimatyzacja",
    description: "Montaż, serwis i przeglądy klimatyzacji domowej oraz biurowej.",
    href: "/klimatyzacja",
    icon: "snowflake",
  },
  {
    id: "pompy-ciepla",
    title: "Pompy ciepła",
    description: "Dobór i instalacja pomp ciepła dla domów i budynków.",
    href: "/pompy-ciepla",
    icon: "thermometer",
  },
  {
    id: "rekuperacja",
    title: "Rekuperacja",
    description: "Odzysk ciepła i świeże powietrze w nowoczesnych instalacjach.",
    href: "/rekuperacja",
    icon: "recycleAir",
  },
  {
    id: "wentylacja",
    title: "Wentylacja",
    description: "Systemy wentylacji mechanicznej dla komfortu i jakości powietrza.",
    href: "/wentylacja",
    icon: "wind",
  },
];
