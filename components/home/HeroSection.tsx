import {
  Button,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { SearchBox } from "@/components/ui/SearchBox";
import { heroContent } from "@/lib/content/hero";

/**
 * Homepage hero — large type, one search, two CTAs.
 */
export function HeroSection() {
  const { headline, subtitle, primaryCta, secondaryCta, search } = heroContent;

  return (
    <Section
      spacing="xl"
      tone="default"
      containerClassName="flex flex-col items-center text-center"
    >
      <Heading variant="h1" className="max-w-3xl">
        {headline}
      </Heading>

      <Text variant="muted" className="mt-5 max-w-xl sm:text-lg">
        {subtitle}
      </Text>

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
    </Section>
  );
}
