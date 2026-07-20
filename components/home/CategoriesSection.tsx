import { CategoryCard } from "@/components/ui/CategoryCard";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/design-system";
import { getCategories } from "@/lib/data";

/**
 * Homepage categories — HVAC service cards.
 */
export async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <section
      className="border-b border-black/5 bg-[#f5f5f7] py-16 sm:py-20 dark:border-border dark:bg-surface-muted"
      aria-labelledby="categories-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Kategorie
          </p>
          <h2
            id="categories-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Wybierz usługę HVAC
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Przejdź do wybranej kategorii i znajdź firmy dopasowane do Twojej
            potrzeby.
          </p>
        </div>

        <Grid cols={4} gap={4} className="mt-10" as="ul">
          {categories.map((category) => (
            <li key={category.id} className="min-h-0 list-none">
              <CategoryCard category={category} />
            </li>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
