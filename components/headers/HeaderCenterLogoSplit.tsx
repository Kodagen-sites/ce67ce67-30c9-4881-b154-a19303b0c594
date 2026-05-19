"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * Header — Center Logo + Split Nav (variant: center-logo-split).
 * Logo dead-centre, nav split symmetrically. Light theme: ink text,
 * transparent at top, cream backdrop-blur once scrolled.
 */

const LEFT = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];
const RIGHT = [{ href: "/contact", label: "Contact" }];
const ALL = [{ href: "/", label: "Home" }, ...LEFT, ...RIGHT];

export default function HeaderCenterLogoSplit() {
  const scrolled = useScrollState(40);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkCls = (active: boolean) =>
    `relative font-mono text-[11px] uppercase tracking-[0.28em] transition-colors ${
      active ? "text-primary" : "text-ink/70 hover:text-ink"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-bg/90 py-3 backdrop-blur-xl md:py-4"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="relative flex items-center justify-between px-5 md:px-10">
          {/* Left nav / burger */}
          {!isMobile ? (
            <nav className="flex flex-1 gap-8">
              {LEFT.map((link) => (
                <Link key={link.href} href={link.href} className={linkCls(pathname === link.href)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex-1 text-left text-ink"
            >
              <Menu size={20} />
            </button>
          )}

          {/* Centre logo */}
          <Link
            href="/"
            className="group absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5 text-ink"
          >
            <span className="font-display text-base font-semibold uppercase tracking-[0.28em] transition-all duration-500 group-hover:tracking-[0.34em] md:text-lg">
              {siteConfig.company.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="h-px w-3 bg-ink/25" />
              <span className="font-mono text-[8px] uppercase tracking-[0.36em] text-ink/45">
                Laundry Co.
              </span>
              <span className="h-px w-3 bg-ink/25" />
            </div>
          </Link>

          {/* Right nav + CTA */}
          {!isMobile ? (
            <nav className="flex flex-1 items-center justify-end gap-7">
              {RIGHT.map((link) => (
                <Link key={link.href} href={link.href} className={linkCls(pathname === link.href)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full bg-primary px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
              >
                Book a pickup
              </Link>
            </nav>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
          >
            <div className="relative flex items-center justify-between p-5">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={22} />
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 font-display text-base font-semibold uppercase tracking-[0.28em] text-ink">
                {siteConfig.company.name}
              </span>
              <span className="w-6" />
            </div>
            <ul className="mt-10 flex flex-col items-center gap-7 p-6 text-center">
              {ALL.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl text-ink transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + ALL.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-block rounded-full bg-primary px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white"
                >
                  Book a pickup
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
