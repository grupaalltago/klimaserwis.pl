import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyProfile } from "@/components/company/CompanyProfile";
import { getCompanies, getCompanyBySlug } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const companies = await getCompanies();
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);

  if (!company) {
    return createPageMetadata({
      title: "Firma nie znaleziona",
      path: "/firmy",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: company.name,
    description: `${company.name} — ${company.city}. ${company.description}`,
    path: `/firma/${company.slug}`,
  });
}

export default async function CompanyPage({ params }: PageProps) {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return <CompanyProfile company={company} />;
}
