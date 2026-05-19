import { FadeUp, ImageRevealMask } from "@/components/motion";

/**
 * Showcase — Archetype G section 4. A single feature image (ImageRevealMask)
 * paired with an oversized type statement (T7).
 */
export default function Showcase() {
  return (
    <section className="section-pad bg-bg-tertiary">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <ImageRevealMask
            src="/section-services.jpg"
            alt="Inside a bright FreshFold garment-care studio"
            direction="left"
            aspectClass="aspect-[5/4]"
            className="overflow-hidden rounded-2xl border border-ink/10"
          />
        </FadeUp>

        <div>
          <FadeUp>
            <p className="eyebrow text-primary">Care, studio by studio</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.12] tracking-[-0.015em] text-ink">
              Real studios. Trained hands. Not a drop-off counter.
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--text-body)]">
              Every FreshFold location is a dedicated care studio — bright, organised
              and run by staff trained to treat your clothes the way you would.
              Nothing leaves until it has been checked, pressed and folded properly.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
