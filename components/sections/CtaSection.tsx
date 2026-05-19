"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, MagneticButton } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

/**
 * CtaSection — Archetype G section 10 (CTA1 centred oversized type).
 * Full-bleed image background with a deep-forest wash.
 */
export default function CtaSection() {
  const { cta } = siteConfig;
  return (
    <section className="relative overflow-hidden">
      <img
        src="/section-cta.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-accent/88" />

      <div className="shell relative section-pad text-center text-[var(--on-dark)]">
        <FadeUp>
          <p className="eyebrow text-primary">{cta.eyebrow}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(34px,5.5vw,72px)] font-light leading-[1.05] tracking-[-0.02em]">
            {cta.headline}
          </h2>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--on-dark-muted)]">
            {cta.body}
          </p>
        </FadeUp>
        <FadeUp delay={0.26}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href={cta.primary.href}
              className="gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
            >
              {cta.primary.label}
              <ArrowRight size={15} />
            </MagneticButton>
            <Link
              href={cta.secondary.href}
              className="rounded-full border border-[var(--on-dark)]/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--on-dark)] transition-colors hover:border-[var(--on-dark)]/60"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
