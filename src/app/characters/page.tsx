import type { Metadata } from "next";
import CharacterCard from "@/components/CharacterCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { characters } from "@/data/characters";

export const metadata: Metadata = {
  title: "Characters",
  description: "Profiles of the main duelists of Yu-Gi-Oh! Duel Monsters.",
};

export default function CharactersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Duelists"
        title="Characters"
        subtitle="The heroes, rivals and villains of Duel Monsters."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {characters.map((c, i) => (
          <Reveal key={c.slug} delay={i * 100}>
            <CharacterCard c={c} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
