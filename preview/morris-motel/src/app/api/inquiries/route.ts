import { NextResponse } from "next/server";
import { z } from "zod";
import { inquiries } from "@/db/schema";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const inquirySchema = z
  .object({
    name: z.string().trim().min(2, "Please tell us your name").max(120),
    email: z.email("Please enter a valid email address").max(200),
    checkIn: z.string().regex(datePattern, "Choose a check-in date"),
    checkOut: z.string().regex(datePattern, "Choose a check-out date"),
    guests: z.coerce.number().int().min(1).max(16),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
    // honeypot — must stay empty
    company: z.string().max(0).optional().or(z.literal("")),
  })
  .refine((d) => new Date(`${d.checkOut}T12:00:00`) > new Date(`${d.checkIn}T12:00:00`), {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: first?.message ?? "Please review the form.", field: first?.path[0] },
      { status: 400 },
    );
  }

  const { name, email, checkIn, checkOut, guests, message } = parsed.data;

  try {
    const { db } = await import("@/db");
    await db.insert(inquiries).values({
      name,
      email,
      checkIn,
      checkOut,
      guests,
      message: message || null,
    });
  } catch (error) {
    console.error("[inquiries] insert failed", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't save your request right now — please email us directly at grmmbahamas@gmail.com.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
