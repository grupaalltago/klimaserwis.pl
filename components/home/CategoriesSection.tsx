import { Grid } from "@/components/design-system";
import { Heading, Section, Text } from "@/components/ui";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { getCategories } from "@/lib/data";

/**
 * Homepage categories — HVAC service cards.
 */
export async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <Section
      spacing="lg"
      tone="muted"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-2xl">
        <Text variant="caption">Kategorie</Text>
        <Heading variant="h2" id="categories-heading" className="mt-3">
          Wybierz usługę HVAC
        </Heading>
        <Text variant="muted" className="mt-3">
          Przejdź do wybranej kategorii i znajdź firmy dopasowane do Twojej
          potrzeby.
        </Text>
      </div>

      <Grid cols={4} gap={4} className="mt-10" as="ul">
        {categories.map((category) => (
          <li key={category.id} className="min-h-0 list-none">
            <CategoryCard category={category} />
          </li>
        ))}
      </Grid>
    </Section>
  );
}
