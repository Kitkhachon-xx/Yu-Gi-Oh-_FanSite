import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CardGallery from "@/components/CardGallery";
import Reveal from "@/components/Reveal";
import { decks, getDeck } from "@/data/decks";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return decks.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const d = getDeck((await params).slug);
  if (!d) return {};
  return { title: `${d.name} Deck`, description: d.description };
}

export default async function DeckPage({ params }: { params: Promise<Params> }) {
  const d = getDeck((await params).slug);
  if (!d) notFound();
  const index = decks.findIndex((x) => x.slug === d.slug);
  const next = decks[(index + 1) % decks.length];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src={d.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-top opacity-60"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(to bottom, ${d.accent}55 0%, #09060fcc 70%, #09060f 100%)`,
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
          <Link href="/decks" className="text-sm text-gold-soft/80 transition hover:text-gold">
            ← All decks
          </Link>
          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <Image
              src={d.icon}
              alt={d.name}
              width={160}
              height={160}
              priority
              className="h-28 w-28 rounded-xl object-cover sm:h-36 sm:w-36"
              style={{ boxShadow: `0 0 50px -8px ${d.accent}` }}
            />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Deck</p>
              <h1 className="mt-2 text-4xl font-bold gold-text sm:text-5xl">{d.name}</h1>
              <p className="mt-3 max-w-xl text-muted">{d.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {d.sections.map((s) => (
          <Reveal key={s.title} className="mt-12">
            <section aria-labelledby={`s-${s.title}`}>
              <div className="mb-5 flex items-baseline gap-3">
                <h2 id={`s-${s.title}`} className="text-2xl font-bold text-gold-soft">
                  {s.title}
                </h2>
                <span className="rounded-full border border-line px-3 py-0.5 text-xs text-muted">
                  {s.cards.length} cards
                </span>
              </div>
              <CardGallery cards={s.cards} accent={d.accent} />
            </section>
          </Reveal>
        ))}

        <div className="divider-gold mt-16" />
        <div className="mt-8 flex items-center justify-between">
          <Link href="/decks" className="text-sm text-muted transition hover:text-gold">
            ← Back to collection
          </Link>
          <Link href={`/decks/${next.slug}`} className="text-sm text-gold transition hover:text-gold-soft">
            Next: {next.shortName} →
          </Link>
        </div>
      </div>
    </>
  );
}
