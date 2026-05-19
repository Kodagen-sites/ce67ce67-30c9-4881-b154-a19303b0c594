"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/site-config";

/**
 * ServiceCard — light frosted-glass card (CV4 adapted to the S3 light theme).
 * Frosted white panel on cream, hairline border, image top, ink text,
 * teal accent. Hover: lift + shadow + accent shift.
 */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/55 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_60px_-28px_rgba(20,48,42,0.45)]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="eyebrow mb-3 text-primary">{service.priceFrom}</div>
        <h3 className="mb-2.5 font-display text-2xl leading-tight text-ink">
          {service.name}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-body)]">
          {service.description}
        </p>
        <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 transition-colors group-hover:text-primary">
          Explore
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
