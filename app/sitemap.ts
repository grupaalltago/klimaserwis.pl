import type { MetadataRoute } from "next";
import { getArticles, getCompanies } from "@/lib/data";
import { siteConfig, sitemapStaticPaths } from "@/lib/content/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const [companies, articles] = await Promise.all([
    getCompanies(),
    getArticles(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = sitemapStaticPaths.map(
    (path) => ({
      url: new URL(path, siteConfig.url).toString(),
      lastModified,
      changeFrequency: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1 : 0.7,
    }),
  );

  const companyEntries: MetadataRoute.Sitemap = companies.map((company) => ({
    url: new URL(`/firma/${company.slug}`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: new URL(`/poradniki/${article.slug}`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...companyEntries, ...articleEntries];
}
