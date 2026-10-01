import Link from "next/link";
import { TIER_CONFIG } from "../lib/products";
import { formatSitewideBogoStrip } from "../lib/flowerDeals";

export function flowerBogoStripLabel(): string {
  const deal = TIER_CONFIG["AAA+"].deal6g;
  if (!deal) return "";
  return formatSitewideBogoStrip();
}

export default function FlowerBogoStrip({ hero = false }: { hero?: boolean }) {
  const label = flowerBogoStripLabel();
  if (!label) return null;

  return (
    <Link href="/aaa-weed" data-flower-bogo-strip={hero ? "hero" : "nav"}>
      {label}
    </Link>
  );
}
