import { NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function asOptionalDate(value: unknown): string | null {
  return typeof value === "string" && DATE_RE.test(value) ? value : null;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const data = (payload ?? {}) as Record<string, unknown>;

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message =
    typeof data.message === "string" ? data.message.trim().slice(0, 2000) : "";
  const checkIn = asOptionalDate(data.checkIn);
  const checkOut = asOptionalDate(data.checkOut);

  const guestsRaw = Number(data.guests);
  const guests = Number.isFinite(guestsRaw)
    ? Math.min(Math.max(Math.round(guestsRaw), 1), 20)
    : null;

  if (!name || name.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Please share your name." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please share a valid email address." },
      { status: 400 },
    );
  }

  try {
    await db
      .insert(enquiries)
      .values({ name, email, checkIn, checkOut, guests, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save enquiry", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side — please email us directly instead.",
      },
      { status: 500 },
    );
  }
}
