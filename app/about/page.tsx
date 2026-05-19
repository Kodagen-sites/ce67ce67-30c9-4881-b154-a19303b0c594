import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { FadeUp, TextReveal, StaggerChildren } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "FreshFold is a premium laundry and garment-care service built to take laundry day off your plate — studios in Lagos, Abuja and Port Harcourt.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about } = siteConfig;
  return (
    <main>
      <PageHero
        eyebrow={about.eyebrow}
        title="Built to give people their weekends back."
        image="/section-process.jpg"
        intro="A small team, three cities, and one stubborn belief: clean clothes shouldn't cost you a day off."
      />

      {/* Story */}
      <section className="section-pad bg-bg">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <p className="eyebrow text-primary">Our story</p>
          </FadeUp>
          <div>
            <TextReveal
              as="h2"
              className="max-w-2xl font-display text-[clamp(26px,3.6vw,44px)] font-light leading-[1.14] tracking-[-0.015em] text-ink"
            >
              {about.headline}
            </TextReveal>
            <div className="mt-7 space-y-5">
              {about.body.map((para, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <p className="max-w-xl text-lg leading-relaxed text-[var(--text-body)]">{para}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-bg-tertiary">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow text-primary">What we stand for</p>
          </FadeUp>
          <StaggerChildren staggerDelay={0.1} className="mt-10 grid gap-6 md:grid-cols-3">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-7 backdrop-blur-md"
              >
                <h3 className="font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">{v.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section-pad bg-bg-accent text-center text-[var(--on-dark)]">
        <div className="shell">
          <FadeUp>
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(28px,4vw,52px)] font-light leading-tight">
              Ready to hand us the laundry?
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
            >
              Book a pickup <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
