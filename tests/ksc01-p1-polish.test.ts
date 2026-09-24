import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
import { resolveDocumentTitle } from "../app/lib/storeNap.ts";

const GPC_CIG_COPY = [
  "A Queen West guide for adults comparing cigarette names and package styles before a Parkdale walk-in.",
  "Use these names as a browsing guide, then check the current cigarette menu or ask at the Queen West counter before making a special trip.",
  "This page helps adults plan the cigarette portion of a visit without turning a brand preview into a stock promise.",
  "Use the cigarette category to review the public names and package details shown for this location.",
  "Check the current menu or ask at the counter when one exact brand or style matters.",
  "Use the visit page for the address, phone, 501 Queen streetcar notes and parking guidance.",
  "Treat this guide as an introduction, then use the current cigarette menu for the most recent public information.",
  "The page is a browsing guide and does not guarantee stock, price or availability.",
  "Use the Green Pentagon Cannabis visit page for transit and parking guidance.",
  "Where can I find directions and parking guidance?",
];

function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 60);
}

function pageCopy(slug: string): string {
  const page = SEO_PAGES.find((entry) => entry.slug === slug);
  assert.ok(page, slug);
  const preview = page.heroPreview;
  return [
    page.h1,
    page.heroTagline,
    preview?.intro,
    preview?.disclosure,
    preview?.featuredIntro,
    ...page.sections.flatMap((section) => [section.heading, section.body]),
    ...page.faqs.flatMap((faq) => [faq.q, faq.a]),
  ]
    .filter(Boolean)
    .join(" ");
}

test("document titles name Kensington Green once", () => {
  const samples = [
    "Native Cigarettes Dundas West | Kensington Green",
    "Value Weed Dundas West | Kensington Green",
    "Weed Store Near Dundas West | Kensington Green",
    "Dispensary Near Me Dundas West | Kensington Green",
    "Dundas West Weed Dispensary | How to Reach Kensington Green",
    "Nicotine Vapes on Dundas West | Kensington Green",
    "24 Hour Weed Dispensary in Dundas West | Kensington Green",
    "Cannabis Arcade Games — Kensington Green | Toronto",
    "Blue Dream | EXOTIC | Kensington Green Toronto",
    "Cannabis Edibles in Toronto | Kensington Green",
    "Native Cigarettes Toronto Discount Tobacco at Kensington Green",
  ];

  for (const title of samples) {
    const resolved = resolveDocumentTitle(title);
    assert.equal(typeof resolved, "object");
    const rendered = typeof resolved === "string" ? `${resolved} | Kensington Green` : resolved.absolute;
    const appearances = rendered.split("Kensington Green").length - 1;
    assert.equal(appearances, 1, rendered);
  }

  const plain = resolveDocumentTitle("Staff Photo");
  assert.equal(plain, "Staff Photo");
  assert.equal("Staff Photo | Kensington Green".split("Kensington Green").length - 1, 1);
});

test("title builders that include the brand use the absolute-title guard", () => {
  const info = fs.readFileSync("app/info/[seoPage]/page.tsx", "utf8");
  const item = fs.readFileSync("app/item/[slug]/page.tsx", "utf8");
  const flower = fs.readFileSync("app/flower/[slug]/page.tsx", "utf8");
  const category = fs.readFileSync("app/items/[category]/page.tsx", "utf8");
  const games = fs.readFileSync("app/games/page.tsx", "utf8");
  const layout = fs.readFileSync("app/layout.tsx", "utf8");

  for (const source of [info, item, flower, category, games]) {
    assert.match(source, /resolveDocumentTitle\(/);
  }
  assert.match(layout, /template: "%s \| Kensington Green"/);
});

test("native cigarette copy shares no long sentence with Green Pentagon", () => {
  const copy = pageCopy("native-cigarettes-dundas-west");
  const peer = GPC_CIG_COPY.join(" ");

  for (const sentence of sentences(copy)) {
    assert.equal(peer.includes(sentence), false, sentence);
  }

  for (const sentence of sentences(copy)) {
    for (let index = 0; index <= sentence.length - 60; index += 1) {
      const slice = sentence.slice(index, index + 60);
      assert.equal(peer.includes(slice), false, slice);
    }
  }

  assert.match(copy, /2257 Dundas St W/);
  assert.match(copy, /Roncesvalles/);
  assert.match(copy, /Dundas West/);
  assert.doesNotMatch(copy, /Green Pentagon|Gas Junction|King Rock|Athena|fleet/i);
  assert.doesNotMatch(copy, /3\.5\s?g|7\s?g/i);
});

test("24-hour Dundas West page is closer to Junction depth without overnight delivery", () => {
  const page = SEO_PAGES.find((entry) => entry.slug === "24-hour-weed-dispensary-dundas-west");
  assert.ok(page);
  assert.ok(page.faqs.length >= 8, `expected at least 8 FAQs, got ${page.faqs.length}`);

  const copy = pageCopy(page.slug);
  assert.ok(copy.length >= 5500, `expected deeper copy, got ${copy.length} chars`);
  assert.match(copy, /open 24 hours daily at 2257 Dundas St W/i);
  assert.match(copy, /Dundas West/);
  assert.match(copy, /Roncesvalles/);
  assert.match(copy, /505 Dundas/);
  assert.match(copy, /10:00 a\.m\. to 10:00 p\.m\./);
  assert.match(copy, /overnight delivery/);
  assert.match(copy, /Do not read this 24-hour walk-in page as overnight delivery/);
  assert.doesNotMatch(copy, /Green Pentagon|Gas Junction|King Rock|Athena|Queen West|fleet/i);
  assert.doesNotMatch(copy, /3\.5\s?g|7\s?g/i);
  assert.doesNotMatch(copy, /10:00 AM|(?:0?2|2):00 AM/);

  const hrefs = (page.links ?? []).map((link) => link.href);
  for (const href of [
    "/visit",
    "/weed-delivery-toronto",
    "/info/native-cigarettes-dundas-west",
    "/info/nicotine-vapes-dundas-west",
    "/exotic-weed",
    "/premium-weed",
    "/aaa-weed",
    "/aa-weed",
    "/budget-weed",
  ]) {
    assert.ok(hrefs.includes(href), href);
  }
});
