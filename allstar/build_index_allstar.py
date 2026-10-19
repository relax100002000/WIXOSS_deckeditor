# Generates index_allstar.html from index.html (original untouched).
# Re-run after index.html changes:  python3 allstar/build_index_allstar.py
import io, os, sys
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
s = io.open(os.path.join(root, 'index.html'), encoding='utf-8').read()
def rep(old, new):
    global s
    if s.count(old) != 1:
        sys.exit('pattern count %d: %s' % (s.count(old), old[:70]))
    s = s.replace(old, new)
rep("""				document.write('<script src="js/function.js' + v + '"><\\/script>');
				document.write('<script src="js/card_info.js' + v + '"><\\/script>');
				document.write('<script src="js/price_info.js' + v + '"><\\/script>');""",
"""				document.write('<script src="js/function_allstar.js' + v + '"><\\/script>');
				document.write('<script src="js/card_info.js' + v + '"><\\/script>');
				document.write('<script src="js/card_info_allstar.js' + v + '"><\\/script>');
				document.write('<script src="js/allstar_restriction.js' + v + '"><\\/script>');
				document.write('<script src="js/release_dates.js' + v + '"><\\/script>');""")
rep("""		<script src="https://ajax.googleapis.com""", """		<script>
			// ALLSTAR = every card: ALLSTAR-era cards (card_info_allstar.js) + Diva-era base (card_info.js)
			// Diva part by release date (js/release_dates.js): boosters / decks by 発売日 (booster first on the same day),
			// then SP (SPDi01 -> SP38 -> SPDi43 -> SPDi47), then PR-Di. Array sort is stable.
			(function () {
				var RD = (typeof releaseDates !== 'undefined') ? releaseDates : {};
				var codes = Object.keys(RD).sort(function (a, b) { return b.length - a.length; });
				var SP_ORDER = ['SPDi01-', 'SP38-', 'SPDi43-', 'SPDi47-'];
				window.asProductOfId = function (id) {
					for (var k = 0; k < codes.length; k++) if (id.indexOf(codes[k] + '-') === 0) return codes[k];
					return '';
				};
				window.asIsDeckCode = function (code) { return /-C?D\\d/.test(code); };
				function key(id) {
					if (id.indexOf('PR-') === 0) return '3';
					for (var k = 0; k < SP_ORDER.length; k++) if (id.indexOf(SP_ORDER[k]) === 0) return '2' + k;
					if (/^SP/.test(id)) return '29';
					var code = asProductOfId(id);
					return '0' + (RD[code] || '9999') + (asIsDeckCode(code) ? '1' : '0') + code;
				}
				cardData = cardData.map(function (c, i) { return { c: c, k: key(c[0]), i: i }; })
					.sort(function (a, b) { return a.k < b.k ? -1 : a.k > b.k ? 1 : a.i - b.i; })
					.map(function (x) { return x.c; });
			})();
			if (typeof cardDataAllstar !== 'undefined') { cardData = cardDataAllstar.concat(cardData); }  // 無印 -> キー -> Diva
			else { console.warn('js/card_info_allstar.js not found - run allstar/scrape_allstar.bat first.'); }
			// Drop SP / PR cards that duplicate a card sold in a regular booster / deck:
			// same card name (after removing the promo note "(...)" at the end of the SP/PR name)
			// AND same effect text (reminder text in parentheses, line breaks, width and icon notation ignored).
			(function () {
				function isPromo(id) { return /^(PR-|SP)/.test(id); }
				function nfkc(s) { s = String(s); return s.normalize ? s.normalize('NFKC') : s; }
				function nameKey(c) {
					var n = String(c[2]);
					if (isPromo(c[0]) && /[)）]\s*$/.test(n) && !/^SPDi47-/.test(c[0])) {   // SPDi47: bracket is part of the printed name
						var d = 0, t = n.replace(/\s+$/, '');
						for (var k = t.length - 1; k > 0; k--) {
							var ch = t.charAt(k);
							if (ch === ')' || ch === '）') d++;
							else if ((ch === '(' || ch === '（') && --d === 0) { n = t.slice(0, k); break; }
						}
					}
					return nfkc(n).replace(/\s+/g, '');
				}
				function textKey(c) {
					var t = nfkc(c[16]).replace(/<br>/g, '');
					var prev;
					do { prev = t; t = t.replace(/\([^()]*\)/g, ''); } while (t !== prev);   // reminder text
					return t.replace(/\[([^\]]*)\]/g, '《$1》').replace(/\s+/g, '');
				}
				function key(c) { return nameKey(c) + '|' + c[4] + '|' + textKey(c); }
				// ルリグ on SP / PR cards (any level): same LRIG type, color, level, limit, coin, team, grow cost and effect
				// = same card even when the name differs (e.g. PR-103 ステコ = WD01-005 新月の巫女 タマヨリヒメ).
				// The grow cost is ignored for Lv0 (always x0; the official site has typos there).
				function isLv0(c) { return c[4] === 'ルリグ' && String(c[7]) === '0'; }
				function isLrig(c) { return c[4] === 'ルリグ'; }
				function lv0Key(c) {
					var cost = isLv0(c) ? '' : nfkc(c[8]).replace(/\\s+/g, '');
					return 'LRIG|' + [c[5], c[6], c[7], c[9], nfkc(c[11]), nfkc(c[14]), cost, textKey(c)].join('|');
				}
				function promoKey(c) { return isLrig(c) ? lv0Key(c) : key(c); }
				var regular = {};
				cardData.forEach(function (c) { if (!isPromo(c[0])) { regular[key(c)] = 1; if (isLrig(c)) regular[lv0Key(c)] = 1; } });
				var before = cardData.length;
				cardData = cardData.filter(function (c) { return !isPromo(c[0]) || !regular[promoKey(c)]; });
				window.asRemovedPromoCount = before - cardData.length;
				// Among all SP / PR cards (SP, SPK, SPDi, PR, PR-K, PR-Di) the same card printed several times
				// is kept once (same name + same effect, e.g. 10 versions of セレクター):
				// an SP copy always wins over a PR copy (whatever the era); otherwise the first one in database order.
				var spKeys = {};
				cardData.forEach(function (c) { if (/^SP/.test(c[0])) spKeys[promoKey(c)] = 1; });
				var seenPromo = {};
				before = cardData.length;
				cardData = cardData.filter(function (c) {
					if (!isPromo(c[0])) return true;
					var k = promoKey(c);
					if (/^PR-/.test(c[0]) && spKeys[k]) return false;
					if (seenPromo[k]) return false;
					seenPromo[k] = 1;
					return true;
				});
				window.asRemovedSpDupCount = before - cardData.length;
			})();
		</script>
		<script src="https://ajax.googleapis.com""")
