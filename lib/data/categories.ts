import type { Category } from "@/types/Category";

/**
 * Static category seed — replace with database query in getCategories().
 */
const categories: Category[] = [
  {
    id: "1",
    slug: "klimatyzacja",
    title: "Klimatyzacja",
    description:
      "Montaż, serwis i przeglądy klimatyzacji domowej oraz biurowej.",
    href: "/klimatyzacja",
    icon: "snowflake",
  },
  {
    id: "2",
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    description: "Dobór i instalacja pomp ciepła dla domów i budynków.",
    href: "/pompy-ciepla",
    icon: "thermometer",
  },
  {
    id: "3",
    slug: "rekuperacja",
    title: "Rekuperacja",
    description:
      "Odzysk ciepła i świeże powietrze w nowoczesnych instalacjach.",
    href: "/rekuperacja",
    icon: "recycleAir",
  },
  {
    id: "4",
    slug: "wentylacja",
    title: "Wentylacja",
    description:
      "Systemy wentylacji mechanicznej dla komfortu i jakości powietrza.",
    href: "/wentylacja",
    icon: "wind",
  },
];

/**
 * Returns all service categories.
 * Swap implementation for a database query without changing callers.
 */
export async function getCategories(): Promise<Category[]> {
  return categories;
}

/**
 * Returns a category by slug, or null when not found.
 */
export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  return categories.find((category) => category.slug === slug) ?? null;
}
