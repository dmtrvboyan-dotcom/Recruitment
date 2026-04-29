"use client"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormData } from "@/lib/schemas"

type Interest = "hiring" | "demo" | "salary"

const PLACEHOLDER_MAP: Record<Interest, string> = {
  hiring: "Tell us about your hiring needs, positions, number of roles, budget range, timeline...",
  demo: "I'd like to schedule a Smart.r ATS/CRM demonstration...",
  salary: "Please tell us about your salary benchmarking needs (job titles, experience levels, location, etc.)...",
}

interface MessageFieldProps {
  form: UseFormReturn<ContactFormData>
  interest: Interest
  mode: "candidate" | "company"
}

export function MessageField({ form, interest, mode }: MessageFieldProps) {
  const placeholder =
    mode === "candidate"
      ? "Tell us about your career goals and what you're looking for..."
      : PLACEHOLDER_MAP[interest]

  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Your Message</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="min-h-[120px] resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
