/* ===== function_allstar.js — generated from function.js by allstar/build_function_allstar.py =====
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
var ARTS_MAX_SIZE = 9;

// === big_pic lock (hold ALT to freeze the preview) ===
// Robust against browsers that hijack ALT for the menu bar:
//   1. preventDefault() on plain ALT keydown so the browser menu does not steal focus.
//   2. Sync lock state from EVERY mouse / keyboard event's e.altKey, not just keyup.
//      This way a missed keyup (e.g. window switched while ALT was down) self-heals
//      on the next mouse move.
var bigPicLocked = false;
(function setupBigPicAltLock(){
	function setLocked(v){
		if(v === bigPicLocked) return;
		bigPicLocked = v;
		document.body.classList.toggle('bigpic-locked', v);
	}
	function sync(e){ setLocked(!!e.altKey); }

	// Capture-phase so we beat other handlers and can preventDefault before
	// the browser routes ALT to the menu bar.
	window.addEventListener('keydown', function(e){
		// Only swallow plain ALT (no other modifier keys, no other key together)
		if((e.key === 'Alt' || e.keyCode === 18) && !e.ctrlKey && !e.shiftKey && !e.metaKey){
			e.preventDefault();
		}
		sync(e);
	}, true);
	window.addEventListener('keyup',   sync, true);

	// Mouse events always carry a fresh altKey — use them to self-heal a stuck lock.
	window.addEventListener('mousemove', sync, true);
	window.addEventListener('mouseover', sync, true);
	window.addEventListener('mousedown', sync, true);

	// If the page loses keyboard input entirely (alt-tab, etc.), release the lock
	// so it doesn't stay frozen forever. (Mouse events that follow will re-lock
	// instantly if ALT is somehow still down.)
	window.addEventListener('blur', function(){ setLocked(false); });
})();

function autoResize() {
	this.style.height = '12px';
	this.style.height = this.scrollHeight + 'px';
}

function setComment(id) {
	if($("#comment").val() != '')
	{
		asStore.setItem(id + "_WXcomment", $("#comment").val());
	}
	else
	{
		asStore.removeItem(id + "_WXcomment");
	}
}

function commentEvent() {
	const textarea = document.getElementById('comment');
	textarea.addEventListener('input', autoResize);
	autoResize.call(textarea);
}

function onLoading()
{
	var i = 0;
	
	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		rdeckArr.push(cardData[i]);
	}

	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
	if(document.getElementById('commentFileinput'))
	{
		document.getElementById('commentFileinput').addEventListener('change', readSingleCommentFile, false);
	}
	showInfotable("init");

	$("#textsearch").keydown(function(event) {
	    if(event.keyCode == 13){
	        search();
	    };
	});

	onloaddeck();
}

function onloaddeck()
{
	try { deckNamelist = JSON.parse(asStore.getItem("DeckNameList")); }
	catch(e) { deckNamelist = String(asStore.getItem("DeckNameList") || "").split(",").filter(function(x){ return x; }); }
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

function showrdeck()
{
	var i = 0;
	var max = 0;

	for(i = 0; i < 10; i++)
	{
		$("#rdeck_" + i).attr("src", "img/empty.jpg");
	}

	if(rdeckArr.length < (page + 1) * 10)
	{
		max = rdeckArr.length % 10;
	}
	else
	{
		max = 10;
	}

	for(i = 0; i < 10; i++)
	{
		if(i < max)
		{
			$("#rdeck_" + i).attr("src", rdeckArr[page * 10 + i][SRC]);
			$("#rdeck_" + i).attr("alt", rdeckArr[page * 10 + i][ID]);

			if(rdeckArr[page * 10 + i][TYPE] == "ピース" || rdeckArr[page * 10 + i][TYPE] == "キー" || 
				rdeckArr[page * 10 + i][TYPE] == "ピース リレー" || 
				rdeckArr[page * 10 + i][TYPE] == "ピース クラフト" || 
				rdeckArr[page * 10 + i][ID] == "PR-Di035" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-05" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-06" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-07" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-08" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-09" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CD1-10" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-001" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-002" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-003" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-004" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-005" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-006" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-007" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-008" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-025" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-026" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-027" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-028" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-029" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-030" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-031" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-032" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-033" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-034" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-035" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-036" ||
				rdeckArr[page * 10 + i][ID] == "WX25-CP1-037" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-001" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-002" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-003" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-004" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-005" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-006" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-007" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-008" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-009" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-010" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-011" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-012" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-013" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-014" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-015" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-016" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-017" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-018" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-019" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-020" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-021" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-022" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-023" ||
				rdeckArr[page * 10 + i][ID] == "WX26-CP1-024"
				)
			{
				$("#rdeck_" + i).attr("height", "90px");
				$("#rdeck_" + i).attr("width", "124px");
				$("#rdeck_" + i).attr("style", "margin-bottom: 41px");
			}
			else
			{
				$("#rdeck_" + i).attr("height", "172px");
				$("#rdeck_" + i).attr("width", "124px");
				$("#rdeck_" + i).attr("style", "margin-bottom: 0px");
			}
		}
		else
		{
			$("#rdeck_" + i).attr("height", "172px");
			$("#rdeck_" + i).attr("width", "124px");
			$("#rdeck_" + i).attr("style", "margin-bottom: 0px");
			$("#rdeck_" + i).attr("src", "img/empty.jpg");
			$("#rdeck_" + i).attr("alt", "");
		}
	}

	$("#totalCard").html(rdeckArr.length);
	if(rdeckArr.length == 0)
	{
		$("#page").html("");
	}
	else
	{
		if(rdeckArr.length % 10 != 0)
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt((rdeckArr.length / 10) + 1));
		}
		else
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt(rdeckArr.length / 10));
		}
	}
}

function onmouseShow(x, source)
{
	var i = 0;

	// Locked (ALT held): keep current big_pic content and visibility frozen.
	if(bigPicLocked) { return; }
	// 空白欄位：不影響目前預覽
	if(!x.alt) return;

	// 記住預覽來源：從牌組來的預覽，點大圖＝替換那一張的卡圖（不是再加一張）
	bigPicSource = source;
	bigPicTile = (source == 'deck') ? x : null;

	if(source == 'search')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 40px');
	}
	else if(source == 'deck')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 960px');
	}

	if(x.alt)
	{
		$("#cardinformation").css("visibility", "visible");
		
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				$("#info_name").html(cardData[i][ID]);

				break;
			}
		}

		$("#big_pic").attr("src", cardData[i][SRC]);
		$("#big_pic").attr("alt", cardData[i][ID]);
		// 牌組裡的同名卡圖：預覽顯示該卡圖
		if(source == 'deck' && x.getAttribute && /takaratomy|img\/[A-Za-z0-9-]+\.jpg$/.test(x.getAttribute('src') || '') && !/_rotate|empty/.test(x.getAttribute('src') || ''))
		{
			$("#big_pic").attr("src", x.getAttribute('src'));
		}

		if(cardData[i][TYPE] == "ピース" ||
			cardData[i][TYPE] == "キー" ||
			cardData[i][TYPE] == "ピース リレー" ||
			cardData[i][TYPE] == "ピース クラフト" ||
			cardData[i][ID] == "PR-Di035" ||
			cardData[i][ID] == "WX25-CD1-05" ||
			cardData[i][ID] == "WX25-CD1-06" ||
			cardData[i][ID] == "WX25-CD1-07" ||
			cardData[i][ID] == "WX25-CD1-08" ||
			cardData[i][ID] == "WX25-CD1-09" ||
			cardData[i][ID] == "WX25-CD1-10" ||
			cardData[i][ID] == "WX25-CP1-001" ||
			cardData[i][ID] == "WX25-CP1-002" ||
			cardData[i][ID] == "WX25-CP1-003" ||
			cardData[i][ID] == "WX25-CP1-004" ||
			cardData[i][ID] == "WX25-CP1-005" ||
			cardData[i][ID] == "WX25-CP1-006" ||
			cardData[i][ID] == "WX25-CP1-007" ||
			cardData[i][ID] == "WX25-CP1-008" ||
			cardData[i][ID] == "WX25-CP1-025" ||
			cardData[i][ID] == "WX25-CP1-026" ||
			cardData[i][ID] == "WX25-CP1-027" ||
			cardData[i][ID] == "WX25-CP1-028" ||
			cardData[i][ID] == "WX25-CP1-029" ||
			cardData[i][ID] == "WX25-CP1-030" ||
			cardData[i][ID] == "WX25-CP1-031" ||
			cardData[i][ID] == "WX25-CP1-032" ||
			cardData[i][ID] == "WX25-CP1-033" ||
			cardData[i][ID] == "WX25-CP1-034" ||
			cardData[i][ID] == "WX25-CP1-035" ||
			cardData[i][ID] == "WX25-CP1-036" ||
			cardData[i][ID] == "WX25-CP1-037" ||
			cardData[i][ID] == "WX26-CP1-001" ||
			cardData[i][ID] == "WX26-CP1-002" ||
			cardData[i][ID] == "WX26-CP1-003" ||
			cardData[i][ID] == "WX26-CP1-004" ||
			cardData[i][ID] == "WX26-CP1-005" ||
			cardData[i][ID] == "WX26-CP1-006" ||
			cardData[i][ID] == "WX26-CP1-007" ||
			cardData[i][ID] == "WX26-CP1-008" ||
			cardData[i][ID] == "WX26-CP1-009" ||
			cardData[i][ID] == "WX26-CP1-010" ||
			cardData[i][ID] == "WX26-CP1-011" ||
			cardData[i][ID] == "WX26-CP1-012" ||
			cardData[i][ID] == "WX26-CP1-013" ||
			cardData[i][ID] == "WX26-CP1-014" ||
			cardData[i][ID] == "WX26-CP1-015" ||
			cardData[i][ID] == "WX26-CP1-016" ||
			cardData[i][ID] == "WX26-CP1-017" ||
			cardData[i][ID] == "WX26-CP1-018" ||
			cardData[i][ID] == "WX26-CP1-019" ||
			cardData[i][ID] == "WX26-CP1-020" ||
			cardData[i][ID] == "WX26-CP1-021" ||
			cardData[i][ID] == "WX26-CP1-022" ||
			cardData[i][ID] == "WX26-CP1-023" ||
			cardData[i][ID] == "WX26-CP1-024"
			)
		{
			$("#big_pic").attr("height", "252px");
			$("#big_pic").attr("width", "360px");
		}
		else
		{
			$("#big_pic").attr("height", "504px");
			$("#big_pic").attr("width", "360px");
		}

		showInfotable(source == 'deck' ? deckRowForTile(x, cardData[i]) : cardData[i]);
	}
	else
	{
		$("#big_pic").attr("height", "504px");
		$("#big_pic").attr("width", "360px");
		$("#big_pic").attr("src", "img/card_back.jpg");
		$("#cardinformation").css("visibility", "hidden");
	}
}

function showInfotable(data)
{
	// 同名卡圖：牌組裡選了其他卡圖時，略号／カード名連結／価格顯示該卡圖的卡號；註解仍以原卡號存取
	var infoBaseId = (typeof data === "string") ? data : data[ID];
	if(typeof data !== "string" && data[ART])
	{
		data = data.slice();
		data[ID] = data[ART];
	}
	var str = "";
	if(data == "init")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data + "\" target=\"_blank\">" + data + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data;
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "ピース" || data[TYPE] == "ピース リレー" || data[TYPE] == "ピース クラフト")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		if(data[STORY] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		ストーリー";
			str += "	</td>";
			str += "	<td>";
			str += data[STORY];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += showTiming(data[TIMING]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "アーツ" || data[TYPE] == "アーツ クラフト")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += showTiming(data[TIMING]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "ルリグ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		if(data[STORY] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		ストーリー";
			str += "	</td>";
			str += "	<td>";
			str += data[STORY];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		リミット";
		str += "	</td>";
		str += "	<td>";
		str += data[LIMIT];
		str += "	</td>";
		str += "</tr>";

		if(data[COIN] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		コイン";
			str += "	</td>";
			str += "	<td>";
			str += data[COIN];
			str += "	</td>";
			str += "</tr>";
		}

		if(data[NAME] != "未知の巫女 マユ" && data[NAME] != "扉の俯瞰者 ウトゥルス" && data[NAME] != "夢限 -A-")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		グロウコスト";
			str += "	</td>";
			str += "	<td>";
			str += data[COST];
			str += "	</td>";
			str += "</tr>";
		}

		if(data[TEAM] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		チーム";
			str += "	</td>";
			str += "	<td>";
			str += data[TEAM];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td colspan=\"2\">";

		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "アシストルリグ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		if(data[STORY] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		ストーリー";
			str += "	</td>";
			str += "	<td>";
			str += data[STORY];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		リミット";
		str += "	</td>";
		str += "	<td>";
		str += showLimit(data);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		グロウコスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		if(data[TEAM] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		チーム";
			str += "	</td>";
			str += "	<td>";
			str += data[TEAM];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		使用タイミング";
		str += "	</td>";
		str += "	<td>";
		str += showTiming(data[TIMING]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		
		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}

	else if(data[TYPE] == "シグニ" || data[TYPE] == "シグニ クラフト" || data[TYPE] == "シグニ レゾナ/クラフト" || data[TYPE] == "レゾナ")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[CLASS];
		str += "	</td>";
		str += "</tr>";

		if(data[STORY] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		ストーリー";
			str += "	</td>";
			str += "	<td>";
			str += data[STORY];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		レベル";
		str += "	</td>";
		str += "	<td>";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		if(infoBaseId == "WXDi-P07-050")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		リミット";
			str += "	</td>";
			str += "	<td>";
			str += data[LIMIT];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		パワー";
		str += "	</td>";
		str += "	<td>";
		str += data[POWER];
		str += "	</td>";
		str += "</tr>";

		if(data[BAN] != "")
		{
			str += "<tr style='background: red;'>";
			str += "	<td>";
			str += "		制限カード";
			str += "	</td>";
			str += "	<td>";
			str += parseInt(data[BAN]);
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		
		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}

	else
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		略号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += "<a href=\"https://www.takaratomy.co.jp/products/wixoss/card_list.php?card=card_detail&card_no=" + data[ID] + "\" target=\"_blank\">" + data[NAME] + "</a>";
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		if(data[STORY] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		ストーリー";
			str += "	</td>";
			str += "	<td>";
			str += data[STORY];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data[COLOR];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		
		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}

		str += "	</td>";
		str += "</tr>";
	}

	var commetStr = asStore.getItem(infoBaseId + "_WXcomment");

	if(commetStr == null)
	{
		commetStr = "";
	}

	str += "<tr>";
	str += "	<td colspan=\"2\">";
	str += "		<textarea id=\"comment\" style=\"vertical-align: middle; overflow:hidden; resize:none; width:285px\">" + commetStr + "</textarea>";
	str += "		<button style=\"vertical-align: middle;border-radius: 0px;height: 30px\" onclick=\"setComment('" + infoBaseId + "');\">更新</button>";
	str += "	</td>";
	str += "</tr>";

	$("#infoTable").html(str);
	commentEvent();
}

function showTiming(x)
{
	var tmpArr = [];
	var str = "";
	var i = 0;

	tmpArr = x.split(",");

	for(i = 0; i < tmpArr.length; i++)
	{
		if( i !=0 )
		{
			str += "<br>";
		}
		if($("#selectLang").val() == "TW")
		{
			if(tmpArr[i] == "メインフェイズ")
			{
				str += "主要階段";
			}
			else if(tmpArr[i] == "アタックフェイズ")
			{
				str += "攻擊階段";
			}
			else if(tmpArr[i] == "スペルカットイン")
			{
				str += "魔法切入";
			}
		}
		else
		{
			str += tmpArr[i];
		}
	}
	
	return str;
}

function showLdeck()
{
	for(i = 0; i < 10; i++)
	{
		if(i < ldeckArr.length)
		{
			$("#ldeck_" + i).attr("src", ldeckArr[i][SRC]);
			$("#ldeck_" + i).attr("alt", ldeckArr[i][ID]);
		}
		else
		{
			$("#ldeck_" + i).attr("src", "img/empty.jpg");
			$("#ldeck_" + i).attr("alt", "");
		}
	}

}

function showPdeck()
{
	for(i = 0; i < 2; i++)
	{
		if(i < pdeckArr.length)
		{
			$("#pdeck_" + i).attr("src", pdeckArr[i][SRC]);
			$("#pdeck_" + i).attr("alt", pdeckArr[i][ID]);

			$("#show_pdeck_" + i).attr("src", pdeckArr[i][SRC]);
			$("#show_pdeck_" + i).attr("alt", pdeckArr[i][ID]);

			$("#show_pdeck_" + i).show();
		}
		else
		{
			$("#pdeck_" + i).attr("src", "img/empty.jpg");
			$("#pdeck_" + i).attr("alt", "");

			$("#show_pdeck_" + i).attr("src", "img/empty.jpg");
			$("#show_pdeck_" + i).attr("alt", "");

			$("#show_pdeck_" + i).hide();
		}
	}

}

function showAdeck()
{
	for(i = 0; i < ARTS_MAX_SIZE; i++)
	{
		if(i < adeckArr.length)
		{
			if(adeckArr[i][ID] == "PR-Di035" ||
				adeckArr[i][ID] == "WX25-CD1-05" ||
				adeckArr[i][ID] == "WX25-CD1-06" ||
				adeckArr[i][ID] == "WX25-CD1-07" ||
				adeckArr[i][ID] == "WX25-CD1-08" ||
				adeckArr[i][ID] == "WX25-CD1-09" ||
				adeckArr[i][ID] == "WX25-CD1-10" ||
				adeckArr[i][ID] == "WX25-CP1-001" ||
				adeckArr[i][ID] == "WX25-CP1-002" ||
				adeckArr[i][ID] == "WX25-CP1-003" ||
				adeckArr[i][ID] == "WX25-CP1-004" ||
				adeckArr[i][ID] == "WX25-CP1-005" ||
				adeckArr[i][ID] == "WX25-CP1-006" ||
				adeckArr[i][ID] == "WX25-CP1-007" ||
				adeckArr[i][ID] == "WX25-CP1-008" ||
				adeckArr[i][ID] == "WX25-CP1-025" ||
				adeckArr[i][ID] == "WX25-CP1-026" ||
				adeckArr[i][ID] == "WX25-CP1-027" ||
				adeckArr[i][ID] == "WX25-CP1-028" ||
				adeckArr[i][ID] == "WX25-CP1-029" ||
				adeckArr[i][ID] == "WX25-CP1-030" ||
				adeckArr[i][ID] == "WX25-CP1-031" ||
				adeckArr[i][ID] == "WX25-CP1-032" ||
				adeckArr[i][ID] == "WX25-CP1-033" ||
				adeckArr[i][ID] == "WX25-CP1-034" ||
				adeckArr[i][ID] == "WX25-CP1-035" ||
				adeckArr[i][ID] == "WX25-CP1-036" ||
				adeckArr[i][ID] == "WX25-CP1-037" ||
				adeckArr[i][ID] == "WX26-CP1-001" ||
				adeckArr[i][ID] == "WX26-CP1-002" ||
				adeckArr[i][ID] == "WX26-CP1-003" ||
				adeckArr[i][ID] == "WX26-CP1-004" ||
				adeckArr[i][ID] == "WX26-CP1-005" ||
				adeckArr[i][ID] == "WX26-CP1-006" ||
				adeckArr[i][ID] == "WX26-CP1-007" ||
				adeckArr[i][ID] == "WX26-CP1-008" ||
				adeckArr[i][ID] == "WX26-CP1-009" ||
				adeckArr[i][ID] == "WX26-CP1-010" ||
				adeckArr[i][ID] == "WX26-CP1-011" ||
				adeckArr[i][ID] == "WX26-CP1-012" ||
				adeckArr[i][ID] == "WX26-CP1-013" ||
				adeckArr[i][ID] == "WX26-CP1-014" ||
				adeckArr[i][ID] == "WX26-CP1-015" ||
				adeckArr[i][ID] == "WX26-CP1-016" ||
				adeckArr[i][ID] == "WX26-CP1-017" ||
				adeckArr[i][ID] == "WX26-CP1-018" ||
				adeckArr[i][ID] == "WX26-CP1-019" ||
				adeckArr[i][ID] == "WX26-CP1-020" ||
				adeckArr[i][ID] == "WX26-CP1-021" ||
				adeckArr[i][ID] == "WX26-CP1-022" ||
				adeckArr[i][ID] == "WX26-CP1-023" ||
				adeckArr[i][ID] == "WX26-CP1-024"
			)
			{
				$("#adeck_" + i).attr("src", "img/" + adeckArr[i][ID] + "_rotate.jpg");
			}
			else
			{
				$("#adeck_" + i).attr("src", adeckArr[i][SRC]);
			}
			$("#adeck_" + i).attr("alt", adeckArr[i][ID]);

			// $("#show_pdeck_" + i).attr("src", pdeckArr[i][SRC]);
			// $("#show_pdeck_" + i).attr("alt", pdeckArr[i][ID]);

			// $("#show_pdeck_" + i).show();
		}
		else
		{
			$("#adeck_" + i).attr("src", "img/empty.jpg");
			$("#adeck_" + i).attr("alt", "");

			// $("#show_pdeck_" + i).attr("src", "img/empty.jpg");
			// $("#show_pdeck_" + i).attr("alt", "");

			// $("#show_pdeck_" + i).hide();
		}
	}

}

function showSdeck()
{
	var over = 0, lbcount = 0, nolbcount = 0, lbindex = 0, nolbindex = 0;

	if(sort_method == 0)
	{
		for(i = 0; i < 40; i++)
		{
			if(i < sdeckArr.length)
			{
				$("#sdeck_" + i).attr("src", sdeckArr[i][SRC]);
				$("#sdeck_" + i).attr("alt", sdeckArr[i][ID]);
			}
			else
			{
				$("#sdeck_" + i).attr("src", "img/empty.jpg");
				$("#sdeck_" + i).attr("alt", "");
			}
		}
	}
	else
	{
		updateLBarray();

		lbcount = sdeckLBArr.length;
		nolbcount = sdecknoLBArr.length

		for(i = 0; i < 40; i++)
		{
			$("#sdeck_" + i).attr("src", "img/empty.jpg");
			$("#sdeck_" + i).attr("alt", "");
		}

		for(i = 0; i < 40; i++)
		{
			if(lbcount > 0 && lbindex < 40 && i < sdeckArr.length)
			{
				if(sdeckArr[i][LB] == "1")
				{
					$("#sdeck_" + lbindex).attr("src", sdeckArr[i][SRC]);
					$("#sdeck_" + lbindex).attr("alt", sdeckArr[i][ID]);

					lbindex++;
					lbcount--;

					if(lbindex % 5 == 0)
					{
						lbindex += 5;
					}
				}
			}
		}

		nolbindex = 5;

		for(i = 0; i < sdeckArr.length; i++)
		{
			if(nolbcount > 0 && nolbindex < 40 && i < sdeckArr.length)
			{
				if(sdeckArr[i][LB] != "1")
				{
					$("#sdeck_" + nolbindex).attr("src", sdeckArr[i][SRC]);
					$("#sdeck_" + nolbindex).attr("alt", sdeckArr[i][ID]);

					nolbindex++;
					nolbcount--;

					if(nolbindex % 10 == 0)
					{
						nolbindex += 5;
					}
				}
			}
		}

		if(sdeckLBArr.length > 20)
		{
			for(i = 0; i < sdeckArr.length; i++)
			{
				if(sdeckArr[i][LB] == "1")
				{
					over++;

					if(over > 20)
					{
						$("#sdeck_" + nolbindex).attr("src", sdeckArr[i][SRC]);
						$("#sdeck_" + nolbindex).attr("alt", sdeckArr[i][ID]);

						nolbindex++;

						if(nolbindex % 10 == 0)
						{
							nolbindex += 5;
						}
					}
				}
			}
		}
		else if(sdecknoLBArr.length > 20)
		{
			for(i = 0; i < sdeckArr.length; i++)
			{
				if(sdeckArr[i][LB] != "1")
				{
					over++;

					if(over > 20)
					{
						$("#sdeck_" + lbindex).attr("src", sdeckArr[i][SRC]);
						$("#sdeck_" + lbindex).attr("alt", sdeckArr[i][ID]);

						lbindex++;

						if(lbindex % 5 == 0)
						{
							lbindex += 5;
						}
					}
				}
			}
		}
	}

	refreshShowSdeck();

	updatechart();

}

/**
 * Refresh the DECK VIEW popup (#show_sdeck_) so its arrangement mirrors the
 * main deck (#sdeck_) exactly. The popup simply copies whatever the main grid
 * currently shows — including the 5 LB + 5 non-LB interleaved layout used
 * when sort_method == 1 (LB Order). Called from showSdeck() so the popup
 * stays in sync whenever sorting or editing the deck.
 */
