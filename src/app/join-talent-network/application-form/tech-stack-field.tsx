"use client"

import { memo } from "react"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FieldLabel, FieldError, fieldInputClass, fieldInputErrorClass } from "./field-label"
import { TECH_STACKS } from "../data"

const FREE_TEXT_MAX = 160

interface TechStackFieldProps {
  selected: string[]
  onToggle: (tech: string) => void
  freeText: string
  onFreeTextChange: (value: string) => void
  error?: string
}

export const TechStackField = memo(function TechStackField({
  selected,
  onToggle,
  freeText,
  onFreeTextChange,
  error,
}: TechStackFieldProps) {
  const remaining = FREE_TEXT_MAX - freeText.length

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
                  : "bg-brand-white/3 border-brand-white/10 text-brand-white/60 hover:border-brand-coral/40 hover:bg-brand-white/5 hover:text-brand-white"
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

      <div className="mt-3 relative">
        <Input
          type="text"
          value={freeText}
          onChange={(e) => {
            if (e.target.value.length <= FREE_TEXT_MAX) {
              onFreeTextChange(e.target.value)
            }
          }}
          maxLength={FREE_TEXT_MAX}
          placeholder="Write your stack here – e.g. Elixir, Phoenix, Postgres…"
          className={error ? fieldInputErrorClass : fieldInputClass}
        />
        <span
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] tabular-nums ${
            remaining <= 20
              ? remaining <= 0
                ? "text-red-400"
                : "text-amber-400/70"
              : "text-brand-white/25"
          }`}
        >
          {remaining}
        </span>
      </div>

      <FieldError message={error} />
    </div>
  )
})