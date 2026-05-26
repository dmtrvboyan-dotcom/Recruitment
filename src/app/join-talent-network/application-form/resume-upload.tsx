"use client"

import { memo, useCallback, useState, useEffect } from "react"
import { Upload, FileText, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FieldLabel, FieldError } from "./field-label"

interface ResumeUploadProps {
  resume: File | null
  onChange: (file: File | null) => void
  error?: string
}

export const ResumeUpload = memo(function ResumeUpload({
  resume,
  onChange,
  error,
}: ResumeUploadProps) {
  const [showToast, setShowToast] = useState(false)

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]
      if (f) {
        onChange(f)
        setShowToast(true)
      }
    },
    [onChange]
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onChange(null)
      setShowToast(false)
    },
    [onChange]
  )

  // Auto-dismiss the toast after 3.5s
  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 3500)
    return () => clearTimeout(timer)
  }, [showToast])

  return (
    <div className="mb-7 relative">
      <FieldLabel icon={Upload} htmlFor="resume-upload" required>
        Resume / CV
      </FieldLabel>

      <label
        htmlFor="resume-upload"
        className={`relative flex items-center justify-between gap-3 w-full border border-dashed rounded-xl px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-brand-white/6 ${
          error
            ? "border-red-500/60 bg-brand-white/4"
            : resume
            ? "border-brand-coral/40 bg-brand-coral/4"
            : "border-brand-white/15 bg-brand-white/4 hover:border-brand-coral/50"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-brand-coral/15 flex items-center justify-center shrink-0">
            {resume ? (
              <FileText className="w-4 h-4 text-brand-coral" strokeWidth={1.8} />
            ) : (
              <Upload className="w-4 h-4 text-brand-coral" strokeWidth={1.8} />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-brand-white truncate">
              {resume ? resume.name : "Drop your file or browse"}
            </p>
            <p className="text-[11px] text-brand-white/40 mt-0.5">
              {resume
                ? `${(resume.size / 1024).toFixed(0)} KB`
                : "PDF, DOC, DOCX · 10MB max"}
            </p>
          </div>
        </div>

        {resume && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            aria-label="Remove file"
            className="w-7 h-7 rounded-full bg-brand-white/10 hover:bg-brand-white/20 text-brand-white hover:text-brand-white shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </Button>
        )}

        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFile}
          className="sr-only"
        />
      </label>

      <FieldError message={error} />

      {/* ── Upload success toast ─────────────────────────────────── */}
      {showToast && (
        <div
          className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 text-xs font-medium animate-[fadeSlideIn_0.3s_ease]"
          role="status"
        >
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          Resume uploaded successfully
        </div>
      )}
    </div>
  )
})