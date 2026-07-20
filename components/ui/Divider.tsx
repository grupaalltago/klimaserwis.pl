import { cn } from "@/lib/cn";

export type DividerProps = {
  className?: string;
  decorative?: boolean;
};

/**
 * Horizontal rule with shared border token.
 */
export function Divider({ className, decorative = true }: DividerProps) {
  return (
    <hr
      aria-hidden={decorative || undefined}
      className={cn("border-0 border-t border-black/8 dark:border-border", className)}
    />
  );
}
