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
    <div 
      className={`border rounded-2xl overflow-hidden mb-4 last:mb-0 transition-all duration-300 ${
        isOpen ? "shadow-md ring-1 ring-brand-blue/10" : "hover:border-brand-blue/30"
      }`}
      style={{ 
        backgroundColor: isOpen ? "#ffffff" : "var(--color-brand-bg)",
        borderColor: isOpen ? "var(--color-brand-blue)" : "rgba(44, 62, 80, 0.1)"
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: isOpen ? "var(--color-brand-blue)" : "rgba(8, 86, 137, 0.1)" 
            }}
          >
            <HelpCircle className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-brand-blue"}`} />
          </div>
          <h3 
            className="text-lg font-bold pr-8 leading-tight transition-colors"
            style={{ color: isOpen ? "var(--color-brand-blue)" : "var(--color-brand-navy)" }}
          >
            {faq.q}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: isOpen ? "var(--color-brand-coral)" : "var(--color-brand-navy-mid)" }}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div 
          className="px-6 pb-8 pl-[72px] text-base leading-relaxed"
          style={{ color: "var(--color-brand-navy-mid)" }}
        >
          <div className="w-full h-px bg-brand-navy/5 mb-6" />
          {faq.a}
        </div>
      </div>
    </div>
  )
})