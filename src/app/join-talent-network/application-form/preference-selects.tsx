"use client"

import { memo } from "react"
import { MapPin, Calendar } from "lucide-react"
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
import { REMOTE_OPTIONS, AVAILABILITY_OPTIONS } from "../data"

interface PreferenceSelectsProps {
  remote: string
  availability: string
  onRemoteChange: (value: string) => void
  onAvailabilityChange: (value: string) => void
}

export const PreferenceSelects = memo(function PreferenceSelects({
  remote,
  availability,
  onRemoteChange,
  onAvailabilityChange,
}: PreferenceSelectsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-5 mb-8">
      {/* Remote preference */}
      <div>
        <FieldLabel icon={MapPin} required>
          Remote preference
        </FieldLabel>
        <Select value={remote} onValueChange={onRemoteChange}>
          <SelectTrigger className={`${fieldInputClass} text-left`} aria-label="Remote preference">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            {REMOTE_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value} className={selectItemClass}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Availability */}
      <div>
        <FieldLabel icon={Calendar} required>
          Availability
        </FieldLabel>
        <Select value={availability} onValueChange={onAvailabilityChange}>
          <SelectTrigger className={`${fieldInputClass} text-left`} aria-label="Availability">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            {AVAILABILITY_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value} className={selectItemClass}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
})
