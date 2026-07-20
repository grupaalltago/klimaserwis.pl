import type { InputHTMLAttributes } from "react";
import { Field, fieldDescribedBy } from "@/components/ui/Field";
import {
  controlBaseClassName,
  controlSizeClassName,
  type ControlSize,
} from "@/components/ui/controlStyles";
import { cn } from "@/lib/cn";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "id"
> & {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  size?: ControlSize;
  containerClassName?: string;
};

/**
 * Text input with optional label, helper, and error.
 */
export function Input({
  id,
  label,
  helperText,
  error,
  required,
  disabled,
  size = "md",
  className,
  containerClassName,
  ...props
}: InputProps) {
  const helperId = helperText && !error ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <Field
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      disabled={disabled}
      className={containerClassName}
    >
      <input
        id={id}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        aria-describedby={fieldDescribedBy(helperId, errorId)}
        className={cn(
          controlBaseClassName,
          controlSizeClassName[size],
          className,
        )}
        {...props}
      />
    </Field>
  );
}
