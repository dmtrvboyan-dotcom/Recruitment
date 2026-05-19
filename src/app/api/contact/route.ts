import { buildEmailHtml, buildEmailText } from "@/app/contacts/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // reCAPTCHA Verification

    const token = formData.get("recaptchaToken")
    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Missing reCAPTCHA token" }, { status: 400 })
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
      }),
    })

    const verifyData = await verifyRes.json()

    console.log("reCAPTCHA verify response:", JSON.stringify(verifyData))

    if (!verifyData.success) {
      console.log("reCAPTCHA error codes:", verifyData["error-codes"])
      return NextResponse.json({ error: "Bot detected" }, { status: 403 })
    }

    // Get / extract the fields

    const mode = (formData.get("mode") as string) ?? "candidate"
    const name = (formData.get("name") as string) ?? ""
    const email = (formData.get("email") as string) || undefined
    const phone = (formData.get("phone") as string) || undefined
    const title = (formData.get("title") as string) || undefined
    const company = (formData.get("company") as string) || undefined
    const message = (formData.get("message") as string) ?? ""


    // For company only option
    const interest = (formData.get("interest") as string) || undefined
    const tags = JSON.parse((formData.get("tags") as string) || "[]") as string[]
    const contactMethods = JSON.parse((formData.get("contactMethods") as string) || "[]") as string[]

    // Build the email

    const templateProps = { mode: mode as "candidate" | "company", name, email, phone, title, company, message, interest, tags, contactMethods }

    const subject = mode === "company"
      ? `New company inquiry from ${name}${company ? ` · ${company}` : ""}`
      : `New candidate application from ${name}`

    // Handle CV attachment (candidate mode)

    const attachments: { filename: string; content: Buffer }[] = []

    if (mode === "candidate") {
      const cv = formData.get("cv") as File | null
      if (cv && cv.size > 0) {
        const buffer = Buffer.from(await cv.arrayBuffer())
        attachments.push({ filename: cv.name, content: buffer })
      }
    }

    // Send via Resend

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject,
      html: buildEmailHtml(templateProps),
      text: buildEmailText(templateProps),
      ...(attachments.length > 0 && { attachments }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}