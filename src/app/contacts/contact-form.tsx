"use client"

import ReCAPTCHA from "react-google-recaptcha"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Upload, Mail, Phone } from "lucide-react"
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
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { MessageField } from "./message-field"
import { TagInput } from "./tag-input"

// ─── Types ────────────────────────────────────────────────────────────────────

type Mode          = "candidate" | "company"
type Interest      = "hiring" | "demo" | "permanentIT" | "hireContract" | "projectIT" | "remoteIT" | "executiveSearch" | "salary"
type ContactMethod = "email" | "phone"

interface ContactFormProps {
  mode?: Mode
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SHARED_TAGS = ["urgent", "follow-up", "question", "custom-request"]

const INTEREST_TAGS: Record<Interest, string[]> = {
  hiring:          ["hiring", "recruitment", "open-roles", "budget", "timeline",         ...SHARED_TAGS],
  demo:            ["demo", "product-tour", "sales", "pricing", "meeting",               ...SHARED_TAGS],
  permanentIT:     ["full-time", "tech-talent", "staffing", "acquisition",               ...SHARED_TAGS],
  hireContract:    ["contractors", "freelance-devs", "contracts",                        ...SHARED_TAGS],
  projectIT:       ["project-based", "outsourcing", "delivery", "expertise",             ...SHARED_TAGS],
  remoteIT:        ["international", "offshore", "teams", "market-data",                 ...SHARED_TAGS],
  executiveSearch: ["headhunting", "leadership", "c-level", "confidential",              ...SHARED_TAGS],
  salary:          ["salary", "benchmarking", "compensation", "market-data",             ...SHARED_TAGS],
}

const CONTACT_METHOD_OPTIONS: {
  value: ContactMethod
  label: string
  hint: string
  icon: React.ElementType
}[] = [
  { value: "email", label: "Email",  hint: "Reply within 24h",   icon: Mail  },
  { value: "phone", label: "Phone",  hint: "We'll call you back", icon: Phone },
]

// ─── Style tokens ─────────────────────────────────────────────────────────────

const fieldLabelClass =
  "text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 mb-2 block"

const inputClass =
  "h-12 rounded-xl border border-brand-navy/10 bg-brand-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus:bg-white transition-all placeholder:text-brand-navy/30"

// ─── SectionMarker ────────────────────────────────────────────────────────────

function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] tracking-[0.3em] uppercase text-brand-coral font-semibold">{num}</span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 font-semibold">{label}</span>
      <span className="block flex-1 h-px bg-brand-navy/8" />
    </div>
  )
}

// ─── ContactMethodPill ────────────────────────────────────────────────────────

