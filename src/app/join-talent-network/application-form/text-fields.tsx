"use client"

import { memo } from "react"
import { User, Mail, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { FieldLabel, fieldInputClass } from "./field-label"

interface TextFieldsProps {
    fullName: string
    email: string
    linkedin: string
    onFullNameChange: (value: string) => void
    onEmailChange: (value: string) => void
    onLinkedinChange: (value: string) => void
}

export const TextFields = memo(function TextFields({
    fullName,
    email,
    linkedin,
    onFullNameChange,
    onEmailChange,
    onLinkedinChange,
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
                        placeholder="Jane Doe"
                        required
                        autoComplete="name"
                        className={fieldInputClass}
                    />
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
                        placeholder="jane@example.com"
                        required
                        autoComplete="email"
                        className={fieldInputClass}
                    />
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
                    placeholder="https://linkedin.com/in/your-handle"
                    autoComplete="url"
                    className={fieldInputClass}
                />
            </div>
        </>
    )
})