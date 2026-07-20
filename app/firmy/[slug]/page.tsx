import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
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
    return createPageMetadata({ title: "Firma", path: "/firmy", noIndex: true });
  }

  return createPageMetadata({
    title: company.name,
    description: `${company.name} — ${company.city}. ${company.description}`,
    path: `/firmy/${company.slug}`,
  });
}

export default async function CompanyProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);
  if (!company) {
    notFound();
  }

  return (
    <PagePlaceholder
      title={company.name}
      description={`${company.city} · Profil firmy (placeholder).`}
    />
  );
}
