import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Wyślij zapytanie",
  description:
    "Wyślij zapytanie o klimatyzację, pompę ciepła lub serwis HVAC — bez konta.",
  alternates: { canonical: "/kontakt" },
  robots: { index: true, follow: true },
};

export default function KontaktPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Wyślij zapytanie
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Placeholder formularza leadowego. W tej iteracji nie podłączamy API —
          sama nawigacja i struktura strony są gotowe pod kolejny krok.
        </p>
      </Container>
    </section>
  );
}
