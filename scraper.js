/*
 * scraper.js - fetch WIXOSS prices from yuyu-tei.jp
 *
 * Usage:
 *   node scraper.js                          all sets, overwrite
 *   node scraper.js wx26cp1 wx25p3           only listed sets, overwrite
 *   node scraper.js --merge wx26cp1 wx25p3   only listed sets, merge into existing JSON
 *   node scraper.js --discover-only          print discovered slugs only
 *
 * Node 18+ (built-in fetch)
 */

const fs = require('fs');
const path = require('path');

const TOP_URL = 'https://yuyu-tei.jp/top/wx';
const SET_URL_PREFIX = 'https://yuyu-tei.jp/sell/wx/s/';
const OUTPUT_JSON_PATH = path.join(__dirname, 'price_info.json');
const OUTPUT_JS_PATH = path.join(__dirname, 'js', 'price_info.js');
const REQUEST_DELAY_MS = 800;
const REQUEST_TIMEOUT_MS = 30000;

// Real Chrome UA + full browser-like headers to avoid being blocked as a bot
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const BROWSER_HEADERS = {
	'User-Agent': UA,
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
	'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
	'Accept-Encoding': 'gzip, deflate, br',
	'Cache-Control': 'no-cache',
	'Pragma': 'no-cache',
	'Sec-Fetch-Dest': 'document',
	'Sec-Fetch-Mode': 'navigate',
	'Sec-Fetch-Site': 'none',
	'Sec-Fetch-User': '?1',
	'Upgrade-Insecure-Requests': '1',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, retries) {
	if (retries === undefined) retries = 2;
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			headers: BROWSER_HEADERS,
			signal: ctrl.signal,
			redirect: 'follow',
		});
		if (!res.ok) {
			if (retries > 0 && (res.status === 403 || res.status === 429 || res.status >= 500)) {
				clearTimeout(t);
				await sleep(2000);
				return fetchText(url, retries - 1);
			}
			throw new Error('HTTP ' + res.status);
		}
		return await res.text();
	} finally {
		clearTimeout(t);
	}
}

async function discoverSetSlugs() {
	const html = await fetchText(TOP_URL);
	const slugs = new Set();
	const re = /for="([a-z0-9-]+)VersPhone"/g;
	let m;
	while ((m = re.exec(html)) !== null) slugs.add(m[1]);
	return [...slugs];
}

function parseSetPage(html) {
	const result = [];
	const blocks = html.split(/class="card-product/);
	for (let i = 1; i < blocks.length; i++) {
		const block = blocks[i];
		const headEnd = block.indexOf('>');
		const head = headEnd >= 0 ? block.slice(0, headEnd) : '';
		const isSoldOut = /sold-out/.test(head);

		const codeMatch = block.match(
			/<span[^>]*class="d-block border border-dark[^"]*"[^>]*>\s*([A-Za-z0-9][A-Za-z0-9\-]*)\s*<\/span>/
		);
		if (!codeMatch) continue;
		const code = codeMatch[1].trim();
		if (!code) continue;

		const priceMatch = block.match(
			/<strong[^>]*class="d-block text-end[^"]*"[^>]*>\s*([\d,]+)\s*円/
		);
		const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, ''), 10) : null;

		const urlMatch = block.match(
			/href="(https:\/\/yuyu-tei\.jp\/sell\/wx\/card\/[^"]+)"/
		);
		const url = urlMatch ? urlMatch[1] : null;

		result.push({ code: code, price: price, url: url, sold_out: isSoldOut });
	}
	return result;
}

async function main() {
	const args = process.argv.slice(2);
	const mergeMode = args.indexOf('--merge') !== -1;
	const discoverOnly = args.indexOf('--discover-only') !== -1;
	const argSlugs = args.filter((a) => a.indexOf('--') !== 0);

	let slugs;
	if (argSlugs.length > 0) {
		console.error('[mode] manual' + (mergeMode ? ' (merge)' : '') + ': ' + argSlugs.length + ' slugs');
		slugs = argSlugs;
	} else {
		console.error('[mode] auto-discover from ' + TOP_URL);
		slugs = await discoverSetSlugs();
		console.error('Found ' + slugs.length + ' sets');
	}

	if (discoverOnly) {
		process.stdout.write(slugs.join('\n') + '\n');
		return;
	}

	let prices = {};
	let prevFailed = [];
	if (mergeMode && fs.existsSync(OUTPUT_JSON_PATH)) {
		try {
			const existing = JSON.parse(fs.readFileSync(OUTPUT_JSON_PATH, 'utf8'));
			if (existing && existing.prices) prices = Object.assign({}, existing.prices);
			if (Array.isArray(existing.failed_sets)) prevFailed = existing.failed_sets;
			console.error('[merge] loaded ' + Object.keys(prices).length + ' existing prices');
		} catch (e) {
			console.warn('[merge] failed to read existing JSON: ' + e.message);
		}
	}

	const failedSlugs = [];

	for (const slug of slugs) {
		const url = SET_URL_PREFIX + slug;
		try {
			const html = await fetchText(url);
			const items = parseSetPage(html);
			let added = 0;
			for (const it of items) {
				if (prices[it.code]) continue;
				prices[it.code] = { price: it.price, url: it.url, sold_out: it.sold_out };
				added++;
			}
			console.error('  OK ' + slug.padEnd(16) + ' -> ' + added + ' cards');
		} catch (e) {
			failedSlugs.push(slug);
			console.error('  XX ' + slug.padEnd(16) + ' -> ' + e.message);
		}
		await sleep(REQUEST_DELAY_MS);
	}

	const stillFailed = mergeMode
		? Array.from(new Set([].concat(
			prevFailed.filter((s) => slugs.indexOf(s) === -1),
			failedSlugs
		)))
		: failedSlugs;

	const out = {
		updated: new Date().toISOString(),
		source: 'https://yuyu-tei.jp/',
		count: Object.keys(prices).length,
		failed_sets: stillFailed,
		prices: prices,
	};

	fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(out, null, 2), 'utf8');

	const jsContent = '/* AUTO-GENERATED by scraper.js -- do not edit manually. */\n'
		+ 'var PRICE_INFO = ' + JSON.stringify(out) + ';\n';
	fs.writeFileSync(OUTPUT_JS_PATH, jsContent, 'utf8');

	console.error('\nWrote ' + out.count + ' prices to ' + OUTPUT_JSON_PATH);
	console.error('Wrote browser bundle to ' + OUTPUT_JS_PATH);
	if (failedSlugs.length) {
		console.warn('Failed sets (' + failedSlugs.length + '): ' + failedSlugs.join(', '));
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
