// app/admin/login/page.tsx  (server component)
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifySessionToken, COOKIE_NAME } from "@/lib/session"
import { Suspense } from "react"
import { LoginForm } from "./login-form"

export default async function AdminLoginPage() {
  // Check if already logged in — redirect straight to /admin if so
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value

  if (token && process.env.ADMIN_SECRET) {
    const valid = await verifySessionToken(token, process.env.ADMIN_SECRET)
    if (valid) redirect("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Suspense fallback={<div className="text-sm text-gray-400">Loading…</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}