import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cigaretteWebGate, type CigaretteWebGate } from "./app/lib/cigaretteGate";
import { getCigaretteSnapshot } from "./app/lib/cigaretteFeed";
import { cigaretteRedirectForPath } from "./app/lib/cigarettePaths";
import { CIGARETTE_REDIRECT_PATH, SHOW_CIGARETTES, isHiddenCigaretteHref } from "./app/lib/showCigarettes";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const codedDestination = cigaretteRedirectForPath(path);
  const controlled = Boolean(codedDestination) || isHiddenCigaretteHref(path, false);
  if (!controlled) return NextResponse.next();

  let gate: CigaretteWebGate = SHOW_CIGARETTES ? "show" : "redirect";
  try {
    const snap = await getCigaretteSnapshot();
    gate = cigaretteWebGate(snap.web);
  } catch {
    gate = SHOW_CIGARETTES ? "show" : "redirect";
  }

  if (gate === "show") return NextResponse.next();
  if (gate === "unavailable") {
    const url = request.nextUrl.clone();
    url.pathname = "/cigarette-unavailable";
    url.search = "";
    return NextResponse.rewrite(url);
  }

  const destination = codedDestination || CIGARETTE_REDIRECT_PATH;
  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.search = "";
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: [
    "/cigarettes",
    "/cigarettes/:path*",
    "/items/cigarettes",
    "/items/cigarettes/:path*",
    "/item/:slug*",
    "/guides/:slug*",
    "/info/:slug*",
    "/resources/:path*",
  ],
};
