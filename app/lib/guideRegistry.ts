import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";

export type GuideLane = "strain" | "native_cig" | "nic_vape" | "thc_vape";

export type GuideEntry = {
  slug: string;
  lane: GuideLane;
  name: string;
  title: string;
  preferredCategoryPath: string;
  relatedSlugs: string[];
  stockMatch: RegExp;
  preferredProductSlug?: string;
  stockSource: "flowers.json" | "items.json" | "delivery-menu.json";
  menuNote: string;
};

type GuideSeed = Omit<GuideEntry, "title" | "relatedSlugs">;

const strains: GuideSeed[] = [
  { slug: "pink-kush", lane: "strain", name: "Pink Kush", preferredCategoryPath: "/aaa-weed", stockMatch: /^PINK KUSH$/i, preferredProductSlug: "pink-kush", stockSource: "flowers.json", menuNote: "listed as Pink Kush" },
  { slug: "purple-punch", lane: "strain", name: "Purple Punch", preferredCategoryPath: "/aaa-weed", stockMatch: /^PURPLE PUNCH$/i, preferredProductSlug: "purple-punch", stockSource: "flowers.json", menuNote: "listed as Purple Punch" },
  { slug: "permanent-marker", lane: "strain", name: "Permanent Marker", preferredCategoryPath: "/exotic-weed", stockMatch: /PINK PERMANENT MARKER/i, preferredProductSlug: "pink-permanent-marker", stockSource: "flowers.json", menuNote: "listed as Pink Permanent Marker" },
  { slug: "peanut-butter-rockstar", lane: "strain", name: "Peanut Butter Rockstar", preferredCategoryPath: "/exotic-weed", stockMatch: /^PEANUT BUTTER ROCKSTAR$/i, preferredProductSlug: "peanut-butter-rockstar", stockSource: "flowers.json", menuNote: "listed as Peanut Butter Rockstar" },
  { slug: "super-lemon-haze", lane: "strain", name: "Super Lemon Haze", preferredCategoryPath: "/aa-weed", stockMatch: /^SUPER LEMON HAZE$/i, preferredProductSlug: "super-lemon-haze", stockSource: "flowers.json", menuNote: "listed as Super Lemon Haze" },
  { slug: "pineapple-haze", lane: "strain", name: "Pineapple Haze", preferredCategoryPath: "/premium-weed", stockMatch: /^PINEAPPLE HAZE$/i, preferredProductSlug: "pineapple-haze", stockSource: "flowers.json", menuNote: "listed as Pineapple Haze" },
  { slug: "master-kush", lane: "strain", name: "Master Kush", preferredCategoryPath: "/aa-weed", stockMatch: /^MASTER KUSH$/i, preferredProductSlug: "master-kush", stockSource: "flowers.json", menuNote: "listed as Master Kush" },
  { slug: "gelato", lane: "strain", name: "Gelato", preferredCategoryPath: "/premium-weed", stockMatch: /LEMON CHERRY GELATO/i, preferredProductSlug: "lemon-cherry-gelato", stockSource: "flowers.json", menuNote: "represented by Lemon Cherry Gelato" },
  { slug: "slurricane", lane: "strain", name: "Slurricane", preferredCategoryPath: "/aa-weed", stockMatch: /^SLURRICANE$/i, preferredProductSlug: "slurricane", stockSource: "flowers.json", menuNote: "listed as Slurricane" },
  { slug: "northern-lights", lane: "strain", name: "Northern Lights", preferredCategoryPath: "/budget-weed", stockMatch: /NORTHERN LIGHTS.*SHREDS/i, preferredProductSlug: "northern-lights-shreds", stockSource: "flowers.json", menuNote: "listed as Northern Lights (Shreds)" },
  { slug: "granddaddy-purple", lane: "strain", name: "Granddaddy Purple", preferredCategoryPath: "/budget-weed", stockMatch: /GRANDADDY PURPLE.*SHREDS/i, preferredProductSlug: "grandaddy-purple-shreds", stockSource: "flowers.json", menuNote: "listed as Grandaddy Purple (Shreds)" },
  { slug: "royal-gorilla", lane: "strain", name: "Royal Gorilla", preferredCategoryPath: "/aa-weed", stockMatch: /^ROYAL GORILLA$/i, preferredProductSlug: "royal-gorilla", stockSource: "flowers.json", menuNote: "listed as Royal Gorilla" },
  { slug: "red-congolese", lane: "strain", name: "Red Congolese", preferredCategoryPath: "/premium-weed", stockMatch: /^RED CONGOLESE$/i, preferredProductSlug: "red-congolese", stockSource: "flowers.json", menuNote: "listed as Red Congolese" },
  { slug: "pineapple-express", lane: "strain", name: "Pineapple Express", preferredCategoryPath: "/exotic-weed", stockMatch: /^PINEAPPLE EXPRESS$/i, preferredProductSlug: "pineapple-express", stockSource: "flowers.json", menuNote: "listed as Pineapple Express" },
  { slug: "pure-michigan", lane: "strain", name: "Pure Michigan", preferredCategoryPath: "/exotic-weed", stockMatch: /^PURE MICHIGAN$/i, preferredProductSlug: "pure-michigan", stockSource: "flowers.json", menuNote: "listed as Pure Michigan" },
  { slug: "og-kush", lane: "strain", name: "OG Kush", preferredCategoryPath: "/premium-weed", stockMatch: /^OG KUSH/i, stockSource: "delivery-menu.json", menuNote: "a delivery-board name; check today's category board" },
  { slug: "mku", lane: "strain", name: "MKU", preferredCategoryPath: "/premium-weed", stockMatch: /^MKU/i, stockSource: "delivery-menu.json", menuNote: "a delivery-board name; check today's category board" },
  { slug: "sour-diesel", lane: "strain", name: "Sour Diesel", preferredCategoryPath: "/budget-weed", stockMatch: /SOUR DIESEL/i, stockSource: "delivery-menu.json", menuNote: "a delivery-board name; check today's category board" },
];

