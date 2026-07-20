import { Grid } from "@/components/design-system";
import { Button, Heading, Section, Text } from "@/components/ui";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { getArticles } from "@/lib/data";

/**
 * Homepage “Latest articles” — data via central data layer.
 */
export async function LatestArticlesSection() {
  const articles = await getArticles();

  return (
    <Section
      spacing="lg"
      tone="default"
      aria-labelledby="latest-articles-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Text variant="caption">Poradniki</Text>
          <Heading variant="h2" id="latest-articles-heading" className="mt-3">
            Najnowsze artykuły
          </Heading>
          <Text variant="muted" className="mt-3">
            Krótkie materiały HVAC, które pomagają podjąć decyzję przed
            kontaktem z wykonawcą.
          </Text>
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
    </Section>
  );
}
