import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Recruitment Bulgaria | Hire Software Engineers, DevOps & AI | Recruitment.bg",
  description:
    "Specialist tech recruitment in Bulgaria across software engineering, DevOps, cloud, AI/ML, data, QA, mobile and engineering leadership. Hire niche IT talent in Sofia and across Europe.",
  keywords: [
    "tech recruitment Bulgaria",
    "hire software engineers Bulgaria",
    "DevOps recruitment Bulgaria",
    "AI ML recruitment Bulgaria",
    "data engineer recruitment Bulgaria",
    "QA recruitment Bulgaria",
    "mobile developer recruitment Bulgaria",
    "engineering leadership Bulgaria",
    "hire developers Sofia",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "Tech Recruitment Bulgaria | Recruitment.bg",
    description:
      "Hire engineers, DevOps, AI/ML, data and leadership talent in Bulgaria. Niche tech recruitment specialists.",
    url: "https://recruitment.bg/tech-recruitment",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Recruitment Bulgaria | Recruitment.bg",
    description:
      "Software engineers, DevOps, AI/ML and leadership recruitment in Bulgaria.",
  },
  alternates: {
    canonical: "https://recruitment.bg/tech-recruitment",
  },
}

export default function SpecializedRecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
