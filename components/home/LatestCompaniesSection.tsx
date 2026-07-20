import { Grid } from "@/components/design-system";
import { Button, Heading, Section, Text } from "@/components/ui";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { getCompanies } from "@/lib/data";

/**
 * Homepage “Latest companies” — data via central data layer.
 */
export async function LatestCompaniesSection() {
  const companies = await getCompanies();

  return (
    <Section
      spacing="lg"
      tone="muted"
      aria-labelledby="latest-companies-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Text variant="caption">Katalog</Text>
          <Heading variant="h2" id="latest-companies-heading" className="mt-3">
            Najnowsze firmy
          </Heading>
          <Text variant="muted" className="mt-3">
            Przykładowe profile wykonawców HVAC — dane z warstwy lib/data
            (gotowe pod bazę).
          </Text>
        </div>
        <Button href="/firmy" variant="secondary">
          Zobacz wszystkie
        </Button>
      </div>

      <Grid cols={3} gap={4} className="mt-10" as="ul">
        {companies.map((company) => (
          <li key={company.id} className="list-none">
            <CompanyCard company={company} />
          </li>
        ))}
      </Grid>
    </Section>
  );
}
