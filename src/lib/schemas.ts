import { z } from "zod"

// ── Shared field definitions ──────────────────────────────────────────────────

const nameField = z
  .string()
  .min(2,   { message: "Name must be at least 2 characters" })
  .max(100, { message: "Max 100 characters" })

const messageField = z
  .string()
  .min(40,   { message: "Message must be at least 40 characters" })
  .max(1000, { message: "Max 1,000 characters" })

const titleField = z
  .string()
  .min(2,   { message: "Position must be at least 2 characters" })
  .max(100, { message: "Max 100 characters" })

const emailRequired = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Please enter a valid email address" })

const phoneRequired = z
  .string()
  .min(1, { message: "Phone number is required" })
  .refine(
    (val) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
    { message: "Please enter a valid phone number" }
  )

const emailOptional = z
  .string()
  .optional()
  .refine(
    (val) => !val || z.string().email().safeParse(val).success,
    { message: "Please enter a valid email address" }
  )

const phoneOptional = z
  .string()
  .optional()
  .refine(
    (val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
    { message: "Please enter a valid phone number" }
  )

// ── Mode-specific schemas ─────────────────────────────────────────────────────

export const contactFormSchemaCompany = z.object({
  name:    nameField,
  company: z.string()
             .min(2,   { message: "Company name must be at least 2 characters" })
             .max(100, { message: "Max 100 characters" }),
  title:   titleField,
  email:   emailOptional,
  phone:   phoneOptional,
  message: messageField,
})

export const contactFormSchemaCandidate = z.object({
  name:    nameField,
  email:   emailRequired,
  phone:   phoneRequired,
  title:   titleField,
  company: z.string().optional(),
  message: messageField,
})

export function createContactFormSchema(mode: "candidate" | "company") {
  return mode === "company" ? contactFormSchemaCompany : contactFormSchemaCandidate
}

// ── Shared TypeScript type (covers both modes) ────────────────────────────────

export interface ContactFormData {
  name:     string
  email?:   string
  phone?:   string
  title?:   string
  company?: string
  message:  string
}

// ── Interest options ──────────────────────────────────────────────────────────

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

export const inquiryTypeOptions = [
  { value: "hiring",       label: "I want to hire talent" },
  { value: "job-seeking",  label: "I am looking for a job" },
  { value: "partnership",  label: "Partnership inquiry" },
  { value: "other",        label: "Other" },
] as const