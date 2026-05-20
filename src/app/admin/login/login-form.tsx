// app/admin/login/LoginForm.tsx  (client component)
"use client"

import { useState, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      const from = params.get("from") ?? "/admin"
      router.push(from)
    } else {
      setError("Incorrect password.")
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Blog Admin</h1>
      <p className="text-sm text-gray-500 mb-6">Enter your admin password to continue.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          autoFocus
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  )
}