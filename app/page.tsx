import type { Metadata } from "next";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { LatestCompaniesSection } from "@/components/home/LatestCompaniesSection";

export const metadata: Metadata = {
  title: "Strona główna",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <HowItWorksSection />
      <LatestCompaniesSection />
      <LatestArticlesSection />
      <CtaSection />
    </>
  );
}
