/**
 * Article domain model — ready for future CMS/database mapping.
 */
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageLabel: string;
}