const nativeCigarettes: GuideSeed[] = [
  { slug: "canadian-classics", lane: "native_cig", name: "Canadian Classics", preferredCategoryPath: "/items/cigarettes", stockMatch: /CANADIAN CLASSICS/i, preferredProductSlug: "canadian-classics-original", stockSource: "items.json", menuNote: "covers Canadian Classics Original and Silver listings" },
  { slug: "nexus-cigarettes", lane: "native_cig", name: "Nexus", preferredCategoryPath: "/items/cigarettes", stockMatch: /^NEXUS/i, preferredProductSlug: "nexus-lights", stockSource: "items.json", menuNote: "listed as Nexus Lights" },
  { slug: "canadian-goose", lane: "native_cig", name: "Canadian Goose", preferredCategoryPath: "/items/cigarettes", stockMatch: /CANADIAN GOOSE/i, stockSource: "items.json", menuNote: "covers Canadian Goose Full and Lights listings" },
  { slug: "putters", lane: "native_cig", name: "Putters", preferredCategoryPath: "/items/cigarettes", stockMatch: /^PUTTERS/i, preferredProductSlug: "putters", stockSource: "items.json", menuNote: "listed as Putters" },
  { slug: "time-cigarettes", lane: "native_cig", name: "Time", preferredCategoryPath: "/items/cigarettes", stockMatch: /^TIME FULL$/i, preferredProductSlug: "time-full", stockSource: "items.json", menuNote: "listed as Time Full" },
  { slug: "rolled-gold", lane: "native_cig", name: "Rolled Gold", preferredCategoryPath: "/items/cigarettes", stockMatch: /ROLLED GOLD/i, preferredProductSlug: "rolled-gold-lights", stockSource: "items.json", menuNote: "listed as Rolled Gold Lights" },
  { slug: "canadian-cigarettes", lane: "native_cig", name: "Canadian", preferredCategoryPath: "/items/cigarettes", stockMatch: /^CANADIAN (FULL|LIGHTS|MENTHOL)$/i, stockSource: "items.json", menuNote: "covers Canadian Full, Lights and Menthol listings" },
  { slug: "backwoods", lane: "native_cig", name: "Backwoods", preferredCategoryPath: "/items/cigarettes", stockMatch: /BACKWOODS/i, stockSource: "items.json", menuNote: "covers the current Backwoods listings" },
  { slug: "grabba", lane: "native_cig", name: "Grabba", preferredCategoryPath: "/items/cigarettes", stockMatch: /GRABBA/i, stockSource: "items.json", menuNote: "covers Grabba and Grabba Shaker listings" },
];

