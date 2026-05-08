import {  Header, SocialSidebar, Footer, Breadcrumb } from "@/components/layout"


export default function ClientsLayout({
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