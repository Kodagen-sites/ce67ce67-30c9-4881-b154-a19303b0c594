import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/ContactForm";
import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book a Pickup",
  description:
    "Book a laundry pickup or get in touch with FreshFold. Studios in Lagos, Abuja and Port Harcourt — collection and delivery to your door.",
  alternates: { canonical: "/contact" },
};

const flagship = siteConfig.locations[0];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Book a pickup. We'll handle the rest."
        image="/section-cta.jpg"
        intro="Tell us when suits you and which city you're in — a FreshFold team member will confirm your collection window."
      />

      <section className="section-pad bg-bg">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <FadeUp>
            <h2 className="font-display text-3xl font-light text-ink">Request a pickup</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">
              Fill in the form and we'll be in touch within working hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </FadeUp>

          {/* Details */}
          <FadeUp delay={0.12}>
            <div className="rounded-2xl border border-ink/10 bg-bg-tertiary p-8">
              <h3 className="eyebrow text-primary">Reach us directly</h3>
              <ul className="mt-5 space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-primary" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-ink hover:text-primary">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-primary" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-ink hover:text-primary">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="mt-0.5 text-primary" />
                  <a href={siteConfig.socials.whatsapp} className="text-ink hover:text-primary">
                    WhatsApp {siteConfig.contact.whatsapp}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title={`Map of FreshFold ${flagship.city}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(flagship.address)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Locations grid — CT5 */}
      <section className="section-pad bg-bg-secondary">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow text-primary">Our studios</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display text-[clamp(28px,4vw,46px)] font-light leading-tight text-ink">
              Three cities. One standard of care.
            </h2>
          </FadeUp>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteConfig.locations.map((loc, i) => (
              <FadeUp key={loc.city} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin size={16} />
                    <span className="eyebrow">{loc.city}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-ink">{loc.area}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">{loc.address}</p>
                  <div className="mt-5 space-y-1 border-t border-ink/10 pt-5 text-sm text-ink/65">
                    <p><a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-primary">{loc.phone}</a></p>
                    <p>{loc.hours}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
