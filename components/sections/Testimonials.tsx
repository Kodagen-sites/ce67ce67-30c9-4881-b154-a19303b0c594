import { FadeUp, StaggerChildren } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

/**
 * Testimonials — Archetype G section 9 (T12, TS1 horizontal flow).
 */
export default function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section className="section-pad bg-bg-secondary">
      <div className="shell">
        <FadeUp>
          <p className="eyebrow text-primary">{testimonials.eyebrow}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.12] tracking-[-0.015em] text-ink">
            {testimonials.headline}
          </h2>
        </FadeUp>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.items.map((t) => (
            <figure
              key={t.author}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-26px_rgba(20,48,42,0.4)]"
            >
              <div className="font-display text-4xl leading-none text-primary/40">&ldquo;</div>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--text-body)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-5">
                <div className="font-display text-lg text-ink">{t.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
