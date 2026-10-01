import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FooterLinkGroup } from "@/components/ui/FooterLinkGroup";
import { Logo } from "@/components/ui/Logo";
import { Text } from "@/components/ui/Text";
import {
  footerGroups,
  footerInformation,
  footerLegal,
  footerQuickLinks,
  footerServices,
  siteConfig,
} from "@/lib/content/site";

/**
 * Minimal Apple-like site footer.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:border-border dark:bg-surface-muted border-t border-black/5 bg-[#f5f5f7]">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
          <div className="max-w-xs space-y-3">
            <Logo className="text-[17px] sm:text-[17px]" />
            <Text variant="small" className="text-muted">
              {siteConfig.tagline}
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterLinkGroup
              title={footerGroups.quickLinks}
              links={footerQuickLinks}
            />
            <FooterLinkGroup
              title={footerGroups.services}
              links={footerServices}
            />
            <FooterLinkGroup
              title={footerGroups.information}
              links={footerInformation}
              className="col-span-2 sm:col-span-1"
            />
          </div>
        </div>

        <Divider className="mt-12" />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Text variant="small" className="text-subtle text-[11px]">
            Copyright © {year} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </Text>

          <ul className="text-subtle flex flex-wrap items-center gap-x-1 text-[11px]">
            {footerLegal.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="dark:text-border mx-2 text-black/15"
                  >
                    |
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
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
