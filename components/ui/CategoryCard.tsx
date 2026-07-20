import Link from "next/link";
import { Icon, type IconName } from "@/components/design-system";
import type { Category } from "@/types/Category";
import { cn } from "@/lib/cn";

export type CategoryCardProps = {
  category: Category;
  className?: string;
};

/**
 * Reusable category card — icon, title, description, hover motion.
 */
export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-black/8 bg-white p-6 transition duration-200",
        "hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "dark:border-border dark:bg-surface dark:hover:border-border-strong dark:hover:shadow-ds-md",
        className,
      )}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5f5f7] text-foreground transition duration-200 group-hover:scale-105 dark:bg-surface-muted">
        <Icon name={category.icon as IconName} size="md" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
        {category.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {category.description}
      </p>
      <span className="mt-5 text-sm font-medium text-brand-700 transition group-hover:translate-x-0.5 dark:text-brand-300">
        Zobacz więcej →
      </span>
    </Link>
  );
}
