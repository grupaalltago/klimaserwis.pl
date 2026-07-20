import type { ElementType, ReactNode } from "react";
import { dsSpacing, type DsSpacing } from "@/components/design-system/tokens";
import { cn } from "@/lib/cn";

export type GridCols = 1 | 2 | 3 | 4 | 6 | 12;

const colsClasses: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
};

type GridProps = {
  children: ReactNode;
  cols?: GridCols;
  gap?: DsSpacing;
  className?: string;
  as?: ElementType;
};

export function Grid({
  children,
  cols = 3,
  gap = 4,
  className,
  as: Tag = "div",
}: GridProps) {
  return (
    <Tag className={cn("grid", colsClasses[cols], dsSpacing[gap], className)}>
      {children}
    </Tag>
  );
}

type GridItemProps = {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 6 | 12;
  className?: string;
  as?: ElementType;
};

const spanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  6: "col-span-6",
  12: "col-span-full",
} as const;

export function GridItem({
  children,
  span = 1,
  className,
  as: Tag = "div",
}: GridItemProps) {
  return (
    <Tag className={cn(spanClasses[span], className)}>{children}</Tag>
  );
}
