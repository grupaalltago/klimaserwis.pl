import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu Klimaserwis.pl.",
  path: "/polityka-prywatnosci",
});

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="Polityka prywatności"
      description="Polityka prywatności — treść w przygotowaniu."
    />
  );
}
