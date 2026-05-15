"use client"

import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Upload, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { MessageField } from "./message-field"
import { TagInput } from "./tag-input"

type Mode = "candidate" | "company"
type Interest = "hiring" | "demo" | "permanentIT" | "hireContract" | "projectIT" | "remoteIT" | "executiveSearch" | "salary"

interface ContactFormProps {
  mode?: Mode
}

const SHARED_TAGS = ["urgent", "follow-up", "question", "custom-request"]

const INTEREST_TAGS: Record<Interest, string[]> = {
  hiring: ["hiring", "recruitment", "open-roles", "budget", "timeline", ...SHARED_TAGS],
  demo: ["demo", "product-tour", "sales", "pricing", "meeting", ...SHARED_TAGS],
  permanentIT: ["full-time", "tech-talent", "staffing", "acquisition", ...SHARED_TAGS],
  hireContract: ["contractors", "freelance-devs", "contracts", ...SHARED_TAGS],
  projectIT: ["project-based", "outsourcing", "delivery", "expertise", ...SHARED_TAGS],
  remoteIT: ["international", "offshore", "teams", "market-data", ...SHARED_TAGS],
  executiveSearch: ["headhunting", "leadership", "c-level", "confidential", ...SHARED_TAGS],
  salary: ["salary", "benchmarking", "compensation", "market-data", ...SHARED_TAGS],
}

// Reusable section header
function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] tracking-[0.3em] uppercase text-brand-coral font-semibold">
        {num}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 font-semibold">
        {label}
      </span>
      <span className="block flex-1 h-px bg-brand-navy/8" />
    </div>
  )
}

// Reusable label
const fieldLabelClass =
  "text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 mb-2 block"

const inputClass =
  "h-12 rounded-xl border border-brand-navy/10 bg-brand-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus:bg-white transition-all placeholder:text-brand-navy/30"

