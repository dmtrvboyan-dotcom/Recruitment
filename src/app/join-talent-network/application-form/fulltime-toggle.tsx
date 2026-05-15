"use client"

import { memo } from "react"
import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FieldLabel } from "./field-label"

export type FulltimeValue = "yes" | "no" | "depends"

interface FulltimeToggleProps {
  value: FulltimeValue
  onChange: (value: FulltimeValue) => void
}

const OPTIONS: { v: FulltimeValue; label: string }[] = [
  { v: "yes", label: "Yes" },
  { v: "no", label: "No" },
  { v: "depends", label: "Depends" },
]

export const FulltimeToggle = memo(function FulltimeToggle({
  value,
  onChange,
}: FulltimeToggleProps) {
  return (
    <div className="mb-5">
      <FieldLabel icon={Briefcase} required>
        Open to full-time roles?
      </FieldLabel>

      <div
        className="grid grid-cols-3 gap-2"
        role="radiogroup"
        aria-label="Open to full-time roles"
      >
        {OPTIONS.map((opt) => {
          const active = value === opt.v
          return (
            <Button
              key={opt.v}
              type="button"
              variant="outline"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.v)}
              className={`h-auto py-3 rounded-xl text-sm font-medium border transition-all duration-150 ${
                active
                  ? "bg-brand-coral border-brand-coral text-brand-white hover:bg-brand-coral hover:text-brand-white"
                  : "bg-brand-white/[0.03] border-brand-white/10 text-brand-white/60 hover:border-brand-coral/40 hover:bg-brand-white/[0.05] hover:text-brand-white"
              }`}
            >
              {opt.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
})