"use client"

import { memo, useCallback, useState } from "react"
import Link from "next/link"

import { useInView } from "./use-in-view"
import { FormAside } from "./form-aside"
import { SuccessState } from "./success-state"
import { TextFields } from "./text-fields"
import { ResumeUpload } from "./resume-upload"
import { TechStackField } from "./tech-stack-field"
import { RateField, type RateBasis } from "./rate-field"
import { FulltimeToggle, type FulltimeValue } from "./fulltime-toggle"
import { PreferenceSelects } from "./preference-selects"
import { SubmitButton } from "./submit-button"


export const ApplicationForm = memo(function ApplicationForm() {
    const { ref: formRef, visible: formVisible } = useInView<HTMLFormElement>()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [resume, setResume] = useState<File | null>(null)
    const [stacks, setStacks] = useState<string[]>([])
    const [rateAmount, setRateAmount] = useState("")
    const [rateBasis, setRateBasis] = useState<RateBasis>("hour")
    const [rateCurrency, setRateCurrency] = useState("EUR")
    const [openFulltime, setOpenFulltime] = useState<FulltimeValue>("yes")
    const [remote, setRemote] = useState("remote-only")
    const [availability, setAvailability] = useState("2-weeks")
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const toggleStack = useCallback((tech: string) => {
        setStacks((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        )
    }, [])

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        // TODO: replace with a real API route, e.g.:
        //   const fd = new FormData()
        //   fd.append("fullName", fullName) ...
        //   await fetch("/api/applications", { method: "POST", body: fd })
        await new Promise((r) => setTimeout(r, 1200))

        setSubmitting(false)
        setSubmitted(true)
    }, [])

    if (submitted) {
        return <SuccessState firstName={fullName.split(" ")[0]} />
    }

    return (
        <section
            id="apply"
            className="relative w-full bg-brand-navy overflow-hidden"
        >
            <div
                aria-hidden
                className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
            />

            <div
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 -right-10 text-[18vw] font-black uppercase tracking-tighter text-brand-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                APPLY
            </div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 xl:gap-20 items-start">

                    <FormAside />

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="relative rounded-3xl bg-brand-white/[0.03] border border-brand-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md"
                        style={{
                            opacity: formVisible ? 1 : 0,
                            transform: formVisible ? "translateY(0)" : "translateY(28px)",
                            transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
                        }}
                    >
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-brand-white/10">
                            <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-white/40">
                                Step 1 of 1 — Profile Submission
                            </span>
                        </div>

                        <TextFields
                            fullName={fullName}
                            email={email}
                            linkedin={linkedin}
                            onFullNameChange={setFullName}
                            onEmailChange={setEmail}
                            onLinkedinChange={setLinkedin}
                        />

                        <ResumeUpload resume={resume} onChange={setResume} />

                        <TechStackField selected={stacks} onToggle={toggleStack} />

                        <RateField
                            amount={rateAmount}
                            currency={rateCurrency}
                            basis={rateBasis}
                            onAmountChange={setRateAmount}
                            onCurrencyChange={setRateCurrency}
                            onBasisChange={setRateBasis}
                        />

                        <FulltimeToggle value={openFulltime} onChange={setOpenFulltime} />

                        <PreferenceSelects
                            remote={remote}
                            availability={availability}
                            onRemoteChange={setRemote}
                            onAvailabilityChange={setAvailability}
                        />

                        <SubmitButton submitting={submitting} />

                        <p className="text-center text-[11px] text-brand-white/35 mt-5 leading-relaxed">
                            By applying you agree to our{" "}
                            <Link
                                href="/terms"
                                className="text-brand-white/60 hover:text-brand-coral underline-offset-4 hover:underline transition-colors"
                            >
                                terms
                            </Link>{" "}
                            &amp;{" "}
                            <Link
                                href="/privacy"
                                className="text-brand-white/60 hover:text-brand-coral underline-offset-4 hover:underline transition-colors"
                            >
                                privacy policy
                            </Link>
                            . Your information stays confidential — always.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    )
})
