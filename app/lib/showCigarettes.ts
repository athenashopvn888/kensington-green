/**
 * Site-wide recallable switch for cigarette and tobacco pages.
 * SHOW_CIGARETTES defaults to false. Set NEXT_PUBLIC_SHOW_CIGARETTES=true
 * and rebuild to restore every gated surface exactly.
 */
export const SHOW_CIGARETTES_DEFAULT = false;

function readShowCigarettes(raw: string | undefined): boolean {
  if (raw == null || raw.trim() === "") return SHOW_CIGARETTES_DEFAULT;
  const value = raw.trim().toLowerCase();
  if (value === "true" || value === "1" || value === "yes") return true;
  if (value === "false" || value === "0" || value === "no") return false;
  return SHOW_CIGARETTES_DEFAULT;
}

export const SHOW_CIGARETTES = readShowCigarettes(process.env.NEXT_PUBLIC_SHOW_CIGARETTES);

/** Dedicated vape page. Cigarette URLs 302 here while the switch is off. */
export const CIGARETTE_REDIRECT_PATH = "/vape-shop-dundas-west";

/** Rolling papers, Backwoods, and cigarillos stay on their own URLs. Grabba follows the cigarette switch. */
const KEPT_ACCESSORY = /\b(backwoods|cigarillos?|rolling papers?|raw papers?)\b/i;
const GRABBA_WORD = /\bgrabba\b/i;

export const HIDDEN_BRAND_GUIDE_SLUGS = new Set([
  "canadian-classics",
  "nexus-cigarettes",
  "canadian-goose",
  "putters",
  "time-cigarettes",
  "rolled-gold",
  "canadian-cigarettes",
]);

const STATIC_CIGARETTE_PATHS = new Set([
  "/cigarettes",
  "/items/cigarettes",
  "/info/native-cigarettes-dundas-west",
  "/info/native-cigarettes-york",
  "/resources/native-smokes-prices",
]);

const CIGARETTE_MENTION = /\b(cigarettes?|cigars?|tobacco|native smokes?)\b/i;

export function isKeptTobaccoAccessory(name: string): boolean {
  return KEPT_ACCESSORY.test(name);
}

export function mentionsGrabba(text: string): boolean {
  return GRABBA_WORD.test(text);
}

export function isHiddenCigaretteProduct(
  item: { name?: string; category?: string; slug?: string },
  showCigarettes = SHOW_CIGARETTES,
): boolean {
  if (showCigarettes) return false;
  const label = `${item.name || ""} ${item.slug || ""}`;
  if (mentionsGrabba(label)) return true;
  if (isKeptTobaccoAccessory(label)) return false;
  return String(item.category || "").trim().toUpperCase() === "CIGARETTES";
}

export function isHiddenCigaretteGuide(
  guide: { slug: string; lane?: string },
  showCigarettes = SHOW_CIGARETTES,
): boolean {
  if (showCigarettes) return false;
  if (mentionsGrabba(guide.slug)) return true;
  if (isKeptTobaccoAccessory(guide.slug)) return false;
  if (guide.lane === "native_cig") return true;
  return HIDDEN_BRAND_GUIDE_SLUGS.has(guide.slug);
}

export function normalizePublicPath(href: string): string {
  const withoutHash = href.split("#")[0]?.split("?")[0] || "/";
  if (/^https?:\/\//i.test(withoutHash)) {
    try {
      return new URL(withoutHash).pathname.replace(/\/+$/, "") || "/";
    } catch {
      return withoutHash;
    }
  }
  const withSlash = withoutHash.startsWith("/") ? withoutHash : `/${withoutHash}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

export function isHiddenCigaretteHref(href: string, showCigarettes = SHOW_CIGARETTES): boolean {
  if (showCigarettes) return false;
  const path = normalizePublicPath(href);
  if (STATIC_CIGARETTE_PATHS.has(path)) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item && mentionsGrabba(decodeURIComponent(item[1]))) return true;
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (!guide) return false;
  return isHiddenCigaretteGuide({ slug: decodeURIComponent(guide[1]) });
}

export function mentionsCigaretteCopy(text: string): boolean {
  return CIGARETTE_MENTION.test(text);
}

/**
 * Brand-guide titles bake in "Native Cigarettes". While the switch is off,
 * drop that phrase and keep the rest of the title. Switch on returns the original.
 */
export function visibleGuideTitle(title: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !title) return title;
  return title.replace(/\bNative [Cc]igarettes?\b/g, "").replace(/\s{2,}/g, " ").replace(/\s+\|/g, " |").trim();
}

/**
 * Grabba-only lines disappear while the switch is off. A line that also names
 * Backwoods, cigarillos, or rolling papers keeps that accessory and loses Grabba.
 */
export function scrubGrabbaCopy(text: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !text || !mentionsGrabba(text)) return text;
  if (!isKeptTobaccoAccessory(text)) return "";
  const value = text
    .replace(/\bgrabba(?:\s+shaker)?\b/gi, "")
    .replace(/\s+\band\b(?=\s*(?:[,.]|$))/gi, "")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,/g, ", ")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .trim();
  return /[a-z]/i.test(value) ? value : "";
}

/** Kept accessories stay, but the cigarettes category label does not. */
export function visibleMenuCategory(category: string, showCigarettes = SHOW_CIGARETTES): string | null {
  if (!showCigarettes && category.trim().toUpperCase() === "CIGARETTES") return null;
  return category;
}

/**
 * When the switch is on, the original string is returned unchanged.
 * When it is off, cigarette and tobacco phrases are removed.
 */
export function scrubCigaretteCopy(text: string, showCigarettes = SHOW_CIGARETTES): string {
  if (showCigarettes || !text) return text;
  let value = text;
  const phrases: Array<[RegExp, string]> = [
    [/,\s*and keep cigarette price checks separate from cannabis browsing/gi, ""],
    [/Native cigarettes and nicotine vapes have separate guides/g, "Nicotine vapes have separate guides"],
    [/Visit, Weed Delivery, Native Cigarettes, and Nicotine Vapes/g, "Visit, Weed Delivery, and Nicotine Vapes"],
    [/strains, Native Cigarettes, Nicotine Vape, and THC Vape/g, "strains, Nicotine Vape, and THC Vape"],
    [/It is separate from cigarettes, nicotine vapes and THC vape hardware\./g, "It is separate from nicotine vapes and THC vape hardware."],
    [/Use the cigarette category and /gi, "Use the "],
    [/the cigarette category/gi, "the menu"],
    [/cigarette category/gi, "menu"],
    [/,?\s*native cigarettes,/gi, ","],
    [/, and cigarettes\b/gi, ""],
    [/, cigarettes\b/gi, ""],
    [/ and cigarettes\b/gi, ""],
    [/cigarettes, /gi, ""],
    [/ and tobacco-terminology/gi, ""],
    [/Native Cigarettes, /g, ""],
    [/\bnative cigarettes?\b/gi, ""],
  ];
  for (const [pattern, replacement] of phrases) value = value.replace(pattern, replacement);
  value = value
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => /[A-Za-z]/.test(sentence) && !CIGARETTE_MENTION.test(sentence))
    .join(" ");
  value = value
    .replace(/\s+,/g, ",")
    .replace(/,\s*,/g, ", ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.!?])/g, "$1")
    .trim();
  return value;
}
