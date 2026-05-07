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
      className="relative py-24 lg:py-32overflow-hidden"
    >
      {/* Decorative logic consistent with Hero */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-brand-coral/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-coral mb-4">
            Get in Touch
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-brand-navy leading-tight mb-6 capitalize">
            Let's start a <span className="text-brand-blue">conversation</span>
          </h2>
          <p className="text-lg text-brand-navy/60 leading-relaxed max-w-2xl mx-auto">
            Whether you're scaling a tech team or looking for your next challenge, 
            our senior recruiters are ready to help.
          </p>
        </div>

        {/* Tabs - Pill style */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1.5 bg-brand-navy/5 border border-brand-navy/5 backdrop-blur-sm h-15">
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
          <div className="bg-white border border-brand-navy/5 p-8 lg:p-14 shadow-2xl shadow-brand-navy/5 rounded-[2.5rem] relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100%] pointer-events-none" />
            
            <ContactForm key={activeTab} mode={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}