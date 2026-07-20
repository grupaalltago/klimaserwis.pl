import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Klimatyzacja",
  description:
    "Znajdź firmy zajmujące się montażem i serwisem klimatyzacji w Twoim mieście.",
  path: "/klimatyzacja",
});

export default function KlimatyzacjaPage() {
  return <PagePlaceholder title="Klimatyzacja" />;
}
