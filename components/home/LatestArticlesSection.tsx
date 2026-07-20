import { Button, Grid } from "@/components/design-system";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Container } from "@/components/ui/Container";
import { getArticles } from "@/lib/data";

/**
 * Homepage “Latest articles” — data via central data layer.
 */
export async function LatestArticlesSection() {
  const articles = await getArticles();

  return (
    <section
      className="border-b border-black/5 bg-white py-16 sm:py-20 dark:border-border dark:bg-background"
      aria-labelledby="latest-articles-heading"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Poradniki
            </p>
            <h2
              id="latest-articles-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Najnowsze artykuły
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Krótkie materiały HVAC, które pomagają podjąć decyzję przed
              kontaktem z wykonawcą.
            </p>
          </div>
          <Button href="/poradniki" variant="secondary">
            Wszystkie poradniki
          </Button>
        </div>

        <Grid cols={3} gap={4} className="mt-10" as="ul">
          {articles.map((article) => (
            <li key={article.id} className="list-none">
              <ArticleCard article={article} />
            </li>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
