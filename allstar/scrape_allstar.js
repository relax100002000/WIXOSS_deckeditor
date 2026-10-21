/*
 * scrape_allstar.js - build js/card_info_allstar.js from the official card list
 * (https://www.takaratomy.co.jp/products/wixoss/card/).
 *
 * Collects every card that is NOT already in js/card_info.js (the Diva-era
 * base): WX-01..22, WXK, WXEX, WXD/WDK/WDA decks, SP/SPK and ALLSTAR-era PR.
 * Coin cards (カード種類=コイン) are skipped.
 *
 * Usage (Node 18+, run on a PC with normal internet access):
 *   node allstar/scrape_allstar.js            full run (resumes from cache)
 *   node allstar/scrape_allstar.js --fresh    ignore cache, start over
 *   node allstar/scrape_allstar.js WX-01 WXD-01   only these products (merged into cache)
 *
 * Progress is cached in allstar/cache.json, so an interrupted run can be
 * restarted and continues where it stopped.
 */
const fs = require('fs');
const path = require('path');
const { parseCardDetail } = require('./parse_card.js');

const BASE = 'https://www.takaratomy.co.jp/products/wixoss/card/';
const ROOT = path.join(__dirname, '..');
const CARD_INFO_PATH = path.join(ROOT, 'js', 'card_info.js');
const OUT_PATH = path.join(ROOT, 'js', 'card_info_allstar.js');
const CACHE_PATH = path.join(__dirname, 'cache.json');
const CONCURRENCY = 4;
const DELAY_MS = 250;
const TIMEOUT_MS = 30000;

// Products whose cards are Diva era (already in card_info.js) — skip whole product.
const DIVA_PRODUCT_RE = /^(WXDi|WX2[4-9]|WDi|SPDi|PR-Di)/i;
// Card IDs that belong to the Diva era (used to filter mixed lists like PR / SP-38).
const DIVA_ID_RE = /(^|-)Di|^WX2[4-9]-|^SPDi|^PR-Di/;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, retries = 3) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			headers: { 'User-Agent': UA, 'Accept-Language': 'ja,en;q=0.8'},
			signal: ctrl.signal, redirect: 'follow'
		});
		if (!res.ok) throw new Error('HTTP ' + res.status);
		return await res.text();
	} catch (e) {
		if (retries > 0) { await sleep(2000); return fetchText(url, retries - 1); }
		throw new Error(url + ' : ' + e.message);
	} finally { clearTimeout(t); }
}

function loadDivaIds() {
	const code = fs.readFileSync(CARD_INFO_PATH, 'utf8');
	const sandbox = {};
	new Function('sandbox', code + '\nsandbox.cardData = cardData;')(sandbox);
	return new Set(sandbox.cardData.map((c) => c[0]));
}

function loadCache(fresh) {
	if (!fresh && fs.existsSync(CACHE_PATH)) return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
	return { products: {}, cards: {} };
}
function saveCache(cache) { fs.writeFileSync(CACHE_PATH, JSON.stringify(cache)); }

