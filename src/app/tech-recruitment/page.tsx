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

export default function SpecializedRecruitmentPage() {
  // Mirror the exact resolution used inside DeepDiveSection
  const sectionIds = TECH_CATEGORIES.map(
    (category) => SECTION_IDS[category.id] ?? category.id,
  )

  return (
    <>
      <Header />
      <SocialSidebar />
      <ScrollSpy sectionIds={sectionIds} />

      <HeroSection />
      <RolesSection />

      {TECH_CATEGORIES.map((category, index) => (
        <DeepDiveSection key={category.id} category={category} index={index} />
      ))}

      <ProcessSection />
      <FAQSection />
      <Footer />
    </>
  )
}