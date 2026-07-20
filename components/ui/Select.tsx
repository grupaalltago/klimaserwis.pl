import type { SelectHTMLAttributes } from "react";
import { Field, fieldDescribedBy } from "@/components/ui/Field";
import {
  controlBaseClassName,
  controlSizeClassName,
  type ControlSize,
} from "@/components/ui/controlStyles";
import { cn } from "@/lib/cn";

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
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
 * Native select with optional label, helper, and error.
 */
export function Select({
  id,
  label,
  helperText,
  error,
  required,
  disabled,
  size = "md",
  className,
  containerClassName,
  children,
  ...props
}: SelectProps) {
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
      <select
        id={id}
        disabled={disabled}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        aria-describedby={fieldDescribedBy(helperId, errorId)}
        className={cn(
          controlBaseClassName,
          controlSizeClassName[size],
          "appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%238494a7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    </Field>
  );
}
