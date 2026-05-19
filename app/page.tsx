import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import TrustMarquee from "@/components/sections/TrustMarquee";
import ServicesSection from "@/components/sections/ServicesSection";
import Process from "@/components/sections/Process";
import Showcase from "@/components/sections/Showcase";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProp />
      <TrustMarquee />
      <ServicesSection />
      <Process />
      <Showcase />
      <StatsSection />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
