import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { cta, navItems, siteConfig } from "@/lib/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Navbar
        items={navItems}
        cta={{ href: cta.href, label: cta.label }}
        brand={
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            {siteConfig.name}
          </Link>
        }
      />
    </header>
  );
}
