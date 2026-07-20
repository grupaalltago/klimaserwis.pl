import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cta, footerLegal, footerNav, siteConfig } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-brand-950 text-white">
      <div
        aria-hidden
        className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl"
      />
      <Container className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Nowoczesny katalog firm HVAC i szybkie zapytania o klimatyzację,
            pompy ciepła oraz serwis w całej Polsce.
          </p>
          <Link
            href={cta.href}
            className="inline-flex text-sm font-semibold text-sky-200 transition hover:text-white"
          >
            {cta.label} →
          </Link>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Nawigacja
          </p>
          <ul className="space-y-2.5">
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Informacje
          </p>
          <ul className="space-y-2.5">
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

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {year} {siteConfig.name}
          </p>
          <p className="text-xs text-white/35">
            Frontend MVP — dane firm i artykułów są przykładowe.
          </p>
        </Container>
      </div>
    </footer>
  );
}
