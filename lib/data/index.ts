/**
 * Central data access layer.
 *
 * Callers (pages, sections, sitemap) must use these helpers only.
 * Replace file-backed implementations with a database adapter later —
 * keep function signatures stable.
 */

export { getCompanies, getCompanyBySlug } from "@/lib/data/companies";
export { getArticles, getArticleBySlug } from "@/lib/data/articles";
export { getCategories, getCategoryBySlug } from "@/lib/data/categories";
export { getCities, getCityBySlug } from "@/lib/data/cities";
