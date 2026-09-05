export const dynamic = "force-static";

export async function GET() {
  try {
    const { mongoDb } = await import("@/db");
    await mongoDb.command({ ping: 1 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
