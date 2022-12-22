function onLoading()
{
	var i = 0;
	
	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		rdeckArr.push(cardData[i]);
	}

	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
	showInfotable("init");

	$("#textsearch").keydown(function(event) {
	    if(event.keyCode == 13){
	        search();
	    };
	});

	deckNamelist = JSON.parse(localStorage.getItem("DeckNameList"));
	if(deckNamelist == null)
	{
		deckNamelist = [];

		deckNamelist.push("DOUBLE HEROINES -ヒラナ-");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("DOUBLE HEROINES -ヒラナ-", "ldeck,WXDi-D09-H01,WXDi-D09-H02,WXDi-D09-H03,WXDi-D09-H04,WXDi-D09-H05,WXDi-D09-H06,WXDi-D09-H07,WXDi-D09-H08,WXDi-D09-H09,WXDi-D09-H10\npdeck,WXDi-D09-H11,WXDi-D09-H12\nsdeck,WXDi-D09-H28,WXDi-D09-H28,WXDi-D09-H28,WXDi-D09-H28,WXDi-D09-H26,WXDi-D09-H26,WXDi-D09-H26,WXDi-D09-H26,WXDi-D09-H25,WXDi-D09-H25,WXDi-D09-H24,WXDi-D09-H24,WXDi-D09-H21,WXDi-D09-H21,WXDi-D09-H20,WXDi-D09-H20,WXDi-D09-H27,WXDi-D09-H27,WXDi-D09-H23,WXDi-D09-H23,WXDi-D09-H22,WXDi-D09-H22,WXDi-D09-H22,WXDi-D09-H22,WXDi-D09-H19,WXDi-D09-H19,WXDi-D09-H19,WXDi-D09-H19,WXDi-D09-H15,WXDi-D09-H15,WXDi-D09-H18,WXDi-D09-H17,WXDi-D09-H17,WXDi-D09-H16,WXDi-D09-H16,WXDi-D09-H14,WXDi-D09-H13,WXDi-D09-H13,WXDi-D09-H29,WXDi-D09-H29");

		deckNamelist.push("DOUBLE HEROINES -ピルルク-");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("DOUBLE HEROINES -ピルルク-", "ldeck,WXDi-D09-P01,WXDi-D09-P02,WXDi-D09-P03,WXDi-D09-P04,WXDi-D09-P05,WXDi-D09-P06,WXDi-D09-P07,WXDi-D09-P08,WXDi-D09-P09,WXDi-D09-P10\npdeck,WXDi-D09-P11,WXDi-D09-P12\nsdeck,WXDi-D09-P24,WXDi-D09-P24,WXDi-D09-P24,WXDi-D09-P24,WXDi-D09-P23,WXDi-D09-P23,WXDi-D09-P23,WXDi-D09-P23,WXDi-D09-P21,WXDi-D09-P21,WXDi-D09-P21,WXDi-D09-P21,WXDi-D09-P19,WXDi-D09-P19,WXDi-D09-P19,WXDi-D09-P19,WXDi-D09-P22,WXDi-D09-P22,WXDi-D09-P22,WXDi-D09-P22,WXDi-D09-P20,WXDi-D09-P20,WXDi-D09-P18,WXDi-D09-P18,WXDi-D09-P17,WXDi-D09-P16,WXDi-D09-P16,WXDi-D09-P15,WXDi-D09-P15,WXDi-D09-P14,WXDi-D09-P14,WXDi-D09-P13,WXDi-D09-P26,WXDi-D09-P26,WXDi-D09-P27,WXDi-D09-P27,WXDi-D09-P27,WXDi-D09-P27,WXDi-D09-P25,WXDi-D09-P25");

		deckNamelist.push("WHITE HOPE");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("WHITE HOPE", "ldeck,WXDi-D08-001,WXDi-D08-002,WXDi-D08-003,WXDi-D08-004,WXDi-D08-005,WXDi-D08-006,WXDi-D08-007,WXDi-D08-008,WXDi-D08-009,WXDi-D08-010\npdeck,WXDi-D08-011,WXDi-D08-012\nsdeck,WXDi-D08-021,WXDi-D08-021,WXDi-D08-021,WXDi-D08-021,WXDi-D08-015,WXDi-D08-015,WXDi-D08-015,WXDi-D08-015,WXDi-D08-014,WXDi-D08-014,WXDi-D08-014,WXDi-D08-014,WXDi-D08-013,WXDi-D08-013,WXDi-D08-013,WXDi-D08-013,WXDi-D08-017,WXDi-D08-017,WXDi-D08-017,WXDi-D08-017,WXDi-D08-016,WXDi-D08-016,WXDi-D08-016,WXDi-D08-016,WXDi-D08-020,WXDi-D08-020,WXDi-D08-020,WXDi-D08-023,WXDi-D08-019,WXDi-D08-019,WXDi-D08-019,WXDi-D08-019,WXDi-D08-018,WXDi-D08-018,WXDi-D08-018,WXDi-D08-018,WXDi-D08-022,WXDi-D08-022,WXDi-D08-022,WXDi-D08-022");

		deckNamelist.push("D・X・M");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("D・X・M", "ldeck,WXDi-D07-001,WXDi-D07-002,WXDi-D07-003,WXDi-D07-004,WXDi-D07-005,WXDi-D07-006,WXDi-D07-007,WXDi-D07-008,WXDi-D07-009,WXDi-D07-010\npdeck,WXDi-D07-011,WXDi-D07-012\nsdeck,WXDi-D07-021,WXDi-D07-021,WXDi-D07-021,WXDi-D07-021,WXDi-D07-020,WXDi-D07-020,WXDi-D07-020,WXDi-D07-020,WXDi-D07-014,WXDi-D07-014,WXDi-D07-014,WXDi-D07-014,WXDi-D07-013,WXDi-D07-013,WXDi-D07-013,WXDi-D07-013,WXDi-D07-016,WXDi-D07-016,WXDi-D07-016,WXDi-D07-016,WXDi-D07-015,WXDi-D07-015,WXDi-D07-015,WXDi-D07-015,WXDi-D07-019,WXDi-D07-019,WXDi-D07-019,WXDi-D07-019,WXDi-D07-018,WXDi-D07-018,WXDi-D07-018,WXDi-D07-018,WXDi-D07-017,WXDi-D07-017,WXDi-D07-017,WXDi-D07-017,WXDi-D07-022,WXDi-D07-022,WXDi-D07-022,WXDi-D07-022");

		deckNamelist.push("DIAGRAM");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("DIAGRAM", "ldeck,WXDi-D06-001,WXDi-D06-002,WXDi-D06-003,WXDi-D06-004,WXDi-D06-005,WXDi-D06-006,WXDi-D06-007,WXDi-D06-008,WXDi-D06-009,WXDi-D06-010\npdeck,WXDi-D06-011\nsdeck,WXDi-D06-020,WXDi-D06-020,WXDi-D06-020,WXDi-D06-020,WXDi-D06-018,WXDi-D06-018,WXDi-D06-018,WXDi-D06-018,WXDi-D06-012,WXDi-D06-012,WXDi-D06-012,WXDi-D06-012,WXDi-D06-019,WXDi-D06-019,WXDi-D06-019,WXDi-D06-019,WXDi-D06-014,WXDi-D06-014,WXDi-D06-014,WXDi-D06-014,WXDi-D06-013,WXDi-D06-013,WXDi-D06-013,WXDi-D06-013,WXDi-D06-017,WXDi-D06-017,WXDi-D06-017,WXDi-D06-017,WXDi-D06-016,WXDi-D06-016,WXDi-D06-016,WXDi-D06-016,WXDi-D06-015,WXDi-D06-015,WXDi-D06-015,WXDi-D06-015,WXDi-D06-021,WXDi-D06-021,WXDi-D06-021,WXDi-D06-021");

		deckNamelist.push("うちゅうのはじまり");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("うちゅうのはじまり", "ldeck,WXDi-D05-001,WXDi-D05-002,WXDi-D05-003,WXDi-D05-004,WXDi-D05-005,WXDi-D05-006,WXDi-D05-007,WXDi-D05-008,WXDi-D05-009,WXDi-D05-010\npdeck,WXDi-D05-011\nsdeck,WXDi-D05-020,WXDi-D05-020,WXDi-D05-020,WXDi-D05-020,WXDi-D05-018,WXDi-D05-018,WXDi-D05-018,WXDi-D05-018,WXDi-D05-012,WXDi-D05-012,WXDi-D05-012,WXDi-D05-012,WXDi-D05-019,WXDi-D05-019,WXDi-D05-019,WXDi-D05-019,WXDi-D05-014,WXDi-D05-014,WXDi-D05-014,WXDi-D05-014,WXDi-D05-013,WXDi-D05-013,WXDi-D05-013,WXDi-D05-013,WXDi-D05-017,WXDi-D05-017,WXDi-D05-017,WXDi-D05-017,WXDi-D05-016,WXDi-D05-016,WXDi-D05-016,WXDi-D05-016,WXDi-D05-015,WXDi-D05-015,WXDi-D05-015,WXDi-D05-015,WXDi-D05-021,WXDi-D05-021,WXDi-D05-021,WXDi-D05-021");

		deckNamelist.push("Card Jockey");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("Card Jockey", "ldeck,WXDi-D04-001,WXDi-D04-002,WXDi-D04-003,WXDi-D04-004,WXDi-D04-005,WXDi-D04-006,WXDi-D04-007,WXDi-D04-008,WXDi-D04-009,WXDi-D04-010\npdeck,WXDi-D04-011\nsdeck,WXDi-D04-020,WXDi-D04-020,WXDi-D04-020,WXDi-D04-020,WXDi-D04-018,WXDi-D04-018,WXDi-D04-018,WXDi-D04-018,WXDi-D04-012,WXDi-D04-012,WXDi-D04-012,WXDi-D04-012,WXDi-D04-019,WXDi-D04-019,WXDi-D04-019,WXDi-D04-019,WXDi-D04-014,WXDi-D04-014,WXDi-D04-014,WXDi-D04-014,WXDi-D04-013,WXDi-D04-013,WXDi-D04-013,WXDi-D04-013,WXDi-D04-017,WXDi-D04-017,WXDi-D04-017,WXDi-D04-017,WXDi-D04-016,WXDi-D04-016,WXDi-D04-016,WXDi-D04-016,WXDi-D04-015,WXDi-D04-015,WXDi-D04-015,WXDi-D04-015,WXDi-D04-021,WXDi-D04-021,WXDi-D04-021,WXDi-D04-021");

		deckNamelist.push("No Limit");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("No Limit", "ldeck,WXDi-D03-001,WXDi-D03-002,WXDi-D03-003,WXDi-D03-004,WXDi-D03-005,WXDi-D03-006,WXDi-D03-007,WXDi-D03-008,WXDi-D03-009,WXDi-D03-010\npdeck,WXDi-D03-011\nsdeck,WXDi-D03-020,WXDi-D03-020,WXDi-D03-020,WXDi-D03-020,WXDi-D03-018,WXDi-D03-018,WXDi-D03-018,WXDi-D03-018,WXDi-D03-012,WXDi-D03-012,WXDi-D03-012,WXDi-D03-012,WXDi-D03-019,WXDi-D03-019,WXDi-D03-019,WXDi-D03-019,WXDi-D03-014,WXDi-D03-014,WXDi-D03-014,WXDi-D03-014,WXDi-D03-013,WXDi-D03-013,WXDi-D03-013,WXDi-D03-013,WXDi-D03-017,WXDi-D03-017,WXDi-D03-017,WXDi-D03-017,WXDi-D03-016,WXDi-D03-016,WXDi-D03-016,WXDi-D03-016,WXDi-D03-015,WXDi-D03-015,WXDi-D03-015,WXDi-D03-015,WXDi-D03-021,WXDi-D03-021,WXDi-D03-021,WXDi-D03-021");

		deckNamelist.push("にじさんじ ver.さんばか");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("にじさんじ ver.さんばか", "ldeck,WXDi-D02-01LAT,WXDi-D02-02L,WXDi-D02-03L,WXDi-D02-04L,WXDi-D02-05LAT,WXDi-D02-06LT,WXDi-D02-07LT,WXDi-D02-08LAT,WXDi-D02-09LA,WXDi-D02-10LA\npdeck,WXDi-D02-19LAT\nsdeck,WXDi-D02-28,WXDi-D02-28,WXDi-D02-28,WXDi-D02-28,WXDi-D02-26,WXDi-D02-26,WXDi-D02-26,WXDi-D02-26,WXDi-D02-20,WXDi-D02-20,WXDi-D02-20,WXDi-D02-20,WXDi-D02-27,WXDi-D02-27,WXDi-D02-27,WXDi-D02-27,WXDi-D02-22,WXDi-D02-22,WXDi-D02-22,WXDi-D02-22,WXDi-D02-21,WXDi-D02-21,WXDi-D02-21,WXDi-D02-21,WXDi-D02-25,WXDi-D02-25,WXDi-D02-25,WXDi-D02-25,WXDi-D02-24,WXDi-D02-24,WXDi-D02-24,WXDi-D02-24,WXDi-D02-23,WXDi-D02-23,WXDi-D02-23,WXDi-D02-23,WXDi-D02-29,WXDi-D02-29,WXDi-D02-29,WXDi-D02-29");

		deckNamelist.push("ANCIENT SURPRISE");
		localStorage.setItem("DeckNameList", deckNamelist);
		localStorage.setItem("ANCIENT SURPRISE", "ldeck,WXDi-D01-001,WXDi-D01-002,WXDi-D01-003,WXDi-D01-004,WXDi-D01-005,WXDi-D01-006,WXDi-D01-007,WXDi-D01-008,WXDi-D01-009,WXDi-D01-010\npdeck,WXDi-D01-011\nsdeck,WXDi-D01-020,WXDi-D01-020,WXDi-D01-020,WXDi-D01-020,WXDi-D01-018,WXDi-D01-018,WXDi-D01-018,WXDi-D01-018,WXDi-D01-012,WXDi-D01-012,WXDi-D01-012,WXDi-D01-012,WXDi-D01-019,WXDi-D01-019,WXDi-D01-019,WXDi-D01-019,WXDi-D01-014,WXDi-D01-014,WXDi-D01-014,WXDi-D01-014,WXDi-D01-013,WXDi-D01-013,WXDi-D01-013,WXDi-D01-013,WXDi-D01-017,WXDi-D01-017,WXDi-D01-017,WXDi-D01-017,WXDi-D01-016,WXDi-D01-016,WXDi-D01-016,WXDi-D01-016,WXDi-D01-015,WXDi-D01-015,WXDi-D01-015,WXDi-D01-015,WXDi-D01-021,WXDi-D01-021,WXDi-D01-021,WXDi-D01-021");
	}

	for(i = 0; i < deckNamelist.length; i ++)
	{
		updateDecklist(localStorage.getItem(deckNamelist[i]));
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

			if(rdeckArr[page * 10 + i][TYPE] == "ピース" || rdeckArr[page * 10 + i][TYPE] == "ピース リレー")
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

function onmouseShow(x)
{
	var i = 0;

	$("#infoTable").css("visibility", "visible");

	if(x.alt)
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				$("#info_name").html(cardData[i][ID]);

				break;
			}
		}

		$("#big_pic").attr("src", cardData[i][SRC]);

		if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー")
		{
			$("#big_pic").attr("height", "252px");
			$("#big_pic").attr("width", "360px");
		}
		else
		{
			$("#big_pic").attr("height", "504px");
			$("#big_pic").attr("width", "360px");
		}

		showInfotable(cardData[i]);
	}
	else
	{
		$("#big_pic").attr("height", "504px");
		$("#big_pic").attr("width", "360px");
		$("#big_pic").attr("src", "img/card_back.jpg");
		$("#infoTable").css("visibility", "hidden");
	}
}

