import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CharacterCard from "@/components/CharacterCard";
import Reveal from "@/components/Reveal";
import { characters, getCharacter } from "@/data/characters";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return characters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const c = getCharacter((await params).slug);
  if (!c) return {};
  return { title: c.name, description: c.bio.slice(0, 155) + "…" };
}

export default async function CharacterPage({ params }: { params: Promise<Params> }) {
  const c = getCharacter((await params).slug);
  if (!c) notFound();
  const others = characters.filter((o) => o.slug !== c.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16">
      <Link href="/characters" className="text-sm text-muted transition hover:text-gold">
        ← All characters
      </Link>

      <article
        className="panel mt-6 grid overflow-hidden md:grid-cols-[minmax(0,320px)_1fr]"
        style={{ borderColor: `${c.accent}66` }}
      >
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[26rem]">
          <Image
            src={c.portrait}
            alt={c.name}
            fill
            priority
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 opacity-30 mix-blend-soft-light"
            style={{ background: `linear-gradient(160deg, ${c.accent}, transparent 70%)` }}
          />
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.35em]" style={{ color: c.accent }}>
            Character profile
          </p>
          <h1 className="mt-2 text-4xl font-bold gold-text sm:text-5xl">{c.name}</h1>
          <div className="divider-gold my-6" />
          <p className="leading-relaxed text-[#dcd4ef] sm:text-lg">{c.bio}</p>
        </div>
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gold-soft">Other duelists</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 100}>
              <CharacterCard c={o} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
