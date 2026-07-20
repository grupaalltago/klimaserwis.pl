import type { ReactNode } from "react";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export type FieldProps = {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Shared label / helper / error shell for form controls.
 */
export function Field({
  id,
  label,
  helperText,
  error,
  required,
  disabled,
  className,
  children,
}: FieldProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label ? (
        <label
          htmlFor={id}
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.12em] text-muted",
            disabled && "opacity-50",
          )}
        >
          {label}
          {required ? (
            <span aria-hidden className="ml-0.5 text-danger">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      {children}

      {error ? (
        <Text
          id={errorId}
          variant="small"
          className="text-danger"
          role="alert"
        >
          {error}
        </Text>
      ) : helperText ? (
        <Text id={helperId} variant="small" className="text-subtle">
          {helperText}
        </Text>
      ) : null}
    </div>
  );
}

export function fieldDescribedBy(
  helperId?: string,
  errorId?: string,
): string | undefined {
  return [errorId, helperId].filter(Boolean).join(" ") || undefined;
}
