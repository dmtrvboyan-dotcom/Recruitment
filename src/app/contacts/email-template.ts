type Mode = "candidate" | "company"

interface EmailTemplateProps {
    mode: Mode
    name: string
    email?: string
    phone?: string
    title?: string
    company?: string
    message: string
    interest?: string
    tags?: string[]
    contactMethods?: string[]
}

const INTEREST_LABELS: Record<string, string> = {
    hiring: "Hiring for my company",
    demo: "Smart.r ATS Demonstration",
    permanentIT: "Permanent IT Recruitment",
    hireContract: "Hire Contract or Freelance Developers",
    projectIT: "Project-Based IT Recruitment",
    remoteIT: "Remote IT Hiring & Global Talent",
    executiveSearch: "Executive Search & IT Headhunting",
    salary: "IT Salary Benchmarking",
}

function row(label: string, value?: string | null) {
    if (!value) return ""
    return `
    <tr>
      <td style="padding:10px 16px;width:140px;vertical-align:top;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;color:#111827;font-size:14px;">${value}</td>
    </tr>
  `
}

export function buildEmailHtml(props: EmailTemplateProps): string {
    const {
        mode, name, email, phone, title, company,
        message, interest, tags, contactMethods,
    } = props

    const isCompany = mode === "company"
    const accentColor = isCompany ? "#0d9488" : "#f97316"
    const modeLabel = isCompany ? "Company Inquiry" : "Candidate Application"

    const interestLabel = interest ? INTEREST_LABELS[interest] ?? interest : null
    const tagsStr = tags?.length ? tags.join(", ") : null
    const methodsStr = contactMethods?.length ? contactMethods.join(", ") : null

    return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111827;border-radius:16px 16px 0 0;padding:32px 40px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:${accentColor};">${modeLabel}</p>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.02em;">New message from ${name}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px 24px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f3f4f6;border-radius:10px;overflow:hidden;">
              ${row("Name", name)}
              ${row("Email", email)}
              ${row("Phone", phone)}
              ${row("Title", title)}
              ${isCompany ? row("Company", company) : ""}
              ${isCompany && interestLabel ? row("Interest", interestLabel) : ""}
              ${isCompany && tagsStr ? row("Focus areas", tagsStr) : ""}
              ${isCompany && methodsStr ? row("Contact via", methodsStr) : ""}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="background:#ffffff;padding:0 40px 32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;">Message</p>
            <div style="background:#f9fafb;border:1px solid #f3f4f6;border-radius:10px;padding:20px 24px;color:#1f2937;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">Sent via the contact form on your website</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}

export function buildEmailText(props: EmailTemplateProps): string {
    const {
        mode, name, email, phone, title, company,
        message, interest, tags, contactMethods,
    } = props

    const lines = [
        `NEW ${mode.toUpperCase()} INQUIRY`,
        `${"─".repeat(40)}`,
        `Name:    ${name}`,
        email ? `Email:   ${email}` : "",
        phone ? `Phone:   ${phone}` : "",
        title ? `Title:   ${title}` : "",
        company ? `Company: ${company}` : "",
        interest ? `Interest:    ${INTEREST_LABELS[interest] ?? interest}` : "",
        tags?.length ? `Focus areas: ${tags.join(", ")}` : "",
        contactMethods?.length ? `Contact via: ${contactMethods.join(", ")}` : "",
        "",
        "MESSAGE",
        `${"─".repeat(40)}`,
        message,
    ]

    return lines.filter(Boolean).join("\n")
}