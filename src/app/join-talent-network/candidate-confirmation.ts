export function buildCandidateConfirmationHtml(firstName: string): string {
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
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#7291C7;">
              Talent Network
            </p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
              We've got your profile.
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 36px 28px;">
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Hi <strong>${firstName}</strong>,
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Thanks for joining our Talent Network. We've received your application and a senior recruiter will review your profile within <strong>48 hours</strong>.
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              We only reach out when there's a genuine match. When something aligned opens up, you'll hear from us directly.
            </p>
            <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">
              In the meantime, feel free to explore what we do at our website:
            </p>
              <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">
                https://recruitment-iota-three.vercel.app/
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 36px;">
            <div style="height:1px;background:#f3f4f6;"></div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px;">
            <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">
              The Recruitment.bg Team<br />
              <span style="font-size:11px;color:#9ca3af;">This is an automated confirmation — please do not reply to this email.</span>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function buildCandidateConfirmationText(firstName: string): string {
    return `Hi ${firstName},

Thanks for joining our Talent Network. We've received your application and a senior recruiter will review your profile within 48 hours.

We only reach out when there's a genuine match — no generic outreach, no spam. When something aligned opens up, you'll hear from us directly.

The Recruitment.bg Team
(This is an automated confirmation — please do not reply to this email.)
`
}