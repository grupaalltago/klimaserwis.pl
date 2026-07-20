import type { ReactNode } from "react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  breadcrumb?: ReactNode;
  actions?: ReactNode;
  titleId?: string;
  className?: string;
  align?: "start" | "center";
};

/**
 * Reusable page header — title, description, optional breadcrumb & actions.
 */
export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumb,
  actions,
  titleId,
  className,
  align = "start",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {breadcrumb}

      <div
        className={cn(
          "flex w-full flex-col gap-4",
          actions &&
            (align === "center"
              ? "items-center"
              : "sm:flex-row sm:items-end sm:justify-between"),
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          {eyebrow ? (
            typeof eyebrow === "string" ? (
              <Text variant="caption">{eyebrow}</Text>
            ) : (
              eyebrow
            )
          ) : null}
          <Heading
            variant="h1"
            id={titleId}
            className={cn(eyebrow ? "mt-3" : undefined, "sm:text-4xl lg:text-4xl")}
          >
            {title}
          </Heading>
          {description ? (
            <Text variant="muted" className="mt-3">
              {description}
            </Text>
          ) : null}
        </div>

        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}
