import { NextResponse } from "next/server";
import { cigarettePublicHeaders, reconcileSurfaceItems } from "../../lib/cigDecision";
import { getCigaretteSnapshot, toPublicCigaretteState } from "../../lib/cigaretteFeed";
import { allFlowers, allItems } from "../../lib/products";
import { SHOW_CIGARETTES } from "../../lib/showCigarettes";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData; this response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const [{ body, headers }, cig] = await Promise.all([
    getTvData({
      type,
      staticFlowers: allFlowers,
      staticItems: allItems,
    }),
    getCigaretteSnapshot(),
  ]);
  const published = toPublicCigaretteState(cig);
  const cigHeaders = cigarettePublicHeaders({
    web: SHOW_CIGARETTES ? published.web : false,
    tv: published.tv,
    wording: published.wording,
  });

  if (!published.tv && type === "items" && Array.isArray(body)) {
    const filtered = reconcileSurfaceItems(body, body, false);
    return NextResponse.json(filtered, {
      headers: { ...headers, ...cigHeaders, "x-tv-data-item-count": String(filtered.length) },
    });
  }

  return NextResponse.json(body, { headers: { ...headers, ...cigHeaders } });
}
