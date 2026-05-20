// lib/session.ts
// ─────────────────────────────────────────────────────────────
// Cryptographically signed session tokens using HMAC-SHA256.
// Works on both Edge (middleware) and Node.js (API routes).
// Token format: {uuid}.{expiresAt}.{hmacHex}
// ─────────────────────────────────────────────────────────────

export const COOKIE_NAME = "admin_session"
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000 // 8 hours

async function getKey(secret: string): Promise<CryptoKey> {
    return crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign", "verify"]
    )
}

function bufToHex(buf: ArrayBuffer): string {
    return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
}

function hexToBuf(hex: string): Uint8Array {
    const pairs = hex.match(/.{1,2}/g) ?? []
    return new Uint8Array(pairs.map((byte) => parseInt(byte, 16)))
}

/** Create a signed session token valid for 8 hours */
export async function createSessionToken(secret: string): Promise<string> {
    const id = crypto.randomUUID()                          // random, unpredictable
    const expires = Date.now() + SESSION_DURATION_MS       // baked-in expiry
    const payload = `${id}.${expires}`
    const key = await getKey(secret)
    const sig = await crypto.subtle.sign(
        "HMAC",
        key,
        new TextEncoder().encode(payload)
    )
    return `${payload}.${bufToHex(sig)}`
}

/** Verify a session token — returns false if expired, tampered, or malformed */
export async function verifySessionToken(
    token: string,
    secret: string
): Promise<boolean> {
    try {
        // Token must have exactly 3 dot-separated parts
        const dotIndex1 = token.indexOf(".")
        const dotIndex2 = token.lastIndexOf(".")
        if (dotIndex1 === -1 || dotIndex1 === dotIndex2) return false

        const payload = token.substring(0, dotIndex2)         // "uuid.expires"
        const sigHex = token.substring(dotIndex2 + 1)        // "hmachex"
        const expires = parseInt(payload.split(".")[1])

        // Reject expired tokens
        if (isNaN(expires) || Date.now() > expires) return false

        const key = await getKey(secret)

        return await crypto.subtle.verify(
            "HMAC",
            key,
            hexToBuf(sigHex).buffer as ArrayBuffer,
            new TextEncoder().encode(payload)
        )
    } catch {
        return false
    }
}

/** Cookie options — shared between login and logout */
export function cookieOptions(maxAge: number) {
    return {
        httpOnly: true,                                        // not accessible via JS
        secure: process.env.NODE_ENV === "production",        // HTTPS only in prod
        sameSite: "lax" as const,                             // CSRF protection
        path: "/",
        maxAge,
    }
}