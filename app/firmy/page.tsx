import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Firmy",
  description:
    "Przeglądaj katalog firm HVAC w Polsce — klimatyzacja, pompy ciepła, rekuperacja i wentylacja.",
  path: "/firmy",
});

export default function FirmyPage() {
  return <PagePlaceholder title="Firmy" />;
}
