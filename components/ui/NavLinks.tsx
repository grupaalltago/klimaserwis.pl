"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/layout/Navbar";
import { cn } from "@/lib/cn";

type NavLinksProps = {
  items: readonly NavItem[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
};

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({
  items,
  className,
  linkClassName,
  onNavigate,
  orientation = "horizontal",
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Główne"
      className={cn(
        orientation === "horizontal"
          ? "flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          : "flex flex-col gap-1",
        className,
      )}
    >
      {items.map((item) => {
        const active = isNavActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "text-sm font-medium transition",
              orientation === "vertical" &&
                "rounded-xl px-3 py-3 text-base hover:bg-surface-muted",
              active
                ? "text-brand-700 dark:text-brand-300"
                : "text-muted hover:text-foreground",
              active &&
                orientation === "horizontal" &&
                "underline decoration-brand-400 decoration-2 underline-offset-8",
              linkClassName,
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
