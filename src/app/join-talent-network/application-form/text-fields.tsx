"use client"

import { memo } from "react"
import { User, Mail, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FieldLabel, FieldError, fieldInputClass, fieldInputErrorClass } from "./field-label"

interface TextFieldsProps {
    fullName: string
    email: string
    linkedin: string
    onFullNameChange: (value: string) => void
    onEmailChange: (value: string) => void
    onLinkedinChange: (value: string) => void
    onBlur: (field: string) => void
    errors: {
        fullName?: string
        email?: string
        linkedin?: string
    }
}

export const TextFields = memo(function TextFields({
    fullName,
    email,
    linkedin,
    onFullNameChange,
    onEmailChange,
    onLinkedinChange,
    onBlur,
    errors,
}: TextFieldsProps) {
    return (
        <>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                    <FieldLabel icon={User} htmlFor="full-name" required>
                        Full name
                    </FieldLabel>
                    <Input
                        id="full-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => onFullNameChange(e.target.value)}
                        onBlur={() => onBlur("fullName")}
                        placeholder="Jane Doe"
                        required
                        autoComplete="name"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "full-name-error" : undefined}
                        className={errors.fullName ? fieldInputErrorClass : fieldInputClass}
                    />
                    <FieldError message={errors.fullName} />
                </div>
                <div>
                    <FieldLabel icon={Mail} htmlFor="email" required>
                        Email
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => onEmailChange(e.target.value)}
                        onBlur={() => onBlur("email")}
                        placeholder="jane@example.com"
                        required
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email ? fieldInputErrorClass : fieldInputClass}
                    />
                    <FieldError message={errors.email} />
                </div>
            </div>

            <div className="mb-5">
                <FieldLabel icon={Linkedin} htmlFor="linkedin">
                    LinkedIn profile
                </FieldLabel>
                <Input
                    id="linkedin"
                    type="url"
                    value={linkedin}
                    onChange={(e) => onLinkedinChange(e.target.value)}
                    onBlur={() => onBlur("linkedin")}
                    placeholder="https://linkedin.com/in/your-handle"
                    autoComplete="url"
                    aria-invalid={!!errors.linkedin}
                    aria-describedby={errors.linkedin ? "linkedin-error" : undefined}
                    className={errors.linkedin ? fieldInputErrorClass : fieldInputClass}
                />
                <FieldError message={errors.linkedin} />
            </div>
        </>
    )
})