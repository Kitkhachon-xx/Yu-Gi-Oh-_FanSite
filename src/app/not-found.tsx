import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-32 text-center">
      <p className="font-display text-7xl font-bold gold-text">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gold-soft">This card was sent to the Graveyard</h1>
      <p className="mt-2 text-muted">The page you were looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink hover:bg-gold-soft"
      >
        Back to Home
      </Link>
    </section>
  );
}
