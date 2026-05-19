"use client"

import { useState } from "react"
import { Phone, Clock, Linkedin, Facebook, UserRound } from "lucide-react"
import { ContactForm } from "./contact-form"
import { TabButton } from "./tab-button"
import { BookACall } from "./book-a-call"

type TabType = "candidate" | "company"

const TABS: { label: string; value: TabType }[] = [
  { label: "Company", value: "company" },
  { label: "Candidate", value: "candidate" },
]

const CONTACT_METHODS = [
  {
    icon: Linkedin,
    label: "Chat to Us",
    value: "Recruitment.bg",
    href: "https://www.linkedin.com/company/recruitment-bg/?originalSubdomain=bg",
    hint: "Reply within 24h",
    external: true,
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+359 876 449 229",
    href: "tel:+359876449229",
    hint: "Mon–Fri, 9–18 EET",
    external: false,
  },
  {
    icon: UserRound,
    label: "Reach our CEO",
    value: "Veselin Raykov",
    href: "https://www.linkedin.com/in/veselinraykovhr/",
    hint: "Direct line to leadership",
    external: true,
  },
]

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/recruitment-bg/?originalSubdomain=bg",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
  },
]

export function Contact() {
  const [activeTab, setActiveTab] = useState<TabType>("company")

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-white mt-20"
    >
      {/* ─── BACKGROUND ATMOSPHERE ────────────────────────── */}

      {/* Coral glow - top center on mobile, top-left on desktop */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      {/* Teal glow - middle right, hidden on small screens */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      {/* Secondary coral glow - top right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-coral/10 blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/4"
      />

      {/* Secondary teal glow - bottom left */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-teal/8 blur-[140px] pointer-events-none translate-y-1/3 -translate-x-1/4"
      />

      {/* Grain overlay for texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <header className="max-w-3xl mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-brand-coral font-semibold">
              Contact
            </span>
            <span className="block flex-1 h-px bg-gradient-to-r from-brand-coral/40 to-transparent max-w-[140px]" />
          </div>

          <h1 className="font-black text-brand-navy leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
              Let&apos;s start
            </span>
            <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
              a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-teal">
                  conversation
                </span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-[6px] sm:h-[10px] bg-brand-coral/30 -z-0"
                />
              </span>
              .
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-xl">
            Whether you&apos;re scaling a tech team or hunting for your next
            challenge - our senior partners are listening. Real humans.
            Sharp questions. Honest answers.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* LEFT RAIL - Contact methods + meta */}
          <aside className="lg:col-span-4 lg:order-1 order-2">
            <div className="lg:sticky lg:top-24 space-y-10">

              {/* Contact cards */}
              <div className="space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-navy/40 font-semibold mb-5">
                  Reach Us
                </p>
                <BookACall />

                <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10 mt-8">
                  {CONTACT_METHODS.map(({ icon: Icon, label, value, href, hint, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="group flex items-start gap-4 py-5 hover:pl-2 transition-all duration-300"
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300">
                          <Icon className="w-4 h-4" strokeWidth={1.75} />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[10px] tracking-[0.2em] uppercase text-brand-navy/50 mb-1">
                            {label}
                          </span>
                          <span className="block text-brand-navy font-semibold text-base truncate group-hover:text-brand-teal transition-colors">
                            {value}
                          </span>
                          <span className="block text-xs text-brand-navy/40 mt-1">
                            {hint}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="self-center text-brand-navy/30 group-hover:text-brand-coral group-hover:translate-x-1 transition-all duration-300"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-brand-white text-white p-7 rounded-2xl overflow-hidden">
                <div
                  aria-hidden
                  className=" -top-8 -right-8 rounded-full bg-brand-coral/20 border-3 border-brand-navy blur-2xl"
                />
                <Clock className="w-5 h-5 text-brand-coral mb-4" strokeWidth={1.75} />
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-coral/80 mb-2">
                  Response Time
                </p>
                <p className="text-xl text-brand-navy font-bold leading-tight">
                  Under 24 hours
                </p>
                <p className="text-sm text-NAVY/60 mt-3 text-brand-navy/50 leading-relaxed">
                  A partner will be in touch.
                </p>
              </div>
              <div className="  pt-10 border-t border-brand-navy/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-coral font-semibold mb-2">
                      Follow us
                    </p>
                    <p className="text-brand-navy/60 text-sm max-w-md">
                      Stay close - insights, open roles, and behind-the-scenes from our team.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (

                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group relative w-12 h-12 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 transition-transform group-hover:scale-110" strokeWidth={1.75} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT - Form */}
          <div className="lg:col-span-8 lg:order-2 order-1">
            <div className="relative">
              <div className="relative bg-white border border-brand-navy/8 rounded-[1.75rem] sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(26,26,46,0.12)] overflow-hidden">

                {/* Top bar with tabs */}
                <div className="bg-brand-navy text-white px-6 sm:px-10 pt-7 pb-6">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-brand-coral font-semibold">
                      Tell us about you
                    </span>
                    <span className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">
                      <span className="block w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Pill tabs */}
                  <div className="inline-flex w-full sm:w-auto rounded-full bg-white/8 p-1 backdrop-blur-sm border border-white/10">
                    {TABS.map((tab) => (
                      <TabButton
                        key={tab.value}
                        label={tab.label}
                        isActive={activeTab === tab.value}
                        onClick={() => setActiveTab(tab.value)}
                      />
                    ))}
                  </div>
                </div>

                {/* Form body */}
                <div className="px-6 sm:px-10 py-8 sm:py-10">
                  <ContactForm key={activeTab} mode={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}