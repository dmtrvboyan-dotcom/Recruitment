import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"


export const atsMetadata: Metadata = {
  title: "Smart.R | AI-Powered Applicant Tracking System | Recruitment.bg",
  description:
    "Smart.R is an AI-powered ATS built by recruiters, for recruiters. Streamline your hiring process with intelligent candidate matching, visual pipelines, and powerful analytics. Reduce time-to-hire by 50%.",
  keywords: [
    "applicant tracking system",
    "ATS software",
    "recruitment software",
    "hiring software",
    "AI recruitment",
    "candidate management",
    "recruitment CRM",
    "HR software",
    "talent acquisition software",
    "hiring platform",
    "recruitment automation",
    "AI ATS",
    "smart recruitment",
    "Bulgaria ATS",
    "European recruitment software",
    "HR tech",
    "hiring pipeline",
    "candidate tracking",
    "recruitment analytics",
    "team hiring software",
  ],
  openGraph: {
    title: "Smart.R | AI-Powered Applicant Tracking System",
    description:
      "Built by recruiters, for recruiters. Streamline your hiring with AI-powered candidate matching and visual pipelines.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
    url: "https://recruitment.bg/applicant-tracking-system",
    images: [
      {
        url: "/images/smartr-og.png",
        width: 1200,
        height: 630,
        alt: "Smart.R Applicant Tracking System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart.R | AI-Powered Applicant Tracking System",
    description:
      "Built by recruiters, for recruiters. Streamline your hiring with AI-powered candidate matching.",
    images: ["/images/smartr-og.png"],
  },
  alternates: {
    canonical: "https://recruitment.bg/applicant-tracking-system",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ============================================================================
// JSON-LD Structured Data
// ============================================================================

export const atsJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Smart.R",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered Applicant Tracking System built by recruiters, for recruiters. Streamline your hiring process with intelligent candidate matching, visual pipelines, and powerful analytics.",
  url: "https://recruitment.bg/applicant-tracking-system",
  provider: {
    "@type": "Organization",
    name: "Recruitment.bg",
    url: "https://recruitment.bg",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Free trial available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-Powered Candidate Matching",
    "Visual Hiring Pipeline",
    "Automated Screening",
    "Team Collaboration",
    "Analytics & Reporting",
    "Multi-language Support",
    "GDPR Compliance",
    "API Integrations",
  ],
}

export const atsBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://recruitment.bg",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Smart.R ATS",
      item: "https://recruitment.bg/applicant-tracking-system",
    },
  ],
}

