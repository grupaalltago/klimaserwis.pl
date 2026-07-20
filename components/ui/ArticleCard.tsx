import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardFooter } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { Article } from "@/types/Article";

export type ArticleCardProps = {
  article: Article;
  className?: string;
};

/**
 * Reusable article card — image placeholder, category, title, excerpt, CTA.
 */
export function ArticleCard({ article, className }: ArticleCardProps) {
  const href = `/poradniki/${article.slug}`;

  return (
    <Card padded={false} className={className} as="article">
      <div
        aria-hidden
        className="flex aspect-[16/10] items-center justify-center bg-[#f5f5f7] dark:bg-surface-muted"
      >
        <Text variant="caption" className="normal-case tracking-wide text-subtle">
          {article.imageLabel}
        </Text>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Badge tone="brand" className="w-fit">
          {article.category}
        </Badge>

        <Heading variant="h4" as="h3" className="mt-3 text-balance">
          {article.title}
        </Heading>

        <Text variant="small" className="mt-2 line-clamp-3 flex-1 text-muted">
          {article.excerpt}
        </Text>

        <CardFooter>
          <Button href={href} variant="secondary" className="w-full">
            Czytaj więcej
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
