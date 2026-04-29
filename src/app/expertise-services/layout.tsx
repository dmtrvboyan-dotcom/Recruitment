import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
// import DynamicBackground from "@/components/common/dynamic-background"
import { SocialSidebar } from "@/components/layout/social-sidebar"

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
            <main>{children}</main>
            <Footer />
        </div>
    )
}
