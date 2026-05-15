"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import { SocialSidebar, Footer } from "@/components/layout"
import { Header } from "@/components/layout/header/header"

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
      }
    >
      <div className="relative min-h-screen">
        <Header />
        <SocialSidebar />

        <main>{children}</main>

        <Footer />
      </div>
    </GoogleReCaptchaProvider>
  )
}