import { Navbar } from "@/components/layout/Navbar";
import { Logo } from "@/components/ui/Logo";
import { headerCta, navItems } from "@/lib/content/site";

/**
 * Sticky site header: logo (left), flat nav (center), CTA (right).
 * Desktop + mobile — no dropdowns.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white dark:bg-surface">
      <Navbar
        items={navItems}
        cta={{ href: headerCta.href, label: headerCta.label }}
        brand={<Logo />}
      />
    </header>
  );
}
