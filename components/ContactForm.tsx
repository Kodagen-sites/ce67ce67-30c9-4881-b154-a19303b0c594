"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/content/site-config";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-bg-tertiary p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          <Check size={22} />
        </span>
        <h3 className="font-display text-2xl text-ink">Pickup request received</h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-body)]">
          Thanks — a member of the FreshFold team will be in touch shortly to
          confirm your collection window. Need us sooner? Message us on WhatsApp
          at {siteConfig.contact.whatsapp}.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary hover:text-primary-deep"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-ink/60">Name</label>
          <input id="name" name="name" required placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow mb-2 block text-ink/60">Phone</label>
          <input id="phone" name="phone" required placeholder="+234 ..." className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="eyebrow mb-2 block text-ink/60">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="eyebrow mb-2 block text-ink/60">City</label>
          <select id="city" name="city" className={inputCls} defaultValue="Lagos">
            {siteConfig.locations.map((l) => (
              <option key={l.city} value={l.city}>{l.city}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="eyebrow mb-2 block text-ink/60">Service</label>
          <select id="service" name="service" className={inputCls} defaultValue="Wash & Fold">
            {siteConfig.services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow mb-2 block text-ink/60">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you need and a good time to collect."
          className={inputCls + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#b4452a]">
          Something went wrong. Please try again, or message us on WhatsApp at {siteConfig.contact.whatsapp}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep disabled:opacity-60"
      >
        {status === "sending" ? <Loader2 size={15} className="animate-spin" /> : null}
        {status === "sending" ? "Sending..." : "Request a pickup"}
      </button>
    </form>
  );
}
