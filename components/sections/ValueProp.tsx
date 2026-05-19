import { FadeUp, TextReveal } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

/**
 * ValueProp — Archetype G section 2 (T7 oversized type statement).
 */
export default function ValueProp() {
  const { valueProp } = siteConfig;
  return (
    <section className="section-pad bg-bg">
      <div className="shell">
        <FadeUp>
          <p className="eyebrow text-primary">{valueProp.eyebrow}</p>
        </FadeUp>
        <TextReveal
          as="h2"
          className="mt-6 max-w-4xl font-display text-[clamp(30px,4.6vw,58px)] font-light leading-[1.1] tracking-[-0.015em] text-ink"
        >
          {valueProp.headline}
        </TextReveal>
        <FadeUp delay={0.15}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--text-body)]">
            {valueProp.body}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
