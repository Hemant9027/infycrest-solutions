export type InquiryPayload = {
  type: "contact" | "availability";
  name: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
};

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error ?? "Something went wrong." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not send right now." };
  }
}
