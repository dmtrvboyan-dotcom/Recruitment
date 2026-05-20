// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from "next/server"
import { createSessionToken, cookieOptions, COOKIE_NAME } from "@/lib/session"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  if (!password || password !== process.env.ADMIN_SECRET) {
    // Same error for wrong password and missing password
    // (don't reveal which one it is)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

const token = await createSessionToken(process.env.ADMIN_SECRET!)

  const res = NextResponse.json({ success: true })
  res.cookies.set(COOKIE_NAME, token, cookieOptions(8 * 60 * 60)) // 8h
  return res
}