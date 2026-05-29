const INTEREST_LABELS: Record<string, string> = {
  hiring: "Hiring for my company",
  demo: "Smart.r ATS Demonstration",
  permanentIT: "Permanent IT Recruitment",
  hireContract: "Contract / Freelance / B2B / Remote",
  confidentialSearch: "Confidential Headhunting & Executive Search",
  eorSearch: "Employer of Record (EOR)",
  ITSalary: "IT Salary Benchmarking & Hiring Insights",
  ITPayroll: "IT Payroll, Compliance & Business Advisory",
}

export function buildCompanyConfirmationHtml(name: string, interest?: string): string {
  const firstName = name.split(" ")[0]
  const interestLabel = interest ? INTEREST_LABELS[interest] ?? interest : null

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111827;border-radius:16px 16px 0 0;padding:32px 40px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#0d9488;">Company Inquiry</p>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.02em;">We've received your inquiry.</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px 28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Hi <strong>${firstName}</strong>,
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Thanks for getting in touch${interestLabel ? ` regarding <strong>${interestLabel}</strong>` : ""}. We've received your inquiry and a senior partner will be in touch within <strong>24 hours</strong>.
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              If you'd like to speak sooner, feel free to book a free 30-minute intro call directly — we're available Monday to Friday, 9am–6pm EET.
            </p>
            <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">
              We look forward to working with you.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="background:#ffffff;padding:0 40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <div style="height:1px;background:#f3f4f6;"></div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;">
            <p style="margin:0 0 4px;font-size:13px;color:#6b7280;">The Recruitment.bg Team</p>
            <p style="margin:0;font-size:11px;color:#9ca3af;">This is an automated confirmation — please do not reply to this email.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function buildCompanyConfirmationText(name: string, interest?: string): string {
  const firstName = name.split(" ")[0]
  const interestLabel = interest ? INTEREST_LABELS[interest] ?? interest : null

  return `Hi ${firstName},

Thanks for getting in touch${interestLabel ? ` regarding ${interestLabel}` : ""}. We've received your inquiry and a senior partner will be in touch within 24 hours.

If you'd like to speak sooner, feel free to book a free 30-minute intro call directly — we're available Monday to Friday, 9am–6pm EET.

We look forward to working with you.

The Recruitment.bg Team
(This is an automated confirmation — please do not reply to this email.)
`
}