"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
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
        data.message ?? "You're on the list — thoughtful updates only."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network hiccup — please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white/50"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 className="size-4 animate-spin" strokeWidth={2.4} />
          ) : (
            <>
              Subscribe
              <ArrowRight className="size-4" strokeWidth={2.4} />
            </>
          )}
        </button>
      </div>
      <p
        role={status === "error" ? "alert" : "status"}
        className={cn(
          "mt-3 min-h-5 text-xs transition-colors",
          status === "error" ? "text-red-400" : "text-neutral-400",
          status === "success" && "text-emerald-400"
        )}
      >
        {message || "Launches, ideas and practical notes. One email, occasionally."}
      </p>
    </form>
  );
}
