import { FadeUp, TextReveal } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

/**
 * Process — Archetype G section 6 (how it works, T15 split layout).
 * Pinned image on the left, numbered steps revealing on the right.
 */
export default function Process() {
  const { process } = siteConfig;
  return (
    <section className="section-pad bg-bg">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Sticky image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <img
                src={assetManifest.images["section-process"]}
                alt="A FreshFold team member folding a freshly laundered shirt"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>

        {/* Steps */}
        <div>
          <FadeUp>
            <p className="eyebrow text-primary">{process.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-5 max-w-md font-display text-[clamp(28px,4vw,46px)] font-light leading-[1.12] tracking-[-0.015em] text-ink"
          >
            {process.headline}
          </TextReveal>

          <div className="mt-10 flex flex-col">
            {process.steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-ink/10 py-7">
                  <span className="font-display text-3xl font-light text-primary/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
