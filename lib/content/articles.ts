export type MockArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageLabel: string;
};

/** Static mock data for homepage — no CMS/database. */
export const latestArticles: MockArticle[] = [
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
