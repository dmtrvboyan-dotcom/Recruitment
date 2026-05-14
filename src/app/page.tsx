import { Suspense } from "react"

import { Header } from "@/components/layout/header/header"

import {
  Footer,
  ScrollReveal,
  SocialSidebar,
} from "@/components/layout"

import {
  Hero,
  Services,
  SpecializedRecruitment,
  TrustedBySection,
  CompaniesSection,
  SmartRSection,
  FAQSection,
  MeetTheTeam,
  ExpertiseSection,
} from "@/app/_components"
import { HashCleaner } from "../components/layout/hash-cleaner"


export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HashCleaner />

      <Header />
      <SocialSidebar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <TrustedBySection />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <SpecializedRecruitment />
      </ScrollReveal>

      <ScrollReveal>
        <CompaniesSection />
      </ScrollReveal>

      <ScrollReveal>
        <MeetTheTeam />
      </ScrollReveal>

      <ScrollReveal>
        <ExpertiseSection />
      </ScrollReveal>

      <ScrollReveal>
        <SmartRSection />
      </ScrollReveal>

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      <Footer />
    </main>
  )
}
