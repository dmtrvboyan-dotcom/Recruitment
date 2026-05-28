"use client"

import ReCAPTCHA from "react-google-recaptcha"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createContactFormSchema, type ContactFormData } from "@/lib/schemas"
import { MessageField } from "./message-field"
import { TagInput } from "./tag-input"

type Mode = "candidate" | "company"
type Interest = "hiring" | "demo" | "permanentIT" | "hireContract" | "confidentialSearch" | "eorSearch" | "ITSalary" | "ITPayroll"

interface ContactFormProps {
  mode?: Mode
}


const SHARED_TAGS = ["urgent", "follow-up", "question", "custom-request"]

const INTEREST_TAGS: Record<Interest, string[]> = {
  hiring: ["hiring", "recruitment", "open-roles", "budget", "timeline", ...SHARED_TAGS],
  demo: ["demo", "product-tour", "sales", "pricing", "meeting", ...SHARED_TAGS],
  permanentIT: ["full-time", "tech-talent", "staffing", "acquisition", ...SHARED_TAGS],
  hireContract: ["contractors", "freelance-devs", "b2b", "remote", "contracts", ...SHARED_TAGS],
  confidentialSearch: ["headhunting", "executive-search", "leadership", "c-level", "confidential", ...SHARED_TAGS],
  eorSearch: ["eor", "international", "global-hiring", "remote-teams", ...SHARED_TAGS],
  ITSalary: ["salary", "benchmarking", "compensation", "market-data", "hiring-insights", ...SHARED_TAGS],
  ITPayroll: ["payroll", "compliance", "advisory", "business-services", "contractor-management", ...SHARED_TAGS],
}

// Style tokens

const fieldLabelClass =
  "text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 mb-2 block"

const inputClass =
  "h-12 rounded-xl border border-brand-navy/10 bg-brand-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus:bg-white transition-all placeholder:text-brand-navy/30"

function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5">
      <span className="text-[10px] tracking-[0.3em] uppercase text-brand-coral font-semibold">{num}</span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 font-semibold">{label}</span>
      <span className="block flex-1 h-px bg-brand-navy/8" />
    </div>
  )
}


