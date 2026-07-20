import { Heading, Section, Text } from "@/components/ui";
import { StepItem } from "@/components/ui/StepItem";
import { howItWorksSteps } from "@/lib/content/how-it-works";

/**
 * Homepage “How it works” — three clear steps.
 */
export function HowItWorksSection() {
  return (
    <Section
      spacing="xl"
      tone="default"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Text variant="caption">Jak to działa</Text>
        <Heading variant="h2" id="how-it-works-heading" className="mt-3">
          Trzy proste kroki
        </Heading>
        <Text variant="muted" className="mt-3">
          Od wyszukania usługi do kontaktu z wykonawcą — bez zbędnych
          formalności.
        </Text>
      </div>

      <ol className="relative mx-auto mt-12 grid max-w-5xl gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8">
        {howItWorksSteps.map((item, index) => (
          <li key={item.step} className="relative list-none">
            {index < howItWorksSteps.length - 1 ? (
              <div
                aria-hidden
                className="pointer-events-none absolute left-[calc(50%+2.5rem)] top-5 hidden h-px w-[calc(100%-2.5rem)] bg-black/10 sm:block dark:bg-border"
              />
            ) : null}
            <StepItem
              step={item.step}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
