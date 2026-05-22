import type { Metadata, Viewport } from "next"
import { Fira_Code, Poppins } from "next/font/google"
import "./globals.css"
import NonCriticalStyles from "./NonCriticalStyles"

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-mono',
})

export const metadata: Metadata = {
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }], // ← added for SEO
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment.bg - Executive Search & IT Headhunting",
    description: "Bulgaria's premier executive search and IT headhunting agency.",
    images: ["/og-image.jpg"], // ← added for SEO
  },
  alternates: {
    canonical: "https://recruitment.bg", // ← added for SEO
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/uploaded/recr-logo.png"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <NonCriticalStyles />
        {children}
      </body>
    </html>
  )
}