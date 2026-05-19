"use client";

import { Marquee } from "@/components/motion";

const ITEMS = [
  "Free pickup & delivery",
  "48-hour turnaround",
  "Skin-friendly detergents",
  "Hand-finished pressing",
  "WhatsApp order updates",
  "Same-day in city centres",
  "Upfront, honest pricing",
];

/**
 * TrustMarquee — thin marquee strip (G-floor section transition).
 */
export default function TrustMarquee() {
  return (
    <div className="border-y border-ink/10 bg-bg-tertiary py-5">
      <Marquee speed={42}>
        {ITEMS.map((item) => (
          <span
            key={item}
            className="mx-8 inline-flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.22em] text-ink/65"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
