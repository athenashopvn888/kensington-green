import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  BOGO_BUY_2_GET_1,
  BOGO_BUY_3_GET_3,
  formatAsLowAsAfterPromos,
  formatBoardDealLine,
  formatPayEquals,
  formatPerGram,
  formatSitewideBogoStrip,
} from "../app/lib/flowerDeals.ts";

const read = (path: string) => fs.readFileSync(path, "utf8");

test("board math keeps live totals and states the paid weight beside FREE", () => {
  assert.equal(formatPayEquals(20, 3), "Pay $20 = 3g");
  assert.equal(formatPayEquals(30, 6), "Pay $30 = 6g");
  assert.equal(formatPayEquals(45, 6), "Pay $45 = 6g");
  assert.equal(formatPerGram(20, 3), "~$6.67/g");
  assert.equal(formatPerGram(30, 6), "$5/g");
  assert.equal(formatPerGram(30, 3), "$10/g");
  assert.equal(formatPerGram(45, 6), "$7.50/g");
  assert.equal(formatPerGram(40, 3), "~$13.33/g");
  assert.equal(formatPerGram(60, 6), "$10/g");
  assert.equal(formatAsLowAsAfterPromos(30, 6), "As low as $5/g after promos");
  assert.equal(formatAsLowAsAfterPromos(45, 6), "As low as $7.50/g after promos");
  assert.equal(formatAsLowAsAfterPromos(60, 6), "As low as $10/g after promos");
  assert.equal(
    formatBoardDealLine({ label: BOGO_BUY_2_GET_1, total: "3G", price: 20, grams: 3, equals: "2g=3g" }),
    "Buy 2g Get 1g FREE · Pay $20 = 3g",
  );
  assert.equal(BOGO_BUY_3_GET_3, "Buy 3g Get 3g FREE");
});

test("TIER_CONFIG uses board labels and does not invent prices", () => {
  const products = read("app/lib/products.ts");
  assert.match(products, /BOGO_BUY_2_GET_1/);
  assert.match(products, /BOGO_BUY_3_GET_3/);
  assert.match(products, /price: 40, grams: 3, equals: "2g=3g"/);
  assert.match(products, /price: 60, grams: 6, equals: "3g=6g"/);
  assert.match(products, /price: 30, grams: 3, equals: "2g=3g"/);
  assert.match(products, /price: 45, grams: 6, equals: "3g=6g"/);
  assert.match(products, /price: 20, grams: 3, equals: "2g=3g"/);
  assert.match(products, /price: 30, grams: 6, equals: "3g=6g"/);
  assert.match(products, /label: "\$10 \/ 3g Special", total: "3G", price: 10, grams: 3/);
  assert.doesNotMatch(products, /3g bundle|6g bundle|bundle pricing/);
  assert.match(products, /slug: "exotic-weed"/);
  assert.match(products, /slug: "premium-weed"/);
  assert.match(products, /slug: "aaa-weed"/);
  assert.match(products, /slug: "aa-weed"/);
  assert.match(products, /slug: "budget-weed"/);
  assert.match(products, /unitPrice: 20/);
  assert.match(products, /unitPrice: 15/);
  assert.match(products, /unitPrice: 10/);
});

test("web flower surfaces use BOGO, paid totals, and tier floors", () => {
  const card = read("app/components/FlowerCard.tsx");
  const tier = read("app/[tier]/page.tsx");
  const pdp = read("app/flower/[slug]/page.tsx");
  const faq = read("app/faq/page.tsx");
  const home = read("app/page.tsx");
  const joined = [card, tier, pdp, faq, home].join("\n");

  assert.doesNotMatch(joined, /3g bundle|6g bundle|bundle pricing/);
  assert.match(card, /formatPayEquals/);
  assert.match(card, /6g →/);
  assert.match(tier, /formatAsLowAsAfterPromos/);
  assert.match(tier, /List \$\{config\.unitPrice\}\/g/);
  assert.match(tier, /Pay <strong>\$\{deal\.price\}<\/strong> = \{deal\.grams\}g/);
  assert.match(tier, /canonical: `https:\/\/www\.kensingtongreencannabis\.com\/\$\{tierSlug\}`/);
  assert.match(pdp, /In-store board deals/);
  assert.match(pdp, /Pay <strong>\{formatDollars\(effectivePrice\)\} = \{grams\}g<\/strong>/);
  assert.match(pdp, /canonical: `https:\/\/www\.kensingtongreencannabis\.com\/flower\/\$\{slug\}`/);
  assert.match(faq, /What flower deals match the in-store board\?/);
  assert.match(faq, /AA does not include these deals/);
  assert.match(faq, /canonical: "https:\/\/www\.kensingtongreencannabis\.com\/faq"/);
  assert.match(home, /Flower deals same as in-store/);
  assert.match(home, /price: "\$5-\$6\/g"/);
  assert.match(home, /price: "\$7-\$10\/g"/);
  assert.match(home, /price: "\$10-\$12\/g"/);
});

test("sitewide flower strip leads the announcement stack without new prices", () => {
  assert.equal(
    formatSitewideBogoStrip(30, 6),
    "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE — as low as $5/g",
  );
  const banner = read("app/components/FleetAnnouncementBanner.tsx");
  const stripAt = banner.indexOf("<FlowerBogoStrip />");
  const thanksAt = banner.indexOf("Thanksgiving Monday");
  const cigAt = banner.indexOf("CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH");
  const bbAt = banner.indexOf("EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL");
  assert.ok(stripAt > -1 && thanksAt > stripAt && cigAt > thanksAt && bbAt > cigAt);
  const nav = read("app/components/Navbar.tsx");
  assert.match(nav, /pathname !== "\/" \? <FlowerBogoStrip \/>/);
  assert.match(read("app/components/FlowerBogoStrip.tsx"), /href="\/aaa-weed"/);
  assert.doesNotMatch(read("app/tv/page.tsx"), /FlowerBogoStrip|as low as \$5\/g/);
  assert.match(read("app/delivery/DeliveryCatalog.tsx"), /× 28g DEAL/);
});

test("TV board stays BOGO and delivery ounce deals stay untouched", () => {
  const tv = read("app/tv/page.tsx");
  const delivery = read("app/delivery/DeliveryCatalog.tsx");
  assert.match(tv, /Buy 2g Get 1g FREE/);
  assert.match(tv, /Buy 3g Get 3g FREE/);
  assert.match(tv, /Buy 3g Get 3 FREE/);
  assert.doesNotMatch(tv, /3g bundle|6g bundle/);
  assert.match(delivery, /× 28g DEAL/);
  assert.match(delivery, /bundle-decision/);
});
