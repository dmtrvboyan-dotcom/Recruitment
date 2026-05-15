import { TalentNetworkHero } from "./talent-hero"
import { HowItWorks } from "./how-it-works"
import { ApplicationForm } from "./application-form"
import { Faq } from "./faq"
import { FinalCta } from "./final-cta"
import { HashCleaner } from "@/components/layout/hash-cleaner"
import { Header, SocialSidebar } from "@/components/layout"
import { Footer } from "react-day-picker"
import { BackToTop } from "@/components/navigation/back-to-top"

export default function TalentNetworkPage() {
  return (
    <main className="bg-brand-white">

      <HashCleaner />
      <Header />
      <SocialSidebar />

      <TalentNetworkHero />
      <HowItWorks />
      <ApplicationForm />
      <Faq />
      <FinalCta />
      <Footer />

      <BackToTop hideOnMobile />

    </main>
  )
}


