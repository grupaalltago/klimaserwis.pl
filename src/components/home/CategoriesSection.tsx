import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { serviceCategories } from "@/content/categories";

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="categories-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Kategorie
          </p>
          <h2
            id="categories-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Wybierz zakres usług HVAC
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Placeholder kategorii startowych — pełne wyniki katalogu pojawią się
            w kolejnych iteracjach produktu.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, index) => (
            <li key={category.id}>
              <Link
                href={category.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm shadow-brand-950/5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="font-display text-lg font-semibold text-ink group-hover:text-brand-800">
                  {category.name}
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {category.description}
                </span>
                <span className="mt-5 text-sm font-semibold text-brand-700">
                  Zobacz firmy →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
