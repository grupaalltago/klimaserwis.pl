import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Regulamin",
  description: "Regulamin korzystania z serwisu Klimaserwis.pl.",
  path: "/regulamin",
});

export default function TermsPage() {
  return (
    <PagePlaceholder
      title="Regulamin"
      description="Regulamin — treść w przygotowaniu."
    />
  );
}
