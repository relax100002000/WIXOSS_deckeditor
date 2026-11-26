/* WIXOSS Deck Editor (Simple) — 與 index.html 共用 js/card_info.js,介面比照 DM PLAY'S 精簡版組牌器 */

var COLORS = [
	{ key: '白', cls: 'cw' }, { key: '赤', cls: 'cr' }, { key: '青', cls: 'cb' },
	{ key: '緑', cls: 'cg' }, { key: '黒', cls: 'cz' }, { key: '無', cls: 'cn' }
];
// 牌組區域與上限 (與 index.html 的 ldeck / pdeck / adeck / sdeck 相同)
var ZONES = [
	{ id: 'ldeck', name: 'ルリグデッキ', max: 10, per: 1 },
	{ id: 'pdeck', name: 'ピース', max: 2, per: 1 },
	{ id: 'adeck', name: 'アーツ', max: 8, per: 1 },
	{ id: 'sdeck', name: 'メインデッキ', max: 40, per: 4 }
];
var LB_TARGET = 20;

var groups = {}, byId = {}, groupList = [];
var deck = { ldeck: {}, pdeck: {}, adeck: {}, sdeck: {} };   // zone -> key -> {id, n}
var currentName = '', altResolved = 0;
var filtered = [], shown = 0, PAGE = 120, previewKey = null;
var selColors = {}, selLevels = {};

