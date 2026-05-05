import {  Header, SocialSidebar, Footer } from "@/components/layout"

export default function ProcessLayout({
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