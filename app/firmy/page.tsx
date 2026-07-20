import type { Metadata } from "next";
import { CompaniesDirectory } from "@/components/companies/CompaniesDirectory";
import { PageHeader, Section } from "@/components/ui";
import { getCategories, getCities, getCompanies } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Firmy",
  description:
    "Przeglądaj katalog firm HVAC w Polsce — klimatyzacja, pompy ciepła, rekuperacja i wentylacja.",
  path: "/firmy",
});

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function FirmyPage({ searchParams }: PageProps) {
  const [{ q }, companies, cities, categories] = await Promise.all([
    searchParams,
    getCompanies(),
    getCities(),
    getCategories(),
  ]);

  return (
    <Section spacing="sm" tone="default" aria-labelledby="firmy-heading">
      <PageHeader
        eyebrow="Katalog"
        title="Firmy HVAC"
        titleId="firmy-heading"
        description="Przeglądaj wykonawców klimatyzacji, pomp ciepła, rekuperacji i wentylacji. Filtruj po mieście i kategorii."
      />

      <div className="mt-8">
        <CompaniesDirectory
          companies={companies}
          cities={cities}
          categories={categories}
          initialSearch={q?.trim() ?? ""}
        />
      </div>
    </Section>
  );
}
