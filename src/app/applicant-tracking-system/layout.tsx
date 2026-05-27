import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "Smart.R ATS | Applicant Tracking System for Recruiters | Recruitment.bg",
  description:
    "Smart.R is an AI-powered applicant tracking system built for modern recruitment teams. Automate workflows, track candidates, collaborate and hire faster. GDPR compliant. Available in BG, EN, DE, ES, RU.",
  keywords: [
    "applicant tracking system Bulgaria",
    "ATS software Bulgaria",
    "recruitment software Bulgaria",
    "Smart.R ATS",
    "HR software Bulgaria",
    "recruitment CRM Bulgaria",
    "ATS for recruiters",
    "hiring software Bulgaria",
    "candidate tracking software",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Smart.R ATS | Applicant Tracking System | Recruitment.bg",
    description:
      "AI-powered ATS for modern recruiters. Automate workflows, track candidates and hire faster. GDPR compliant.",
    url: "https://recruitment.bg/applicant-tracking-system",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart.R ATS | Recruitment.bg",
    description:
      "AI-powered applicant tracking system. GDPR compliant. Available in BG, EN, DE, ES, RU.",
  },
  alternates: {
    canonical: "https://recruitment.bg/applicant-tracking-system",
  },
}

export default function ATSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <SocialSidebar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}