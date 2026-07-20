import type { Metadata } from "next";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { HeroSection } from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Strona główna",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
    </>
  );
}
