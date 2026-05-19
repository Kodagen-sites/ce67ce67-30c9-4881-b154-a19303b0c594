"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton, ScrollHint } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

/**
 * Hero — Archetype G, T1 video loop, HO1 centred overlay, H5 hero text.
 * The Veo loop subject sits in the right third; the centre is atmosphere,
 * so the centred text block never collides with it.
 */
export default function Hero() {
  const { hero } = siteConfig;
  const [pre, , post] = hero.h1.split(/(beautifully)/);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Video loop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={assetManifest.images["section-cta"]}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility wash — keeps cream video readable behind ink text */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/35 to-bg/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_46%,rgba(251,247,240,0.78),transparent)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6 text-primary"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-[clamp(44px,8vw,92px)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {pre}
            <span className="italic text-primary">beautifully</span>
            {post}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--text-body)]"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href={hero.primaryCta.href}
            className="gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
          >
            {hero.primaryCta.label}
            <ArrowRight size={15} />
          </MagneticButton>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-full border border-ink/20 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink/45"
          >
            {hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <ScrollHint />
      </div>
    </section>
  );
}
