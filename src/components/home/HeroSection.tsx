import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cta, siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-200),_transparent_55%),linear-gradient(180deg,_#e8f4ff_0%,_var(--color-surface)_68%)]"
      />
      <div
        aria-hidden
        className="animate-soft-pulse absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl"
      />

      <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-24">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {siteConfig.name}
          </p>
          <h1 className="animate-fade-up-delay mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Klimatyzacja i HVAC.
            <span className="mt-2 block text-brand-700">
              Sprawdzone firmy w Twoim mieście.
            </span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <form
            action="/katalog"
            method="get"
            className="animate-fade-up-delay-2 mt-8 rounded-2xl border border-line bg-white/90 p-3 shadow-sm shadow-brand-950/5 backdrop-blur"
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <label className="block">
                <span className="mb-1.5 block px-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  Miasto
                </span>
                <select
                  name="miasto"
                  defaultValue=""
                  className="min-h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                >
                  <option value="" disabled>
                    Wybierz miasto
                  </option>
                  <option value="warszawa">Warszawa</option>
                  <option value="krakow">Kraków</option>
                  <option value="wroclaw">Wrocław</option>
                  <option value="gdansk">Gdańsk</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block px-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  Usługa
                </span>
                <select
                  name="usluga"
                  defaultValue=""
                  className="min-h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                >
                  <option value="" disabled>
                    Wybierz usługę
                  </option>
                  <option value="klimatyzacja">Klimatyzacja</option>
                  <option value="pompy-ciepla">Pompy ciepła</option>
                  <option value="wentylacja">Wentylacja</option>
                  <option value="serwis">Serwis</option>
                </select>
              </label>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:min-w-36"
                >
                  Szukaj firm
                </button>
              </div>
            </div>
          </form>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
            <ButtonLink href="/katalog" variant="secondary">
              Zobacz katalog
            </ButtonLink>
          </div>
        </div>

        <aside className="animate-fade-up-delay-2 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-lg shadow-brand-950/5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Dlaczego my
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Firmy z jawnymi danymi kontaktowymi i zakresem usług.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Zapytanie w około minutę — bez zakładania konta.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Bezpłatne dla osób szukających fachowca.
            </li>
          </ul>
        </aside>
      </Container>
    </section>
  );
}
