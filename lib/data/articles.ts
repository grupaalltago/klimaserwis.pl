import type { Article } from "@/types/Article";

/**
 * Static article seed — replace with CMS/database query in getArticles().
 */
const articles: Article[] = [
  {
    id: "1",
    slug: "jak-wybrac-serwis-klimatyzacji",
    title: "Jak wybrać solidny serwis klimatyzacji?",
    excerpt:
      "Na co zwrócić uwagę przy wyborze firmy: uprawnienia, zakres usług i jasne warunki kontaktu.",
    category: "Poradnik",
    imageLabel: "Klimatyzacja",
  },
  {
    id: "2",
    slug: "pompa-ciepla-czy-klimatyzacja",
    title: "Pompa ciepła czy klimatyzacja z funkcją grzania?",
    excerpt:
      "Krótkie porównanie zastosowań, kosztów eksploatacji i sytuacji, w których warto połączyć oba rozwiązania.",
    category: "HVAC",
    imageLabel: "Pompy ciepła",
  },
  {
    id: "3",
    slug: "przeglad-klimatyzacji-przed-sezonem",
    title: "Przegląd klimatyzacji przed sezonem — checklista",
    excerpt:
      "Prosta lista czynności, które warto wykonać, zanim upały doprowadzą do awarii w najmniej oczekiwanym momencie.",
    category: "Serwis",
    imageLabel: "Serwis",
  },
];

/**
 * Returns all articles.
 * Swap implementation for a database/CMS query without changing callers.
 */
export async function getArticles(): Promise<Article[]> {
  return articles;
}

/**
 * Returns an article by slug, or null when not found.
 */
export async function getArticleBySlug(
  slug: string,
): Promise<Article | null> {
  return articles.find((article) => article.slug === slug) ?? null;
}
