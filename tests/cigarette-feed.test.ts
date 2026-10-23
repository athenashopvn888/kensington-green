import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  CIG_WORDING_FALLBACK,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  reconcileSurfaceItems,
  resolveCigWording,
  resolveSurfaceFlag,
} from "../app/lib/cigDecision.ts";
import { SHOW_CIGARETTES } from "../app/lib/showCigarettes.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const cigarillo = { category: "CIGARETTES", name: "LEAF CIGARILLOS", slug: "leaf-cigarillos" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const velo = { category: "CIGARETTES", name: "VELO POUCH", slug: "velo-pouch" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const wording = {
  bannerText: "FEED BANNER",
  promoBrands: "FEED BRANDS",
  tv2BoardTitle: "FEED BOARD",
  wrapsTitle: "🍂 WRAPS & POUCHES",
  tickerLine1: "FEED TICKER",
  priceTwoPack: "$5",
  priceCarton: "$25",
  priceBelmont: "$10",
  priceBB2Pack: "$5",
};

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, wording, ...extra };
}

test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
  const items = [carton, backwoods];
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
  assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
  assert.equal(resolveSurfaceFlag(cig({ on: false, tvOn: true, webFollowsTv: true }), "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false, webFollowsTv: true }), "web"), false);
});

test("TV hides on a feed error or a missing block, and follows tvOn on a successful feed", () => {
  const items = [carton, grabba, backwoods, pouch];
  const missing = decideCigaretteSurface({ cig: null, items, surface: "tv" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, false);
  const errored = decideCigaretteSurface({
    cig: cig({ on: true, webOn: true, tvOn: true }),
    items,
    surface: "tv",
    errored: true,
  });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, false);
  assert.equal(decideCigaretteSurface({ cig: null, items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", errored: true }).show, false);
  const shown = decideCigaretteSurface({ cig: cig({ on: false, tvOn: true }), items, surface: "tv" });
  assert.equal(shown.show, true);
  assert.equal(shown.reason, "on");
  const hidden = decideCigaretteSurface({ cig: cig({ on: true, tvOn: false }), items, surface: "tv" });
  assert.equal(hidden.show, false);
  assert.equal(hidden.reason, "off");
  // A saved last-good block is not an error, so it still follows tvOn.
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: true }), items, surface: "tv", errored: false }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ tvOn: false }), items, surface: "tv", errored: false }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "web" }).reason, "no-items");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", envRaw: "true" }).show, true);
  const kept = reconcileSurfaceItems([vape, carton, grabba, backwoods, pouch, wrap, cigarillo, paper, zyn, velo], [], errored.show);
  assert.deepEqual(kept.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, wrap.slug, cigarillo.slug, paper.slug, zyn.slug, velo.slug]);
});

test("the website flag stays off whenever the static gate is off", () => {
  const items = [carton, backwoods];
  const on = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web" });
  const off = decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" });
  const errored = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web", errored: true });
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(on.show, true);
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(publicWebsiteCigaretteFlag(on, false), false);
  assert.equal(publicWebsiteCigaretteFlag(off, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, false), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, false), false);
  assert.equal(publicWebsiteCigaretteFlag(on, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, true), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, true), false);
  assert.equal(publicWebsiteCigaretteFlag(off, true), false);
  assert.equal(publicWebsiteCigaretteFlag(on, true), true);
  assert.equal(SHOW_CIGARETTES ? on.show : false, false);
});

test("wording uses the feed and falls back to the current copy field by field", () => {
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  ", wrapsTitle: "" }).bannerText, "FEED BANNER");
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  " }).wrapsTitle, CIG_WORDING_FALLBACK.wrapsTitle);
  assert.equal(resolveCigWording(undefined).tickerLine1, CIG_WORDING_FALLBACK.tickerLine1);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false }), items: [backwoods], surface: "web" }).wording.wrapsTitle, "🍂 WRAPS & POUCHES");
  assert.equal(decideCigaretteSurface({ cig: null, items: [], surface: "tv" }).wording.bannerText, CIG_WORDING_FALLBACK.bannerText);
});

test("null flags with real cigarettes stay open and an explicit false still hides", () => {
  const open = decideCigaretteSurface({ cig: { on: null, webOn: null, tvOn: null, wording }, items: [carton], surface: "web" });
  assert.equal(open.show, true);
  assert.equal(open.reason, "on");
  assert.equal(decideCigaretteSurface({ cig: { on: false }, items: [carton], surface: "tv" }).reason, "off");
  assert.equal(decideCigaretteGuide({ cig: { master: null, on: null }, items: [carton] }).show, true);
});

test("guide pages follow the master switch and a feed error stays open", () => {
  const items = [carton];
  assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: false, webOn: true }), items }).show, false);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true, webOn: false }), items }).show, true);
  assert.equal(decideCigaretteGuide({ cig: null, items, errored: true }).show, true);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true }), items, envRaw: "off" }).reason, "env");
});

test("each surface hides real cigarettes itself and always keeps wraps and pouches", () => {
  const menu = [vape, carton, grabba, backwoods, pouch, wrap, cigarillo, paper, zyn, velo];
  const hidden = reconcileSurfaceItems(menu, menu, false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, wrap.slug, cigarillo.slug, paper.slug, zyn.slug, velo.slug]);
  const shown = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});

test("website surfaces keep the static gate and TV still polls the existing feed", () => {
  const layout = fs.readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const status = fs.readFileSync(new URL("../app/api/content-status/route.ts", import.meta.url), "utf8");
  const route = fs.readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const banner = fs.readFileSync(new URL("../app/components/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  const kit = fs.readFileSync(new URL("../app/components/fleet/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  const tv = fs.readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const tv2 = fs.readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const feed = fs.readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  assert.match(layout, /web: SHOW_CIGARETTES \? published\.web : false/);
  assert.match(status, /web: SHOW_CIGARETTES \? cigarettes\.web : false/);
  assert.match(route, /web: SHOW_CIGARETTES \? published\.web : false/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.match(banner, /useCigaretteState\(\)\.web/);
  assert.match(kit, /const showCigarettes = cigarettes\.web/);
  assert.match(feed, /source === "live" \|\| source === "last-good"/);
  assert.match(tv, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.match(tv2, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.match(tv2, /x-tv-data-cig-tv/);
});
