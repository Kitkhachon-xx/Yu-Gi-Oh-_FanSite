"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { DeckCard } from "@/data/decks";

const navBtn =
  "absolute flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink/80 text-xl text-gold hover:bg-gold hover:text-ink";

export default function CardGallery({ cards, accent }: { cards: DeckCard[]; accent: string }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + cards.length) % cards.length)),
    [cards.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const active = index === null ? null : cards[index];

  return (
    <>
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {cards.map((c, i) => (
          <li key={`${c.id}-${i}`}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${c.name || "card"}`}
              className="block w-full overflow-hidden rounded-md border border-line bg-surface transition duration-200 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_10px_30px_-8px_var(--glow)]"
              style={{ "--glow": accent } as React.CSSProperties}
            >
              <Image
                src={`/cards/${c.id}.jpg`}
                alt={c.name}
                width={177}
                height={254}
                loading="lazy"
                className="h-auto w-full"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/cards/${active.id}.jpg`}
              alt={active.name}
              width={177}
              height={254}
              className="h-auto w-[min(78vw,340px)] rounded-lg"
              style={{ boxShadow: `0 0 60px -10px ${accent}` }}
            />
            <p className="mt-4 text-center font-display text-lg text-gold-soft">{active.name}</p>
            <p className="text-xs text-muted">
              {(index ?? 0) + 1} / {cards.length}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous card"
            className={`${navBtn} left-3 top-1/2 -translate-y-1/2 sm:left-8`}
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next card"
            className={`${navBtn} right-3 top-1/2 -translate-y-1/2 sm:right-8`}
          >
            ›
          </button>
          <button onClick={close} aria-label="Close" className={`${navBtn} right-4 top-4 h-10 w-10`}>
            ✕
          </button>
        </div>
      )}
    </>
  );
}
