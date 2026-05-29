export function buildCandidateConfirmationHtml(name: string): string {
  const firstName = name.split(" ")[0]

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
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f97316;">Candidate</p>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.02em;">We've received your message.</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px 28px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Hi <strong>${firstName}</strong>,
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Thanks for reaching out. We've received your message and a senior partner will get back to you within <strong>24 hours</strong>.
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              In the meantime, feel free to check your spam folder just in case — and if you have any urgent questions, you can always reach us directly on LinkedIn or by phone.
            </p>
            <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">
              We look forward to speaking with you.
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

export function buildCandidateConfirmationText(name: string): string {
  const firstName = name.split(" ")[0]
  return `Hi ${firstName},

Thanks for reaching out. We've received your message and a senior partner will get back to you within 24 hours.

In the meantime, feel free to check your spam folder just in case — and if you have any urgent questions, you can always reach us directly on LinkedIn or by phone.

We look forward to speaking with you.

The Recruitment.bg Team
(This is an automated confirmation — please do not reply to this email.)
`
}