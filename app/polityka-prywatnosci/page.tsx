import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="Privacy"
      description="Polityka prywatności — treść w przygotowaniu."
    />
  );
}
