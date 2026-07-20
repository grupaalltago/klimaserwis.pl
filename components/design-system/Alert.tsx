import type { ReactNode } from "react";
import { IconAlert, IconCheck, IconInfo } from "@/components/design-system/Icon";
import { cn } from "@/lib/cn";

export type AlertTone = "info" | "success" | "warning" | "danger";

const toneClasses: Record<AlertTone, string> = {
  info: "bg-info-soft text-info ring-info/25",
  success: "bg-success-soft text-success ring-success/25",
  warning: "bg-warning-soft text-warning ring-warning/25",
  danger: "bg-danger-soft text-danger ring-danger/25",
};

const icons = {
  info: IconInfo,
  success: IconCheck,
  warning: IconAlert,
  danger: IconAlert,
} as const;

type AlertProps = {
  tone?: AlertTone;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Alert({
  tone = "info",
  title,
  children,
  className,
}: AlertProps) {
  const IconCmp = icons[tone];

  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-2xl p-4 ring-1",
        toneClasses[tone],
        className,
      )}
    >
      <IconCmp className="mt-0.5" size="md" />
      <div className="min-w-0 space-y-1">
        {title ? (
          <p className="font-display text-sm font-semibold text-foreground">
            {title}
          </p>
        ) : null}
        <div className="text-sm leading-relaxed text-foreground/90">
          {children}
        </div>
      </div>
    </div>
  );
}
