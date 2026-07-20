import {
  Button,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { ctaContent } from "@/lib/content/cta";

/**
 * Final homepage CTA — minimal Apple-inspired block.
 */
export function CtaSection() {
  const { headline, subtitle, primary, secondary } = ctaContent;

  return (
    <Section spacing="xl" tone="muted" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <Heading variant="h2" id="cta-heading">
          {headline}
        </Heading>
        <Text variant="muted" className="mt-4 sm:text-lg">
          {subtitle}
        </Text>
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
    </Section>
  );
}
