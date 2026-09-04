import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export const runtime = "nodejs";

const MAX_TEXT = 2000;

function clean(value: unknown, max = MAX_TEXT): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<
      string,
      unknown
    > | null;
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request." },
        { status: 400 },
      );
    }

    const name = clean(body.name, 160);
    const email = clean(body.email, 320);

    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Please tell us your name." },
        { status: 400 },
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const type = body.type === "availability" ? "availability" : "contact";

    await db.insert(inquiries).values({
      type,
      name,
      email,
      phone: clean(body.phone, 64) || null,
      checkIn: clean(body.checkIn, 32) || null,
      checkOut: clean(body.checkOut, 32) || null,
      guests: clean(body.guests, 16) || null,
      message: clean(body.message) || null,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiries] failed to save enquiry:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't save your message just now.",
      },
      { status: 500 },
    );
  }
}
