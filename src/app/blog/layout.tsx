import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"


export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <SocialSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
