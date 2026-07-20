"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cta, navItems, siteConfig } from "@/content/site";
import { cn } from "@/shared/lib/cn";

function isNavActive(pathname: string, href: string) {
  if (href === "/katalog") {
    return pathname === "/katalog" || pathname.startsWith("/firma/");
  }
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  return pathname === href;
}

export function Header() {
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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Główne">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-brand-700",
                isNavActive(pathname, item.href)
                  ? "text-brand-700 underline decoration-brand-400 decoration-2 underline-offset-8"
                  : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-white text-ink md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id={panelId}
        className={cn(
          "border-t border-line bg-white md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-brand-50"
          >
            Kontakt
          </Link>
          <ButtonLink href={cta.href} className="mt-2 w-full">
            {cta.label}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
