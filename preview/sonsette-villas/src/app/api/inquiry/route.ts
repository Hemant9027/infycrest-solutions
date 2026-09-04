import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export const runtime = "nodejs";

const VILLAS = new Set(["one-bedroom", "two-bedroom", "flexible"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asValidDate(value: unknown): string | null {
  const raw = asString(value);
  if (!raw) return null;
  if (!DATE_RE.test(raw)) return null;
  const parsed = new Date(`${raw}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? null : raw;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  const name = asString(data.name);
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please share your name." }, { status: 400 });
  }

  const email = asString(data.email);
  if (email.length > 200 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please share a valid email." }, { status: 400 });
  }

  const phone = asString(data.phone).slice(0, 60) || null;

  const villaRaw = asString(data.villa);
  const villa = VILLAS.has(villaRaw) ? villaRaw : "flexible";

  const checkIn = asValidDate(data.checkIn);
  const checkOut = asValidDate(data.checkOut);
  if ((data.checkIn && !checkIn) || (data.checkOut && !checkOut)) {
    return NextResponse.json({ error: "Dates look off." }, { status: 400 });
  }
  if (checkIn && checkOut && checkOut <= checkIn) {
    return NextResponse.json(
      { error: "Check-out must come after check-in." },
      { status: 400 },
    );
  }

  let guests: number | null = null;
  if (data.guests !== null && data.guests !== undefined && data.guests !== "") {
    const parsed = Number(data.guests);
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > 12) {
      return NextResponse.json({ error: "Guest count looks off." }, { status: 400 });
    }
    guests = parsed;
  }

  const message = asString(data.message).slice(0, 2000) || null;

  try {
    const [saved] = await db
      .insert(inquiries)
      .values({ name, email, phone, villa, checkIn, checkOut, guests, message })
      .returning({ id: inquiries.id });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (error) {
    console.error("Failed to save inquiry", error);
    return NextResponse.json(
      { error: "We couldn't save your inquiry. Please call or email us directly." },
      { status: 500 },
    );
  }
}
