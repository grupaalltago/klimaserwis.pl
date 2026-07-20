import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Rekuperacja",
  description:
    "Znajdź wykonawców systemów rekuperacji i wentylacji z odzyskiem ciepła.",
  path: "/rekuperacja",
});

export default function RekuperacjaPage() {
  return <PagePlaceholder title="Rekuperacja" />;
}
