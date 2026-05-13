import type { Metadata } from "next"
import { PartnersHero } from "./partners-hero"
import { PartnersGrid } from "./partners-grid"
import { HowItWorks } from "./how-it-works"
import { WhyChooseUs } from "./why-choose-us"
import { ClientsCTA } from "./client-cta"
import { Testimonials } from "./testimonials"

export const metadata: Metadata = {
  title: "Clients & Partnerships | Recruitment.bg",
  description:
    "We partner with fast-growing startups, scale-ups, and established international businesses to hire top tech talent across Bulgaria and Europe.",
}

export default function ClientsPage() {
  return (
    <main className="flex flex-col w-full">
      <PartnersHero />
      <PartnersGrid />
      <HowItWorks /> 
      <Testimonials />
      <WhyChooseUs />
      <ClientsCTA />
    </main>
  )
}
