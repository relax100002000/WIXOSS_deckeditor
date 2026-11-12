/* WIXOSS カード検索 — 統一規則：沒選＝不限制、選了＝只要這些；同組 OR、跨組 AND */
'use strict';
(function(){
var META = {"sets": [["WX26-P2", "CONFLICT SELECTOR"], ["WX26-P1", "Lostorage SELECTOR"], ["WX26-CP1", "プリンセッション・オーケストラ SELECTOR"], ["WX25-P3", "LUMINOUS SELECTOR"], ["WX25-P2", "RESONANCE SELECTOR"], ["WX25-P1", "PRIMAL SELECTOR"], ["WX25-CP1", "ブルーアーカイブ SELECTOR"], ["WX25-CD1", "構築済みデッキ ブルーアーカイブ"], ["WX24-P4", "FORTH SELECTOR"], ["WX24-P3", "REVERSAL SELECTOR"], ["WX24-P2", "loth SELECTOR"], ["WX24-P1", "RECOLLECT SELECTOR"], ["WX24-D5", "BLACK ALT DESIRE"], ["WX24-D4", "GREEN ALT WANNA"], ["WX24-D3", "BLUE ALT APPLI"], ["WX24-D2", "RED ALT AMBITION"], ["WX24-D1", "WHITE ALT HOPE"], ["WXDi-P16", "LEGENDARY DIVA"], ["WXDi-P15", "DIVISIONS DIVA"], ["WXDi-CP02", "ブルーアーカイブ DIVA"], ["WXDi-P14", "フェゾーネ DIVA with 電音部"], ["WXDi-P13", "CONCORD DIVA"], ["WXDi-P12", "DISSONANCE DIVA"], ["WXDi-CP01", "にじさんじ DIVA"], ["WXDi-D09", "SUPER DIVA DECK DOUBLE HEROINES -ピルルク＆ヒラナ-"], ["WXDi-P11", "REUNION DIVA"], ["WXDi-P10", "PRISMATIC DIVA"], ["WXDi-P09", "CONFLATED DIVA"], ["WXDi-P08", "SPREAD DIVA"], ["WXDi-P07", "WELCOME BACK DIVA ～Lostorage～"], ["WXDi-P06", "WELCOME BACK DIVA ～selector～"], ["WXDi-D08", "DIVA DEBUT DECK WHITE HOPE"], ["WXDi-P05", "CURIOSITY DIVA"], ["WXDi-P04", "VERTEX DIVA"], ["WXDi-D07", "TOP DIVA DECK D・X・M"], ["WXDi-P03", "STANDUP DIVA"], ["WXDi-P02", "CHANGING DIVA"], ["WXDi-P01", "GLOWING DIVA"], ["WXDi-D06", "DIVA DEBUT DECK DIAGRAM"], ["WXDi-D05", "DIVA DEBUT DECK うちゅうのはじまり"], ["WXDi-D04", "DIVA DEBUT DECK Card Jockey"], ["WXDi-D03", "DIVA DEBUT DECK No Limit"], ["WXDi-P00", "INTERLUDE DIVA"], ["WXDi-D02", "DIVA DEBUT DECK にじさんじ ver.さんばか"], ["WXDi-D01", "ANCIENT SURPRISE"], ["PR-Di", "PRカード"], ["SP", "SPカード"]], "lrigs": ["アト", "タウィル", "ウムル", "リゼ", "美兎", "アンジュ", "とこ", "ヒラナ", "アキノ", "レイ", "LION", "LOVIT", "WOLF", "タマゴ", "ノヴァ", "バン", "ムジカ", "マドカ", "サンガ", "エクス", "デウス", "マキナ", "みこみこ", "まほまほ", "ゆかゆか", "タマ", "花代", "緑子", "ユヅキ", "ピルルク", "ウリス", "リル", "ドーナ", "あや", "エルドラ", "アン", "イオナ", "カーニバル", "レイラ", "ママ", "メル", "ナナシ", "グズ子", "リメンバ", "ミルルン", "ハナレ", "サシェ", "アイヤイ", "アルフォウ", "ミュウ", "夢限", "アズサ", "ネル", "シロコ", "ヒナ", "ホシノ", "サオリ", "ミヤコ", "ユカリ", "シュン", "補習授業部", "C&C", "対策委員会", "風紀委員会", "アザエラ", "ガブリエラ", "ミカエラ", "るう子", "あきら", "ひとえ", "ちより", "ヤミノ", "ララ・ルー", "ソウイ", "?", "ネージュ", "ジール", "リップル", "ミーティア", "ヴィオラ", "ゆきめ"], "classes": ["奏像：天使", "奏像：悪魔", "奏像：美巧", "奏像：英知", "奏像：武勇", "奏像：プリパラ", "奏武：アーム", "奏武：ウェポン", "奏武：遊具", "奏武：毒牙", "奏武：トリック", "奏武：ブルアカ", "奏羅：宝石", "奏羅：植物", "奏羅：原子", "奏羅：宇宙", "奏羅：微菌", "奏械：電機", "奏械：古代兵器", "奏械：迷宮", "奏械：調理", "奏械：乗機", "奏械：バーチャル", "世怜音女学院", "奏械：電音部", "奏生：水獣", "奏生：空獣", "奏生：地獣", "奏生：龍獣", "奏生：凶蟲", "奏生：怪異", "奏元", "奏像：プリオケ"]};
var LANG_KEY = 'wxsearch_lang', THEME_KEY = 'wxsearch_theme', PAGE_SIZE = 60;
var results = [], shown = 0, currentIdx = -1;
function el(id){ return document.getElementById(id); }
function lang(){ return localStorage.getItem(LANG_KEY) || 'JP'; }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function isPiece(t){ return t == "ピース" || t == "ピース リレー" || t == "ピース クラフト"; }
function norm(s){ return String(s).normalize('NFKC').toUpperCase(); }
function priceOf(c){ var p = (typeof PRICE_INFO !== 'undefined' && PRICE_INFO.prices) ? PRICE_INFO.prices[c[ID]] : null; return p && p.price != null ? p.price : null; }

/* ===== 每張卡預先算好各條件組的值 ===== */
function typeGroup(t){ return t.split(' ')[0]; }   // シグニ クラフト → シグニ
function setKey(id){
	if(id.indexOf('PR-') == 0) return 'PR-Di';
	if(id.indexOf('SP') == 0) return 'SP';
	return id.split('-').slice(0, 2).join('-');      // WX26-P1-LRe01 → WX26-P1
}
var CARDS = cardData.map(function(c, i){
	var T = typeGroup(c[TYPE]), parts = c[CLASS] ? c[CLASS].split('/') : [];
	var isLrig = T == 'ルリグ' || T == 'アシストルリグ', isSigni = T == 'シグニ';
	var hasTeam = c[JP_TEXT].indexOf('【チーム】') != -1 || c[JP_TEXT].indexOf('【ドリームチーム】') != -1;
	return {
		c: c, idx: i,
		v: {
			type: [T],
			color: c[COLOR].split(''),
			colorCount: [c[COLOR].length > 1 ? '多色' : '単色'],
			level: c[LEVEL] !== '' ? [c[LEVEL]] : [],
			set: [setKey(c[ID])],
			lrig: isLrig ? parts : [],
			class: isSigni ? parts.filter(function(p){ return p.indexOf('派') == -1; }) : [],
			faction: isSigni ? parts.filter(function(p){ return p.indexOf('派') != -1; }) : [],
			timing: c[TIMING] ? c[TIMING].split(',') : [],
			lb: (T == 'シグニ' || T == 'スペル') ? [c[LB] == '1' ? 'LBあり' : 'LBなし'] : [],
			story: [c[STORY] || '無印'],
			team: [hasTeam ? 'チーム' : '非チーム']
		},
		power: c[POWER] === '∞' ? Infinity : (c[POWER] !== '' ? +c[POWER] : null),
		price: priceOf(c),
		hay: {}
	};
});

/* ===== 條件組定義 ===== */
function ordered(pref, all){ return pref.filter(function(v){ return all.indexOf(v) != -1; }).concat(all.filter(function(v){ return pref.indexOf(v) == -1; })); }
function allValues(key){ var a = []; CARDS.forEach(function(x){ x.v[key].forEach(function(v){ if(a.indexOf(v) == -1) a.push(v); }); }); return a; }
var SET_NAME = {}; META.sets.forEach(function(s){ SET_NAME[s[0]] = s[1]; });
var COLOR_CLASS = {'白':'c-white','赤':'c-red','青':'c-blue','緑':'c-green','黒':'c-black','無':'c-none'};

function typesSel(){ return state.sel.type; }
function typeAllows(list){ var s = typesSel(); return !s.length || s.some(function(t){ return list.indexOf(t) != -1; }); }

var FACETS = [
	{key:'type', label:'カード種類', values:['ルリグ','アシストルリグ','ピース','アーツ','シグニ','スペル']},
	{key:'color', label:'色', values:['白','赤','青','緑','黒','無'], colorMode:true, modal:'cm'},
	{key:'colorCount', label:'単色／多色', values:['単色','多色']},
	{key:'level', label:'レベル', values:['0','1','2','3','4'], show:function(){ return typeAllows(['ルリグ','アシストルリグ','シグニ']); }, ctx:'ルリグ・アシスト・シグニ'},
	{key:'timing', label:'使用タイミング', values:['メインフェイズ','アタックフェイズ','スペルカットイン'], show:function(){ return typeAllows(['アシストルリグ','ピース','アーツ']); }, ctx:'アシスト・ピース・アーツ', modal:'tm'},
	{key:'lb', label:'ライフバースト', values:['LBあり','LBなし'], show:function(){ return typeAllows(['シグニ','スペル']); }, ctx:'シグニ・スペル'},
	{key:'class', label:'タイプ', values: ordered(META.classes, allValues('class')), scroll:true, show:function(){ return typeAllows(['シグニ']); }, ctx:'シグニ'},
	{key:'faction', label:'派閥', values:['解放派','闘争派','防衛派'], show:function(){ return typeAllows(['シグニ']); }, ctx:'シグニ'},
	{key:'power', label:'パワー', range:true, show:function(){ return typeAllows(['シグニ']); }, ctx:'シグニ'},
	{key:'lrig', label:'ルリグ', values: ordered(META.lrigs, allValues('lrig')), scroll:true, show:function(){ return typeAllows(['ルリグ','アシストルリグ']); }, ctx:'ルリグ・アシスト'},
	{key:'story', label:'ストーリー', values:['無印','ディソナ']},
	{key:'team', label:'チーム', values:['チーム','非チーム'], labelHtml:{'チーム':'<img src="../img/icon_txt_team.png" alt="チーム">','非チーム':'<img src="../img/no_icon_txt_team.png" alt="非チーム">'}},
	{key:'set', label:'商品', values: ordered(META.sets.map(function(s){ return s[0]; }), allValues('set')), scroll:true, labelOf:function(v){ return esc(v) + (SET_NAME[v] ? ' <small>' + esc(SET_NAME[v]) + '</small>' : ''); }},
	{key:'price', label:'價格 (yuyu-tei, 円)', range:true}
];
var MODE_HINT = {any:'任一：具有任一個所選項目即可。', all:'全部：所選項目都要有，可以多出其他項目。', exact:'完全一致：剛好就是所選項目，不能多也不能少。'};
function facet(key){ return FACETS.filter(function(f){ return f.key == key; })[0]; }
function visible(f){ return !f.show || f.show(); }

/* ===== 狀態（同步到網址） ===== */
var state = {q:'', sel:{}, mode:{color:'any', timing:'any'}, range:{power:[null,null], price:[null,null]}, sort:'id', dir:1};
FACETS.forEach(function(f){ if(!f.range) state.sel[f.key] = []; });

function toURL(){
	var p = new URLSearchParams();
	if(state.q) p.set('q', state.q);
	FACETS.forEach(function(f){
		if(f.range){ var r = state.range[f.key]; if(r[0] != null || r[1] != null) p.set(f.key, (r[0] != null ? r[0] : '') + '~' + (r[1] != null ? r[1] : '')); }
		else if(state.sel[f.key].length) p.set(f.key, state.sel[f.key].join(','));
	});
	FACETS.forEach(function(f){ if(f.modal && state.mode[f.key] != 'any') p.set(f.modal, state.mode[f.key]); });
	if(state.sort != 'id') p.set('sort', state.sort);
	if(state.dir < 0) p.set('dir', 'desc');
	var s = p.toString();
	history.replaceState(history.state, '', location.pathname + (s ? '?' + s : ''));
}
function fromURL(){
	var p = new URLSearchParams(location.search);
	state.q = p.get('q') || '';
	FACETS.forEach(function(f){
		var v = p.get(f.key); if(!v) return;
		if(f.range){ var m = v.split('~'); state.range[f.key] = [m[0] ? +m[0] : null, m[1] ? +m[1] : null]; }
		else state.sel[f.key] = v.split(',').filter(function(x){ return f.values.indexOf(x) != -1; });
	});
	FACETS.forEach(function(f){ if(f.modal) var mv = p.get(f.modal); state.mode[f.key] = (mv == 'all' || mv == 'exact') ? mv : 'any'; });
	state.sort = p.get('sort') || 'id';
	state.dir = p.get('dir') == 'desc' ? -1 : 1;
}

/* ===== 關鍵字＋語法（類 Scryfall） =====
 * 一般字：空格＝且、-字＝排除、"片語"
 * 欄位：名:/name:/n:  文:/o:/text:  ID:  註:/memo:
 * 顏色 c / color：w白 r赤 u青 g緑 b黒 c無（也可直接打 赤青）
 *   c:r / c>=r 含赤（可多色）  c=r 剛好赤  c<=ur 只用青赤以內  c!=r 不是剛好赤
 * 數值 lv / pow / lim / price：= : > >= < <=
 * 時機 tm：main / atk / cut（同顏色的運算子）
 * t:シグニ / t:天使（種類＋タイプ）  s:WX26-P2（商品）  l:タマ（ルリグ）
 * is:/has: mono multi lb team dissona
 */
var FIELD_ALIAS = {'名':'name','NAME':'name','N':'name','文':'text','TEXT':'text','O':'text','ID':'id','註':'memo','MEMO':'memo'};
var COLOR_LETTER = {'W':'白','R':'赤','U':'青','G':'緑','B':'黒','C':'無','白':'白','赤':'赤','青':'青','緑':'緑','黒':'黒','無':'無'};
var TIMING_WORD = {'MAIN':'メインフェイズ','M':'メインフェイズ','メイン':'メインフェイズ','メインフェイズ':'メインフェイズ',
	'ATK':'アタックフェイズ','ATTACK':'アタックフェイズ','A':'アタックフェイズ','アタック':'アタックフェイズ','アタックフェイズ':'アタックフェイズ',
	'CUT':'スペルカットイン','CUTIN':'スペルカットイン','C':'スペルカットイン','カットイン':'スペルカットイン','スペルカットイン':'スペルカットイン'};
var KEY_ALIAS = {'C':'color','COLOR':'color','色':'color','LV':'level','LEVEL':'level','LVL':'level','POW':'power','POWER':'power','P':'power',
	'LIM':'limit','LIMIT':'limit','PRICE':'price','YEN':'price','TM':'timing','TIMING':'timing','T':'type','TYPE':'type',
	'S':'set','SET':'set','E':'set','L':'lrig','LRIG':'lrig','IS':'is','HAS':'is'};

function parseColors(v){
	var out = [], s = norm(v);
	if(s.indexOf(',') == -1 && /^[WRUGBC]+$/.test(s)) s = s.split('');
	else s = s.split(/[,、]/).length > 1 ? s.split(/[,、]/) : s.split('');
	for(var i = 0; i < s.length; i++){ var c = COLOR_LETTER[s[i]]; if(!c) return null; if(out.indexOf(c) == -1) out.push(c); }
	return out.length ? out : null;
}
function parseTimings(v){
	var parts = norm(v).split(/[,、+]/), out = [];
	for(var i = 0; i < parts.length; i++){ var t = TIMING_WORD[parts[i]]; if(!t) return null; if(out.indexOf(t) == -1) out.push(t); }
	return out.length ? out : null;
}
function setCompare(op, have, want){
	var hasAll = want.every(function(w){ return have.indexOf(w) != -1; });
	var within = have.length > 0 && have.every(function(h){ return want.indexOf(h) != -1; });
	if(op == ':' || op == '>=') return hasAll;
	if(op == '=') return hasAll && have.length == want.length;
	if(op == '!=') return !(hasAll && have.length == want.length);
	if(op == '<=') return within;
	if(op == '>') return hasAll && have.length > want.length;
	if(op == '<') return within && have.length < want.length;
	return false;
}
function numCompare(op, v, n){
	if(v == null || isNaN(v)) return false;
	if(op == ':' || op == '=') return v == n;
	if(op == '!=') return v != n;
	if(op == '>') return v > n; if(op == '>=') return v >= n;
	if(op == '<') return v < n; if(op == '<=') return v <= n;
	return false;
}
// 回傳 test(x) 或 null（不是語法 → 當一般文字）
function buildSyntax(key, op, val){
	var k = KEY_ALIAS[norm(key)];
	if(!k) return null;
	if(k == 'color'){ var cs = parseColors(val); if(!cs) return null; return function(x){ return setCompare(op, x.v.color, cs); }; }
	if(k == 'timing'){ var ts = parseTimings(val); if(!ts) return null; return function(x){ return setCompare(op, x.v.timing, ts); }; }
	if(k == 'level' || k == 'power' || k == 'limit' || k == 'price'){
		var n = norm(val) == '∞' ? Infinity : +val; if(isNaN(n)) return null;
		return function(x){
			var v = k == 'level' ? (x.c[LEVEL] === '' ? null : +x.c[LEVEL]) : k == 'limit' ? (x.c[LIMIT] === '' ? null : +x.c[LIMIT]) : x[k];
			return numCompare(op, v, n);
		};
	}
	if(op != ':' && op != '=') return null;
	var w = norm(val);
	if(k == 'type') return function(x){ return norm(x.c[TYPE] + '/' + x.c[CLASS]).indexOf(w) != -1; };
	if(k == 'set') return function(x){ return x.v.set[0].toUpperCase() == w || norm(x.c[ID]).indexOf(w) == 0; };
	if(k == 'lrig') return function(x){ return x.v.lrig.some(function(l){ return norm(l) == w; }); };
	if(k == 'is'){
		var IS = {'MONO': function(x){ return x.v.colorCount[0] == '単色'; }, 'MULTI': function(x){ return x.v.colorCount[0] == '多色'; },
			'LB': function(x){ return x.v.lb[0] == 'LBあり'; }, 'TEAM': function(x){ return x.v.team[0] == 'チーム'; },
			'DISSONA': function(x){ return x.v.story[0] == 'ディソナ'; }};
		IS['単色'] = IS.MONO; IS['多色'] = IS.MULTI; IS['チーム'] = IS.TEAM; IS['ディソナ'] = IS.DISSONA;
		return IS[w] || null;
	}
	return null;
}
function parseQuery(q){
	var out = [], re = /(-?)(?:"([^"]*)"|(\S+))/g, m;
	while((m = re.exec(q))){
		var neg = m[1] == '-';
		if(m[2] != null){ var ph = norm(m[2]); if(ph) out.push({neg: neg, field: null, word: ph}); continue; }
		var tok = m[3];
		var sm = tok.match(/^([^\s:：=<>!]+)(>=|<=|!=|=|:|：|>|<)(.+)$/);
		if(sm){
			var op = sm[2] == '：' ? ':' : sm[2], val = sm[3].replace(/^"|"$/g, '');
			var test = buildSyntax(sm[1], op, val);
			if(test){ out.push({neg: neg, test: test}); continue; }
			var field = (op == ':') ? FIELD_ALIAS[norm(sm[1])] : null;
			if(field){ out.push({neg: neg, field: field, word: norm(val)}); continue; }
		}
		var word = norm(tok);
		if(word) out.push({neg: neg, field: null, word: word});
	}
	return out;
}
function hay(x, field, lg, comments){
	var c = x.c;
	if(field == 'name') return norm(c[NAME]);
	if(field == 'id') return norm(c[ID]);
	if(field == 'memo') return norm(comments[c[ID]] || '');
	if(field == 'text') return x.hay['t' + lg] || (x.hay['t' + lg] = norm(lg == 'TW' && c[TW_TEXT] ? c[TW_TEXT] : c[JP_TEXT]));
	var k = 'a' + lg;
	if(!x.hay[k]) x.hay[k] = norm([c[ID], c[NAME], c[TYPE], c[CLASS], c[COLOR], c[TEAM], c[STORY], c[TIMING], lg == 'TW' ? c[TW_TEXT] : c[JP_TEXT]].join('\u0001'));
	return x.hay[k] + '\u0001' + norm(comments[c[ID]] || '');
}
function textPass(x, terms, lg, comments){
	for(var i = 0; i < terms.length; i++){
		var t = terms[i], hit;
		if(t.test) hit = t.test(x);
		else {
			var h = hay(x, t.field, lg, comments);
			hit = h.indexOf(t.word) != -1 || ((t.word.indexOf('コイン') != -1 || t.word.indexOf('COIN') != -1) && h.indexOf('◎') != -1);
		}
		if(hit == t.neg) return false;
	}
	return true;
}

/* ===== 篩選（含各選項的張數） ===== */
function facetPass(f, x){
	if(f.range){
		var r = state.range[f.key], v = x[f.key];
		if(r[0] == null && r[1] == null) return true;
		if(v == null) return false;
		return (r[0] == null || v >= r[0]) && (r[1] == null || v <= r[1]);
	}
	var sel = state.sel[f.key];
	if(!sel.length) return true;
	var vals = x.v[f.key];
	if(f.modal && state.mode[f.key] == 'all') return sel.every(function(s){ return vals.indexOf(s) != -1; });
	if(f.modal && state.mode[f.key] == 'exact') return vals.length == sel.length && sel.every(function(s){ return vals.indexOf(s) != -1; });
	return sel.some(function(s){ return vals.indexOf(s) != -1; });
}
function isActive(f){
	if(!visible(f)) return false;
	if(f.range){ var r = state.range[f.key]; return r[0] != null || r[1] != null; }
	return state.sel[f.key].length > 0;
}
var counts = {};
function compute(){
	var terms = parseQuery(state.q), lg = lang(), comments = {};
	if(terms.length){ for(var k = 0; k < localStorage.length; k++){ var key = localStorage.key(k); if(key && key.slice(-10) == '_WXcomment') comments[key.slice(0, -10)] = localStorage.getItem(key) || ''; } }
	var act = FACETS.filter(isActive), out = [];
	counts = {}; FACETS.forEach(function(f){ counts[f.key] = {}; });
	function add(f, x){ if(f.range) return; x.v[f.key].forEach(function(v){ counts[f.key][v] = (counts[f.key][v] || 0) + 1; }); }
	CARDS.forEach(function(x){
		if(terms.length && !textPass(x, terms, lg, comments)) return;
		var fails = [];
		for(var i = 0; i < act.length && fails.length < 2; i++) if(!facetPass(act[i], x)) fails.push(act[i]);
		if(!fails.length){ out.push(x); FACETS.forEach(function(f){ add(f, x); }); }
		else if(fails.length == 1) add(fails[0], x);
	});
	var s = state.sort, d = state.dir;
	if(s != 'id' || d < 0){
		var key = {id:function(x){ return x.idx; }, level:function(x){ return x.c[LEVEL] === '' ? null : +x.c[LEVEL]; }, power:function(x){ return x.power; }, price:function(x){ return x.price; }, name:function(x){ return x.c[NAME]; }}[s];
		out.sort(function(a, b){
			var va = key(a), vb = key(b);
			if(va == null && vb == null) return a.idx - b.idx;
			if(va == null) return 1; if(vb == null) return -1;
			var r = typeof va == 'string' ? va.localeCompare(vb, 'ja') : (va == vb ? 0 : va < vb ? -1 : 1);
			return r ? r * d : a.idx - b.idx;
		});
	}
	return out;
}

/* ===== 畫面 ===== */
function chipHtml(f, v){
	var on = state.sel[f.key].indexOf(v) != -1, n = counts[f.key][v] || 0;
	var label = f.labelHtml && f.labelHtml[v] ? f.labelHtml[v] : f.labelOf ? f.labelOf(v) : esc(v);
	var cls = 'chip' + (f.colorMode ? ' ' + COLOR_CLASS[v] : '') + (!n && !on ? ' zero' : '');
	return '<label class="' + cls + '"><input type="checkbox" data-f="' + f.key + '" value="' + esc(v) + '"' + (on ? ' checked' : '') + '><span>' + label + ' <span class="n">' + n + '</span></span></label>';
}
function renderFacets(){
	var scrolls = {}; document.querySelectorAll('#facets .chips.scroll').forEach(function(e){ scrolls[e.dataset.f] = e.scrollTop; });
	var html = '<div class="helpbox">每一組：<b>沒選＝不限制</b>，選了＝只要這些。同組任一符合，不同組要同時符合。數字＝符合其他條件、且具有該選項的張數（0 的選項會變淡）。<br>' +
		'<details><summary><b>搜尋框語法</b>（可和下方條件一起用）</summary>' +
		'空格＝且，<code>-字</code>＝排除，<code>"…"</code>＝片語；<code>名:</code> <code>文:</code> <code>ID:</code> <code>註:</code> 指定欄位<br>' +
		'<b>顏色</b> <code>c</code>：w白 r赤 u青 g緑 b黒 c無（也可打 <code>c:赤青</code>）<br>' +
		'　<code>c:r</code> 含赤　<code>c=r</code> 剛好赤　<code>c=ur</code> 剛好青赤　<code>c<=ur</code> 青赤以內　<code>c!=r</code><br>' +
		'<b>時機</b> <code>tm</code>：main／atk／cut，運算子同顏色，例 <code>tm=main</code> 只能主要階段<br>' +
		'<b>數值</b> <code>lv</code> <code>pow</code> <code>lim</code> <code>price</code>：<code>= > >= < <=</code>，例 <code>pow>=12000</code> <code>price<=300</code><br>' +
		'<code>t:シグニ</code> <code>t:天使</code> 種類／タイプ　<code>s:WX26-P2</code> 商品　<code>l:タマ</code> ルリグ<br>' +
		'<code>is:multi</code> <code>is:mono</code> <code>has:lb</code> <code>is:team</code> <code>is:dissona</code>（前面加 <code>-</code> 為否定）</details></div>';
	FACETS.forEach(function(f){
		if(!visible(f)) return;
		var sub = f.ctx ? '<span class="sub">（' + f.ctx + '）</span>' : '';
		var clr = isActive(f) ? '<button data-clear="' + f.key + '">清除</button>' : '';
		html += '<div class="fgroup' + (f.ctx && typesSel().length ? ' ctx' : '') + '"><div class="hd"><h3>' + f.label + sub + '</h3>' + clr + '</div>';
		if(f.range){
			var r = state.range[f.key];
			html += '<div class="range"><input type="number" inputmode="numeric" data-r="' + f.key + '" data-i="0" placeholder="最小" value="' + (r[0] != null ? r[0] : '') + '">〜' +
				'<input type="number" inputmode="numeric" data-r="' + f.key + '" data-i="1" placeholder="最大" value="' + (r[1] != null ? r[1] : '') + '"></div>';
		} else {
			html += '<div class="chips' + (f.scroll ? ' scroll' : '') + '" data-f="' + f.key + '">' + f.values.map(function(v){ return chipHtml(f, v); }).join('') + '</div>';
			if(f.modal){ var md = state.mode[f.key]; html += '<div class="coloropts"><div class="seg small"><span class="seglabel">比對</span><button data-mf="' + f.key + '" data-mode="any" class="' + (md == 'any' ? 'on' : '') + '">任一</button><button data-mf="' + f.key + '" data-mode="all" class="' + (md == 'all' ? 'on' : '') + '">全部</button><button data-mf="' + f.key + '" data-mode="exact" class="' + (md == 'exact' ? 'on' : '') + '">完全一致</button></div></div>' + '<div class="note">' + MODE_HINT[md] + '</div>'; }
		}
		html += '</div>';
	});
	el('facets').innerHTML = html;
	document.querySelectorAll('#facets .chips.scroll').forEach(function(e){ if(scrolls[e.dataset.f]) e.scrollTop = scrolls[e.dataset.f]; });
}
function renderActive(){
	var html = '', n = 0;
	FACETS.forEach(function(f){
		if(!isActive(f)) return;
		var txt;
		if(f.range){ var r = state.range[f.key]; txt = (r[0] != null ? r[0] : '') + '〜' + (r[1] != null ? r[1] : ''); }
		else { var md = f.modal ? state.mode[f.key] : 'any'; txt = state.sel[f.key].map(esc).join(md == 'any' ? '／' : '＋') + (md == 'exact' ? ' のみ' : ''); }
		html += '<button class="achip" data-rm="' + f.key + '"><i>' + f.label + '</i><b>' + txt + '</b><span class="x">✕</span></button>'; n++;
	});
	if(n > 1) html += '<button class="achip clearall" id="chipClearAll">全部清除</button>';
	el('activeChips').innerHTML = html;
	var b = el('filterBadge'); b.hidden = !n; b.textContent = n;
}
function cardTile(x, i){
	var c = x.c, price = state.sort == 'price' && x.price != null ? '<div class="price">' + x.price.toLocaleString('ja-JP') + ' 円</div>' : '';
	return '<button class="card" data-idx="' + i + '"><div class="imgwrap"><img loading="lazy" decoding="async" src="' + esc(c[SRC]) + '" alt=""></div>' +
		'<div class="cap"><div class="cid">' + esc(c[ID]) + '</div><div class="cname">' + esc(c[NAME]) + '</div>' + price + '</div></button>';
}
var RES = [];
function renderMore(){
	if(shown >= results.length) return;
	var end = Math.min(shown + PAGE_SIZE, results.length), html = '';
	for(var i = shown; i < end; i++) html += cardTile(RES[i], i);
	el('grid').insertAdjacentHTML('beforeend', html);
	shown = end;
}
function run(keepScroll){
	RES = compute();
	results = RES.map(function(x){ return x.c; });
	shown = 0;
	el('grid').innerHTML = results.length ? '' : '<div class="empty">沒有符合條件的卡片</div>';
	renderMore();
	el('count').textContent = results.length + ' / ' + cardData.length + ' 張';
	el('count2').textContent = results.length;
	el('sort').value = state.sort; el('dir').textContent = state.dir > 0 ? '↑' : '↓';
	renderActive();
	if(el('filterSheet').classList.contains('open')) renderFacets();
	toURL();
	if(!keepScroll) window.scrollTo(0, 0);
}
var timer = null;
function runLater(){ clearTimeout(timer); timer = setTimeout(run, 200); }

function clearFacet(key){ var f = facet(key); if(f.range) state.range[key] = [null, null]; else state.sel[key] = []; if(f.modal) state.mode[key] = 'any'; }
function clearAll(){ FACETS.forEach(function(f){ clearFacet(f.key); }); }

/* ===== 事件 ===== */
el('facets').addEventListener('change', function(e){
	var t = e.target;
	if(t.dataset.f){
		var s = state.sel[t.dataset.f], i = s.indexOf(t.value);
		if(t.checked && i == -1) s.push(t.value);
		if(!t.checked && i != -1) s.splice(i, 1);
		var f = facet(t.dataset.f); s.sort(function(a, b){ return f.values.indexOf(a) - f.values.indexOf(b); });
		run(true);
	} else if(t.dataset.r){
		state.range[t.dataset.r][+t.dataset.i] = t.value === '' ? null : +t.value;
		run(true);
	}
});
el('facets').addEventListener('click', function(e){
	var m = e.target.closest('[data-mode]'), c = e.target.closest('[data-clear]');
	if(m){ state.mode[m.dataset.mf] = m.dataset.mode; run(true); }
	if(c){ clearFacet(c.dataset.clear); run(true); }
});
el('activeChips').addEventListener('click', function(e){
	var b = e.target.closest('.achip'); if(!b) return;
	if(b.id == 'chipClearAll') clearAll(); else clearFacet(b.dataset.rm);
	run();
});
el('clearAll').addEventListener('click', function(){ clearAll(); run(true); });
el('q').addEventListener('input', function(){ state.q = this.value; el('searchbox').classList.toggle('has', !!this.value); runLater(); });
el('q').addEventListener('keydown', function(e){ if(e.key == 'Enter'){ this.blur(); run(); } });
el('clearText').addEventListener('click', function(){ el('q').value = state.q = ''; el('searchbox').classList.remove('has'); run(); });
el('sort').addEventListener('change', function(){ state.sort = this.value; state.dir = (this.value == 'price' || this.value == 'power') ? -1 : 1; run(); });
el('dir').addEventListener('click', function(){ state.dir = -state.dir; run(); });
el('shareBtn').addEventListener('click', function(){
	var b = this;
	(navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject()).then(function(){ b.textContent = '✓'; }, function(){ prompt('網址', location.href); }).then(function(){ setTimeout(function(){ b.textContent = '🔗'; }, 1200); });
});
el('filterBtn').addEventListener('click', function(){ renderFacets(); openSheet('filterSheet'); });
el('grid').addEventListener('click', function(e){ var t = e.target.closest('.card'); if(t) showDetail(+t.dataset.idx); });
new IntersectionObserver(function(en){ if(en[0].isIntersecting) renderMore(); }, {rootMargin: '800px'}).observe(el('sentinel'));

var openStack = [];
function openSheet(id){ var s = el(id); if(!s.classList.contains('open')){ s.classList.add('open'); openStack.push(id); history.pushState({sheet: id}, '', location.href); document.body.style.overflow = 'hidden'; } }
function closeTop(){ var id = openStack.pop(); if(id) el(id).classList.remove('open'); if(!openStack.length) document.body.style.overflow = ''; }
window.addEventListener('popstate', closeTop);
document.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', function(){ if(openStack.length) history.back(); }); });

function applyLang(){ document.querySelectorAll('#langSeg button').forEach(function(b){ b.classList.toggle('on', b.dataset.lang == lang()); }); }
document.querySelectorAll('#langSeg button').forEach(function(b){ b.addEventListener('click', function(){ localStorage.setItem(LANG_KEY, b.dataset.lang); applyLang(); run(true); }); });
function applyTheme(){ var t = localStorage.getItem(THEME_KEY); if(t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; }
el('themeBtn').addEventListener('click', function(){
	var dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme == 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
	localStorage.setItem(THEME_KEY, dark ? 'light' : 'dark'); applyTheme();
});
/* ===== card text icons (copied from function.js, paths adjusted) ===== */
function str_to_img(x)
{
	x = x.replace(/【使用条件】/g, "<img class='icon_img' src='../img/icon_txt_terms_use.png'></img>");
	x = x.replace(/【チーム】/g, "<img class='icon_img' src='../img/icon_txt_team.png'></img>");
	x = x.replace(/【ドリームチーム】/g, "<img class='icon_img' src='../img/icon_txt_dreamteam.png'></img>");
	x = x.replace(/【ライフバースト】/g, "<img class='icon_img' src='../img/icon_txt_burst.png'></img>");
	x = x.replace(/【ライズ】/g, "<img class='icon_img' src='../img/icon_txt_rise_01.png'></img>");
	x = x.replace(/《ライズアイコン》/g, "<img class='icon_img' src='../img/icon_txt_rise_02.png'></img>");
	x = x.replace(/\[ライズ\]/g, "<img class='icon_img' src='../img/icon_txt_rise_02.png'></img>");
	x = x.replace(/【ハーモニー】/g, "<img class='icon_img' src='../img/icon_txt_harmony.png'></img>");
	x = x.replace(/《ディソナアイコン》/g, "<img class='icon_img' src='../img/icon_txt_dissona.png'></img>");
	x = x.replace(/\[ダウン\]/g, "<img class='icon_img' src='../img/icon_txt_down.png'></img>");
	x = x.replace(/《ダウン》/g, "<img class='icon_img' src='../img/icon_txt_down.png'></img>");
	x = x.replace(/\[ガード\]/g, "<img class='icon_img' src='../img/icon_guard_mini.png'></img>");
	x = x.replace(/《ガードアイコン》/g, "<img class='icon_img' src='../img/icon_guard_mini.png'></img>");
	x = x.replace(/◎/g, "<img class='icon_img' src='../img/icon_txt_coin.png'></img>");
	x = x.replace(/《コインアイコン》/g, "<img class='icon_img' src='../img/icon_txt_coin.png'></img>");
	x = x.replace(/【絆】/g, "<img class='icon_img' src='../img/icon_txt_kizuna.png'></img>");
	x = x.replace(/【絆起】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='../img/icon_txt_starting_kizuna.png'></img>");
	x = x.replace(/【絆出】(?!能力)/g, "</td></tr><tr style='background:#FFD9E6'><td colspan='2'><img class='icon_img' src='../img/icon_txt_arrival_kizuna.png'></img>");
	x = x.replace(/【絆自】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='../img/icon_txt_auto_kizuna.png'></img>");
	x = x.replace(/【絆常】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='../img/icon_txt_regular_kizuna.png'></img>");
	x = x.replace(/【  】/g, "<img class='icon_img' src='../img/icon_txt_frame_null.png'></img>");
	x = x.replace(/《リコレクトアイコン》/g, "<img class='icon_img' src='../img/icon_txt_recollect.png'></img>");
	x = x.replace(/《相手ターン》/g, "<img class='icon_img' src='../img/icon_txt_opponent_turn.png'></img>");
	x = x.replace(/《自分ターン》/g, "<img class='icon_img' src='../img/icon_txt_my_turn.png'></img>");
	x = x.replace(/《ヘブン》/g, "<img class='icon_img' src='../img/icon_txt_heaven.webp'></img>");
	x = x.replace(/《クロスアイコン》/g, "<img class='icon_img' src='../img/icon_txt_cross.webp'></img>");
	x = x.replace(/【クロス自】/g, "<img class='icon_img' src='../img/icon_txt_auto_cross.webp'></img>");
	x = x.replace(/【出現条件】/g, "<img class='icon_img' src='../img/icon_txt_AppearanceCond.webp'></img>");
	x = x.replace(/【メインフェイズ】/g, "<img class='icon_img' src='../img/icon_txt_phase_main.webp'></img>");
	x = x.replace(/《メインフェイズアイコン》/g, "<img class='icon_img' src='../img/icon_txt_phase_main.webp'></img>");
	x = x.replace(/【歌のカケラ】/g, "<img class='icon_img' src='../img/icon_txt_utanokakera.webp'></img>");

	x = x.replace(/<img class=\'icon_img\' src=\'\.\.\/img\/icon_txt_burst\.png\'><\/img>：/g, "<\/td><\/tr><tr\  style=\'background:#E0E0E0\'><td\ colspan=\'2\'><img class=\'icon_img\' src=\'\.\.\/img\/icon_txt_burst\.png\'><\/img>：");
	x = x.replace(/<img class=\'icon_img\' src=\'\.\.\/img\/icon_txt_utanokakera\.webp\'><\/img>：/g, "<\/td><\/tr><tr\  class=\'priokeBackground\'><td\ colspan=\'2\'><img class=\'icon_img\' src=\'\.\.\/img\/icon_txt_utanokakera\.webp\'><\/img>：");
	x = x.replace(/「歌之碎片」：/g, "<\/td><\/tr><tr\  class=\'priokeBackground\'><td\ colspan=\'2\'>「歌之碎片」：");
	x = x.replace(/「生命爆發」：/g, "<\/td><\/tr><tr\  style=\'background:#E0E0E0\'><td\ colspan=\'2\'>「生命爆發」：");
	
	x = x.replace(/\(ターン1\)/g, "<img class='icon_img' src='../img/icon_txt_turn_01.png'></img>");
	x = x.replace(/\(ターン2\)/g, "<img class='icon_img' src='../img/icon_txt_turn_02.png'></img>");
	x = x.replace(/\(ゲーム1\)/g, "<img class='icon_img' src='../img/icon_txt_game_01.png'></img>");
	x = x.replace(/\(ゲーム2\)/g, "<img class='icon_img' src='../img/icon_txt_game_02.png'></img>");

	x = x.replace(/《ターン1回》/g, "<img class='icon_img' src='../img/icon_txt_turn_01.png'></img>");
	x = x.replace(/《ターン2回》/g, "<img class='icon_img' src='../img/icon_txt_turn_02.png'></img>");
	x = x.replace(/《ゲーム1回》/g, "<img class='icon_img' src='../img/icon_txt_game_01.png'></img>");
	x = x.replace(/《ゲーム2回》/g, "<img class='icon_img' src='../img/icon_txt_game_02.png'></img>");

	x = x.replace(/【チーム起】/g, "<img class='icon_img' src='../img/icon_txt_starting_team.png'></img>");
	x = x.replace(/【チーム常】/g, "<img class='icon_img' src='../img/icon_txt_regular_team.png'></img>");
	x = x.replace(/【チーム出】/g, "<img class='icon_img' src='../img/icon_txt_arrival_team.png'></img>");
	x = x.replace(/【チーム自】/g, "<img class='icon_img' src='../img/icon_txt_auto_team.png'></img>");

	x = x.replace(/【出】/g, "<img class='icon_img' src='../img/icon_txt_arrival.png'></img>");
	x = x.replace(/【自】/g, "<img class='icon_img' src='../img/icon_txt_auto.png'></img>");
	x = x.replace(/【常】/g, "<img class='icon_img' src='../img/icon_txt_regular.png'></img>");
	x = x.replace(/【起】/g, "<img class='icon_img' src='../img/icon_txt_starting.png'></img>");

	x = x.replace(/《赤2》/g, "<img class='icon_img' src='../img/icon_txt_red2.png'></img>");
	x = x.replace(/《赤》/g, "<img class='icon_img' src='../img/icon_txt_red.png'></img>");
	x = x.replace(/【赤】/g, "<img class='icon_img' src='../img/icon_txt_red.png'></img>");
	x = x.replace(/《赤×0》/g, "<img class='icon_img' src='../img/icon_txt_red_00.png'></img>");
	x = x.replace(/《赤×1》/g, "<img class='icon_img' src='../img/icon_txt_red_01.png'></img>");
	x = x.replace(/《赤×2》/g, "<img class='icon_img' src='../img/icon_txt_red_02.png'></img>");
	x = x.replace(/《赤×3》/g, "<img class='icon_img' src='../img/icon_txt_red_03.png'></img>");
	x = x.replace(/\[赤\]/g, "<img class='icon_img' src='../img/icon_txt_red.png'></img>");
	x = x.replace(/\[赤\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_00.png'></img>");
	x = x.replace(/\[赤\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_01.png'></img>");
	x = x.replace(/\[赤\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_02.png'></img>");
	x = x.replace(/\[赤\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_03.png'></img>");
	x = x.replace(/\[赤\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_04.png'></img>");
	x = x.replace(/\[赤\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_red_05.png'></img>");

	x = x.replace(/《青2》/g, "<img class='icon_img' src='../img/icon_txt_blue2.png'></img>");
	x = x.replace(/《青》/g, "<img class='icon_img' src='../img/icon_txt_blue.png'></img>");
	x = x.replace(/【青】/g, "<img class='icon_img' src='../img/icon_txt_blue.png'></img>");
	x = x.replace(/《青×0》/g, "<img class='icon_img' src='../img/icon_txt_blue_00.png'></img>");
	x = x.replace(/《青×1》/g, "<img class='icon_img' src='../img/icon_txt_blue_01.png'></img>");
	x = x.replace(/《青×2》/g, "<img class='icon_img' src='../img/icon_txt_blue_02.png'></img>");
	x = x.replace(/\[青\]/g, "<img class='icon_img' src='../img/icon_txt_blue.png'></img>");
	x = x.replace(/\[青\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_00.png'></img>");
	x = x.replace(/\[青\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_01.png'></img>");
	x = x.replace(/\[青\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_02.png'></img>");
	x = x.replace(/\[青\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_03.png'></img>");
	x = x.replace(/\[青\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_04.png'></img>");
	x = x.replace(/\[青\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_blue_05.png'></img>");
	
	x = x.replace(/《緑2》/g, "<img class='icon_img' src='../img/icon_txt_green2.png'></img>");
	x = x.replace(/《緑》/g, "<img class='icon_img' src='../img/icon_txt_green.png'></img>");
	x = x.replace(/【緑】/g, "<img class='icon_img' src='../img/icon_txt_green.png'></img>");
	x = x.replace(/《緑×0》/g, "<img class='icon_img' src='../img/icon_txt_green_00.png'></img>");
	x = x.replace(/《緑×1》/g, "<img class='icon_img' src='../img/icon_txt_green_01.png'></img>");
	x = x.replace(/《緑×2》/g, "<img class='icon_img' src='../img/icon_txt_green_02.png'></img>");
	x = x.replace(/\[緑\]/g, "<img class='icon_img' src='../img/icon_txt_green.png'></img>");
	x = x.replace(/\[緑\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_00.png'></img>");
	x = x.replace(/\[緑\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_01.png'></img>");
	x = x.replace(/\[緑\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_02.png'></img>");
	x = x.replace(/\[緑\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_03.png'></img>");
	x = x.replace(/\[緑\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_04.png'></img>");
	x = x.replace(/\[緑\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_green_05.png'></img>");

	x = x.replace(/《黒2》/g, "<img class='icon_img' src='../img/icon_txt_black2.png'></img>");
	x = x.replace(/《黒》/g, "<img class='icon_img' src='../img/icon_txt_black.png'></img>");
	x = x.replace(/【黒】/g, "<img class='icon_img' src='../img/icon_txt_black.png'></img>");
	x = x.replace(/《黒×0》/g, "<img class='icon_img' src='../img/icon_txt_black_00.png'></img>");
	x = x.replace(/《黒×1》/g, "<img class='icon_img' src='../img/icon_txt_black_01.png'></img>");
	x = x.replace(/《黒×2》/g, "<img class='icon_img' src='../img/icon_txt_black_02.png'></img>");
	x = x.replace(/\[黒\]/g, "<img class='icon_img' src='../img/icon_txt_black.png'></img>");
	x = x.replace(/\[黒\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_00.png'></img>");
	x = x.replace(/\[黒\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_01.png'></img>");
	x = x.replace(/\[黒\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_02.png'></img>");
	x = x.replace(/\[黒\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_03.png'></img>");
	x = x.replace(/\[黒\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_04.png'></img>");
	x = x.replace(/\[黒\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_black_05.png'></img>");

	x = x.replace(/《白2》/g, "<img class='icon_img' src='../img/icon_txt_white2.png'></img>");
	x = x.replace(/《白》/g, "<img class='icon_img' src='../img/icon_txt_white.png'></img>");
	x = x.replace(/【白】/g, "<img class='icon_img' src='../img/icon_txt_white.png'></img>");
	x = x.replace(/《白×0》/g, "<img class='icon_img' src='../img/icon_txt_white_00.png'></img>");
	x = x.replace(/《白×1》/g, "<img class='icon_img' src='../img/icon_txt_white_01.png'></img>");
	x = x.replace(/《白×2》/g, "<img class='icon_img' src='../img/icon_txt_white_02.png'></img>");
	x = x.replace(/\[白\]/g, "<img class='icon_img' src='../img/icon_txt_white.png'></img>");
	x = x.replace(/\[白\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_00.png'></img>");
	x = x.replace(/\[白\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_01.png'></img>");
	x = x.replace(/\[白\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_02.png'></img>");
	x = x.replace(/\[白\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_03.png'></img>");
	x = x.replace(/\[白\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_04.png'></img>");
	x = x.replace(/\[白\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_white_05.png'></img>");

	x = x.replace(/《無2》/g, "<img class='icon_img' src='../img/icon_txt_null2.png'></img>");
	x = x.replace(/《無》/g, "<img class='icon_img' src='../img/icon_txt_null.png'></img>");
	x = x.replace(/【無】/g, "<img class='icon_img' src='../img/icon_txt_null.png'></img>");
	x = x.replace(/《無×0》/g, "<img class='icon_img' src='../img/icon_txt_null_00.png'></img>");
	x = x.replace(/《無×1》/g, "<img class='icon_img' src='../img/icon_txt_null_01.png'></img>");
	x = x.replace(/《無×2》/g, "<img class='icon_img' src='../img/icon_txt_null_02.png'></img>");
	x = x.replace(/\[無\]/g, "<img class='icon_img' src='../img/icon_txt_null.png'></img>");
	x = x.replace(/\[無\(0\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_00.png'></img>");
	x = x.replace(/\[無\(1\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_01.png'></img>");
	x = x.replace(/\[無\(2\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_02.png'></img>");
	x = x.replace(/\[無\(3\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_03.png'></img>");
	x = x.replace(/\[無\(4\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_04.png'></img>");
	x = x.replace(/\[無\(5\)\]/g, "<img class='icon_img' src='../img/icon_txt_null_05.png'></img>");

	return x;
}

function showLimit(x){ return (x[LEVEL] == "2" ? "+" : "") + x[LIMIT]; }

function showTiming(x){
	return x.split(",").map(function(t){
		if(lang() == "TW"){
			if(t == "メインフェイズ") return "主要階段";
			if(t == "アタックフェイズ") return "攻擊階段";
			if(t == "スペルカットイン") return "魔法切入";
			return "";
		}
		return t;
	}).join("<br>");
}

function fmtUpdated(){
	try{
		var d = new Date(PRICE_INFO.updated); if(isNaN(d)) return '';
		var p = function(n){ return n < 10 ? '0' + n : '' + n; };
		return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
	}catch(e){ return ''; }
}

function priceCell(id){
	var info = (typeof PRICE_INFO !== 'undefined' && PRICE_INFO && PRICE_INFO.prices) ? PRICE_INFO.prices[id] : null;
	if(info && info.price != null){
		var t = info.price.toLocaleString('ja-JP') + " 円" + (info.sold_out ? " (在庫なし)" : "");
		return info.url ? '<a href="' + info.url + '" target="_blank" rel="noopener">' + t + '</a>' : t;
	}
	return '<span style="color:#888">―</span>';
}

/* ===== detail: same fields per card type as function.js showInfotable() ===== */
function infoTable(d){
	var rows = [];
	function r(label, v){ rows.push('<tr><th>' + label + '</th><td>' + v + '</td></tr>'); }
	function story(){ if(d[STORY] != "") r("ストーリー", d[STORY]); }
	function team(){ if(d[TEAM] != "") r("チーム", d[TEAM]); }
	var T = d[TYPE];
	r("略号", d[ID]);
	r("カード名", '<a href="https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=' + d[ID] + '" target="_blank" rel="noopener">' + d[NAME] + '</a>');
	r("価格 (yuyu-tei)", priceCell(d[ID]));
	r("カード種類", T);
	if(isPiece(T)){
		story(); r("色", d[COLOR]); r("コスト", d[COST]); r("使用タイミング", showTiming(d[TIMING]));
	} else if(T == "アーツ" || T == "アーツ クラフト"){
		r("色", d[COLOR]); r("コスト", d[COST]); r("使用タイミング", showTiming(d[TIMING]));
	} else if(T == "ルリグ"){
		r("カードタイプ", d[CLASS]); story(); r("色", d[COLOR]); r("レベル", d[LEVEL]); r("リミット", d[LIMIT]);
		if(d[COIN] != "") r("コイン", d[COIN]);
		if(d[NAME] != "未知の巫女 マユ" && d[NAME] != "扉の俯瞰者 ウトゥルス" && d[NAME] != "夢限 -A-") r("グロウコスト", d[COST]);
		team();
	} else if(T == "アシストルリグ"){
		r("カードタイプ", d[CLASS]); story(); r("色", d[COLOR]); r("レベル", d[LEVEL]); r("リミット", showLimit(d));
		r("グロウコスト", d[COST]); team(); r("使用タイミング", showTiming(d[TIMING]));
	} else if(T == "シグニ" || T == "シグニ クラフト" || T == "シグニ レゾナ/クラフト"){
		r("カードタイプ", d[CLASS]); story(); r("色", d[COLOR]); r("レベル", d[LEVEL]);
		if(d[ID] == "WXDi-P07-050") r("リミット", d[LIMIT]);
		r("パワー", d[POWER]);
		if(d[BAN] != "") rows.push('<tr class="ban"><th>制限カード</th><td>' + parseInt(d[BAN]) + '</td></tr>');
	} else {
		story(); r("色", d[COLOR]); r("コスト", d[COST]);
	}
	var txt = (lang() == "TW" && d[TW_TEXT] != "") ? d[TW_TEXT] : d[JP_TEXT];
	rows.push('<tr><td colspan="2">' + str_to_img(txt) + '</td></tr>');
	return '<table class="info">' + rows.join('') + '</table>';
}

function showDetail(idx){
	currentIdx = idx;
	var d = results[idx];
	el('detailTitle').textContent = d[ID];
	var cm = localStorage.getItem(d[ID] + "_WXcomment") || '';
	el('detailBody').innerHTML =
		'<div class="navrow"><button class="btn" id="prevCard"' + (idx <= 0 ? ' disabled' : '') + '>‹ 上一張</button>' +
		'<span class="note">' + (idx + 1) + ' / ' + results.length + '</span>' +
		'<button class="btn" id="nextCard"' + (idx >= results.length - 1 ? ' disabled' : '') + '>下一張 ›</button></div>' +
		'<img class="detail-img" src="' + esc(d[SRC]) + '" alt="' + esc(d[ID]) + '">' +
		infoTable(d) +
		'<div class="comment"><h3>註解（與 deckeditor 共用，可被關鍵字搜尋）</h3><textarea id="comment">' + esc(cm) + '</textarea>' +
		'<button class="btn" id="saveComment">更新</button></div>';
	el('detailBody').scrollTop = 0;
	el('prevCard').onclick = function(){ if(idx > 0) showDetail(idx - 1); };
	el('nextCard').onclick = function(){ if(idx < results.length - 1) showDetail(idx + 1); };
	el('saveComment').onclick = function(){
		var v = el('comment').value;
		if(v != '') localStorage.setItem(d[ID] + "_WXcomment", v); else localStorage.removeItem(d[ID] + "_WXcomment");
		this.textContent = '已儲存 ✓'; var b = this; setTimeout(function(){ b.textContent = '更新'; }, 1200);
	};
	openSheet('detailSheet');
}

window.__proto = {state: state, compute: compute, run: run, parseQuery: parseQuery};

/* ===== 安裝 App / service worker ===== */
var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); deferredPrompt = e; el('installBtn').style.display = 'inline-block'; });
el('installBtn').addEventListener('click', function(){ if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt = null; el('installBtn').style.display = 'none'; } });
if('serviceWorker' in navigator) window.addEventListener('load', function(){ navigator.serviceWorker.register('sw.js'); });
fromURL(); el('q').value = state.q; el('searchbox').classList.toggle('has', !!state.q);
applyTheme(); applyLang(); run();
})();
