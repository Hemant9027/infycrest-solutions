import { NextResponse } from "next/server";
import { db } from "@/db";
import { reservationRequests } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function isValidDateString(value: string) {
  if (!DATE_RE.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, checkIn, checkOut, guests, notes } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ error: "Please share your name." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.trim().length > 200) {
    return NextResponse.json({ error: "Please use a valid email address." }, { status: 400 });
  }
  if (typeof checkIn !== "string" || !isValidDateString(checkIn)) {
    return NextResponse.json({ error: "Please choose a valid check-in date." }, { status: 400 });
  }
  if (typeof checkOut !== "string" || !isValidDateString(checkOut)) {
    return NextResponse.json({ error: "Please choose a valid check-out date." }, { status: 400 });
  }
  if (checkOut <= checkIn) {
    return NextResponse.json({ error: "Check-out must be after check-in." }, { status: 400 });
  }
  const today = new Date().toISOString().slice(0, 10);
  if (checkIn < today) {
    return NextResponse.json({ error: "Check-in can't be in the past." }, { status: 400 });
  }

  const guestsNum = typeof guests === "number" ? guests : Number(guests);
  if (!Number.isInteger(guestsNum) || guestsNum < 1 || guestsNum > 8) {
    return NextResponse.json({ error: "Guests must be between 1 and 8." }, { status: 400 });
  }

  const cleanNotes =
    typeof notes === "string" && notes.trim().length > 0 ? notes.trim().slice(0, 1000) : null;

  try {
    await db.insert(reservationRequests).values({
      name: name.trim(),
      email: email.trim(),
      checkIn,
      checkOut,
      guests: guestsNum,
      notes: cleanNotes,
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[reserve] failed to save request", err);
    return NextResponse.json({ error: "We couldn't send your request just now. Please email us directly." }, { status: 500 });
  }
}
