import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type SectionSpacing = "sm" | "md" | "lg" | "xl";
export type SectionTone = "default" | "muted" | "plain";

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-10 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-16 sm:py-24 lg:py-28",
};

const toneClasses: Record<SectionTone, string> = {
  default: "border-b border-black/5 bg-white dark:border-border dark:bg-background",
  muted:
    "border-b border-black/5 bg-[#f5f5f7] dark:border-border dark:bg-surface-muted",
  plain: "",
};

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  /** When false, children are not wrapped in Container. */
  contained?: boolean;
  id?: string;
  "aria-labelledby"?: string;
};

/**
 * Vertical page section with consistent spacing and surface tone.
 */
export function Section({
  children,
  spacing = "lg",
  tone = "default",
  className,
  containerClassName,
  contained = true,
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(toneClasses[tone], spacingClasses[spacing], className)}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
