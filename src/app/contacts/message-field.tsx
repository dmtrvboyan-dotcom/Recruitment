"use client"

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormData } from "@/lib/schemas"

type Interest = "hiring" | "demo" | "permanentIT" | "hireContract" | "projectIT" | "remoteIT" | "executiveSearch" | "salary"

const PLACEHOLDER_MAP: Record<Interest, string> = {
  hiring:          "Tell us about your hiring needs — roles, headcount, budget, timeline…",
  demo:            "I'd like to schedule a Smart.r ATS/CRM demonstration…",
  permanentIT:     "Tell us about your permanent IT hiring needs, roles, timeline…",
  hireContract:    "Tell us about your contract or freelance developer needs…",
  projectIT:       "Tell us about your project — requirements, expertise, deliverables…",
  remoteIT:        "Tell us about your remote hiring needs — locations, skills, team…",
  executiveSearch: "Tell us about the leadership role you're hiring for…",
  salary:          "Tell us about your benchmarking needs — titles, seniority, location…",
}

const MAX = 1000
const MIN = 40

interface MessageFieldProps {
  form:     UseFormReturn<ContactFormData>
  interest: Interest
  mode:     "candidate" | "company"
}

export function MessageField({ form, interest, mode }: MessageFieldProps) {
  const placeholder = mode === "candidate"
    ? "Tell us about your career goals and what you're looking for next…"
    : PLACEHOLDER_MAP[interest]

  const value = form.watch("message") ?? ""
  const count = value.length
  const isBelowMin = count < MIN && count > 0
  const isAtMax    = count >= MAX

  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="min-h-[140px] resize-none rounded-xl border border-brand-navy/10 bg-brand-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus:bg-white transition-all placeholder:text-brand-navy/30 p-4 text-sm leading-relaxed"
              {...field}
            />
          </FormControl>

          {/* Counter + validation message row */}
          <div className="flex items-center justify-between mt-1.5">
            <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide" />
            <span className={`ml-auto text-[10px] font-bold tabular-nums tracking-tight shrink-0 ${
              isAtMax    ? "text-brand-coral" :
              isBelowMin ? "text-brand-navy/40" :
                           "text-brand-teal"
            }`}>
              {count}/{MAX}
              {isBelowMin && (
                <span className="ml-1 font-normal normal-case tracking-normal">
                  ({MIN - count} more to go)
                </span>
              )}
            </span>
          </div>
        </FormItem>
      )}
    />
  )
}