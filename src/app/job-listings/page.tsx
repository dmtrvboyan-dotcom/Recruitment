import { HeroSection } from "./hero-section"
import { JobsSection } from "./jobs"
import { CVUploadSection } from "./cv-upload-section"
import { BackToTop } from "@/components/navigation/back-to-top"
import { JobListingsSchema } from "../schema";

export default function JobsListings() {
  return (
    <>
      <JobListingsSchema />
      
      <HeroSection />
      <JobsSection />
      <CVUploadSection />

      <BackToTop hideOnMobile />

    </>
  )
}

