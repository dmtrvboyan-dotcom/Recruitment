import { About } from "./about"
import { InvestInPeople } from "./invest-in-ppl"
import { WhatYouGet } from "./what-you-get"
import { AboutCTA } from "./about-cta"
import { BackToTop } from "@/components/navigation/back-to-top"


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