rep("<title>WIXOSS Deck Builder</title>", "<title>WIXOSS Deck Builder - ALLSTAR</title>")
rep("""			$( document ).ready(function() {
				onLoading();""", """			$( document ).ready(function() {
				asSetupSelectors();
				onLoading();""")
rep("""				checkAndRedirectToMobile("https://relax100002000.github.io/WIXOSS_deckeditor/index_mobile.html");\n""", "")
rep("""			function customizeWindowEvent(x) {""", """			// ALLSTAR: product list (ALLSTAR-era products first) + LRIG types that only exist in old sets
			function asSetupSelectors() {
				var $p = $('#selectProduct');
				var prods = (typeof allstarProducts !== 'undefined') ? allstarProducts : [];
				// SP products are listed as one "SPカード" entry per era: [SP] (無印 SP-xx), [SPK] (キー SPK-xx), [SPDi] (Diva SPDi / SP38)
				(function () {
					var merged = [], sp = { no: 'SP', name: 'SPカード', era: '無印', ids: [] }, spk = { no: 'SPK', name: 'SPカード', era: 'キー', ids: [] };
					var spPos = -1, spkPos = -1;
					prods.forEach(function (p) {
						if (/^SP-/.test(p.no)) { sp.ids = sp.ids.concat(p.ids); if (spPos < 0) { spPos = merged.length; merged.push(sp); } }
						else if (/^SPK-/.test(p.no)) { spk.ids = spk.ids.concat(p.ids); if (spkPos < 0) { spkPos = merged.length; merged.push(spk); } }
						else merged.push(p);
					});
					var divaSp = { no: 'SPDi', name: 'SPカード', era: 'DIVA', ids: [] };
					var asIds = {};
					prods.forEach(function (p) { p.ids.forEach(function (id) { asIds[id] = 1; }); });
					cardData.forEach(function (c) { if (/^SP/.test(c[0]) && !asIds[c[0]]) divaSp.ids.push(c[0]); });
					merged.push(divaSp);
					prods = merged;
					allstarProducts = merged;            // search() looks products up here
					asProductIdSets = null;
				})();
				var groups = { '無印': '', 'キー': '' };
				var present = {};
				for (var q = 0; q < cardData.length; q++) present[cardData[q][0]] = 1;
				for (var i = 0; i < prods.length; i++) {
					if (!prods[i].ids.some(function (id) { return present[id]; })) continue;  // every card was a reprint
					// "[系列編號] 商品名": drop "ウィクロスTCG", the number already in the name and "〔...〕"
					var nm = String(prods[i].name || '')
						.replace(/ウィクロスTCG\s*/g, '')
						.replace(/\s*〔[^〕]*〕\s*/g, ' ')
						.replace(/&amp;/g, '&')
						.trim()
						.replace(/\s+/g, ' ').trim()
						.replace(/^[（(]([^()（）]*)[)）]$/, '$1');
					if (nm.indexOf(prods[i].no + ' ') === 0) nm = nm.slice(prods[i].no.length + 1);
					nm = nm.replace(/^[（(]([^()（）]*)[)）]$/, '$1');
					nm = '[' + prods[i].no + '] ' + nm;
					if (prods[i].era === 'DIVA') continue;
					groups[prods[i].era || '無印'] += '<option value="AS:' + prods[i].no + '">' + $('<div>').text(nm).html() + '</option>';
				}
				if (groups['無印'] || groups['キー']) {
					var $diva = $p.find('option').not('[value="0"]');
					$p.find('option[value="0"]').after('<optgroup label="無印">' + groups['無印'] + '</optgroup><optgroup label="キー">' + groups['キー'] + '</optgroup><optgroup label="DIVA" id="asDivaGroup"></optgroup>');
					// DIVA group in release order too (index.html lists newest first): products oldest -> newest, then SP, PR
					var RD = (typeof releaseDates !== 'undefined') ? releaseDates : {};
					var main = $diva.filter(function () { return !/^(PR-|SP)/.test(this.value); }).get().reverse()
						.map(function (o, i) { return { o: o, i: i, k: (RD[o.value] || '9999') + (asIsDeckCode(o.value) ? '1' : '0') }; })
						.sort(function (a, b) { return a.k < b.k ? -1 : a.k > b.k ? 1 : a.i - b.i; })
						.map(function (x) { return x.o; });
					var tail = $diva.filter('[value^="SP"]').get().concat($diva.filter('[value^="PR-"]').get());
					$(main.concat(tail)).appendTo('#asDivaGroup');
					$('#asDivaGroup option[value="SPDi"]').val('AS:SPDi');   // includes SP38 (Diva-era SP)
					$('#asDivaGroup option').each(function () {   // Diva PR / SP options get their code too
						if (this.text.charAt(0) !== '[') this.text = '[' + this.value.replace('AS:', '') + '] ' + this.text;
					});
				}
				var $l = $('#selectLRIG');
				var have = {};
				$l.find('option').each(function () { have[this.value] = 1; });
				var extra = {};
				for (var j = 0; j < cardData.length; j++) {
					var c = cardData[j];
					if (c[TYPE] === 'ルリグ' && c[CLASS] && !have[c[CLASS]] && c[CLASS].indexOf('/') === -1) extra[c[CLASS]] = 1;
				}
				Object.keys(extra).sort().forEach(function (k) { $l.append($('<option>').val(k).text(k)); });
			}

			function customizeWindowEvent(x) {""")
