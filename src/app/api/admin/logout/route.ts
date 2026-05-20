// app/api/admin/logout/route.ts
import { NextResponse } from "next/server"
import { COOKIE_NAME } from "@/lib/session"

export const runtime = "nodejs"

export async function POST() {
  const res = NextResponse.json({ success: true })

  // Properly delete the cookie — more reliable than maxAge: 0
  res.cookies.delete(COOKIE_NAME)

  // Belt-and-suspenders: also explicitly expire it
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0), // Jan 1 1970 — forces deletion in all browsers
  })

  return res
}