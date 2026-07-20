import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Poradniki HVAC: klimatyzacja, pompy ciepła i serwis.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
          Blog
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Placeholder indeksu bloga. Artykuły SEO zostaną dodane w kolejnej
          iteracji treści.
        </p>
      </Container>
    </section>
  );
}
