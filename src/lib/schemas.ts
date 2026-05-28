import { z } from "zod"


const nameField = z
  .string()
  .min(2, { message: "Name must be at least 2 characters" })
  .max(100, { message: "Max 100 characters" })

const messageField = z
  .string()
  .min(40, { message: "Message must be at least 40 characters" })
  .max(400, { message: "Max 400 characters" })

const titleField = z
  .string()
  .min(2, { message: "Position must be at least 2 characters" })
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

const phoneOptional = z
  .string()
  .optional()
  .refine(
    (val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
    { message: "Please enter a valid phone number" }
  )


export const contactFormSchemaCompany = z.object({
  name: nameField,
  company: z.string()
    .min(2, { message: "Company name must be at least 2 characters" })
    .max(100, { message: "Max 100 characters" }),
  title: titleField,
  email: emailRequired,
  phone: phoneOptional,
  message: messageField,
})

export const contactFormSchemaCandidate = z.object({
  name: nameField,
  email: emailRequired,
  phone: phoneRequired,
  title: titleField,
  company: z.string().optional(),
  message: messageField,
})

export function createContactFormSchema(mode: "candidate" | "company") {
  return mode === "company" ? contactFormSchemaCompany : contactFormSchemaCandidate
}

// ── Shared TypeScript type (covers both modes) ────────────────────────────────

export interface ContactFormData {
  name: string
  email?: string
  phone?: string
  title?: string
  company?: string
  message: string
}


export const interestOptions = [
  { value: "hiring", label: "Hiring for my company" },
  { value: "demo", label: "Smart.r ATS demonstration" },
  { value: "permanentIT", label: "Permanent IT Recruitment" },
  { value: "hireContract", label: "Contract / Freelance / B2B / Remote" },
  { value: "confidentialSearch", label: "Confidential Headhunting &amp; Executive Search" },
  { value: "eorSearch", label: "Employer of Record (EOR)" },
  { value: "ITSalary", label: "IT Salary Benchmarking &amp; Hiring Insights" },
  { value: "salITPayrollary", label: "IT Payroll, Compliance &amp; Business Advisory" },
] as const

export const inquiryTypeOptions = [
  { value: "hiring", label: "I want to hire talent" },
  { value: "job-seeking", label: "I am looking for a job" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "other", label: "Other" },
] as const