import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <PagePlaceholder
      title="Terms"
      description="Regulamin — treść w przygotowaniu."
    />
  );
}
