import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <PagePlaceholder
      title="Cookie Policy"
      description="Polityka cookies — treść w przygotowaniu."
    />
  );
}
