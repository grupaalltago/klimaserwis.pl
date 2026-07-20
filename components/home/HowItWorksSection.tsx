import { Container } from "@/components/ui/Container";
import { StepItem } from "@/components/ui/StepItem";
import { howItWorksSteps } from "@/lib/content/how-it-works";

/**
 * Homepage “How it works” — three clear steps, Apple-style layout.
 */
export function HowItWorksSection() {
  return (
    <section
      className="border-b border-black/5 bg-white py-16 sm:py-24 dark:border-border dark:bg-background"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Jak to działa
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Trzy proste kroki
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Od wyszukania usługi do kontaktu z wykonawcą — bez zbędnych formalności.
          </p>
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
      </Container>
    </section>
  );
}
