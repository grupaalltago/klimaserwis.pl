import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Poradniki",
  description:
    "Poradniki HVAC: klimatyzacja, pompy ciepła, rekuperacja i serwis — praktyczna wiedza przed wyborem firmy.",
  path: "/poradniki",
});

export default function PoradnikiPage() {
  return <PagePlaceholder title="Poradniki" />;
}
