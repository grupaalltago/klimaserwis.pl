import { Button, Grid } from "@/components/design-system";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { Container } from "@/components/ui/Container";
import { latestCompanies } from "@/lib/content/companies";

/**
 * Homepage “Latest companies” — mock cards only, no database.
 */
export function LatestCompaniesSection() {
  return (
    <section
      className="border-b border-black/5 bg-[#f5f5f7] py-16 sm:py-20 dark:border-border dark:bg-surface-muted"
      aria-labelledby="latest-companies-heading"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Katalog
            </p>
            <h2
              id="latest-companies-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Najnowsze firmy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Przykładowe profile wykonawców HVAC — dane statyczne na potrzeby
              MVP.
            </p>
          </div>
          <Button href="/firmy" variant="secondary">
            Zobacz wszystkie
          </Button>
        </div>

        <Grid cols={3} gap={4} className="mt-10" as="ul">
          {latestCompanies.map((company) => (
            <li key={company.id} className="list-none">
              <CompanyCard company={company} />
            </li>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
