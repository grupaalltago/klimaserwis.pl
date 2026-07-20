import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaContent } from "@/lib/content/cta";

/**
 * Final homepage CTA — minimal Apple-inspired block.
 */
export function CtaSection() {
  const { headline, subtitle, primary, secondary } = ctaContent;

  return (
    <section
      className="border-b border-black/5 bg-[#f5f5f7] py-16 sm:py-24 dark:border-border dark:bg-surface-muted"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[40px] lg:leading-tight"
          >
            {headline}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={primary.href} className="w-full sm:w-auto">
              {primary.label}
            </Button>
            <Button
              href={secondary.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
