import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLegal, footerNav, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-xl font-bold tracking-tight">
            {siteConfig.name}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Katalog firm HVAC i szybkie zapytania o klimatyzację oraz pompy ciepła.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Nawigacja
          </p>
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Informacje
          </p>
          <ul className="space-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-4">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}
          </p>
        </Container>
      </div>
    </footer>
  );
}