function $id(id) { return document.getElementById(id); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function html(s) { return esc(s).replace(/&lt;br&gt;/g, '<br>'); }

function zoneOf(c) {
	var t = c[TYPE] || '';
	if (t === 'ルリグ' || t === 'アシストルリグ') return 'ldeck';
	if (/^ピース/.test(t)) return 'pdeck';
	if (/^アーツ/.test(t)) return 'adeck';
	if (/^シグニ|^スペル/.test(t)) return 'sdeck';
	return '';
}
function colorsOf(c) { var r = []; COLORS.forEach(function (x) { if ((c[COLOR] || '').indexOf(x.key) !== -1) r.push(x.key); }); return r; }
function colorCls(k) { for (var i = 0; i < COLORS.length; i++) if (COLORS[i].key === k) return COLORS[i].cls; return 'cn'; }
function lvOf(c) { return c[LEVEL] === '' || c[LEVEL] === undefined ? -1 : Number(c[LEVEL]); }
function groupKey(c) { return [c[NAME], c[TYPE], c[LEVEL], c[COLOR], c[JP_TEXT]].join('|'); }
function isPlain(c) { return !/^(PR|SP|PI|TK)$/.test(c[RARE]); }
function prodOf(c) { var m = /^([A-Za-z]+\d*[A-Za-z]*)-/.exec(c[ID]); return m ? m[1] : (c[ID].split('-')[0] || ''); }

function buildIndex() {
	groups = {}; byId = {}; groupList = [];
	cardData.forEach(function (c) {
		if (!c[ID]) return;
		byId[c[ID]] = c;
		var k = groupKey(c);
		var g = groups[k] || (groups[k] = { key: k, variants: [] });
		g.variants.push(c);
	});
	Object.keys(groups).forEach(function (k) {
		var g = groups[k];
		g.base = g.variants.filter(isPlain)[0] || g.variants[0];
		g.zone = zoneOf(g.base);
		g.colors = colorsOf(g.base);
		g.text = [g.base[NAME], g.base[CLASS], g.base[JP_TEXT], g.base[TW_TEXT], g.base[TEAM]].join('\n').replace(/<br>/g, '\n').toLowerCase();
		g.prods = {};
		g.variants.forEach(function (v) { g.prods[prodOf(v)] = 1; });
		if (g.zone) groupList.push(g);
	});
}
function keyOfId(id) { var c = byId[id]; return c ? groupKey(c) : null; }

/* ---------- 篩選 ---------- */
function fillSelect(id, arr) {
	var el = $id(id), h = el.innerHTML;
	arr.forEach(function (v) { h += '<option value="' + esc(v) + '">' + esc(v) + '</option>'; });
	el.innerHTML = h;
}
function initFilters() {
	var types = {}, classes = {}, prods = {};
	groupList.forEach(function (g) {
		types[g.base[TYPE]] = 1;
		(g.base[CLASS] || '').split(/[\/／]/).forEach(function (x) { x = x.trim(); if (x) classes[x] = (classes[x] || 0) + 1; });
		Object.keys(g.prods).forEach(function (p) { prods[p] = (prods[p] || 0) + 1; });
	});
	fillSelect('fType', Object.keys(types));
	fillSelect('fClass', Object.keys(classes).sort(function (a, b) { return classes[b] - classes[a] || (a < b ? -1 : 1); }));
	fillSelect('fProd', Object.keys(prods).sort().reverse());
	var h = '';
	COLORS.forEach(function (c) { h += '<span class="chip colchip ' + c.cls + '" data-k="' + c.key + '">' + c.key + '</span>'; });
	$id('colChips').innerHTML = h;
	h = '';
	for (var i = 0; i <= 4; i++) h += '<span class="chip lvchip" data-k="' + i + '">Lv' + i + '</span>';
	$id('lvChips').innerHTML = h;
	[].forEach.call(document.querySelectorAll('.colchip'), function (el) {
		el.onclick = function () { var k = el.getAttribute('data-k'); selColors[k] = !selColors[k]; el.classList.toggle('on', !!selColors[k]); applyFilter(); };
	});
	[].forEach.call(document.querySelectorAll('.lvchip'), function (el) {
		el.onclick = function () { var k = el.getAttribute('data-k'); selLevels[k] = !selLevels[k]; el.classList.toggle('on', !!selLevels[k]); applyFilter(); };
	});
	['fWord', 'fType', 'fClass', 'fProd', 'fColMode', 'fLB', 'fSort', 'fInDeck'].forEach(function (id) {
		$id(id).addEventListener(id === 'fWord' ? 'input' : 'change', applyFilter);
	});
}
function resetFilter() {
	selColors = {}; selLevels = {};
	[].forEach.call(document.querySelectorAll('.chip.on'), function (e) { e.classList.remove('on'); });
	$id('fWord').value = '';
	['fType', 'fClass', 'fProd'].forEach(function (id) { $id(id).value = ''; });
	$id('fColMode').value = 'any'; $id('fLB').value = ''; $id('fInDeck').checked = false;
	applyFilter();
}
function inDeckKey(g) { return !!(deck[g.zone] && deck[g.zone][g.key]); }

function applyFilter() {
	var words = $id('fWord').value.toLowerCase().split(/\s+/).filter(Boolean);
	var type = $id('fType').value, cls = $id('fClass').value, prod = $id('fProd').value;
	var mode = $id('fColMode').value, lb = $id('fLB').value, inDeck = $id('fInDeck').checked;
	var cols = Object.keys(selColors).filter(function (k) { return selColors[k]; });
	var lvs = Object.keys(selLevels).filter(function (k) { return selLevels[k]; }).map(Number);
	filtered = groupList.filter(function (g) {
		var c = g.base;
		for (var i = 0; i < words.length; i++) if (g.text.indexOf(words[i]) === -1) return false;
		if (type && c[TYPE] !== type) return false;
		if (cls && (c[CLASS] || '').indexOf(cls) === -1) return false;
		if (prod && !g.prods[prod]) return false;
		if (cols.length && !cols.some(function (k) { return g.colors.indexOf(k) !== -1; })) return false;
		if (mode === 'mono' && g.colors.length !== 1) return false;
		if (mode === 'multi' && g.colors.length < 2) return false;
		if (lvs.length && lvs.indexOf(lvOf(c)) === -1) return false;
		if (lb === '1' && String(c[LB]) !== '1') return false;
		if (lb === '0' && String(c[LB]) === '1') return false;
		if (inDeck && !inDeckKey(g)) return false;
		return true;
	});
	var s = $id('fSort').value;
	filtered.sort(function (a, b) {
		var A = a.base, B = b.base;
		if (s === 'name') return A[NAME] < B[NAME] ? -1 : A[NAME] > B[NAME] ? 1 : 0;
		if (s === 'new') return A[ID] < B[ID] ? 1 : A[ID] > B[ID] ? -1 : 0;
		return (lvOf(A) - lvOf(B)) || (A[ID] < B[ID] ? -1 : 1);
	});
	shown = 0;
	$id('grid').innerHTML = '';
	renderMore();
	$id('resultNum').textContent = filtered.length + ' / ' + groupList.length + ' 種';
}
function renderMore() {
	var end = Math.min(filtered.length, shown + PAGE), h = '';
	for (var i = shown; i < end; i++) {
		var g = filtered[i], d = deck[g.zone][g.key], id = d ? d.id : g.base[ID];
		h += '<div class="card" data-k="' + esc(g.key) + '" title="' + esc(g.base[NAME]) + '">' +
			'<img loading="lazy" referrerpolicy="no-referrer" src="' + esc(byId[id][SRC]) + '" alt="' + esc(g.base[NAME]) + '" onerror="this.onerror=null;this.src=BACK">' +
			(d ? '<span class="badge">' + d.n + '</span>' : '') + '</div>';
	}
	$id('grid').insertAdjacentHTML('beforeend', h);
	shown = end;
	$id('moreBtn').style.display = shown < filtered.length ? '' : 'none';
}
var BACK = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="360" height="504"><rect width="360" height="504" rx="18" fill="#2a3550"/><text x="180" y="260" fill="#aab" font-size="30" text-anchor="middle" font-family="sans-serif">WIXOSS</text></svg>');

/* ---------- 預覽 ---------- */
function curCard(g) { var d = deck[g.zone][g.key]; return d ? byId[d.id] : g.base; }
function showPreview(key) {
	var g = groups[key]; if (!g) return;
	previewKey = key;
	var c = curCard(g);
	$id('bigImg').src = c[SRC];
	$id('bigImg').onerror = function () { this.onerror = null; this.src = BACK; };
	var cols = g.colors.map(function (k) { return '<span class="dot ' + colorCls(k) + '">' + k + '</span>'; }).join('');
	var r = '<div class="pname">' + esc(c[NAME]) + '</div>';
	r += '<div>' + cols + ' ' + esc(c[TYPE]) + ' / ' + esc(c[ID]) + ' / ' + esc(c[RARE]) + '</div>';
	var st = [];
	if (c[LEVEL] !== '') st.push('レベル ' + c[LEVEL]);
	if (c[COST]) st.push('コスト ' + c[COST]);
	if (c[LIMIT]) st.push('リミット ' + c[LIMIT]);
	if (c[POWER]) st.push('パワー ' + c[POWER]);
	if (c[COIN]) st.push('コイン ' + c[COIN]);
	if (st.length) r += '<div>' + esc(st.join(' / ')) + '</div>';
	if (c[CLASS]) r += '<div>クラス: ' + esc(c[CLASS]) + '</div>';
	if (c[TIMING]) r += '<div>使用タイミング: ' + esc(c[TIMING]) + '</div>';
	if (String(c[LB]) === '1') r += '<div class="pwarn" style="color:#b05">ライフバースト有り</div>';
	if (c[JP_TEXT]) r += '<div class="ptext">' + html(c[JP_TEXT]) + '</div>';
	if (c[TW_TEXT]) r += '<div class="ptext tw"><div class="twh">中文</div>' + html(c[TW_TEXT]) + '</div>';
	$id('pinfo').innerHTML = r;
	var vh = '';
	g.variants.slice().sort(function (a, b) { return a[ID] < b[ID] ? 1 : -1; }).forEach(function (v) {
		vh += '<img class="vthumb' + (v[ID] === c[ID] ? ' sel' : '') + '" referrerpolicy="no-referrer" loading="lazy" src="' + esc(v[SRC]) + '" data-id="' + esc(v[ID]) +
			'" title="' + esc(v[ID] + ' ' + v[RARE]) + '" onerror="this.style.display=\'none\'">';
	});
	$id('variants').innerHTML = g.variants.length > 1 ? vh : '';
	[].forEach.call(document.querySelectorAll('.vthumb'), function (el) {
		el.onclick = function () {
			var id = el.getAttribute('data-id');
			if (deck[g.zone][g.key]) { deck[g.zone][g.key].id = id; saveCurrent(); renderDeck(); }
			$id('bigImg').src = byId[id][SRC];
			[].forEach.call(document.querySelectorAll('.vthumb'), function (e) { e.classList.toggle('sel', e === el); });
		};
	});
}

/* ---------- 牌組 ---------- */
function zoneCount(z) { var n = 0; Object.keys(deck[z]).forEach(function (k) { n += deck[z][k].n; }); return n; }
function msg(t) {
	var el = $id('msg'); el.textContent = t; el.style.opacity = 1;
	clearTimeout(msg.t); msg.t = setTimeout(function () { el.style.opacity = 0; }, 2200);
}
function addCard(key, id) {
	var g = groups[key]; if (!g) return;
	var z = ZONES.filter(function (x) { return x.id === g.zone; })[0];
	var d = deck[z.id][key], cur = d ? d.n : 0;
	if (cur >= z.per) { msg('「' + g.base[NAME] + '」在' + z.name + '最多 ' + z.per + ' 張'); return; }
	if (zoneCount(z.id) >= z.max) { msg(z.name + '已滿 ' + z.max + ' 張'); return; }
	if (!d) d = deck[z.id][key] = { id: id || g.base[ID], n: 0 };
	d.n++;
	afterChange(key);
}
function removeCard(key) {
	var g = groups[key]; if (!g || !deck[g.zone][key]) return;
	if (--deck[g.zone][key].n <= 0) delete deck[g.zone][key];
	afterChange(key);
}
function afterChange(key) {
	saveCurrent(); renderDeck();
	var el = document.querySelector('.card[data-k="' + (window.CSS && CSS.escape ? CSS.escape(key) : key) + '"]');
	if (el) {
		var g = groups[key], d = deck[g.zone][key], b = el.querySelector('.badge');
		if (d) { if (!b) { b = document.createElement('span'); b.className = 'badge'; el.appendChild(b); } b.textContent = d.n; }
		else if (b) b.remove();
	}
	if ($id('fInDeck').checked) applyFilter();
}
function sortedKeys(z) {
	return Object.keys(deck[z]).sort(function (a, b) {
		var A = groups[a].base, B = groups[b].base;
		return (lvOf(A) - lvOf(B)) || (A[NAME] < B[NAME] ? -1 : A[NAME] > B[NAME] ? 1 : 0);
	});
}
function rowHtml(z, k) {
	var g = groups[k], c = byId[deck[z][k].id] || g.base;
	var dots = g.colors.map(function (x) { return '<span class="dot s ' + colorCls(x) + '"></span>'; }).join('');
	var lb = String(c[LB]) === '1' ? '<span class="lbmark">LB</span>' : '';
	return '<div class="drow" data-k="' + esc(k) + '" data-z="' + z + '"><span class="dcost">' + (lvOf(c) < 0 ? '-' : lvOf(c)) + '</span>' + dots +
		'<span class="dname">' + esc(c[NAME]) + '</span>' + lb +
		'<button class="mini" data-a="-">－</button><span class="dn">' + deck[z][k].n + '</span><button class="mini" data-a="+">＋</button></div>';
}
function renderDeck() {
	var h = '';
	ZONES.forEach(function (z) {
		var n = zoneCount(z.id);
		h += '<div class="zone"><span>' + z.name + '</span><span class="' + (n === z.max ? 'ok' : (n > z.max ? 'bad' : '')) + '">' + n + ' / ' + z.max + '</span></div>';
		h += sortedKeys(z.id).map(function (k) { return rowHtml(z.id, k); }).join('') || '<div class="empty">(無)</div>';
	});
	$id('deckBox').innerHTML = h;
	renderStats();
}
function renderStats() {
	var lv = {}, col = {}, lb = 0, nlb = 0, max = 1;
	Object.keys(deck.sdeck).forEach(function (k) {
		var g = groups[k], c = g.base, n = deck.sdeck[k].n;
		var l = lvOf(c); l = l < 0 ? 'S' : l;
		lv[l] = (lv[l] || 0) + n; if (lv[l] > max) max = lv[l];
		g.colors.forEach(function (x) { col[x] = (col[x] || 0) + n; });
		if (String(c[LB]) === '1') lb += n; else nlb += n;
	});
	var h = '<div class="curve">';
	[0, 1, 2, 3, 4, 'S'].forEach(function (l) {
		var v = lv[l] || 0;
		h += '<div class="bar"><div class="barv">' + (v || '') + '</div><div class="barf" style="height:' + Math.round(v / max * 60) + 'px"></div><div class="barl">' + (l === 'S' ? 'スペル' : 'Lv' + l) + '</div></div>';
	});
	h += '</div><div class="civsum">';
	COLORS.forEach(function (c) { if (col[c.key]) h += '<span class="dot ' + c.cls + '">' + c.key + ' ' + col[c.key] + '</span> '; });
	h += '</div><div class="civsum">ライフバースト ' + lb + ' / ' + LB_TARGET + '　　LBなし ' + nlb + '</div>';
	if (zoneCount('sdeck') === 40 && lb !== LB_TARGET) h += '<div class="pwarn" style="color:#c33">⚠ LB 枚数が ' + LB_TARGET + ' 枚ではありません</div>';
	$id('stats').innerHTML = h;
}

/* ---------- 儲存 / 讀取 / 匯出入 (文字格式與 index.html 相同: "ldeck,ID,ID\npdeck,...") ---------- */
function deckToText() {
	return ZONES.map(function (z) {
		var ids = [];
		sortedKeys(z.id).forEach(function (k) { for (var i = 0; i < deck[z.id][k].n; i++) ids.push(deck[z.id][k].id); });
		return [z.id].concat(ids).join(',');
	}).join('\n');
}
// 異圖卡號(不在 card_info.js)→ 透過 js/same_name.js 還原成同名卡(圖片使用基本卡)
var snById = null, nameIdx = null;
function nmKey(n) { return String(n).normalize('NFKC').replace(/\s+/g, ' ').trim().replace(/\s*\([^()]*\)$/, '').trim(); }
function initSN() {
	if (snById) return;
	snById = {}; nameIdx = {};
	if (typeof SAME_NAME_RAW !== 'undefined') {
		SAME_NAME_RAW.split('\n').forEach(function (line) {
			var p = line.split('\t'); if (p.length < 2) return;
			p[1].split(',').forEach(function (id) { snById[id] = p[0]; });
		});
	}
	if (typeof SAME_NAME_EXTRA !== 'undefined') SAME_NAME_EXTRA.forEach(function (x) { snById[x[1]] = x[0]; });
	groupList.forEach(function (g) { var k = nmKey(g.base[NAME]); (nameIdx[k] = nameIdx[k] || []).push(g); });
}
function resolveCard(id, zoneHint) {
	if (byId[id]) return byId[id];
	initSN();
	var k = snById[id]; if (!k) return null;
	var gs = nameIdx[k]; if (!gs || !gs.length) return null;
	var pick = gs.filter(function (g) { return g.zone === zoneHint; })[0] || gs[0];
	return pick.base;
}
function textToDeck(t) {
	var d = { ldeck: {}, pdeck: {}, adeck: {}, sdeck: {} }, skipped = 0;
	altResolved = 0;
	String(t || '').split(/\r?\n/).forEach(function (line) {
		var parts = line.trim().split(','), z = parts.shift();
		if (!d[z]) return;
		parts.forEach(function (id) {
			id = id.trim(); if (!id) return;
			var c = byId[id] || resolveCard(id, z);
			if (!c) { skipped++; return; }
			if (!byId[id]) altResolved++;
			var zz = zoneOf(c) || z, k = groupKey(c);
			id = c[ID];
			if (!d[zz][k]) d[zz][k] = { id: id, n: 0 };
			d[zz][k].n++;
		});
	});
	deck = d;
	return skipped;
}
function saveCurrent() { try { localStorage.setItem('wsimple_current', deckToText()); } catch (e) { /* ignore */ } }
function allDecks() { try { return JSON.parse(localStorage.getItem('wsimple_decks') || '{}'); } catch (e) { return {}; } }
// 讀取 index.html(主版)存在 localStorage 的牌組清單: DeckNameList + 以牌組名為 key 的文字
function mainDecks() {
	var names = [];
	try {
		var raw = localStorage.getItem('DeckNameList');
		if (raw) { try { names = JSON.parse(raw); } catch (e) { names = raw.split(','); } }
	} catch (e) { /* ignore */ }
	var r = {};
	(names || []).forEach(function (n) { var t = localStorage.getItem(n); if (t && /^ldeck/.test(t)) r[n] = t; });
	return r;
}
function refreshDeckSelect() {
	var ds = allDecks(), h = '<option value="">-- 已儲存的牌組 --</option>';
	Object.keys(ds).sort().forEach(function (n) { h += '<option value="s:' + esc(n) + '"' + (n === currentName ? ' selected' : '') + '>' + esc(n) + '</option>'; });
	var md = mainDecks(), mk = Object.keys(md);
	if (mk.length) {
		h += '<optgroup label="主版(index.html)的牌組">';
		mk.forEach(function (n) { h += '<option value="m:' + esc(n) + '">' + esc(n) + '</option>'; });
		h += '</optgroup>';
	}
	$id('deckSel').innerHTML = h;
}
function saveDeck() {
	var name = $id('deckName').value.trim();
	if (!name) { msg('請輸入牌組名稱'); return; }
	var ds = allDecks(); ds[name] = deckToText();
	localStorage.setItem('wsimple_decks', JSON.stringify(ds));
	currentName = name; refreshDeckSelect(); msg('已儲存「' + name + '」');
}
function loadDeck() {
	var v = $id('deckSel').value, from = v.slice(0, 2), name = v.slice(2);
	var src = from === 'm:' ? mainDecks() : allDecks();
	if (!name || !src[name]) return;
	var sk = textToDeck(src[name]);
	currentName = from === 'm:' ? '' : name; $id('deckName').value = name;
	saveCurrent(); renderDeck(); applyFilter();
	msg('已讀取「' + name + '」' + (altResolved ? '(' + altResolved + ' 張異圖還原為同名卡)' : '') + (sk ? '(' + sk + ' 張找不到資料)' : ''));
}
function deleteDeck() {
	var v = $id('deckSel').value, name = v.slice(2);
	if (v.slice(0, 2) !== 's:') { msg('主版的牌組請在 index.html 內刪除'); return; }
	if (!name || !confirm('刪除牌組「' + name + '」?')) return;
	var ds = allDecks(); delete ds[name];
	localStorage.setItem('wsimple_decks', JSON.stringify(ds));
	if (currentName === name) currentName = '';
	refreshDeckSelect();
}
function clearDeck() {
	if (!confirm('清空目前牌組?')) return;
	deck = { ldeck: {}, pdeck: {}, adeck: {}, sdeck: {} }; currentName = ''; $id('deckName').value = '';
	saveCurrent(); renderDeck(); applyFilter(); refreshDeckSelect();
}
function exportCode() {
	var t = deckToText();
	$id('codeBox').value = t; $id('codeBox').select();
	try { navigator.clipboard.writeText(t); msg('已複製(與主版 Deck 文字格式相同)'); } catch (e) { msg('請自行複製'); }
}
function importCode() {
	var t = $id('codeBox').value.trim();
	if (!t) { msg('請在欄位貼上牌組文字'); return; }
	var sk = textToDeck(t);
	saveCurrent(); renderDeck(); applyFilter();
	msg('已匯入' + (altResolved ? '(' + altResolved + ' 張異圖還原為同名卡)' : '') + (sk ? '(' + sk + ' 張找不到資料)' : ''));
}

/* ---------- 初始化 ---------- */
function init() {
	buildIndex(); initFilters();
	try { textToDeck(localStorage.getItem('wsimple_current') || ''); } catch (e) { /* ignore */ }
	$id('grid').addEventListener('click', function (e) {
		var el = e.target.closest('.card'); if (!el) return;
		var k = el.getAttribute('data-k'); showPreview(k); addCard(k);
	});
	$id('grid').addEventListener('contextmenu', function (e) {
		var el = e.target.closest('.card'); if (!el) return;
		e.preventDefault(); removeCard(el.getAttribute('data-k'));
	});
	$id('grid').addEventListener('mouseover', function (e) {
		var el = e.target.closest('.card'); if (!el || window.__lock) return;
		var k = el.getAttribute('data-k'); if (k !== previewKey) showPreview(k);
	});
	var box = $id('deckBox');
	box.addEventListener('click', function (e) {
		var row = e.target.closest('.drow'); if (!row) return;
		var k = row.getAttribute('data-k'), a = e.target.getAttribute('data-a');
		if (a === '+') addCard(k); else if (a === '-') removeCard(k); else showPreview(k);
	});
	box.addEventListener('mouseover', function (e) {
		var row = e.target.closest('.drow'); if (!row || window.__lock) return;
		var k = row.getAttribute('data-k'); if (k !== previewKey) showPreview(k);
	});
	$id('bigImg').addEventListener('click', function () { if (previewKey) addCard(previewKey); });
	$id('bigImg').addEventListener('contextmenu', function (e) { e.preventDefault(); if (previewKey) removeCard(previewKey); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Alt') { window.__lock = true; e.preventDefault(); } });
	document.addEventListener('keyup', function (e) { if (e.key === 'Alt') window.__lock = false; });
	$id('moreBtn').onclick = renderMore;
	$id('scroller').addEventListener('scroll', function () {
		if (this.scrollTop + this.clientHeight > this.scrollHeight - 300 && shown < filtered.length) renderMore();
	});
	refreshDeckSelect(); renderDeck(); applyFilter();
	$id('ver').textContent = cardData.length + ' 筆卡片資料';
}
window.addEventListener('load', init);
