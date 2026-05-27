import type { Metadata } from 'next'
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "Our Recruitment Process | How We Hire IT Talent | Recruitment.bg",
  description:
    "See how Recruitment.bg finds and places top IT talent in Bulgaria. Our 6-phase process covers briefing, targeted search, curated shortlist, interviews and offer — first candidates in 2–10 days.",
  keywords: [
    "IT recruitment process Bulgaria",
    "how to hire developers Bulgaria",
    "tech talent acquisition process",
    "recruitment process Sofia",
    "IT hiring process Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Our Recruitment Process | Recruitment.bg",
    description:
      "6-phase IT recruitment process. From brief to signed offer — first candidates in 2–10 days.",
    url: "https://recruitment.bg/process",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Recruitment Process | Recruitment.bg",
    description: "6-phase process. First candidates in 2–10 days.",
  },
  alternates: {
    canonical: "https://recruitment.bg/process",
  },
}

export default function ProcessLayout({
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