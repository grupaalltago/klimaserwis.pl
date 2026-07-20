import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { latestArticles } from "@/lib/content/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return latestArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = latestArticles.find((item) => item.slug === slug);
  return { title: article?.title ?? "Artykuł" };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = latestArticles.find((item) => item.slug === slug);
  if (!article) {
    notFound();
  }

  return (
    <PagePlaceholder
      title={article.title}
      description={`${article.category} · Treść artykułu (placeholder).`}
    />
  );
}
