"use client"

import { memo } from "react"
import { DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FieldLabel,
  fieldInputClass,
  selectContentClass,
  selectItemClass,
} from "./field-label"

export type RateBasis = "hour" | "day"

interface RateFieldProps {
  amount: string
  currency: string
  basis: RateBasis
  onAmountChange: (value: string) => void
  onCurrencyChange: (value: string) => void
  onBasisChange: (basis: RateBasis) => void
}

const CURRENCIES = [
  { value: "EUR", label: "EUR €" },
  { value: "USD", label: "USD $" },
  { value: "GBP", label: "GBP £" },
]

export const RateField = memo(function RateField({
  amount,
  currency,
  basis,
  onAmountChange,
  onCurrencyChange,
  onBasisChange,
}: RateFieldProps) {
  return (
    <div className="mb-5">
      <FieldLabel icon={DollarSign} htmlFor="rate-amount">
        Hourly / day rate
      </FieldLabel>

      <div className="grid grid-cols-[110px_1fr_120px] gap-2">

        <Select value={currency} onValueChange={onCurrencyChange}>
          <SelectTrigger className={`${fieldInputClass} text-left`} aria-label="Currency">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            {CURRENCIES.map((c) => (
              <SelectItem key={c.value} value={c.value} className={selectItemClass}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>


        <Input
          id="rate-amount"
          type="number"
          min={0}
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="e.g. 75"
          inputMode="numeric"
          className={fieldInputClass}
        />

        <div
          className="flex bg-brand-white/[0.04] border border-brand-white/10 rounded-xl p-1"
          role="group"
          aria-label="Rate basis"
        >
          {(["hour", "day"] as const).map((b) => (
            <Button
              key={b}
              type="button"
              variant="ghost"
              onClick={() => onBasisChange(b)}
              aria-pressed={basis === b}
              className={`flex-1 h-auto py-1.5 px-0 text-[11px] font-semibold uppercase tracking-wider rounded-lg transition-all duration-150 ${
                basis === b
                  ? "bg-brand-coral text-brand-white shadow-sm hover:bg-brand-coral hover:text-brand-white"
                  : "text-brand-white/50 hover:text-brand-white hover:bg-transparent"
              }`}
            >
              /{b}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
})