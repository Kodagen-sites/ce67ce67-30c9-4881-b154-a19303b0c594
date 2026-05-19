import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { FadeUp, StaggerChildren } from "@/components/motion";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/content/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug);

  return (
    <main>
      <PageHero
        eyebrow="Service"
        title={service.name}
        image={service.imageUrl}
        intro={service.description}
      />

      <section className="section-pad bg-bg">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="eyebrow text-primary">The detail</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-body)]">
                {service.long}
              </p>
            </FadeUp>

            <StaggerChildren staggerDelay={0.07} className="mt-9 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl border border-ink/10 bg-bg-tertiary px-4 py-3.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-[15px] text-ink">{f}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>

          <FadeUp delay={0.15}>
            <div className="rounded-2xl border border-ink/10 bg-bg-secondary p-8">
              <p className="eyebrow text-primary">Pricing from</p>
              <p className="mt-3 font-display text-4xl font-light text-ink">{service.priceFrom}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-body)]">
                Final pricing is confirmed when we weigh your bag with you — no surprises.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
              >
                Book this service <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad bg-bg-secondary">
        <div className="shell">
          <FadeUp>
            <h2 className="font-display text-[clamp(24px,3.2vw,38px)] font-light text-ink">
              Other ways we can help
            </h2>
          </FadeUp>
          <StaggerChildren staggerDelay={0.1} className="mt-9 grid gap-6 md:grid-cols-2">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