const nicotineVapes: GuideSeed[] = [
  { slug: "ovns-vape", lane: "nic_vape", name: "OVNS", preferredCategoryPath: "/items/vapes", stockMatch: /^OVNS/i, stockSource: "items.json", menuNote: "covers current OVNS listings; OVNS is not OVI" },
  { slug: "geek-bar-vape", lane: "nic_vape", name: "Geek Bar", preferredCategoryPath: "/items/vapes", stockMatch: /^GEEK (MAX|PROMAX|UNIVERSE)/i, preferredProductSlug: "geek-max-5-20k30k-puffs-many-flavors", stockSource: "items.json", menuNote: "represented by the current Geek vape listings" },
  { slug: "nexa-pix-vape", lane: "nic_vape", name: "Nexa Pix", preferredCategoryPath: "/items/vapes", stockMatch: /^NEXA PIX/i, preferredProductSlug: "nexa-pix-30k-puffs-many-flavors", stockSource: "items.json", menuNote: "listed as Nexa Pix" },
  { slug: "zpods-vape", lane: "nic_vape", name: "Zpods", preferredCategoryPath: "/items/concentrates", stockMatch: /^ZPODS?/i, stockSource: "items.json", menuNote: "a nicotine-pod name filed on the concentrates shelf; check the nicotine menu too" },
];

const thcVapes: GuideSeed[] = [
  { slug: "gas-gang-thc-vape", lane: "thc_vape", name: "Gas Gang", preferredCategoryPath: "/items/vape-disposables", stockMatch: /GAS GANG.*(DISPO|2G|V[O0]L)/i, stockSource: "items.json", menuNote: "covers Gas Gang THC disposable listings" },
  { slug: "goober-thc-vape", lane: "thc_vape", name: "Goober", preferredCategoryPath: "/items/vapes", stockMatch: /GOOBER VAPE PEN/i, stockSource: "items.json", menuNote: "a THC pen listing even though it appears on the VAPE PENS shelf" },
  { slug: "drizzle-thc-vape", lane: "thc_vape", name: "Drizzle", preferredCategoryPath: "/items/prerolls", stockMatch: /DRIZZLE DELTA D9/i, preferredProductSlug: "drizzle-delta-d9", stockSource: "items.json", menuNote: "a Delta D9 pre-roll listing, not a disposable-vape claim" },
];

const seeds = [...strains, ...nativeCigarettes, ...nicotineVapes, ...thcVapes];

const clusterFor = (seed: GuideSeed) => seeds
  .filter((candidate) => candidate.lane === seed.lane && candidate.slug !== seed.slug)
  .slice(0, seed.lane === "strain" ? 4 : 3)
  .map((candidate) => candidate.slug);

const laneLabel = (lane: GuideLane) => ({
  strain: "",
  native_cig: " Native Cigarettes",
  nic_vape: " Nicotine Vape",
  thc_vape: " THC Vape",
})[lane];

export const GUIDE_REGISTRY: GuideEntry[] = seeds.map((seed) => ({
  ...seed,
  title: `${seed.name}${laneLabel(seed.lane)} at Kensington Green | Dundas West`,
  relatedSlugs: clusterFor(seed),
}));

export function getGuide(slug: string) {
  return GUIDE_REGISTRY.find((guide) => guide.slug === slug);
}

export function resolveGuideProduct(guide: GuideEntry): FlowerProduct | ItemProduct | undefined {
  if (guide.stockSource === "delivery-menu.json") return undefined;
  const products = guide.lane === "strain" ? allFlowers : allItems;
  return products.find((product) => guide.stockMatch.test(product.name));
}

export function getTierGuideLinks(categoryPath: string, limit = 6) {
  return GUIDE_REGISTRY.filter((guide) => guide.lane === "strain" && guide.preferredCategoryPath === categoryPath).slice(0, limit);
}

export function getCategoryGuideGroups(categoryPath: string) {
  if (categoryPath === "/items/cigarettes") {
    return [{ label: "Native Cigarettes brand guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "native_cig") }];
  }
  if (categoryPath === "/items/vapes") {
    return [
      { label: "Nicotine Vape brand guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "nic_vape").slice(0, 4) },
      { label: "Separate THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 2) },
    ];
  }
  if (categoryPath === "/items/vape-disposables") {
    return [{ label: "THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 2) }];
  }
  return [];
}
