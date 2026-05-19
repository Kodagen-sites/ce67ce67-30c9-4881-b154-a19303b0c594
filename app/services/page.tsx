import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { FadeUp, StaggerChildren, CardTiltLayer } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wash & fold, dry cleaning, and door-to-door pickup & delivery from FreshFold across Lagos, Abuja and Port Harcourt.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title="Laundry care, done properly."
        image={assetManifest.images["section-services"]}
        intro="From everyday washing to specialist dry cleaning — choose the service that fits, and we'll bring it back fresh."
      />

      <section className="section-pad bg-bg">
        <div className="shell">
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteConfig.services.map((service) => (
              <CardTiltLayer key={service.slug} intensity={0.2} lift={6} className="h-full">
                <ServiceCard service={service} />
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-pad bg-bg-secondary">
        <div className="shell text-center">
          <FadeUp>
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(28px,4vw,50px)] font-light leading-tight text-ink">
              Not sure which service you need?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--text-body)]">
              Tell us what you have and we'll recommend the right care — no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
            >
              Talk to us <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
