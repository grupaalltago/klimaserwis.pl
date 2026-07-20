/**
 * Company domain model — ready for future database mapping.
 */
export interface Company {
  id: string;
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  rating: number;
  categories: string[];
  services: string[];
  description: string;
  logoInitials: string;
}
