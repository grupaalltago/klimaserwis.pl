import type { Metadata } from "next";
import { siteConfig } from "@/lib/content/site";

type PageSeoInput = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Production page metadata: title, description, canonical, OG, Twitter.
 */
export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.name} — ${siteConfig.tagline}`
      : title;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["Polish"],
    },
  };
}
