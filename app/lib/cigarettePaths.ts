import { DELIVERY_GUIDE_REGISTRY } from "./deliveryGuideRegistry";
import itemsJson from "./items.json";
import {
  CIGARETTE_REDIRECT_PATH,
  HIDDEN_BRAND_GUIDE_SLUGS,
  SHOW_CIGARETTES,
  isHiddenCigaretteGuide,
  isHiddenCigaretteHref,
  isHiddenCigaretteProduct,
  normalizePublicPath,
} from "./showCigarettes";

type CatalogItem = { name?: string; slug?: string; category?: string };

const hiddenItemSlugs = new Set(
  (itemsJson as CatalogItem[])
    .filter((item) => item.slug && isHiddenCigaretteProduct(item))
    .map((item) => item.slug as string),
);

const hiddenGuideSlugs = new Set<string>(HIDDEN_BRAND_GUIDE_SLUGS);
for (const guide of DELIVERY_GUIDE_REGISTRY) {
  if (isHiddenCigaretteGuide(guide)) hiddenGuideSlugs.add(guide.slug);
}

export function isHiddenCigarettePathname(pathname: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = normalizePublicPath(pathname);
  if (isHiddenCigaretteHref(path)) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item && hiddenItemSlugs.has(decodeURIComponent(item[1]))) return true;
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (guide && hiddenGuideSlugs.has(decodeURIComponent(guide[1]))) return true;
  return false;
}

/** 302 target while cigarettes are hidden. Null leaves the request alone. */
export function cigaretteRedirectForPath(pathname: string): string | null {
  return isHiddenCigarettePathname(pathname) ? CIGARETTE_REDIRECT_PATH : null;
}
