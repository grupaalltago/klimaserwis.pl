import { Container } from "@/components/ui/Container";

type PagePlaceholderProps = {
  title: string;
  description?: string;
};

/** Shared empty-page shell for the project skeleton. */
export function PagePlaceholder({
  title,
  description = "Strona w przygotowaniu.",
}: PagePlaceholderProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-300">
          Klimaserwis.pl
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      </Container>
    </section>
  );
}
