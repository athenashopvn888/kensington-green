import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";
import { SHOW_CIGARETTES, isHiddenCigaretteGuide } from "./showCigarettes";

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
  { slug: "wedding-cake", lane: "strain", name: "Wedding Cake", preferredCategoryPath: "/exotic-weed", stockMatch: /^WEDDING CAKE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "blue-dream", lane: "strain", name: "Blue Dream", preferredCategoryPath: "/exotic-weed", stockMatch: /^BLUE DREAM$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "gorilla-glue-4", lane: "strain", name: "Gorilla Glue #4", preferredCategoryPath: "/exotic-weed", stockMatch: /^GORILLA GLUE #4$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "white-widow", lane: "strain", name: "White Widow", preferredCategoryPath: "/exotic-weed", stockMatch: /^WHITE WIDOW$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "jack-herer", lane: "strain", name: "Jack Herer", preferredCategoryPath: "/aaa-weed", stockMatch: /^JACK HERER$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "girl-scout-cookies", lane: "strain", name: "Girl Scout Cookies", preferredCategoryPath: "/exotic-weed", stockMatch: /^GIRL SCOUT COOKIES$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "zkittlez", lane: "strain", name: "Zkittlez", preferredCategoryPath: "/premium-weed", stockMatch: /^ZKITTLEZ$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "runtz", lane: "strain", name: "Runtz", preferredCategoryPath: "/exotic-weed", stockMatch: /^RUNTZ$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "white-runtz", lane: "strain", name: "White Runtz", preferredCategoryPath: "/exotic-weed", stockMatch: /^WHITE RUNTZ$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "mac-1", lane: "strain", name: "MAC 1", preferredCategoryPath: "/exotic-weed", stockMatch: /^MAC 1$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "do-si-dos", lane: "strain", name: "Do-Si-Dos", preferredCategoryPath: "/premium-weed", stockMatch: /^DO-SI-DOS$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "sunset-sherbet", lane: "strain", name: "Sunset Sherbet", preferredCategoryPath: "/exotic-weed", stockMatch: /^SUNSET SHERBET$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "biscotti", lane: "strain", name: "Biscotti", preferredCategoryPath: "/exotic-weed", stockMatch: /^BISCOTTI$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "gary-payton", lane: "strain", name: "Gary Payton", preferredCategoryPath: "/exotic-weed", stockMatch: /^GARY PAYTON$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "lemon-cherry-gelato", lane: "strain", name: "Lemon Cherry Gelato", preferredCategoryPath: "/exotic-weed", stockMatch: /^LEMON CHERRY GELATO$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "apple-fritters", lane: "strain", name: "Apple Fritter", preferredCategoryPath: "/exotic-weed", stockMatch: /^APPLE FRITTER$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "ice-cream-cake", lane: "strain", name: "Ice Cream Cake", preferredCategoryPath: "/premium-weed", stockMatch: /^ICE CREAM CAKE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "london-pound-cake", lane: "strain", name: "London Pound Cake", preferredCategoryPath: "/exotic-weed", stockMatch: /^LONDON POUND CAKE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "bubba-kush", lane: "strain", name: "Bubba Kush", preferredCategoryPath: "/premium-weed", stockMatch: /^BUBBA KUSH$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "amnesia-haze", lane: "strain", name: "Amnesia Haze", preferredCategoryPath: "/aaa-weed", stockMatch: /^AMNESIA HAZE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "strawberry-cough", lane: "strain", name: "Strawberry Cough", preferredCategoryPath: "/aaa-weed", stockMatch: /^STRAWBERRY COUGH$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "tangie", lane: "strain", name: "Tangie", preferredCategoryPath: "/aaa-weed", stockMatch: /^TANGIE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "trainwreck", lane: "strain", name: "Trainwreck", preferredCategoryPath: "/aaa-weed", stockMatch: /^TRAINWRECK$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "durban-poison", lane: "strain", name: "Durban Poison", preferredCategoryPath: "/aaa-weed", stockMatch: /^DURBAN POISON$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "chemdawg", lane: "strain", name: "Chemdawg", preferredCategoryPath: "/exotic-weed", stockMatch: /^CHEMDAWG$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "cherry-pie", lane: "strain", name: "Cherry Pie", preferredCategoryPath: "/exotic-weed", stockMatch: /^CHERRY PIE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "banana-kush", lane: "strain", name: "Banana Kush", preferredCategoryPath: "/exotic-weed", stockMatch: /^BANANA KUSH$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "forbidden-fruit", lane: "strain", name: "Forbidden Fruit", preferredCategoryPath: "/premium-weed", stockMatch: /^FORBIDDEN FRUIT$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "motorbreath", lane: "strain", name: "Motorbreath", preferredCategoryPath: "/exotic-weed", stockMatch: /^MOTORBREATH$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "black-cherry-punch", lane: "strain", name: "Black Cherry Punch", preferredCategoryPath: "/premium-weed", stockMatch: /^BLACK CHERRY PUNCH$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "ghost-train-haze", lane: "strain", name: "Ghost Train Haze", preferredCategoryPath: "/aaa-weed", stockMatch: /^GHOST TRAIN HAZE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
  { slug: "blue-cheese", lane: "strain", name: "Blue Cheese", preferredCategoryPath: "/premium-weed", stockMatch: /^BLUE CHEESE$/i, stockSource: "delivery-menu.json", menuNote: "a strain name guide; check today's flower board" },
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

const GUIDE_LANES: { lane: GuideLane; label: string }[] = [
  { lane: "strain", label: "Strains" },
  { lane: "native_cig", label: "Native Cigarettes" },
  { lane: "nic_vape", label: "Nicotine Vape" },
  { lane: "thc_vape", label: "THC Vape" },
];

export function getGuidesByLane() {
  return GUIDE_LANES.map(({ lane, label }) => ({
    lane,
    label: !SHOW_CIGARETTES && lane === "native_cig" ? "Backwoods" : label,
    guides: GUIDE_REGISTRY.filter((guide) => guide.lane === lane && !isHiddenCigaretteGuide(guide)),
  })).filter((group) => group.guides.length > 0);
}

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
    const guides = GUIDE_REGISTRY.filter((guide) => guide.lane === "native_cig" && !isHiddenCigaretteGuide(guide));
    if (guides.length === 0) return [];
    return [{ label: SHOW_CIGARETTES ? "Native Cigarettes brand guides" : "Backwoods", guides }];
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
