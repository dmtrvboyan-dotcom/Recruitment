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
      className="py-20 lg:py-28 lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-semibold text-[#085689] uppercase tracking-wider mb-4">
            Industry-Focused Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black text-balance">
            Specialized recruitment
          </h2>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 -mt-5">
          {TECHNOLOGY_PILLS.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <Separator className="mb-12" />

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#085689] hover:bg-[#78B6D9] text-white hover:text-black px-10 py-6 sm:text-[18px] text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            Looking for a specific role? Let's talk
          </Button>
        </div>
      </div>

      {/* Category detail modal */}
      <Dialog
        open={!!selectedCategory}
        onOpenChange={(open) => !open && setSelectedCategory(null)}
      >
        <DialogContent className="max-w-lg w-[calc(100%-2rem)] rounded-2xl p-4 sm:p-6 bg-[#f5f5f5] shadow-2xl border-0 max-h-[85dvh] overflow-y-auto">
          <VisuallyHidden>
            <DialogTitle>{selectedCategory?.title ?? "Category details"}</DialogTitle>
            <DialogDescription>{selectedCategory?.subtitle ?? ""}</DialogDescription>
          </VisuallyHidden>
          {selectedCategory && <CategoryModal category={selectedCategory} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}