rep("""<input type="checkbox" id="spell" checked><span onclick="clickSpan(this)">スペル </span>""",
    """<input type="checkbox" id="spell" checked><span onclick="clickSpan(this)">スペル </span>&emsp;&emsp;<input type="checkbox" id="resona" checked><span onclick="clickSpan(this)">レゾナ </span>&emsp;&emsp;<input type="checkbox" id="key" checked><span onclick="clickSpan(this)">キー </span>""")
rep("""	<body>""", """	<body>
		<div id="asNoData" style="display:none;background:#fff3cd;color:#664d03;border:1px solid #ffda6a;padding:6px 12px;margin-bottom:8px;font-size:14px;">
			&#9888; 尚未產生 ALLSTAR 卡片資料（js/card_info_allstar.js），目前只有 Diva 卡。請先雙擊 <b>allstar\\scrape_allstar.bat</b>，跑完重新整理此頁。
		</div>""")
rep("""				asSetupSelectors();""", """				asSetupSelectors();
				(function(){
					var n = 0;
					if (typeof cardDataAllstar !== 'undefined') { var ids = {}; cardDataAllstar.forEach(function (c) { ids[c[0]] = 1; }); cardData.forEach(function (c) { if (ids[c[0]]) n++; }); }
					if (!n) $('#asNoData').show();
				})();""")
