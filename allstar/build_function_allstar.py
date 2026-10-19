# Generates js/function_allstar.js from js/function.js (original is untouched).
# Re-run after function.js changes:  python3 allstar/build_function_allstar.py
import re, io, sys, os
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
src = io.open(os.path.join(root, 'js', 'function.js'), encoding='utf-8').read()
s = src

def must_replace(old, new, count=1):
    global s
    n = s.count(old)
    if n < 1:
        sys.exit('pattern not found: ' + old[:80])
    s = s.replace(old, new, count)

# 1) separate storage namespace (decks / comments of ALLSTAR editor do not mix with Diva editor)
s = s.replace('localStorage.', 'asStore.')
header = r'''/* ===== function_allstar.js — generated from function.js by allstar/build_function_allstar.py =====
 * ALLSTAR editor. Do not edit by hand; edit the build script instead. */
var asStore = (function () {
	var P = 'AS_';
	function keys() {
		var out = [];
		try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && k.indexOf(P) === 0) out.push(k.slice(P.length)); } } catch (e) {}
		return out;
	}
	return {
		getItem: function (k) { try { return localStorage.getItem(P + k); } catch (e) { return null; } },
		setItem: function (k, v) { try { localStorage.setItem(P + k, v); } catch (e) {} },
		removeItem: function (k) { try { localStorage.removeItem(P + k); } catch (e) {} },
		key: function (i) { return keys()[i] || null; },
		get length() { return keys().length; }
	};
})();
'''
s = header + s

# 2) default deck list: ALLSTAR editor starts with no preset decks
a = s.index('function onloaddeck()')
b = s.index('function showrdeck()')
s = s[:a] + r'''function onloaddeck()
{
	deckNamelist = JSON.parse(asStore.getItem("DeckNameList"));
	if(deckNamelist == null)
	{
		deckNamelist = [];
	}
	asStore.setItem("DeckNameList", JSON.stringify(deckNamelist));

	for(i = 0; i < deckNamelist.length; i ++)
	{
		updateDecklist(asStore.getItem(deckNamelist[i]));
	}
}

''' + s[b:]

# 2b) deck list robustness: original delete stores a non-JSON list
must_replace("""		asStore.setItem("DeckNameList", deckNamelist);
		updateDecklist("");""", """		asStore.setItem("DeckNameList", JSON.stringify(deckNamelist));
		updateDecklist("");""")
must_replace("""	deckNamelist = JSON.parse(asStore.getItem("DeckNameList"));
	if(deckNamelist == null)
	{
		deckNamelist = [];
	}
	asStore.setItem""", """	try { deckNamelist = JSON.parse(asStore.getItem("DeckNameList")); }
	catch(e) { deckNamelist = String(asStore.getItem("DeckNameList") || "").split(",").filter(function(x){ return x; }); }
	if(deckNamelist == null)
	{
		deckNamelist = [];
	}
	asStore.setItem""")

# 2c) no card prices in the ALLSTAR editor (yuyu-tei price helpers, info-table row, deck total)
a = s.index('// === yuyu-tei 価格表 helper ===')
b = s.index('// === big_pic lock (hold ALT to freeze the preview) ===')
s = s[:a] + s[b:]
if 'str += getPriceRow(data[ID]);' not in s: sys.exit('getPriceRow call not found')
s = re.sub(r'[ \t]*str \+= getPriceRow\(data\[ID\]\);\n', '', s)
s = re.sub(r'[ \t]*updateDeckPriceTotal\(\);\n', '', s)
for name in ('getPriceRow', 'updateDeckPriceTotal', 'showPriceUpdatedAt', 'formatPriceUpdatedAt', 'PRICE_INFO'):
    if name in s: sys.exit('price leftover: ' + name)

# 2d) KEY cards are landscape like pieces: swap width / height in the search list and the big preview
must_replace("""rdeckArr[page * 10 + i][TYPE] == "ピース" || """, """rdeckArr[page * 10 + i][TYPE] == "ピース" || rdeckArr[page * 10 + i][TYPE] == "キー" || """)
must_replace("""		if(cardData[i][TYPE] == "ピース" ||
			cardData[i][TYPE] == "ピース リレー" ||""", """		if(cardData[i][TYPE] == "ピース" ||
			cardData[i][TYPE] == "キー" ||
			cardData[i][TYPE] == "ピース リレー" ||""")

