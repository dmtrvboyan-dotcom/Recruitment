import { SocialSidebar, Footer, Breadcrumb } from "@/components/layout"
import { Header } from "@/components/layout/header/header"



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
