import type { TextareaHTMLAttributes } from "react";
import { Field, fieldDescribedBy } from "@/components/ui/Field";
import { controlBaseClassName } from "@/components/ui/controlStyles";
import { cn } from "@/lib/cn";

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  containerClassName?: string;
};

/**
 * Multi-line text field with optional label, helper, and error.
 */
export function Textarea({
  id,
  label,
  helperText,
  error,
  required,
  disabled,
  className,
  containerClassName,
  rows = 4,
  ...props
}: TextareaProps) {
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
      <textarea
        id={id}
        disabled={disabled}
        required={required}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        aria-describedby={fieldDescribedBy(helperId, errorId)}
        className={cn(
          controlBaseClassName,
          "min-h-24 resize-y px-3.5 py-3",
          className,
        )}
        {...props}
      />
    </Field>
  );
}
