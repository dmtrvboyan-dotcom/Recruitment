import { BackToTop } from "@/components/navigation/back-to-top"
import { Contact } from "./contact"
import { ContactPageSchema } from "../schema";

export default function ContactUs() {
  return (
    <>
      <ContactPageSchema />
      <Contact />
      <BackToTop hideOnMobile />

    </>
  )
}
