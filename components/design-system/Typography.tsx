import type { ElementType, ReactNode } from "react";
import { Heading as UiHeading } from "@/components/ui/Heading";
import { Text as UiText } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export {
  Heading,
} from "@/components/ui/Heading";
export type { HeadingProps, HeadingVariant } from "@/components/ui/Heading";

export { Text } from "@/components/ui/Text";
export type { TextProps, TextVariant } from "@/components/ui/Text";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "muted" | "inverse";
};

/** @deprecated Prefer `Text variant="caption"`. */
export function Eyebrow({
  children,
  className,
  tone = "brand",
}: EyebrowProps) {
  return (
    <UiText
      variant="caption"
      className={cn(
        tone === "brand" && "text-brand-700 dark:text-brand-300",
        tone === "inverse" && "text-white",
        className,
      )}
    >
      {children}
    </UiText>
  );
}

type LeadProps = {
  children: ReactNode;
  className?: string;
};

/** @deprecated Prefer `Text variant="muted"`. */
export function Lead({ children, className }: LeadProps) {
  return (
    <UiText variant="muted" className={cn("sm:text-lg", className)}>
      {children}
    </UiText>
  );
}

type CaptionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** @deprecated Prefer `Text variant="caption"` or `variant="small"`. */
export function Caption({
  children,
  className,
  as,
}: CaptionProps) {
  return (
    <UiText variant="small" as={as ?? "span"} className={cn("font-medium text-subtle", className)}>
      {children}
    </UiText>
  );
}

/** Compatibility helper when callers used level-based Heading. */
export function LegacyHeading({
  level = 2,
  children,
  className,
  id,
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const variant =
    level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";
  return (
    <UiHeading variant={variant} id={id} className={className}>
      {children}
    </UiHeading>
  );
}
