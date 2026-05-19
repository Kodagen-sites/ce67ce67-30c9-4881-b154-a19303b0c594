"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerChildren, CardTiltLayer } from "@/components/motion";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/content/site-config";

/**
 * ServicesSection — Archetype G section 3 (T6 cards stagger).
 */
export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-bg-secondary">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <p className="eyebrow text-primary">What we do</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(30px,4.4vw,52px)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
                Three ways we take laundry off your list.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-primary"
            >
              All services <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {siteConfig.services.map((service) => (
            <CardTiltLayer key={service.slug} intensity={0.2} lift={6} className="h-full">
              <ServiceCard service={service} />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
