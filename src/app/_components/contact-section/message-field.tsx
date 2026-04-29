import { useState, useEffect } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormData } from "@/lib/schemas"

type Interest = "hiring" | "demo" | "salary"

const TAG_MAP: Record<Interest, string[]> = {
  hiring:  ["positions", "roles", "budget", "timeline"],
  demo:    ["ATS/CRM", "demo", "pricing", "features"],
  salary:  ["experience", "levels", "location", "job titles"],
}

const PLACEHOLDER_MAP: Record<Interest, string> = {
  hiring:  "Tell us about your hiring needs, positions, number of roles, budget range, timeline...",
  demo:    "I'd like to schedule a Smart.r ATS/CRM demonstration...",
  salary:  "Please tell us about your salary benchmarking needs (job titles, experience levels, location, etc.)...",
}

interface MessageFieldProps {
  form: UseFormReturn<ContactFormData>
  interest: Interest
  mode: "candidate" | "company"
}

export function MessageField({ form, interest, mode }: MessageFieldProps) {
  const [activeTags, setActiveTags] = useState<string[]>(TAG_MAP[interest])

  useEffect(() => {
    setActiveTags(TAG_MAP[interest])
  }, [interest])

  const placeholder =
    mode === "candidate"
      ? "Tell us about your career goals and what you're looking for..."
      : PLACEHOLDER_MAP[interest]

  const removeTag = (tag: string) => {
    setActiveTags((prev) => prev.filter((t) => t !== tag))
  }

  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Your Message</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <Textarea
                placeholder={placeholder}
                className="min-h-[120px] resize-none border-0 p-0 shadow-none focus-visible:ring-0"
                {...field}
              />
              {activeTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {activeTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 border border-blue-200"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-blue-500 hover:text-blue-800 leading-none"
                        aria-label={`Remove ${tag}`}
                      >
                        &#x2715;
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}