async function discoverProducts() {
	const html = await fetchText(BASE + 'product_list/');
	const list = [], seen = new Set();
	const re = /<a[^>]+href="[^"]*card_list\.php\?product_no=([^"&]+)"[^>]*>([\s\S]*?)<\/a>/g;
	let m;
	while ((m = re.exec(html))) {
		const no = decodeURIComponent(m[1]);
		const name = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
		if (DIVA_PRODUCT_RE.test(no)) continue;
		if (!seen.has(no)) { seen.add(no); list.push({ no, name }); }
		else if (name) { const p = list.find((x) => x.no === no); if (!p.name) p.name = name; }
	}
	return list;
}

async function listProductCards(no) {
	const ids = [];
	const seen = new Set();
	for (let page = 1; page < 200; page++) {
		const html = await fetchText(BASE + 'card_list.php?card_page=' + page + '&product_no=' + encodeURIComponent(no));
		const re = /<p class="cardNo">\s*([^<\s]+)\s*<\/p>/g;
		let m, added = 0;
		while ((m = re.exec(html))) {
			if (!seen.has(m[1])) { seen.add(m[1]); ids.push(m[1]); added++; }
		}
		if (added === 0) break;
		await sleep(DELAY_MS);
	}
	return ids;
}

async function runPool(items, worker) {
	let idx = 0, done = 0;
	const total = items.length;
	async function next() {
		while (idx < items.length) {
			const it = items[idx++];
			try { await worker(it); } catch (e) { console.error('  [error] ' + e.message); }
			done++;
			if (done % 50 === 0 || done === total) console.log('  ' + done + ' / ' + total);
			await sleep(DELAY_MS);
		}
	}
	await Promise.all(Array.from({ length: CONCURRENCY }, next));
}

function jsStr(s) { return JSON.stringify(s == null ? '' : String(s)); }

// Era / category ordering: 無印 -> キー (Diva cards come after these in index_allstar.html).
// Within an era: boosters, constructed decks, SP, PR; each in release order
// (the official product list is newest-first, so its index is reversed).
const KEY_PRODUCT_RE = /^(WXK|WXEX|WDK|WDA|SPK)-/;
function productEra(no) { return KEY_PRODUCT_RE.test(no) || no === 'PR-K' ? 'キー' : '無印'; }
function productCategory(no) {
	if (/^(WX|WXK|WXEX)-/.test(no)) return 0;   // booster
	if (/^(WXD|WDK|WDA)-/.test(no)) return 1;   // constructed deck
	if (/^(SP|SPK)-/.test(no)) return 2;        // special
	return 3;                                   // PR
}
function loadReleaseDates() {
	try {
		const sb = {};
		new Function('sb', fs.readFileSync(path.join(ROOT, 'js', 'release_dates.js'), 'utf8') + '\nsb.d = releaseDates;')(sb);
		return sb.d || {};
	} catch (e) { console.error('[warn] js/release_dates.js not loaded: ' + e.message); return {}; }
}
function orderedProducts(cache, products) {
	const list = [];
	products.forEach((p, idx) => {
		const cp = cache.products[p.no];
		if (!cp) return;
		const ids = (cp.ids || []).filter((id) => cache.cards[id]);
		if (p.no === 'PR') {
			// promo list mixes both eras: PR-K*** = キー, the rest = 無印
			list.push({ no: 'PR', name: 'PRカード（無印）', ids: ids.filter((id) => !/^PR-K/.test(id)), idx });
			list.push({ no: 'PR-K', name: 'PRカード（キー）', ids: ids.filter((id) => /^PR-K/.test(id)), idx });
		} else {
			list.push({ no: p.no, name: p.name, ids, idx });
		}
	});
	list.forEach((p) => { p.era = productEra(p.no); });
	const eraRank = { '無印': 0, 'キー': 1 };
	// boosters and decks together by release date (js/release_dates.js), booster first on the same day;
	// then SP, then PR. Products without a date fall back to the official list order.
	const dates = loadReleaseDates();
	const group = (no) => (productCategory(no) <= 1 ? 0 : productCategory(no));
	list.sort((x, y) => (eraRank[x.era] - eraRank[y.era]) || (group(x.no) - group(y.no))
		|| String(dates[x.no] || '9999').localeCompare(String(dates[y.no] || '9999'))
		|| (productCategory(x.no) - productCategory(y.no)) || (y.idx - x.idx));
	list.forEach((p) => { if (dates[p.no]) p.date = dates[p.no]; });
	return list.filter((p) => p.ids.length);
}

// SP / PR names on the official site carry the source in trailing brackets,
// e.g. "セレクター(来場者特典 タマver.)". That note is not part of the card name
// (checked against the card images / official reading), so it is removed.
// Cards whose bracket IS printed on the card as part of the name go in KEEP_BRACKET_NAME.
const KEEP_BRACKET_NAME = new Set([]);
function cleanPromoName(id, name) {
	if (!/^(PR-|SP)/.test(id) || KEEP_BRACKET_NAME.has(id)) return name;
	return stripTrailingBracket(name);
}
// remove one trailing "( ... )" group, nested brackets included: "A(B(C)D)" -> "A"
function stripTrailingBracket(name) {
	const str = String(name).replace(/\s+$/, '');
	if (!/[)）]$/.test(str)) return str;
	let depth = 0;
	for (let i = str.length - 1; i >= 0; i--) {
		const c = str[i];
		if (c === ')' || c === '）') depth++;
		else if (c === '(' || c === '（') { depth--; if (depth === 0) return i > 0 ? str.slice(0, i).replace(/\s+$/, '') : str; }
	}
	return str;
}

