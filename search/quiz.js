/* シグニ猜名測驗 — 移植自 ../name_quiz.html；題庫＝搜尋條件（app.js）的結果中的シグニ
 * 必須在 app.js 之前載入：app.js 每次搜尋後會呼叫 window.onSearchResults(RES) */
'use strict';
(function(){
var CROP = 0.88;        // 遮住卡名：只顯示下方 88%
var EFFECT_TOP = 0.69;  // 遮住效果：切掉 69% 以下（效果、風味文、パワー）
var HIDE_KEY = 'wixoss_quiz_hide';   // 與 name_quiz.html 共用
var pool = [], bag = [], current = null, revealed = true, poolSig = '';
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

function isSigniCard(c){
	if(c[TYPE] == "シグニ") return true;
	return c[TYPE].indexOf("シグニ") == 0 && c[TYPE].indexOf("レゾナ") != -1;
}
function originOf(c){ if(typeof SIGNI_ORIGIN === 'undefined') return null; return SIGNI_ORIGIN.byId[c[ID]] || SIGNI_ORIGIN.byName[c[NAME]] || null; }
function shuffle(a){ for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

function updatePoolInfo(){
	var info = $('poolInfo');
	if(!pool.length){ info.textContent = '題庫 0 張'; return; }
	info.textContent = '題庫 ' + pool.length + ' 張・第 ' + (pool.length - bag.length) + ' / ' + pool.length + ' 題';
}
function setButtons(on){ ['btnReveal','btnNext','btnComment','comment'].forEach(function(id){ $(id).disabled = !on; }); }

// app.js 每次搜尋完呼叫；結果集合改變才重新出題
window.onSearchResults = function(RES){
	var next = RES.map(function(x){ return x.c; }).filter(function(c){ return isSigniCard(c) && c[SRC]; });
	var sig = next.map(function(c){ return c[ID]; }).join();
	if(sig == poolSig) return;
	poolSig = sig; pool = next; bag = [];
	if(!pool.length){
		current = null;
		$('cardInner').style.display = 'none';
		$('placeholder').textContent = '沒有符合條件的シグニ';
		$('placeholder').style.display = '';
		$('answer').classList.remove('show'); $('answer').innerHTML = '';
		$('comment').value = '';
		setButtons(false); updatePoolInfo();
		return;
	}
	nextCard();
};

function nextCard(){
	if(!pool.length) return;
	if(!bag.length){
		bag = shuffle(pool.slice());
		if(current && bag.length > 1 && bag[bag.length - 1] === current) bag.unshift(bag.pop());  // 重洗後不立刻重複
	}
	current = bag.pop();
	revealed = false;
	$('cardFrame').classList.remove('revealed');
	setFrameRatio();
	$('answer').classList.remove('show'); $('answer').innerHTML = '';
	$('placeholder').textContent = '讀取中…'; $('placeholder').style.display = '';
	$('cardInner').style.display = 'none';
	$('quizImg').src = current[SRC];
	setButtons(true); $('btnReveal').disabled = false;
	$('comment').value = localStorage.getItem(current[ID] + '_WXcomment') || '';
	updatePoolInfo();
}
function revealCard(){
	if(!current || revealed) return;
	revealed = true;
	$('cardFrame').classList.add('revealed');
	setFrameRatio();
	var og = originOf(current);
	$('answer').innerHTML = '<div class="nm">' + esc(current[NAME]) + '</div>' +
		(og && og[0] ? '<span class="origin">語源：' + esc(og[0]) + '</span>' : '') +
		(og && og[1] ? '<span class="etymology">' + esc(og[1]) + '</span>' : '') +
		'<small>' + esc(current[ID] + '　' + current[CLASS] + '　Lv' + current[LEVEL] + '　' + current[COLOR]) + '</small>';
	$('answer').classList.add('show');
	$('btnReveal').disabled = true;
}
function setFrameRatio(){
	var img = $('quizImg');
	if(!img.naturalWidth) return;
	var cutTop = (!revealed && $('hideName').checked) ? (1 - CROP) : 0;
	var cutBottom = (!revealed && $('hideEffect').checked) ? (1 - EFFECT_TOP) : 0;
	var visible = 1 - cutTop - cutBottom;
	$('cardFrame').style.aspectRatio = img.naturalWidth + ' / ' + (img.naturalHeight * visible);
	$('cardInner').style.top = (-cutTop / visible * 100) + '%';
}
function applyHideOptions(){
	$('cardFrame').classList.toggle('hide-name', $('hideName').checked);
	$('cardFrame').classList.toggle('hide-effect', $('hideEffect').checked);
	setFrameRatio();
	try{ localStorage.setItem(HIDE_KEY, JSON.stringify({name: $('hideName').checked, effect: $('hideEffect').checked})); }catch(e){}
}

try{ var hs = JSON.parse(localStorage.getItem(HIDE_KEY) || 'null'); if(hs){ $('hideName').checked = !!hs.name; $('hideEffect').checked = !!hs.effect; } }catch(e){}
$('hideName').addEventListener('change', applyHideOptions);
$('hideEffect').addEventListener('change', applyHideOptions);
applyHideOptions();
$('quizImg').addEventListener('load', function(){ setFrameRatio(); $('placeholder').style.display = 'none'; $('cardInner').style.display = ''; });
$('quizImg').addEventListener('error', function(){ $('placeholder').textContent = '圖片載入失敗，請按「下一張」'; $('placeholder').style.display = ''; $('cardInner').style.display = 'none'; });
$('btnReveal').addEventListener('click', revealCard);
$('btnNext').addEventListener('click', nextCard);
$('cardFrame').addEventListener('click', function(){ if(!current) return; if(!revealed) revealCard(); else nextCard(); });
$('btnComment').addEventListener('click', function(){
	if(!current) return;
	var v = $('comment').value;
	if(v != '') localStorage.setItem(current[ID] + '_WXcomment', v); else localStorage.removeItem(current[ID] + '_WXcomment');
	var b = this; b.textContent = '已儲存 ✓'; setTimeout(function(){ b.textContent = '更新'; }, 1200);
});
document.addEventListener('keydown', function(e){
	var t = e.target.tagName;
	if(t == 'INPUT' || t == 'SELECT' || t == 'TEXTAREA') return;
	if(e.key == ' ' || e.code == 'Space'){ e.preventDefault(); if(!current) return; if(!revealed) revealCard(); else nextCard(); }
});
window.__quiz = {pool: function(){ return pool; }, current: function(){ return current; }, revealed: function(){ return revealed; }};
})();
