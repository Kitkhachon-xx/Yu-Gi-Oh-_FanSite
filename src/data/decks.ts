import cards from "./deck-cards.json";

export type DeckCard = { id: string; name: string };
export type DeckSection = { title: string; cards: DeckCard[] };
export type Deck = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  cover: string;
  icon: string;
  background: string;
  accent: string;
  sections: DeckSection[];
};

const meta = [
  {
    key: "blue-eyes-white-dragon",
    shortName: "Blue-Eyes",
    description:
      "A powerful dragon-based deck focusing on high-ATK monsters and tribute summons.",
    cover: "/img/deck-blue-eyes.jpg",
    icon: "/img/icon-blue-eyes.jpg",
    background: "/img/bg-blue-eyes.jpg",
    accent: "#504cd8",
  },
  {
    key: "dark-magician",
    shortName: "Dark Magician",
    description:
      "Classic spellcaster strategy with support spells and ritual combos.",
    cover: "/img/deck-dark-magician.jpg",
    icon: "/img/deck-dark-magician.jpg",
    background: "/img/bg-dark-magician.jpg",
    accent: "#ca1880",
  },
  {
    key: "red-eyes-black-dragon",
    shortName: "Red-Eyes",
    description: "Aggressive dragon synergy and quick-summon tactics.",
    cover: "/img/deck-red-eyes.jpg",
    icon: "/img/icon-red-eyes.jpg",
    background: "/img/bg-red-eyes.jpg",
    accent: "#d84c4c",
  },
  {
    key: "wing-dragon-of-ra",
    shortName: "Wing Dragon of Ra",
    description:
      "Tactic on slowly and powerfully torturing opponents by using cards that deal continuous damage.",
    cover: "/img/deck-ra.jpg",
    icon: "/img/icon-ra.jpg",
    background: "/img/bg-ra.jpg",
    accent: "#ed6d17",
  },
] as const;

export const decks: Deck[] = meta.map((m) => {
  const d = (cards as Record<string, { name: string; sections: DeckSection[] }>)[m.key];
  return {
    slug: m.key,
    name: d.name,
    shortName: m.shortName,
    description: m.description,
    cover: m.cover,
    icon: m.icon,
    background: m.background,
    accent: m.accent,
    sections: d.sections,
  };
});

export const getDeck = (slug: string) => decks.find((d) => d.slug === slug);