function writeOutput(cache, products, outPath) {
	const prods = orderedProducts(cache, products);
	const order = [];
	const seen = new Set();
	for (const p of prods) {
		for (const id of p.ids) {
			if (!seen.has(id)) { seen.add(id); order.push(id); }
		}
	}
	const NAMES = ['ID', 'SRC', 'NAME', 'RARE', 'TYPE', 'CLASS', 'COLOR', 'LEVEL', 'COST', 'LIMIT', 'POWER', 'COIN', 'TIMING', 'LB', 'TEAM', 'STORY', 'JP_TEXT', 'TW_TEXT', 'BAN'];
	let out = '/* Generated by allstar/scrape_allstar.js on ' + new Date().toISOString() + ' — do not edit by hand. */\n';
	out += '/* ALLSTAR-era cards (not in card_info.js), ordered 無印 -> キー. Same row layout as cardData. */\n\n';
	out += 'var allstarProducts = [\n' + prods.map((p) => '\t' + JSON.stringify({ no: p.no, name: p.name, era: p.era, date: p.date || '', ids: p.ids })).join(',\n') + '\n];\n\n';
	out += 'var cardDataAllstar = [\n';
	out += order.map((id) => {
		const r = cache.cards[id].row.slice();
		r[4] = String(r[4]).replace(/\s*\n\s*/g, ' ');
		r[5] = String(r[5]).replace(/\s*\n\s*：/g, '：').replace(/\s*\n\s*/g, '/');   // card type with two classes: "精像：悪魔\n精武：遊具" -> "精像：悪魔/精武：遊具"
		r[2] = cleanPromoName(id, r[2]);
		return '\t[\n' + r.map((v, i) => '\t\t' + jsStr(v) + (i < r.length - 1 ? ', ' : ' ') + '//' + NAMES[i]).join('\n') + '\n\t]';
	}).join(',\n');
	out += '\n];\n';
	fs.writeFileSync(outPath || OUT_PATH, out);
	return order.length;
}

async function main() {
	const args = process.argv.slice(2);
	const fresh = args.includes('--fresh');
	const only = args.filter((a) => !a.startsWith('--'));
	const divaIds = loadDivaIds();
	console.log('Diva card base: ' + divaIds.size + ' cards (will be skipped)');
	const cache = loadCache(fresh);

	console.log('Discovering products...');
	let products = await discoverProducts();
	console.log('  ' + products.length + ' non-Diva products');
	const targets = only.length ? products.filter((p) => only.includes(p.no)) : products;

	console.log('Listing cards per product...');
	for (const p of targets) {
		if (cache.products[p.no] && !only.length) continue;
		const ids = (await listProductCards(p.no)).filter((id) => !divaIds.has(id) && !DIVA_ID_RE.test(id));
		cache.products[p.no] = { name: p.name, ids };
		console.log('  ' + p.no + ': ' + ids.length + ' cards');
		saveCache(cache);
	}

	const need = [];
	const wanted = new Set();
	for (const p of targets) for (const id of cache.products[p.no].ids) wanted.add(id);
	for (const id of wanted) if (!cache.cards[id] && !(cache.skipped || {})[id]) need.push(id);
	console.log('Fetching card details: ' + need.length + ' to go (' + (wanted.size - need.length) + ' cached)');
	cache.skipped = cache.skipped || {};
	let sinceSave = 0;
	await runPool(need, async (id) => {
		const html = await fetchText(BASE + 'card_list.php?card=card_detail&card_no=' + encodeURIComponent(id));
		const r = parseCardDetail(html);
		if (!r || !r.row[0]) throw new Error('parse failed: ' + id);
		if (r.row[4] === 'コイン') { cache.skipped[id] = 'coin'; return; }
		cache.cards[id] = { row: r.row, format: r.format };
		if (++sinceSave >= 50) { saveCache(cache); sinceSave = 0; }
	});
	saveCache(cache);

	const n = writeOutput(cache, products);
	console.log('Wrote ' + n + ' cards to ' + path.relative(ROOT, OUT_PATH));
	const missing = [...wanted].filter((id) => !cache.cards[id] && !cache.skipped[id]);
	if (missing.length) console.log('[warn] ' + missing.length + ' cards failed; run again to retry: ' + missing.slice(0, 20).join(', '));
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { writeOutput };
