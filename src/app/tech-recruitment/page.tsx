import { Footer, SocialSidebar } from "@/components/layout"
import { Header } from "@/components/layout/header/header"
import { TECH_CATEGORIES } from "@/lib/constants/specialized"
import { SECTION_IDS } from "./data"
import { HeroSection } from "./_components/hero-section"
import { RolesSection } from "./_components/roles-section"
import { DeepDiveSection } from "./_components/deep-dive-section"
import { ProcessSection } from "./_components/process-section"
import { FAQSection } from "./_components/faq-section"
import { ScrollSpy } from "./_components/scroll-spy"
import { SectionNav } from "@/components/navigation/section-nav"
import { BackToTop } from "@/components/navigation/back-top-top"

const sections = [
  { id: "hero",    label: "Overview" },
  { id: "roles",   label: "What we have" },
  ...TECH_CATEGORIES.map((cat) => ({
    id: SECTION_IDS[cat.id] ?? cat.id,
    label: cat.title,         
  })),
  { id: "process", label: "How it Works" },
  { id: "faq",     label: "FAQ" },
]

export default function SpecializedRecruitmentPage() {
  const sectionIds = TECH_CATEGORIES.map(
    (cat) => SECTION_IDS[cat.id] ?? cat.id,
  )

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <SocialSidebar />
      <ScrollSpy sectionIds={sectionIds} />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="roles">
        <RolesSection />
      </section>

      {TECH_CATEGORIES.map((category, index) => (
        <DeepDiveSection key={category.id} category={category} index={index} />
      ))}

      <section id="process">
        <ProcessSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <Footer />

      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}