import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SearchBox } from "@/components/ui/SearchBox";
import { heroContent } from "@/lib/content/hero";

/**
 * Homepage hero — large type, one search, two CTAs.
 * Clean Apple-inspired surface: no gradients, no photos.
 */
export function HeroSection() {
  const { headline, subtitle, primaryCta, secondaryCta, search } = heroContent;

  return (
    <section className="border-b border-black/5 bg-white dark:border-border dark:bg-background">
      <Container className="flex flex-col items-center py-16 text-center sm:py-24 lg:py-28">
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {headline}
        </h1>

        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>

        <SearchBox
          action={search.action}
          name={search.inputName}
          placeholder={search.placeholder}
          submitLabel={search.submitLabel}
          className="mt-10 w-full max-w-xl"
        />

        <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={primaryCta.href} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