function refreshShowSdeck()
{
	var i = 0;
	var src, alt;

	for(i = 0; i < 40; i++)
	{
		src = $("#sdeck_" + i).attr("src");
		alt = $("#sdeck_" + i).attr("alt") || "";

		$("#show_sdeck_" + i).attr("src", src);
		$("#show_sdeck_" + i).attr("alt", alt);

		if(src && src !== "img/empty.jpg")
		{
			$("#show_sdeck_" + i).show();
		}
		else
		{
			$("#show_sdeck_" + i).hide();
		}
	}
}

function sortPdeck(x)
{
	var length = pdeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == pdeckArr[i][ID])
		{
			return;
		}
	}
	pdeckArr.push(x);

	showPdeck();
}

function sortAdeck(x)
{
	var length = adeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == adeckArr[i][ID])
		{
			return;
		}
	}
	adeckArr.push(x);

	showAdeck();
}

function sortLdeck(x)
{
	var i = 0;
	var updated = 0, same = 0;
	var length = ldeckArr.length;

	for(i = 0; i < length; i++)
	{
		if(x[ID] == ldeckArr[i][ID])
		{
			return;
		}
	}
	
	if(ldeckArr.length != 0)
	{
		for(i = 0; i < length; i++)
		{
			if(x[CLASS] == ldeckArr[i][CLASS])
			{
				same = 1;
				if(x[LEVEL] <= ldeckArr[i][LEVEL])
				{
					ldeckArr.splice(i, 0, x);
					updated = 1;
					break;
				}
			}

			if(same == 1 && x[CLASS] != ldeckArr[i][CLASS])
			{
				ldeckArr.splice(i, 0, x);
				updated = 1;
				break;
			}
		}
	}

	if(!updated)
	{
		ldeckArr.push(x);
	}

	showLdeck();
}

function showAlldeck()
{
	showLdeck();
	showPdeck();
	showAdeck();
	showSdeck();
}

function color2num(color)
{
	if(color == "白赤緑")
	{
		return 1;
	}
	else if(color == "赤白青")
	{
		return 2;
	}
	else if(color == "青白緑")
	{
		return 3;
	}
	else if(color == "青白黒")
	{
		return 4;
	}
	else if(color == "緑赤青")
	{
		return 5;
	}
	else if(color == "黒青緑")
	{
		return 6;
	}
	else if(color == "白赤緑")
	{
		return 7;
	}
	else if(color == "白赤")
	{
		return 8;
	}
	else if(color == "白青")
	{
		return 9;
	}
	else if(color == "白緑")
	{
		return 10;
	}
	else if(color == "白黒")
	{
		return 11;
	}
	else if(color == "赤青")
	{
		return 12;
	}
	else if(color == "青赤")
	{
		return 13;
	}
	else if(color == "赤緑")
	{
		return 14;
	}
	else if(color == "赤黒")
	{
		return 15;
	}
	else if(color == "青緑")
	{
		return 16;
	}
	else if(color == "緑黒")
	{
		return 17;
	}
	else if(color == "黒緑")
	{
		return 18;
	}
	else if(color == "白")
	{
		return 19;
	}
	else if(color == "赤")
	{
		return 20;
	}
	else if(color == "青")
	{
		return 21;
	}
	else if(color == "緑")
	{
		return 22;
	}
	else if(color == "黒")
	{
		return 23;
	}
	else //無
	{
		return 0;
	}
}

function type2num(type)
{
	if(type == "スペル")
	{
		return 1;
	}
	else //シグニ
	{
		return 0;
	}
}

function LB2num(LB)
{
	// LB 有 = 0 (排前面)，其餘 (含空白) 一律當作 LB 無
	if(LB == "1")
	{
		return 0;
	}
	else
	{
		return 1;
	}
}


function sortSdeck(x)
{
	var same_card = 0;
	var same_level = 0;
	var same_color = 0;
	var same_lb = 0;

	var updated = 0;
	var length = sdeckArr.length;

	if(sdeckArr.length != 0)
	{
		for(i = 0; i < length; i++)
		{
			if(x[NAME] == sdeckArr[i][NAME])
			{
				same_card++;
				if(x[BAN] != "")
				{
					if(same_card == x[BAN])
					{
						return;
					}
				}
				else
				{
					if(same_card == 4)
					{
						return;
					}
				}
				
			}
		}

		for(i = 0; i < length; i++)
		{
			if(x[ID] == sdeckArr[i][ID])
			{
				updated = 1;
				sdeckArr.splice(i, 0, x);
				break;
			}
		}

		for(i = 0; i < length && !updated; i++)
		{
			if(type2num(x[TYPE]) < type2num(sdeckArr[i][TYPE]))
			{
				updated = 1;
				sdeckArr.splice(i, 0, x);
				break;
			}
			else if(type2num(x[TYPE]) == type2num(sdeckArr[i][TYPE]))
			{
				if(x[LEVEL] < sdeckArr[i][LEVEL])
				{
					updated = 1;
					sdeckArr.splice(i, 0, x);
					break;
				}
				else if(x[LEVEL] == sdeckArr[i][LEVEL])
				{
					if(color2num(x[COLOR]) < color2num(sdeckArr[i][COLOR]))
					{
						updated = 1;
						sdeckArr.splice(i, 0, x);
						break;
					}
					else if(color2num(x[COLOR]) == color2num(sdeckArr[i][COLOR]))
					{
						if(LB2num(x[LB]) < LB2num(sdeckArr[i][LB]))
						{
							updated = 1;
							sdeckArr.splice(i, 0, x);
							break;
						}
						else if(LB2num(x[LB]) == LB2num(sdeckArr[i][LB]))
						{
							if(x[ID] < sdeckArr[i][ID])
							{
								updated = 1;
								sdeckArr.splice(i, 0, x);
								break;
							}
						}
					}

				}
			}
		}
	}

	if(!updated)
	{
		sdeckArr.push(x);
	}

	addcounter(x);
	showSdeck();
}

function updatechart()
{
	if(sdeckArr.length != 0)
	{
		$("#leveldiv").show();
		levelobj.data.labels = ['L1: ' + sdeck_l1, 'L2: ' + sdeck_l2, 'L3: ' + sdeck_l3, 'spell: ' + sdeck_spell];
		levelobj.data.datasets[0].data = [sdeck_l1, sdeck_l2, sdeck_l3, sdeck_spell];
		levelobj.update();

		// $("#show_leveldiv").show();
		// show_levelobj.data.labels = ['L1: ' + sdeck_l1, 'L2: ' + sdeck_l2, 'L3: ' + sdeck_l3, 'spell: ' + sdeck_spell];
		// show_levelobj.data.datasets[0].data = [sdeck_l1, sdeck_l2, sdeck_l3, sdeck_spell];
		// show_levelobj.update();

		$("#colordiv").show();
		colorobj.data.labels = ['白: ' + sdeck_white, '赤: ' + sdeck_red, '青: ' + sdeck_blue, '緑: ' + sdeck_green, '黒: ' + sdeck_black, '無: ' + sdeck_nocolor];
		colorobj.data.datasets[0].data = [sdeck_white, sdeck_red, sdeck_blue, sdeck_green, sdeck_black, sdeck_nocolor];
		colorobj.update();

		// $("#show_colordiv").show();
		// show_colorobj.data.labels = ['白: ' + sdeck_white, '赤: ' + sdeck_red, '青: ' + sdeck_blue, '緑: ' + sdeck_green, '黒: ' + sdeck_black, '無: ' + sdeck_nocolor];
		// show_colorobj.data.datasets[0].data = [sdeck_white, sdeck_red, sdeck_blue, sdeck_green, sdeck_black, sdeck_nocolor];
		// show_colorobj.update();

		$("#lbdiv").show();
		lbobj.data.labels = ['LB有り: ' + sdeck_burst, 'LB無し: ' + sdeck_no_burst];
		lbobj.data.datasets[0].data = [sdeck_burst, sdeck_no_burst];
		lbobj.update();

		// $("#show_lbdiv").show();
		// show_lbobj.data.labels = ['LB有り: ' + sdeck_burst, 'LB無し: ' + sdeck_no_burst];
		// show_lbobj.data.datasets[0].data = [sdeck_burst, sdeck_no_burst];
		// show_lbobj.update();

		$("#storydiv").show();
		storyobj.data.labels = ['無印: ' + sdeck_nostory, 'ディソナ: ' + sdeck_dissona, '解放派: ' + sdeck_liberation, '闘争派: ' + sdeck_struggle, '防衛派: ' + sdeck_defense];
		storyobj.data.datasets[0].data = [sdeck_nostory, sdeck_dissona, sdeck_liberation, sdeck_struggle, sdeck_defense];
		storyobj.update();

		// $("#show_storydiv").show();
		// show_storyobj.data.labels = ['無印: ' + sdeck_nostory, 'ディソナ: ' + sdeck_dissona];
		// show_storyobj.data.datasets[0].data = [sdeck_nostory, sdeck_dissona];
		// show_storyobj.update();
	}
	else
	{
		$("#leveldiv").hide();
		$("#show_leveldiv").hide();
		$("#colordiv").hide();
		$("#show_colordiv").hide();
		$("#lbdiv").hide();
		$("#show_lbdiv").hide();
		$("#storydiv").hide();
	}
}

