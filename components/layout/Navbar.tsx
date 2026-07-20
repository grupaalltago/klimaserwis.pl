"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconClose, IconMenu, ThemeToggle } from "@/components/design-system";
import { cn } from "@/lib/cn";

export type NavItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  items: readonly NavItem[];
  cta: NavItem;
  brand?: ReactNode;
};

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar({ items, cta, brand }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Container className="flex h-16 items-center justify-between gap-4">
        {brand}

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Główne">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-brand-700 dark:hover:text-brand-300",
                  isNavActive(pathname, item.href)
                    ? "text-brand-700 underline decoration-brand-400 decoration-2 underline-offset-8 dark:text-brand-300"
                    : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </Container>

      <div
        id={panelId}
        className={cn(
          "border-t border-border bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rekuperacja"
            className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
          >
            Rekuperacja
          </Link>
          <Link
            href="/wentylacja"
            className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
          >
            Wentylacja
          </Link>
          <Link
            href={cta.href}
            className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-muted"
          >
            Kontakt
          </Link>
          <Button href={cta.href} className="mt-2 w-full">
            {cta.label}
          </Button>
        </Container>
      </div>
    </>
  );
}
