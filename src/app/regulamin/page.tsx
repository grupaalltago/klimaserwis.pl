import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Regulamin",
  alternates: { canonical: "/regulamin" },
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Regulamin
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Treść regulaminu placeholder — uzupełnij przed startem produkcji.
        </p>
      </Container>
    </section>
  );
}
