import type { ElementType, ReactNode } from "react";
import { dsTextSize, type DsTextSize } from "@/components/design-system/tokens";
import { cn } from "@/lib/cn";

type Tone = "default" | "muted" | "subtle" | "brand" | "inverse" | "success" | "danger";

const toneClasses: Record<Tone, string> = {
  default: "text-foreground",
  muted: "text-muted",
  subtle: "text-subtle",
  brand: "text-brand-700 dark:text-brand-300",
  inverse: "text-white",
  success: "text-success",
  danger: "text-danger",
};

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingTags: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const headingSizes: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl",
  2: "text-3xl sm:text-4xl",
  3: "text-xl sm:text-2xl",
  4: "text-lg sm:text-xl",
  5: "text-base sm:text-lg",
  6: "text-sm sm:text-base",
};

type HeadingProps = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
};

export function Heading({
  level = 2,
  children,
  className,
  tone = "default",
  id,
}: HeadingProps) {
  const Tag = headingTags[level];
  return (
    <Tag
      id={id}
      className={cn(
        "font-display font-bold tracking-tight text-balance",
        headingSizes[level],
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type TextProps = {
  as?: ElementType;
  size?: DsTextSize;
  tone?: Tone;
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: ReactNode;
  className?: string;
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

export function Text({
  as: Tag = "p",
  size = "md",
  tone = "default",
  weight = "normal",
  children,
  className,
}: TextProps) {
  return (
    <Tag
      className={cn(
        "leading-relaxed",
        dsTextSize[size],
        toneClasses[tone],
        weightClasses[weight],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: Extract<Tone, "brand" | "muted" | "inverse">;
};

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-display text-xs font-semibold uppercase tracking-[0.16em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}

type LeadProps = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
};

export function Lead({ children, className, tone = "muted" }: LeadProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed sm:text-lg",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}

type CaptionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Caption({
  children,
  className,
  as: Tag = "span",
}: CaptionProps) {
  return (
    <Tag className={cn("text-xs font-medium text-subtle", className)}>
      {children}
    </Tag>
  );
}
