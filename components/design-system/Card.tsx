import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardVariant =
  | "default"
  | "interactive"
  | "soft"
  | "flush"
  | "outline";

const variantClasses: Record<CardVariant, string> = {
  default:
    "rounded-2xl border border-border bg-surface p-6 shadow-ds-sm",
  interactive:
    "rounded-2xl border border-border bg-surface p-6 shadow-ds-sm transition hover:border-brand-300 hover:shadow-ds-md",
  soft: "rounded-2xl border border-border bg-surface/90 p-5 shadow-ds-sm backdrop-blur",
  flush:
    "border-b border-border pb-6 transition hover:border-brand-300 lg:rounded-2xl lg:border lg:border-border lg:bg-surface lg:p-6 lg:shadow-ds-sm lg:hover:border-brand-300",
  outline:
    "rounded-2xl border border-border-strong bg-transparent p-6",
};

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  as?: ElementType;
  padded?: boolean;
};

export function Card({
  children,
  className,
  variant = "default",
  as: Tag = "div",
  padded = true,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "flex h-full flex-col text-foreground",
        variantClasses[variant],
        !padded && "p-0 lg:p-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4 space-y-1", className)}>{children}</div>;
}

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("flex-1 text-sm text-muted", className)}>{children}</div>;
}

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn("mt-6 flex flex-wrap gap-2", className)}>{children}</div>;
}
