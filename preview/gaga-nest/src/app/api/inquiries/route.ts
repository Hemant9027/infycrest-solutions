import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

function clean(value: unknown, max = 2000): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length ? trimmed : null;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const contact = clean(body.contact, 160);

  if (!name || name.length < 2 || !contact || contact.length < 3) {
    return NextResponse.json(
      { error: "Please share your name and a way to reach you." },
      { status: 422 },
    );
  }

  try {
    await db.insert(inquiries).values({
      name,
      contact,
      arrival: clean(body.arrival, 40),
      departure: clean(body.departure, 40),
      guests: clean(body.guests, 40),
      message: clean(body.message, 2000),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save inquiry:", err);
    return NextResponse.json(
      { error: "We couldn’t save your inquiry just now." },
      { status: 500 },
    );
  }
}
