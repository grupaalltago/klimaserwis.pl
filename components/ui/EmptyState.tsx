import type { ReactNode } from "react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
};

/**
 * Empty results / placeholder surface.
 */
export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-[#f5f5f7] px-6 py-12 text-center dark:border-border dark:bg-surface-muted",
        className,
      )}
    >
      {icon ? <div className="mb-4 text-muted">{icon}</div> : null}
      <Heading variant="h4" as="h2">
        {title}
      </Heading>
      {description ? (
        <Text variant="small" className="mt-2 max-w-md text-muted">
          {description}
        </Text>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
