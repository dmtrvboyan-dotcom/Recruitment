import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Technical Specialized IT Recruitment | Hire Engineers, DevOps, AI & More",
  description:
    "Specialist IT recruitment across software engineering, DevOps, AI/ML, data, QA, mobile, design, and engineering leadership. Hire niche tech talent in 3–10 days.",
}

export default function SpecializedRecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
