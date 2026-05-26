"use client"

import { memo } from "react"
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants/footer"


interface SocialLinkProps {
  href: string
  label: string
  icon: typeof Linkedin
  size?: number
  wrapperClass?: string
}

const SocialLink = memo(function SocialLink({
  href,
  label,
  icon: Icon,
  size = 22,
  wrapperClass,
}: SocialLinkProps) {
  const isMailto = href.startsWith("mailto:")
  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "text-[#085689] transition-colors duration-200",
        "hover:bg-[#085689]/5 hover:text-[#78B6D9]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#085689]/40",
        wrapperClass ?? "h-10 w-10",
      )}
    >
      <Icon size={size} aria-hidden />
    </a>
  )
})


export function SocialSidebar() {
  return (
    <aside
      aria-label="Brand and social links"
      className="hidden lg:flex fixed left-6 top-1/2 z-30 -translate-y-1/2 flex-col items-center gap-2"
    >
      <SocialLink
        href={COMPANY_INFO.linkedinUrl}
        label="LinkedIn"
        icon={Linkedin}
      />
      <SocialLink
        href={COMPANY_INFO.instagramUrl}
        label="Instagram"
        icon={Instagram}
      />
      <SocialLink
        href={COMPANY_INFO.facebookUrl}
        label="Facebook"
        icon={Facebook}
      />
      <SocialLink
        href={`mailto:${COMPANY_INFO.email}`}
        label="Email"
        icon={Mail}
      />
     
    </aside>
  )
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <SocialLink
        href={COMPANY_INFO.linkedinUrl}
        label="LinkedIn"
        icon={Linkedin}
        size={18}
        wrapperClass="h-9 w-9"
      />
      <SocialLink
        href={COMPANY_INFO.instagramUrl}
        label="Instagram"
        icon={Instagram}
        size={18}
        wrapperClass="h-9 w-9"
      />
      <SocialLink
        href={COMPANY_INFO.facebookUrl}
        label="Facebook"
        icon={Facebook}
        size={18}
        wrapperClass="h-9 w-9"
      />
      <SocialLink
        href={`mailto:${COMPANY_INFO.email}`}
        label="Email"
        icon={Mail}
        size={18}
        wrapperClass="h-9 w-9"
      />
    </div>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}
