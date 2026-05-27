import type { Metadata } from 'next'
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "Contact Us | IT Recruitment Agency Sofia | Recruitment.bg",
  description:
    "Get in touch with Recruitment.bg — Bulgaria's leading IT recruitment agency. Call, email, or book a free 30-minute intro call. Response within 24 hours. Sofia, Bulgaria.",
  keywords: [
    "contact IT recruitment Bulgaria",
    "recruitment agency Sofia contact",
    "hire developers Sofia",
    "IT recruitment consultation Bulgaria",
    "book recruitment call Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Contact Us | Recruitment.bg",
    description:
      "Book a free 30-min intro call with Bulgaria's leading IT recruitment agency. Response within 24 hours.",
    url: "https://recruitment.bg/contacts",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Recruitment.bg",
    description: "Book a free 30-min intro call. Response within 24 hours.",
  },
  alternates: {
    canonical: "https://recruitment.bg/contacts",
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