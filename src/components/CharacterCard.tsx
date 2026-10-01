import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/data/characters";

export default function CharacterCard({ c }: { c: Character }) {
  return (
    <Link
      href={`/characters/${c.slug}`}
      className="group panel block overflow-hidden transition duration-300 hover:-translate-y-2"
      style={{ "--accent": c.accent } as React.CSSProperties}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <Image
          src={c.gif}
          alt={c.name}
          fill
          unoptimized
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent" />
      </div>
      <div className="border-t-2 p-4" style={{ borderColor: c.accent }}>
        <h3 className="text-lg font-bold text-gold-soft">{c.name}</h3>
        <span
          className="mt-1 inline-block text-sm transition group-hover:translate-x-1"
          style={{ color: c.accent }}
        >
          Read profile →
        </span>
      </div>
    </Link>
  );
}