function delDeck(x, idx, array)
{
	// ALT＋點牌組裡的卡：開同名卡圖視窗，只替換這一張的卡圖（不刪除）
	if(window.event && window.event.altKey && openReplacePicker(x, idx, array))
	{
		return;
	}

	for(i = 0; i < cardData.length; i++)
	{
		if(x.alt == cardData[i][ID] && (cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "スペル"))
		{
			// 同名卡圖：優先刪掉被點的那張卡圖（依圖片比對），否則刪第一張同卡號
			var pick = -1;
			for(j = 0; j < sdeckArr.length; j++)
			{
				if(sdeckArr[j][ID] == cardData[i][ID])
				{
					if(pick < 0) pick = j;
					if(x.getAttribute && sdeckArr[j][SRC] == x.getAttribute('src')) { pick = j; break; }
				}
			}
			if(pick >= 0)
			{
				array.splice(pick, 1);
				delcounter(cardData[i]);
				showAlldeck();
				return;
			}

			for(j = 0; j < sdeckArr.length; j++)
			{
				if(cardData[i][ID] == sdeckArr[j][ID])
				{
					array.splice(j, 1);
					delcounter(cardData[i]);
					showAlldeck();
					return;
				}
			}
			
			break;
		}
	}

	array.splice(idx, 1);
	
	
	showAlldeck();
}

function addcounter(x)
{
	if(x[LEVEL] == 1)
	{
		sdeck_l1++;
	}
	else if(x[LEVEL] == 2)
	{
		sdeck_l2++;
	}
	else if(x[LEVEL] == 3)
	{
		sdeck_l3++;
	}
	else
	{
		sdeck_spell++;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		sdeck_red++;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		sdeck_blue++;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		sdeck_green++;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		sdeck_black++;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		sdeck_white++;
	}

	if(x[COLOR].indexOf("無") != -1)
	{
		sdeck_nocolor++;
	}

	if(x[LB] == 1)
	{
		sdeck_burst++;
	}
	else
	{
		sdeck_no_burst++;
	}

  	if(x[STORY] == "ディソナ")
	{
		sdeck_dissona++;
	}
	else if(x[CLASS].indexOf("解放派") != -1)
	{
		sdeck_liberation++;
	}
	else if(x[CLASS].indexOf("闘争派") != -1)
	{
		sdeck_struggle++;
	}
	else if(x[CLASS].indexOf("防衛派") != -1)
	{
		sdeck_defense++;
	}
	else
	{
		sdeck_nostory++;
	}
	showcounter();
}

function delcounter(x)
{
	if(x[LEVEL] == 1)
	{
		sdeck_l1--;
	}
	if(x[LEVEL] == 2)
	{
		sdeck_l2--;
	}
	if(x[LEVEL] == 3)
	{
		sdeck_l3--;
	}
	if(x[LEVEL] == "")
	{
		sdeck_spell--;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		sdeck_red--;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		sdeck_blue--;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		sdeck_green--;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		sdeck_black--;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		sdeck_white--;
	}

	if(x[COLOR].indexOf("無") != -1)
	{
		sdeck_nocolor--;
	}

	if(x[LB] == 1)
	{
		sdeck_burst--;
	}
	else
	{
		sdeck_no_burst--;
	}
  
  	if(x[STORY] == "ディソナ")
	{
		sdeck_dissona--;
	}
	else if(x[CLASS].indexOf("解放派") != -1)
	{
		sdeck_liberation--;
	}
	else if(x[CLASS].indexOf("闘争派") != -1)
	{
		sdeck_struggle--;
	}
	else if(x[CLASS].indexOf("防衛派") != -1)
	{
		sdeck_defense--;
	}
	else
	{
		sdeck_nostory--;
	}

	showcounter();
}

function showcounter()
{
	var str = "";
	if(sdeck_l1)
	{
		str+= "&emsp;&emsp;Level 1 シグニ: " + sdeck_l1;
	}
	if(sdeck_l2)
	{
		str+= "&emsp;&emsp;Level 2 シグニ: " + sdeck_l2;
	}
	if(sdeck_l3)
	{
		str+= "&emsp;&emsp;Level 3 シグニ: " + sdeck_l3;
	}
	if(sdeck_spell)
	{
		str+= "&emsp;&emsp;スペル: " + sdeck_spell;
	}

	str+= "<br><br>"

	if(sdeck_red)
	{
		str+= "&emsp;&emsp;赤: " + sdeck_red;
	}
	if(sdeck_blue)
	{
		str+= "&emsp;&emsp;青: " + sdeck_blue;
	}
	if(sdeck_green)
	{
		str+= "&emsp;&emsp;緑: " + sdeck_green;
	}
	if(sdeck_black)
	{
		str+= "&emsp;&emsp;黒: " + sdeck_black;
	}
	if(sdeck_white)
	{
		str+= "&emsp;&emsp;白: " + sdeck_white;
	}
	if(sdeck_nocolor)
	{
		str+= "&emsp;&emsp;無: " + sdeck_nocolor;
	}

	str+= "<br><br>"

	if(sdeck_burst)
	{
		str+= "&emsp;&emsp;LB有り: " + sdeck_burst;
	}

	if(sdeck_no_burst)
	{
		str+= "&emsp;&emsp;LB無し: " + sdeck_no_burst;
	}

	$("#counter").html(str);
}

function asIsMainDeckType(t)
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
				var c = withArt(cardData[i], pendingArtId);
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

function downloadBlobopenbatoru(filename, contentType) {
    var larray = [];
    var parray = [];
    var aarray = [];
    var sarray = [];
    var array = [];
    var tmp;
    var i = 0, j = 0, flag = 0;

    if($("#deckTitle").val() == "")
    {
    	filename = "sample.deck";
    }
    else
    {
    	filename = $("#deckTitle").val() + ".deck";
    }
    

    for(i = 0; i < ldeckArr.length; i++)
    {
    	flag = 0;
    	if(ldeckArr[i][ID] != "")
    	{
    		for(j = 0; j < cardData.length; j++)
    		{
    			if(cardData[j][NAME] == ldeckArr[i][NAME])
    			{
    				if(cardData[j][ID].indexOf("-D") == -1 && cardData[j][ID].indexOf("-CD") == -1)
    				{
    					larray.push(cardData[j][ID]);
    					flag = 1;
    					break;
    				}
    			}
    		}

    		if(flag == 0)
    		{
    			for(j = 0; j < cardData.length; j++)
	    		{
	    			if(cardData[j][NAME] == ldeckArr[i][NAME])
	    			{
	    				larray.push(cardData[j][ID]);
	    				break;
	    			}
	    		}
    		}
    	}
    }

    for(i = 0; i < pdeckArr.length; i++)
    {
    	flag = 0;
    	if(pdeckArr[i][ID] != "")
    	{
    		for(j = 0; j < cardData.length; j++)
    		{
    			if(cardData[j][NAME] == pdeckArr[i][NAME])
    			{
    				if(cardData[j][ID].indexOf("-D") == -1 && cardData[j][ID].indexOf("-CD") == -1)
    				{
    					parray.push(cardData[j][ID]);
    					flag = 1;
    					break;
    				}
    			}
    		}

    		if(flag == 0)
    		{
    			for(j = 0; j < cardData.length; j++)
	    		{
	    			if(cardData[j][NAME] == pdeckArr[i][NAME])
	    			{
	    				parray.push(cardData[j][ID]);
	    				break;
	    			}
	    		}
    		}
    	}
    }

    for(i = 0; i < adeckArr.length; i++)
    {
    	flag = 0;
    	if(adeckArr[i][ID] != "")
    	{
    		for(j = 0; j < cardData.length; j++)
    		{
    			if(cardData[j][NAME] == adeckArr[i][NAME])
    			{
    				if(cardData[j][ID].indexOf("-D") == -1 && cardData[j][ID].indexOf("-CD") == -1)
    				{
    					aarray.push(cardData[j][ID]);
    					flag = 1;
    					break;
    				}
    			}
    		}

    		if(flag == 0)
    		{
    			for(j = 0; j < cardData.length; j++)
	    		{
	    			if(cardData[j][NAME] == adeckArr[i][NAME])
	    			{
	    				aarray.push(cardData[j][ID]);
	    				break;
	    			}
	    		}
    		}
    	}
    }

    for(i = 0; i < sdeckArr.length; i++)
    {
    	flag = 0;
    	if(sdeckArr[i][ID] != "")
    	{
    		if(sdeckArr[i][NAME] == "サーバント #")
    		{
    			sarray.push("WXDi-D01-020");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "小装 エケザクス")
    		{
    			sarray.push("WXDi-D07-020");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "227号温泉郷の運営記録!")
    		{
    			sarray.push("WX25-CP1-029");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "いつか至る果てへ")
    		{
    			sarray.push("WX25-CP1-033");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "物語の幕開け")
    		{
    			sarray.push("WX25-CP1-035");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "サンクトゥムタワー崩壊")
    		{
    			sarray.push("WX25-CP1-036");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "みこみこ☆てへっ")
    		{
    			sarray.push("SPDi01-113");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "羅石 グリンベリル")
    		{
    			sarray.push("SPDi01-114");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "ツヴァイ=ベロド")
    		{
    			sarray.push("SPDi01-115");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "弐ノ遊 カミヨーヨー")
    		{
    			sarray.push("SPDi01-116");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "羅菌 ミカヅキモ")
    		{
    			sarray.push("SPDi01-117");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "幻怪 フタクチ")
    		{
    			sarray.push("SPDi01-118");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "凶美 スミエ")
    		{
    			sarray.push("SPDi01-119");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "羅植 シロツメクサ")
    		{
    			sarray.push("SPDi01-120");
    			continue;
    		}

    		if(sdeckArr[i][NAME] == "羅原 Dy")
    		{
    			sarray.push("SPDi01-121");
    			continue;
    		}

    		for(j = 0; j < cardData.length; j++)
    		{
    			if(cardData[j][NAME] == sdeckArr[i][NAME])
    			{
    				if(cardData[j][ID].indexOf("-D") == -1 && cardData[j][ID].indexOf("-CD") == -1)
    				{
    					sarray.push(cardData[j][ID]);
    					flag = 1;
    					break;
    				}
    			}
    		}

    		if(flag == 0)
    		{
    			for(j = 0; j < cardData.length; j++)
	    		{
	    			if(cardData[j][NAME] == sdeckArr[i][NAME])
	    			{
	    				sarray.push(cardData[j][ID]);
	    				break;
	    			}
	    		}
    		}
    	}
    }

    if(larray.length != 0)
    	array.push(larray);
    if(parray.length != 0)
    	array.push(parray);
    if(aarray.length != 0)
    	array.push(aarray);
    if(sarray.length != 0)
    	array.push(sarray);

    var csv = array.map((item) => {
        var row = item;
          
        return row.join("\n");
      })
      .join("\n");

    content = csv;

    var blob = new Blob([content], { type: contentType });
	var url = URL.createObjectURL(blob);

	var pom = document.createElement('a');
	pom.href = url;
	pom.setAttribute('download', filename);
	pom.click();

	// $("#textCode").val(content);

    // $("#textCode").val(content);
	// customizeWindowEvent('code');
	// $("#deckStr").html("　　");
	// $("#deckTitle").val($("#selectDeck").val());

    // if(contentType == "text/csv;charset=utf-8;")
    // {
		
	// }
	// else
	// {
		
	// }
}

function downloadBlob(filename, contentType) {
    var larray = [];
    var parray = [];
    var aarray = [];
    var sarray = [];
    var array = [];
    var i = 0;

    filename = $("#deckTitle").val() + ".csv";

    for(i = 0; i < ldeckArr.length; i++)
    {
    	larray.push(deckCardId(ldeckArr[i]));
    }

    for(i = 0; i < pdeckArr.length; i++)
    {
    	parray.push(deckCardId(pdeckArr[i]));
    }

    for(i = 0; i < adeckArr.length; i++)
    {
    	aarray.push(deckCardId(adeckArr[i]));
    }

    for(i = 0; i < sdeckArr.length; i++)
    {
    	sarray.push(deckCardId(sdeckArr[i]));
    }
    larray.unshift("ldeck");
    parray.unshift("pdeck");
    aarray.unshift("adeck");
    sarray.unshift("sdeck");

    array.push(larray);
    array.push(parray);
    array.push(aarray);
    array.push(sarray);

    var csv = array.map((item) => {
        var row = item;
          
        return row.join(",");
      })
      .join("\n");

    content = csv;

    if(contentType == "text/csv;charset=utf-8;")
    {
		var blob = new Blob([content], { type: contentType });
		var url = URL.createObjectURL(blob);

		var pom = document.createElement('a');
		pom.href = url;
		pom.setAttribute('download', filename);
		pom.click();

		$("#textCode").val(content);
	}
	else
	{
		$("#textCode").val(content);
		customizeWindowEvent('code');
		$("#deckStr").html("　　");
		$("#deckTitle").val($("#selectDeck").val());
	}
}

function selectDeck()
{
	var deck = $("#selectDeck").val();
	if(deck == 0)
	{
		dataInit();
		return;
	}
	if(deck == "")
	{
		dataInit();
	}
	$("#textCode").val(asStore.getItem(deck));
	
	readSingleCode();
}

function selectSort()
{
	sort_method = $("#selectSort").val();
	if(sort_method == 1)
	{
		$("#lbBackground").show();
		updateLBarray();
	}
	else
	{
		$("#lbBackground").hide();
	}
	showSdeck();
}

function updateLBarray()
{
	var i = 0;

	sdeckLBArr = [];
	sdecknoLBArr = [];

	for(i = 0; i < sdeckArr.length; i++)
	{
		if(sdeckArr[i][LB] == "1")
		{
			sdeckLBArr.push(sdeckArr[i]);
		}
		else
		{
			sdecknoLBArr.push(sdeckArr[i]);
		}
	}
}

function cleardeck()
{
	ret = confirm("It will clear current deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		dataInit();
	}
}

function deletedecklist()
{
	var deck = $("#selectDeck").val();
	var i = 0;

	if(deck == 0)
	{
		return;
	}

	ret = confirm("It will delete this deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		asStore.removeItem(deck);

		for(i = 0; i < deckNamelist.length; i++)
		{
			if(deck == deckNamelist[i])
			{
				deckNamelist.splice(i, 1);
				break;
			}
		}
		asStore.setItem("DeckNameList", JSON.stringify(deckNamelist));
		updateDecklist("");
		dataInit();
	}
}

