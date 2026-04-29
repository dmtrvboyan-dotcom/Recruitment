import { memo } from "react"
import { HelpCircle, ChevronDown } from "lucide-react"
import type { FAQItem as FAQItemType } from "@/lib/constants/faq"

interface FAQItemProps {
  faq: FAQItemType
  index: number
  isOpen: boolean
  onToggle: () => void
}

export const FAQItem = memo(function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4 last:mb-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#085689]/10 flex-shrink-0 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-[#085689]" />
          </div>
          <h3 className="text-xl font-semibold text-black pr-8 leading-tight">
            {faq.q}
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-[#085689] transition-transform duration-500 shrink-0 hover:text-[#78B6D9] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pl-17 text-lg text-slate-600 leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  )
})