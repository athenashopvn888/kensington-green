/**
 * Prebuild script: Fetches live stock data from Apps Script
 * and writes flowers.json + items.json before Next.js builds.
 *
 * This runs automatically via "prebuild" in package.json.
 * If the fetch fails, the existing JSON files are kept as fallback.
 *
 * Prefers stock=1 (ONHAND snapshot) plus the combined store payload
 * for walk-in flowers/items. Never invents SKUs or prices.
 */

const fs = require('fs');
const path = require('path');

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';
const STORE_CODE = 'KSC01';
const FETCH_TIMEOUT_MS = 120000;
const FLOWERS_PATH = path.join(__dirname, '..', 'app', 'lib', 'flowers.json');
const ITEMS_PATH = path.join(__dirname, '..', 'app', 'lib', 'items.json');
const SNAPSHOT_PATH = path.join(__dirname, '..', 'app', 'lib', 'stock-snapshot.json');

async function fetchJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

function applySaleFlags(flowers) {
  const SALE_RE = /\bSALE\b/i;
  const ON_SALE_RE = /ON\s*SALE/i;
  function hasSalePrice(f) {
    return !!(
      (f.price3g && f.price3g.sale !== null) ||
      (f.price5g && f.price5g.sale !== null) ||
      (f.price14g && f.price14g.sale !== null) ||
      (f.price28g && f.price28g.sale !== null)
    );
  }
  function cleanName(name) {
    return name
      .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '')
      .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '')
      .replace(/\s*\bSALE!?\s*$/i, '')
      .replace(/\s*\bON\s*SALE\s*$/i, '')
      .trim();
  }
  let saleFixed = 0;
  for (const f of flowers) {
    if (!f.isSale) {
      if (SALE_RE.test(f.name) || ON_SALE_RE.test(f.name) || hasSalePrice(f)) {
        f.isSale = true;
        saleFixed++;
      }
    }
    f.name = cleanName(f.name);
  }
  if (saleFixed > 0) console.log(`[prebuild] Fixed ${saleFixed} sale flags from names`);
}

function fixMangledItemPrices(items) {
  let itemsFixed = 0;
  for (const it of items) {
    if (typeof it.price === 'string' && it.price.includes('[object')) {
      it.price = '';
      itemsFixed++;
    }
  }
  if (itemsFixed > 0) console.log(`[prebuild] Fixed ${itemsFixed} mangled item prices`);
}

function skuInStock(sku, stock) {
  return String(sku || '')
    .split(',')
    .map((part) => part.trim().replace(/\.0$/, ''))
    .some((part) => part && stock[part]);
}

function applyStockWeights(flower, skuStock) {
  if (!skuStock) return flower;
  if (!skuStock['3g'] || skuStock['3g'] <= 0) flower.price3g = null;
  if (!skuStock['5g'] || skuStock['5g'] <= 0) flower.price5g = null;
  if (!skuStock['14g'] || skuStock['14g'] <= 0) flower.price14g = null;
  if (!skuStock['28g'] || skuStock['28g'] <= 0) flower.price28g = null;
  return flower;
}

function hasFlowerPrice(flower) {
  return !!(flower.price3g || flower.price5g || flower.price14g || flower.price28g);
}

function mergeCatalogWithStock(catalog, stockData) {
  const stock = (stockData && stockData.stock) || {};
  const flowers = [];
  for (const flower of catalog.flowers || []) {
    const sku = String(flower.sku || '').replace(/\.0$/, '').trim();
    const skuStock = stock[sku];
    if (stockData && !skuStock) continue;
    const next = applyStockWeights({ ...flower, sku }, skuStock);
    if (!hasFlowerPrice(next)) continue;
    flowers.push(next);
  }

  const items = [];
  for (const item of catalog.items || []) {
    if (stockData && !skuInStock(item.sku, stock)) continue;
    items.push(item);
  }

  return { flowers, items };
}

function writeMenu(flowers, items, snapshot) {
  applySaleFlags(flowers);
  fixMangledItemPrices(items);

  fs.writeFileSync(FLOWERS_PATH, JSON.stringify(flowers, null, 2), 'utf-8');
  console.log(`[prebuild] flowers.json updated: ${flowers.length} products`);

  const tiers = {};
  flowers.forEach((f) => { tiers[f.tier] = (tiers[f.tier] || 0) + 1; });
  Object.entries(tiers).forEach(([t, c]) => console.log(`  ${t}: ${c}`));

  fs.writeFileSync(ITEMS_PATH, JSON.stringify(items, null, 2), 'utf-8');
  console.log(`[prebuild] items.json updated: ${items.length} products`);

  const cats = {};
  items.forEach((i) => { cats[i.category] = (cats[i.category] || 0) + 1; });
  Object.entries(cats).sort().forEach(([c, n]) => console.log(`  ${c}: ${n}`));

  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + '\n', 'utf-8');
  console.log(`[prebuild] stock-snapshot.json written`);
  console.log(`[prebuild] Stock date: ${snapshot.stockDate || 'unknown'}`);
  console.log('[prebuild] Done!');
}

async function main() {
  if (!APPS_SCRIPT_URL) {
    console.log('[prebuild] No APPS_SCRIPT_URL set — using existing static JSON files');
    return;
  }

  console.log('[prebuild] Fetching live stock from Apps Script...');

  try {
    const stockUrl = `${APPS_SCRIPT_URL}?store=${STORE_CODE}&stock=1`;
    const combinedUrl = `${APPS_SCRIPT_URL}?store=${STORE_CODE}`;

    let stockData = null;
    try {
      stockData = await fetchJson(stockUrl);
      console.log(`[prebuild] stock=1: ${stockData.skuCount || Object.keys(stockData.stock || {}).length} SKUs (${stockData.date || 'unknown date'})`);
    } catch (err) {
      console.warn(`[prebuild] stock=1 fetch failed: ${err.message}`);
    }

    let flowers = null;
    let items = null;
    let stockDate = stockData && stockData.date ? stockData.date : null;
    let storeCode = (stockData && stockData.storeCode) || STORE_CODE;

    try {
      const combined = await fetchJson(combinedUrl);
      if (!combined.flowers || !combined.items) {
        throw new Error('Invalid combined response: missing flowers or items');
      }
      flowers = combined.flowers;
      items = combined.items;
      stockDate = combined.stockDate || stockDate;
      storeCode = combined.storeCode || storeCode;
      console.log('[prebuild] Using combined store payload for flowers/items');
    } catch (err) {
      console.warn(`[prebuild] Combined fetch failed: ${err.message}`);
      if (!stockData) throw err;

      const catalog = await fetchJson(`${APPS_SCRIPT_URL}?store=${STORE_CODE}&catalog=1`);
      if (!catalog.flowers || !catalog.items) {
        throw new Error('Invalid catalog response: missing flowers or items');
      }
      const merged = mergeCatalogWithStock(catalog, stockData);
      flowers = merged.flowers;
      items = merged.items;
      console.log('[prebuild] Rebuilt flowers/items from stock=1 + catalog=1');
    }

    writeMenu(flowers, items, {
      storeCode,
      stockDate,
      skuCount: stockData ? (stockData.skuCount || Object.keys(stockData.stock || {}).length) : null,
      flowerCount: flowers.length,
      itemCount: items.length,
    });

  } catch (err) {
    console.warn(`[prebuild] Live fetch failed: ${err.message}`);
    console.warn('[prebuild] Keeping existing JSON files as fallback');
  }
}

main();