function ContactMethodPill({
  option,
  selected,
  onToggle,
}: {
  option: (typeof CONTACT_METHOD_OPTIONS)[number]
  selected: boolean
  onToggle: () => void
}) {
  const Icon = option.icon
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`
        group relative flex-1 flex flex-col items-center gap-2 px-3 py-4
        rounded-2xl border-2 transition-all duration-300 cursor-pointer select-none text-center
        ${selected
          ? "border-brand-teal bg-brand-teal/8 shadow-sm shadow-brand-teal/20"
          : "border-brand-navy/10 bg-brand-white hover:border-brand-navy/25 hover:bg-brand-navy/2"
        }
      `}
    >
      {/* Check badge */}
      <span className={`
        absolute top-2.5 right-2.5 w-4 h-4 rounded-full border-2 flex items-center justify-center
        transition-all duration-200
        ${selected ? "border-brand-teal bg-brand-teal" : "border-brand-navy/20 bg-transparent"}
      `}>
        {selected && (
          <svg viewBox="0 0 8 6" className="w-2 h-2 text-white fill-none stroke-current stroke-[1.5]">
            <polyline points="1,3 3,5 7,1" />
          </svg>
        )}
      </span>

      {/* Icon */}
      <span className={`
        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
        ${selected
          ? "bg-brand-teal text-white"
          : "bg-brand-navy/6 text-brand-navy/50 group-hover:bg-brand-navy/10 group-hover:text-brand-navy"
        }
      `}>
        <Icon className="w-4 h-4" strokeWidth={1.75} />
      </span>

      <span className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors leading-tight ${selected ? "text-brand-teal" : "text-brand-navy/60"}`}>
        {option.label}
      </span>
      <span className={`text-[10px] leading-snug transition-colors ${selected ? "text-brand-teal/70" : "text-brand-navy/35"}`}>
        {option.hint}
      </span>
    </button>
  )
}

// ─── ContactForm ──────────────────────────────────────────────────────────────

export function ContactForm({ mode = "candidate" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting]     = React.useState(false)
  const [isSubmitted, setIsSubmitted]       = React.useState(false)
  const [interest, setInterest]             = React.useState<Interest>("hiring")
  const [tags, setTags]                     = React.useState<string[]>([])
  const [file, setFile]                     = React.useState<File | null>(null)
  const [captchaToken, setCaptchaToken]     = React.useState<string | null>(null)
  const [contactMethods, setContactMethods] = React.useState<ContactMethod[]>([])
  const recaptchaRef                        = React.useRef<ReCAPTCHA>(null)

  const toggleMethod = (m: ContactMethod) =>
    setContactMethods((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    )

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", title: "", message: "" },
  })

  const resetForm = () => {
    setIsSubmitted(false)
    setFile(null)
    setTags([])
    setContactMethods([])
  }

  async function onSubmit(data: ContactFormData) {
    if (mode === "company" && contactMethods.length === 0) {
      alert("Please select at least one preferred contact method.")
      return
    }
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
        formData.append("contactMethods", JSON.stringify(contactMethods))
      }
      if (mode === "candidate" && file) formData.append("cv", file)
      formData.append("recaptchaToken", captchaToken)

      const res = await fetch("/api/contact", { method: "POST", body: formData })
      if (!res.ok) throw new Error("Failed to send message")

      setIsSubmitted(true)
      form.reset()
      setFile(null)
      setTags([])
      setContactMethods([])
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

  // ── Success ────────────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-brand-teal/10 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center">
            <CheckCircle className="w-9 h-9 text-brand-coral" strokeWidth={1.5} />
          </div>
        </div>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-coral mb-3">[ Message Received ]</p>
        <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mb-4 tracking-tight">We&apos;ll be in touch.</h3>
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

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

        {mode === "company" ? (
          <>
            {/* 01 — Your company */}
            <section>
              <SectionMarker num="01" label="Your company" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Your name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="Jane Doe" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />

                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Company name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="TechCorp Ltd." {...field} /></FormControl>
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

            {/* 02 — What are you looking for */}
            <section className="animate-in fade-in slide-in-from-top-2 duration-300">
              <SectionMarker num="02" label="What are you looking for" />
              <div className="space-y-5">
                <div>
                  <FormLabel className={fieldLabelClass}>I&apos;m interested in</FormLabel>
                  <Select value={interest} onValueChange={(v) => { setInterest(v as Interest); setTags([]) }}>
                    <SelectTrigger className={`${inputClass} w-full`}><SelectValue /></SelectTrigger>
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
                    Focus areas <span className="font-normal opacity-50 normal-case tracking-normal">— optional, up to 5</span>
                  </FormLabel>
                  <TagInput value={tags} onChange={setTags} suggestions={INTEREST_TAGS[interest]} placeholder="Add focus areas…" />
                </div>
              </div>
            </section>

            {/* 03 — How should we contact you */}
            <section className="animate-in fade-in slide-in-from-top-2 duration-300">
              <SectionMarker num="03" label="How should we contact you" />

              <div className="flex gap-3">
                {CONTACT_METHOD_OPTIONS.map((opt) => (
                  <ContactMethodPill
                    key={opt.value}
                    option={opt}
                    selected={contactMethods.includes(opt.value)}
                    onToggle={() => toggleMethod(opt.value)}
                  />
                ))}
              </div>

              {/* Revealed fields */}
              {(contactMethods.includes("email") || contactMethods.includes("phone")) && (
                <div className="mt-5 space-y-4">
                  {contactMethods.includes("email") && (
                    <div className="animate-in fade-in slide-in-from-top-3 duration-300">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className={fieldLabelClass}>Work email</FormLabel>
                          <FormControl>
                            <Input className={inputClass} type="email" placeholder="name@company.com" {...field} />
                          </FormControl>
                          <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                        </FormItem>
                      )} />
                    </div>
                  )}

                  {contactMethods.includes("phone") && (
                    <div className="animate-in fade-in slide-in-from-top-3 duration-300">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className={fieldLabelClass}>Phone number</FormLabel>
                          <FormControl>
                            <Input className={inputClass} type="tel" placeholder="+359 …" {...field} />
                          </FormControl>
                          <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                        </FormItem>
                      )} />
                    </div>
                  )}
                </div>
              )}

              {contactMethods.length === 0 && (
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/35">
                  Select at least one option above
                </p>
              )}
            </section>

            {/* 04 — Message */}
            <section>
              <SectionMarker num="04" label="Your message" />
              <MessageField form={form} interest={interest} mode={mode} />
            </section>
          </>
        ) : (

          /* ── CANDIDATE FLOW (unchanged) ──────────────────────────────── */
          <>
            <section>
              <SectionMarker num="01" label="About you" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Full Name</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="Jane Doe" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Email</FormLabel>
                    <FormControl><Input className={inputClass} type="email" placeholder="name@work.com" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Phone</FormLabel>
                    <FormControl><Input className={inputClass} type="tel" placeholder="+359 …" {...field} /></FormControl>
                    <FormMessage className="text-brand-coral text-[10px] font-bold uppercase tracking-wide mt-1.5" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={fieldLabelClass}>Position</FormLabel>
                    <FormControl><Input className={inputClass} placeholder="Lead Developer" {...field} /></FormControl>
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
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  aria-label="Upload CV"
                />
                <div className={`relative flex items-center gap-4 p-5 rounded-xl border-2 border-dashed transition-all ${
                  file ? "border-brand-teal bg-brand-teal/5" : "border-brand-navy/15 bg-brand-white group-hover:border-brand-teal group-hover:bg-brand-teal/5"
                }`}>
                  <span className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                    file ? "bg-brand-teal text-white" : "bg-brand-navy/5 text-brand-navy group-hover:bg-brand-teal group-hover:text-white"
                  }`}>
                    {file ? <CheckCircle className="w-5 h-5" strokeWidth={1.75} /> : <Upload className="w-5 h-5" strokeWidth={1.75} />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-brand-navy truncate">
                      {file ? file.name : "Drop your CV here or click to browse"}
                    </p>
                    <p className="text-xs text-brand-navy/50 mt-0.5">
                      {file ? `${(file.size / 1024).toFixed(0)} KB — attached` : "PDF, DOC, DOCX — max 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── SECURITY CHECK ────────────────────────────────────────────────── */}
        <section>
          <SectionMarker num={mode === "company" ? "05" : "04"} label="Security check" />
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
              onChange={(token) => setCaptchaToken(token)}
            />
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
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-brand-navy/40 mt-5">
            By submitting, you agree to our privacy policy
          </p>
        </div>
      </form>
    </Form>
  )
}