function showInfotable(data)
{
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
		str += data;
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
	else if(data[TYPE] == "ピース" || data[TYPE] == "ピース リレー")
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
		str += data[NAME];
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
		str += data[NAME];
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
		str += data[NAME];
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

	else if(data[TYPE] == "シグニ" || data[TYPE] == "シグニ クラフト" || data[TYPE] == "シグニ レゾナ/クラフト")
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
		str += data[NAME];
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

		if(data[ID] == "WXDi-P07-050")
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
		str += data[NAME];
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

	$("#infoTable").html(str);
	if(data == "init")
	{
		$("#infoTable").css("visibility", "hidden");
	}
	else
	{
		$("#infoTable").css("visibility", "visible");
	}
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

			// $("#show_ldeck_" + i).attr("src", ldeckArr[i][SRC]);
			// $("#show_ldeck_" + i).attr("alt", ldeckArr[i][ID]);
			// $("#show_ldeck_" + i).show();
		}
		else
		{
			$("#ldeck_" + i).attr("src", "img/empty.jpg");
			$("#ldeck_" + i).attr("alt", "");

			// $("#show_ldeck_" + i).attr("src", "img/empty.jpg");
			// $("#show_ldeck_" + i).attr("alt", "");
			// $("#show_ldeck_" + i).hide();
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

function showSdeck()
{
	for(i = 0; i < 40; i++)
	{
		if(i < sdeckArr.length)
		{
			$("#sdeck_" + i).attr("src", sdeckArr[i][SRC]);
			$("#sdeck_" + i).attr("alt", sdeckArr[i][ID]);

			$("#show_sdeck_" + i).attr("src", sdeckArr[i][SRC]);
			$("#show_sdeck_" + i).attr("alt", sdeckArr[i][ID]);

			$("#show_sdeck_" + i).show();
		}
		else
		{
			$("#sdeck_" + i).attr("src", "img/empty.jpg");
			$("#sdeck_" + i).attr("alt", "");

			$("#show_sdeck_" + i).attr("src", "img/empty.jpg");
			$("#show_sdeck_" + i).attr("alt", "");

			$("#show_sdeck_" + i).hide();
		}
	}

	updatechart();
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
	showSdeck();
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
			if(x[ID] == sdeckArr[i][ID])
			{
				same_card++;

				if(same_card == 4)
				{
					return;
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
			if(x[LEVEL] == "")
			{
				if(sdeckArr[i][LEVEL] == "")
				{
					updated = 1;
					sdeckArr.splice(i, 0, x);
					break;
				}
			}
			else
			{
				if(sdeckArr[i][LEVEL] == "")
				{
					updated = 1;
					sdeckArr.splice(i, 0, x);
					break;
				}

				if(x[LEVEL] <= sdeckArr[i][LEVEL])
				{
					same_level = 1;
					if(x[COLOR] == sdeckArr[i][COLOR])
					{
						updated = 1;
						sdeckArr.splice(i, 0, x);
						break;
					}
				}

				if(same_level == 1 && x[COLOR] != sdeckArr[i][COLOR])
				{
					sdeckArr.splice(i, 0, x);
					updated = 1;
					break;
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

		$("#show_leveldiv").show();
		show_levelobj.data.labels = ['L1: ' + sdeck_l1, 'L2: ' + sdeck_l2, 'L3: ' + sdeck_l3, 'spell: ' + sdeck_spell];
		show_levelobj.data.datasets[0].data = [sdeck_l1, sdeck_l2, sdeck_l3, sdeck_spell];
		show_levelobj.update();

		$("#colordiv").show();
		colorobj.data.labels = ['赤: ' + sdeck_red, '青: ' + sdeck_blue, '緑: ' + sdeck_green, '黒: ' + sdeck_black, '白: ' + sdeck_white, '無: ' + sdeck_nocolor];
		colorobj.data.datasets[0].data = [sdeck_red, sdeck_blue, sdeck_green, sdeck_black, sdeck_white, sdeck_nocolor];
		colorobj.update();

		$("#show_colordiv").show();
		show_colorobj.data.labels = ['赤: ' + sdeck_red, '青: ' + sdeck_blue, '緑: ' + sdeck_green, '黒: ' + sdeck_black, '白: ' + sdeck_white, '無: ' + sdeck_nocolor];
		show_colorobj.data.datasets[0].data = [sdeck_red, sdeck_blue, sdeck_green, sdeck_black, sdeck_white, sdeck_nocolor];
		show_colorobj.update();

		$("#lbdiv").show();
		lbobj.data.labels = ['LB有り: ' + sdeck_burst, 'LB無し: ' + sdeck_no_burst];
		lbobj.data.datasets[0].data = [sdeck_burst, sdeck_no_burst];
		lbobj.update();

		$("#show_lbdiv").show();
		show_lbobj.data.labels = ['LB有り: ' + sdeck_burst, 'LB無し: ' + sdeck_no_burst];
		show_lbobj.data.datasets[0].data = [sdeck_burst, sdeck_no_burst];
		show_lbobj.update();
	}
	else
	{
		$("#leveldiv").hide();
		$("#show_leveldiv").hide();
		$("#colordiv").hide();
		$("#show_colordiv").hide();
		$("#lbdiv").hide();
		$("#show_lbdiv").hide();
	}
}

function delDeck(x, idx, array)
{
	var i = 0;
	for(i = 0; i < cardData.length; i++)
	{
		if(x.alt == cardData[i][ID] && (cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "スペル"))
		{
			delcounter(cardData[i]);
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

function addDeck(x)
{
	var i = 0;

	if(x.alt != "")
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				if(cardData[i][TYPE] == "ルリグ" || cardData[i][TYPE] == "アシストルリグ")
				{
					if(ldeckArr.length < 10)
					{
						sortLdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー")
				{
					if(pdeckArr.length < 2)
					{
						sortPdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "スペル")
				{
					if(sdeckArr.length < 40)
					{
						sortSdeck(cardData[i]);
					}
				}
				
				break;
			}
		}
	}
}

function downloadBlob(filename, contentType) {
    var larray = [];
    var parray = [];
    var sarray = [];
    var array = [];
    var i = 0;

    filename = $("#deckTitle").val() + ".csv";

    for(i = 0; i < ldeckArr.length; i++)
    {
    	larray.push(ldeckArr[i][ID]);
    }

    for(i = 0; i < pdeckArr.length; i++)
    {
    	parray.push(pdeckArr[i][ID]);
    }

    for(i = 0; i < sdeckArr.length; i++)
    {
    	sarray.push(sdeckArr[i][ID]);
    }
    larray.unshift("ldeck");
    parray.unshift("pdeck");
    sarray.unshift("sdeck");

    array.push(larray);
    array.push(parray);
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
	$("#textCode").val(localStorage.getItem(deck));
	
	readSingleCode();
}

function deletedecklist()
{
	var deck = $("#selectDeck").val();
	var i = 0;

	localStorage.removeItem(deck);

	for(i = 0; i < deckNamelist.length; i++)
	{
		if(deck == deckNamelist[i])
		{
			deckNamelist.splice(i, 1);
			break;
		}
	}
	localStorage.setItem("DeckNameList", deckNamelist);
	updateDecklist("");
	dataInit();
}

function readSingleCode()
{
	var larray = [];
    var parray = [];
    var sarray = [];
    var array = [];
    var i = 0, j = 0;

    var contents = $("#textCode").val();

    array = contents.split("\n");

	ldeckArr = [];

	larray = array[0].split(",");
	for(i = 1; i < larray.length; i++)
	{
		for(j = 0; j < cardData.length; j++)
	  	{
	  		if(larray[i] == cardData[j][ID])
	  		{
	  			ldeckArr.push(cardData[j]);
	  		}
	  	}
	}

    pdeckArr = [];
      
    parray = array[1].split(",");
    for(i = 1; i < parray.length; i++)
    {
      	for(j = 0; j < cardData.length; j++)
      	{
      		if(parray[i] == cardData[j][ID])
      		{
      			pdeckArr.push(cardData[j]);
      		}
      	}
    }

    sdeckArr = [];
      
    sarray = array[2].split(",");
    for(i = 1; i < sarray.length; i++)
    {
      	for(j = 0; j < cardData.length; j++)
      	{
      		if(sarray[i] == cardData[j][ID])
      		{
      			sdeckArr.push(cardData[j]);
      		}
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
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(larray[i] == cardData[j][ID])
          		{
          			ldeckArr.push(cardData[j]);
          		}
          	}
          }

          pdeckArr = [];
          
          parray = array[1].split(",");
          for(i = 1; i < parray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(parray[i] == cardData[j][ID])
          		{
          			pdeckArr.push(cardData[j]);
          		}
          	}
          }

          sdeckArr = [];
          
          sarray = array[2].split(",");
          for(i = 1; i < sarray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(sarray[i] == cardData[j][ID])
          		{
          			sdeckArr.push(cardData[j]);
          		}
          	}
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

	for(i = 0; i < sdeckArr.length; i++)
	{
		addcounter(sdeckArr[i])
	}
}

function search()
{
	var i = 0, j = 0;
	var dataStr = "", searchStr = "", tmpStr = "";

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		if($('#selectProduct').val() != 0)
		{
			if(cardData[i][ID].indexOf($('#selectProduct').val()) == -1)
			{
				continue;
			}
		}

		if($('#selectType').val() != 0)
		{
			if(cardData[i][CLASS].indexOf($('#selectType').val()) == -1)
			{
				continue;
			}
		}

		if($('#selectLRIG').val() != 0)
		{
			if(cardData[i][CLASS] != $('#selectLRIG').val())
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
			if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー")
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

		if(!$('#spell').is(":checked"))
		{
			if(cardData[i][TYPE] == "スペル")
			{
				continue;
			}
		}

		if(!$('#level0').is(":checked") && !$('#level1').is(":checked") && !$('#level2').is(":checked") && !$('#level3').is(":checked"))
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
		}

		if(!$('#red').is(":checked") && !$('#blue').is(":checked") && !$('#green').is(":checked") && !$('#black').is(":checked") && !$('#white').is(":checked") && !$('#nocolor').is(":checked"))
		{

		}
		else
		{
			if(!$('#red').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("赤") != -1)
				{
					continue;
				}
			}

			if(!$('#blue').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("青") != -1)
				{
					continue;
				}
			}

			if(!$('#green').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("緑") != -1)
				{
					continue;
				}
			}

			if(!$('#black').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("黒") != -1)
				{
					continue;
				}
			}

			if(!$('#white').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("白") != -1)
				{
					continue;
				}
			}

			if(!$('#nocolor').is(":checked"))
			{
				if(cardData[i][COLOR].indexOf("無") != -1)
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
				if(cardData[i][LB] == "0")
				{
					continue;
				}
			}
		}

		if($('#textsearch').val().length != 0)
		{
			for(j = 0; j < TW_TEXT + 1 ; j++)
			{
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
}

function uncheckall()
{
	$('#textsearch').val("");
	$('input:checkbox').prop('checked', false);
	$('#selectType').val(0);
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
	x = x.replace(/【ハーモニー】/g, "<img class='icon_img' src='img/icon_txt_harmony.png'></img>");
	x = x.replace(/\[ダウン\]/g, "<img class='icon_img' src='img/icon_txt_down.png'></img>");
	x = x.replace(/\[ガード\]/g, "<img class='icon_img' src='img/icon_guard_mini.png'></img>");
	x = x.replace(/◎/g, "<img class='icon_img' src='img/icon_txt_coin.png'></img>");
	x = x.replace(/【　　】/g, "<img class='icon_img' src='img/icon_txt_frame_null.png'></img>");

	x = x.replace(/（ターン１）/g, "<img class='icon_img' src='img/icon_txt_turn_01.png'></img>");
	x = x.replace(/（ターン２）/g, "<img class='icon_img' src='img/icon_txt_turn_02.png'></img>");
	x = x.replace(/（ゲーム１）/g, "<img class='icon_img' src='img/icon_txt_game_01.png'></img>");
	x = x.replace(/（ゲーム２）/g, "<img class='icon_img' src='img/icon_txt_game_02.png'></img>");

	x = x.replace(/【チーム起】/g, "<img class='icon_img' src='img/icon_txt_starting_team.png'></img>");
	x = x.replace(/【チーム常】/g, "<img class='icon_img' src='img/icon_txt_regular_team.png'></img>");
	x = x.replace(/【チーム出】/g, "<img class='icon_img' src='img/icon_txt_arrival_team.png'></img>");
	x = x.replace(/【チーム自】/g, "<img class='icon_img' src='img/icon_txt_auto_team.png'></img>");

	x = x.replace(/【出】/g, "<img class='icon_img' src='img/icon_txt_arrival.png'></img>");
	x = x.replace(/【自】/g, "<img class='icon_img' src='img/icon_txt_auto.png'></img>");
	x = x.replace(/【常】/g, "<img class='icon_img' src='img/icon_txt_regular.png'></img>");
	x = x.replace(/【起】/g, "<img class='icon_img' src='img/icon_txt_starting.png'></img>");

	x = x.replace(/【赤】/g, "<img class='icon_img' src='img/icon_txt_red.png'></img>");
	x = x.replace(/\[赤\]/g, "<img class='icon_img' src='img/icon_txt_red.png'></img>");
	x = x.replace(/\[赤\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_red_00.png'></img>");
	x = x.replace(/\[赤\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_red_01.png'></img>");
	x = x.replace(/\[赤\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_red_02.png'></img>");
	x = x.replace(/\[赤\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_red_03.png'></img>");
	x = x.replace(/\[赤\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_red_04.png'></img>");
	x = x.replace(/\[赤\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_red_05.png'></img>");

	x = x.replace(/【青】/g, "<img class='icon_img' src='img/icon_txt_blue.png'></img>");
	x = x.replace(/\[青\]/g, "<img class='icon_img' src='img/icon_txt_blue.png'></img>");
	x = x.replace(/\[青\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_00.png'></img>");
	x = x.replace(/\[青\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_01.png'></img>");
	x = x.replace(/\[青\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_02.png'></img>");
	x = x.replace(/\[青\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_03.png'></img>");
	x = x.replace(/\[青\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_04.png'></img>");
	x = x.replace(/\[青\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_blue_05.png'></img>");
	
	x = x.replace(/【緑】/g, "<img class='icon_img' src='img/icon_txt_green.png'></img>");
	x = x.replace(/\[緑\]/g, "<img class='icon_img' src='img/icon_txt_green.png'></img>");
	x = x.replace(/\[緑\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_green_00.png'></img>");
	x = x.replace(/\[緑\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_green_01.png'></img>");
	x = x.replace(/\[緑\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_green_02.png'></img>");
	x = x.replace(/\[緑\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_green_03.png'></img>");
	x = x.replace(/\[緑\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_green_04.png'></img>");
	x = x.replace(/\[緑\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_green_05.png'></img>");

	x = x.replace(/【黒】/g, "<img class='icon_img' src='img/icon_txt_black.png'></img>");
	x = x.replace(/\[黒\]/g, "<img class='icon_img' src='img/icon_txt_black.png'></img>");
	x = x.replace(/\[黒\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_black_00.png'></img>");
	x = x.replace(/\[黒\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_black_01.png'></img>");
	x = x.replace(/\[黒\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_black_02.png'></img>");
	x = x.replace(/\[黒\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_black_03.png'></img>");
	x = x.replace(/\[黒\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_black_04.png'></img>");
	x = x.replace(/\[黒\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_black_05.png'></img>");

	x = x.replace(/【白】/g, "<img class='icon_img' src='img/icon_txt_white.png'></img>");
	x = x.replace(/\[白\]/g, "<img class='icon_img' src='img/icon_txt_white.png'></img>");
	x = x.replace(/\[白\(0\)\]/g, "<img class='icon_img' src='img/icon_txt_white_00.png'></img>");
	x = x.replace(/\[白\(1\)\]/g, "<img class='icon_img' src='img/icon_txt_white_01.png'></img>");
	x = x.replace(/\[白\(2\)\]/g, "<img class='icon_img' src='img/icon_txt_white_02.png'></img>");
	x = x.replace(/\[白\(3\)\]/g, "<img class='icon_img' src='img/icon_txt_white_03.png'></img>");
	x = x.replace(/\[白\(4\)\]/g, "<img class='icon_img' src='img/icon_txt_white_04.png'></img>");
	x = x.replace(/\[白\(5\)\]/g, "<img class='icon_img' src='img/icon_txt_white_05.png'></img>");

	x = x.replace(/【無】/g, "<img class='icon_img' src='img/icon_txt_null.png'></img>");
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
	if($(x).next().is(':checked'))
	{
		$(x).next().prop('checked', false);
	}
	else
	{
		$(x).next().prop('checked', true);
	}
}

function checkDeck()
{
	var i = 0, j = 0, error = 0, error_tmp = 0, ret = 0;
	var listId = $('#selectProduct').get(0);
	var listLrig = $('#selectLRIG').get(0);
	var listType = $('#selectType').get(0);

	for(i = 0; i < cardData.length; i++)
	{
		error = 0;

		//ID
		error_tmp = 1;
		for(j = 1; j < listId.options.length; j++)
		{
			if(cardData[i][ID].indexOf(listId.options[j].value) != -1)
			{
				error_tmp = 0;
				break;
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
			cardData[i][RARE] != "R" &&
			cardData[i][RARE] != "C" &&
			cardData[i][RARE] != "PI" &&
			cardData[i][RARE] != "TK" &&
			cardData[i][RARE] != "PR" &&
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
			cardData[i][TYPE] != "シグニ" &&
			cardData[i][TYPE] != "シグニ クラフト" &&
			cardData[i][TYPE] != "シグニ レゾナ/クラフト" &&
			cardData[i][TYPE] != "スペル"
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
					cardData[i][LEVEL] != "3")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][ID] == "WXDi-P11-010B")
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
					if(cardData[i][LIMIT] != 5)
					{
						error = 1;
						console.log("LIMIT");
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
					}
				}
				else
				{
					if(cardData[i][TEAM] != "")
					{
						error = 1;
					}
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
				}
			}
			else if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー")
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
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
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
				}

				//LEVEL
				if(cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2" &&
					cardData[i][LEVEL] != "3")
				{
					error = 1;
				}

				//COST
				if(cardData[i][COST] != "")
				{
					error = 1;
				}

				//LIMIT
				if(cardData[i][LIMIT] != "" && cardData[i][ID] != "WXDi-P07-050")
				{
					error = 1;
				}

				//POWER
				if(cardData[i][POWER] == "")
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

				//LB
				if(cardData[i][LB] != "0" &&
					cardData[i][LB] != "1")
				{
					error = 1;
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
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
			else if(cardData[i][TYPE] == "スペル")
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

				//LB
				if(cardData[i][LB] != "0" &&
					cardData[i][LB] != "1")
				{
					error = 1;
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
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
	// sdeckArr

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
	var str = "", i = 0, j = 0, flag = 0, sdecklistArr = [], sdecklist = [];
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

	if($("#deckTitle").val() == 0)
	{
		alert("Do not set 0 as title.");
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

  	localStorage.setItem($("#deckTitle").val(), $("#textCode").val());

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

	localStorage.setItem("DeckNameList", JSON.stringify(deckNamelist));

	$("#selectDeck").html(str);
}


function rearrange_ldeck()
{
	var i, recounter;
	
	if(ldeckArr.length != 10)
	{
		return false;
	}
	recounter = 0;
	for(i = 0; i < ldeckArr.length; i++)
	{
		if(ldeckArr[i][LEVEL] == 3)
		{
			if(i < 3)
			{
				return false;
			}

			$("#show_ldeck_3").attr("src", ldeckArr[i][SRC]);
			$("#show_ldeck_2").attr("src", ldeckArr[i-1][SRC]);
			$("#show_ldeck_1").attr("src", ldeckArr[i-2][SRC]);
			$("#show_ldeck_0").attr("src", ldeckArr[i-3][SRC]);
			continue;
		}

		if(ldeckArr[i][LEVEL] == 2 && ldeckArr[i][TYPE] == "アシストルリグ")
		{
			if(recounter == 0)
			{
				if(i < 2)
				{
					return false;
				}

				$("#show_ldeck_6").attr("src", ldeckArr[i][SRC]);
				$("#show_ldeck_5").attr("src", ldeckArr[i-1][SRC]);
				$("#show_ldeck_4").attr("src", ldeckArr[i-2][SRC]);

				recounter++;

				continue;
			}
			else
			{
				if(i < 2)
				{
					return false;
				}

				$("#show_ldeck_9").attr("src", ldeckArr[i][SRC]);
				$("#show_ldeck_8").attr("src", ldeckArr[i-1][SRC]);
				$("#show_ldeck_7").attr("src", ldeckArr[i-2][SRC]);

				continue;
			}
		}
	}
	return true;
}

function resetDefault()
{
	var ret = 0;

	ret = confirm("It will clean all localStorage and delete all custom deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		localStorage.clear();
		location.reload();
	}
}

function showVersion()
{
	var str = "";

	str += "Author: ZZZ\n";
	str += "\n";
	str += "20221222 v1.10\n";
	str += "1.新增WXDi-P03中文效果\n";
	str += "2.新增WXDi-P04中文效果\n";
	str += "3.新增WXDi-D07中文效果\n";
	str += "\n";
	str += "目前收錄:\n";
	str += "WXDi-CP01\n";
	str += "WXDi-P00 ~ WXDi-P11\n";
	str += "WXDi-D01 ~ WXDi-D09\n";
	str += "PRカード\n";
	str += "\n";
	str += "中文效果:\n";
	str += "WXDi-P01 ~ WXDi-P02\n";
	str += "WXDi-D01 ~ WXDi-D06\n";
	str += "\n";
	str += "預計更新:\n";
	str += "-改善排序邏輯\n";
	str += "-增加中文效果\n";
	str += "-增加自訂義排序\n";
	str += "-補充關於說明\n";
	str += "-全半形統一\n";
	
	alert(str);
}