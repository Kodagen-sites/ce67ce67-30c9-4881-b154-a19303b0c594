import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow text-primary">404</p>
      <h1 className="mt-5 font-display text-[clamp(36px,6vw,72px)] font-light text-ink">
        This page came out in the wash.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--text-body)]">
        We couldn&apos;t find what you were looking for. Let&apos;s get you back to fresh.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-deep"
      >
        Back home
      </Link>
    </main>
  );
}
