import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl prose-placeholder">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Polityka prywatności
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Treść prawna placeholder — uzupełnij przed publikacją formularza z
          danymi osobowymi.
        </p>
      </Container>
    </section>
  );
}
