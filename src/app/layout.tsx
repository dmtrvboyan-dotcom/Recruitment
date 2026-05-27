import type { Metadata, Viewport } from "next"
import { Fira_Code, Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
  adjustFontFallback: false,
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
  variable: "--font-fira-code",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  verification: {
    google: 'x17AHWY5n5BIYrURpsxjSb-bItOjBV12WZzUsXngxtc',  // paste your code here
  },
  title: "IT Recruitment Agency in Bulgaria & Executive Headhunting",
  description:
    "Bulgaria's premier executive search and IT headhunting agency. We connect top talent with leading companies through personalized recruitment solutions.",
  keywords: [
    "recruitment", "bulgaria", "headhunting", "executive search",
    "IT recruitment", "tech talent", "HR consulting",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "IT Recruitment Agency in Bulgaria & Executive Headhunting",
    description: "Bulgaria's premier executive search and IT headhunting agency.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment.bg - Executive Search & IT Headhunting",
    description: "Bulgaria's Premier Executive Search and IT Recruit Agency.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://recruitment.bg",
  },

}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className={`${firaCode.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}