import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ROOM_TYPES = new Set(["one-bedroom", "two-bedroom", "either"]);

function isValidDateString(value: string | null): boolean {
  if (!value) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime());
}

/**
 * POST /api/inquiries
 * Accepts "Check availability" requests and general contact messages,
 * and stores them for the Marshall family to follow up on.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "We couldn't read that request. Please try again." },
      { status: 400 },
    );
  }

  const str = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";

  // Honeypot — bots fill this in; humans never see it.
  if (str("company").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = str("name");
  const email = str("email");
  const phone = str("phone") || null;
  const message = str("message") || null;
  const checkIn = str("checkIn") || null;
  const checkOut = str("checkOut") || null;
  const roomTypeRaw = str("roomType");
  const roomType = ROOM_TYPES.has(roomTypeRaw) ? roomTypeRaw : "either";
  const guestsRaw = Number(body.guests);
  const guests =
    Number.isFinite(guestsRaw) && guestsRaw >= 1 && guestsRaw <= 12
      ? Math.round(guestsRaw)
      : null;

  const kinds = new Set(["stay", "message"]);
  const kind = kinds.has(str("kind")) ? str("kind") : "stay";

  const errors: string[] = [];
  if (name.length < 2) errors.push("Please share your name.");
  if (!EMAIL_RE.test(email)) errors.push("Please share a valid email address.");

  if (kind === "stay") {
    if (!isValidDateString(checkIn) || !isValidDateString(checkOut)) {
      errors.push("Please choose your check-in and check-out dates.");
    } else {
      const start = new Date(`${checkIn}T00:00:00Z`);
      const end = new Date(`${checkOut}T00:00:00Z`);
      if (end <= start) {
        errors.push("Check-out must be after check-in.");
      }
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      if (start < today) {
        errors.push("Check-in can't be in the past.");
      }
    }
  } else if (!message || message.length < 4) {
    errors.push("Please include a short message.");
  }

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  try {
    const [created] = await db
      .insert(inquiries)
      .values({
        kind,
        name,
        email,
        phone,
        message,
        checkIn: kind === "stay" ? checkIn : null,
        checkOut: kind === "stay" ? checkOut : null,
        guests,
        roomType,
      })
      .returning({ id: inquiries.id });

    return NextResponse.json({ ok: true, id: created.id });
  } catch (error) {
    console.error("Failed to save inquiry", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side. Please call or email us instead — we'd love to hear from you.",
      },
      { status: 500 },
    );
  }
}
