import { z } from "zod"

export const contactFormSchema = z.object({
  // ── Shared fields ────────────────────────────────────────────────────────

  name: z
    .string()
    .min(2,   { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),

  // Optional — only shown when company selects "Email" as contact method,
  // or always shown in candidate mode.
  email: z
    .string()
    .optional()
    .refine(
      (val) => !val || z.string().email().safeParse(val).success,
      { message: "Please enter a valid email address" }
    ),

  // Optional — only shown when company selects "Phone" as contact method,
  // or always shown in candidate mode.
  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
      { message: "Please enter a valid phone number" }
    ),

  title: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 2,
      { message: "Title must be at least 2 characters" }
    )
    .refine(
      (val) => !val || val.length <= 100,
      { message: "Title must be less than 100 characters" }
    ),

  message: z
    .string()
    .min(40,   { message: "Message must be at least 40 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),

  // ── Company-only fields ──────────────────────────────────────────────────

  // The company/organisation name (separate from the contact person's name)
  company: z
    .string()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// ── Interest options (company mode) ──────────────────────────────────────────
// These replace the old inquiryType enum and are passed separately as a plain
// string — not through react-hook-form — so they don't need to live in the
// schema, but are co-located here for convenience.

export const interestOptions = [
  { value: "hiring",          label: "Hiring for my company" },
  { value: "demo",            label: "Smart.r ATS demonstration" },
  { value: "permanentIT",     label: "Permanent IT Recruitment" },
  { value: "hireContract",    label: "Hire Contract or Freelance Developers" },
  { value: "projectIT",       label: "Project-Based IT Recruitment" },
  { value: "remoteIT",        label: "Remote IT Hiring & Global Talent" },
  { value: "executiveSearch", label: "Executive Search & IT Headhunting" },
  { value: "salary",          label: "IT Salary Benchmarking" },
] as const

// Kept for any existing code that still references inquiryTypeOptions
export const inquiryTypeOptions = [
  { value: "hiring",       label: "I want to hire talent" },
  { value: "job-seeking",  label: "I am looking for a job" },
  { value: "partnership",  label: "Partnership inquiry" },
  { value: "other",        label: "Other" },
] as const