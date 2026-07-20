import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { getArticleBySlug, getArticles } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return createPageMetadata({
      title: "Artykuł",
      path: "/poradniki",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/poradniki/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
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
