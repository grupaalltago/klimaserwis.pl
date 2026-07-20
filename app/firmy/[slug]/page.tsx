import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { latestCompanies } from "@/lib/content/companies";
import { createPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return latestCompanies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = latestCompanies.find((item) => item.slug === slug);
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
  const company = latestCompanies.find((item) => item.slug === slug);
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