function readSingleCode()
{
	var larray = [];
    var parray = [];
    var aarray = [];
    var sarray = [];
    var array = [];
    var i = 0, j = 0;

    var contents = $("#textCode").val();

    array = contents.split("\n");

	ldeckArr = [];

	larray = array[0].split(",");
	for(i = 1; i < larray.length; i++)
	{
		var __dc = findDeckCard(larray[i]);
			if(__dc) { ldeckArr.push(__dc); }
	}

    
   
   	if(array.length == 3) //no Arts deck
   	{
   		pdeckArr = [];

   		parray = array[1].split(",");
	    for(i = 1; i < parray.length; i++)
	    {
	      	var __dc = findDeckCard(parray[i]);
			if(__dc) { pdeckArr.push(__dc); }
	    }

	    adeckArr = [];

	    sdeckArr = [];
	      
	    sarray = array[2].split(",");
	    for(i = 1; i < sarray.length; i++)
	    {
	      	var __dc = findDeckCard(sarray[i]);
			if(__dc) { sdeckArr.push(__dc); }
	    }
   	}
   	else //Arts
   	{
   		pdeckArr = [];

	    parray = array[1].split(",");
	    for(i = 1; i < parray.length; i++)
	    {
	      	var __dc = findDeckCard(parray[i]);
			if(__dc) { pdeckArr.push(__dc); }
	    }

	    adeckArr = [];
	      
	    aarray = array[2].split(",");
	    for(i = 1; i < aarray.length; i++)
	    {
	      	var __dc = findDeckCard(aarray[i]);
			if(__dc) { adeckArr.push(__dc); }
	    }

	    sdeckArr = [];
	      
	    sarray = array[3].split(",");
	    for(i = 1; i < sarray.length; i++)
	    {
	      	var __dc = findDeckCard(sarray[i]);
			if(__dc) { sdeckArr.push(__dc); }
	    }
	}

    loadcounter();
    showAlldeck();
}

function readSingleFile(evt)
{
    var f = evt.target.files[0]; 
    var larray = [];
    var parray = [];
    var sarray = [];
    var array = [];
    var i = 0, j = 0;
    var titleName = "";

	titleName = f.name.replace(".csv","");
	$("#deckTitle").val(titleName);

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          $("#textCode").val(contents);
          array = contents.split("\n");

          ldeckArr = [];

          larray = array[0].split(",");
          for(i = 1; i < larray.length; i++)
          {
          	var __dc = findDeckCard(larray[i]);
			if(__dc) { ldeckArr.push(__dc); }
          }

          pdeckArr = [];
          
          parray = array[1].split(",");
          for(i = 1; i < parray.length; i++)
          {
          	var __dc = findDeckCard(parray[i]);
			if(__dc) { pdeckArr.push(__dc); }
          }

          adeckArr = [];
          
          aarray = array[2].split(",");
          for(i = 1; i < aarray.length; i++)
          {
          	var __dc = findDeckCard(aarray[i]);
			if(__dc) { adeckArr.push(__dc); }
          }

          sdeckArr = [];
          
          sarray = array[3].split(",");
          for(i = 1; i < sarray.length; i++)
          {
          	var __dc = findDeckCard(sarray[i]);
			if(__dc) { sdeckArr.push(__dc); }
          }

          loadcounter();
          showAlldeck();
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }

    $("#fileinput").val("");
}

function loadcounter()
{
	var i = 0;

	sdeck_l1 = 0;
	sdeck_l2 = 0;
	sdeck_l3 = 0;
	sdeck_spell = 0;

	sdeck_red = 0;
	sdeck_blue = 0;
	sdeck_green = 0;
	sdeck_black = 0;
	sdeck_white = 0;
	sdeck_nocolor = 0;

	sdeck_burst = 0;
	sdeck_no_burst = 0;

	sdeck_nostory = 0;
	sdeck_dissona = 0;
	sdeck_liberation = 0;
	sdeck_struggle = 0;
	sdeck_defense = 0;

	for(i = 0; i < sdeckArr.length; i++)
	{
		addcounter(sdeckArr[i])
	}
}

// 回傳有勾選的項目值；list = [[selector, value], ...]
function checkedValues(list)
{
	var ret = [];

	for(var k = 0; k < list.length; k++)
	{
		if($(list[k][0]).is(":checked"))
		{
			ret.push(list[k][1]);
		}
	}

	return ret;
}

// 比對模式：any＝含任一勾選項目、all＝含全部勾選項目（可多出其他）、exact＝剛好等於勾選項目
function matchMode(mode, have, want)
{
	var hasAll = true, hasAny = false;

	for(var k = 0; k < want.length; k++)
	{
		if(have.indexOf(want[k]) != -1)
		{
			hasAny = true;
		}
		else
		{
			hasAll = false;
		}
	}

	if(mode == "all")
	{
		return hasAll;
	}

	if(mode == "exact")
	{
		return hasAll && have.length == want.length;
	}

	return hasAny;
}

function search()
{
	var i = 0, j = 0;
	var dataStr = "", commetStr = "", searchStr = "", tmpStr = "";
	var flag = 0;

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		if(($('#selectProduct').val() || 0) != 0)
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
		}

		if($('#selectType').val() != 0)
		{
			if(!asClassMatch(cardData[i][CLASS], $('#selectType').val()))
			{
				continue;
			}
		}

		if($('#selectFaction').val() != 0)
		{
			if(cardData[i][CLASS].indexOf($('#selectFaction').val()) == -1)
			{
				continue;
			}
		}

		if($('#selectLRIG').val() != 0 && !asLrigMatch(cardData[i], $('#selectLRIG').val()))
		{
			continue;
		}
		if(false)   // original LRIG filter replaced by asLrigMatch()
		{
			if($('#selectLRIG').val() == "タマ")
			{
				if(cardData[i][CLASS] != "タマ" && cardData[i][CLASS] != "タマ/イオナ")
				{
					continue;
				}
			}
			else if($('#selectLRIG').val() == "イオナ")
			{
				if(cardData[i][CLASS] != "イオナ" && cardData[i][CLASS] != "タマ/イオナ")
				{
					continue;
				}
			}
			else if($('#selectLRIG').val() == "タウィル")
			{
				if(cardData[i][CLASS] != "タウィル" && cardData[i][CLASS] != "タウィル/ウムル")
				{
					continue;
				}
			}
			else if($('#selectLRIG').val() == "ウムル")
			{
				if(cardData[i][CLASS] != "ウムル" && cardData[i][CLASS] != "タウィル/ウムル")
				{
					continue;
				}
			}
			else if(cardData[i][CLASS] != $('#selectLRIG').val())
			{
				continue;
			}
		}

		if(!$('#lrig').is(":checked"))
		{
			if(cardData[i][TYPE] == "ルリグ")
			{
				continue;
			}
		}

		if(!$('#assistlrig').is(":checked"))
		{
			if(cardData[i][TYPE] == "アシストルリグ")
			{
				continue;
			}
		}

		if(!$('#piece').is(":checked"))
		{
			if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー" || cardData[i][TYPE] == "ピース クラフト")
			{
				continue;
			}
		}
		else
		{
			if(!$('#dreamteam').is(":checked") || !$('#no_dreamteam').is(":checked"))
			{
				if($('#no_dreamteam').is(":checked"))
				{
					if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー" || cardData[i][TYPE] == "ピース クラフト")
					{
						if(cardData[i][JP_TEXT].indexOf("\【使用条件\】\【チーム\】") != -1 || cardData[i][JP_TEXT].indexOf("\【使用条件\】\【ドリームチーム\】") != -1)
						{
							continue;
						}
					}
				}

				if($('#dreamteam').is(":checked"))
				{
					if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー" || cardData[i][TYPE] == "ピース クラフト")
					{
						if(cardData[i][JP_TEXT].indexOf("\【使用条件\】\【チーム\】") == -1 && cardData[i][JP_TEXT].indexOf("\【使用条件\】\【ドリームチーム\】") == -1)
						{
							continue;
						}
					}
				}
			}
		}

		if(!$('#arts').is(":checked"))
		{
			if(cardData[i][TYPE] == "アーツ" || cardData[i][TYPE] == "アーツ クラフト")
			{
				continue;
			}
		}

		if(!$('#signi').is(":checked"))
		{
			if(cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "シグニ クラフト" || cardData[i][TYPE] == "シグニ レゾナ/クラフト")
			{
				continue;
			}
		}

		if(!$('#dreamteam').is(":checked") || !$('#no_dreamteam').is(":checked"))
		{
			if($('#no_dreamteam').is(":checked"))
			{

				if(cardData[i][JP_TEXT].indexOf("\【チーム\】") != -1 || cardData[i][JP_TEXT].indexOf("\【ドリームチーム\】") != -1)
				{
					continue;
				}
			}

			if($('#dreamteam').is(":checked"))
			{

				if(cardData[i][JP_TEXT].indexOf("\【チーム\】") == -1 && cardData[i][JP_TEXT].indexOf("\【ドリームチーム\】") == -1)
				{
					continue;
				}
			}
		}

		if(!$('#spell').is(":checked"))
		{
			if(cardData[i][TYPE] == "スペル" || cardData[i][TYPE] == "スペル クラフト")
			{
				continue;
			}
		}

		if(!$('#level0').is(":checked") && !$('#level1').is(":checked") && !$('#level2').is(":checked") && !$('#level3').is(":checked") && !$('#level4').is(":checked") && !$('#level5').is(":checked"))
		{

		}
		else
		{
			if(!$('#level0').is(":checked"))
			{
				if(cardData[i][LEVEL] == "0")
				{
					continue;
				}
			}

			if(!$('#level1').is(":checked"))
			{
				if(cardData[i][LEVEL] == "1")
				{
					continue;
				}
			}

			if(!$('#level2').is(":checked"))
			{
				if(cardData[i][LEVEL] == "2")
				{
					continue;
				}
			}

			if(!$('#level3').is(":checked"))
			{
				if(cardData[i][LEVEL] == "3")
				{
					continue;
				}
			}

			if(!$('#level4').is(":checked"))
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
			}
		}

		flag = 0;

		// 色：「多色のみ」＝只看多色卡；比對方式由 #colorMode 決定（any＝いずれかを含む／all＝すべて含む／exact＝完全一致）
		// 頁面沒有 #colorMode 時（例如 name_quiz.html）維持舊行為：勾「多色のみ」＝すべて含む
		var colorMode = $('#colorMode').length ? $('#colorMode').val() : ($('#multicolor').is(":checked") ? "all" : "any");

		if($('#multicolor').is(":checked") && cardData[i][COLOR].length == 1)
		{
			continue;
		}

		var colorChecked = checkedValues([['#white', "白"], ['#red', "赤"], ['#blue', "青"], ['#green', "緑"], ['#black', "黒"], ['#nocolor', "無"]]);

		if(colorChecked.length > 0)
		{
			if(!matchMode(colorMode, cardData[i][COLOR].split(""), colorChecked))
			{
				continue;
			}
		}

		flag = 0;

		// 使用タイミング：只篩アシストルリグ／ピース／アーツ；比對方式由 #timingMode 決定（同顏色）
		var timingChecked = checkedValues([['#mainphase', "メインフェイズ"], ['#attackphase', "アタックフェイズ"], ['#spellcutin', "スペルカットイン"]]);

		if(timingChecked.length > 0)
		{
			if(cardData[i][TYPE] == "アシストルリグ" || cardData[i][TYPE].indexOf("ピース") != -1 || cardData[i][TYPE].indexOf("アーツ") != -1)
			{
				var timingMode = $('#timingMode').length ? $('#timingMode').val() : "any";

				if(!matchMode(timingMode, cardData[i][TIMING] == "" ? [] : cardData[i][TIMING].split(","), timingChecked))
				{
					continue;
				}
			}
		}

		if(!$('#no_story').is(":checked") && !$('#dissona').is(":checked"))
		{

		}
		else
		{
			if(!$('#no_story').is(":checked"))
			{
				if(cardData[i][STORY] == "")
				{
					continue;
				}
			}

			if(!$('#dissona').is(":checked"))
			{
				if(cardData[i][STORY] == "ディソナ")
				{
					continue;
				}
			}
		}

		if(!$('#islb').is(":checked") && !$('#notlb').is(":checked"))
		{

		}
		else
		{
			if(!$('#islb').is(":checked"))
			{
				if(cardData[i][LB] == "1")
				{
					continue;
				}
			}

			if(!$('#notlb').is(":checked"))
			{
				if(cardData[i][LB] != "1")
				{
					continue;
				}
			}
		}

		if($('#textsearch').val().length != 0)
		{
			for(j = 0; j < BAN ; j++)
			{
				if($('#selectLang').val() == "JP")
				{
					if(j == TW_TEXT)
					{
						continue;
					}
				}

				if($('#selectLang').val() == "TW")
				{
					if(j == JP_TEXT)
					{
						continue;
					}
				}

				dataStr = cardData[i][j].toUpperCase();
				searchStr = $('#textsearch').val().toUpperCase();
				if(dataStr.indexOf(searchStr) != -1)
				{
					rdeckArr.push(cardData[i]);
					break;
				}

				if(searchStr.indexOf("コイン") != -1 || searchStr.indexOf("COIN") != -1)
				{
					if(dataStr.indexOf("◎") != -1)
					{
						rdeckArr.push(cardData[i]);
						break;
					}
				}

				commetStr = asStore.getItem(cardData[i][ID] + "_WXcomment");

				if(commetStr == null)
				{
					commetStr = "";
				}

				if(commetStr.indexOf(searchStr) != -1)
				{
					rdeckArr.push(cardData[i]);
					break;
				}
			}
		}
		else
		{
			rdeckArr.push(cardData[i]);
		}
	}

	page = 0;
	showrdeck();
}

function checkall()
{
	$('input:checkbox').prop('checked', true);
	$('#multicolor').prop('checked', false);
	$('#colorMode').val("any");
	$('#timingMode').val("any");
}

function uncheckall()
{
	$('#textsearch').val("");
	$('input:checkbox').prop('checked', false);
	$('#colorMode').val("any");
	$('#timingMode').val("any");
	$('#selectType').val(0);
	$('#selectFaction').val(0);
	$('#selectLRIG').val(0);
	$('#selectProduct').val(0);
}

