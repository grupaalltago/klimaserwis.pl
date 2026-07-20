import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "default" | "hover" | "clickable";

const variantClasses: Record<CardVariant, string> = {
  default:
    "rounded-2xl border border-black/8 bg-white dark:border-border dark:bg-surface",
  hover: cn(
    "rounded-2xl border border-black/8 bg-white transition duration-200",
    "hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
    "dark:border-border dark:bg-surface dark:hover:border-border-strong dark:hover:shadow-ds-md",
  ),
  clickable: cn(
    "group rounded-2xl border border-black/8 bg-white transition duration-200",
    "hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "dark:border-border dark:bg-surface dark:hover:border-border-strong dark:hover:shadow-ds-md",
  ),
};

type CardBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  padded?: boolean;
  as?: ElementType;
};

type CardAsDiv = CardBaseProps & {
  href?: undefined;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

type CardAsLink = CardBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    variant?: "hover" | "clickable";
  };

export type CardProps = CardAsDiv | CardAsLink;

/**
 * Surface container — default, hover-enhanced, or clickable (link/button).
 */
export function Card({
  children,
  className,
  variant = "default",
  padded = true,
  as,
  ...props
}: CardProps) {
  const classes = cn(
    "flex h-full flex-col text-foreground",
    variantClasses[variant],
    padded && "p-5",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link
        href={href}
        className={cn(classes, variant === "default" && variantClasses.clickable)}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const Tag = as ?? "div";
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

type CardSectionProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardSectionProps) {
  return <div className={cn("mb-4 space-y-1", className)}>{children}</div>;
}

export function CardBody({ children, className }: CardSectionProps) {
  return (
    <div className={cn("flex-1 text-sm text-muted", className)}>{children}</div>
  );
}

export function CardFooter({ children, className }: CardSectionProps) {
  return (
    <div className={cn("mt-5 flex flex-wrap gap-2", className)}>{children}</div>
  );
}
