import { IconLoader, type IconSize } from "@/components/design-system/Icon";
import { cn } from "@/lib/cn";

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

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface-muted/60 px-6 py-12 text-center",
        className,
      )}
    >
      {icon ? <div className="mb-4 text-muted">{icon}</div> : null}
      <p className="font-display text-lg font-semibold text-foreground">
        {title}
      </p>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
