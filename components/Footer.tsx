import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

/**
 * Footer — FT1 Classic 5-Column. Deep-forest band closing every page.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-accent text-[var(--on-dark)]">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl font-semibold tracking-[0.06em]">
              {siteConfig.company.fullName}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--on-dark-muted)]">
              {siteConfig.footer.brandStatement}
            </p>
            <div className="mt-6">
              <SocialLinks
                socials={siteConfig.socials}
                className="flex gap-4 text-[var(--on-dark)]/80"
              />
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-[var(--on-dark)]/55">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[var(--on-dark-muted)] transition-colors hover:text-primary"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-[var(--on-dark)]/55">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">All services</Link></li>
              <li><Link href="/contact" className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">Book a pickup</Link></li>
              <li><Link href="/contact" className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-[var(--on-dark)]/55">Locations</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.locations.map((l) => (
                <li key={l.city} className="text-[var(--on-dark-muted)]">
                  {l.city}
                  <span className="block text-xs text-[var(--on-dark)]/40">{l.area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-[var(--on-dark)]/55">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-[var(--on-dark-muted)] transition-colors hover:text-primary">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-[var(--on-dark-muted)]">{siteConfig.footer.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--on-dark)]/12 pt-7 text-xs text-[var(--on-dark)]/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.company.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            {siteConfig.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
