import {
  Container,
  PageHeader,
  Section,
  Text,
} from "@/components/ui";

type PagePlaceholderProps = {
  title: string;
  description?: string;
};

/** Shared empty-page shell for unfinished routes. */
export function PagePlaceholder({
  title,
  description = "Strona w przygotowaniu.",
}: PagePlaceholderProps) {
  return (
    <Section spacing="xl" tone="plain" contained={false}>
      <Container size="md">
        <PageHeader
          eyebrow={
            <Text
              variant="caption"
              className="text-brand-700 dark:text-brand-300"
            >
              Klimaserwis.pl
            </Text>
          }
          title={title}
          description={description}
        />
      </Container>
    </Section>
  );
}
