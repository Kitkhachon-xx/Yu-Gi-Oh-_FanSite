import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const sections = [
  {
    href: "/story",
    title: "Story",
    text: "Seven arcs, from Duelist Kingdom to the Pharaoh’s final duel.",
    image: "/img/story-card.jpg",
    alt: "Duel Monsters story",
  },
  {
    href: "/characters",
    title: "Characters",
    text: "Meet Yugi, Kaiba, Jonouchi and Marik.",
    image: "/img/home-characters.jpg",
    alt: "Characters",
  },
  {
    href: "/decks",
    title: "Decks",
    text: "Signature decks, card by card.",
    image: "/img/home-decks.jpg",
    alt: "Decks",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl animate-glow" />
        <Image
          src="/img/millennium-puzzle.webp"
          alt=""
          width={120}
          height={120}
          priority
          className="relative mx-auto h-24 w-24 animate-float drop-shadow-[0_0_24px_rgba(232,194,90,0.55)] sm:h-28 sm:w-28"
        />
        <p className="relative mt-8 text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
          Duel Monsters fan archive
        </p>
        <h1 className="relative mt-4 text-5xl font-bold leading-tight gold-text sm:text-6xl md:text-7xl">
          Yu-Gi-Oh!
          <br />
          Fan Site
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          {site.tagline}
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/decks"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-4px_rgba(232,194,90,0.7)] transition hover:bg-gold-soft"
          >
            Browse Decks
          </Link>
          <Link
            href="/story"
            className="rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10"
          >
            Read the Story
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="divider-gold mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.href} delay={i * 120}>
              <Link
                href={s.href}
                className="group panel block overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_rgba(232,194,90,0.45)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h2 className="text-2xl font-bold text-gold-soft">{s.title}</h2>
                    <p className="mt-1 text-sm text-muted">{s.text}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-gold transition group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
