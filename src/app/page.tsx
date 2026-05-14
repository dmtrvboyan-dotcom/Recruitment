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


export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
    
      <Header />
      <SocialSidebar/>

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <TrustedBySection />
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <Services />
      </ScrollReveal>

      {/* Specialized Recruitment */}
      <ScrollReveal>
        <SpecializedRecruitment />
      </ScrollReveal>

      {/* Trust Metrics */}

      {/* Companies Section */}
      <ScrollReveal>
        <CompaniesSection />
      </ScrollReveal>

      {/* Smart.R Platform */}
      <ScrollReveal>
        <SmartRSection />
      </ScrollReveal>

      <ScrollReveal>
        <ExpertiseSection />
      </ScrollReveal>


      {/* FAQ Section */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* Meet the Team */}
      <ScrollReveal>
        <MeetTheTeam />
      </ScrollReveal>

    
      {/* Footer */}
      <Footer />
    </main>
  )
}
