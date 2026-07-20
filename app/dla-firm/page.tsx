import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Dla firm",
  description:
    "Dodaj firmę HVAC do Klimaserwis.pl i zdobywaj nowych klientów z katalogu ogólnopolskiego.",
  path: "/dla-firm",
});

export default function DlaFirmPage() {
  return <PagePlaceholder title="Dla firm" />;
}
