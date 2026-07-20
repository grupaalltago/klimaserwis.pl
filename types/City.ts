/**
 * City domain model — ready for future database mapping.
 */
export interface City {
  id: string;
  slug: string;
  name: string;
  voivodeship: string;
}
