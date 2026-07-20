import { Badge, Button } from "@/components/design-system";
import type { Article } from "@/types/Article";
import { cn } from "@/lib/cn";

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
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-white dark:border-border dark:bg-surface",
        className,
      )}
    >
      <div
        aria-hidden
        className="flex aspect-[16/10] items-center justify-center bg-[#f5f5f7] dark:bg-surface-muted"
      >
        <span className="text-xs font-medium tracking-wide text-subtle">
          {article.imageLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Badge tone="brand" className="w-fit">
          {article.category}
        </Badge>

        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground text-balance">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>

        <div className="mt-5">
          <Button href={href} variant="secondary" className="w-full">
            Czytaj więcej
          </Button>
        </div>
      </div>
    </article>
  );
}
