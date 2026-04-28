import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
// import DynamicBackground from "@/components/common/dynamic-background"
import { SocialSidebar } from "@/components/common/social-sidebar"

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {/* <DynamicBackground /> */}
      <Header />
      <SocialSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
