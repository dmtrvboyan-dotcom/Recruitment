import { NextResponse } from "next/server"
import { COOKIE_NAME } from "@/lib/session"

export const runtime = "nodejs"

export async function POST() {
  const res = NextResponse.json({ success: true })

  res.cookies.delete(COOKIE_NAME)

  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  })

  return res
}