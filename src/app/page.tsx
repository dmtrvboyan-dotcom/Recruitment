// app/page.tsx (or wherever this lives)
import { Header } from "@/components/layout/header/header"
import { Footer, ScrollReveal, SocialSidebar } from "@/components/layout"
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
import { SectionNav } from "@/components/navigation/section-nav"
import { BackToTop } from "@/components/navigation/back-to-top"


const sections = [
  { id: "hero", label: "Overview" },
  { id: "trust", label: "Our Partners" },
  { id: "services", label: "Services" },
  { id: "team", label: "Our Team" },
  { id: "specialized", label: "Tech Recruitment" },
  { id: "why", label: "Why us" },
  { id: "expertise", label: "Industry Expertise" },
  { id: "smart-r", label: "Smart-R" },
  { id: "faq", label: "FAQ" },
]

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HashCleaner />
      <Header />
      <SocialSidebar />

      <section id="hero">
        <Hero />
      </section>

      <section id="trust">
        <ScrollReveal>
          <TrustedBySection />
        </ScrollReveal>
      </section>

      <section id="services">
        <ScrollReveal>
          <Services />
        </ScrollReveal>
      </section>

      <section id="team">
        <ScrollReveal>
          <MeetTheTeam />
        </ScrollReveal>
      </section>

      <section id="specialized">
        <ScrollReveal>
          <SpecializedRecruitment />
        </ScrollReveal>
      </section>

      <section id="why">
        <ScrollReveal>
          <CompaniesSection />
        </ScrollReveal>
      </section>

      <section id="expertise">
        <ScrollReveal>
          <ExpertiseSection />
        </ScrollReveal>
      </section>

      <section id="smart-r">
        <ScrollReveal>
          <SmartRSection />
        </ScrollReveal>
      </section>

      <section id="faq">
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </section>

      <Footer />

      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}