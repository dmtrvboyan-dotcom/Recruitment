"use client"

import { memo, useCallback } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants/footer"
import { scrollToSection } from "@/lib/utils/scroll"

const FooterLinkSection = memo(function FooterLinkSection({
  title,
  links,
  onNavigate,
}: {
  title: string
  links: { label: string; href: string }[]
  onNavigate: (href: string) => void
}) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-brand-navy">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("/") ? (
              <Link
                href={link.href}
                rel="noopener noreferrer"
                className="text-sm text-brand-navy/80 hover:text-brand-coral transition-colors cursor-pointer block font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <button
                onClick={() => onNavigate(link.href)}
                className="text-sm text-brand-navy/80 hover:text-brand-coral text-left transition-colors cursor-pointer font-medium"
              >
                {link.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
})

const SocialLinks = memo(function SocialLinks({ phoneHref }: { phoneHref: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* Mobile Phone Toggle */}
      <a
        href={phoneHref}
        aria-label="Call us"
        className="md:hidden w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center hover:bg-brand-coral/10 transition-all group"
      >
        <Phone className="w-4 h-4 text-brand-blue group-hover:text-brand-coral transition-colors" />
      </a>

      {SOCIAL_LINKS.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center hover:bg-brand-coral hover:text-white transition-all duration-300 group cursor-pointer"
            aria-label={social.label}
          >
            <IconComponent className="w-4 h-4 text-brand-navy/70 group-hover:text-inherit group-hover:scale-110 transition-transform" />
          </a>
        )
      })}
    </div>
  )
})

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, {
      highlightDuration: 1400,
      highlightColor: "rgba(255, 93, 119, 0.1)" // Subtle Brand Coral highlight
    })
  }, [])

  return (
    <footer className="relative z-10 bg-brand-bg">      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

      {/* Coral Signature Accent Line */}
      <div className="w-12 h-[2px] bg-brand-coral mb-12" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand Info Column */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block mb-8 transition-opacity hover:opacity-80">
            <img
              src="/uploaded/recr-logo.png"
              alt={COMPANY_INFO.name}
              className="h-9 w-auto"
            />
          </Link>

          <p className="text-brand-navy/80 text-sm leading-relaxed mb-8 max-w-[260px] font-medium">
            {COMPANY_INFO.description}
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {/* Location Note in Coral */}
            <p className="text-brand-navy font-bold text-[10px] uppercase tracking-[0.25em]">
              {COMPANY_INFO.location}
            </p>

            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-3 text-sm text-brand-navy/80 hover:text-brand-coral transition-colors font-semibold group"
            >
              <div className="w-9 h-9 rounded-full bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-coral group-hover:text-white transition-all duration-300">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_INFO.phoneNumber}</span>
            </a>
          </div>

          <SocialLinks phoneHref={COMPANY_INFO.phoneHref} />
        </div>

        {/* Link Sections */}
        <FooterLinkSection
          title="Services"
          links={FOOTER_LINKS.services}
          onNavigate={handleNavigate}
        />

        <FooterLinkSection
          title="Company"
          links={FOOTER_LINKS.company}
          onNavigate={handleNavigate}
        />

        <FooterLinkSection
          title="For Candidates"
          links={FOOTER_LINKS.candidates}
          onNavigate={handleNavigate}
        />
      </div>

      <Separator className="my-16 bg-brand-navy/5" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-brand-navy/70 text-[11px] font-bold uppercase tracking-wider">
          &copy; {currentYear} {COMPANY_INFO.name}. <span className="hidden sm:inline opacity-50 ml-1">Excellence in IT Recruitment.</span>
        </p>

        <div className="flex items-center gap-10">
          <Link
            href="#"
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/70 hover:text-brand-coral transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/70 hover:text-brand-coral transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
    </footer>
  )
}