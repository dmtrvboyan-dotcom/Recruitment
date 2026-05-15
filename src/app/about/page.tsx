import { About } from "./about"
import { InvestInPeople } from "./invest-in-ppl"
import { WhatYouGet } from "./what-you-get"
import { AboutCTA } from "./about-cta"
import { TeamCarousel } from "../_components/team-section/team-carousel"
import { SectionNav } from "@/components/navigation/section-nav"
import { BackToTop } from "@/components/navigation/back-top-top"

const sections = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About Us" },
  { id: "whyus", label: "Why Us" },
]


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <section id="hero">
        <About />
      </section>

      <section id="about">
        <InvestInPeople />
      </section>

      <section id="whyus">
        <WhatYouGet />
      </section>
      
      <AboutCTA />

      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}
