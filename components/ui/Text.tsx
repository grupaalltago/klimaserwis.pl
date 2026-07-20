import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TextVariant = "body" | "small" | "muted" | "caption";

const variantClasses: Record<TextVariant, string> = {
  body: "text-[15px] leading-relaxed text-foreground",
  small: "text-sm leading-relaxed text-foreground",
  muted: "text-[15px] leading-relaxed text-muted",
  caption:
    "text-xs font-semibold uppercase tracking-[0.16em] text-muted",
};

export type TextProps = HTMLAttributes<HTMLElement> & {
  variant?: TextVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/**
 * Body copy and supporting text — Apple-inspired scale.
 */
export function Text({
  variant = "body",
  as,
  children,
  className,
  ...props
}: TextProps) {
  const Tag: ElementType =
    as ?? (variant === "caption" ? "p" : variant === "small" ? "p" : "p");

  return (
    <Tag className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
