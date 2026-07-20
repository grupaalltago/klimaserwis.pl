import { Badge } from "@/components/design-system";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
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
    <div className="border-b border-black/5 bg-white py-10 sm:py-14 dark:border-border dark:bg-background">
      <Container>
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
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {company.name}
            </h1>
            <p className="mt-2 text-[15px] text-muted">{company.city}</p>
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
          <h2
            id="company-about"
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            O firmie
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {company.description}
          </p>
        </section>

        <section className="mt-10 max-w-3xl" aria-labelledby="company-services">
          <h2
            id="company-services"
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            Usługi
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-muted">
            {company.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="company-gallery">
          <h2
            id="company-gallery"
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            Galeria
          </h2>
          <p className="mt-2 text-sm text-muted">
            Zdjęcia realizacji pojawią się w kolejnych iteracjach.
          </p>
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
          <h2
            id="company-contact"
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            Kontakt
          </h2>
          <div className="mt-4 rounded-2xl border border-black/8 bg-[#f5f5f7] p-5 dark:border-border dark:bg-surface-muted">
            <p className="text-[15px] leading-relaxed text-muted">
              Formularz i dane kontaktowe będą dostępne wkrótce.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
