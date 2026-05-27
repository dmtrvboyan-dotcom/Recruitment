import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Our IT Talent Network Bulgaria | Freelance & Contract Roles | Recruitment.bg",
  description:
    "Register as a freelance or contract IT professional in Bulgaria. Get matched with top companies hiring remote, hybrid and on-site tech talent. Free, confidential, reviewed within 48 hours.",
  keywords: [
    "IT talent network Bulgaria",
    "freelance IT Bulgaria",
    "contract developer network Bulgaria",
    "register IT professional Bulgaria",
    "B2B IT consultant Bulgaria",
    "remote developer opportunities Bulgaria",
    "join talent network Sofia",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Join Our IT Talent Network | Recruitment.bg",
    description:
      "Register as freelance or contract IT professional in Bulgaria. Matched with top companies. Free and confidential.",
    url: "https://recruitment.bg/join-talent-network",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our IT Talent Network | Recruitment.bg",
    description:
      "Freelance and contract IT roles in Bulgaria. Free to join. Reviewed within 48 hours.",
  },
  alternates: {
    canonical: "https://recruitment.bg/join-talent-network",
  },
}
export default function TalentNetworkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
