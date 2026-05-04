import {  Header, SocialSidebar, Footer } from "@/components/layout"


export default function ATSLayout({
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