"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { TECHNOLOGY_PILLS, TECH_CATEGORIES, type TechCategory } from "@/lib/constants/specialized"
import { scrollToSection } from "@/lib/utils/scroll"
import { TechPill } from "./tech-pill"
import { CategoryCard } from "./category-card"
import { CategoryModal } from "./category-modal"

export function SpecializedRecruitment() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | null>(null)

  return (
    <section
      id="specialized"
      className="py-24 lg:py-3 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-brand-coral uppercase tracking-[0.2em] mb-4">
            Industry-Focused Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy">
            Specialized recruitment
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {TECHNOLOGY_PILLS.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-20 px-4">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-brand-navy hover:bg-brand-blue text-brand-white 
               px-6 sm:px-10 
               py-4 sm:py-7 
               text-xs sm:text-sm 
               font-semibold tracking-wide sm:tracking-widest 
               uppercase 
               rounded-full 
               transition-all duration-300 
               group 
               shadow-lg sm:shadow-xl shadow-brand-navy/10"
          >
            <span className="flex items-center gap-2 sm:gap-3 text-center">
              Looking for a specific role? Let's talk
            </span>
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-w-2xl border-none bg-white p-8 rounded-[2rem] shadow-2xl">
          <VisuallyHidden>
            <DialogTitle>{selectedCategory?.title}</DialogTitle>
          </VisuallyHidden>
          {selectedCategory && <CategoryModal category={selectedCategory} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}