export function ContactForm({ mode = "candidate" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [interest, setInterest] = React.useState<Interest>("hiring")
  const [tags, setTags] = React.useState<string[]>([])
  const [file, setFile] = React.useState<File | null>(null)
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const successRef = React.useRef<HTMLDivElement>(null)

  // When the form switches to the success state, bring the confirmation
  // into view so the user sees it immediately instead of having to scroll up.
  React.useEffect(() => {
    if (isSubmitted) {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [isSubmitted])

  const form = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(mode)),
    defaultValues: { name: "", company: "", email: "", phone: "", title: "", message: "" },
  })
  const resetForm = () => {
    setIsSubmitted(false)
    setFile(null)
    setTags([])
  }

  async function onSubmit(data: ContactFormData) {
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA")
      return
    }

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([k, v]) => formData.append(k, v ?? ""))
      formData.append("mode", mode)
      if (mode === "company") {
        formData.append("interest", interest)
        formData.append("tags", JSON.stringify(tags))
      }
      if (mode === "candidate" && file) formData.append("cv", file)
      formData.append("recaptchaToken", captchaToken)

      const res = await fetch("/api/contact", { method: "POST", body: formData })
      if (!res.ok) throw new Error("Failed to send message")

      setIsSubmitted(true)
      form.reset()
      setFile(null)
      setTags([])
      recaptchaRef.current?.reset()
      setCaptchaToken(null)
    } catch (err) {
      console.error(err)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  if (!siteKey) throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")

  if (isSubmitted) {
    return (
      <div
        ref={successRef}
        className="flex flex-col items-center justify-center py-12 sm:py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 scroll-mt-28"
      >
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-brand-teal/10 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center">
            <CheckCircle className="w-9 h-9 text-brand-coral" strokeWidth={1.5} />
          </div>
        </div>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-coral mb-3">[ Message Received ]</p>
        <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 tracking-tight">We&apos;ll be in touch.</h3>
        <p className="text-brand-navy/60 max-w-sm mx-auto leading-relaxed">
          A senior partner will reply within 24 hours. Check your inbox - and your spam folder, just in case.
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

  // Form

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 sm:space-y-10">

        {mode === "company" ? (
          <>
            {/* 01 - Your company */}
            <section>
              <SectionMarker num="01" label="Your company" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Your name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="E.g Maria Ivanova" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Work email</FormLabel>
                    <FormControl><Input className={inputClass} type="email" placeholder="name@company.com" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>
                      Phone <span className="font-normal opacity-50 normal-case tracking-normal">— optional</span>
                    </FormLabel>
                    <FormControl><Input className={inputClass} type="tel" placeholder="+359 888 888 888" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Company name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="THE ONES EOOD" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className={fieldLabelClass}>Your position</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="Hiring Manager" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

              </div>
            </section>

            <section className="animate-in fade-in slide-in-from-top-2 duration-300">
              <SectionMarker num="02" label="What are you looking for" />
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <FormLabel className={fieldLabelClass}>I&apos;m interested in</FormLabel>
                  <Select value={interest} onValueChange={(v) => { setInterest(v as Interest); setTags([]) }}>
                    <SelectTrigger className={`${inputClass} w-full`}><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-xl border-brand-navy/10">
                      <SelectItem value="hiring">Hiring for my company</SelectItem>
                      <SelectItem value="demo">Smart.r ATS demonstration</SelectItem>
                      <SelectItem value="permanentIT">Permanent IT Recruitment</SelectItem>
                      <SelectItem value="hireContract">Contract / Freelance / B2B / Remote</SelectItem>
                      <SelectItem value="confidentialSearch">Confidential Headhunting &amp; Executive Search</SelectItem>
                      <SelectItem value="eorSearch">Employer of Record (EOR)</SelectItem>
                      <SelectItem value="ITSalary">IT Salary Benchmarking &amp; Hiring Insights</SelectItem>
                      <SelectItem value="ITPayroll">IT Payroll, Compliance &amp; Business Advisory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <FormLabel className={fieldLabelClass}>
                    Focus areas <span className="font-normal opacity-50 normal-case tracking-normal">- optional, up to 5</span>
                  </FormLabel>
                  <TagInput value={tags} onChange={setTags} suggestions={INTEREST_TAGS[interest]} placeholder="Add focus areas…" />
                </div>
              </div>
            </section>

            {/* 03 - Message */}
            <section>
              <SectionMarker num="03" label="Your message" />
              <MessageField form={form} interest={interest} mode={mode} />
            </section>
          </>
        ) : (

          /* ── CANDIDATE FLOW (unchanged) ──────────────────────────────── */
          <>
            <section>
              <SectionMarker num="01" label="About you" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Full Name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="Alexander Dimitrov" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Email</FormLabel>
                    <FormControl><Input className={inputClass} type="email" placeholder="email@example.com" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Phone</FormLabel>
                    <FormControl><Input className={inputClass} type="tel" placeholder="+359 888 888 888" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Position</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="React Developer" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
              </div>
            </section>

            <section>
              <SectionMarker num="02" label="Your message" />
              <MessageField form={form} interest={interest} mode={mode} />
            </section>

            <section className="animate-in fade-in slide-in-from-top-2 duration-300">
              <SectionMarker num="03" label="Attach CV" />
              <div className="relative group">

                {!file && (
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    aria-label="Upload CV"
                  />
                )}

                <div className={`relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border-2 border-dashed transition-all ${file ? "border-brand-teal bg-brand-teal/5" : "border-brand-navy/15 bg-brand-white group-hover:border-brand-teal group-hover:bg-brand-teal/5"
                  }`}>
                  <span className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${file ? "bg-brand-teal text-white" : "bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal group-hover:text-white"
                    }`}>
                    {file ? <CheckCircle className="w-5 h-5" strokeWidth={1.75} /> : <Upload className="w-5 h-5" strokeWidth={1.75} />}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-brand-navy truncate">
                      {file ? file.name : "Drop your CV here or click to browse"}
                    </p>
                    <p className="text-xs text-brand-navy/50 mt-0.5">
                      {file ? `${(file.size / 1024).toFixed(0)} KB - attached` : "PDF, DOC, DOCX - max 10MB"}
                    </p>
                  </div>

                  {file && (
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      aria-label="Remove CV"
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-brand-navy/40 hover:text-brand-coral hover:bg-brand-coral/10 transition-all duration-200 z-20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        <section>
          <SectionMarker num="04" label="Security check" />
          <div className="flex justify-center overflow-hidden">
            <div className="origin-center scale-90 sm:scale-100 shrink-0">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
          </div>
        </section>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full h-14 bg-brand-navy hover:bg-brand-teal text-white rounded-full text-xs font-bold uppercase tracking-[0.25em] shadow-xl shadow-brand-navy/15 cursor-pointer transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? (
                <><Spinner className="h-4 w-4" />Sending…</>
              ) : (
                <>Send message <span className="inline-block transition-transform group-hover:translate-x-1">→</span></>
              )}
            </span>
          </Button>
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 mt-4 sm:mt-5">
            By submitting, you agree to our privacy policy
          </p>
        </div>
      </form>
    </Form>
  )
}