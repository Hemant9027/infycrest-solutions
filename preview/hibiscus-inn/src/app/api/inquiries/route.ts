import { inquiries } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const { db } = await import("@/db");
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  const name = clean(raw.name, 120);
  const email = clean(raw.email, 200).toLowerCase();
  const message = clean(raw.message, 4000);
  const arrivalDate = clean(raw.arrival, 40) || null;
  const departureDate = clean(raw.departure, 40) || null;

  let guests: number | null = null;
  const g = raw.guests;
  if (typeof g === "number" && Number.isFinite(g)) {
    guests = Math.min(Math.max(Math.trunc(g), 1), 50);
  } else if (typeof g === "string" && g.trim()) {
    const parsed = parseInt(g, 10);
    if (Number.isFinite(parsed)) guests = Math.min(Math.max(parsed, 1), 50);
  }

  if (!name || !email || !EMAIL_RE.test(email) || !message) {
    return Response.json(
      {
        ok: false,
        error: "Please fill in your name, a valid email and a short message.",
      },
      { status: 400 },
    );
  }

  try {
    await db.insert(inquiries).values({
      name,
      email,
      message,
      arrivalDate,
      departureDate,
      guests,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to save inquiry:", err);
    return Response.json(
      {
        ok: false,
        error: "We couldn't send your message just now.",
      },
      { status: 500 },
    );
  }
}
