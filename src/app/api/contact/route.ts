import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name    = formData.get("name")    as string
    const email   = formData.get("email")   as string
    const phone   = formData.get("phone")   as string
    const title   = formData.get("title")   as string
    const message = formData.get("message") as string
    const mode    = formData.get("mode")    as string

    const interest = formData.get("interest") as string | null
    const tagsRaw  = formData.get("tags")     as string | null
    const tags     = tagsRaw ? JSON.parse(tagsRaw) : []

    // ✅ CV attachment — add these lines before resend.emails.send()
    const cvFile = formData.get("cv") as File | null
    const attachments: { filename: string; content: Buffer }[] = []

    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments.push({ filename: cvFile.name, content: buffer })
    }

    // ✅ Pass attachments into the send call
    await resend.emails.send({
      from:    "Contact Form <onboarding@resend.dev>",
      to:      [process.env.TO_EMAIL!],
      replyTo: email,
      subject: `New ${mode} enquiry from ${name}`,
      attachments,                                     // ← here
      html: `
        <h2>New contact form submission</h2>
        <table>
          <tr><td><strong>Type</strong></td><td>${mode}</td></tr>
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Position</strong></td><td>${title}</td></tr>
          ${interest ? `<tr><td><strong>Interest</strong></td><td>${interest}</td></tr>` : ""}
          ${tags.length  ? `<tr><td><strong>Tags</strong></td><td>${tags.join(", ")}</td></tr>` : ""}
        </table>
        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}