# 2e) Arts / Key area has 9 slots (4 + 5) in the ALLSTAR editor
must_replace("var ARTS_MAX_SIZE = 8;", "var ARTS_MAX_SIZE = 9;")

# 2f) Level 5 filter (ALLSTAR has Lv5 ルリグ)
must_replace("""		if(!$('#level0').is(":checked") && !$('#level1').is(":checked") && !$('#level2').is(":checked") && !$('#level3').is(":checked") && !$('#level4').is(":checked"))""",
             """		if(!$('#level0').is(":checked") && !$('#level1').is(":checked") && !$('#level2').is(":checked") && !$('#level3').is(":checked") && !$('#level4').is(":checked") && !$('#level5').is(":checked"))""")
must_replace("""			if(!$('#level4').is(":checked"))
			{
				if(cardData[i][LEVEL] == "4")
				{
					continue;
				}
			}""", """			if(!$('#level4').is(":checked"))
			{
				if(cardData[i][LEVEL] == "4")
				{
					continue;
				}
			}

			if($('#level5').length && !$('#level5').is(":checked"))
			{
				if(cardData[i][LEVEL] == "5")
				{
					continue;
				}
			}""")

# 3) addDeck: ALLSTAR deck rules
a = s.index('function addDeck(x)')
b = s.index('function downloadBlobopenbatoru')
s = s[:a] + r'''function asIsMainDeckType(t)
{
	return t == "シグニ" || t == "スペル" || t == "シグニ クラフト" || t == "スペル クラフト";
}

function addDeck(x)
{
	var i = 0;

	if(x.alt != "")
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				var c = cardData[i];
				if(!asAllowAdd(c))
				{
					break;
				}
				if(c[TYPE] == "トークン")
				{
					break;
				}
				if(asIsMainDeckType(c[TYPE]))
				{
					if(sdeckArr.length < 40)
					{
						sortSdeck(c);
					}
				}
				else
				{
					// LRIG deck: ルリグ / アーツ / レゾナ / キー (+ Diva assist / piece) — 10 cards total
					if(ldeckArr.length + adeckArr.length + pdeckArr.length >= 10)
					{
						break;
					}
					if(c[TYPE] == "アーツ" || c[TYPE] == "アーツ クラフト" || c[TYPE] == "キー")   // キー goes to the Arts / Key area
					{
						if(adeckArr.length < ARTS_MAX_SIZE)
						{
							sortAdeck(c);
						}
					}
					else if(c[TYPE] == "ピース" || c[TYPE] == "ピース リレー")
					{
						if(pdeckArr.length < 2)
						{
							sortPdeck(c);
						}
					}
					else if(c[ID] != "WXDi-P13-003B" && c[ID] != "WXDi-P16-001B")
					{
						sortLdeck(c);
					}
				}
				break;
			}
		}
	}
}

''' + s[b:]

# 4) search(): ALLSTAR product filter ("AS:<product_no>") + レゾナ / キー checkboxes
must_replace('''		if($('#selectProduct').val() != 0)
		{
			if(cardData[i][ID].indexOf($('#selectProduct').val()) == -1)
			{
				continue;
			}
		}''', '''		if(($('#selectProduct').val() || 0) != 0)
		{
			var asProd = $('#selectProduct').val();
			if(asProd.indexOf("AS:") == 0)
			{
				if(!asProductHas(asProd.slice(3), cardData[i][ID]))
				{
					continue;
				}
			}
			else if(cardData[i][ID].indexOf(asProd) == -1)
			{
				continue;
			}
		}

		if($('#resona').length && !$('#resona').is(":checked") && cardData[i][TYPE] == "レゾナ")
		{
			continue;
		}

		if($('#key').length && !$('#key').is(":checked") && cardData[i][TYPE] == "キー")
		{
			continue;
		}''')