# no card prices in the ALLSTAR editor
import re
a = s.index('	/* === yuyu-tei 価格 instant tooltip === */')
b = s.index('	</style>', a)
s = s[:a] + s[b:]
rep("""				if (typeof showPriceUpdatedAt === 'function') showPriceUpdatedAt();\n""", "")
rep("""&emsp;<span id="deckPriceTotal" style="cursor: default;margin-top: 0px;"></span>""", "")
s, n = re.subn(r'\s*<br>\s*<span>卡價來源[^\n]*?</span><a[^\n]*?yuyu-tei[^\n]*?</a><span id="priceUpdatedAt"[^\n]*?</span>', '', s)
if n != 1: sys.exit('price source line count %d' % n)
for w in ('price', 'yuyu'):
    if w in s.lower(): sys.exit('price leftover in index: ' + w)
# the format switch link (left of About) points back to the Diva page
rep("""<a id="formatSwitchLink" href="index_allstar.html" style="margin-left: 310px; margin-right: 10px;">ALLSTAR</a>""",
    """<a id="formatSwitchLink" href="index.html" style="margin-left: 310px; margin-right: 10px;">DIVA</a>""")
# DIVA link + About flush with the right edge of the panel
rep("""<a id="formatSwitchLink" href="index.html" style="margin-left: 310px; margin-right: 10px;">DIVA</a><button onclick="showVersion();">About</button>""",
    """<span style="float: right; position: relative; top: 10px;"><a id="formatSwitchLink" href="index.html" style="margin-right: 10px;">DIVA</a><button onclick="showVersion();">About</button></span>""")
# Arts area also holds KEY cards
rep("""<span style="user-select:text; cursor: text;margin-left: 122px;">Arts</span>""",
    """<span style="user-select:text; cursor: text;margin-left: 122px;">Arts / Key</span>""")
# Piece column on the left, Arts / Key area as two rows (4 on top, 5 below = 9 slots)
import re as _re
_a = s.index('<img id="pdeck_0"')
_a = s.rfind('<tr>', 0, _a)
_b = s.index('<img id="pdeck_1"')
_b = s.index('</tr>', _b) + len('</tr>')
def _img(kind, i, w, h, style=''):
    arr = 'pdeckArr' if kind == 'pdeck' else 'adeckArr'
    return ('<img id="%s_%d" width="%s" height="%s" style="vertical-align: middle;%s" src="img/empty.jpg" '
            'onmouseover="onmouseShow(this, \'deck\');" onclick="delDeck(this,%d , %s)">' % (kind, i, w, h, style, i, arr))
_T = '\t' * 6
_rows = [_T + '<tr>', _T + '\t<td>',
         _T + '\t\t<table style="border-collapse: collapse;"><tr>',
         _T + '\t\t\t<td style="vertical-align: top; padding: 0;">',
         _T + '\t\t\t\t' + _img('pdeck', 0, '105px', '75px') + '<br>',
         _T + '\t\t\t\t' + _img('pdeck', 1, '105px', '75px', ' margin-top: 4px;'),
         _T + '\t\t\t</td>',
         _T + '\t\t\t<td style="vertical-align: top; padding: 0 0 0 52px;">',
         _T + '\t\t\t\t<div style="height: 110px; white-space: nowrap;">']
for _i in range(0, 4):
    _rows.append(_T + '\t\t\t\t\t' + _img('adeck', _i, '75px', '105px'))
_rows += [_T + '\t\t\t\t</div>', _T + '\t\t\t\t<div style="height: 110px; white-space: nowrap;">']
for _i in range(4, 9):
    _rows.append(_T + '\t\t\t\t\t' + _img('adeck', _i, '75px', '105px'))
_rows += [_T + '\t\t\t\t</div>', _T + '\t\t\t</td>', _T + '\t\t</tr></table>', _T + '\t</td>', _T + '</tr>']
s = s[:_a] + '\n'.join(_rows).lstrip('\t') + s[_b:]
# Deck View button hidden in the ALLSTAR editor
rep("""<button onclick="$('#cardinformation').css('visibility', 'hidden');customizeWindowEvent('view');">Deck View</button>""",
    """<button style="display: none;" onclick="$('#cardinformation').css('visibility', 'hidden');customizeWindowEvent('view');">Deck View</button>""")
# Level 5 checkbox
rep("""<input type="checkbox" id="level4" checked><span onclick="clickSpan(this)">Level 4 </span>""",
    """<input type="checkbox" id="level4" checked><span onclick="clickSpan(this)">Level 4 </span>&emsp;&emsp;<input type="checkbox" id="level5" checked><span onclick="clickSpan(this)">Level 5 </span>""")
io.open(os.path.join(root, 'index_allstar.html'), 'w', encoding='utf-8', newline='\r\n').write(s)
print('ok')
