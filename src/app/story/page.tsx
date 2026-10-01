import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { arcs } from "@/data/story";

export const metadata: Metadata = {
  title: "Story",
  description: "The story arcs of Yu-Gi-Oh! Duel Monsters.",
};

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Duel Monsters"
        title="The Story"
        subtitle="Follow Yugi and his friends through every arc of the series."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Arcs" className="mb-12 flex flex-wrap justify-center gap-2">
          {arcs.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-line px-4 py-1.5 text-xs text-muted transition hover:border-gold/60 hover:text-gold"
            >
              {a.emoji} {a.title.replace(/ Arc$/, "")}
            </a>
          ))}
        </nav>

        <ol className="space-y-12">
          {arcs.map((a, i) => (
            <li key={a.id} id={a.id}>
              <Reveal>
                <article className="panel grid overflow-hidden md:grid-cols-2">
                  <div className={`relative aspect-video md:aspect-auto md:min-h-80 ${i % 2 ? "md:order-2" : ""}`}>
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="font-display text-sm tracking-widest text-gold/70">
                      ARC {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 border-l-4 border-gold pl-3 text-2xl font-bold text-gold-soft">
                      {a.emoji} {a.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-[#dcd4ef]">
                      <strong className="text-gold">Summary:</strong> {a.summary}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-muted">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
