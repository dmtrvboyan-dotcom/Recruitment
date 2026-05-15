"use client"

import { memo, useCallback } from "react"
import { Upload, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FieldLabel } from "./field-label"

interface ResumeUploadProps {
  resume: File | null
  onChange: (file: File | null) => void
}

export const ResumeUpload = memo(function ResumeUpload({
  resume,
  onChange,
}: ResumeUploadProps) {
  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]
      if (f) onChange(f)
    },
    [onChange]
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onChange(null)
    },
    [onChange]
  )

  return (
    <div className="mb-7">
      <FieldLabel icon={Upload} htmlFor="resume-upload" required>
        Resume / CV
      </FieldLabel>

      <label
        htmlFor="resume-upload"
        className={`relative flex items-center justify-between gap-3 w-full bg-brand-white/[0.04] border border-dashed rounded-xl px-4 py-4 cursor-pointer transition-all duration-200 hover:bg-brand-white/[0.06] ${
          resume
            ? "border-brand-coral/40 bg-brand-coral/[0.04]"
            : "border-brand-white/15 hover:border-brand-coral/50"
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
          required={!resume}
        />
      </label>
    </div>
  )
})