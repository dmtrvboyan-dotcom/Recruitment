import { SectionNav } from "@/components/navigation/section-nav";
import { BenefitsSection } from "./benefits/benefits-section";
import { CTASection } from "./cta/cta-section";
import { FAQSection } from "./faq/faq-section";
import { FeaturesSection } from "./features/features-section";
import { HeroSection } from "./hero/hero-section";
import { IntegrationsSection } from "./integrations/integrations-section";
import { SecuritySection } from "./security/security-section";
import { ShowcaseSection } from "./showcase/showcase-section";
import { BackToTop } from "@/components/navigation/back-top-top";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "features", label: "Smart.R Features" },
  { id: "benefits", label: "Why Smart.R" },
  { id: "showcase", label: "See Smart.R" },
  { id: "integrations", label: "Integrations" },
  { id: "security", label: "Security & Compliance" },
  { id: "faq", label: "Smart.R FAQ" },
];



export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="benefits">
        <BenefitsSection />
      </section>

      <section id="showcase">
        <ShowcaseSection />
      </section>

      <section id="integrations">
        <IntegrationsSection />
      </section>

      <section id="security">
        <SecuritySection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <CTASection />

      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}