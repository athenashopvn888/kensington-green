import { cache } from "react";
import {
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { SHOW_CIGARETTES } from "./showCigarettes";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function codedSnapshot(reason: "missing" | "error"): CigaretteSnapshot {
  const errored = reason === "error";
  const web = decideCigaretteSurface({ cig: null, items: [], surface: "web", errored });
  const tv = decideCigaretteSurface({ cig: null, items: [], surface: "tv", errored });
  return {
    web,
    tv,
    guides: { show: SHOW_CIGARETTES, reason },
    wording: web.wording,
    live: false,
    items: [],
  };
}

/** webOn / tvOn come from the menu feed. A miss or a throw hides TV. A last-good block still follows its saved tvOn. */
export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const source = dataset?.source;
    const live = source === "live" || source === "last-good";
    const cig = dataset?.cig ?? null;
    // Last-good inside the existing cache window still follows its saved tvOn.
    // A miss with no saved cig block fails closed.
    if (!dataset || (!live && !cig)) return codedSnapshot("error");
    if (cig == null) return codedSnapshot("missing");
    const web = decideCigaretteSurface({ cig, items, surface: "web" });
    const tv = decideCigaretteSurface({ cig, items, surface: "tv" });
    const guides = decideCigaretteGuide({ cig, items });
    return { web, tv, guides, wording: web.wording, live: source === "live", items };
  } catch {
    return codedSnapshot("error");
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: snap.tv.show,
    wording: snap.wording,
  };
}
