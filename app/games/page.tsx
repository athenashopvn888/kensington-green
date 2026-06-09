import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Kensington Green | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Kensington Green.",
  alternates: {
    canonical: "https://kensingtongreencannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
