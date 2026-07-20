import type { Metadata } from "next";
import { CompaniesDirectory } from "@/components/companies/CompaniesDirectory";
import { Container } from "@/components/ui/Container";
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
    <section
      className="border-b border-black/5 bg-white py-10 sm:py-14 dark:border-border dark:bg-background"
      aria-labelledby="firmy-heading"
    >
      <Container>
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Katalog
          </p>
          <h1
            id="firmy-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Firmy HVAC
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Przeglądaj wykonawców klimatyzacji, pomp ciepła, rekuperacji i
            wentylacji. Filtruj po mieście i kategorii.
          </p>
        </header>

        <div className="mt-8">
          <CompaniesDirectory
            companies={companies}
            cities={cities}
            categories={categories}
            initialSearch={q?.trim() ?? ""}
          />
        </div>
      </Container>
    </section>
  );
}
