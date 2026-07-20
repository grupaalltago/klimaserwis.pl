import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wentylacja",
  description:
    "Firmy specjalizujące się w wentylacji mechanicznej dla domów i lokali.",
  path: "/wentylacja",
});

export default function WentylacjaPage() {
  return <PagePlaceholder title="Wentylacja" />;
}