function str_to_img(x)
{
	x = x.replace(/【使用条件】/g, "<img class='icon_img' src='img/icon_txt_terms_use.png'></img>");
	x = x.replace(/【チーム】/g, "<img class='icon_img' src='img/icon_txt_team.png'></img>");
	x = x.replace(/【ドリームチーム】/g, "<img class='icon_img' src='img/icon_txt_dreamteam.png'></img>");
	x = x.replace(/【ライフバースト】/g, "<img class='icon_img' src='img/icon_txt_burst.png'></img>");
	x = x.replace(/【ライズ】/g, "<img class='icon_img' src='img/icon_txt_rise_01.png'></img>");
	x = x.replace(/《ライズアイコン》/g, "<img class='icon_img' src='img/icon_txt_rise_02.png'></img>");
	x = x.replace(/\[ライズ\]/g, "<img class='icon_img' src='img/icon_txt_rise_02.png'></img>");
	x = x.replace(/【ハーモニー】/g, "<img class='icon_img' src='img/icon_txt_harmony.png'></img>");
	x = x.replace(/《ディソナアイコン》/g, "<img class='icon_img' src='img/icon_txt_dissona.png'></img>");
	x = x.replace(/\[ダウン\]/g, "<img class='icon_img' src='img/icon_txt_down.png'></img>");
	x = x.replace(/《ダウン》/g, "<img class='icon_img' src='img/icon_txt_down.png'></img>");
	x = x.replace(/\[ガード\]/g, "<img class='icon_img' src='img/icon_guard_mini.png'></img>");
	x = x.replace(/《ガードアイコン》/g, "<img class='icon_img' src='img/icon_guard_mini.png'></img>");
	x = x.replace(/◎/g, "<img class='icon_img' src='img/icon_txt_coin.png'></img>");
	x = x.replace(/《コインアイコン》/g, "<img class='icon_img' src='img/icon_txt_coin.png'></img>");
	x = x.replace(/【絆】/g, "<img class='icon_img' src='img/icon_txt_kizuna.png'></img>");
	x = x.replace(/【絆起】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='img/icon_txt_starting_kizuna.png'></img>");
	x = x.replace(/【絆出】(?!能力)/g, "</td></tr><tr style='background:#FFD9E6'><td colspan='2'><img class='icon_img' src='img/icon_txt_arrival_kizuna.png'></img>");
	x = x.replace(/【絆自】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='img/icon_txt_auto_kizuna.png'></img>");
	x = x.replace(/【絆常】/g, "<\/td><\/tr><tr\  style=\'background:#FFD9E6\'><td\ colspan=\'2\'><img class='icon_img' src='img/icon_txt_regular_kizuna.png'></img>");
	x = x.replace(/【  】/g, "<img class='icon_img' src='img/icon_txt_frame_null.png'></img>");
	x = x.replace(/《リコレクトアイコン》/g, "<img class='icon_img' src='img/icon_txt_recollect.png'></img>");
	x = x.replace(/《相手ターン》/g, "<img class='icon_img' src='img/icon_txt_opponent_turn.png'></img>");
	x = x.replace(/《自分ターン》/g, "<img class='icon_img' src='img/icon_txt_my_turn.png'></img>");
	x = x.replace(/《ヘブン》/g, "<img class='icon_img' src='img/icon_txt_heaven.webp'></img>");
	x = x.replace(/《クロスアイコン》/g, "<img class='icon_img' src='img/icon_txt_cross.webp'></img>");
	x = x.replace(/【クロス自】/g, "<img class='icon_img' src='img/icon_txt_auto_cross.webp'></img>");
	x = x.replace(/【出現条件】/g, "<img class='icon_img' src='img/icon_txt_AppearanceCond.webp'></img>");
	x = x.replace(/【メインフェイズ】/g, "<img class='icon_img' src='img/icon_txt_phase_main.webp'></img>");
	x = x.replace(/《メインフェイズアイコン》/g, "<img class='icon_img' src='img/icon_txt_phase_main.webp'></img>");
	x = x.replace(/【歌のカケラ】/g, "<img class='icon_img' src='img/icon_txt_utanokakera.webp'></img>");

	x = x.replace(/<img class=\'icon_img\' src=\'img\/icon_txt_burst\.png\'><\/img>：/g, "<\/td><\/tr><tr\  style=\'background:#E0E0E0\'><td\ colspan=\'2\'><img class=\'icon_img\' src=\'img\/icon_txt_burst\.png\'><\/img>：");
	x = x.replace(/<img class=\'icon_img\' src=\'img\/icon_txt_utanokakera\.webp\'><\/img>：/g, "<\/td><\/tr><tr\  class=\'priokeBackground\'><td\ colspan=\'2\'><img class=\'icon_img\' src=\'img\/icon_txt_utanokakera\.webp\'><\/img>：");
	x = x.replace(/「歌之碎片」：/g, "<\/td><\/tr><tr\  class=\'priokeBackground\'><td\ colspan=\'2\'>「歌之碎片」：");
	x = x.replace(/「生命爆發」：/g, "<\/td><\/tr><tr\  style=\'background:#E0E0E0\'><td\ colspan=\'2\'>「生命爆發」：");
	
	x = x.replace(/\(ターン1\)/g, "<img class='icon_img' src='img/icon_txt_turn_01.png'></img>");
	x = x.replace(/\(ターン2\)/g, "<img class='icon_img' src='img/icon_txt_turn_02.png'></img>");
	x = x.replace(/\(ゲーム1\)/g, "<img class='icon_img' src='img/icon_txt_game_01.png'></img>");
	x = x.replace(/\(ゲーム2\)/g, "<img class='icon_img' src='img/icon_txt_game_02.png'></img>");

	x = x.replace(/《ターン1回》/g, "<img class='icon_img' src='img/icon_txt_turn_01.png'></img>");
	x = x.replace(/《ターン2回》/g, "<img class='icon_img' src='img/icon_txt_turn_02.png'></img>");
	x = x.replace(/《ゲーム1回》/g, "<img class='icon_img' src='img/icon_txt_game_01.png'></img>");
	x = x.replace(/《ゲーム2回》/g, "<img class='icon_img' src='img/icon_txt_game_02.png'></img>");

	x = x.replace(/【チーム起】/g, "<img class='icon_img' src='img/icon_txt_starting_team.png'></img>");
	x = x.replace(/【チーム常】/g, "<img class='icon_img' src='img/icon_txt_regular_team.png'></img>");
	x = x.replace(/【チーム出】/g, "<img class='icon_img' src='img/icon_txt_arrival_team.png'></img>");
	x = x.replace(/【チーム自】/g, "<img class='icon_img' src='img/icon_txt_auto_team.png'></img>");

	x = x.replace(/【出】/g, "<img class='icon_img' src='img/icon_txt_arrival.png'></img>");
	x = x.replace(/【自】/g, "<img class='icon_img' src='img/icon_txt_auto.png'></img>");
	x = x.replace(/【常】/g, "<img class='icon_img' src='img/icon_txt_regular.png'></img>");
	x = x.replace(/【起】/g, "<img class='icon_img' src='img/icon_txt_starting.png'></img>");

	x = x.replace(/《赤2》/g, "<img class='icon_img' src='img/icon_txt_red2.png'></img>");
	x = x.replace(/《赤》/g, "<img class='icon_img' src='img/icon_txt_red.png'></img>");
	x = x.replace(/【赤】/g, "<img class='icon_img' src='img/icon_txt_red.png'></img>");
	x = x.replace(/《赤×0》/g, "<img class='icon_img' src='img/icon_txt_red_00.png'></img>");
	x = x.replace(/《赤×1》/g, "<img class='icon_img' src='img/icon_txt_red_01.png'></img>");
	x = x.replace(/《赤×2》/g, "<img class='icon_img' src='img/icon_txt_red_02.png'></img>");
	x = x.replace(/《赤×3》/g, "<img class='icon_img' src='img/icon_txt_red_03.png'></img>");
	x = x.replace(/\[赤\]/g, "<img class='icon_img' src='img/icon_txt_red.png'></img>");
	x = x.replace(/\[赤\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_red_00.png'></img>");
	x = x.replace(/\[赤\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_red_01.png'></img>");
	x = x.replace(/\[赤\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_red_02.png'></img>");
	x = x.replace(/\[赤\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_red_03.png'></img>");
	x = x.replace(/\[赤\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_red_04.png'></img>");
	x = x.replace(/\[赤\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_red_05.png'></img>");

	x = x.replace(/《青2》/g, "<img class='icon_img' src='img/icon_txt_blue2.png'></img>");
	x = x.replace(/《青》/g, "<img class='icon_img' src='img/icon_txt_blue.png'></img>");
	x = x.replace(/【青】/g, "<img class='icon_img' src='img/icon_txt_blue.png'></img>");
	x = x.replace(/《青×0》/g, "<img class='icon_img' src='img/icon_txt_blue_00.png'></img>");
	x = x.replace(/《青×1》/g, "<img class='icon_img' src='img/icon_txt_blue_01.png'></img>");
	x = x.replace(/《青×2》/g, "<img class='icon_img' src='img/icon_txt_blue_02.png'></img>");
	x = x.replace(/\[青\]/g, "<img class='icon_img' src='img/icon_txt_blue.png'></img>");
	x = x.replace(/\[青\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_00.png'></img>");
	x = x.replace(/\[青\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_01.png'></img>");
	x = x.replace(/\[青\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_02.png'></img>");
	x = x.replace(/\[青\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_03.png'></img>");
	x = x.replace(/\[青\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_04.png'></img>");
	x = x.replace(/\[青\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_05.png'></img>");
	
	x = x.replace(/《緑2》/g, "<img class='icon_img' src='img/icon_txt_green2.png'></img>");
	x = x.replace(/《緑》/g, "<img class='icon_img' src='img/icon_txt_green.png'></img>");
	x = x.replace(/【緑】/g, "<img class='icon_img' src='img/icon_txt_green.png'></img>");
	x = x.replace(/《緑×0》/g, "<img class='icon_img' src='img/icon_txt_green_00.png'></img>");
	x = x.replace(/《緑×1》/g, "<img class='icon_img' src='img/icon_txt_green_01.png'></img>");
	x = x.replace(/《緑×2》/g, "<img class='icon_img' src='img/icon_txt_green_02.png'></img>");
	x = x.replace(/\[緑\]/g, "<img class='icon_img' src='img/icon_txt_green.png'></img>");
	x = x.replace(/\[緑\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_green_00.png'></img>");
	x = x.replace(/\[緑\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_green_01.png'></img>");
	x = x.replace(/\[緑\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_green_02.png'></img>");
	x = x.replace(/\[緑\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_green_03.png'></img>");
	x = x.replace(/\[緑\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_green_04.png'></img>");
	x = x.replace(/\[緑\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_green_05.png'></img>");

	x = x.replace(/《黒2》/g, "<img class='icon_img' src='img/icon_txt_black2.png'></img>");
	x = x.replace(/《黒》/g, "<img class='icon_img' src='img/icon_txt_black.png'></img>");
	x = x.replace(/【黒】/g, "<img class='icon_img' src='img/icon_txt_black.png'></img>");
	x = x.replace(/《黒×0》/g, "<img class='icon_img' src='img/icon_txt_black_00.png'></img>");
	x = x.replace(/《黒×1》/g, "<img class='icon_img' src='img/icon_txt_black_01.png'></img>");
	x = x.replace(/《黒×2》/g, "<img class='icon_img' src='img/icon_txt_black_02.png'></img>");
	x = x.replace(/\[黒\]/g, "<img class='icon_img' src='img/icon_txt_black.png'></img>");
	x = x.replace(/\[黒\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_black_00.png'></img>");
	x = x.replace(/\[黒\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_black_01.png'></img>");
	x = x.replace(/\[黒\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_black_02.png'></img>");
	x = x.replace(/\[黒\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_black_03.png'></img>");
	x = x.replace(/\[黒\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_black_04.png'></img>");
	x = x.replace(/\[黒\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_black_05.png'></img>");

	x = x.replace(/《白2》/g, "<img class='icon_img' src='img/icon_txt_white2.png'></img>");
	x = x.replace(/《白》/g, "<img class='icon_img' src='img/icon_txt_white.png'></img>");
	x = x.replace(/【白】/g, "<img class='icon_img' src='img/icon_txt_white.png'></img>");
	x = x.replace(/《白×0》/g, "<img class='icon_img' src='img/icon_txt_white_00.png'></img>");
	x = x.replace(/《白×1》/g, "<img class='icon_img' src='img/icon_txt_white_01.png'></img>");
	x = x.replace(/《白×2》/g, "<img class='icon_img' src='img/icon_txt_white_02.png'></img>");
	x = x.replace(/\[白\]/g, "<img class='icon_img' src='img/icon_txt_white.png'></img>");
	x = x.replace(/\[白\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_white_00.png'></img>");
	x = x.replace(/\[白\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_white_01.png'></img>");
	x = x.replace(/\[白\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_white_02.png'></img>");
	x = x.replace(/\[白\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_white_03.png'></img>");
	x = x.replace(/\[白\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_white_04.png'></img>");
	x = x.replace(/\[白\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_white_05.png'></img>");

	x = x.replace(/《無2》/g, "<img class='icon_img' src='img/icon_txt_null2.png'></img>");
	x = x.replace(/《無》/g, "<img class='icon_img' src='img/icon_txt_null.png'></img>");
	x = x.replace(/【無】/g, "<img class='icon_img' src='img/icon_txt_null.png'></img>");
	x = x.replace(/《無×0》/g, "<img class='icon_img' src='img/icon_txt_null_00.png'></img>");
	x = x.replace(/《無×1》/g, "<img class='icon_img' src='img/icon_txt_null_01.png'></img>");
	x = x.replace(/《無×2》/g, "<img class='icon_img' src='img/icon_txt_null_02.png'></img>");
	x = x.replace(/\[無\]/g, "<img class='icon_img' src='img/icon_txt_null.png'></img>");
	x = x.replace(/\[無\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_null_00.png'></img>");
	x = x.replace(/\[無\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_null_01.png'></img>");
	x = x.replace(/\[無\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_null_02.png'></img>");
	x = x.replace(/\[無\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_null_03.png'></img>");
	x = x.replace(/\[無\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_null_04.png'></img>");
	x = x.replace(/\[無\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_null_05.png'></img>");

	return x;
}

function showLimit(x)
{
	var str = "";
	str = "";
	if(x[LEVEL] == "2")
	{
		str += "+";
	}

	str += x[LIMIT];

	return str;
}

function clickSpan(x)
{
	if($(x).prev().is(':checked'))
	{
		$(x).prev().prop('checked', false);
	}
	else
	{
		$(x).prev().prop('checked', true);
	}
}

function checkDeck()
{
	var i = 0, j = 0, error = 0, error_tmp = 0, ret = 0;
	var listId = $('#selectProduct').get(0);
	var listLrig = $('#selectLRIG').get(0);
	var listType = $('#selectType').get(0);
	var listFaction = $('#selectFaction').get(0);

	for(i = 0; i < cardData.length; i++)
	{
		error = 0;

		//ID
		error_tmp = 1;

		if(cardData[i][RARE] == "SP")
		{
			if(cardData[i][ID].indexOf("SP") != -1)
			{
				error_tmp = 0;
			}
		}
		else if(cardData[i][RARE] == "PR")
		{
			if(cardData[i][ID].indexOf("PR") != -1)
			{
				error_tmp = 0;
			}
		}
		else
		{
			for(j = 1; j < listId.options.length; j++)
			{
				if(cardData[i][ID].indexOf(listId.options[j].value) != -1)
				{
					error_tmp = 0;
					break;
				}
			}
		}

		if(error_tmp)
		{
			error = 1;
			console.log("ID");
		}

		//SRC
		if(cardData[i][SRC].indexOf("https://") == -1 || cardData[i][SRC].indexOf(cardData[i][ID]) == -1)
		{
			error = 1;
			console.log("SRC");
		}

		//NAME
		if(cardData[i][NAME] == "")
		{
			error = 1;
			console.log("NAME");
		}

		//RARE
		if(cardData[i][RARE] != "ST" &&
			cardData[i][RARE] != "LR" &&
			cardData[i][RARE] != "LC" &&
			cardData[i][RARE] != "SR" &&
			cardData[i][RARE] != "SSR" &&
			cardData[i][RARE] != "R" &&
			cardData[i][RARE] != "C" &&
			cardData[i][RARE] != "PI" &&
			cardData[i][RARE] != "TK" &&
			cardData[i][RARE] != "PR" &&
			cardData[i][RARE] != "SP" &&
			cardData[i][RARE] != "Re" &&
			cardData[i][RARE] != "L"
			)
		{
			error = 1;
			console.log("RARE");
		}

		//TYPE
		if(cardData[i][TYPE] != "ルリグ" &&
			cardData[i][TYPE] != "アシストルリグ" &&
			cardData[i][TYPE] != "ピース" &&
			cardData[i][TYPE] != "ピース リレー" &&
			cardData[i][TYPE] != "ピース クラフト" &&
			cardData[i][TYPE] != "アーツ" &&
			cardData[i][TYPE] != "アーツ クラフト" &&
			cardData[i][TYPE] != "シグニ" &&
			cardData[i][TYPE] != "シグニ クラフト" &&
			cardData[i][TYPE] != "シグニ レゾナ/クラフト" &&
			cardData[i][TYPE] != "スペル" &&
			cardData[i][TYPE] != "スペル クラフト"
			)
		{
			error = 1;
			console.log("TYPE");
		}
		else
		{
			if(cardData[i][TYPE] == "ルリグ")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listLrig.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listLrig.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "0" &&
					cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2" &&
					cardData[i][LEVEL] != "3" &&
					cardData[i][LEVEL] != "4")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][ID] == "WXDi-P11-010B" || cardData[i][ID] == "WXDi-P13-003B")
				{
					if(cardData[i][COST] != "")
					{
						error = 1;
						console.log("COST");
					}
				}
				else
				{
					if(cardData[i][COST].indexOf("×") == -1)
					{
						error = 1;
						console.log("COST");
					}
				}

				//LIMIT
				if(cardData[i][LEVEL] == 0)
				{
					if(cardData[i][LIMIT] != 0)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 1)
				{
					if(cardData[i][LIMIT] != 2)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 2)
				{
					if(cardData[i][ID] == "SP38-008")
					{
						if(cardData[i][LIMIT] != 6)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
					else
					{
						if(cardData[i][LIMIT] != 5)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
				}
				else if(cardData[i][LEVEL] == 3)
				{
					if(cardData[i][ID] == "WXDi-P11-010B")
					{
						if(cardData[i][LIMIT] != 9)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
					else if(cardData[i][ID] == "WXDi-P11-010A")
					{
						if(cardData[i][LIMIT] != 5)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
					else
					{
						if(cardData[i][LIMIT] != 6)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][CLASS] == "リル" ||
					cardData[i][CLASS] == "ドーナ" ||
					cardData[i][CLASS] == "あや" ||
					cardData[i][CLASS] == "カーニバル" ||
					cardData[i][CLASS] == "レイラ" ||
					cardData[i][CLASS] == "メル" ||
					cardData[i][CLASS] == "ママ" ||
					cardData[i][CLASS] == "ナナシ" ||
					cardData[i][CLASS] == "グズ子"
					)
				{
					if(cardData[i][LEVEL] == 0 || cardData[i][LEVEL] == 3)
					{
						if(cardData[i][COIN] == "")
						{
							error = 1;
							console.log("COIN");
						}
					}
				}
				else
				{
					if(cardData[i][COIN] != "")
					{
						error = 1;
						console.log("COIN");
					}
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][CLASS] == "アト" ||
					(cardData[i][CLASS] == "タウィル" && cardData[i][ID].indexOf("WXDi-P16"))||
					(cardData[i][CLASS] == "ウムル" && cardData[i][ID].indexOf("WXDi-P16"))
					)
				{
					if(cardData[i][TEAM] != "アンシエント・サプライズ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "リゼ" ||
					cardData[i][CLASS] == "アンジュ" ||
					cardData[i][CLASS] == "とこ"
					)
				{
					if(cardData[i][TEAM] != "さんばか")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ヒラナ" ||
					cardData[i][CLASS] == "アキノ" ||
					cardData[i][CLASS] == "レイ"
					)
				{
					if(cardData[i][TEAM] != "No Limit")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "LION" ||
					cardData[i][CLASS] == "LOVIT" ||
					cardData[i][CLASS] == "WOLF"
					)
				{
					if(cardData[i][TEAM] != "Card Jockey")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "タマゴ" ||
					cardData[i][CLASS] == "ノヴァ" ||
					cardData[i][CLASS] == "バン"
					)
				{
					if(cardData[i][TEAM] != "うちゅうのはじまり")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ムジカ" ||
					cardData[i][CLASS] == "マドカ" ||
					cardData[i][CLASS] == "サンガ"
					)
				{
					if(cardData[i][TEAM] != "DIAGRAM")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "エクス" ||
					cardData[i][CLASS] == "デウス" ||
					cardData[i][CLASS] == "マキナ"
					)
				{
					if(cardData[i][TEAM] != "デウス・エクス・マキナ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "みこみこ" ||
					cardData[i][CLASS] == "まほまほ" ||
					cardData[i][CLASS] == "ゆかゆか"
					)
				{
					if(cardData[i][TEAM] != "きゅるきゅるーん☆")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "アザエラ" ||
					cardData[i][CLASS] == "ガブリエラ" ||
					cardData[i][CLASS] == "ミカエラ"
					)
				{
					if(cardData[i][TEAM] != "夢限少女")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else
				{
					if(cardData[i][TEAM] != "")
					{
						error = 1;
						console.log("TEAM");
					}
				}
			}
			else if(cardData[i][TYPE] == "アシストルリグ")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listLrig.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listLrig.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LEVEL] == 1)
				{
					if(cardData[i][LIMIT] != 0)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 2)
				{
					if(cardData[i][LIMIT] != 1)
					{
						error = 1;
						console.log("LIMIT");
					}
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][CLASS] == "アト" ||
					cardData[i][CLASS] == "タウィル" ||
					cardData[i][CLASS] == "ウムル"
					)
				{
					if(cardData[i][TEAM] != "アンシエント・サプライズ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "リゼ" ||
					cardData[i][CLASS] == "アンジュ" ||
					cardData[i][CLASS] == "とこ"
					)
				{
					if(cardData[i][TEAM] != "さんばか")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ヒラナ" ||
					cardData[i][CLASS] == "アキノ" ||
					cardData[i][CLASS] == "レイ"
					)
				{
					if(cardData[i][TEAM] != "No Limit")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "LION" ||
					cardData[i][CLASS] == "LOVIT" ||
					cardData[i][CLASS] == "WOLF"
					)
				{
					if(cardData[i][TEAM] != "Card Jockey")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "タマゴ" ||
					cardData[i][CLASS] == "ノヴァ" ||
					cardData[i][CLASS] == "バン"
					)
				{
					if(cardData[i][TEAM] != "うちゅうのはじまり")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ムジカ" ||
					cardData[i][CLASS] == "マドカ" ||
					cardData[i][CLASS] == "サンガ"
					)
				{
					if(cardData[i][TEAM] != "DIAGRAM")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "エクス" ||
					cardData[i][CLASS] == "デウス" ||
					cardData[i][CLASS] == "マキナ"
					)
				{
					if(cardData[i][TEAM] != "デウス・エクス・マキナ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "みこみこ" ||
					cardData[i][CLASS] == "まほまほ" ||
					cardData[i][CLASS] == "ゆかゆか"
					)
				{
					if(cardData[i][TEAM] != "きゅるきゅるーん☆")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "アザエラ" ||
					cardData[i][CLASS] == "ガブリエラ" ||
					cardData[i][CLASS] == "ミカエラ"
					)
				{
					if(cardData[i][TEAM] != "夢限少女")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else
				{
					if(cardData[i][TEAM] != "")
					{
						error = 1;
						console.log("TEAM");
					}
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー" || cardData[i][TYPE] == "ピース クラフト")
			{
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "アーツ" || cardData[i][TYPE] == "アーツ クラフト")
			{
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "シグニ クラフト" || cardData[i][TYPE] == "シグニ レゾナ/クラフト")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listType.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listType.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2" &&
					cardData[i][LEVEL] != "3")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST] != "")
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "" && cardData[i][ID] != "WXDi-P07-050")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] == "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				// if(cardData[i][LB] == "0" &&
				// 	cardData[i][LB] != "1")
				// {
				// 	error = 1;
				// 	console.log("LB");
				// }

				//LB 欄位必須是 "0" 或 "1" (空白會讓 LB Order / 統計判斷錯誤)
				if(cardData[i][LB] != "0" && cardData[i][LB] != "1")
				{
					error = 1;
					console.log("LB empty");
				}

				if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
				{
					if(cardData[i][LB] == "1")
					{
						error = 1;
						console.log("LB");
					}
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
						console.log("JP_TEXT");
					}
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
				}
			}
			else if(cardData[i][TYPE] == "スペル" || cardData[i][TYPE] == "スペル クラフト")
			{
				
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
				}

				//LB 欄位必須是 "0" 或 "1" (空白會讓 LB Order / 統計判斷錯誤)
				if(cardData[i][LB] != "0" && cardData[i][LB] != "1")
				{
					error = 1;
					console.log("LB empty");
				}

				//LB
				if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") != -1)
				{
					if(cardData[i][LB] != "1")
					{
						error = 1;
						console.log("LB");
					}
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
						console.log("JP_TEXT");
					}
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
				}
			}
		}

		//COLOR
		error_tmp = 1;
		for(j = 0; j < cardData[i][COLOR].length; j++)
		{
			if(cardData[i][COLOR].indexOf("赤", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("青", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("緑", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("黒", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("白", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("無", j) != -1)
			{
				error_tmp = 0;
			}
			else
			{
				error_tmp = 1;
				break;
			}
		}
		if(error_tmp)
		{
			error = 1;
		}

		if(error == 1)
		{
			ret = 1;
			console.log(cardData[i][ID]);
		}

	}

	if(ret == 0)
	{
		console.log("OK");
	}
	else
	{
		console.log("error");
	}
}

function dataInit()
{
	sdeckArr = [];
	pdeckArr = [];
	adeckArr = [];
	ldeckArr = [];

	sdeck_l1 = 0;
	sdeck_l2 = 0;
	sdeck_l3 = 0;
	sdeck_spell = 0;

	sdeck_red = 0;
	sdeck_blue = 0;
	sdeck_green = 0;
	sdeck_black = 0;
	sdeck_white = 0;
	sdeck_nocolor = 0;

	sdeck_burst = 0;
	sdeck_no_burst = 0;
	
	sdeck_nostory = 0;
	sdeck_dissona = 0;

	showAlldeck();
}

function changePage(x)
{
	if(rdeckArr.length <= 10)
	{
		return;
	}
	if(x == "back")
	{
		if(page != 0)
		{
			page--;
		}
		else
		{
			if(rdeckArr.length % 10 != 0)
			{
				page = parseInt(rdeckArr.length / 10);
			}
			else
			{
				page = parseInt(rdeckArr.length / 10 - 1);
			}
		}
	}
	else
	{
		if((page + 1) * 10 < rdeckArr.length)
		{
			page++;
		}
		else
		{
			page = 0;
		}
	}

	showrdeck();
}

function showList()
{
	var str = "", i = 0, j = 0, flag = 0, sdecklistArr = [], sdecklist = [], racelistArr = [], racelist = [];


	
	str += "<table>";
	str += "<tr>";
	str += "<td>";
	str += "<br>ルリグ<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < ldeckArr.length; i++)
	{
		if(ldeckArr[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + ldeckArr[i][ID] + "<td/><td>" + ldeckArr[i][NAME] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br>ピース<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < pdeckArr.length; i++)
	{
		if(pdeckArr[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + pdeckArr[i][ID] + "<td/><td>" + pdeckArr[i][NAME] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br>アーツ<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < adeckArr.length; i++)
	{
		if(adeckArr[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + adeckArr[i][ID] + "<td/><td>" + adeckArr[i][NAME] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br>シグニ<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < sdeckArr.length; i++)
	{
		flag = 0;
		for(j = 0; j < sdecklist.length; j++)
		{
			if(sdeckArr[i][ID] == sdecklist[j][0])
			{
				sdecklist[j][2]++;

				flag = 1;
				break;
			}
		}

		if(flag == 0)
		{
			sdecklistArr = [];
			sdecklistArr[0] = sdeckArr[i][ID];
			sdecklistArr[1] = sdeckArr[i][NAME];
			sdecklistArr[2] = 1;
			sdecklist.push(sdecklistArr);
			
		}
		
	}

	for(i = 0; i < sdeckArr.length; i++)
	{
		var flag = 0, racestr = "";

		if(sdeckArr[i][TYPE] != "シグニ")
		{
			continue;
		}
		
		if(sdeckArr[i][CLASS].indexOf("/") != -1)
		{
			racestr = sdeckArr[i][CLASS].slice(sdeckArr[i][CLASS].indexOf("/") + 1);
		}
		else
		{
			racestr = sdeckArr[i][CLASS];
		}

		for(j = 0; j < racelist.length; j++)
		{
			if(racestr == racelist[j][0])
			{
				racelist[j][1]++;

				flag = 1;
				break;
			}
		}

		if(flag == 0)
		{
			racelistArr = [];
			racelistArr[0] = racestr;
			racelistArr[1] = 1;
			racelist.push(racelistArr);
		}
		
	}

	for(i = 0; i < sdecklist.length; i++)
	{
		if(sdecklist[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>" + sdecklist[i][2] + "</td><td style='width: 130px;'>" + sdecklist[i][0] + "<td/><td>" + sdecklist[i][1] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br><br>";
	str += "</td>";
	str += "<td style='vertical-align:text-top;padding-left: 75px;'>";
	str += "<table style='margin-top: 60px'>";
	str += "<tr>";
	for(i = 0; i < racelist.length; i++)
	{
		str += "<td style='width: 30px; padding-left:20px'>" + racelist[i][1] + "</td><td>" + racelist[i][0] + "<td/>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "</td>";
	str += "</tr>";
	str += "</table>";
	$("#decklist").html(str);
}

function copyClipboard()
{
	const inputText = document.querySelector('#textCode');
  	inputText.select();
  	document.execCommand('copy');
  	$("#deckStr").html("Deck code copied!");
}

function addDecklist()
{
	var i = 0, ret = 0;
	var title_val = $("#deckTitle").val();

	if(title_val == 0)
	{
		alert("Do not set empty string as title.");
		return;
	}

	if( title_val.indexOf("_HOLOcomment") != -1 || 
			title_val.indexOf("_WXcomment") != -1 ||
			title_val.indexOf("_NAcomment") != -1
		)
	{
		alert("Invalid deck title.");
		return;
	}

  	for(i = 0; i < deckNamelist.length; i++)
  	{
  		if(deckNamelist[i] == $("#deckTitle").val())
  		{
  			ret = confirm("Deck exist. Do you want to overwrite it?");

  			if(!ret)
  			{
  				return;
  			}
  		}
  	}

  	readSingleCode();
  	$("#deckStr").html("Deck has been added.");

  	asStore.setItem($("#deckTitle").val(), $("#textCode").val());

  	if(!ret)
  	{
  		deckNamelist.push($("#deckTitle").val());
  	}

  	updateDecklist($("#deckTitle").val());
}

function updateDecklist(select)
{
	var str = "", i = 0;

	str += "<option value=''>--Select Deck--</option>";

	for(i = 0; i < deckNamelist.length; i++)
	{
		if(select == deckNamelist[i])
		{
			str += "<option value='" + deckNamelist[i] + "' selected>" + deckNamelist[i] +"</option>";
		}
		else
		{
			str += "<option value='" + deckNamelist[i] + "'>" + deckNamelist[i] +"</option>";
		}
	}

	asStore.setItem("DeckNameList", JSON.stringify(deckNamelist));

	$("#selectDeck").html(str);
}

function show_src_rotate(x, id)
{
	if($(x).attr("src") == "https://www.takaratomy.co.jp/products/wixoss/img/card/PR/PR-Di035.jpg")
	{
		$(x).attr("src", "img/PR-Di035_rotate.jpg");
	}
	else if($(x).attr("src") == "https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/" + id + ".jpg" && id.indexOf("WX25-CP1") != -1)
	{
		$(x).attr("src", "img/" + id + "_rotate.jpg");
	}
	else if($(x).attr("src") == "https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/" + id + ".jpg" && id.indexOf("WX25-CD1") != -1)
	{
		$(x).attr("src", "img/" + id + "_rotate.jpg");
	}
	else if($(x).attr("src") == "https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/" + id + ".jpg" && id.indexOf("WX26-CP1") != -1)
	{
		$(x).attr("src", "img/" + id + "_rotate.jpg");
	}
}

function rearrange_ldeck()
{
	var i, tmp = 0;

	var L1type = "", L2type = "", L3type = "", L4type = "", L1count = 0, L2count = 0, L3count = 0, L4count = 0;
	var lv0count = 0;
	var lv1count = 0;

	for(i = 0; i < 10; i++)
	{
		$("#show_ldeck_" + parseInt(i)).hide();
	}

	if(ldeckArr.length + adeckArr.length > 10 || ldeckArr.length == 0)
	{
		return false;
	}

	for(i = 0; i < ldeckArr.length; i++)
	{
		if(ldeckArr[i][LEVEL] == 0)
		{
			lv0count++;
		}

		if(ldeckArr[i][LEVEL] == 1 && ldeckArr[i][TYPE] == "ルリグ")
		{
			lv1count++;
		}

		if(ldeckArr[i][CLASS] != L1type && L1count == 0)
		{
			L1type = ldeckArr[i][CLASS];
			L1count++;
			continue;
		}
		else if(ldeckArr[i][CLASS] == L1type)
		{
			L1count++;
			continue;
		}

		if(ldeckArr[i][CLASS] != L2type && L2count == 0)
		{
			L2type = ldeckArr[i][CLASS];
			L2count++;
			continue;
		}
		else if(ldeckArr[i][CLASS] == L2type)
		{
			L2count++;
			continue;
		}

		if(ldeckArr[i][CLASS] != L3type && L3count == 0)
		{
			L3type = ldeckArr[i][CLASS];
			L3count++;
			continue;
		}
		else if(ldeckArr[i][CLASS] == L3type)
		{
			L3count++;
			continue;
		}

		if(ldeckArr[i][CLASS] != L4type && L4count == 0)
		{
			L4type = ldeckArr[i][CLASS];
			L4count++;
			continue;
		}
		else if(ldeckArr[i][CLASS] == L4type)
		{
			L4count++;
			continue;
		}
	}

	for(i = 0; i < ldeckArr.length + adeckArr.length; i++)
	{
		if(ldeckArr.length > i)
		{
			$("#show_ldeck_" + parseInt(i)).attr("src", ldeckArr[i][SRC]);
		}
		else
		{
			$("#show_ldeck_" + parseInt(i)).attr("src", adeckArr[i - ldeckArr.length][SRC]);
			show_src_rotate("#show_ldeck_" + parseInt(i), adeckArr[i - ldeckArr.length][ID]);
		}

		$("#show_ldeck_" + parseInt(i)).show();
	}


	// for(i = 0; i < L1count; i++)
	// {
	// 	$("#show_ldeck_" + i).attr("src", ldeckArr[i][SRC]);
	// 	show_src_rotate("#show_ldeck_" + i);
	// 	$("#show_ldeck_" + i).show();
	// }

	// if(L2count == 0 && L3count == 0 && L4count == 0)
	// {
	// 	for(i = 0; i < adeckArr.length; i++)		
	// 	{
	// 		$("#show_ldeck_" + parseInt(i + 5)).attr("src", adeckArr[i][SRC]);
	// 		show_src_rotate("#show_ldeck_" + parseInt(i + 5));
	// 		$("#show_ldeck_" + parseInt(i + 5)).show();
	// 	}
	// }
	// else
	// {
	// 	for(i = 0; i < L2count; i++)
	// 	{
	// 		$("#show_ldeck_" + parseInt(i + 5)).attr("src", ldeckArr[i + L1count][SRC]);
	// 		$("#show_ldeck_" + parseInt(i + 5)).show();
	// 	}

	// 	for(i = 0; i < L3count; i++)
	// 	{
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count)).attr("src", ldeckArr[i + L1count + L2count][SRC]);
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count)).show();
	// 	}

	// 	for(i = 0; i < L4count; i++)
	// 	{
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count + L3count)).attr("src", ldeckArr[i + L1count + L2count + L3count][SRC]);
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count + L3count)).show();
	// 	}

	// 	for(i = 0; i < adeckArr.length; i++)
	// 	{
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count + L3count + L4count)).attr("src", adeckArr[i][SRC]);
	// 		show_src_rotate("#show_ldeck_" + parseInt(i + 5 + L2count + L3count + L4count));
	// 		$("#show_ldeck_" + parseInt(i + 5 + L2count + L3count + L4count)).show();
	// 	}
	// }

	return true;
}

function resetDefault()
{
	var ret = 0;
	var i = 0;
	
	deckNamelist = JSON.parse(asStore.getItem("DeckNameList"));
	
	if(deckNamelist == null)
	{
		deckNamelist = [];
	}

	ret = confirm("It will delete all custom deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		for(i = 0; i < deckNamelist.length; i++)
		{
			asStore.removeItem(deckNamelist[i]);
		}

		asStore.removeItem("DeckNameList");
		
		location.reload();
	}
}

function resetComment()
{
	var ret = 0;
	var i = 0;
	
	ret = confirm("It will delete all custom comment. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		for(i = 0; i < cardData.length; i++)
		{
			asStore.removeItem(cardData[i][ID] + "_WXcomment");
		}
	}
}

function checkAndRedirectToMobile(targetUrl) {
	return;
    // 定義常見的行動裝置關鍵字 (Regex)
    const mobileKeywords = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
        /Opera Mini/i,
        /IEMobile/i
    ];

    // 檢查瀏覽器的 userAgent 是否包含上述任一關鍵字
    const isMobile = mobileKeywords.some((keyword) => {
        return navigator.userAgent.match(keyword);
    });

    // 如果偵測到是行動裝置
    if (isMobile) {
        // 跳出 confirm 視窗 (回傳值為 true 或 false)
        const userAgreed = confirm("Mobile device detected. Would you like to go to the mobile site for a better experience?");

        // 如果使用者按「確定」，執行跳轉
        if (userAgreed) {
            window.location.href = targetUrl;
        }
        // 如果按「取消」，什麼都不做，留在原頁面
    }
}

/* =========================================================================
 * Comment profile — single-profile management
 * Re-uses the same popup style as the deck Add flow, but trimmed down:
 * the user gets one in-memory profile (the live "<id>_WXcomment" entries
 * in localStorage) plus three actions on it — Download, Upload, Copy.
 *
 *   openCommentManager()  — collect current comments, fill the textarea,
 *                           open the popup. Bound to the "Comment" button.
 *   downloadCommentBlob() — save textarea contents as a .json file.
 *   readSingleCommentFile() — read a .json file, replace current comments,
 *                             update the textarea.
 *   copyCommentClipboard() — copy textarea to the clipboard.
 *
 * Format (JSON, pretty-printed):
 *   [["WX25-CD1-01","comment text"], ["WX25-CD1-02","another"]]
 * ========================================================================= */

function collectCurrentComments()
{
	// Iterate cardData so we capture comments for every known card
	// (mirrors how resetComment iterates cardData).
	var i = 0;
	var pairs = [];
	var v = "";

	for(i = 0; i < cardData.length; i++)
	{
		v = asStore.getItem(cardData[i][ID] + "_WXcomment");
		if(v != null && v !== "")
		{
			pairs.push([cardData[i][ID], v]);
		}
	}
	return pairs;
}

function applyCommentPairs(pairs)
{
	// Replace current comments with the supplied set. Wipe first so the
	// uploaded profile is the new source of truth (matches the user's
	// mental model: "this file is now my comments").
	var i = 0;
	for(i = 0; i < cardData.length; i++)
	{
		asStore.removeItem(cardData[i][ID] + "_WXcomment");
	}

	for(i = 0; i < pairs.length; i++)
	{
		if(!Array.isArray(pairs[i]) || pairs[i].length < 2) continue;
		var id = pairs[i][0];
		var txt = pairs[i][1];
		if(id && txt !== undefined && txt !== null && txt !== "")
		{
			asStore.setItem(id + "_WXcomment", txt);
		}
	}
}

function openCommentManager()
{
	// Snapshot the current comments into the textarea every time the popup
	// opens, so the displayed text is always up to date.
	var pairs = collectCurrentComments();
	$("#textCommentCode").val(JSON.stringify(pairs, null, 2));
	$("#commentStr").html("　　");

	customizeWindowEvent('comment');
}

function downloadCommentBlob(contentType)
{
	var content = $("#textCommentCode").val();
	var filename = "comments.json";

	var blob = new Blob([content], { type: contentType });
	var url = URL.createObjectURL(blob);

	var pom = document.createElement('a');
	pom.href = url;
	pom.setAttribute('download', filename);
	pom.click();

	$("#commentStr").html("Comment file downloaded.");
}

function copyCommentClipboard()
{
	const inputText = document.querySelector('#textCommentCode');
	inputText.select();
	document.execCommand('copy');
	$("#commentStr").html("Comment code copied!");
}

function addSingleComment()
{
	// Read the two input fields, validate the ID against cardData (so we
	// don't pollute localStorage with typos), write the comment, then
	// refresh the textarea so the user sees their entry land in the JSON.
	var id = $.trim($("#addCommentId").val());
	var txt = $("#addCommentText").val();

	if(id === "")
	{
		alert("Please enter a card ID.");
		return;
	}

	var found = false;
	var i = 0;
	for(i = 0; i < cardData.length; i++)
	{
		if(cardData[i][ID] == id)
		{
			found = true;
			break;
		}
	}
	if(!found)
	{
		alert('Card ID "' + id + '" was not found.');
		return;
	}

	if(txt === null || txt === undefined || txt === "")
	{
		// Empty text -> remove, mirroring setComment()'s behaviour for the
		// in-card editor.
		asStore.removeItem(id + "_WXcomment");
		$("#commentStr").html('Comment for ' + id + ' cleared.');
	}
	else
	{
		asStore.setItem(id + "_WXcomment", txt);
		$("#commentStr").html('Comment for ' + id + ' saved.');
	}

	// Refresh the JSON textarea so the change is visible immediately.
	var pairs = collectCurrentComments();
	$("#textCommentCode").val(JSON.stringify(pairs, null, 2));

	// Clear the comment field but keep the ID, so a user adding several
	// comments to the same card doesn't have to retype it.
	$("#addCommentText").val("");
}

function deleteSingleComment()
{
	// Remove a single card's comment by ID. We don't validate against
	// cardData here (unlike addSingleComment) because the comment may
	// belong to a card that's no longer in cardData (e.g. an old set);
	// the user should still be able to clean it out.
	var id = $.trim($("#deleteCommentId").val());

	if(id === "")
	{
		alert("Please enter a card ID.");
		return;
	}

	var existing = asStore.getItem(id + "_WXcomment");
	if(existing === null)
	{
		alert('No comment found for "' + id + '".');
		return;
	}

	asStore.removeItem(id + "_WXcomment");

	// Refresh the JSON textarea so the deletion is visible immediately.
	var pairs = collectCurrentComments();
	$("#textCommentCode").val(JSON.stringify(pairs, null, 2));

	$("#commentStr").html('Comment for ' + id + ' deleted.');
	$("#deleteCommentId").val("");
}

function resetAllCommentsFromManager()
{
	// Wipe every "<id>_WXcomment" entry in localStorage and refresh the
	// textarea so the user immediately sees the cleared state. Mirrors
	// resetComment(), but additionally keeps the popup UI in sync.
	var ret = confirm("This will permanently delete ALL custom comments. Are you sure?");
	if(!ret)
	{
		return;
	}

	var i = 0;
	for(i = 0; i < cardData.length; i++)
	{
		asStore.removeItem(cardData[i][ID] + "_WXcomment");
	}

	// Belt-and-suspenders: also sweep any stray "*_WXcomment" keys that
	// no longer correspond to a card in cardData, so a "Reset All" really
	// does leave zero comments behind.
	try
	{
		var stray = [];
		for(i = 0; i < asStore.length; i++)
		{
			var k = asStore.key(i);
			if(k && k.indexOf("_WXcomment") === k.length - "_WXcomment".length)
			{
				stray.push(k);
			}
		}
		for(i = 0; i < stray.length; i++)
		{
			asStore.removeItem(stray[i]);
		}
	}
	catch(err)
	{
		// localStorage iteration shouldn't fail in practice; ignore so the
		// primary reset above still counts as a success.
	}

	// Refresh the textarea so the (now empty) JSON is visible.
	var pairs = collectCurrentComments();
	$("#textCommentCode").val(JSON.stringify(pairs, null, 2));

	// Clear the inline edit fields too, so it's obvious nothing is staged.
	$("#addCommentId").val("");
	$("#addCommentText").val("");
	$("#deleteCommentId").val("");

	$("#commentStr").html("All comments have been reset.");
}

function readSingleCommentFile(evt)
{
	// Upload directly applies the file's contents to localStorage so the
	// popup only has the three actions the user asked for (download /
	// upload / copy) — no separate "Apply" step needed.
	var f = evt.target.files[0];

	if(!f)
	{
		return;
	}

	var r = new FileReader();
	r.onload = function(e) {
		var contents = e.target.result;
		var parsed = null;

		try
		{
			parsed = JSON.parse(contents);
		}
		catch(err)
		{
			alert("Uploaded file is not valid JSON.");
			return;
		}

		if(!Array.isArray(parsed))
		{
			alert("Uploaded JSON must be an array of [id, text] pairs.");
			return;
		}

		applyCommentPairs(parsed);
		$("#textCommentCode").val(JSON.stringify(parsed, null, 2));
		$("#commentStr").html("Comments loaded and applied.");
	};
	r.readAsText(f);

	// Allow re-uploading the same file (browsers skip the change event
	// otherwise).
	evt.target.value = "";
}

function showVersion()
{
	var str = "";

	str += "Author: ZZZ\n";
	str += "E-mail: relax100002000@hotmail.com\n";
	str += "\n";
	str += "20261122 v2.17\n";
	str += "1.同名卡圖新增手動補充資料(js/same_name_extra.js)，補上官網缺漏的SPDi33-06 サーバント #卡圖\n";
	str += "\n";
	str += "20261122 v2.16\n";
	str += "1.滑鼠移到牌組的卡再點預覽大圖，改為替換該張卡圖(不再加入新的一張)\n";
	str += "2.異圖視窗新增「加入一張／替換牌組裡的一張」切換，可選要替換哪一張；牌組已滿時自動切換為替換(手機版也可用)\n";
	str += "3.手機版異圖視窗：取消放大預覽、加深背景、縮小縮圖\n";
	str += "\n";
	str += "20261122 v2.15\n";
	str += "1.牌組中使用同名卡圖時，卡片資料的略号、カード名連結與價格改為顯示該卡圖的卡號(註解仍共用原卡號)\n";
	str += "2.卡價更新也抓取同名卡圖(平行版等)的卡號價格\n";
	str += "3.Card Search APP：點選異圖時，略号、カード名連結與價格一併切換\n";
	str += "\n";
	str += "20261122 v2.14\n";
	str += "1.新增Card Search APP連結(search/)：手機用卡片搜尋／猜名測驗App\n";
	str += "2.顏色、使用タイミング新增比對方式選單(いずれかを含む／すべて含む／完全一致)，「多色のみ」改為只排除單色卡\n";
	str += "3.新增同名卡圖(異圖)：點預覽大圖列出官方卡片庫所有同名卡圖，選一張即以該卡圖加入牌組，存檔記錄該卡圖卡號(open!batoru匯出仍用原卡號)\n";
	str += "4.牌組中ALT＋點卡(手機版長按)可替換該張卡圖\n";
	str += "\n";
	str += "20261103 v2.13\n";
	str += "1.更新WX26-P2中文\n";
	str += "\n";
	str += "預計更新:\n";
	str += "-補充關於說明\n";

	alert(str);
}

// 比對模式切到「すべて含む／完全一致」時，若該組全勾（必定 0 張）則自動取消該組勾選
document.addEventListener('change', function(e){
	var groups = {
		colorMode: ['white', 'red', 'blue', 'green', 'black', 'nocolor'],
		timingMode: ['mainphase', 'attackphase', 'spellcutin']
	};
	var ids = e.target ? groups[e.target.id] : null;

	if(!ids || e.target.value == "any")
	{
		return;
	}

	var all = ids.every(function(id){ var el = document.getElementById(id); return el && el.checked; });

	if(all)
	{
		ids.forEach(function(id){ document.getElementById(id).checked = false; });
	}
});

/* ===================== 同名卡圖（js/same_name.js） =====================
 * 點預覽大圖：若該卡在官方卡片庫有其他同名卡圖，列出全部；點選其中一張即以該卡圖加入牌組。
 * 牌組列（cardData 的複本）額外記錄 ART（第 20 欄）＝所選卡圖的卡號、SRC 換成該卡圖。
 * 存檔／CSV 寫卡圖卡號；open!batoru 匯出照舊依卡名換成原卡號。讀檔時找不到的卡號用同名表還原。 */
var ART = 19;
var pendingArtId = null;
var bigPicSource = '', bigPicTile = null;
var sameNameMap = null, sameNameById = null;
var sameNameExtraImg = {};

function sameNameKey(n)
{
	return String(n).normalize('NFKC').replace(/\s+/g, ' ').trim().replace(/\s*\([^()]*\)$/, '').trim();
}

// 這些系列的卡名括號是正式卡名的一部分（例：プリンセス・ネージュ(雪の花) 與 (蕾を開き、花は咲く) 是不同的卡），同名比對要保留括號
var SAME_NAME_PAREN_IDS = /^(WX26-CP1|SPDi47)-/;

function sameNameFullKey(n)
{
	return String(n).normalize('NFKC').replace(/\s+/g, ' ').trim();
}

function cardSameNameKey(card)
{
	return SAME_NAME_PAREN_IDS.test(card[ID]) ? sameNameFullKey(card[NAME]) : sameNameKey(card[NAME]);
}

function initSameName()
{
	if(sameNameMap) return;
	sameNameMap = {}; sameNameById = {};
	if(typeof SAME_NAME_RAW === 'undefined') return;
	SAME_NAME_RAW.split('\n').forEach(function(line){
		var p = line.split('\t');
		if(p.length < 2) return;
		var ids = p[1].split(',');
		sameNameMap[p[0]] = ids;
		ids.forEach(function(id){ sameNameById[id] = p[0]; });
	});
	// 括號屬於卡名的系列：依卡表的完整卡名重新分組（048U 這類卡號對應到 048）
	var fullById = {};
	for(var c = 0; c < cardData.length; c++)
	{
		if(SAME_NAME_PAREN_IDS.test(cardData[c][ID])) fullById[cardData[c][ID]] = sameNameFullKey(cardData[c][NAME]);
	}
	Object.keys(sameNameMap).forEach(function(key){
		var keep = [];
		sameNameMap[key].forEach(function(id){
			var full = fullById[id] || fullById[id.replace(/[A-Z]+$/, '')];
			if(full && full != key)
			{
				(sameNameMap[full] || (sameNameMap[full] = [])).push(id);
				sameNameById[id] = full;
			}
			else keep.push(id);
		});
		if(keep.length) sameNameMap[key] = keep; else delete sameNameMap[key];
	});
	// 手動補充的卡圖（js/same_name_extra.js）
	if(typeof SAME_NAME_EXTRA !== 'undefined')
	{
		SAME_NAME_EXTRA.forEach(function(x){
			var key = x[0], id = x[1], list = sameNameMap[key] || (sameNameMap[key] = []);
			if(list.indexOf(id) == -1)
			{
				var at = x[3] ? list.indexOf(x[3]) : -1;
				if(at >= 0) list.splice(at + 1, 0, id); else list.push(id);
			}
			sameNameById[id] = key;
			sameNameExtraImg[id] = x[2];
		});
	}
}

function artSrc(id)
{
	initSameName();
	if(sameNameExtraImg[id]) return sameNameExtraImg[id];
	return SAME_NAME_IMG_BASE + id.split('-')[0] + '/' + id + '.jpg';
}

// 回傳 [{id, src}]：本卡在最前，其餘依官方卡片庫順序
function sameNameArts(card)
{
	initSameName();
	var list = [{id: card[ID], src: card[SRC]}];
	var ids = sameNameMap[cardSameNameKey(card)] || [];
	for(var k = 0; k < ids.length; k++)
	{
		if(ids[k] != card[ID]) list.push({id: ids[k], src: artSrc(ids[k])});
	}
	return list;
}

function withArt(card, artId)
{
	if(!card || !artId || artId == card[ID]) return card;
	var c = card.slice();
	c[SRC] = artSrc(artId);
	c[ART] = artId;
	return c;
}

function deckCardId(row)
{
	return row[ART] || row[ID];
}

// 讀牌組用：卡號→牌組列（卡表沒有的卡號＝同名卡圖，還原成同名的卡並套上該卡圖）
function findDeckCard(id)
{
	var k;
	for(k = 0; k < cardData.length; k++)
	{
		if(cardData[k][ID] == id) return cardData[k];
	}
	initSameName();
	var key = sameNameById[id];
	if(!key) return null;
	// 同名的卡可能跨世代（ALLSTAR 版），優先選和卡圖同世代的那張
	var diva = /^(WXDi|WX2\d|WDi|SPDi|PR-Di)/, first = null;
	for(k = 0; k < cardData.length; k++)
	{
		if(cardSameNameKey(cardData[k]) != key) continue;
		if(diva.test(cardData[k][ID]) == diva.test(id)) return withArt(cardData[k], id);
		if(!first) first = cardData[k];
	}
	return first ? withArt(first, id) : null;
}

function addDeckWithArt(baseId, artId)
{
	pendingArtId = artId;
	try { addDeck({alt: baseId}); } finally { pendingArtId = null; }
}

// 預覽大圖的點擊：有同名卡圖就開選擇視窗，沒有就照舊直接加入
function onBigPicClick(x)
{
	if(!x || !x.alt) return;
	var card = null;
	for(var k = 0; k < cardData.length; k++)
	{
		if(cardData[k][ID] == x.alt) { card = cardData[k]; break; }
	}
	if(!card) return;
	if(bigPicSource == 'deck' && bigPicTile && bigPicTile.alt == card[ID] && openReplaceFromTile(bigPicTile)) return;
	var arts = sameNameArts(card);
	if(arts.length <= 1) { addDeck(x); return; }
	openArtPicker(card, arts);
}

// 預覽來自牌組的哪一張：依卡號＋圖片在各牌組區找出那一列，開替換視窗
// 牌組裡所有這張卡（同卡號）的位置
function deckCopies(card)
{
	var out = [], arrs = [ldeckArr, pdeckArr, adeckArr, sdeckArr];
	for(var a = 0; a < arrs.length; a++)
	{
		for(var k = 0; k < arrs[a].length; k++)
		{
			if(arrs[a][k][ID] == card[ID]) out.push({array: arrs[a], index: k});
		}
	}
	return out;
}

function openReplaceFromTile(tile)
{
	var arrs = [ldeckArr, pdeckArr, adeckArr, sdeckArr];
	var src = tile.getAttribute ? tile.getAttribute('src') : '';
	var a, k, fallback = null;
	for(a = 0; a < arrs.length; a++)
	{
		for(k = 0; k < arrs[a].length; k++)
		{
			if(arrs[a][k][ID] != tile.alt) continue;
			if(arrs[a][k][SRC] == src) return openReplacePicker(tile, k, arrs[a]);
			if(!fallback) fallback = arrs[a];
		}
	}
	return fallback ? openReplacePicker(tile, -1, fallback) : false;
}

function openArtPicker(card, arts, replace)
{
	var current = replace ? deckCardId(replace.array[replace.index]) : card[ID];
	// 加入模式下，牌組裡已經有這張卡時可切換成「替換牌組裡的一張」（手機版沒有 ALT／滑鼠移入，靠這個替換）
	var copies = replace ? [] : deckCopies(card);
	var pmode = 'add', target = 0;
	closeArtPicker();
	var ov = document.createElement('div');
	ov.id = 'artPicker';
	ov.setAttribute('style', 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.9);display:flex;flex-direction:column;align-items:center;padding:16px;box-sizing:border-box;');
	var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
	var html = '<div style="width:100%;max-width:1100px;display:flex;align-items:center;gap:12px;color:#fff;margin-bottom:10px;">' +
		'<b style="font-size:18px;flex:1;">' + esc(card[NAME]) + '　同名卡圖 ' + arts.length + ' 張' + (replace ? '　<span style="color:#f0c040;">［替換卡圖］</span>' : '') + '</b>' +
		'<span id="artPickerMsg" style="color:#9f9;font-size:14px;"></span>' +
		'<button type="button" id="artPickerClose" style="font-size:16px;padding:4px 14px;cursor:pointer;">✕</button></div>' +
		'<div style="color:#ddd;font-size:13px;width:100%;max-width:1100px;margin-bottom:8px;">' + (replace ? '點選卡圖即替換牌組裡的這一張（只換這一張，記錄該卡圖的卡號）。' : '點選卡圖即以該卡圖加入牌組（記錄該卡圖的卡號）。' + (artPickerTouch() ? '牌組已有這張卡時，可切換成「替換」。' : '牌組裡的卡可按住 ALT 點擊來替換卡圖。')) + '點背景或按 Esc 關閉。</div>' +
		(copies.length ? '<div id="artPickerMode" style="width:100%;max-width:1100px;color:#fff;font-size:14px;margin-bottom:8px;display:flex;flex-wrap:wrap;align-items:center;gap:8px;"></div>' : '') +
		'<div id="artPickerGrid" style="width:100%;max-width:1100px;flex:1;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(' + (artPickerTouch() ? 96 : 130) + 'px,1fr));gap:10px;align-content:start;">';
	for(var k = 0; k < arts.length; k++)
	{
		var a = arts[k];
		html += '<div class="artPickerItem" data-art="' + esc(a.id) + '" style="cursor:pointer;background:#222;border-radius:8px;padding:6px;text-align:center;' + (a.id == current ? 'outline:3px solid #f0c040;' : '') + '">' +
			'<img loading="lazy" src="' + esc(a.src) + '" alt="' + esc(a.id) + '" style="width:100%;border-radius:6px;display:block;" onerror="this.style.opacity=.3">' +
			'<div style="color:#fff;font-size:12px;margin-top:4px;word-break:break-all;">' + esc(a.id) + (a.id == current ? '（目前）' : '') + '</div></div>';
	}
	html += '</div>';
	html += '<img id="artPickerZoom" alt="" style="position:fixed;display:none;pointer-events:none;z-index:10000;width:360px;max-width:45vw;max-height:90vh;object-fit:contain;border-radius:14px;box-shadow:0 6px 30px rgba(0,0,0,.8);background:#111;">';
	ov.innerHTML = html;
	document.body.appendChild(ov);
	var modeBar = document.getElementById('artPickerMode');
	var renderMode = function(){
		if(!modeBar) return;
		var btn = function(m, label){ return '<button type="button" data-pmode="' + m + '" style="padding:5px 12px;border-radius:999px;cursor:pointer;border:1px solid #f0c040;' + (pmode == m ? 'background:#f0c040;color:#000;font-weight:bold;' : 'background:transparent;color:#f0c040;') + '">' + label + '</button>'; };
		var h = btn('add', '加入一張') + btn('rep', '替換牌組裡的一張（' + copies.length + ' 張）');
		if(pmode == 'rep')
		{
			h += '<span style="margin-left:6px;color:#ddd;">要換哪一張：</span>';
			for(var c = 0; c < copies.length; c++)
			{
				var row = copies[c].array[copies[c].index];
				h += '<span data-copy="' + c + '" style="cursor:pointer;display:inline-flex;flex-direction:column;align-items:center;font-size:11px;color:#fff;padding:2px;border-radius:6px;' + (c == target ? 'outline:3px solid #f0c040;' : 'outline:1px solid #555;') + '">' +
					'<img src="' + esc(row[SRC]) + '" alt="" style="height:64px;border-radius:4px;">' + esc(deckCardId(row)) + '</span>';
			}
		}
		modeBar.innerHTML = h;
	};
	renderMode();
	// 滑鼠移到卡圖上：在游標旁放大預覽（盡量不蓋住目前這張）
	var zoom = document.getElementById('artPickerZoom');
	var placeZoom = function(e){
		var w = zoom.offsetWidth || 360, h = zoom.offsetHeight || 504, gap = 24;
		var x = e.clientX + gap, y = e.clientY - h / 2;
		if(x + w > window.innerWidth - 8) x = e.clientX - gap - w;
		if(x < 8) x = 8;
		y = Math.max(8, Math.min(y, window.innerHeight - h - 8));
		zoom.style.left = x + 'px'; zoom.style.top = y + 'px';
	};
	ov.addEventListener('mouseover', function(e){
		if(artPickerTouch()) return;   // 觸控裝置不顯示游標旁的放大圖（點一下就會選取）
		var item = e.target.closest ? e.target.closest('.artPickerItem') : null;
		if(!item) { zoom.style.display = 'none'; return; }
		var img = item.querySelector('img');
		if(zoom.getAttribute('src') != img.getAttribute('src')) zoom.setAttribute('src', img.getAttribute('src'));
		zoom.style.display = 'block';
		placeZoom(e);
	});
	ov.addEventListener('mousemove', function(e){ if(zoom.style.display == 'block') placeZoom(e); });
	ov.addEventListener('mouseleave', function(){ zoom.style.display = 'none'; });
	ov.addEventListener('click', function(e){
		if(e.target === ov || e.target.id == 'artPickerClose') { closeArtPicker(); return; }
		var pm = e.target.closest ? e.target.closest('[data-pmode]') : null;
		if(pm) { pmode = pm.getAttribute('data-pmode'); renderMode(); return; }
		var cp = e.target.closest ? e.target.closest('[data-copy]') : null;
		if(cp) { target = +cp.getAttribute('data-copy'); renderMode(); return; }
		var item = e.target.closest ? e.target.closest('.artPickerItem') : null;
		if(!item) return;
		var artId = item.getAttribute('data-art');
		if(replace)
		{
			replace.array[replace.index] = withArt(card, artId);
			showAlldeck();
			closeArtPicker();
			return;
		}
		var msg = document.getElementById('artPickerMsg');
		if(pmode == 'rep' && copies[target])
		{
			copies[target].array[copies[target].index] = withArt(card, artId);
			showAlldeck();
			copies = deckCopies(card);
			if(target >= copies.length) target = 0;
			renderMode();
			if(msg) msg.textContent = '已替換成：' + artId;
			return;
		}
		var before = ldeckArr.length + pdeckArr.length + adeckArr.length + sdeckArr.length;
		addDeckWithArt(card[ID], artId);
		var after = ldeckArr.length + pdeckArr.length + adeckArr.length + sdeckArr.length;
		if(after > before)
		{
			copies = deckCopies(card);
			if(msg) msg.textContent = '已加入：' + artId;
			if(!modeBar && copies.length) { closeArtPicker(); openArtPicker(card, arts); var m2 = document.getElementById('artPickerMsg'); if(m2) m2.textContent = '已加入：' + artId; }
			else renderMode();
		}
		else if(copies.length)
		{
			pmode = 'rep'; renderMode();
			if(msg) msg.textContent = '無法再加入（牌組已滿或不符規則），已切換成「替換」：選要換的那張，再點卡圖';
		}
		else if(msg) msg.textContent = '無法加入（牌組已滿或不符規則）';
	});
	document.addEventListener('keydown', artPickerKey);
}

// ALT＋點牌組的卡：找出被點的那一列（シグニ／スペル依卡號＋圖片比對，其他區依位置）
function openReplacePicker(x, idx, array)
{
	if(!x || !x.alt || !array) return false;
	var card = null, k;
	for(k = 0; k < cardData.length; k++)
	{
		if(cardData[k][ID] == x.alt) { card = cardData[k]; break; }
	}
	if(!card) return false;
	var pos = -1;
	if(array[idx] && array[idx][ID] == card[ID] && (!x.getAttribute || array[idx][SRC] == x.getAttribute('src'))) pos = idx;
	for(k = 0; pos < 0 && k < array.length; k++)
	{
		if(array[k][ID] == card[ID] && x.getAttribute && array[k][SRC] == x.getAttribute('src')) pos = k;
	}
	for(k = 0; pos < 0 && k < array.length; k++)
	{
		if(array[k][ID] == card[ID]) pos = k;
	}
	if(pos < 0) return false;
	openArtPicker(card, sameNameArts(card), {array: array, index: pos});
	return true;
}

// 牌組圖（依卡號＋圖片）找出對應的牌組列；找不到就用卡表的那張
function deckRowForTile(x, card)
{
	var src = x && x.getAttribute ? x.getAttribute('src') : '';
	var arrs = [ldeckArr, pdeckArr, adeckArr, sdeckArr];
	for(var a = 0; a < arrs.length; a++)
	{
		for(var k = 0; k < arrs[a].length; k++)
		{
			if(arrs[a][k][ID] == card[ID] && arrs[a][k][SRC] == src) return arrs[a][k];
		}
	}
	return card;
}

// 觸控為主的裝置（手機／平板）：沒有滑鼠移入
function artPickerTouch()
{
	return !!(window.matchMedia && window.matchMedia('(hover: none)').matches);
}

function artPickerKey(e)
{
	if(e.key == 'Escape') closeArtPicker();
}

function closeArtPicker()
{
	var ov = document.getElementById('artPicker');
	if(ov) ov.parentNode.removeChild(ov);
	document.removeEventListener('keydown', artPickerKey);
}


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

// ---- TYPE / LRIG filters ----
// "精武：アーム/ウェポン" -> ["精武：アーム", "精武：ウェポン"]; "精像：悪魔/精武：遊具" -> both; 獸 typo -> 獣
function asClassParts(cls)
{
	var parts = String(cls || "").replace(/獸/g, "獣").split(/[\/\n]/), out = [], prefix = "";
	for(var k = 0; k < parts.length; k++)
	{
		var t = parts[k].replace(/\s+/g, "");
		if(!t) continue;
		var m = t.match(/^(.+?)：(.+)$/);
		if(m) { prefix = m[1]; out.push(t); }
		else if(prefix && !/^(精|奏)/.test(t)) out.push(prefix + "：" + t);
		else out.push(t);
	}
	return out;
}
function asClassMatch(cls, value)
{
	var parts = asClassParts(cls);
	value = String(value).replace(/獸/g, "獣");
	for(var k = 0; k < parts.length; k++)
	{
		if(parts[k] == value) return true;
	}
	return String(cls).indexOf(value) != -1;   // e.g. faction names inside the class field
}
function asLrigMatch(card, value)
{
	var types = String(card[CLASS] || "").split("/");
	if(card[TYPE] == "ルリグ" || card[TYPE] == "アシストルリグ")
	{
		return types.indexOf(value) != -1;
	}
	var lim = String(card[TEAM] || "").match(/^(.+)限定$/);   // ALLSTAR: "タマ限定", "花代/ユヅキ限定"
	return !!(lim && lim[1].split("/").indexOf(value) != -1);
}

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
