import bios from "./character-bios.json";

export type Character = {
  slug: string;
  name: string;
  bio: string;
  portrait: string;
  gif: string;
  accent: string;
};

const meta = [
  { key: "MutoYugi", slug: "muto-yugi", portrait: "/img/yugi.jpg", gif: "/img/yugi.gif", accent: "#4f7cff" },
  { key: "SetoKaiba", slug: "seto-kaiba", portrait: "/img/kaiba.jpg", gif: "/img/kaiba.gif", accent: "#7fb2ff" },
  { key: "KatsuyaJonouchi", slug: "katsuya-jonouchi", portrait: "/img/jonouchi.jpg", gif: "/img/jonouchi.gif", accent: "#f2cc3c" },
  { key: "MarikIshtar", slug: "marik-ishtar", portrait: "/img/marik.jpg", gif: "/img/marik.gif", accent: "#ff6a3d" },
] as const;

export const characters: Character[] = meta.map((m) => {
  const b = (bios as Record<string, { name: string; bio: string }>)[m.key];
  return { slug: m.slug, name: b.name, bio: b.bio, portrait: m.portrait, gif: m.gif, accent: m.accent };
});

export const getCharacter = (slug: string) => characters.find((c) => c.slug === slug);
