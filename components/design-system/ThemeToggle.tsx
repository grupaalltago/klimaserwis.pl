"use client";

import { IconMoon, IconSun } from "@/components/design-system/Icon";
import { useTheme } from "@/components/design-system/ThemeProvider";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {isDark ? <IconSun size="md" /> : <IconMoon size="md" />}
    </button>
  );
}
