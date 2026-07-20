import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cta } from "@/content/site";

export function CtaSection() {
  return (
    <section className="pb-16 sm:pb-20" aria-labelledby="cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-800/20 bg-brand-950 px-6 py-12 text-white sm:px-10 sm:py-14">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-400/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-brand-600/40 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Gotowy, żeby znaleźć fachowca?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Opisz potrzebę — przekażemy zgłoszenie lub skontaktujemy się w
              sprawie dalszych kroków. Bez konta i bez zbędnych formalności.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={cta.href}
                className="bg-white text-brand-950 hover:bg-brand-50"
              >
                {cta.label}
              </ButtonLink>
              <ButtonLink
                href="/katalog"
                variant="secondary"
                className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10"
              >
                Przejdź do katalogu
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
