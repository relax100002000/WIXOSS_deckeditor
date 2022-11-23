/*
	[
		"", //ID
		"", //SRC
		"", //NAME
		"", //RARE
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
		"", //JP_TEXT
		""	//TW_TEXT
		],
*/

const ID = 0;
const SRC = 1;
const NAME = 2;
const RARE = 3;
const TYPE = 4;
const CLASS = 5;
const COLOR = 6;
const LEVEL = 7;
const COST = 8;
const LIMIT = 9;
const POWER = 10;
const COIN = 11;
const TIMING = 12;
const LB = 13;
const TEAM = 14;
const JP_TEXT = 15;
const TW_TEXT = 16;

var cardData = [
	[
		"WXDi-D01-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-001.jpg", //SRC
		"紡ぎし扉　アト＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-002.jpg", //SRC
		"紡ぎし扉　アト＝エット", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-003.jpg", //SRC
		"紡ぎし扉　アト＝トヴォ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-004.jpg", //SRC
		"紡ぎし扉　アト＝トレ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン１）[緑(0)]：それぞれ異なるクラスを持つあなたのシグニ３体を対象とし、ターン終了時まで、それらのパワーを＋3000する。<br><br>【出】：【エナチャージ２】をする。この方法でエナゾーンに置かれたカードが共通するクラスを持たない場合、追加で【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-005.jpg", //SRC
		"目醒めし者　タウィル＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-006.jpg", //SRC
		"タウィル＝ハウリング", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。カードを１枚引き、手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-007.jpg", //SRC
		"タウィル＝カラーズ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：あなたの場に赤のシグニがある場合、対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。青のシグニがある場合、カードを２枚引く。緑のシグニがある場合、【エナチャージ２】をする。（あなたのデッキの上からカードを２枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-008.jpg", //SRC
		"奏救の鍵主　ウムル＝ノル", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-009.jpg", //SRC
		"ウムル＝ドロー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-010.jpg", //SRC
		"ウムル＝ダウン", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ１体を対象とし、それをダウンする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-011.jpg", //SRC
		"ハーモニー・コール", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑赤青", //COLOR
		"", //LEVEL
		"《無》×８", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜アンシエント・サプライズ＞＆全員レベル１以上<br><br>あなたのデッキの上からカードを８枚見る。その中からレベル１とレベル２とレベル３のシグニをそれぞれ１枚まで場に出し、残りをシャッフルしてデッキの一番下に置く。その後、ターン終了時まで、対象のレベル１のシグニ１体は【アサシン】を得、対象のレベル２のシグニ１体は【ダブルクラッシュ】を得、対象のレベル３のシグニ１体は【ランサー】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-012.jpg", //SRC
		"羅星　カメロパル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのエナゾーンにあるシグニが持つクラスが合計３種類以上あるかぎり、このシグニのパワーは＋4000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-013.jpg", //SRC
		"翠将　センノリキュウ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：【エナチャージ３】（あなたのデッキの上からカードを３枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-014.jpg", //SRC
		"ツヴァイ＝スローロリス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのエナゾーンにあるシグニが持つクラスが合計３種類以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【起】（ターン１）[緑][緑][無]：あなたの他のパワー15000以上のシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-015.jpg", //SRC
		"大装　トビエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたの他のシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【出】手札を２枚捨てる：カードを２枚引く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-016.jpg", //SRC
		"羅石　アシレン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このシグニのパワーが15000以上の場合、対戦相手は手札を１枚捨てる。20000以上の場合、代わりに対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-017.jpg", //SRC
		"翠天　アタランテ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】エナゾーンからそれぞれ異なるクラスを持つシグニ３枚をトラッシュに置く：対戦相手のパワー8000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-018.jpg", //SRC
		"幻水　スイギュウ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-019.jpg", //SRC
		"幻獣　コアララ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-020.jpg", //SRC
		"サーバント　#", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D01-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D01-021.jpg", //SRC
		"複成", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのエナゾーンから緑のシグニ１枚を対象とし、それを手札に加える。あなたの場に＜アンシエント・サプライズ＞のルリグが３体いる場合、代わりにあなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-01LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-01LAT.jpg", //SRC
		"リゼ　レベル０", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-02L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-02L.jpg", //SRC
		"【センター】リゼ　レベル１", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-03L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-03L.jpg", //SRC
		"【センター】リゼ　レベル２", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-04L", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-04L.jpg", //SRC
		"【センター】リゼ　レベル３", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【チーム】＜さんばか＞<br>【チーム起】（ターン１）[白(0)]：あなたの＜バーチャル＞のシグニ１体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋2000する。<br><br>【出】：あなたのデッキの上からカードを３枚見る。その中から＜バーチャル＞のシグニを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-05LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-05LAT.jpg", //SRC
		"アンジュ　レベル０", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-06LT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-06LT.jpg", //SRC
		"【アシスト】アンジュ　レベル１", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-07LT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-07LT.jpg", //SRC
		"【アシスト】アンジュ　レベル２", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それをトラッシュに置く。対戦相手のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-08LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-08LAT.jpg", //SRC
		"とこ　レベル０", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-09LA", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-09LA.jpg", //SRC
		"【アシスト】とこ　レベル１", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：あなたのデッキの上からカードを３枚トラッシュに置く。その後、あなたのトラッシュから＜バーチャル＞のシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-10LA", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-10LA.jpg", //SRC
		"【アシスト】とこ　レベル２", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、それらをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-11A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-11A.jpg", //SRC
		"【センター】アンジュ　レベル１", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-12A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-12A.jpg", //SRC
		"【センター】アンジュ　レベル２", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-13A", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-13A.jpg", //SRC
		"【センター】アンジュ　レベル３", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【チーム】＜さんばか＞<br>【チーム起】（ターン１）[白(0)]：あなたの＜バーチャル＞のシグニ１体を対象とし、ターン終了時まで、それのパワーを＋4000する。<br><br>【出】：対戦相手のシグニ１体を対象とし、それを手札に戻す。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-14T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-14T.jpg", //SRC
		"【センター】とこ　レベル１", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-15T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-15T.jpg", //SRC
		"【センター】とこ　レベル２", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-16T", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-16T.jpg", //SRC
		"【センター】とこ　レベル３", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【チーム】＜さんばか＞<br>【チーム起】（ターン１）＜バーチャル＞のシグニ１体を場からトラッシュに置く：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。<br><br>【出】：あなたのトラッシュから＜バーチャル＞のシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-17AT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-17AT.jpg", //SRC
		"【アシスト】リゼ　レベル１", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-18AT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-18AT.jpg", //SRC
		"【アシスト】リゼ　レベル２", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-19LAT", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-19LAT.jpg", //SRC
		"サンバ・カーニバル", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白黒", //COLOR
		"", //LEVEL
		"《無》×５", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜さんばか＞＆全員レベル１以上<br><br>対戦相手のシグニ１体を対象とし、それをトラッシュに置く。対戦相手のシグニ１体を対象とし、それを手札に戻す。あなたのトラッシュから＜バーチャル＞のシグニ１体を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-20", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-20.jpg", //SRC
		"コード２４３４　勇気ちひろ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの場に＜バーチャル＞のシグニが３体以上あるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-21", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-21.jpg", //SRC
		"コード２４３４　宇志海いちご", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-22", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-22.jpg", //SRC
		"コード２４３４　森中花咲", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[黒][白]：あなたのトラッシュから《コード２４３４ 御伽原江良》１枚を対象とし、それを場に出す。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-23", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-23.jpg", //SRC
		"コード２４３４　御伽原江良", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無][無]：あなたの場に《コード２４３４ 森中花咲》がある場合、あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。<br><br>【出】[白][白][無]：あなたの場に＜バーチャル＞のシグニが３体以上ある場合、対戦相手のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-24", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-24.jpg", //SRC
		"コード２４３４　樋口楓", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの中央のシグニゾーンにある＜バーチャル＞のシグニのパワーを＋3000する。<br><br>【自】：このシグニがバニッシュされたとき、ターン終了時まで、あなたのすべての＜バーチャル＞のシグニのパワーを＋3000する。<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-25", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-25.jpg", //SRC
		"コード２４３４　静凛", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのメインフェイズの間、あなたの他のシグニが場を離れたとき、このシグニをアップする。<br><br>【起】[ダウン]：あなたのデッキの上からカードを５枚トラッシュに置く。（デッキが５枚以下ならそれらをすべてトラッシュに置きリフレッシュする）<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-26", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-26.jpg", //SRC
		"コード２４３４　星川サラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-27", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-27.jpg", //SRC
		"コード２４３４　魔使マオ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-28", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-28.jpg", //SRC
		"サーバント　#", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D02-29", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D02-29.jpg", //SRC
		"ワンダー・ランド", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"黒", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。あなたの場に＜さんばか＞のルリグが３体いる場合、代わりにあなたのトラッシュから白か黒のシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-001.jpg", //SRC
		"スーパー・ヘルエスタセイバー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白黒", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に白と黒のルリグがいる<br><br>あなたのトラッシュから白と黒と無色のシグニをそれぞれ１枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-002.jpg", //SRC
		"カウンター・アルケミー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に白のルリグがいる<br><br>対戦相手のシグニ１体を対象とし、ターン終了時まで、それは【アサシン】【ランサー】【ダブルクラッシュ】を失い、新たに得られない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-003.jpg", //SRC
		"アンシエント・エコー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青赤緑", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に赤と青と緑のルリグがいる<br><br>対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。カードを２枚引く。ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-004.jpg", //SRC
		"フューチャー・コード", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×４", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に緑のルリグがいる<br><br>あなたのパワー15000以上のシグニを２体まで対象とし、ターン終了時まで、それらは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-005.jpg", //SRC
		"祝福の鍵の音", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>カードを３枚引き、手札を２枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-006.jpg", //SRC
		"アサルト・ケルベロス", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>対戦相手の手札を見て[ガード]を持たないカードを１枚選び、捨てさせる", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-007.jpg", //SRC
		"目醒めし者　タウィル＝エット", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-008.jpg", //SRC
		"目醒めし者　タウィル＝トヴォ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-009.jpg", //SRC
		"目醒めし者　タウィル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン１）手札から赤のカードを２枚捨てる：カードを２枚引く。<br><br>【出】：あなたのデッキの上からカードを３枚見る。その中から赤のカードを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-010.jpg", //SRC
		"タウィル＝エイボン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：あなたのデッキの上からカードを３枚見る。その中から赤と青と緑のシグニをそれぞれ１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-011.jpg", //SRC
		"タウィル＝シャボネス", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-012.jpg", //SRC
		"タウィル＝バースト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タウィル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のシグニを、レベルの合計が対戦相手のセンタールリグのレベル以下になるように好きな数対象とし、それらをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-013.jpg", //SRC
		"奏救の鍵主　ウムル＝エット", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-014.jpg", //SRC
		"奏救の鍵主　ウムル＝トヴォ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-015.jpg", //SRC
		"奏救の鍵主　ウムル＝トレ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム起】（ターン１）[青(0)]：あなたのシグニ１体を対象とし、それを他のシグニゾーン１つに配置する。<br><br>【出】：ターン終了時まで、対戦相手のシグニゾーン１つを消す。（そこにあるすべてのカードをトラッシュに置く。プレイヤーはそこにシグニを配置できない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-016.jpg", //SRC
		"ウムル＝フリーズ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、それらを凍結する。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-017.jpg", //SRC
		"ウムル＝ブレイク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手の凍結状態のシグニを２体まで対象とし、それらをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-018.jpg", //SRC
		"ウムル＝クリアー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：あなたは手札をすべて捨て、捨てたカードの枚数に１を加えた枚数のカードを引く。対戦相手は手札をすべて捨て、捨てたカードの枚数から１を引いた枚数のカードを引く。<br><br>【出】[無]：対戦相手のルリグ１体を対象とし、それを凍結する。<br>（凍結されたルリグは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-019.jpg", //SRC
		"アト＝チャージ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：【エナチャージ２】（あなたのデッキの上からカードを２枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-020.jpg", //SRC
		"アト＝キラー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-021.jpg", //SRC
		"アト＝リマインド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：あなたの場にあるいずれかのシグニと共通するクラスを持つ対戦相手のシグニ１体を対象とし、それをエナゾーンに置く。そうした場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-022.jpg", //SRC
		"アト＝ファインダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】エナゾーンからそれぞれ異なるクラスを持つシグニ３枚をトラッシュに置く：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-023.jpg", //SRC
		"アト＝リペアー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：あなたのトラッシュから[ガード]を持たない、それぞれ異なるクラスを持つシグニ７枚を対象とし、それらをデッキに加えてシャッフルする。そうした場合、あなたのデッキの一番上のカードをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-024.jpg", //SRC
		"【アシスト】リゼ　レベル１’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：あなたのデッキの上からカードを７枚見る。その中から黒の＜バーチャル＞のシグニを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-025.jpg", //SRC
		"【アシスト】リゼ　レベル２’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを手札に戻す<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-026.jpg", //SRC
		"【アシスト】リゼ　レベル２’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"リゼ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：あなたの＜さんばか＞のルリグ１体を対象とし、ターン終了時まで、それは「【自】（ターン１）：このルリグがアタックしたとき、このルリグをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-027.jpg", //SRC
		"【アシスト】アンジュ　レベル１’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】[無]：対戦相手のパワー10000以下のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-028.jpg", //SRC
		"【アシスト】アンジュ　レベル２’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：あなたの手札から＜バーチャル＞のシグニ１枚を場に出す。それの【出】能力は発動しない。<br><br>【出】[無][無]：あなたの手札から＜バーチャル＞のシグニ１枚を場に出す。それの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-029.jpg", //SRC
		"【アシスト】アンジュ　レベル２’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アンジュ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを手札に戻す。<br>【出】[黒]：あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-030.jpg", //SRC
		"【アシスト】とこ　レベル１’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-031.jpg", //SRC
		"【アシスト】とこ　レベル２’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[白]：あなたのトラッシュから白のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-032.jpg", //SRC
		"【アシスト】とこ　レベル２’’", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"とこ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"さんばか", //TEAM
		"【出】：あなたのトラッシュから＜バーチャル＞のシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-033.jpg", //SRC
		"コード２４３４　アルス・アルマル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜さんばか＞<br>【チーム自】：このシグニがアタックしたとき、このシグニのパワーが20000以上の場合、対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それを手札に戻す。<br><br>【起】（ターン１）[白]：あなたの手札から＜バーチャル＞のシグニを好きな枚数公開する。ターン終了時まで、このシグニのパワーをこの方法で公開したカード１枚につき＋1000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-034.jpg", //SRC
		"コード２４３４　本間ひまわり", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：対戦相手のメインフェイズ開始時、あなたのデッキの一番上を公開する。そのカードが＜バーチャル＞のシグニの場合、ターン終了時まで、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【起】（ターン１）[白]：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加え、１枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-035.jpg", //SRC
		"紅天姫　マルス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニが対戦相手のシグニ１体をバニッシュしたとき、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。<br><br>【出】手札から赤のカードを３枚捨てる：ターン終了時まで、このシグニは【アサシン】を得る。（このシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-036.jpg", //SRC
		"紅魔姫　シュブニグラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】：このシグニがアタックしたとき、あなたの場にあるすべてのシグニが赤の場合、対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][赤]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】[赤][赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-037.jpg", //SRC
		"コードラビラント　ヨグソトス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】（ターン１）：場にあるこのシグニが他のシグニゾーンに移動したとき、[青][青]を支払ってもよい。そうした場合、対戦相手の手札を３枚まで見ないで選び、それらを見て１枚をデッキの一番下に置く。<br><br>【起】（ターン１）[青][青]：対戦相手はデッキの一番下のカードをトラッシュに置く。その後、そのカードと同じカード名の対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-038.jpg", //SRC
		"コードアンシエンツ　パルテノ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のターンの間、このシグニが場を離れる場合、代わりにこれを裏向きにしてもよい。そうした場合、次の次のあなたのメインフェイズ開始時、これと同じシグニゾーンにシグニがない場合、これを表向きにし、対戦相手は手札を２枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[青][青]を支払ってもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-039.jpg", //SRC
		"羅菌姫　アミノサン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニのパワーが対戦相手の効果によって－（マイナス）される場合、代わりに＋（プラス）される。<br><br>【常】：あなたのターンの間、あなたの他のシグニのパワーを＋5000する。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニからダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-040.jpg", //SRC
		"幻怪姫　アザトース", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜アンシエント・サプライズ＞<br>【チーム自】：あなたのアタックフェイズ開始時、このシグニのパワーが15000以上の場合、対戦相手のパワー10000以上のシグニ１体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュにあるシグニが持つクラスが合計７種類以上の場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-041.jpg", //SRC
		"コード２４３４　鈴原るる", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜さんばか＞<br>【チーム常】：あなたのライフクロスはリフレッシュによってトラッシュに移動しない。<br><br>【起】（ターン１）[黒][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。あなたのデッキの上からカードを１０枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-042.jpg", //SRC
		"コード２４３４　ニュイ・ソシエール", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたの他の＜バーチャル＞のシグニ１体が場に出たとき、あなたのデッキの一番上を見る。それをトラッシュに置いてもよい。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのトラッシュに＜バーチャル＞のシグニが２０枚以上ある場合、対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-043.jpg", //SRC
		"コード２４３４　夢月ロア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを２枚見る。その中から《コード２４３４ アルス・アルマル》１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-044.jpg", //SRC
		"コード２４３４　シスター・クレア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの＜バーチャル＞のシグニ１体を対象とし、それをアップする。<br><br>【出】：あなたの場に《コード２４３４ 緑仙》と《コード２４３４ ドーラ》がある場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-045.jpg", //SRC
		"コード２４３４　童田明治", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[白]：あなたのデッキの上からカードを３枚見る。その中から＜バーチャル＞のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-046.jpg", //SRC
		"コード２４３４　緑仙", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場に《コード２４３４ シスター・クレア》と《コード２４３４ ドーラ》がある場合、対戦相手のシグニ１体を対象とし、[白][白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-047.jpg", //SRC
		"コード２４３４　竜胆尊", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-048.jpg", //SRC
		"フレン・スラッシュ", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×２《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、それを手札に戻す。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-049.jpg", //SRC
		"紅天　エリース", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたの赤のシグニ１体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【ライフバースト】：カードを１枚引き、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-050.jpg", //SRC
		"紅将　イマガワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのターンの間、このシグニのパワーは＋7000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-051.jpg", //SRC
		"紅魔　ビュレト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[赤][無]：このシグニよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-052.jpg", //SRC
		"紅魔　ヘラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたの場にあるすべてのシグニが赤の場合、対戦相手のパワー5000以下のシグニ１体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-053.jpg", //SRC
		"中装　ホタルマル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのターンの間、このシグニの隣にあるあなたのシグニのパワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-054.jpg", //SRC
		"幻獣　カリュドーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、カードを１枚引く。<br><br>【出】：あなたは手札を１枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-055.jpg", //SRC
		"紅将　タダカツ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-056.jpg", //SRC
		"羅石　カーネリー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無][無]：あなたのデッキの上からカードを３枚見る。その中から赤のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-057.jpg", //SRC
		"開闢の打刻", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×２《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のパワー13000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー13000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-058.jpg", //SRC
		"蒼天　ニョルズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、カードを１枚引き、手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-059.jpg", //SRC
		"コードメイズ　ミズドケイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたの効果によって場にあるこのシグニが他のシグニゾーンに移動したとき、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-060.jpg", //SRC
		"幻水　ネオンテトラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-061.jpg", //SRC
		"蒼天　ヒュプノス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバトルによって凍結状態のシグニをバニッシュしたとき、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-062.jpg", //SRC
		"蒼魔　スライムメイジ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[青][青][無] 他のシグニ２体を場からトラッシュに置く：対戦相手のシグニ１体を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-063.jpg", //SRC
		"コードメイズ　ソラサー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの他のシグニ１体を対象とし、それとこのシグニの場所を入れ替える。<br><br>【自】（ターン１）：あなたの効果によって場にあるこのシグニが他のシグニゾーンに移動したとき、対戦相手はデッキの一番上を公開する。あなたはそれを対戦相手のデッキの一番下に置いてもよい。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-064.jpg", //SRC
		"蒼将　カンネイ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの手札が４枚以上あるかぎり、このシグニのパワーは＋3000され、このシグニは【シャドウ（スペル）】を得る。（このシグニは対戦相手のスペルによって対象にされない）<br><br>【自】：このシグニが対戦相手のシグニ１体をバニッシュしたとき、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-065.jpg", //SRC
		"羅星　ヴェラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-066.jpg", //SRC
		"BLUE OPENER", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×３《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のレベル２以下のシグニ１体を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のレベル２以下のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-067.jpg", //SRC
		"翠魔　スカンダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[緑][緑][無] シグニ１体を場からトラッシュに置く：この方法でトラッシュに置いたシグニよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：【エナチャージ２】をする。その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-068.jpg", //SRC
		"コードメイズ　カワニイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのシグニ１体を対象とし、それをあなたの他のシグニゾーン１つに配置してもよい。そうした場合、ターン終了時まで、それのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-069.jpg", //SRC
		"幻獣　ナマケモノ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたの場にパワー10000以上のシグニがある場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-070.jpg", //SRC
		"翠魔　ブエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー5000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-071.jpg", //SRC
		"幻水　ノコギリハギ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：【エナチャージ１】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-072.jpg", //SRC
		"奏創", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×２《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、それをエナゾーンに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-073.jpg", //SRC
		"コード２４３４　ラトナ・プティ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－1000する。あなたの場に＜バーチャル＞のシグニが３体以上ある場合、代わりにターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-074.jpg", //SRC
		"コード２４３４　葉加瀬冬雪", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－1000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-075.jpg", //SRC
		"コード２４３４　メリッサ・キンレンカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュに＜バーチャル＞のシグニが５枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【出】：あなたのデッキの上からカードを３枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-076.jpg", //SRC
		"コード２４３４　郡道美玲", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[黒]：あなたのデッキの上からカードを３枚トラッシュに置く。その後、あなたのトラッシュからレベル１の＜バーチャル＞のシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-077.jpg", //SRC
		"コード２４３４　文野環", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-078.jpg", //SRC
		"コード２４３４　夜見れな", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、ターン終了時まで、対戦相手のすべてのシグニのパワーをあなたの場にある＜バーチャル＞のシグニ１体につき－1000する。<br><br>【出】：あなたの場に《コード２４３４ 葉加瀬冬雪》がある場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－4000する。<br><br>【ライフバースト】：あなたのトラッシュから＜バーチャル＞のシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-079.jpg", //SRC
		"コード２４３４　ドーラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-080.jpg", //SRC
		"ダークネス・イーター", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×２《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-081.jpg", //SRC
		"コード２４３４　星川サラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-082.jpg", //SRC
		"コード２４３４　魔使マオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：バーチャル", //CLASS
		"白黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-083.jpg", //SRC
		"羅石　ブロンズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青1", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-084.jpg", //SRC
		"羅石　シルヴァーナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-085.jpg", //SRC
		"幻獣　パンダダ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-086.jpg", //SRC
		"幻獣　コアララ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-087.jpg", //SRC
		"幻水　スイギュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-088.jpg", //SRC
		"幻水　アマケロン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-089.jpg", //SRC
		"サーバント　#", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-090.jpg", //SRC
		"サーバント　#", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P00-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P00-091.jpg", //SRC
		"サーバント　#", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		]
	,
	[
		"WXDi-D03-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-001.jpg", //SRC
		"欠片へ一歩　ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-002.jpg", //SRC
		"奇跡へ一歩　ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-003.jpg", //SRC
		"真実へ一歩　ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-004.jpg", //SRC
		"頂点へ一歩　ヒラナ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【チーム】＜No Limit＞<br>【チーム常】：アタックしているあなたのシグニのパワーを＋2000する。<br><br>【出】：カードを１枚引き、【エナチャージ１】をする。<br><br>【起】（ゲーム１）[赤(0)]：ターン終了時まで、このルリグは「【自】：このルリグがアタックしたとき、あなたのアップ状態のレベル２のルリグ２体をダウンしてもよい。そうした場合、対戦相手が[ガード]を持つカードを１枚捨てないかぎり、対戦相手にダメージを与える。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-005.jpg", //SRC
		"未来へ前進　アキノ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-006.jpg", //SRC
		"アキノ＊グー", //NAME
		"S", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-007.jpg", //SRC
		"アキノ＊パー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×５", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のパワー12000以下のシグニ１体を対象とし、それを手札に戻す。<br><br>【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-008.jpg", //SRC
		"明日へ飛翔　レイ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-009.jpg", //SRC
		"レイ＊一斬", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-010.jpg", //SRC
		"レイ＊無我斬", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"フェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：カードを２枚引く。対戦相手の手札を２枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-011.jpg", //SRC
		"Ｇｌｏｒｙ　Ｇｒｏｗ", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白青", //COLOR
		"", //LEVEL
		"《赤》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜No Limit＞＆全員レベル１以上<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：【ダブルクラッシュ】（アタックによるダメージでライフクロスを２枚クラッシュする）<br><br>【常】：対戦相手は【ガード】ができない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-012.jpg", //SRC
		"小装　ローメイル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-013.jpg", //SRC
		"紅将　ランスロット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-014.jpg", //SRC
		"羅石　ヴォルカニック", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-015.jpg", //SRC
		"紅天　カグツチ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのターンの間、あなたのシグニのパワーを＋2000する。<br><br>【出】手札を２枚捨てる：あなたのトラッシュからレベル３のシグニ１枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-016.jpg", //SRC
		"大得装　トレット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[赤][無]：あなたのトラッシュからレベル１の赤のシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-017.jpg", //SRC
		"羅石　アダマスフィア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがレベル３のシグニの場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-018.jpg", //SRC
		"羅石　ブロンズ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-019.jpg", //SRC
		"羅石　シルヴァーナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-020.jpg", //SRC
		"サーバント　＃", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D03-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D03-021.jpg", //SRC
		"轟音の炎球", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"《赤》×１", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。あなたの場に＜No Limit＞のルリグが３体いる場合、代わりに対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-001.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ｓｔａｎｄｂｙ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-002.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－１ｓｔＶｅｒｓｅ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-003.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－２ｎｄＶｅｒｓｅ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-004.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－３ｒｄＶｅｒｓｅ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【チーム】＜Card Jockey＞<br>【チーム出】：あなたのデッキの上からカードを４枚見る。その中からカードを２枚まで手札に加え、残りをトラッシュに置く。<br><br>【起】（ゲーム１）[白(0)]：ターン終了時まで、このルリグは「【自】：このルリグがアタックしたとき、そのアタック終了時、そのアタックによって対戦相手にダメージが与えられていなかった場合、あなたのアップ状態のレベル２のルリグ１体をダウンしてもよい。そうした場合、このルリグをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-005.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ｓｔａｎｄｂｙ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-006.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ＳＣＲＡＴＣＨ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-007.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ＭＩＸ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：ターン終了時まで、対象のあなたのシグニ１体は【アサシン】を得、対象のあなたのシグニ１体は【ランサー】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える。【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-008.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ｓｔａｎｄｂｙ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-009.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＣＵＥ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-010.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＳＹＮＣ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのライフクロスの一番上を見る。その後、以下の２つから１つを選ぶ。<br>①あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。<br>②あなたのライフクロスの一番上のカードをデッキに加えてシャッフルする。そうした場合、あなたのデッキの上からカードを２枚ライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-011.jpg", //SRC
		"ＥＮＤＬＥＳＳ－ＰＵＮＣＨＬＩＮＥ", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白赤緑", //COLOR
		"", //LEVEL
		"《白》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜Card Jockey＞＆全員レベル１以上<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【常】：このルリグはダウン状態でもアタックでき、１ターンにこのルリグがアタックできる上限は３になる。<br><br>【自】（ターン１）：このルリグがアタックしたとき、あなたのデッキをシャッフルし一番上を公開する。そのカードがレベル１のシグニの場合、このターン、このルリグがアタックできる上限を２減らす。そのカードがレベル２のシグニの場合、このターン、このルリグがアタックできる上限を１減らす。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-012.jpg", //SRC
		"コードアート　Ｋイチュデ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを３枚見る。その中からスペル１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-013.jpg", //SRC
		"聖天　ミカエル", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが左か右のシグニゾーンにあるかぎり、あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-014.jpg", //SRC
		"翠将　アマゾネス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-015.jpg", //SRC
		"聖天　アテナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[白][無][無]：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-016.jpg", //SRC
		"コードアート　Ｃヤンデリア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のスペルの使用コストは[無(1)]増える。<br><br>【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000され、このシグニによってバニッシュされたシグニはエナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【ライフバースト】：あなたのトラッシュからシグニとスペルをそれぞれ１枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-017.jpg", //SRC
		"幻獣　ウサウサ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、以下の２つから１つを選ぶ。<br>①あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。<br>②【エナチャージ１】（あなたのデッキの一番上のカードをエナゾーンに置く）<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②【エナチャージ１】", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-018.jpg", //SRC
		"コードメイズ　ガイセンモ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-019.jpg", //SRC
		"コードメイズ　バベタワ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-020.jpg", //SRC
		"サーバント　＃", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D04-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D04-021.jpg", //SRC
		"グッド・ディグ", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのデッキの上からカードを７枚見る。その中からシグニを２枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。あなたの場に＜Card Jockey＞のルリグが３体いる場合、代わりにその中からカードを２枚まで手札に加え、残りをシャッフルしてデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-001.jpg", //SRC
		"ニューボーン　Ｄｒ．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-002.jpg", //SRC
		"レッツゴー　Ｄｒ．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-003.jpg", //SRC
		"ファイト　Ｄｒ．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-004.jpg", //SRC
		"ガッツ　Ｄｒ．タマゴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：カードを１枚引く。対戦相手は手札を１枚捨てる。<br><br>【自】：このルリグがアタックしたとき、このルリグの下にカードが５枚以上ある場合、カードを１枚引く。７枚以上ある場合、追加で対戦相手は手札を１枚捨てる。<br><br>【起】（ゲーム１）[青(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-005.jpg", //SRC
		"ニューボーン　ノヴァ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-006.jpg", //SRC
		"ノヴァ＝ダーティ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：あなたのデッキの上からカードを７枚見る。その中から白と青のシグニをそれぞれ１枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-007.jpg", //SRC
		"ノヴァ＝チョッパー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：あなたのデッキの上からカードを５枚見る。その中からシグニ１枚を場に出し、残りを好きな順番でデッキの一番下に置く。そのシグニの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-008.jpg", //SRC
		"ニューボーン　バン", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-009.jpg", //SRC
		"バン＝クレッシェンド", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：【エナチャージ２】（あなたのデッキの上からカードを２枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-010.jpg", //SRC
		"バン＝リピート", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。<br><br>【出】：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-011.jpg", //SRC
		"はんぱない★ディストラクション", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白緑", //COLOR
		"", //LEVEL
		"《青》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜うちゅうのはじまり＞＆全員レベル１以上<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】：このルリグがアタックしたとき、以下の２つから１つを選ぶ。この効果を対戦相手のセンタールリグのレベルと同じ回数行う。（１回ずつ行う。同じ選択肢を選んでもよい）<br>①カードを１枚引く。②対戦相手の手札を１枚見ないで選び、捨てさせる。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-012.jpg", //SRC
		"蒼魔　シャークスピア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：あなたのデッキの上からカードを３枚トラッシュに置く。その後、あなたのトラッシュにカードが２０枚以上ある場合、[無][無]を支払ってもよい。そうした場合、あなたのトラッシュから＜悪魔＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-013.jpg", //SRC
		"聖魔　プルソン", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのターンの間、あなたの効果によってカードが１枚以上デッキからトラッシュに置かれたとき、ターン終了時まで、対戦相手のすべてのシグニは能力を失う。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-014.jpg", //SRC
		"蒼魔　スクリュー・カーミラ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを凍結する。あなたのデッキの上からカードを２枚トラッシュに置く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-015.jpg", //SRC
		"蒼魔　キャプテン・フック", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにカードが２０枚以上あるかぎり、このシグニは対戦相手の効果によってバニッシュされない。（シグニとのバトルやパワーが０以下になった場合はバニッシュされる）<br><br>【自】：アタックフェイズの間、このシグニが場を離れたとき、あなたのトラッシュから[ガード]を持たないシグニ５枚を対象とし、それらをデッキに加えてシャッフルする。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-016.jpg", //SRC
		"蒼将　シンパチ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[青]：カードを１枚引く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【起】（ターン１）[青][青][青]：対戦相手のシグニ１体を対象とし、あなたの手札が対戦相手より４枚以上多い場合、それをバニッシュする。<br><br>【ライフバースト】：カードを１枚引く。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-017.jpg", //SRC
		"羅星　ジャコビニ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、このシグニの正面のシグニが凍結状態の場合、[青][青][無]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-018.jpg", //SRC
		"羅星　プロシオス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-019.jpg", //SRC
		"羅星　シリオス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-020.jpg", //SRC
		"サーバント　＃", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D05-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D05-021.jpg", //SRC
		"ＲＡＮＤＯＭ　ＢＡＤ", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"カードを１枚引き、対戦相手は手札を１枚捨てる。あなたの場に＜うちゅうのはじまり＞のルリグが３体いる場合、代わりにカードを１枚引き、対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-001.jpg", //SRC
		"ムジカ　ＳＴＡＲＴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-002.jpg", //SRC
		"ＶＯＧＵＥ１　ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-003.jpg", //SRC
		"ＶＯＧＵＥ２　ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-004.jpg", //SRC
		"ＶＯＧＵＥ３　ムジカ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【チーム】＜DIAGRAM＞<br>【チーム常】：あなたのターンの間、対戦相手の中央のシグニゾーンにあるシグニのパワーを－2000する。<br><br>【出】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。<br><br>【起】（ゲーム１）[黒(0)]：あなたの＜DIAGRAM＞のレベル１のルリグ１体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-005.jpg", //SRC
		"マドカ　ＳＴＡＲＴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-006.jpg", //SRC
		"マドカ//フロート", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】手札を１枚捨てる：カードを３枚引く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-007.jpg", //SRC
		"マドカ//ダブ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。カードを１枚引く。<br><br>【出】[青]：対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-008.jpg", //SRC
		"サンガ　ＳＴＡＲＴ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-009.jpg", //SRC
		"サンガ//エアー", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのレベル２以下のシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-010.jpg", //SRC
		"サンガ//シェイク", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：ターン終了時まで、このルリグは「【自】（ターン２）：対戦相手のシグニかルリグがアタックしたとき、そのアタックを無効にする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-011.jpg", //SRC
		"ｓａｌｖａｇｅ　ｔｈｅ　ｆｕｔｕｒｅ", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒青緑", //COLOR
		"", //LEVEL
		"《黒》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜DIAGRAM＞＆全員レベル１以上<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】：このルリグがアタックしたとき、以下の２つから１つを選ぶ。<br>①対戦相手のデッキの上からカードを１５枚トラッシュに置く。<br>②あなたのトラッシュから[ガード]を持たないシグニを３枚まで対象とし、それらを手札に加える。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-012.jpg", //SRC
		"コードメイズ　クマボク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：対戦相手のシグニ１体がアタックしたとき、その正面にシグニがない場合、このシグニをアタックしたそのシグニの正面に配置してもよい。<br><br>【自】：場にあるこのシグニが他のシグニゾーンに移動したとき、[無][無]を支払ってもよい。そうした場合、このシグニとあなたのエナゾーンにあるシグニ１枚の場所を入れ替える。（それの【出】能力は発動する）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-013.jpg", //SRC
		"羅原　Ｈｅｇ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバトル以外によってバニッシュされたとき、対戦相手のルリグ１体を対象とし、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-014.jpg", //SRC
		"凶天　ガープ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無]：あなたのトラッシュから白か赤か青か緑のレベル１のシグニ１枚を対象とし、それを場に出す。（[白]か[赤]か[青]か[緑]を持つシグニを場に出せる）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-015.jpg", //SRC
		"羅原　Ｇｅ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無][無][無]：このコストでトラッシュに置いたカードが持つ色が合計３種類以上ある場合、対戦相手のパワー12000以上のシグニ１体を対象とし、それをバニッシュする。（無色は色に含まれない）<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②【エナチャージ１】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-016.jpg", //SRC
		"ドライ＝リカブト", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、このシグニの正面にあったシグニ１体を対象とし、[無][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【出】[黒]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーをあなたの場にあるシグニが持つ色の種類１つにつき－3000する。（無色は色に含まれない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-017.jpg", //SRC
		"凶魔　アンナ・ミラージュ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライズ】あなたのシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-018.jpg", //SRC
		"アイン＝グリーンガス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは緑か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-019.jpg", //SRC
		"蒼凶魔　チクタク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-020.jpg", //SRC
		"サーバント　＃", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D06-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D06-021.jpg", //SRC
		"ダウナー・サウンド", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－6000する。あなたの場に＜DIAGRAM＞のルリグが３体いる場合、代わりにターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-001.jpg", //SRC
		"ＧＯ　ＴＯ　ｔｈｅ　ＴＯＰ！", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤白", //COLOR
		"", //LEVEL
		"《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に白と赤のルリグがいる<br><br>あなたのデッキからシグニ１枚を探して公開し手札に加え、デッキをシャッフルする。対戦相手のセンタールリグがレベル３以上の場合、対戦相手は自分のエナゾーンからカード３枚を選びトラッシュに置く。（２枚以下の場合、それらをすべて選ぶ）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-002.jpg", //SRC
		"ＳＩＬＥＮＴ　ＡＳＳＡＳＩＮ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤緑", //COLOR
		"", //LEVEL
		"《無》×４", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に赤と緑のルリグがいる<br><br>あなたのシグニを２体まで対象とし、ターン終了時まで、それらは「【常】：このシグニは、正面にパワー12000以上のシグニがあるかぎり、【アサシン】を得る。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-003.jpg", //SRC
		"だい！ぎゃく！てん！", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白", //COLOR
		"", //LEVEL
		"《無》×５", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"【使用条件】あなたの場に白と青のルリグがいる<br><br>対戦相手の凍結状態のシグニを２体まで対象とし、それらをトラッシュに置く。", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-004.jpg", //SRC
		"ｃｏｄｅ：Ｌ／Ｏ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑青", //COLOR
		"", //LEVEL
		"《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に青と緑のルリグがいる<br><br>あなたのライフクロスが０枚の場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-005.jpg", //SRC
		"ＮＩＧＨＴＭＡＲＥ■ＳＴＥＰ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒緑", //COLOR
		"", //LEVEL
		"《無》×６", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に緑と黒のルリグがいる<br><br>あなたのトラッシュにカードが２５枚以上ある場合、対戦相手のすべてのシグニをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-006.jpg", //SRC
		"ネバー・サレンダー", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>あなたの手札が０枚の場合、あなたのトラッシュから[ガード]を持たないシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-007.jpg", //SRC
		"●ＴＡＰ　ＤＯＷＮ　ＴＡＰ●", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>あなたのライフクロスが０枚の場合、対戦相手のルリグかシグニ１体を対象とし、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-008.jpg", //SRC
		"きゅるり☆きゅるりら", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>カードを１枚引き、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-009.jpg", //SRC
		"アキノ＊グッドL", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：あなたのデッキの上からカードを７枚見る。その中から白と赤のシグニをそれぞれ１枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-010.jpg", //SRC
		"アキノ＊ダブルピース", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のレベル１のシグニ１体を対象とし、それを手札に戻す。<br><br>【出】[無][無] 手札を１枚捨てる：対戦相手のレベル２のシグニ１体を対象とし、それを手札に戻す。<br><br>【出】[無][無] 手札を２枚捨てる：対戦相手のレベル３のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-011.jpg", //SRC
		"アキノ＊バイバイ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを手札に戻す。<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-012.jpg", //SRC
		"レイ＊月華", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：カードを１枚引く。対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-013.jpg", //SRC
		"レイ＊絶対零度", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをデッキの一番上か一番下に置く。それがレベル２以下のシグニの場合、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-014.jpg", //SRC
		"レイ＊斬破", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、それらをダウンする。<br><br>【出】[青][無][無]：対戦相手のシグニ１体を対象とし、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-015.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－Ｗ－ＳＣＲＡＣＨ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】[無] 手札を１枚捨てる：あなたのシグニ１体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを１枚ではなく２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-016.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ＢＥＡＴＪＵＧ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無][無]：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-017.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ＣＲＯＳＳＦＡＤＥ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無]：対戦相手のライフクロス１枚をクラッシュする。（ライフクロスは一番上からクラッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-018.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＬＡＳＥＲ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのデッキの上からカードを５枚見る。その中からあなたのセンタールリグと共通する色を持つカードを２枚までエナゾーンに置き、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-019.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＳＴＲＥＡＭ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のパワー13000以上のすべてのシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-020.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＭＩＲＡＧＥ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：ターン終了時まで、あなたのすべてのシグニのパワーを＋5000する。<br><br>【出】[緑][無][無]：あなたのいずれかのシグニよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無]：対戦相手のシグニ１体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-021.jpg", //SRC
		"ノヴァ＝ミュート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】[無] 手札を１枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-022.jpg", //SRC
		"ノヴァ＝スラッシュ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをトラッシュに置く。<br><br>【出】[白]：あなたのデッキの上からカードを５枚見る。その中からシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-023.jpg", //SRC
		"ノヴァ＝スーパーノヴァ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のすべてのシグニを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-024.jpg", //SRC
		"バン＝ピアニッシモ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のレベル３のシグニ１体を対象とし、それをバニッシュする。あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-025.jpg", //SRC
		"バン＝ダカーポ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-026.jpg", //SRC
		"バン＝ビッグバン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×７", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：各プレイヤーは自分のシグニゾーンとトラッシュにあるすべてのカードをデッキに加えてシャッフルする。その後、各プレイヤーは自分のデッキの上からカードを７枚見て、その中から好きな枚数のシグニを場に出し、残りをトラッシュに置く。それらのシグニの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-027.jpg", //SRC
		"マドカ//スライド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】[無]：対戦相手のレベル２以下のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-028.jpg", //SRC
		"マドカ//ブレイク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とする。対戦相手は手札を２枚捨てないかぎり、それをデッキの一番下に置く。<br><br>【出】[青][無][無]：対戦相手のシグニ１体を対象とする。対戦相手は手札を２枚捨てないかぎり、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-029.jpg", //SRC
		"マドカ//クラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】手札を２枚捨てる：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[青][無][無]：対戦相手のシグニ１体を対象とし、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-030.jpg", //SRC
		"サンガ//スイング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのトラッシュから[ガード]を持たないカードを２枚まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-031.jpg", //SRC
		"サンガ//ヒット", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[緑][無][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-032.jpg", //SRC
		"サンガ//パラレル", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのエナゾーンからシグニ１枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】[緑][無][無]：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-033.jpg", //SRC
		"聖天姫　アークゲイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【出】[白]：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-034.jpg", //SRC
		"羅星姫　リーブラー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのトラッシュから[ガード]を持たないレベル１のシグニを４枚まで対象とし、それらをデッキに加えてシャッフルする。<br><br>【起】（ターン１）[白]：あなたのデッキの上からカードを４枚トラッシュに置く。この方法でレベル１のシグニが２枚以上トラッシュに置かれた場合、このターン、対戦相手のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-035.jpg", //SRC
		"コードハート　Ｐロマピ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜Card Jockey＞<br>【チーム常】：対戦相手は追加で[無][無]を支払わないかぎり【ガード】ができない。<br><br>【出】[白]：あなたのデッキの上からカードを３枚見る。その中からスペルと白のシグニをそれぞれ１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-036.jpg", //SRC
		"紅将姫　ノブナガ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ライズ】あなたの赤のシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[赤]：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【起】[赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-037.jpg", //SRC
		"羅輝石　ローズクォーツ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜No Limit＞<br>【チーム出】[赤][赤]：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【自】：このシグニがアタックしたとき、手札を２枚捨ててもよい。そうした場合、カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-038.jpg", //SRC
		"蒼魔姫　フェンリル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜うちゅうのはじまり＞<br>【チーム自】：あなたのアタックフェイズ開始時、対戦相手は手札を１枚捨てる。<br><br>【出】：対戦相手のシグニを２体まで対象とし、それらを凍結する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-039.jpg", //SRC
		"羅星姫　サタン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのデッキとトラッシュにあるレベル３とレベル２のシグニの基本レベルは１になる。<br><br>【常】：あなたのターンの間、対戦相手の効果によってあなたのレベル１のシグニはバニッシュされない。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のシグニを２体まで対象とし、それらをダウンする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-040.jpg", //SRC
		"翠将姫　ロビンフッド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの場に他にシグニがないかぎり、このシグニは「【自】：このシグニがアタックしたとき、[緑][無]を支払ってもよい。そうした場合、対戦相手のすべてのシグニをエナゾーンに置く。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのシグニを２体まで対象とし、それらを裏向きにしてもよい。このターン終了時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-041.jpg", //SRC
		"コードラビリント　クイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：各アタックフェイズ開始時、対戦相手のシグニ２体を対象とし、それらの場所を入れ替える。<br><br>【自】：対戦相手の場にあるシグニが１体以上他のシグニゾーンに移動したとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-042.jpg", //SRC
		"幻獣神　オサギツネ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにあなたのデッキからカードが１枚以上エナゾーンに移動していた場合、対戦相手のパワー12000以上のシグニ１体を対象とし、[緑][無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：他のシグニを２体まで対象とし、ターン終了時まで、それらのパワーを＋5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-043.jpg", //SRC
		"大装　ダークエナジェ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：対戦相手のシグニのパワーが０以下になったとき、【エナチャージ１】をする。<br><br>【出】[黒]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-044.jpg", //SRC
		"ドライ＝ランリョウオー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜DIAGRAM＞<br>【チーム自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを５枚トラッシュに置く。<br><br>【出】[黒]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。あなたのトラッシュにカードが２０枚以上ある場合、代わりにターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-045.jpg", //SRC
		"聖天　ハニエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無]：あなたのデッキの上からカードを３枚見る。その中からレベル２以下のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-046.jpg", //SRC
		"聖将　チョウウン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニは【シャドウ（レベル２以下のシグニ）】を得る。（このシグニは対戦相手のレベル２以下のシグニによって対象にされない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-047.jpg", //SRC
		"聖魔　アンドラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】手札を１枚捨てる：あなたのデッキの上からカードを５枚見る。その中から＜悪魔＞のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-048.jpg", //SRC
		"羅星　アルファルド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがレベル１のシグニの場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-049.jpg", //SRC
		"聖将　バチョウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのライフクロスが２枚以下であるかぎり、このシグニのパワーは＋3000され、対戦相手のターンの間、このシグニは【シャドウ（シグニ）】を得る。（このシグニは対戦相手のシグニによって対象にされない）<br><br>【出】[白][白][無][無][無]：対戦相手のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-050.jpg", //SRC
		"中装　ボウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-051.jpg", //SRC
		"幻水　シラウオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの手札が４枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-052.jpg", //SRC
		"スタンド・アップ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-053.jpg", //SRC
		"紅天　シーター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-054.jpg", //SRC
		"紅将　ガクヒ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：対戦相手のパワー2000以下のシグニ１体を対象とし、それをバニッシュする。このシグニのパワーが5000以上の場合、代わりに対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-055.jpg", //SRC
		"羅石　アメジスタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-056.jpg", //SRC
		"羅原　Ｃ２Ｈ２", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】[無][無][無] このシグニを場からトラッシュに置く：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-057.jpg", //SRC
		"紅天　ラーマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-058.jpg", //SRC
		"中装　ショクダイキリ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：あなたのレベル３のシグニ１体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-059.jpg", //SRC
		"羅星　カリーナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル１のシグニの場合、対戦相手のパワー8000以下のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-060.jpg", //SRC
		"共鳴の壊音", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×６", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のパワー12000以下のすべてのシグニをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-061.jpg", //SRC
		"蒼天　カロン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-062.jpg", //SRC
		"蒼将　ブラダマンテ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：対戦相手の凍結状態のシグニ１体を対象とし、ターン終了時まで、それは「【自】：ターン終了時、このシグニをバニッシュする。そうした場合、あなたは手札を１枚捨てる。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-063.jpg", //SRC
		"羅星　アンチラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのトラッシュから[ガード]を持たないレベル１のシグニを１枚まで対象とし、それをデッキの一番上に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-064.jpg", //SRC
		"幻水　リュグツカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：カードを１枚引き、手札を１枚捨てる。<br><br>【ライフバースト】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-065.jpg", //SRC
		"蒼天　コキュートス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それを凍結する。<br>（凍結状態のシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-066.jpg", //SRC
		"蒼魔　フォカロル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニを２体まで対象とし、それらをダウンする。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-067.jpg", //SRC
		"幻水　シィラカン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-068.jpg", //SRC
		"ＴＲＯＵＢＬＥ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"カードを３枚引く。<br><br>【ライフバースト】：対戦相手のシグニを２体まで対象とし、それらをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-069.jpg", //SRC
		"翠天　ガルム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのエナゾーンに＜天使＞のシグニが３枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：【エナチャージ２】をする。その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-070.jpg", //SRC
		"翠将　メイドマリアン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、あなたのエナゾーンから＜武勇＞のシグニ１枚を対象とし、[無]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-071.jpg", //SRC
		"翠魔　ヴァサゴ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、【エナチャージ１】をする。<br><br>【出】：あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋3000する。あなたのデッキの一番上のカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-072.jpg", //SRC
		"幻獣　ヒャッココ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このシグニのパワーが5000以上の場合、【エナチャージ１】をする。（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-073.jpg", //SRC
		"翠天　スカジ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたの他の＜天使＞のシグニ１体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、【エナチャージ１】をする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-074.jpg", //SRC
		"羅星　ピーコック", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル１のシグニの場合、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-075.jpg", //SRC
		"コードメイズ　キヨステイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋4000される。<br><br>【出】：対戦相手の場にあるすべてのシグニを好きなように配置し直す。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にシグニがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-076.jpg", //SRC
		"幻獣　ムスザク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、【エナチャージ１】をする。（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-077.jpg", //SRC
		"大蛇", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のパワー15000以上のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-078.jpg", //SRC
		"凶天　アズライール", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無][無]：あなたのトラッシュから＜天使＞のシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュから＜天使＞のシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-079.jpg", //SRC
		"凶将　スカーアハ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのトラッシュにカードが２０枚以上ある場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-080.jpg", //SRC
		"凶魔　バアル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを３枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-081.jpg", //SRC
		"小装　フラガラッハ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-082.jpg", //SRC
		"羅星　ホロロジウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。その後、そのカードがレベル１のシグニの場合、あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。この方法でシグニを手札に加えた場合、手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-083.jpg", //SRC
		"凶魔　パイモン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、あなたのシグニ１体を場からトラッシュに置いてもよい。そうした場合、ターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-084.jpg", //SRC
		"中装　グラム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-085.jpg", //SRC
		"ツヴァイ＝ダガ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。あなたのトラッシュにカードが１５枚以上ある場合、代わりにターン終了時まで、それのパワーを－5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-086.jpg", //SRC
		"羅星　コルバス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手は自分のシグニ１体を選びトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-087.jpg", //SRC
		"コードメイズ　ウェカワ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、あなたのトラッシュからレベル２以下の黒のシグニ１枚を対象とし、[無]を支払ってもよい。そうした場合、それをダウン状態で場に出す。<br><br>【出】[無]：あなたのトラッシュから[ガード]を持たないカード１枚を対象とし、それをエナゾーンに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-088.jpg", //SRC
		"アンダー・アトラクティブ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"このターン、あなたのシグニの効果によって対戦相手のシグニのパワーが－（マイナス）される場合、代わりに２倍－（マイナス）される。<br>あなたのトラッシュにカードが２５枚以上ある場合、あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、ターン終了時まで、それのパワーを－15000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-089.jpg", //SRC
		"聖紅将　パシバル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か赤１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-090.jpg", //SRC
		"聖紅将　ガウェイン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か赤１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-091.jpg", //SRC
		"羅星　プロシオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-092.jpg", //SRC
		"羅星　シリオス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か青１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-093.jpg", //SRC
		"コードメイズ　ガイセンモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-094.jpg", //SRC
		"コードメイズ　バベタワ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは白か緑１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-095.jpg", //SRC
		"蒼凶魔　コオニ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-096.jpg", //SRC
		"蒼凶魔　チクタク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは青か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-097", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-097.jpg", //SRC
		"アイン＝グリーンガス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは緑か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-098", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-098.jpg", //SRC
		"ツヴァイ＝コブラス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは緑か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P01-099", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P01-099.jpg", //SRC
		"サーバント　＃", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		]
	];