import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { IconLoader } from "@/components/design-system/Icon";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "inverse"
  | "outlineInverse";

export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-ds-sm hover:bg-brand-700 focus-visible:ring-ring",
  secondary:
    "bg-surface text-foreground border border-border hover:border-brand-300 hover:text-brand-800 dark:hover:text-brand-200 focus-visible:ring-ring",
  ghost:
    "text-foreground hover:text-brand-800 hover:bg-surface-muted dark:hover:text-brand-200 focus-visible:ring-ring",
  danger:
    "bg-danger text-white hover:opacity-90 focus-visible:ring-danger",
  inverse:
    "bg-white text-brand-950 hover:bg-sky-50 focus-visible:ring-white dark:bg-surface-elevated dark:text-foreground dark:hover:bg-surface",
  outlineInverse:
    "border border-white/35 bg-white/10 text-white hover:border-white/55 hover:bg-white/15 focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 py-1.5 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {loading ? <IconLoader size="sm" /> : leftIcon}
      <span>{children}</span>
      {!loading ? rightIcon : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, disabled, ...linkProps } = props;
    if (disabled || loading) {
      return (
        <span className={classes} aria-disabled="true">
          {content}
        </span>
      );
    }
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled || loading}
      aria-busy={loading || undefined}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
