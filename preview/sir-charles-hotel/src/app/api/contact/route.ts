import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactInquiries } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ error: "Please share your name." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.trim().length > 200) {
    return NextResponse.json({ error: "Please use a valid email address." }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000) {
    return NextResponse.json({ error: "Please add a short message (at least 10 characters)." }, { status: 400 });
  }

  try {
    await db.insert(contactInquiries).values({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[contact] failed to save inquiry", err);
    return NextResponse.json({ error: "We couldn't send your message just now. Please email us directly." }, { status: 500 });
  }
}
