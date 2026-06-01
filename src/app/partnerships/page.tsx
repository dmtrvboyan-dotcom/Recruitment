import { PartnersHero } from "./partners-hero"
import { PartnersGrid } from "./partners-grid"
import { HowItWorks } from "./how-it-works"
import { WhyChooseUs } from "./why-choose-us"
import { ClientsCTA } from "./client-cta"
import { Testimonials } from "./testimonials"
import { BackToTop } from "@/components/navigation/back-to-top"
import { SectionNav } from "@/components/navigation/section-nav"
import { HashCleaner } from "../../components/layout/hash-cleaner"

const sections = [
  { id: "hero", label: "Overview" },
  { id: "partners", label: "Our Partners" },
  { id: "tetimonials", label: "See What They Say" },
  { id: "process", label: "How it Works" },
  { id: "whyus", label: "Why They Choose Us" },
]

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <HashCleaner />
      HashClearn


      <section id="hero">
        <PartnersHero />
      </section>

      <section id="partners">
        <PartnersGrid />
      </section>

      <section id="tetimonials">
        <Testimonials />
      </section>

      <section id="process">
        <HowItWorks />
      </section>

      <section id="whyus">
        <WhyChooseUs />
      </section>

      <ClientsCTA />

      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}

