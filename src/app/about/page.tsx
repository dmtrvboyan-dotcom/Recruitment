import { About } from "./about"
import { InvestInPeople } from "./invest-in-ppl"
import { WhatYouGet } from "./what-you-get"
import { AboutCTA } from "./about-cta"
import { TeamCarousel } from "../_components/team-section/team-carousel"
import { BackToTop } from "@/components/navigation/back-top-top"

const sections = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About Us" },
  { id: "whyus", label: "Why Us" },
]


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <About />
      <InvestInPeople />
      <WhatYouGet />
      <AboutCTA />

      <BackToTop hideOnMobile />
    </main>
  )
}
