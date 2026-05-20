// middleware.ts  (place this at the ROOT of your project)
// ─────────────────────────────────────────────────────────────
// Protects /admin/* routes (except /admin/login).
// Redirects to /admin/login if the session cookie is missing.
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard /admin routes
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // Always allow the login page & its API
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/admin/login")
  ) {
    return NextResponse.next();
  }

  const session = req.cookies.get("admin_session")?.value;
  const secret = process.env.ADMIN_SECRET;

  if (!session || session !== secret) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};