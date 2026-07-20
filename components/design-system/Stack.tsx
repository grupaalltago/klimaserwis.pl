import type { ElementType, ReactNode } from "react";
import { dsSpacing, type DsSpacing } from "@/components/design-system/tokens";
import { cn } from "@/lib/cn";

type StackProps = {
  children: ReactNode;
  gap?: DsSpacing;
  className?: string;
  as?: ElementType;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export function Stack({
  children,
  gap = 4,
  className,
  as: Tag = "div",
  align = "stretch",
  justify = "start",
}: StackProps) {
  return (
    <Tag
      className={cn(
        "flex flex-col",
        dsSpacing[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type InlineProps = StackProps & {
  wrap?: boolean;
};

export function Inline({
  children,
  gap = 3,
  className,
  as: Tag = "div",
  align = "center",
  justify = "start",
  wrap = true,
}: InlineProps) {
  return (
    <Tag
      className={cn(
        "flex flex-row",
        wrap && "flex-wrap",
        dsSpacing[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type SpacerProps = {
  size?: DsSpacing;
  axis?: "y" | "x";
  className?: string;
};

const spacerY: Record<DsSpacing, string> = {
  1: "h-1",
  2: "h-2",
  3: "h-3",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  8: "h-8",
  10: "h-10",
  12: "h-12",
  16: "h-16",
};

const spacerX: Record<DsSpacing, string> = {
  1: "w-1",
  2: "w-2",
  3: "w-3",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  8: "w-8",
  10: "w-10",
  12: "w-12",
  16: "w-16",
};

export function Spacer({ size = 4, axis = "y", className }: SpacerProps) {
  return (
    <div
      aria-hidden
      className={cn(axis === "y" ? spacerY[size] : spacerX[size], className)}
    />
  );
}
