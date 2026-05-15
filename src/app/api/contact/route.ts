import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const token = formData.get("recaptchaToken")

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "Missing reCAPTCHA token" },
        { status: 400 }
      )
    }

    // Verify with Google
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: token,
        }),
      }
    )

    const verifyData = await verifyRes.json()

    console.log("reCAPTCHA:", verifyData)

    // Score check
    if (
      !verifyData.success ||
      verifyData.score < 0.5
    ) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 403 }
      )
    }

    // Continue with email/db logic here

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}