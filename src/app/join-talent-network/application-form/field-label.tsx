"use client"

import { memo, type ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/label"

export const fieldInputClass =
  "w-full h-auto bg-brand-white/[0.04] border border-brand-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-white/30 outline-none focus-visible:border-brand-coral focus-visible:bg-brand-white/[0.06] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200"

export const fieldInputErrorClass =
  "w-full h-auto bg-brand-white/[0.04] border border-red-500/60 rounded-xl px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-white/30 outline-none focus-visible:border-brand-coral focus-visible:bg-brand-white/[0.06] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200"

export const selectContentClass =
  "bg-brand-navy border-brand-white/15 text-brand-white"

export const selectItemClass =
  "focus:bg-brand-coral/20 focus:text-brand-white data-[state=checked]:text-brand-coral"


interface FieldLabelProps {
  icon: LucideIcon
  htmlFor?: string
  required?: boolean
  /** Override default icon sizing class (default: "w-3.5 h-3.5") */
  iconClassName?: string
  children: ReactNode
}

export const FieldLabel = memo(function FieldLabel({
  icon: Icon,
  htmlFor,
  required,
  iconClassName,
  children,
}: FieldLabelProps) {
  return (
    <Label
      htmlFor={htmlFor}
      className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-white/70 mb-2.5"
    >
      <Icon className={`${iconClassName ?? "w-3.5 h-3.5"} text-brand-coral`} strokeWidth={2} />
      {children}
      {required && <span className="text-brand-coral">*</span>}
    </Label>
  )
})


/* ── Reusable inline error message ─────────────────────────────────── */
interface FieldErrorProps {
  message?: string
}

export const FieldError = memo(function FieldError({ message }: FieldErrorProps) {
  if (!message) return null

  return (
    <p
      role="alert"
      className="flex items-center gap-1.5 mt-1.5 text-[11px] text-red-400 animate-[fadeSlideIn_0.25s_ease]"
    >
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  )
})