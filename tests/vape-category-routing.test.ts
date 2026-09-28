import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const products = fs.readFileSync("app/lib/products.ts", "utf8");

test("vape category labels remain attached to the existing product-category routes", () => {
  assert.match(
    products,
    /"VAPE PENS": \{[\s\S]*?name: "Nicotine Vape",[\s\S]*?slug: "vapes",[\s\S]*?seoTitle: "Nicotine Vapes in Toronto \| Kensington Green",/,
  );
  assert.match(
    products,
    /"VAPE DISPOSABLE": \{[\s\S]*?name: "THC Vape",[\s\S]*?slug: "vape-disposables",[\s\S]*?seoTitle: "THC Vape Disposables in Toronto \| Kensington Green",/,
  );
});

test("the additive fix preserves both category URLs and their canonicals", () => {
  assert.equal((products.match(/slug: "vapes"/g) ?? []).length, 1);
  assert.equal((products.match(/slug: "vape-disposables"/g) ?? []).length, 1);

  const pageSource = fs.readFileSync("app/items/[category]/page.tsx", "utf8");
  assert.match(
    pageSource,
    /canonical: `https:\/\/www\.kensingtongreencannabis\.com\/items\/\$\{catSlug\}`/,
  );
});

test("all customer-facing navigation uses the corrected vape labels", () => {
  const navbar = fs.readFileSync("app/components/Navbar.tsx", "utf8");
  const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
  const home = fs.readFileSync("app/page.tsx", "utf8");

  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
  assert.match(footer, /href="\/items\/vapes">Nicotine Vape/);
  assert.match(home, /name: "Nicotine Vape",\s+slug: "items\/vapes"/);
  assert.match(home, /name: "THC Vape",\s+slug: "items\/vape-disposables"/);
});
