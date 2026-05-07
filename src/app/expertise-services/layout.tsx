import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SocialSidebar } from "@/components/layout/social-sidebar"
import { PageBackground } from "@/components/layout"

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen">
            {/* <DynamicBackground /> */}
            <Header />
            <SocialSidebar />
            {/* <PageBackground /> */}
            <main>{children}</main>
            <Footer />
        </div>
    )
}
