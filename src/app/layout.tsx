import type { Metadata, Viewport } from "next"
import { Fira_Code, Poppins } from "next/font/google"
import "./globals.css"
import { LocalBusinessSchema, OrganizationSchema } from "./schema"

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
    google: 'x17AHWY5n5BIYrURpsxjSb-bItOjBV12WZzUsXngxtc',  
  },
  title: "IT Recruitment Agency Bulgaria | Hire Tech Talent | Recruitment.bg",
  description:
    "Bulgaria's #1 IT recruitment agency. We place software engineers, DevOps, AI/ML, and tech leaders for companies in Sofia, Plovdiv and across Europe. 15+ years experience. First candidates in 2–10 days.",
  keywords: [
    "IT recruitment Bulgaria",
    "IT agency Bulgaria",
    "hire developers Bulgaria",
    "tech recruitment Sofia",
    "software engineer recruitment Bulgaria",
    "IT headhunting Bulgaria",
    "recruitment agency Sofia",
    "hire tech talent Bulgaria",
    "IT jobs Bulgaria",
    "executive search Bulgaria",
  ],
  authors: [{ name: "Recruitment.bg" }],
  openGraph: {
    title: "IT Recruitment Agency Bulgaria | Recruitment.bg",
    description:
      "Bulgaria's #1 IT recruitment agency. Software engineers, DevOps, AI/ML, and tech leaders placed in 2–10 days. 15+ years experience.",
    url: "https://recruitment.bg",
    siteName: "Recruitment.bg",
    type: "website",
    locale: "en_BG",
    images: [
      {
        url: "https://recruitment.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recruitment.bg — IT Recruitment Agency Bulgaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Recruitment Agency Bulgaria | Recruitment.bg",
    description:
      "Bulgaria's #1 IT recruitment agency. First candidates in 2–10 days.",
    images: ["https://recruitment.bg/og-image.jpg"],
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
        <OrganizationSchema />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  )
}