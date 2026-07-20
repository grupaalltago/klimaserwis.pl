import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Katalog firm HVAC",
  description:
    "Przeglądaj katalog firm HVAC — klimatyzacja, pompy ciepła, wentylacja i serwis.",
  alternates: { canonical: "/katalog" },
};

export default function KatalogPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Katalog firm HVAC
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Placeholder strony wyszukiwania. Lista firm i filtry pojawią się w
          kolejnym etapie MVP — bez bazy danych w tej iteracji.
        </p>
      </Container>
    </section>
  );
}
