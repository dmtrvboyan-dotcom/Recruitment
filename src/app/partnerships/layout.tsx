import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "Clients & Partnerships | IT Hiring Partners Bulgaria | Recruitment.bg",
  description:
    "Trusted by 30+ tech companies in Bulgaria and Europe — from early-stage startups to established enterprises. See who we've built engineering teams for.",
  keywords: [
    "IT recruitment clients Bulgaria",
    "tech companies hiring Bulgaria",
    "recruitment partnerships Sofia",
    "IT hiring partners Bulgaria",
    "software company recruitment Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Clients & Partnerships | Recruitment.bg",
    description:
      "Trusted by 30+ tech companies. From startups to enterprises — we build engineering teams across Bulgaria and Europe.",
    url: "https://recruitment.bg/partnerships",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients & Partnerships | Recruitment.bg",
    description: "Trusted by 30+ tech companies across Bulgaria and Europe.",
  },
  alternates: {
    canonical: "https://recruitment.bg/partnerships",
  },
}

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <Header />
      <SocialSidebar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}