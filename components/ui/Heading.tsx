import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4";

const variantClasses: Record<HeadingVariant, string> = {
  h1: "font-display text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]",
  h2: "font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl",
  h3: "font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
  h4: "font-display text-lg font-semibold tracking-tight text-foreground",
};

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  variant?: HeadingVariant;
  /** Semantic tag override — defaults to the visual variant. */
  as?: HeadingVariant;
  children: ReactNode;
  className?: string;
};

/**
 * Display headings — consistent typography across the app.
 */
export function Heading({
  variant = "h2",
  as,
  children,
  className,
  ...props
}: HeadingProps) {
  const Tag = (as ?? variant) as ElementType;

  return (
    <Tag className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
