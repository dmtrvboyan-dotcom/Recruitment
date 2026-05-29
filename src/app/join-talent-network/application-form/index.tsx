"use client"

import ReCAPTCHA from "react-google-recaptcha"
import { memo, useCallback, useRef, useState } from "react"
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

export type FieldErrors = Record<string, string | undefined>

function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
};

function isValidLinkedin(v: string) {
    if (!v) return true
    return /^https?:\/\/(www\.)?linkedin\.com\/in\/.+/i.test(v)
};

export const ApplicationForm = memo(function ApplicationForm() {
    const { ref: formRef, visible: formVisible } = useInView<HTMLFormElement>()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [resume, setResume] = useState<File | null>(null)
    const [stacks, setStacks] = useState<string[]>([])
    const [stackFreeText, setStackFreeText] = useState("")
    const [rateAmount, setRateAmount] = useState("")
    const [rateBasis, setRateBasis] = useState<RateBasis>("hour")
    const [rateCurrency, setRateCurrency] = useState("EUR")
    const [openFulltime, setOpenFulltime] = useState<FulltimeValue>("yes")
    const [remote, setRemote] = useState("remote-only")
    const [availability, setAvailability] = useState("2-weeks")
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const [captchaToken, setCaptchaToken] = useState<string | null>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    // Track which fields have been blurred / interacted with
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    // Whether the user has attempted a submit (shows all errors)
    const [submitAttempted, setSubmitAttempted] = useState(false)

    const markTouched = useCallback((field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }))
    }, [])

    // ── Derive errors from current state ──────────────────────────────
    const computeErrors = useCallback((): FieldErrors => {
        const e: FieldErrors = {}

        if (!fullName.trim()) e.fullName = "Full name is required"
        else if (fullName.trim().length < 2) e.fullName = "Name must be at least 2 characters"

        if (!email.trim()) e.email = "Email is required"
        else if (!isValidEmail(email)) e.email = "Enter a valid email address"

        if (linkedin && !isValidLinkedin(linkedin))
            e.linkedin = "Enter a valid LinkedIn URL (https://linkedin.com/in/…)"

        if (!resume) e.resume = "Please upload your resume"

        if (stacks.length === 0 && !stackFreeText.trim())
            e.techStack = "Select at least one technology or type your stack"

        if (!rateAmount.trim()) e.rateAmount = "Rate is required"
        else if (Number(rateAmount) <= 0) e.rateAmount = "Rate must be greater than 0"

        return e
    }, [fullName, email, linkedin, resume, stacks, stackFreeText, rateAmount])

    const errors = computeErrors()

    // Only show an error when the field has been touched or submit attempted
    const visibleError = useCallback(
        (field: string) => (touched[field] || submitAttempted ? errors[field] : undefined),
        [touched, submitAttempted, errors]
    )

    const toggleStack = useCallback((tech: string) => {
        setStacks((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        )
        setTouched((prev) => ({ ...prev, techStack: true }))
    }, [])

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            setSubmitAttempted(true)

            const errs = computeErrors()
            if (Object.keys(errs).length > 0) return

            if (!captchaToken) {
                alert("Please complete the reCAPTCHA")
                return
            }

            setSubmitting(true)
            try {
                const formData = new FormData()
                formData.append("fullName", fullName)
                formData.append("email", email)
                formData.append("linkedin", linkedin)
                formData.append("techStack", JSON.stringify(stacks))
                formData.append("techFreeText", stackFreeText)
                formData.append("rateAmount", rateAmount)
                formData.append("rateCurrency", rateCurrency)
                formData.append("rateBasis", rateBasis)
                formData.append("openToFulltime", openFulltime)
                formData.append("remote", remote)
                formData.append("availability", availability)
                formData.append("recaptchaToken", captchaToken)
                if (resume) formData.append("resume", resume)

                const res = await fetch("/api/talent", { method: "POST", body: formData })
                if (!res.ok) throw new Error("Submission failed")

                setSubmitted(true)
                recaptchaRef.current?.reset()
                setCaptchaToken(null)
            } catch (err) {
                console.error(err)
                alert("Something went wrong. Please try again.")
            } finally {
                setSubmitting(false)
            }
        },
        [computeErrors, captchaToken, fullName, email, linkedin, stacks, stackFreeText, rateAmount, rateCurrency, rateBasis, openFulltime, remote, availability, resume]
    )

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")

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
                className="absolute -top-32 -left-32 w-120 h-120 rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute bottom-0 -right-32 w-105 h-105 rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
            />

            <div
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 -right-10 text-[18vw] font-bold uppercase tracking-tighter text-brand-white/2 leading-none select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                APPLY
            </div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 xl:gap-20 items-start">
                    <FormAside />

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        noValidate
                        className="relative rounded-3xl bg-brand-white/3 border border-brand-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md"
                        style={{
                            opacity: formVisible ? 1 : 0,
                            transform: formVisible ? "translateY(0)" : "translateY(28px)",
                            transition:
                                "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
                        }}
                    >
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-brand-white/10">
                            <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-white/40">
                                Step 1 of 1 – Profile Submission
                            </span>
                        </div>

                        <TextFields
                            fullName={fullName}
                            email={email}
                            linkedin={linkedin}
                            onFullNameChange={setFullName}
                            onEmailChange={setEmail}
                            onLinkedinChange={setLinkedin}
                            onBlur={markTouched}
                            errors={{
                                fullName: visibleError("fullName"),
                                email: visibleError("email"),
                                linkedin: visibleError("linkedin"),
                            }}
                        />

                        <ResumeUpload
                            resume={resume}
                            onChange={setResume}
                            error={visibleError("resume")}
                        />

                        <TechStackField
                            selected={stacks}
                            onToggle={toggleStack}
                            freeText={stackFreeText}
                            onFreeTextChange={(v) => {
                                setStackFreeText(v)
                                setTouched((prev) => ({ ...prev, techStack: true }))
                            }}
                            error={visibleError("techStack")}
                        />

                        <RateField
                            amount={rateAmount}
                            currency={rateCurrency}
                            basis={rateBasis}
                            onAmountChange={setRateAmount}
                            onCurrencyChange={setRateCurrency}
                            onBasisChange={setRateBasis}
                            onBlur={() => markTouched("rateAmount")}
                            error={visibleError("rateAmount")}
                        />

                        <FulltimeToggle value={openFulltime} onChange={setOpenFulltime} />

                        <PreferenceSelects
                            remote={remote}
                            availability={availability}
                            onRemoteChange={setRemote}
                            onAvailabilityChange={setAvailability}
                        />

                        {/* reCAPTCHA */}
                        <div className="flex justify-center mb-6">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={siteKey}
                                onChange={(token) => setCaptchaToken(token)}
                                theme="dark"
                            />
                        </div>

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
                            . Your information stays confidential – always.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
})