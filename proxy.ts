import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cigaretteRedirectForPath } from "./app/lib/cigarettePaths";
import { SHOW_CIGARETTES } from "./app/lib/showCigarettes";

export function proxy(request: NextRequest) {
  if (SHOW_CIGARETTES) return NextResponse.next();
  const destination = cigaretteRedirectForPath(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();
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
