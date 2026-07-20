import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z zespołem Klimaserwis.pl — pytania o katalog, współpracę i dodanie firmy.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return <PagePlaceholder title="Kontakt" />;
}
