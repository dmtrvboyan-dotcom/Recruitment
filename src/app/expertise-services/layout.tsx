import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"
import { BackToTop } from "@/components/navigation/back-top-top"


export default function ServicesLayout({
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

            <BackToTop hideOnMobile />
        </div>
    )
}
