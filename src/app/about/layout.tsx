import type { Metadata } from 'next'
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"


export const metadata: Metadata = {
  title: "About Us | IT Recruitment Team Bulgaria | Recruitment.bg",
  description:
    "Meet the team behind Recruitment.bg — 15 specialist IT recruiters with 15+ years of experience placing tech talent across Bulgaria and Europe. People-first, results-driven.",
  keywords: [
    "IT recruitment team Bulgaria",
    "recruitment agency Sofia team",
    "about Recruitment.bg",
    "IT recruiters Bulgaria",
    "tech recruitment specialists Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "About Us | IT Recruitment Team Bulgaria | Recruitment.bg",
    description:
      "15 specialist IT recruiters. 15+ years placing tech talent across Bulgaria and Europe. People-first, results-driven.",
    url: "https://recruitment.bg/about",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Recruitment.bg",
    description:
      "15 specialist IT recruiters. 15+ years placing tech talent across Bulgaria and Europe.",
  },
  alternates: {
    canonical: "https://recruitment.bg/about",
  },
}

export default function AboutLayout({
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