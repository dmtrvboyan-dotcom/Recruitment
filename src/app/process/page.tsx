import { ProcessHero } from "./process-hero"
import { ProcessTimeline } from "./process-timeline"
import { WhyUs } from "./why-us"
import { ProcessCTA } from "./process.cta"
import { BackToTop } from "@/components/navigation/back-to-top"
import { ProcessSchema } from '../schema'

export default function Page() {
  return (
    <>

      <ProcessSchema />

      <ProcessHero />
      <ProcessTimeline />
      <WhyUs />
      <ProcessCTA />

      <BackToTop hideOnMobile />
    </>
  )
}
