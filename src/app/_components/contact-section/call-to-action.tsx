"use client"

import { useState } from "react"
import { ContactForm } from "./contact-form"
import { TabButton } from "./tab-button"

type TabType = "candidate" | "company"

const TABS: { label: string; value: TabType }[] = [
  { label: "I'm a Company",   value: "company"   },
  { label: "I'm a Candidate", value: "candidate" },
]

export function CallToAction() {
  const [activeTab, setActiveTab] = useState<TabType>("company")

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-white"
    >
       <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      {/* Teal glow — bottom right, hidden on small screens */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

    

   
      {/* Coral glow — bottom right */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-brand-coral/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Teal glow — top left */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-brand-teal/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          {/* Eyebrow with lines — matching Hero/Companies pattern */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-9 h-px bg-brand-coral" />
            <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
              Get in Touch
            </p>
            <span className="block w-9 h-px bg-brand-coral" />
          </div>

          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight uppercase text-brand-navy leading-[0.95] mb-6">
            Let's start a <span className="text-brand-coral">conversation</span>
          </h2>

          {/* Coral underline accent — matching Hero subhead pattern */}
          <div className="flex flex-col items-center">
            <p className="text-base lg:text-lg text-brand-navy/60 leading-relaxed max-w-2xl mx-auto">
              Whether you're scaling a tech team or looking for your next challenge,
              our senior recruiters are ready to help.
            </p>
            <div className="mt-5 h-[2px] w-12 bg-brand-coral" />
          </div>
        </div>

        {/* Tabs — pill style */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1.5 bg-brand-navy/5 border border-brand-navy/8 backdrop-blur-sm">
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

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-white border border-brand-navy/8 p-8 lg:p-14 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-brand-navy/8">

            {/* Diagonal stripe corner accent */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-bl-[100%] overflow-hidden"
              style={{
                background: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 6px,
                  rgba(114,145,199,0.08) 6px,
                  rgba(114,145,199,0.08) 7px
                )`,
              }}
            />

            {/* Mode indicator dot */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="block w-2 h-2 rounded-full bg-brand-coral shadow-[0_0_0_4px_rgba(114,145,199,0.15)]" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
                {activeTab === "company" ? "Hiring Inquiry" : "Candidate Application"}
              </span>
            </div>

            <ContactForm key={activeTab} mode={activeTab} />
          </div>
        </div>

      </div>
    </section>
  )
}