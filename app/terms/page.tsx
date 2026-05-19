import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

const company = siteConfig.company.fullName;
const email = siteConfig.contact.email;
const jurisdiction = siteConfig.contact.location;
const effectiveDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${company} website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <p className="eyebrow text-primary">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-[var(--text-muted)]">Effective {effectiveDate}</p>

      <div className="mt-12 space-y-8 leading-relaxed text-[var(--text-body)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_li]:opacity-90 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        <p>
          These terms govern your use of the {company} website and the laundry and
          garment-care services we provide. By using this site or booking a service, you
          agree to these terms.
        </p>

        <div>
          <h2>Our services</h2>
          <p>
            {company} provides wash &amp; fold, dry cleaning, and pickup &amp; delivery
            services in our published service areas. Service availability, turnaround times
            and pricing may vary by location and are confirmed at the time of booking.
          </p>
        </div>

        <div>
          <h2>Bookings &amp; pickups</h2>
          <ul>
            <li>Collection windows are arranged in advance and confirmed by our team.</li>
            <li>Items are weighed and assessed with you at collection where possible.</li>
            <li>Please point out stains, delicate items and special instructions at drop-off or collection.</li>
          </ul>
        </div>

        <div>
          <h2>Pricing &amp; payment</h2>
          <p>
            Prices shown are starting prices. The final price is confirmed before work begins.
            Payment is due on delivery unless otherwise agreed.
          </p>
        </div>

        <div>
          <h2>Garment care &amp; liability</h2>
          <p>
            We treat every garment with care, but some fabrics, dyes and pre-existing damage
            carry inherent risk. Our liability for loss or damage is limited to the reasonable
            value of the affected item. Claims must be raised within 48 hours of delivery.
          </p>
        </div>

        <div>
          <h2>Uncollected items</h2>
          <p>
            Items that cannot be delivered or remain uncollected for an extended period may be
            stored, returned or, after reasonable notice, disposed of in line with local law.
          </p>
        </div>

        <div>
          <h2>Website use</h2>
          <p>
            You agree not to misuse this website or attempt to disrupt its operation. Content on
            this site is owned by {company} and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The effective date above shows when they
            were last revised.
          </p>
        </div>

        <div>
          <h2>Contact us</h2>
          <p>
            Questions about these terms? Email{" "}
            <a className="text-primary underline" href={`mailto:${email}`}>{email}</a>. We operate in {jurisdiction}.
          </p>
        </div>
      </div>
    </main>
  );
}
