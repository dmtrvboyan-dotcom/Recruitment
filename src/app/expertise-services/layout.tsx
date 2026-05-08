import {  Header, SocialSidebar, Footer, Breadcrumb } from "@/components/layout"


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
