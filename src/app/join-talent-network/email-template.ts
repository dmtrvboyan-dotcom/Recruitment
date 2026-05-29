export interface TalentEmailProps {
  fullName: string
  email: string
  linkedin?: string
  techStack: string[]
  techFreeText?: string
  rateAmount: string
  rateCurrency: string
  rateBasis: string
  openToFulltime: string
  remote: string
  availability: string
}

function label(text: string) {
  return `<span style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;">${text}</span>`
}

function value(text: string) {
  return `<span style="font-size:15px;color:#111827;font-weight:500;">${text || "—"}</span>`
}

function row(labelText: string, valueText: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;vertical-align:top;width:160px;">
        ${label(labelText)}
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f3f4f6;vertical-align:top;">
        ${value(valueText)}
      </td>
    </tr>`
}

function fulltimeLabel(v: string) {
  if (v === "yes") return "Yes"
  if (v === "no") return "No"
  if (v === "depends") return "Depends"
  return v
}

function remoteLabel(v: string) {
  const map: Record<string, string> = {
    "remote-only": "Remote only",
    hybrid: "Hybrid",
    "on-site": "On-site",
    flexible: "Flexible / Open to discuss",
  }
  return map[v] ?? v
}

function availabilityLabel(v: string) {
  const map: Record<string, string> = {
    asap: "ASAP",
    "2-weeks": "2 weeks",
    "1-month": "1 month",
    "2-months": "2 months",
    "3-months-plus": "3+ months",
  }
  return map[v] ?? v
}

export function buildTalentEmailHtml(p: TalentEmailProps): string {
  const stackDisplay = [
    ...p.techStack,
    ...(p.techFreeText ? [p.techFreeText] : []),
  ].join(", ") || "—"

  const rateDisplay =
    p.rateAmount
      ? `${p.rateCurrency} ${p.rateAmount} /${p.rateBasis}`
      : "—"

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#0f1724;padding:28px 36px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#f97047;">
              Talent Network
            </p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
              New Candidate Application
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row("Full name", p.fullName)}
              ${row("Email", p.email)}
              ${row("LinkedIn", p.linkedin ? `<a href="${p.linkedin}" style="color:#f97047;">${p.linkedin}</a>` : "—")}
              ${row("Tech stack", stackDisplay)}
              ${row("Rate", rateDisplay)}
              ${row("Open to full-time", fulltimeLabel(p.openToFulltime))}
              ${row("Remote preference", remoteLabel(p.remote))}
              ${row("Availability", availabilityLabel(p.availability))}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 36px;border-top:1px solid #f3f4f6;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">
              Sent via Talent Network form · recruitment-iota-three.vercel.app
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function buildTalentEmailText(p: TalentEmailProps): string {
  const stackDisplay = [
    ...p.techStack,
    ...(p.techFreeText ? [p.techFreeText] : []),
  ].join(", ") || "—"

  const rateDisplay =
    p.rateAmount
      ? `${p.rateCurrency} ${p.rateAmount} /${p.rateBasis}`
      : "—"

  return `NEW CANDIDATE APPLICATION — TALENT NETWORK

Full Name:          ${p.fullName}
Email:              ${p.email}
LinkedIn:           ${p.linkedin || "—"}
Tech Stack:         ${stackDisplay}
Rate:               ${rateDisplay}
Open to full-time:  ${fulltimeLabel(p.openToFulltime)}
Remote preference:  ${remoteLabel(p.remote)}
Availability:       ${availabilityLabel(p.availability)}
`
}