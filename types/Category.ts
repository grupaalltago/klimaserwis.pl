/**
 * Category domain model — ready for future database mapping.
 */
export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  /** Icon key consumed by the design-system Icon map. */
  icon: string;
}
