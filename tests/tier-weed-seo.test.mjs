import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const owner = readFileSync("app/lib/weedDiscovery.ts", "utf8");

const tierKeys = ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"];

test("all five verified tier keys have approved copy, metadata, and H1 data", () => {
  for (const key of tierKeys) {
    assert.ok(tierCopy.includes(`${key}:`), `missing ${key}`);
  }
  assert.match(tierPage, /TIER_META_DESCRIPTION\[tierInfo\.key\]/);
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
  assert.match(tierCopy, /Weed & Cannabis Flower in Toronto/);
});

test("tier pages preserve canonical route ownership", () => {
  assert.match(
    tierPage,
    /canonical: `https:\/\/www\.kensingtongreencannabis\.com\/\$\{tierSlug\}`/,
  );
  assert.match(owner, /ownerPath: "\/weed-dispensary-toronto\/"/);
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(readFileSync("app/lib/products.ts", "utf8"), new RegExp(`slug: "${slug}"`));
  }
});

test("new tier copy avoids live product and commercial promises", () => {
  assert.doesNotMatch(tierCopy, /now in stock|available today|free delivery|buy one|get one|sale price/i);
  assert.doesNotMatch(tierCopy, /posted weights|posted prices|current public menu/i);
});
