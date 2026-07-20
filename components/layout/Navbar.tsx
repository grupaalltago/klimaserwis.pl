"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLinks } from "@/components/ui/NavLinks";
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

  const close = () => setOpen(false);

  return (
    <>
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-4">
        <div className="justify-self-start">{brand ?? <Logo onClick={close} />}</div>

        <div className="hidden justify-self-center xl:block">
          <NavLinks items={items} />
        </div>

        <div className="flex items-center justify-self-end gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button href={cta.href} size="sm" className="inline-flex">
            {cta.label}
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground xl:hidden dark:bg-surface"
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
          "border-t border-border bg-white xl:hidden dark:bg-surface",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-3 py-4">
          <NavLinks
            items={items}
            orientation="vertical"
            onNavigate={close}
          />
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <span className="text-xs text-muted">Motyw</span>
          </div>
        </Container>
      </div>
    </>
  );
}
