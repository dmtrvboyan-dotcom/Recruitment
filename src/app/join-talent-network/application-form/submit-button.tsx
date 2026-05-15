"use client"

import { memo } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SubmitButtonProps {
  submitting: boolean
}

export const SubmitButton = memo(function SubmitButton({
  submitting,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={submitting}
      className="group w-full bg-brand-coral hover:bg-brand-coral-hover disabled:opacity-70 disabled:cursor-not-allowed text-brand-white py-5 h-auto text-sm font-bold tracking-[0.22em] uppercase rounded-full cursor-pointer transition-colors duration-200"
    >
      {submitting ? (
        <span className="flex items-center justify-center gap-3">
          <Loader2 className="w-4 h-4 animate-spin" />
          Submitting…
        </span>
      ) : (
        <span className="flex items-center justify-center gap-3">
          Join the Network
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      )}
    </Button>
  )
})