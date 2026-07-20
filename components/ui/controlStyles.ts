import { cn } from "@/lib/cn";

/** Shared control chrome — Input, Select, Textarea. */
export const controlBaseClassName = cn(
  "w-full rounded-xl border border-black/8 bg-white text-[15px] text-foreground outline-none transition",
  "placeholder:text-subtle",
  "focus-visible:border-brand-300 focus-visible:ring-2 focus-visible:ring-ring/30",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/30",
  "dark:border-border dark:bg-surface",
);

export const controlSizeClassName = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-3.5",
  lg: "min-h-12 px-4",
} as const;

export type ControlSize = keyof typeof controlSizeClassName;
