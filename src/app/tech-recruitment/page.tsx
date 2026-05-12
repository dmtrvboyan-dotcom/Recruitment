import { TECH_CATEGORIES } from "@/lib/constants/specialized"
import { HeroSection } from "./_components/hero-section"
import { RolesSection } from "./_components/roles-section"
import { DeepDiveSection } from "./_components/deep-dive-section"
import { ProcessSection } from "./_components/process-section"
import { FAQSection } from "./_components/faq-section"

import { Footer, Header, SocialSidebar } from "@/components/layout"

export default function SpecializedRecruitmentPage() {
  return (
    <>
      <Header />
      <SocialSidebar />

      <HeroSection />

      <RolesSection />

      {TECH_CATEGORIES.map((category, index) => (
        <DeepDiveSection
          key={category.id}
          category={category}
          index={index}
        />
      ))}

      <ProcessSection />

      {/* 5. FAQ */}
      <FAQSection />
      <Footer />

    </>
  )
}
