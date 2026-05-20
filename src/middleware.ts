// src/middleware.ts  ← place inside src/ folder (not project root)
import { NextRequest, NextResponse } from "next/server"
import { verifySessionToken, COOKIE_NAME } from "@/lib/session"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow login page and login API through always
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/admin/login/") ||
    pathname.startsWith("/api/admin/login")
  ) {
    return NextResponse.next()
  }

  // Protect all /admin and /api/admin routes
  if (
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname.startsWith("/api/admin/")
  ) {
    const token = req.cookies.get(COOKIE_NAME)?.value
    const secret = process.env.ADMIN_SECRET

    if (!token || !secret) {
      return redirectToLogin(req)
    }

    const valid = await verifySessionToken(token, secret)
    if (!valid) {
      const res = redirectToLogin(req)
      res.cookies.delete(COOKIE_NAME)
      return res
    }
  }

  return NextResponse.next()
}

function redirectToLogin(req: NextRequest) {
  const loginUrl = new URL("/admin/login", req.url)
  loginUrl.searchParams.set("from", req.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  // Run on all routes — the logic above decides what to protect
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
}