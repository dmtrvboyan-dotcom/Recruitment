import { HeroSection } from "./hero-section"
import { JobsSection } from "./jobs"
import { CVUploadSection } from "./cv-upload-section"
import { OpenQuestionsSection } from "./open-questions-section"

export default function JobsListings() {
  return (
    <>
      <HeroSection />
      <JobsSection />
      <CVUploadSection />
      <OpenQuestionsSection />
    </>
  )
}
