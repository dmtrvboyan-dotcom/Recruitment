import { ProcessHero } from "./process-hero"
import { ProcessTimeline } from "./process-timeline"
import { WhyUs } from "./why-us"
import { ProcessCTA } from "./process.cta"

export default function Page() {
  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <WhyUs />
      <ProcessCTA />
    </>
  )
}
