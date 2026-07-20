import type { City } from "@/types/City";

/**
 * Static city seed — replace with database query in getCities().
 */
const cities: City[] = [
  {
    id: "1",
    slug: "warszawa",
    name: "Warszawa",
    voivodeship: "mazowieckie",
  },
  {
    id: "2",
    slug: "krakow",
    name: "Kraków",
    voivodeship: "małopolskie",
  },
  {
    id: "3",
    slug: "wroclaw",
    name: "Wrocław",
    voivodeship: "dolnośląskie",
  },
  {
    id: "4",
    slug: "gdansk",
    name: "Gdańsk",
    voivodeship: "pomorskie",
  },
  {
    id: "5",
    slug: "poznan",
    name: "Poznań",
    voivodeship: "wielkopolskie",
  },
  {
    id: "6",
    slug: "lodz",
    name: "Łódź",
    voivodeship: "łódzkie",
  },
];

/**
 * Returns all cities.
 * Swap implementation for a database query without changing callers.
 */
export async function getCities(): Promise<City[]> {
  return cities;
}

/**
 * Returns a city by slug, or null when not found.
 */
export async function getCityBySlug(slug: string): Promise<City | null> {
  return cities.find((city) => city.slug === slug) ?? null;
}
