import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pompy ciepła",
  description:
    "Katalog firm instalujących pompy ciepła — dobór, montaż i wsparcie posprzedażowe.",
  path: "/pompy-ciepla",
});

export default function PompyCieplaPage() {
  return <PagePlaceholder title="Pompy ciepła" />;
}
