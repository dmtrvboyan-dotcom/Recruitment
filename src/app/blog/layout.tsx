import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "IT Recruitment Blog | Hiring Tips & Tech Salary Guides | Recruitment.bg",
  description:
    "Expert advice on IT hiring in Bulgaria — salary benchmarks, recruitment trends, ATS guides, and career tips for tech professionals and companies.",
  keywords: [
    "IT recruitment blog Bulgaria",
    "tech salary guide Bulgaria",
    "IT hiring tips Bulgaria",
    "software developer salary Bulgaria",
    "recruitment trends Bulgaria",
    "ATS software guide",
    "IT jobs advice Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "IT Recruitment Blog | Recruitment.bg",
    description:
      "Salary benchmarks, recruitment trends, ATS guides and career tips for tech companies and professionals in Bulgaria.",
    url: "https://recruitment.bg/blog",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Recruitment Blog | Recruitment.bg",
    description: "Salary benchmarks, hiring tips and tech trends for Bulgaria.",
  },
  alternates: {
    canonical: "https://recruitment.bg/blog",
  },
}

export default function CandidatesLayout({
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
