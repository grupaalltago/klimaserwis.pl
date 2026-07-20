import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Strona główna",
};

export default function HomePage() {
  return (
    <PagePlaceholder
      title="Klimaserwis.pl"
      description="Szkielet aplikacji Next.js 15 — kolejne sekcje produktu pojawią się w następnych iteracjach."
    />
  );
}
