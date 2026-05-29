import { NextResponse } from "next/server"
import { Resend } from "resend"
import { buildTalentEmailHtml, buildTalentEmailText } from "../../join-talent-network/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // ── reCAPTCHA verification ───────────────────────────────────────
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
    if (!verifyData.success) {
      return NextResponse.json({ error: "Bot detected" }, { status: 403 })
    }

    // ── Parse fields ─────────────────────────────────────────────────
    const fullName       = (formData.get("fullName") as string) ?? ""
    const email          = (formData.get("email") as string) ?? ""
    const linkedin       = (formData.get("linkedin") as string) || undefined
    const techStack      = JSON.parse((formData.get("techStack") as string) || "[]") as string[]
    const techFreeText   = (formData.get("techFreeText") as string) || undefined
    const rateAmount     = (formData.get("rateAmount") as string) || ""
    const rateCurrency   = (formData.get("rateCurrency") as string) || "EUR"
    const rateBasis      = (formData.get("rateBasis") as string) || "hour"
    const openToFulltime = (formData.get("openToFulltime") as string) || "depends"
    const remote         = (formData.get("remote") as string) || ""
    const availability   = (formData.get("availability") as string) || ""

    // ── CV attachment ────────────────────────────────────────────────
    const attachments: { filename: string; content: Buffer }[] = []
    const cv = formData.get("resume") as File | null
    if (cv && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer())
      attachments.push({ filename: cv.name, content: buffer })
    }

    // ── Send email ───────────────────────────────────────────────────
    const templateProps = {
      fullName,
      email,
      linkedin,
      techStack,
      techFreeText,
      rateAmount,
      rateCurrency,
      rateBasis,
      openToFulltime,
      remote,
      availability,
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New candidate application from ${fullName}`,
      html: buildTalentEmailHtml(templateProps),
      text: buildTalentEmailText(templateProps),
      ...(attachments.length > 0 && { attachments }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("Talent route error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}