import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { verifySessionToken, COOKIE_NAME } from "@/lib/session";

export const runtime = "nodejs";

const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  // Auth check — same pattern as trigger route
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token || !process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const valid = await verifySessionToken(token, process.env.ADMIN_SECRET);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("image") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type. Use JPEG, PNG, WebP or GIF." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const timestamp = Date.now();
  const safeName = file.name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9.\-_]/g, "");
  const key = `blog/${timestamp}-${safeName}`;

  await r2.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  );

  const url = `https://${process.env.R2_PUBLIC_URL}/${key}`;
  return NextResponse.json({ url });
}