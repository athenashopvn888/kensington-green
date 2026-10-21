import assert from "node:assert/strict";
import test from "node:test";
import {
  isHiddenCigaretteGuide,
  isHiddenCigaretteHref,
  isHiddenCigaretteProduct,
  scrubCigaretteCopy,
  visibleGuideTitle,
  visibleMenuCategory,
} from "../app/lib/showCigarettes.ts";

const HOME_SUBTITLE = "From custom disposable vapes and concentrates to accessories and cigarettes.";
const HOME_MENU = "The public menu is split into flower tiers (Exotic, Premium, AAA+, AA, Budget) plus category pages for edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Pages are for browsing posted details, not a live stock feed.";
const FAQ_PRODUCTS = "We carry over 200 strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles (gummies, chocolates, baked goods), vape pens, disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, and accessories.";
const HOURS_BODY = "Flower is split into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed, each on its own page, with the weights and prices that page posts. Native cigarettes and nicotine vapes have separate guides for adults 19+.";
const STRAIN_DISTINCTION = "This page is about a flower name. It is separate from cigarettes, nicotine vapes and THC vape hardware.";

test("switch on returns the original cigarette copy", () => {
  for (const text of [HOME_SUBTITLE, HOME_MENU, FAQ_PRODUCTS, HOURS_BODY, STRAIN_DISTINCTION]) {
    assert.equal(scrubCigaretteCopy(text, true), text);
  }
  assert.equal(isHiddenCigaretteProduct({ name: "CANADIAN LIGHTS", category: "CIGARETTES", slug: "canadian-lights" }, true), false);
  assert.equal(isHiddenCigaretteHref("/items/cigarettes", true), false);
  assert.equal(isHiddenCigaretteGuide({ slug: "putters", lane: "native_cig" }, true), false);
});

test("switch off hides cigarette products and leaves backwoods, grabba, and papers", () => {
  assert.equal(isHiddenCigaretteProduct({ name: "CANADIAN LIGHTS", category: "CIGARETTES", slug: "canadian-lights" }, false), true);
  assert.equal(isHiddenCigaretteProduct({ name: "10 X PREMIUM MIX CIGARETTES", category: "CIGARETTES", slug: "10-x-premium-mix-cigarettes" }, false), true);
  assert.equal(isHiddenCigaretteProduct({ name: "NICOTINE POUCHES , VELO, PABLO, KILLA", category: "CIGARETTES", slug: "nicotine-pouches-velo-pablo-killa" }, false), true);
  assert.equal(isHiddenCigaretteProduct({ name: "BACKWOODS ASSORTED FLAVORS $20-$25", category: "CIGARETTES", slug: "backwoods-assorted-flavors-20-25" }, false), false);
  assert.equal(isHiddenCigaretteProduct({ name: "NEW BACKWOODS FLAVORS", category: "CIGARETTES", slug: "new-backwoods-flavors" }, false), false);
  assert.equal(isHiddenCigaretteProduct({ name: "GRABBA", category: "CIGARETTES", slug: "grabba" }, false), false);
  assert.equal(isHiddenCigaretteProduct({ name: "GRABBA SHAKER *RedRose / Red Herring*", category: "CIGARETTES", slug: "grabba-shaker-redrose-red-herring" }, false), false);
  assert.equal(isHiddenCigaretteProduct({ name: "RAW PAPER KING SIZE", category: "ADD ONS", slug: "raw-paper-king-size" }, false), false);
  assert.equal(isHiddenCigaretteProduct({ name: "ZYN NICOTINE POUCHES", category: "CONCENTRATES", slug: "zyn-nicotine-pouches" }, false), false);
  assert.equal(isHiddenCigaretteGuide({ slug: "backwoods", lane: "native_cig" }, false), false);
  assert.equal(isHiddenCigaretteGuide({ slug: "grabba-delivery-dundas-west", lane: "native_cig" }, false), false);
  assert.equal(isHiddenCigaretteGuide({ slug: "putters", lane: "native_cig" }, false), true);
  assert.equal(isHiddenCigaretteGuide({ slug: "bb-full-delivery-dundas-west", lane: "native_cig" }, false), true);
  assert.equal(isHiddenCigaretteHref("/guides/backwoods", false), false);
  assert.equal(isHiddenCigaretteHref("/items/cigarettes", false), true);
  assert.equal(isHiddenCigaretteHref("/info/native-cigarettes-dundas-west", false), true);
  assert.equal(isHiddenCigaretteHref("/resources/native-smokes-prices", false), true);
  assert.equal(isHiddenCigaretteHref("/vape-shop-dundas-west", false), false);
  assert.equal(visibleGuideTitle("Backwoods Native Cigarettes at Kensington Green | Dundas West", false), "Backwoods at Kensington Green | Dundas West");
  assert.equal(visibleGuideTitle("Backwoods Native Cigarettes at Kensington Green | Dundas West", true), "Backwoods Native Cigarettes at Kensington Green | Dundas West");
  assert.equal(visibleMenuCategory("CIGARETTES", false), null);
  assert.equal(visibleMenuCategory("CIGARETTES", true), "CIGARETTES");
  assert.equal(visibleMenuCategory("ADD ONS", false), "ADD ONS");
});

test("switch off removes cigarette phrases from shared copy", () => {
  for (const text of [HOME_SUBTITLE, HOME_MENU, FAQ_PRODUCTS, HOURS_BODY, STRAIN_DISTINCTION, scrubCigaretteCopy("Kensington Green resource hub for Dundas West, with visit, Weed flower, menu, value and tobacco-terminology guides.", false)]) {
    assert.doesNotMatch(scrubCigaretteCopy(text, false), /\b(cigarettes?|tobacco|native smokes?)\b/i);
  }
  assert.match(scrubCigaretteCopy(HOURS_BODY, false), /Nicotine vapes have separate guides/);
  assert.match(scrubCigaretteCopy(HOME_MENU, false), /accessories\. Pages are for browsing/);
  assert.match(scrubCigaretteCopy(FAQ_PRODUCTS, false), /pre-rolled joints, and accessories/);
});
