import type { MetadataRoute } from "next";
import { latestArticles } from "@/lib/content/articles";
import { latestCompanies } from "@/lib/content/companies";
import { siteConfig, sitemapStaticPaths } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = sitemapStaticPaths.map(
    (path) => ({
      url: new URL(path, siteConfig.url).toString(),
      lastModified,
      changeFrequency: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1 : 0.7,
    }),
  );

  const companyEntries: MetadataRoute.Sitemap = latestCompanies.map(
    (company) => ({
      url: new URL(`/firmy/${company.slug}`, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = latestArticles.map(
    (article) => ({
      url: new URL(`/poradniki/${article.slug}`, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  );

  return [...staticEntries, ...companyEntries, ...articleEntries];
}
