import type { Metadata } from "next"
import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export const metadata: Metadata = {
  title: "Terms & Conditions | Recruitment.bg",
  description:
    "The terms governing the use of the Recruitment.bg website and our IT recruitment and staffing services in Bulgaria.",
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Terms & Conditions | Recruitment.bg",
    description:
      "The terms governing the use of the Recruitment.bg website and our recruitment services.",
    url: "https://recruitment.bg/terms-conditions",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  alternates: { canonical: "https://recruitment.bg/terms-conditions" },
  robots: { index: true, follow: true },
}

export default function TermsConditionsLayout({
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
