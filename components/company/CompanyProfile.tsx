import {
  Badge,
  Card,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StarRating } from "@/components/ui/StarRating";
import type { Company } from "@/types/Company";

type CompanyProfileProps = {
  company: Company;
};

/**
 * Company profile layout — consumes typed Company from the data layer.
 */
export function CompanyProfile({ company }: CompanyProfileProps) {
  return (
    <Section spacing="sm" tone="default">
      <Breadcrumb
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Firmy", href: "/firmy" },
          { label: company.name },
        ]}
      />

      <header className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          aria-hidden
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#f5f5f7] font-display text-2xl font-semibold text-foreground dark:bg-surface-muted"
        >
          {company.logoInitials}
        </div>

        <div className="min-w-0 flex-1">
          <Heading variant="h1" className="sm:text-4xl lg:text-4xl">
            {company.name}
          </Heading>
          <Text variant="muted" className="mt-2">
            {company.city}
          </Text>
          <div className="mt-3">
            <StarRating value={company.rating} />
          </div>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {company.categories.map((category) => (
              <li key={category}>
                <Badge tone="brand">{category}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="mt-10 max-w-3xl" aria-labelledby="company-about">
        <Heading variant="h3" id="company-about">
          O firmie
        </Heading>
        <Text variant="muted" className="mt-3">
          {company.description}
        </Text>
      </section>

      <section className="mt-10 max-w-3xl" aria-labelledby="company-services">
        <Heading variant="h3" id="company-services">
          Usługi
        </Heading>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {company.services.map((service) => (
            <li key={service}>
              <Text variant="muted" as="span">
                {service}
              </Text>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="company-gallery">
        <Heading variant="h3" id="company-gallery">
          Galeria
        </Heading>
        <Text variant="small" className="mt-2 text-muted">
          Zdjęcia realizacji pojawią się w kolejnych iteracjach.
        </Text>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-2xl bg-[#f5f5f7] dark:bg-surface-muted"
              aria-hidden
            />
          ))}
        </div>
      </section>

      <section className="mt-10 max-w-xl" aria-labelledby="company-contact">
        <Heading variant="h3" id="company-contact">
          Kontakt
        </Heading>
        <Card className="mt-4 bg-[#f5f5f7] dark:bg-surface-muted">
          <Text variant="muted">
            Formularz i dane kontaktowe będą dostępne wkrótce.
          </Text>
        </Card>
      </section>
    </Section>
  );
}
