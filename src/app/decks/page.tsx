import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { decks } from "@/data/decks";

export const metadata: Metadata = {
  title: "Deck Collection",
  description: "A curated list of signature decks from the series.",
};

export default function DecksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Deck Collection"
        title="Signature Decks"
        subtitle="A curated list of signature decks from the series."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {decks.map((d, i) => {
          const total = d.sections.reduce((n, s) => n + s.cards.length, 0);
          return (
            <Reveal key={d.slug} delay={(i % 3) * 110}>
              <Link
                href={`/decks/${d.slug}`}
                className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-gold/60"
                style={{ "--accent": d.accent } as React.CSSProperties}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.cover}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-gold-soft backdrop-blur">
                    {total} cards
                  </span>
                </div>
                <div className="flex flex-1 flex-col border-t-2 p-5" style={{ borderColor: d.accent }}>
                  <h2 className="text-xl font-bold text-gold-soft">{d.name} Deck</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{d.description}</p>
                  <span className="mt-4 text-sm font-medium text-gold transition group-hover:translate-x-1">
                    View deck →
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}

        <Reveal delay={330}>
          <div className="panel flex h-full flex-col overflow-hidden opacity-80">
            <div className="relative aspect-[4/3]">
              <Image
                src="/img/coming-soon.jpg"
                alt="More decks coming soon"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
            <div className="border-t-2 border-line p-5">
              <h2 className="text-xl font-bold text-muted">To Be Continued</h2>
              <p className="mt-2 text-sm text-muted">More decks are on the way.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
