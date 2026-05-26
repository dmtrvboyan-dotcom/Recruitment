import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"
import { HashCleaner } from "../../components/layout/hash-cleaner"

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <HashCleaner />
      <Header />
      <SocialSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
