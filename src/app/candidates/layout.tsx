import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"
import { HashCleaner } from "../../components/layout/hash-cleaner"

export const metadata: Metadata = {
  title: "Find IT Jobs in Bulgaria | For Tech Candidates | Recruitment.bg",
  description:
    "Looking for a tech job in Bulgaria? We match software engineers, DevOps, data scientists and tech leaders with top companies. Free for candidates. 100% confidential.",
  keywords: [
    "find IT job Bulgaria",
    "tech jobs Bulgaria candidates",
    "software engineer job search Bulgaria",
    "IT career Bulgaria",
    "find developer job Sofia",
    "tech recruitment for candidates Bulgaria",
    "IT job placement Bulgaria",
    "freelance IT work Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Find IT Jobs in Bulgaria | Recruitment.bg",
    description:
      "We match tech professionals with top companies in Bulgaria. Free, confidential, dedicated recruiter assigned to your search.",
    url: "https://recruitment.bg/candidates",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find IT Jobs in Bulgaria | Recruitment.bg",
    description: "Free, confidential job search for tech professionals in Bulgaria.",
  },
  alternates: {
    canonical: "https://recruitment.bg/candidates",
  },
}

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <HashCleaner />
      <Header />
      <SocialSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
