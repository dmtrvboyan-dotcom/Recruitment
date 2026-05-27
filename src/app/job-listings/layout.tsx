import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "IT Jobs Bulgaria | Software Developer Jobs Sofia | Recruitment.bg",
  description:
    "Browse open IT jobs in Bulgaria — frontend, backend, DevOps, data, AI/ML and leadership roles in Sofia, Plovdiv and fully remote. Updated weekly. Free for candidates.",
  keywords: [
    "IT jobs Bulgaria",
    "software developer jobs Sofia",
    "developer jobs Bulgaria",
    "tech jobs Sofia",
    "remote IT jobs Bulgaria",
    "DevOps jobs Bulgaria",
    "backend developer jobs Sofia",
    "frontend developer jobs Bulgaria",
    "IT vacancies Bulgaria",
    "software engineer jobs Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "IT Jobs Bulgaria | Recruitment.bg",
    description:
      "Frontend, backend, DevOps, data and leadership roles in Sofia, Plovdiv and remote. Updated weekly.",
    url: "https://recruitment.bg/job-listings",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Jobs Bulgaria | Recruitment.bg",
    description:
      "Open IT roles in Sofia, Plovdiv and remote. Updated weekly. Free for candidates.",
  },
  alternates: {
    canonical: "https://recruitment.bg/job-listings",
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