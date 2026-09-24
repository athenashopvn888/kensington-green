import type { Metadata } from "next";
import GamesContent from "./GamesContent";
import { resolveDocumentTitle } from "../lib/storeNap";

export const metadata: Metadata = {
  title: resolveDocumentTitle("Cannabis Arcade Games — Kensington Green | Toronto"),
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Kensington Green.",
  alternates: {
    canonical: "https://www.kensingtongreencannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
