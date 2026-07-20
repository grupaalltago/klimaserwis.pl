import { getOrganizationJsonLd } from "@/lib/seo/metadata";

/**
 * Organization JSON-LD for production SEO.
 */
export function OrganizationJsonLd() {
  const data = getOrganizationJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
