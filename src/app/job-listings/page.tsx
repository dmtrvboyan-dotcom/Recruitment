import { HeroSection } from "./hero-section"
import { JobsSection } from "./jobs"
import { CVUploadSection } from "./cv-upload-section"
import { BackToTop } from "@/components/navigation/back-to-top"

export default function JobsListings() {
  return (
    <>
      <HeroSection />
      <JobsSection />
      <CVUploadSection />

      <BackToTop hideOnMobile />

    </>
  )
}

