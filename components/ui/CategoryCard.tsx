import { Icon, type IconName } from "@/components/design-system/Icon";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { Category } from "@/types/Category";

export type CategoryCardProps = {
  category: Category;
  className?: string;
};

/**
 * Reusable category card — icon, title, description, hover motion.
 */
export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Card
      href={category.href}
      variant="clickable"
      className={className}
      padded
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5f5f7] text-foreground transition duration-200 group-hover:scale-105 dark:bg-surface-muted">
        <Icon name={category.icon as IconName} size="md" />
      </span>
      <Heading variant="h4" as="h3" className="mt-5">
        {category.title}
      </Heading>
      <Text variant="small" className="mt-2 flex-1 text-muted">
        {category.description}
      </Text>
      <Text
        variant="small"
        className="mt-5 font-medium text-brand-700 transition group-hover:translate-x-0.5 dark:text-brand-300"
        as="span"
      >
        Zobacz więcej →
      </Text>
    </Card>
  );
}
