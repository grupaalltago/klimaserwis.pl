"use client";

import { useMemo, useState } from "react";
import { Grid } from "@/components/design-system";
import {
  Button,
  Card,
  EmptyState,
  Input,
  Select,
  Text,
} from "@/components/ui";
import { CompanyCard } from "@/components/ui/CompanyCard";
import {
  queryCompanies,
  type CompanySortOption,
} from "@/lib/companies/query";
import type { Category } from "@/types/Category";
import type { City } from "@/types/City";
import type { Company } from "@/types/Company";

type CompaniesDirectoryProps = {
  companies: Company[];
  cities: City[];
  categories: Category[];
  initialSearch?: string;
};

const sortOptions: { value: CompanySortOption; label: string }[] = [
  { value: "az", label: "A–Z" },
  { value: "rating", label: "Najwyżej oceniane" },
  { value: "newest", label: "Najnowsze" },
];

/**
 * Companies directory — search, city/category filters, and sort (client-side).
 */
export function CompaniesDirectory({
  companies,
  cities,
  categories,
  initialSearch = "",
}: CompaniesDirectoryProps) {
  const [search, setSearch] = useState(initialSearch);
  const [citySlug, setCitySlug] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [sort, setSort] = useState<CompanySortOption>("newest");

  const filtered = useMemo(
    () =>
      queryCompanies(companies, categories, {
        search,
        citySlug,
        categorySlug,
        sort,
      }),
    [companies, categories, search, citySlug, categorySlug, sort],
  );

  const hasActiveFilters =
    search.trim().length > 0 || citySlug !== "" || categorySlug !== "";

  function resetFilters() {
    setSearch("");
    setCitySlug("");
    setCategorySlug("");
    setSort("newest");
  }

  return (
    <div>
      <Card className="sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Input
            id="companies-search"
            label="Szukaj"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Nazwa, miasto, usługa…"
            autoComplete="off"
            containerClassName="sm:col-span-2 lg:col-span-1"
          />

          <Select
            id="companies-city"
            label="Miasto"
            value={citySlug}
            onChange={(event) => setCitySlug(event.target.value)}
          >
            <option value="">Wszystkie miasta</option>
            {cities.map((city) => (
              <option key={city.id} value={city.slug}>
                {city.name}
              </option>
            ))}
          </Select>

          <Select
            id="companies-category"
            label="Kategoria"
            value={categorySlug}
            onChange={(event) => setCategorySlug(event.target.value)}
          >
            <option value="">Wszystkie kategorie</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.title}
              </option>
            ))}
          </Select>

          <Select
            id="companies-sort"
            label="Sortuj"
            value={sort}
            onChange={(event) =>
              setSort(event.target.value as CompanySortOption)
            }
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <Text variant="small" className="text-muted">
            Wyniki:{" "}
            <span className="font-medium text-foreground">
              {filtered.length}
            </span>
            {hasActiveFilters ? " (filtrowane)" : null}
          </Text>
          {hasActiveFilters ? (
            <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
              Wyczyść filtry
            </Button>
          ) : null}
        </div>
      </Card>

      {filtered.length > 0 ? (
        <Grid cols={3} gap={4} className="mt-8" as="ul">
          {filtered.map((company) => (
            <li key={company.id} className="list-none">
              <CompanyCard company={company} />
            </li>
          ))}
        </Grid>
      ) : (
        <EmptyState
          className="mt-8"
          title="Brak wyników"
          description="Zmień kryteria wyszukiwania lub wyczyść filtry."
          action={
            hasActiveFilters ? (
              <Button type="button" variant="secondary" onClick={resetFilters}>
                Wyczyść filtry
              </Button>
            ) : null
          }
        />
      )}
    </div>
  );
}
