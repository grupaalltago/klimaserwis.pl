import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Polityka cookies",
  description: "Polityka plików cookies serwisu Klimaserwis.pl.",
  path: "/polityka-cookies",
});

export default function CookiePolicyPage() {
  return (
    <PagePlaceholder
      title="Cookie Policy"
      description="Polityka cookies — treść w przygotowaniu."
    />
  );
}
