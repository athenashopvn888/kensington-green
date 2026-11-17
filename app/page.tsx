import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { getLiveMenu } from "./lib/liveMenu";
import { HOME_PAGE_TITLE } from "./lib/storeNap";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: HOME_PAGE_TITLE },
};

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index])
    ? fleet.banners
    : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
