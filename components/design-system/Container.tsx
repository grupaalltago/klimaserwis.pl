import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-ds-sm",
  md: "max-w-ds-md",
  lg: "max-w-ds-lg",
  xl: "max-w-ds-xl",
  full: "max-w-none",
};

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: ContainerSize;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "lg",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
