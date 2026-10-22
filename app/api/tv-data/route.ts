import { NextResponse } from "next/server";
import { cigarettePublicHeaders } from "../../lib/cigDecision";
import { getCigaretteSnapshot } from "../../lib/cigaretteFeed";
import { allFlowers, allItems } from "../../lib/products";
import { isHiddenCigaretteProduct } from "../../lib/showCigarettes";
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
  const cigHeaders = cigarettePublicHeaders({ web: cig.web.show, tv: cig.tv.show, wording: cig.wording });

  if (!cig.tv.show && type === "items" && Array.isArray(body)) {
    const filtered = body.filter((item) => !isHiddenCigaretteProduct(item));
    return NextResponse.json(filtered, {
      headers: { ...headers, ...cigHeaders, "x-tv-data-item-count": String(filtered.length) },
    });
  }

  return NextResponse.json(body, { headers: { ...headers, ...cigHeaders } });
}
