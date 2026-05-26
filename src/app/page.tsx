import dynamic from "next/dynamic"
import { Header } from "@/components/layout/header/header"
import { Footer, ScrollReveal, SocialSidebar } from "@/components/layout"
import { Hero } from "@/app/_components/hero/hero"
import { HashCleaner } from "../components/layout/hash-cleaner"
import { SectionNav } from "@/components/navigation/section-nav"
import { BackToTop } from "@/components/navigation/back-to-top"

const TrustedBySection = dynamic(() =>
  import("@/app/_components/companies-record/companies-record").then(m => m.TrustedBySection)
)
const Services = dynamic(() =>
  import("@/app/_components/services-section/services").then(m => m.Services)
)
const MeetTheTeam = dynamic(() =>
  import("@/app/_components/team-section/team").then(m => m.MeetTheTeam)
)
const SpecializedRecruitment = dynamic(() =>
  import("@/app/_components/specialized-section/specialized").then(m => m.SpecializedRecruitment)
)
const CompaniesSection = dynamic(() =>
  import("@/app/_components/companies-section/companies").then(m => m.CompaniesSection)
)
const ExpertiseSection = dynamic(() =>
  import("@/app/_components/expertise-section/expertise").then(m => m.ExpertiseSection)
)
const SmartRSection = dynamic(() =>
  import("@/app/_components/smartr-section/smartr").then(m => m.SmartRSection)
)
const FAQSection = dynamic(() =>
  import("@/app/_components/faq-section/faq").then(m => m.FAQSection)
)


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