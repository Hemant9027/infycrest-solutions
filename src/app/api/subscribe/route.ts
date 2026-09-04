import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscribers } from "@/db/schema";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as {
      email?: unknown;
    } | null;
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!EMAIL_PATTERN.test(email) || email.length > 320) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await db.insert(subscribers).values({ email }).onConflictDoNothing();

    return NextResponse.json({
      ok: true,
      message: "You're on the list — thoughtful updates only.",
    });
  } catch (error) {
    console.error("[api/subscribe] failed:", error);
    return NextResponse.json(
      { error: "Could not save your email right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
