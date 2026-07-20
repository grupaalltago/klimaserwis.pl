import { cn } from "@/lib/cn";

export type StepItemProps = {
  step: string;
  title: string;
  description: string;
  className?: string;
};

/**
 * Reusable numbered step — Apple-inspired, minimal chrome.
 */
export function StepItem({
  step,
  title,
  description,
  className,
}: StepItemProps) {
  return (
    <div className={cn("flex gap-4 sm:block sm:text-center", className)}>
      <span
        aria-hidden
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] font-display text-sm font-semibold text-foreground dark:bg-surface-muted sm:mx-auto"
      >
        {step}
      </span>
      <div className="min-w-0 sm:mt-5">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
