/* WIXOSS カード検索 (PWA) — search-only port of js/function.js search() */
'use strict';
(function(){
var LANG_KEY = 'wxsearch_lang', THEME_KEY = 'wxsearch_theme';
var PAGE_SIZE = 60;
var results = [], shown = 0, currentIdx = -1;

function el(id){ return document.getElementById(id); }
function on(id){ return el(id).checked; }
function val(id){ return el(id).value; }
function lang(){ return localStorage.getItem(LANG_KEY) || 'JP'; }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

function isPiece(t){ return t == "ピース" || t == "ピース リレー" || t == "ピース クラフト"; }

/* ===== search: same conditions & order as function.js search() ===== */
function search(){
	var prod = val('selectProduct'), type = val('selectType'), fac = val('selectFaction'), lrigSel = val('selectLRIG');
	var text = val('textsearch'), lg = lang();
	var searchStr = text.toUpperCase();
	var anyLevel = on('level0') || on('level1') || on('level2') || on('level3') || on('level4');
	var colorKeys = [['red','赤'],['blue','青'],['green','緑'],['black','黒'],['white','白'],['nocolor','無']];
	var anyColor = colorKeys.some(function(k){ return on(k[0]); });
	var anyTiming = on('mainphase') || on('attackphase') || on('spellcutin');
	var teamFilter = !on('dreamteam') || !on('no_dreamteam');
	var comments = null;
	if(text.length != 0){
		comments = {};
		for(var k = 0; k < localStorage.length; k++){
			var key = localStorage.key(k);
			if(key && key.slice(-10) == '_WXcomment') comments[key.slice(0, -10)] = localStorage.getItem(key) || '';
		}
	}
	var out = [];
	for(var i = 0; i < cardData.length; i++){
		var c = cardData[i], T = c[TYPE];
		if(prod != 0 && c[ID].indexOf(prod) == -1) continue;
		if(type != 0 && c[CLASS].indexOf(type) == -1) continue;
		if(fac != 0 && c[CLASS].indexOf(fac) == -1) continue;
		if(lrigSel != 0){
			if(lrigSel == "タマ"){ if(c[CLASS] != "タマ" && c[CLASS] != "タマ/イオナ") continue; }
			else if(lrigSel == "イオナ"){ if(c[CLASS] != "イオナ" && c[CLASS] != "タマ/イオナ") continue; }
			else if(lrigSel == "タウィル"){ if(c[CLASS] != "タウィル" && c[CLASS] != "タウィル/ウムル") continue; }
			else if(lrigSel == "ウムル"){ if(c[CLASS] != "ウムル" && c[CLASS] != "タウィル/ウムル") continue; }
			else if(c[CLASS] != lrigSel) continue;
		}
		if(!on('lrig') && T == "ルリグ") continue;
		if(!on('assistlrig') && T == "アシストルリグ") continue;
		if(!on('piece')){
			if(isPiece(T)) continue;
		} else if(teamFilter && isPiece(T)){
			var useTeam = c[JP_TEXT].indexOf("【使用条件】【チーム】") != -1 || c[JP_TEXT].indexOf("【使用条件】【ドリームチーム】") != -1;
			if(on('no_dreamteam') && useTeam) continue;
			if(on('dreamteam') && !useTeam) continue;
		}
		if(!on('arts') && (T == "アーツ" || T == "アーツ クラフト")) continue;
		if(!on('signi') && (T == "シグニ" || T == "シグニ クラフト" || T == "シグニ レゾナ/クラフト")) continue;
		if(teamFilter){
			var hasTeam = c[JP_TEXT].indexOf("【チーム】") != -1 || c[JP_TEXT].indexOf("【ドリームチーム】") != -1;
			if(on('no_dreamteam') && hasTeam) continue;
			if(on('dreamteam') && !hasTeam) continue;
		}
		if(!on('spell') && (T == "スペル" || T == "スペル クラフト")) continue;
		if(anyLevel){
			var skip = false;
			for(var lv = 0; lv <= 4; lv++){ if(!on('level' + lv) && c[LEVEL] == String(lv)) skip = true; }
			if(skip) continue;
		}
		if(!on('multicolor')){
			if(anyColor){
				var hit = colorKeys.some(function(k){ return on(k[0]) && c[COLOR].indexOf(k[1]) != -1; });
				if(!hit) continue;
			}
		} else {
			if(c[COLOR].length == 1) continue;
			var miss = colorKeys.some(function(k){ return on(k[0]) && c[COLOR].indexOf(k[1]) == -1; });
			if(miss) continue;
		}
		if(anyTiming && (T == "アシストルリグ" || T.indexOf("ピース") != -1 || T.indexOf("アーツ") != -1)){
			var th = (on('mainphase') && c[TIMING].indexOf("メインフェイズ") != -1) ||
			         (on('attackphase') && c[TIMING].indexOf("アタックフェイズ") != -1) ||
			         (on('spellcutin') && c[TIMING].indexOf("スペルカットイン") != -1);
			if(!th) continue;
		}
		if(on('no_story') || on('dissona')){
			if(!on('no_story') && c[STORY] == "") continue;
			if(!on('dissona') && c[STORY] == "ディソナ") continue;
		}
		if(on('islb') || on('notlb')){
			if(!on('islb') && c[LB] == "1") continue;
			if(!on('notlb') && c[LB] != "1") continue;
		}
		if(text.length != 0){
			var matched = false, cm = comments[c[ID]] || '';
			for(var j = 0; j < BAN; j++){
				if(lg == "JP" && j == TW_TEXT) continue;
				if(lg == "TW" && j == JP_TEXT) continue;
				var dataStr = c[j].toUpperCase();
				if(dataStr.indexOf(searchStr) != -1){ matched = true; break; }
				if((searchStr.indexOf("コイン") != -1 || searchStr.indexOf("COIN") != -1) && dataStr.indexOf("◎") != -1){ matched = true; break; }
				if(cm.indexOf(searchStr) != -1){ matched = true; break; }
			}
			if(!matched) continue;
		}
		out.push(c);
	}
	return out;
}

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

/* ===== results grid ===== */
function cardTile(c, idx){
	return '<button class="card" data-idx="' + idx + '"><div class="imgwrap"><img loading="lazy" decoding="async" src="' + esc(c[SRC]) + '" alt=""></div>' +
		'<div class="cap"><div class="cid">' + esc(c[ID]) + '</div><div class="cname">' + esc(c[NAME]) + '</div></div></button>';
}
function renderMore(){
	if(shown >= results.length) return;
	var end = Math.min(shown + PAGE_SIZE, results.length), html = '';
	for(var i = shown; i < end; i++) html += cardTile(results[i], i);
	el('grid').insertAdjacentHTML('beforeend', html);
	shown = end;
}
function run(){
	results = search();
	shown = 0;
	el('grid').innerHTML = results.length ? '' : '<div class="empty">沒有符合條件的卡片</div>';
	renderMore();
	el('count').textContent = results.length + ' / ' + cardData.length + ' 張';
	el('count2').textContent = results.length;
	updateBadge();
	window.scrollTo(0, 0);
}
var timer = null;
function runLater(){ clearTimeout(timer); timer = setTimeout(run, 200); }

/* ===== filter defaults (checkall / uncheckall semantics of the original) ===== */
var CHECK_IDS = ['lrig','assistlrig','piece','arts','signi','spell','level0','level1','level2','level3','level4',
	'white','red','blue','green','black','nocolor','multicolor','mainphase','attackphase','spellcutin',
	'no_story','dissona','islb','notlb','dreamteam','no_dreamteam'];
var SELECT_IDS = ['selectProduct','selectLRIG','selectType','selectFaction'];
function resetAll(){ CHECK_IDS.forEach(function(id){ el(id).checked = id != 'multicolor'; }); SELECT_IDS.forEach(function(id){ el(id).value = '0'; }); }
function uncheckAll(){ CHECK_IDS.forEach(function(id){ el(id).checked = false; }); SELECT_IDS.forEach(function(id){ el(id).value = '0'; }); }
function updateBadge(){
	var n = CHECK_IDS.filter(function(id){ return el(id).checked != (id != 'multicolor'); }).length +
	        SELECT_IDS.filter(function(id){ return el(id).value != '0'; }).length;
	var b = el('filterBadge'); b.hidden = !n; b.textContent = n;
}

/* ===== sheets + Android back button ===== */
var openStack = [];
function openSheet(id){
	var s = el(id);
	if(!s.classList.contains('open')){ s.classList.add('open'); openStack.push(id); history.pushState({sheet: id}, ''); document.body.style.overflow = 'hidden'; }
}
function closeTop(){
	var id = openStack.pop(); if(id) el(id).classList.remove('open');
	if(!openStack.length) document.body.style.overflow = '';
}
window.addEventListener('popstate', closeTop);
document.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', function(){ if(openStack.length) history.back(); }); });

/* ===== language / theme ===== */
function applyLang(){
	document.querySelectorAll('#langSeg button').forEach(function(b){ b.classList.toggle('on', b.dataset.lang == lang()); });
}
document.querySelectorAll('#langSeg button').forEach(function(b){
	b.addEventListener('click', function(){
		localStorage.setItem(LANG_KEY, b.dataset.lang); applyLang(); run();
		if(el('detailSheet').classList.contains('open') && currentIdx >= 0){ var d = results.length ? results[Math.min(currentIdx, results.length - 1)] : null; if(d){ history.back(); } }
	});
});
function applyTheme(){ var t = localStorage.getItem(THEME_KEY); if(t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; }
el('themeBtn').addEventListener('click', function(){
	var dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme == 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
	localStorage.setItem(THEME_KEY, dark ? 'light' : 'dark'); applyTheme();
});

/* ===== wiring ===== */
el('textsearch').addEventListener('input', function(){ el('searchbox').classList.toggle('has', !!this.value); runLater(); });
el('textsearch').addEventListener('keydown', function(e){ if(e.key == 'Enter'){ this.blur(); run(); } });
el('clearText').addEventListener('click', function(){ el('textsearch').value = ''; el('searchbox').classList.remove('has'); run(); });
CHECK_IDS.concat(SELECT_IDS).forEach(function(id){ el(id).addEventListener('change', runLater); });
el('filterBtn').addEventListener('click', function(){ openSheet('filterSheet'); });
el('resetAll').addEventListener('click', function(){ resetAll(); run(); });
el('uncheckAll').addEventListener('click', function(){ uncheckAll(); run(); });
el('grid').addEventListener('click', function(e){ var t = e.target.closest('.card'); if(t) showDetail(+t.dataset.idx); });
new IntersectionObserver(function(en){ if(en[0].isIntersecting) renderMore(); }, {rootMargin: '800px'}).observe(el('sentinel'));

var upd = fmtUpdated();
if(upd) el('priceUpdated').textContent = '卡價來源 yuyu-tei，最後更新：' + upd;

var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); deferredPrompt = e; el('installBtn').style.display = 'inline-block'; });
el('installBtn').addEventListener('click', function(){ if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt = null; el('installBtn').style.display = 'none'; } });
if('serviceWorker' in navigator) window.addEventListener('load', function(){ navigator.serviceWorker.register('sw.js'); });

window.__wxSearch = search;
applyTheme(); applyLang(); run();
})();
