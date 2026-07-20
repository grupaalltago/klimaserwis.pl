import { IconLoader, type IconSize } from "@/components/design-system/Icon";
import { cn } from "@/lib/cn";

export { EmptyState } from "@/components/ui/EmptyState";
export type { EmptyStateProps } from "@/components/ui/EmptyState";

type SpinnerProps = {
  size?: IconSize;
  className?: string;
  label?: string;
};

export function Spinner({
  size = "md",
  className,
  label = "Ładowanie",
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      className={cn("inline-flex items-center gap-2 text-muted", className)}
    >
      <IconLoader size={size} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-xl bg-surface-muted",
        "after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_1.4s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent dark:after:via-white/10",
        className,
      )}
    />
  );
}
