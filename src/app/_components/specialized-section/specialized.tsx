"use client"

import Link from 'next/link'
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  TECHNOLOGY_PILLS,
  TECH_CATEGORIES,
  type TechCategory,
} from "@/lib/constants/specialized"
import { scrollToSection } from "@/lib/utils/scroll"
import { TechPill } from "./tech-pill"
import { CategoryCard } from "./category-card"
import { CategoryModal } from "./category-modal"
import { AppButton } from '@/components/ui/app-button';


export function SpecializedRecruitment() {
  const [selectedCategory, setSelectedCategory] =
    useState<TechCategory | null>(null)

  return (
    <section
      id="specialized"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-white overflow-hidden"
    >


      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(12rem,22vw,20rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        STACK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              Industry-Focused Expertise
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] uppercase text-brand-navy">
            Tech <span className="text-brand-coral"> Recruitment.</span>
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mt-10 sm:mb-8" />

        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-14 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          {TECHNOLOGY_PILLS.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {TECH_CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="flex flex-col items-center mt-14 sm:mt-16 lg:mt-20 gap-4 sm:gap-5">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-brand-white/40 text-center">
            Don&apos;t see your stack?
          </p>


          <AppButton href="/contacts"
            icon="arrow">
            Let&apos;s talk
          </AppButton>

        </div>
      </div>


      <Dialog
        open={!!selectedCategory}
        onOpenChange={(open) => !open && setSelectedCategory(null)}
      >
        <DialogContent className="max-w-2xl border-none bg-white p-0 rounded-3xl shadow-2xl overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{selectedCategory?.title}</DialogTitle>
          </VisuallyHidden>
          {selectedCategory && <CategoryModal category={selectedCategory} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}