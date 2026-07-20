import type { Metadata } from "next";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { LatestCompaniesSection } from "@/components/home/LatestCompaniesSection";
import { siteConfig } from "@/lib/content/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

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
