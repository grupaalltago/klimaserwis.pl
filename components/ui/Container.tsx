import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ContainerSize = "sm" | "md" | "lg" | "full";

/** Default content width: 1280px. */
const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-[1280px]",
  full: "max-w-none",
};

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: ContainerSize;
};

/**
 * Centered page width constraint — default max-width 1280px.
 */
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
