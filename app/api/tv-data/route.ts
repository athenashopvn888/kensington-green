import { NextResponse } from "next/server";
import { allFlowers, allItems } from "../../lib/products";
import { SHOW_CIGARETTES, isHiddenCigaretteProduct } from "../../lib/showCigarettes";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData; this response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: allItems,
  });

  if (!SHOW_CIGARETTES && type === "items" && Array.isArray(body)) {
    const filtered = body.filter((item) => !isHiddenCigaretteProduct(item));
    return NextResponse.json(filtered, {
      headers: { ...headers, "x-tv-data-item-count": String(filtered.length) },
    });
  }

  return NextResponse.json(body, { headers });
}
