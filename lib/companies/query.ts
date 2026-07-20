import type { Category } from "@/types/Category";
import type { Company } from "@/types/Company";

export type CompanySortOption = "az" | "rating" | "newest";

export type CompanyDirectoryQuery = {
  search?: string;
  citySlug?: string;
  categorySlug?: string;
  sort?: CompanySortOption;
};

/**
 * Client-side directory query over mock (or future DB-fetched) company lists.
 */
export function queryCompanies(
  companies: Company[],
  categories: Category[],
  {
    search = "",
    citySlug = "",
    categorySlug = "",
    sort = "newest",
  }: CompanyDirectoryQuery,
): Company[] {
  const normalizedSearch = search.trim().toLocaleLowerCase("pl");

  let result = companies;

  if (normalizedSearch) {
    result = result.filter((company) => {
      const haystack = [
        company.name,
        company.city,
        company.description,
        ...company.categories,
        ...company.services,
      ]
        .join(" ")
        .toLocaleLowerCase("pl");

      return haystack.includes(normalizedSearch);
    });
  }

  if (citySlug) {
    result = result.filter((company) => company.citySlug === citySlug);
  }

  if (categorySlug) {
    const category = categories.find((item) => item.slug === categorySlug);
    if (category) {
      result = result.filter((company) =>
        company.categories.includes(category.title),
      );
    }
  }

  return sortCompanies(result, sort);
}

function sortCompanies(
  companies: Company[],
  sort: CompanySortOption,
): Company[] {
  const sorted = [...companies];

  switch (sort) {
    case "az":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "pl"));
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "newest":
    default:
      return sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
}
