import { About } from "./about"
import { InvestInPeople } from "./invest-in-ppl"
import { WhatYouGet } from "./what-you-get"
import { AboutCTA } from "./about-cta"
import { TeamCarousel } from "../_components/team-section/team-carousel"

export default function Page() {
  return (
    <>
      <About />
      <InvestInPeople />
      {/* <TeamCarousel showQuote={false} /> */}
      <WhatYouGet />
      <AboutCTA />
    </>
  )
}
