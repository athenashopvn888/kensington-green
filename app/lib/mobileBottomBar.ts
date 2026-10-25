/** In-store displays keep the full frame. The bar is not part of those screens. */
export function hideMobileBottomBar(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === "/tv" || pathname === "/tv2" || pathname.startsWith("/tv/") || pathname.startsWith("/tv2/");
}
