"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { MessageField } from "./message-field"
import { TagInput } from "./tag-input"
import { Phone } from "lucide-react"

type Mode = "candidate" | "company"
type Interest = "hiring" | "demo" | "salary"

interface ContactFormProps {
  mode?: Mode
}

const CAPTCHA_QUESTION = "8 + 5?"
const CAPTCHA_ANSWER = "13"

const SHARED_TAGS = ["urgent", "follow-up", "question", "custom-request"]

const INTEREST_TAGS: Record<Interest, string[]> = {
  hiring: ["hiring", "recruitment", "open-roles", "budget", "timeline", ...SHARED_TAGS],
  demo: ["demo", "product-tour", "sales", "pricing", "meeting", ...SHARED_TAGS],
  salary: ["salary", "benchmarking", "compensation", "market-data", ...SHARED_TAGS],
}

export function ContactForm({ mode = "candidate" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [interest, setInterest] = React.useState<Interest>("hiring")
  const [tags, setTags] = React.useState<string[]>([])
  const [file, setFile] = React.useState<File | null>(null)
  const [captchaInput, setCaptchaInput] = React.useState("")
  const [captchaError, setCaptchaError] = React.useState("")

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
    setCaptchaInput("")
    setCaptchaError("")
    setFile(null)
    setTags([])
  }

  async function onSubmit(data: ContactFormData) {
    setCaptchaError("")

    if (captchaInput.trim() !== CAPTCHA_ANSWER) {
      setCaptchaError("Incorrect answer. Please try again.")
      return
    }

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, val]) => formData.append(key, val))
      formData.append("mode", mode)
      if (mode === "company") {
        formData.append("interest", interest)
        formData.append("tags", JSON.stringify(tags))
      }
      if (mode === "candidate" && file) formData.append("cv", file)

      const response = await fetch("/api/contact", { method: "POST", body: formData })
      if (!response.ok) throw new Error("Failed to send message")

      setIsSubmitted(true)
      form.reset()
      setCaptchaInput("")
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
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 ring-8 ring-emerald-50/50">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-3">Message Sent!</h3>
        <p className="text-brand-navy/60 max-w-xs mx-auto">
          Thanks for reaching out. A senior partner will contact you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-10 rounded-full px-8 border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white transition-all" 
          onClick={resetForm}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70">
                {mode === "company" ? "Company Name" : "Full Name"}
              </FormLabel>
              <FormControl>
                <Input className="h-12 rounded-xl border-brand-navy/10 focus:border-brand-blue focus:ring-brand-blue/20 bg-brand-bg/50" placeholder={mode === "company" ? "e.g. TechCorp" : "John Doe"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70">Email Address</FormLabel>
              <FormControl>
                <Input className="h-12 rounded-xl border-brand-navy/10 focus:border-brand-blue focus:ring-brand-blue/20 bg-brand-bg/50" type="email" placeholder="name@work.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Shared styling for phone/title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70">Phone Number</FormLabel>
              <FormControl>
                <Input className="h-12 rounded-xl border-brand-navy/10 focus:border-brand-blue focus:ring-brand-blue/20 bg-brand-bg/50" type="tel" placeholder="+359..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70">Position</FormLabel>
              <FormControl>
                <Input className="h-12 rounded-xl border-brand-navy/10 focus:border-brand-blue focus:ring-brand-blue/20 bg-brand-bg/50" placeholder={mode === "company" ? "Hiring Manager" : "Lead Developer"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {mode === "company" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70">I'm interested in:</FormLabel>
              <Select value={interest} onValueChange={handleInterestChange}>
                <SelectTrigger className="h-12 w-full mt-2 rounded-xl border-brand-navy/10 bg-brand-bg/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-brand-navy/10">
                  <SelectItem value="hiring">Hiring for my company</SelectItem>
                  <SelectItem value="demo">Smart.r ATS demonstration</SelectItem>
                  <SelectItem value="salary">Salary Benchmarking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <FormLabel className="text-[11px] font-bold uppercase tracking-widest text-brand-navy/70 mb-2 block">
                Topics <span className="ml-1 opacity-40 font-normal">(Select up to 5)</span>
              </FormLabel>
              <TagInput
                value={tags}
                onChange={setTags}
                suggestions={INTEREST_TAGS[interest]}
                placeholder="Add focus areas..."
              />
            </div>
          </div>
        )}

        <MessageField form={form} interest={interest} mode={mode} />

        {/* Security / Proof of life */}
        <div className="p-6 bg-brand-bg rounded-2xl border border-brand-navy/5 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0">
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/40 mb-2">Security Check</p>
             <div className="bg-white border border-brand-navy/10 rounded-lg px-4 py-2 font-mono text-xl font-bold text-brand-blue">
                {CAPTCHA_QUESTION}
             </div>
          </div>
          <div className="flex-1 w-full">
            <Input
              placeholder="Result"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="h-12 bg-white rounded-xl border-brand-navy/10"
            />
            {captchaError && <p className="text-brand-coral text-xs font-bold mt-2 uppercase tracking-wide">{captchaError}</p>}
          </div>
        </div>

        {mode === "candidate" && (
          <div className="pt-2 animate-fade-in">
            <FormLabel className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 mb-3 block">Upload CV (PDF/DOCX)</FormLabel>
            <div className="relative group">
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
                className="h-14 cursor-pointer file:bg-brand-navy file:text-white file:border-0 file:rounded-lg file:px-4 file:mr-4 file:text-xs file:uppercase file:tracking-widest file:font-bold hover:border-brand-blue transition-colors"
              />
            </div>
            {file && (
              <div className="mt-3 flex items-center text-xs text-brand-blue font-bold uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 mr-2" /> {file.name} attached
              </div>
            )}
          </div>
        )}

        <div className="pt-4 flex flex-col items-center gap-6">
            <Button
              type="submit"
              className="w-full h-14 bg-brand-coral hover:bg-brand-coral-hover text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-xl shadow-brand-coral/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? <><Spinner className="mr-2 h-4 w-4" /> Processing...</> : "Send Message"}
            </Button>
            
            <a href="tel:+359888123456" className="group flex items-center gap-3 text-brand-navy/40 hover:text-brand-blue transition-colors duration-300">
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span className="text-xs font-bold uppercase tracking-widest">+359 888 123 456</span>
            </a>
        </div>
      </form>
    </Form>
  )
}