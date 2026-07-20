import Link from "next/link";
import { FooterLinkGroup } from "@/components/ui/FooterLinkGroup";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  footerInformation,
  footerLegal,
  footerQuickLinks,
  footerServices,
  siteConfig,
} from "@/lib/content/site";

/**
 * Minimal Apple-like site footer.
 * Logo + link columns + copyright / legal bar.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[#f5f5f7] dark:border-border dark:bg-surface-muted">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
          <div className="max-w-xs space-y-3">
            <Logo className="text-[17px] sm:text-[17px]" />
            <p className="text-[12px] leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterLinkGroup title="Quick links" links={footerQuickLinks} />
            <FooterLinkGroup title="Services" links={footerServices} />
            <FooterLinkGroup
              title="Information"
              links={footerInformation}
              className="col-span-2 sm:col-span-1"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-6 dark:border-border sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-subtle">
            Copyright © {year} {siteConfig.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-1 text-[11px] text-subtle">
            {footerLegal.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 ? (
                  <span aria-hidden className="mx-2 text-black/15 dark:text-border">
                    |
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
