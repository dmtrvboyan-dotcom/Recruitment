"use client"

import { memo } from "react"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FieldLabel, fieldInputClass } from "./field-label"
import { TECH_STACKS } from "../data"

interface TechStackFieldProps {
  selected: string[]
  onToggle: (tech: string) => void
  freeText: string
  onFreeTextChange: (value: string) => void
}

export const TechStackField = memo(function TechStackField({
  selected,
  onToggle,
  freeText,
  onFreeTextChange,
}: TechStackFieldProps) {
  return (
    <div className="mb-7">
      <FieldLabel icon={Code2} required>
        Tech stack
      </FieldLabel>
      <p className="text-[11px] text-brand-white/35 mb-3 -mt-1">
        Select all that apply ({selected.length} selected)
      </p>

      <div className="flex flex-wrap gap-2">
        {TECH_STACKS.map((tech) => {
          const active = selected.includes(tech)
          return (
            <Button
              key={tech}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onToggle(tech)}
              aria-pressed={active}
              className={`h-auto px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                active
                  ? "bg-brand-coral border-brand-coral text-brand-white hover:bg-brand-coral hover:text-brand-white"
                  : "bg-brand-white/[0.03] border-brand-white/10 text-brand-white/60 hover:border-brand-coral/40 hover:bg-brand-white/[0.05] hover:text-brand-white"
              }`}
            >
              {tech}
            </Button>
          )
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="shrink-0 text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-white/30">
          or
        </span>
        <div className="flex-1 h-px bg-brand-white/10" />
      </div>

      <div className="mt-3">
        <Input
          type="text"
          value={freeText}
          onChange={(e) => onFreeTextChange(e.target.value)}
          placeholder="Write your stack here - e.g. Elixir, Phoenix, Postgres…"
          className={fieldInputClass}
        />
      </div>
    </div>
  )
})