"use client";

import { useMemo, useState } from "react";
import { Grid } from "@/components/design-system";
import { CompanyCard } from "@/components/ui/CompanyCard";
import {
  queryCompanies,
  type CompanySortOption,
} from "@/lib/companies/query";
import { cn } from "@/lib/cn";
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

const controlClassName = cn(
  "min-h-11 w-full rounded-xl border border-black/8 bg-white px-3.5 text-[15px] text-foreground outline-none",
  "placeholder:text-subtle focus-visible:border-brand-300 focus-visible:ring-2 focus-visible:ring-ring/30",
  "dark:border-border dark:bg-surface",
);

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
      <div className="rounded-2xl border border-black/8 bg-white p-4 sm:p-5 dark:border-border dark:bg-surface">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <label
              htmlFor="companies-search"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Szukaj
            </label>
            <input
              id="companies-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Nazwa, miasto, usługa…"
              autoComplete="off"
              className={controlClassName}
            />
          </div>

          <div>
            <label
              htmlFor="companies-city"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Miasto
            </label>
            <select
              id="companies-city"
              value={citySlug}
              onChange={(event) => setCitySlug(event.target.value)}
              className={controlClassName}
            >
              <option value="">Wszystkie miasta</option>
              {cities.map((city) => (
                <option key={city.id} value={city.slug}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="companies-category"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Kategoria
            </label>
            <select
              id="companies-category"
              value={categorySlug}
              onChange={(event) => setCategorySlug(event.target.value)}
              className={controlClassName}
            >
              <option value="">Wszystkie kategorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="companies-sort"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Sortuj
            </label>
            <select
              id="companies-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as CompanySortOption)
              }
              className={controlClassName}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted">
            Wyniki:{" "}
            <span className="font-medium text-foreground">
              {filtered.length}
            </span>
            {hasActiveFilters ? " (filtrowane)" : null}
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-medium text-brand-700 transition hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
            >
              Wyczyść filtry
            </button>
          ) : null}
        </div>
      </div>

      {filtered.length > 0 ? (
        <Grid cols={3} gap={4} className="mt-8" as="ul">
          {filtered.map((company) => (
            <li key={company.id} className="list-none">
              <CompanyCard company={company} />
            </li>
          ))}
        </Grid>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-black/10 bg-[#f5f5f7] px-6 py-12 text-center dark:border-border dark:bg-surface-muted">
          <p className="font-display text-lg font-semibold text-foreground">
            Brak wyników
          </p>
          <p className="mt-2 text-sm text-muted">
            Zmień kryteria wyszukiwania lub wyczyść filtry.
          </p>
        </div>
      )}
    </div>
  );
}
