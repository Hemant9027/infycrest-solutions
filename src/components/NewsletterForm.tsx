"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    businessType: "",
    requirements: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.contact.trim()) {
      setStatus("error");
      setMessage("Please add your name and an email or WhatsApp number.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          contact: form.contact.trim(),
          businessType: form.businessType,
          requirements: form.requirements.trim(),
          demoSlug: "general-contact",
          demoName: "General enquiry",
          customization: "Custom enquiry",
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };
      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(
        data.message ?? "Thanks — we will be in touch within 24 hours.",
      );
      setForm({ name: "", contact: "", businessType: "", requirements: "" });
    } catch {
      setStatus("error");
      setMessage("Network hiccup — please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full text-left" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="Your name"
          autoComplete="name"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
        />
        <label className="sr-only" htmlFor="contact-contact">
          Email or WhatsApp number
        </label>
        <input
          id="contact-contact"
          required
          value={form.contact}
          onChange={(event) =>
            setForm({ ...form, contact: event.target.value })
          }
          placeholder="Email or WhatsApp number"
          autoComplete="email tel"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
        />
      </div>
      <label className="sr-only" htmlFor="contact-business">
        Business type
      </label>
      <input
        id="contact-business"
        value={form.businessType}
        onChange={(event) =>
          setForm({ ...form, businessType: event.target.value })
        }
        placeholder="Business type (optional)"
        className="mt-3 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
      />
      <label className="sr-only" htmlFor="contact-requirements">
        Project requirements
      </label>
      <textarea
        id="contact-requirements"
        rows={3}
        value={form.requirements}
        onChange={(event) =>
          setForm({ ...form, requirements: event.target.value })
        }
        placeholder="Tell us briefly what you want to build"
        className="mt-3 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black disabled:opacity-60"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" strokeWidth={2.4} />
        ) : (
          <>
            Send enquiry <ArrowRight className="size-4" strokeWidth={2.4} />
          </>
        )}
      </button>
      <p
        role={status === "error" ? "alert" : "status"}
        className={cn(
          "mt-3 min-h-5 text-xs transition-colors",
          status === "error" ? "text-red-600" : "text-neutral-400",
          status === "success" && "text-emerald-600",
        )}
      >
        {message ||
          "Tell us what you are building. We usually reply within 24 hours."}
      </p>
    </form>
  );
}
