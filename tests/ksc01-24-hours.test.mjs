import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const files = [
  "app/faq/page.tsx",
  "app/tv/page.tsx",
  "app/contact/page.tsx",
  "app/lib/gbp-location.ts",
  "app/visit/page.tsx",
  "app/resources/resourceData.ts",
  "app/tv2/page.tsx",
  "app/lib/seoPages.ts",
  "app/items/[category]/page.tsx",
  "app/lib/storeNap.ts",
  "app/page.tsx",
  "app/lib/weedDiscovery.ts",
];

const storefrontSource = files
  .map((file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8"))
  .join("\n");

test("KSC01 storefront surfaces state 24-hour hours", () => {
  assert.match(storefrontSource, /Open 24 Hours Daily/i);
  assert.doesNotMatch(storefrontSource, /10:00 AM/);
  assert.doesNotMatch(storefrontSource, /(?:0?2|2):00 AM/);
});

test("KSC01 storefront schema uses all-day hours", () => {
  const nap = readFileSync(new URL("../app/lib/storeNap.ts", import.meta.url), "utf8");
  assert.match(nap, /hoursOpens:\s*"00:00"/);
  assert.match(nap, /hoursCloses:\s*"23:59"/);
});

test("KSC01 delivery hours remain unchanged", () => {
  const delivery = readFileSync(
    new URL("../app/weed-delivery-toronto/page.tsx", import.meta.url),
    "utf8",
  );
  assert.match(delivery, /opens:\s*"10:00"/);
  assert.match(delivery, /closes:\s*"22:00"/);
});