export function ContactForm({ mode = "candidate" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [interest, setInterest] = React.useState<Interest>("hiring")
  const [tags, setTags] = React.useState<string[]>([])
  const [file, setFile] = React.useState<File | null>(null)


  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInterestChange = (v: string) => {
    setInterest(v as Interest)
    setTags([])
  }

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", title: "", message: "" },
  })

  const resetForm = () => {
    setIsSubmitted(false)
    setFile(null)
    setTags([])
  }


  async function onSubmit(data: ContactFormData) {
    if (!executeRecaptcha) {
      alert("reCAPTCHA not ready")
      return
    }

    setIsSubmitting(true)

    try {
      const token = await executeRecaptcha("contact_form")

      const formData = new FormData()

      Object.entries(data).forEach(([key, val]) =>
        formData.append(key, val)
      )

      formData.append("mode", mode)

      formData.append("recaptchaToken", token)

      if (mode === "company") {
        formData.append("interest", interest)
        formData.append("tags", JSON.stringify(tags))
      }

      if (mode === "candidate" && file) {
        formData.append("cv", file)
      }

      console.log("reCAPTCHA token:", token)
      
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      form.reset()
      setFile(null)
      setTags([])
    } catch (error) {
      console.error(error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-brand-teal/10 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center">
            <CheckCircle className="w-9 h-9 text-brand-coral" strokeWidth={1.5} />
          </div>
        </div>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-coral mb-3">
          [ Message Received ]
        </p>
        <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 tracking-tight">
          We&apos;ll be in touch.
        </h3>
        <p className="text-brand-navy/60 max-w-sm mx-auto leading-relaxed">
          A senior partner will reply within 24 hours. Check your inbox — and your spam folder, just in case.
        </p>
        <Button
          variant="outline"
          className="mt-10 rounded-full px-8 h-12 border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all text-xs font-bold uppercase tracking-[0.18em]"
          onClick={resetForm}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

        <section>
          <SectionMarker
            num="01"
            label={mode === "company" ? "Your company" : "About you"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel className={fieldLabelClass}>
                  {mode === "company" ? "Company Name" : "Full Name"}
                </FormLabel>
                <FormControl>
                  <Input
                    className={inputClass}
                    placeholder={mode === "company" ? "TechCorp Ltd." : "Jane Doe"}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
              </FormItem>
            )} />

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel className={fieldLabelClass}>Email</FormLabel>
                <FormControl>
                  <Input
                    className={inputClass}
                    type="email"
                    placeholder="name@work.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
              </FormItem>
            )} />

            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel className={fieldLabelClass}>Phone</FormLabel>
                <FormControl>
                  <Input
                    className={inputClass}
                    type="tel"
                    placeholder="+359 …"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
              </FormItem>
            )} />

            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem>
                <FormLabel className={fieldLabelClass}>Position</FormLabel>
                <FormControl>
                  <Input
                    className={inputClass}
                    placeholder={mode === "company" ? "Hiring Manager" : "Lead Developer"}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
              </FormItem>
            )} />
          </div>
        </section>

        {mode === "company" && (
          <section className="animate-in fade-in slide-in-from-top-2 duration-300">
            <SectionMarker num="02" label="What are you looking for" />
            <div className="space-y-5">
              <div>
                <FormLabel className={fieldLabelClass}>I&apos;m interested in</FormLabel>
                <Select value={interest} onValueChange={handleInterestChange}>
                  <SelectTrigger className={`${inputClass} w-full`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-brand-navy/10">
                    <SelectItem value="hiring">Hiring for my company</SelectItem>
                    <SelectItem value="demo">Smart.r ATS demonstration</SelectItem>
                    <SelectItem value="permanentIT">Permanent IT Recruitment</SelectItem>
                    <SelectItem value="hireContract">Hire Contract or Freelance Developers</SelectItem>
                    <SelectItem value="projectIT">Project-Based IT Recruitment</SelectItem>
                    <SelectItem value="remoteIT">Remote IT Hiring &amp; Global Talent</SelectItem>
                    <SelectItem value="executiveSearch">Executive Search &amp; IT Headhunting</SelectItem>
                    <SelectItem value="salary">IT Salary Benchmarking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <FormLabel className={fieldLabelClass}>
                  Focus areas <span className="font-normal opacity-50 normal-case tracking-normal">— up to 5</span>
                </FormLabel>
                <TagInput
                  value={tags}
                  onChange={setTags}
                  suggestions={INTEREST_TAGS[interest]}
                  placeholder="Add focus areas…"
                />
              </div>
            </div>
          </section>
        )}

        <section>
          <SectionMarker
            num={mode === "company" ? "03" : "02"}
            label="Your message"
          />
          <MessageField form={form} interest={interest} mode={mode} />
        </section>

        {mode === "candidate" && (
          <section className="animate-in fade-in slide-in-from-top-2 duration-300">
            <SectionMarker num="03" label="Attach CV" />
            <div className="relative group">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                aria-label="Upload CV"
              />
              <div className={`relative flex items-center gap-4 p-5 rounded-xl border-2 border-dashed transition-all ${file
                  ? "border-brand-teal bg-brand-teal/5"
                  : "border-brand-navy/15 bg-brand-white group-hover:border-brand-teal group-hover:bg-brand-teal/5"
                }`}>
                <span className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${file ? "bg-brand-teal text-white" : "bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal group-hover:text-white"
                  }`}>
                  {file
                    ? <CheckCircle className="w-5 h-5" strokeWidth={1.75} />
                    : <Upload className="w-5 h-5" strokeWidth={1.75} />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-brand-navy truncate">
                    {file ? file.name : "Drop your CV here or click to browse"}
                  </p>
                  <p className="text-xs text-brand-navy/50 mt-0.5">
                    {file
                      ? `${(file.size / 1024).toFixed(0)} KB — attached`
                      : "PDF, DOC, DOCX — max 10MB"}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section>
          <SectionMarker
            num={mode === "company" ? "04" : "04"}
            label="Security check"
          />

        </section>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full h-14 bg-brand-navy hover:bg-brand-teal text-white rounded-full text-xs font-bold uppercase tracking-[0.25em] shadow-xl shadow-brand-navy/15 cursor-pointer transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </span>
          </Button>
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 mt-5">
            By submitting, you agree to our privacy policy
          </p>
        </div>
      </form>
    </Form>
  )
}