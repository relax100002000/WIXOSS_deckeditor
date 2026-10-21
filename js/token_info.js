/* DIVA-era token / craft cards (card numbers containing "TK") from the official card list
 * https://www.takaratomy.co.jp/products/wixoss/card/card_list.php  (fetched 2026-10-21).
 * Kept separate from cardData: nothing in js/card_info.js is changed. Same row layout as cardData
 * (ID, SRC, NAME, RARE, TYPE, CLASS, COLOR, LEVEL, COST, LIMIT, POWER, COIN, TIMING, LB, TEAM, STORY, JP_TEXT, TW_TEXT, BAN).
 * Note: some TK cards (crafts etc.) also exist in cardData; tokenData still lists them.
 * Deduplicated by NAME (2026-10-21): only the first card of each name is kept (official list order, newest products first);
 * cards whose name is "-" (unnamed tokens) are all kept. 193 cards. */

var tokenData = [
	[
		"SPDi39-TK", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/SPDi39/SPDi39-TK.jpg", //SRC
		"【リミットアッパー】(ロレンツォ・M・サルヴァトーレver.)", //NAME
		"SP", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(あなたの場にいるルリグが1体で、そのルリグがレベル3以上であるかぎり、そのルリグのリミットを+2する)<br>(【リミットアッパー】はあなたのルリグゾーンに1つまでしか置けない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-D1-TK1", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-D1-TK1.jpg", //SRC
		"【リミットアッパー】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(あなたの場にいるルリグが1体で、そのルリグがレベル3以上であるかぎり、そのルリグのリミットを+2する)<br>(【リミットアッパー】はあなたのルリグゾーンに1つまでしか置けない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P1-TK1B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P1-TK1B.jpg", //SRC
		"《ゲーム1回》使用済み", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P1-TK2A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P1-TK2A.jpg", //SRC
		"【ルリグバリア】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(あなたが次にルリグからダメージを受ける場合、代わりに【ルリグバリア】1つを消費し、そのダメージを受けない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P1-TK2B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P1-TK2B.jpg", //SRC
		"【常】：アタックできない。", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P2-TK1A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P2-TK1A.jpg", //SRC
		"-5000", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P3-TK1A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P3-TK1A.jpg", //SRC
		"転生したらレベル1のママ勇者だったけど無双してみた", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：トリック", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニのパワーはこのシグニのレベル1につき+5000される。<br>【自】：このシグニが対戦相手のシグニ1体をバニッシュしたとき、このシグニがレベル2以下の場合、このゲームの間、このシグニのレベルを+1する。<br>【自】：対戦相手のターン終了時、このシグニがレベル3以上の場合、対戦相手のシグニ1体を対象とし、それとこのシグニをゲームから除外する。<br>【起】《ターン2回》《赤》：このシグニのパワー以下の対戦相手のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX24-P4-TK1A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX24/WX24-P4-TK1A.jpg", //SRC
		"クレイヴ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(-3000&配置できない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR01.jpg", //SRC
		"小鳥遊ホシノ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR02.jpg", //SRC
		"勇美カエデ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR03.jpg", //SRC
		"大野ツクヨ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR04.jpg", //SRC
		"千鳥ミチル", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR05.jpg", //SRC
		"黒見セリカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR06.jpg", //SRC
		"和楽チセ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR07.jpg", //SRC
		"春日ツバキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR08.jpg", //SRC
		"砂狼シロコ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR09.jpg", //SRC
		"久田イズナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR10.jpg", //SRC
		"小鳥遊ホシノ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CD1-TKR11", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CD1-TKR11.jpg", //SRC
		"桑上カホ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TK1A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TK1A.jpg", //SRC
		"雷ちゃん", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを-3000する。このシグニのパワーが12000以上の場合、代わりにターン終了時まで、それのパワーを-5000する。<br><br>(クラフトであるシグニは場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TK2A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TK2A.jpg", //SRC
		"給食推進車両", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：これの上にある《鰐渕アカリ(正月)》のレベルを+1し、パワーを+10000する。<br>【常】：これの上にある《鰐渕アカリ(正月)》は「【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、《黒》を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを-5000する。」を得る。<br><br>(このクラフトの上にあるシグニが場を離れるとこのクラフトはゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR01.jpg", //SRC
		"錠前サオリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR02.jpg", //SRC
		"月雪ミヤコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR03.jpg", //SRC
		"勘解由小路ユカリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR04.jpg", //SRC
		"春原シュン", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR05.jpg", //SRC
		"白洲アズサ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR06.jpg", //SRC
		"秤アツコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR07.jpg", //SRC
		"羽川ハスミ(体操服)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR08.jpg", //SRC
		"天童アリス(メイド)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR09.jpg", //SRC
		"尾刃カンナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR10.jpg", //SRC
		"早瀬ユウカ(体操服)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR11", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR11.jpg", //SRC
		"桐生キキョウ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR12", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR12.jpg", //SRC
		"連河チェリノ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR13", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR13.jpg", //SRC
		"不破レンゲ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR14", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR14.jpg", //SRC
		"陸八魔アル(ドレス)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR15", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR15.jpg", //SRC
		"空崎ヒナ(ドレス)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR16", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR16.jpg", //SRC
		"羽沼マコト", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR17", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR17.jpg", //SRC
		"栗村アイリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR18", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR18.jpg", //SRC
		"円堂シミコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR19", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR19.jpg", //SRC
		"若葉ヒナタ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR20", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR20.jpg", //SRC
		"槌永ヒヨリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR21.jpg", //SRC
		"伊原木ヨシミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR22.jpg", //SRC
		"仲正イチカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR23.jpg", //SRC
		"下江コハル(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR24.jpg", //SRC
		"柚鳥ナツ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR25.jpg", //SRC
		"朝顔ハナエ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR26.jpg", //SRC
		"戒野ミサキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR27.jpg", //SRC
		"宇沢レイサ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR28", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR28.jpg", //SRC
		"和泉元エイミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR29", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR29.jpg", //SRC
		"豊見コトリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR30", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR30.jpg", //SRC
		"小鈎ハレ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR31", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR31.jpg", //SRC
		"合歓垣フブキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR32", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR32.jpg", //SRC
		"風倉モエ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR33", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR33.jpg", //SRC
		"白石ウタハ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR34", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR34.jpg", //SRC
		"中務キリノ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR35", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR35.jpg", //SRC
		"空井サキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR36", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR36.jpg", //SRC
		"小塗マキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR37", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR37.jpg", //SRC
		"霞沢ミユ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR38", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR38.jpg", //SRC
		"乙花スミレ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR39", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR39.jpg", //SRC
		"河和シズコ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR40", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR40.jpg", //SRC
		"春日ツバキ(ガイド)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR41", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR41.jpg", //SRC
		"佐城トモエ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR42", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR42.jpg", //SRC
		"姫木メル", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR43", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR43.jpg", //SRC
		"秋泉モミジ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR44", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR44.jpg", //SRC
		"間宵シグレ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR45", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR45.jpg", //SRC
		"天見ノドカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR46", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR46.jpg", //SRC
		"池倉マリナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR47", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR47.jpg", //SRC
		"安守ミノリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR48", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR48.jpg", //SRC
		"狐坂ワカモ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR49", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR49.jpg", //SRC
		"里浜ウミカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR50", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR50.jpg", //SRC
		"鰐渕アカリ(正月)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR51", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR51.jpg", //SRC
		"鬼怒川カスミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR52", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR52.jpg", //SRC
		"薬子サヤ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR53", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR53.jpg", //SRC
		"下倉メグ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR54", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR54.jpg", //SRC
		"朱城ルミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR55", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR55.jpg", //SRC
		"天雨アコ(ドレス)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR56", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR56.jpg", //SRC
		"丹花イブキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR57", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR57.jpg", //SRC
		"鬼方カヨコ(ドレス)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR58", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR58.jpg", //SRC
		"春原ココナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR59", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR59.jpg", //SRC
		"黒舘ハルナ(正月)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR60", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR60.jpg", //SRC
		"近衛ミナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR61", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR61.jpg", //SRC
		"浦和ハナコ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR62", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR62.jpg", //SRC
		"阿慈谷ヒフミ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR63", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR63.jpg", //SRC
		"一之瀬アスナ(バニーガール)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR64", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR64.jpg", //SRC
		"角楯カリン(バニーガール)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR65", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR65.jpg", //SRC
		"奥空アヤネ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR66", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR66.jpg", //SRC
		"十六夜ノノミ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR67", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR67.jpg", //SRC
		"銀鏡イオリ(水着)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-CP1-TKR68", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-CP1-TKR68.jpg", //SRC
		"火宮チナツ(温泉)", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK1", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK1.jpg", //SRC
		"ダーク・バウンダリー", //NAME
		"TK", //RARE
		"アーツ クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(クラフトであるアーツは、使用後にゲームから除外される)<br><br>対戦相手のシグニを2体まで対象とし、それらを手札に戻す。<br><br>【常】：このアーツはあなたの、コストや効果でルリグデッキから他の領域に移動しない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK2", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK2.jpg", //SRC
		"背闇之陣", //NAME
		"TK", //RARE
		"アーツ クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(クラフトであるアーツは、使用後にゲームから除外される)<br><br>手札を3枚捨てる。そうした場合、対戦相手のすべてのシグニをバニッシュする。<br><br>【常】：このアーツはあなたの、コストや効果でルリグデッキから他の領域に移動しない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK3", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK3.jpg", //SRC
		"ダーク・アナライズ", //NAME
		"TK", //RARE
		"アーツ クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(クラフトであるアーツは、使用後にゲームから除外される)<br><br>数字1つを宣言する。対戦相手の手札を見て、宣言した数字と同じレベルを持つすべてのシグニを捨てさせる。<br><br>【常】：このアーツはあなたの、コストや効果でルリグデッキから他の領域に移動しない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK4", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK4.jpg", //SRC
		"闇気揚々", //NAME
		"TK", //RARE
		"アーツ クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(クラフトであるアーツは、使用後にゲームから除外される)<br><br>次の対戦相手のターン終了時まで、あなたのすべてのシグニのパワーを+5000する。<br><br>【常】：このアーツはあなたの、コストや効果でルリグデッキから他の領域に移動しない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK5", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK5.jpg", //SRC
		"ダーク・アウト", //NAME
		"TK", //RARE
		"アーツ クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1《無》×2", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(クラフトであるアーツは、使用後にゲームから除外される)<br><br>あなたのトラッシュから黒のシグニを3枚まで対象とし、それらを手札に加える。<br><br>【常】：このアーツはあなたの、コストや効果でルリグデッキから他の領域に移動しない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P1-TK6", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P1-TK6.jpg", //SRC
		"幻怪 ヤミノザンシ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏生：怪異", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：このシグニは、正面にアタックしている対戦相手のシグニとバトルしない。(そのシグニはバトルをせずあなたにダメージを与える)<br>【自】：あなたのメインフェイズ開始時、あなたのトラッシュから＜怪異＞のシグニを1枚まで対象とし、場にあるこのシグニをゲームから除外する。そうした場合、それを場に出す。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK01.jpg", //SRC
		"白羅星姫 サタン", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計2枚トラッシュに置く<br>【常】《自分ターン》：対戦相手はシグニを2体までしか場に出すことができない。(すでに場に3体以上ある場合は2体になるようにシグニをトラッシュに置く)<br><br>(レゾナでありクラフトであるシグニはリムーブできず場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK02.jpg", //SRC
		"白羅星姫 フルムーン", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計3枚トラッシュに置く<br>【常】《相手ターン》：あなたの他のシグニは【シャドウ(シグニ)】を得る。(それらのシグニは対戦相手のシグニによって対象にされない)<br>【出】：次の対戦相手のターンの間、対戦相手はシグニアタックステップにシグニで合計一度しかアタックできない。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK03.jpg", //SRC
		"コードヒート ウィクロンジャービークル", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計2枚トラッシュに置く<br>【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが2枚以上ある場合、対戦相手は自分のエナゾーンからカード1枚を選びトラッシュに置く。<br>【出】：あなたのトラッシュからスペル1枚を対象とし、それを手札に加える。<br><br>(レゾナでありクラフトであるシグニはリムーブできず場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK04.jpg", //SRC
		"コードヒート ウィクロンジャーロボ", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計3枚トラッシュに置く<br>【常】：このシグニが対戦相手の効果によって場を離れる場合、代わりにこの能力を失う。そうした場合、このシグニをダウンする。<br>【自】：このシグニがアタックしたとき、対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK05.jpg", //SRC
		"蒼穹将姫 ニヴルヘイム", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計2枚トラッシュに置く<br>【常】：対戦相手はドローフェイズの間にカードを合計1枚までしか引けない。<br>【自】：このシグニが場を離れたとき、カードを2枚引くか、対戦相手は手札を2枚捨てる。<br>(レゾナでありクラフトであるシグニはリムーブできず場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK06.jpg", //SRC
		"蒼穹将姫 ユミル", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計3枚トラッシュに置く<br>【自】：あなたのアタックフェイズ開始時、対戦相手の凍結状態のすべてのシグニをダウンし、対戦相手の他のすべてのシグニを凍結する。<br>【出】：対戦相手のルリグ1体を対象とし、それを凍結する。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK07.jpg", //SRC
		"緑参ノ遊姫 メリゴラン", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計2枚トラッシュに置く<br>【自】：このシグニがアタックしたとき、あなたのエナゾーンからカードを1枚まで対象とし、それを手札に加える。<br>【自】：このシグニが場を離れたとき、あなたのエナゾーンからカードを1枚まで対象とし、それを手札に加える。<br>【出】：【エナチャージ2】", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK08.jpg", //SRC
		"緑参ノ遊姫 アスレ【HARD】", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計3枚トラッシュに置く<br>【自】《ターン1回》：あなたのシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、【エナチャージ1】をする。<br>【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、このシグニをアップする。<br><br>(レゾナでありクラフトであるシグニはリムーブできず場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK09.jpg", //SRC
		"黒大幻蟲 アラクネ・パイダ", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計2枚トラッシュに置く<br>【自】：各アタックフェイズ開始時、ターン終了時まで、【チャーム】が付いている対戦相手のすべてのシグニは能力を失う。<br>【自】：【チャーム】が付いている対戦相手のシグニ1体がバニッシュされたとき、カードを1枚引く。<br>【起】《ターン1回》《黒×0》：対戦相手のシグニ1体を対象とし、対戦相手のトラッシュからカード1枚をそれの【チャーム】にする。(【チャーム】は裏向きでシグニに付き、1体に1枚までしか付けられない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P2-TK10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P2-TK10.jpg", //SRC
		"黒大幻蟲 オウグソク【FA】", //NAME
		"TK", //RARE
		"シグニ レゾナ クラフト", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【出現条件】《メインフェイズアイコン》手札とエナゾーンからシグニを合計3枚トラッシュに置く<br>【自】：このシグニが場を離れたとき、あなたのトラッシュから黒のシグニ1枚を対象とし、それを手札に加える。<br>【出】：ターン終了時まで、【チャーム】が付いている対戦相手のすべてのシグニのパワーを-10000する。<br><br>(レゾナでありクラフトであるシグニはリムーブできず場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX25-P3-TK03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX25/WX25-P3-TK03.jpg", //SRC
		"【みこみこ親衛隊】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのターン終了時、あなたは手札を1枚捨てる。そうした場合、これを取り除く。<br>(これを得たプレイヤーが「あなた」である。あなたの能力として発動する)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-CP1-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-CP1-TK01.jpg", //SRC
		"【シグニバリア】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(あなたが次にシグニからダメージを受ける場合、代わりに【シグニバリア】1つを消費し、そのダメージを受けない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P1-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P1-TK01A.jpg", //SRC
		"コードイート マヨネーズ", //NAME
		"TK", //RARE
		"シグニ/クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br><br>【常】：これにアクセされているシグニのパワーを+3000する。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P1-TK01B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P1-TK01B.jpg", //SRC
		"【ホログラフ】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：対戦相手のルリグ1体がアタックしたとき、あなたと対戦相手は自分のデッキの一番上を公開する。この方法で公開されたカードがどちらも【ライフバースト】を持っているか、どちらも【ライフバースト】を持っていない場合、そのアタックを無効にし、これを取り除く。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P1-TK02A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P1-TK02A.jpg", //SRC
		"コードイート ステーキソース", //NAME
		"TK", //RARE
		"シグニ/クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br><br>【常】：これにアクセされているシグニは「【自】：このシグニがバトルによって対戦相手のシグニ1体をバニッシュしたとき、【エナチャージ1】をする。」を得る。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P1-TK03A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P1-TK03A.jpg", //SRC
		"コードイート チョコスプレー", //NAME
		"TK", //RARE
		"シグニ/クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br><br>【常】：これにアクセされているシグニは「【自】：このシグニがアタックしたとき、パワーがこのシグニのパワー以下の対戦相手のシグニ1体を対象とし、《緑》《緑》《無》を支払ってもよい。そうした場合、それをバニッシュする。」を得る。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P1-TK04A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P1-TK04A.jpg", //SRC
		"【ウィルス】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【ウィルス】はシグニゾーン1つにつき1つまでしか置けない。<br>【ウィルス】と同じシグニゾーンにあるシグニは感染状態である。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WX26-P2-TK01B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WX26/WX26-P2-TK01B.jpg", //SRC
		"アタックできない", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"アタックできない", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK01.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK02.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK03.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK04.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK05.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP01-TK06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP01-TK06.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TK01A.jpg", //SRC
		"ペロロ人形", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：対戦相手のシグニが正面にアタックする場合、代わりにこのシグニのあるシグニゾーンにアタックする。<br>(シグニゾーンにアタックした場合、対戦相手にダメージを与えない)<br>【常】：アップ状態のこのシグニがバトルか対戦相手の効果によって場を離れる場合、代わりにこのシグニをダウンしてもよい。<br>【自】：対戦相手のターン終了時、このシグニをゲームから除外する。<br><br>(クラフトであるシグニは場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TK02A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TK02A.jpg", //SRC
		"雨雲号", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：【ランサー】<br>(【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする)<br>【自】：このシグニがバトルによってシグニ1体をバニッシュしたとき、対戦相手のパワー10000以下のシグニ1体を対象とし、それをバニッシュする。<br>【自】：対戦相手のターン終了時、このシグニをゲームから除外する。<br><br>(クラフトであるシグニは場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TK03A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TK03A.jpg", //SRC
		"虎丸", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"15000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【常】：これの上にある《棗イロハ》のパワーを+5000する。<br>【常】：これの上にある《棗イロハ》は「【自】：あなたのアタックフェイズ開始時、対戦相手のシグニを2体まで対象とし、ターン終了時まで、それらのパワーをそれぞれ-3000する。」を得る。<br><br>(このクラフトの上にあるシグニが場を離れるとこのクラフトはゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TK03B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TK03B.jpg", //SRC
		"クルセイダーちゃん", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏武：ブルアカ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"15000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。<br>【自】：このシグニがアタックしたとき、対戦相手のシグニ1体を対象とし、それをトラッシュに置く。<br>【自】：対戦相手のターン終了時、このシグニをゲームから除外する。<br><br>(クラフトであるシグニは場を離れるとゲームから除外される)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR01.jpg", //SRC
		"白洲アズサ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR02.jpg", //SRC
		"美甘ネル", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR03.jpg", //SRC
		"砂狼シロコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR04.jpg", //SRC
		"空崎ヒナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR05.jpg", //SRC
		"浦和ハナコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR06", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR06.jpg", //SRC
		"阿慈谷ヒフミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR07", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR07.jpg", //SRC
		"一之瀬アスナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR08", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR08.jpg", //SRC
		"角楯カリン", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR09", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR09.jpg", //SRC
		"奥空アヤネ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR10", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR10.jpg", //SRC
		"十六夜ノノミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR11", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR11.jpg", //SRC
		"銀鏡イオリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR12", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR12.jpg", //SRC
		"火宮チナツ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR13", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR13.jpg", //SRC
		"歌住サクラコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR14", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR14.jpg", //SRC
		"聖園ミカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR15", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR15.jpg", //SRC
		"蒼森ミネ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR16", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR16.jpg", //SRC
		"天童アリス", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR17", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR17.jpg", //SRC
		"猫塚ヒビキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR18", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR18.jpg", //SRC
		"早瀬ユウカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR21.jpg", //SRC
		"狐坂ワカモ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR22.jpg", //SRC
		"陸八魔アル", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR23.jpg", //SRC
		"棗イロハ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR24.jpg", //SRC
		"黒舘ハルナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR25.jpg", //SRC
		"下江コハル", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR26.jpg", //SRC
		"守月スズミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR27.jpg", //SRC
		"鷲見セリナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR28", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR28.jpg", //SRC
		"静山マシロ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR29", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR29.jpg", //SRC
		"伊落マリー", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR30", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR30.jpg", //SRC
		"古関ウイ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR31", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR31.jpg", //SRC
		"杏山カズサ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR32", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR32.jpg", //SRC
		"桐藤ナギサ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR33", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR33.jpg", //SRC
		"羽川ハスミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR34", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR34.jpg", //SRC
		"剣先ツルギ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR35", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR35.jpg", //SRC
		"室笠アカネ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR36", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR36.jpg", //SRC
		"音瀬コタマ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR37", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR37.jpg", //SRC
		"黒崎コユキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR38", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR38.jpg", //SRC
		"各務チヒロ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR39", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR39.jpg", //SRC
		"花岡ユズ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR40", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR40.jpg", //SRC
		"飛鳥馬トキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR41", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR41.jpg", //SRC
		"明星ヒマリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR42", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR42.jpg", //SRC
		"才羽モモイ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR43", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR43.jpg", //SRC
		"才羽ミドリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR44", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR44.jpg", //SRC
		"生塩ノア", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR47", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR47.jpg", //SRC
		"朝比奈フィーナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR49", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR49.jpg", //SRC
		"水羽ミモリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR50", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR50.jpg", //SRC
		"河和シズコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR55", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR55.jpg", //SRC
		"獅子堂イズミ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR56", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR56.jpg", //SRC
		"鬼方カヨコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR57", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR57.jpg", //SRC
		"牛牧ジュリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR58", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR58.jpg", //SRC
		"氷室セナ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR59", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR59.jpg", //SRC
		"伊草ハルカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR60", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR60.jpg", //SRC
		"鰐渕アカリ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR61", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR61.jpg", //SRC
		"赤司ジュンコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR62", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR62.jpg", //SRC
		"愛清フウカ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR63", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR63.jpg", //SRC
		"浅黄ムツキ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-CP02-TKR64", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-CP02-TKR64.jpg", //SRC
		"天雨アコ", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P05-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-TK01A.jpg", //SRC
		"【ハスターリク】", //NAME
		"-", //RARE
		"", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"【自】：あなたのアタックフェイズ開始時、対戦相手が手札を1枚捨てるか《無》を支払わないかぎり、このシグニゾーンにあるシグニをバニッシュする。<br>(これを置いたプレイヤーのアタックフェイズにこの【自】能力が発動する)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P07-TK01-A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-TK01-A.jpg", //SRC
		"サーバント ZERO", //NAME
		"TK", //RARE
		"シグニ", //TYPE
		"精元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //STORY
		"", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P09-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK01A.jpg", //SRC
		"コードイート ケチャチャ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このクラフトは効果以外によっては場に出せない)<br>(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br>『【常】：これにアクセされているシグニのパワーを+10000する。』", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P09-TK02A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK02A.jpg", //SRC
		"コードイート セアブラマシマシ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このクラフトは効果以外によっては場に出せない)<br>(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br>『【常】：これにアクセされているシグニは【ランサー】を得る。<br>(【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを1枚クラッシュする)』", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P09-TK03A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK03A.jpg", //SRC
		"コードイート オンタマ", //NAME
		"TK", //RARE
		"シグニ クラフト", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このクラフトは効果以外によっては場に出せない)<br>(【アクセ】はシグニ1体に1枚までしか付けられない。このクラフトが付いているシグニが場を離れるとこのクラフトはゲームから除外される)<br>『【常】：これにアクセされているシグニが場を離れる場合、代わりにこれをゲームから除外してもよい。そうした場合、そのシグニをダウンする。』", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P09-TK03B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P09-TK03B.jpg", //SRC
		"シグニ 立入禁止", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"ご迷惑をおかけしております", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P11-TK07A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P11-TK07A.jpg", //SRC
		"-", //NAME
		"TK", //RARE
		"", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"《無》《無》《無》《無》《無》払わなきゃ…だめ。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P14-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P14-TK01.jpg", //SRC
		"フェゾーネマジック・ホワイト", //NAME
		"TK", //RARE
		"スペル クラフト", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このスペルはあなたのメインフェイズにルリグデッキから使用できる)<br>(クラフトであるスペルは、使用後にゲームから除外される)<br><br>あなたのトラッシュから《ガードアイコン》を持つシグニ1枚を対象とし、それを手札に加える。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P14-TK02", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P14-TK02.jpg", //SRC
		"フェゾーネマジック・烈火", //NAME
		"TK", //RARE
		"スペル クラフト", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《無》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このスペルはあなたのメインフェイズにルリグデッキから使用できる)<br>(クラフトであるスペルは、使用後にゲームから除外される)<br><br>対戦相手のパワー12000以下のシグニ1体を対象とし、それをバニッシュする。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P14-TK03", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P14-TK03.jpg", //SRC
		"フェゾーネマジック・BLUE", //NAME
		"TK", //RARE
		"スペル クラフト", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このスペルはあなたのメインフェイズにルリグデッキから使用できる)<br>(クラフトであるスペルは、使用後にゲームから除外される)<br><br>カードを3枚引き、手札を2枚捨てる。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P14-TK04", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P14-TK04.jpg", //SRC
		"フェゾーネマジック・深緑", //NAME
		"TK", //RARE
		"スペル クラフト", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このスペルはあなたのメインフェイズにルリグデッキから使用できる)<br>(クラフトであるスペルは、使用後にゲームから除外される)<br><br>【エナチャージ1】をする。その後、あなたのエナゾーンからシグニを1枚まで対象とし、それを場に出す。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P14-TK05", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P14-TK05.jpg", //SRC
		"フェゾーネマジック・ブラック", //NAME
		"TK", //RARE
		"スペル クラフト", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×0", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(このスペルはあなたのメインフェイズにルリグデッキから使用できる)<br>(クラフトであるスペルは、使用後にゲームから除外される)<br><br>対戦相手のシグニ1体を対象とし、ターン終了時まで、それのパワーを-8000する。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P15-TK01A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P15-TK01A.jpg", //SRC
		"【ゲート】", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"(【ゲート】はシグニゾーン1つにつき1つまでしか置けない)", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P16-TK01", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P16-TK01.jpg", //SRC
		"インビンシブル・ストーリー", //NAME
		"TK", //RARE
		"ピース クラフト", //TYPE
		"", //CLASS
		"赤\n白青", //COLOR
		"", //LEVEL
		"《無》×3", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"このピースはあなたの場にルリグが3体いなくても使用できる。<br><br>以下の3つから2つまで選ぶ。同じ選択肢を2回選んでもよい。<br>①《白》を支払ってもよい。そうした場合、【ルリグバリア】1つを得る。<br>②対戦相手のシグニ1体を対象とし、《赤》を支払ってもよい。そうした場合、それをバニッシュする。<br>③《青》を支払ってもよい。そうした場合、カードを3枚引く。", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	],
	[
		"WXDi-P16-TK02B", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P16-TK02B.jpg", //SRC
		"リミット -1", //NAME
		"TK", //RARE
		"トークン", //TYPE
		"", //CLASS
		"", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //STORY
		"リミット -1", //JP_TEXT
		"", //TW_TEXT
		"" //BAN
	]
];
