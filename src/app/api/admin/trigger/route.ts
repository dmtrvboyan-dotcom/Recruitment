// app/api/admin/trigger/route.ts
import { NextRequest, NextResponse } from "next/server"
import { verifySessionToken, COOKIE_NAME } from "@/lib/session"

export const runtime = "nodejs"
export const maxDuration = 60

export async function POST(req: NextRequest) {
  // Verify the admin session token properly
  const token = req.cookies.get(COOKIE_NAME)?.value
  if (!token || !process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const valid = await verifySessionToken(token, process.env.ADMIN_SECRET)
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Call the cron endpoint server-side with the real CRON_SECRET
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  const res = await fetch(`${baseUrl}/api/cron/generate-blog`, {
    headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
  })

  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}