# 5) info table: render レゾナ like a SIGNI
must_replace('else if(data[TYPE] == "シグニ" || data[TYPE] == "シグニ クラフト" || data[TYPE] == "シグニ レゾナ/クラフト")',
             'else if(data[TYPE] == "シグニ" || data[TYPE] == "シグニ クラフト" || data[TYPE] == "シグニ レゾナ/クラフト" || data[TYPE] == "レゾナ")')

# 6) no mobile redirect for the ALLSTAR page
must_replace('function checkAndRedirectToMobile(targetUrl) {', 'function checkAndRedirectToMobile(targetUrl) {\n\treturn;')

s += r'''

/* ===================== ALLSTAR additions ===================== */

// product filter
var asProductIdSets = null;
function asProductHas(no, id)
{
	if(asProductIdSets == null)
	{
		asProductIdSets = {};
		var prods = (typeof allstarProducts !== 'undefined') ? allstarProducts : [];
		for(var p = 0; p < prods.length; p++)
		{
			var set = {};
			for(var k = 0; k < prods[p].ids.length; k++) set[prods[p].ids[k]] = true;
			asProductIdSets[prods[p].no] = set;
		}
	}
	var pr = asProductIdSets[no];
	return !!(pr && pr[id]);
}

// restrictions (繭の部屋 / オールスター) — rules in js/allstar_restriction.js
function asNorm(name)
{
	var n = String(name || "");
	if(n.normalize) n = n.normalize("NFKC");
	return n.replace(/\s+/g, "").replace(/[《》]/g, "");
}

var asRestrictIndex = null;
function asBuildRestrictIndex()
{
	asRestrictIndex = { banned: {}, concurrent: {} };
	var R = (typeof allstarRestriction !== 'undefined') ? allstarRestriction : { banned: [], concurrent: [] };
	for(var b = 0; b < R.banned.length; b++)
	{
		asRestrictIndex.banned[asNorm(R.banned[b])] = true;
	}
	for(var r = 0; r < R.concurrent.length; r++)
	{
		var rule = R.concurrent[r];
		for(var g = 0; g < rule.groups.length; g++)
		{
			for(var n = 0; n < rule.groups[g].length; n++)
			{
				var key = asNorm(rule.groups[g][n]);
				(asRestrictIndex.concurrent[key] = asRestrictIndex.concurrent[key] || []).push({ rule: r, group: g });
			}
		}
	}
}

function asRestrictionOf(card)
{
	if(asRestrictIndex == null) asBuildRestrictIndex();
	var key = asNorm(card[NAME]);
	return {
		banned: !!asRestrictIndex.banned[key],
		concurrent: asRestrictIndex.concurrent[key] || []
	};
}

var asLastAlert = 0;
function asAlert(msg)
{
	var now = Date.now();
	if(now - asLastAlert > 800) { asLastAlert = now; alert(msg); }
}

function asAllowAdd(card)
{
	var info = asRestrictionOf(card);
	if(info.banned)
	{
		asAlert("《" + card[NAME] + "》はオールスターの使用禁止カードです。");
		return false;
	}
	if(info.concurrent.length)
	{
		var all = ldeckArr.concat(adeckArr, pdeckArr, sdeckArr);
		for(var i = 0; i < all.length; i++)
		{
			var other = asRestrictionOf(all[i]).concurrent;
			for(var a = 0; a < info.concurrent.length; a++)
			{
				for(var b = 0; b < other.length; b++)
				{
					if(info.concurrent[a].rule == other[b].rule && info.concurrent[a].group != other[b].group)
					{
						asAlert("《" + card[NAME] + "》と《" + all[i][NAME] + "》は同時使用制限カードです。");
						return false;
					}
				}
			}
		}
	}
	return true;
}

// extra rows in the card info table: 限定条件 + restriction
var asOrigShowInfotable = showInfotable;
showInfotable = function(data)
{
	asOrigShowInfotable(data);
	if(!data || data == "init" || typeof data != "object") return;
	var extra = "";
	if(data[TEAM] && /限定$/.test(data[TEAM]) && data[TYPE] != "ルリグ" && data[TYPE] != "アシストルリグ")
	{
		extra += "<tr><td>限定条件</td><td>" + data[TEAM] + "</td></tr>";
	}
	var info = asRestrictionOf(data);
	if(info.banned)
	{
		extra += "<tr style='background: red; color: white;'><td>繭の部屋</td><td>使用禁止カード</td></tr>";
	}
	if(info.concurrent.length)
	{
		var R = allstarRestriction.concurrent;
		var txt = [];
		for(var i = 0; i < info.concurrent.length; i++)
		{
			txt.push(R[info.concurrent[i].rule].title);
		}
		extra += "<tr style='background: orange;'><td>繭の部屋</td><td>同時使用制限<br>" + txt.join("<br>") + "</td></tr>";
	}
	if(extra)
	{
		var rows = $("#infoTable tr");
		if(rows.length > 2) $(rows[1]).after(extra); else $("#infoTable").append(extra);
	}
};

// KEY cards are landscape: LRIG deck slots and DECK VIEW show them landscape (like the piece slots)
var asOrigShowLdeck = showLdeck;
showLdeck = function()
{
	asOrigShowLdeck();
	for(var k = 0; k < 10; k++)
	{
		var isKey = k < ldeckArr.length && ldeckArr[k][TYPE] == "キー";
		$("#ldeck_" + k).attr("width", isKey ? "105px" : "75px").attr("height", isKey ? "75px" : "105px");
	}
};

var asOrigShowAdeck = showAdeck;
showAdeck = function()
{
	asOrigShowAdeck();
	for(var k = 0; k < ARTS_MAX_SIZE; k++)
	{
		var isKey = k < adeckArr.length && adeckArr[k][TYPE] == "キー";
		$("#adeck_" + k).attr("width", isKey ? "105px" : "75px").attr("height", isKey ? "75px" : "105px");
	}
};

var asOrigRearrangeLdeck = rearrange_ldeck;
rearrange_ldeck = function()
{
	var ret = asOrigRearrangeLdeck();
	for(var k = 0; k < 10; k++)
	{
		var c = k < ldeckArr.length ? ldeckArr[k] : adeckArr[k - ldeckArr.length];
		var isKey = c && c[TYPE] == "キー";
		$("#show_ldeck_" + k).attr("width", "164px").attr("height", isKey ? "118px" : "235px").css("margin-top", isKey ? "29px" : "-30px");
	}
	return ret;
};

// icons that only appear on ALLSTAR-era text
var asOrigStrToImg = str_to_img;
str_to_img = function(x)
{
	var ICON = "https://www.takaratomy.co.jp/products/wixoss/img/card/icon/";
	x = asOrigStrToImg(x);
	x = x.replace(/《アタックフェイズアイコン》/g, "<img class='icon_img' src='" + ICON + "icon_txt_phase_attack.png'></img>");
	x = x.replace(/【ライド】/g, "<img class='icon_img' src='" + ICON + "icon_txt_ride.png'></img>");
	x = x.replace(/《キーアイコン》/g, "<img class='icon_img' src='" + ICON + "icon_txt_format_key.png'></img>");
	x = x.replace(/【出現条件】/g, "<img class='icon_img' src='img/icon_txt_AppearanceCond.webp'></img>");
	var MAP = {
		"《アクセアイコン》": "icon_txt_accessories.png",
		"《スペルカットインアイコン》": "icon_txt_phase_spell.png",
		"《トラップアイコン》": "icon_txt_trap_mark.png",
		"《ビートアイコン》": "icon_txt_beat.png",
		"《レイヤーアイコン》": "icon_txt_layer_mark.png",
		"《ライズアイコン_黒》": "icon_txt_rise_02_black.png"
	};
	x = x.replace(/《[^》]*アイコン[^》]*》/g, function(t) { return MAP[t] ? "<img class='icon_img' src='" + ICON + MAP[t] + "'></img>" : t; });
	var COL = { "白": "white", "赤": "red", "青": "blue", "緑": "green", "黒": "black", "無": "null", "コイン": "coin" };
	x = x.replace(/《(白|赤|青|緑|黒|無|コイン)×(\d)》/g, function(t, c, n) { return "<img class='icon_img' src='" + ICON + "icon_txt_" + COL[c] + "_0" + n + ".png'></img>"; });
	return x;
};
'''
io.open(os.path.join(root, 'js', 'function_allstar.js'), 'w', encoding='utf-8', newline='\r\n').write(s)
print('ok', len(s))
