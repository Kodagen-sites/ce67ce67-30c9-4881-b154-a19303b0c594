"use client";

import { FadeUp, NumberCounter } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

/**
 * StatsSection — Archetype G section 8 (T13 counters). Dark forest band.
 */
export default function StatsSection() {
  const { stats } = siteConfig;
  return (
    <section className="section-pad bg-bg-accent text-[var(--on-dark)]">
      <div className="shell">
        <FadeUp>
          <p className="eyebrow text-primary">{stats.eyebrow}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.12] tracking-[-0.015em]">
            {stats.headline}
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.items.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.08}>
              <div className="border-t border-[var(--on-dark)]/15 pt-6">
                <div className="font-display text-[clamp(40px,6vw,68px)] font-light leading-none text-primary">
                  <NumberCounter
                    to={item.value}
                    suffix={item.suffix}
                    formatThousands={item.value >= 1000}
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--on-dark-muted)]">
                  {item.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
