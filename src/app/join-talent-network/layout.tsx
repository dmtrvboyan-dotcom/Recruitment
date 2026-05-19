import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Our Talent Network - Get Matched with Top Companies",
  description:
    "Join our IT talent network and get matched with top companies hiring remote, freelance, contract, and full-time tech talent. Free for candidates. Reviewed within 48 hours.",
  openGraph: {
    title: "Join Our Talent Network",
    description:
      "Get matched with top companies hiring remote, freelance, contract, and full-time talent.",
    type: "website",
  },
}

export default function TalentNetworkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
