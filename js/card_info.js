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
		"ST", //RARE
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
		"【ガード】（このカードを手札から捨てることで、ルリグのアタックによるダメージを一度防ぐ）<br><br>【常】：【マルチエナ】（エナコストを支払う際、このカードは好きな色１つとして支払える）<br><br>【ライフバースト】：あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
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
		],
	[
		"WXDi-P02-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-001.jpg", //SRC
		"幻影と稲光", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白緑", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に白と緑のルリグがいる<br><br>以下の２つから１つを選ぶ。<br>①あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br>②対戦相手のターンの場合、あなたのシグニ１体を対象とし、ターン終了時まで、それは【シャドウ】を得る。（そのシグニは対戦相手によって対象にされない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-002.jpg", //SRC
		"ＩＴＴＥＮ－ＴＯＰＰＡ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤青", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に赤と青のルリグがいる<br><br>以下の４つから２つまで選ぶ。<br>①対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。<br>②対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br>③対戦相手の手札を１枚見ないで選び、捨てさせる。<br>④カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-003.jpg", //SRC
		"蒼黒ＧＡＩＡ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青黒", //COLOR
		"", //LEVEL
		"《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に青と黒のルリグがいる<br><br>対戦相手の手札を２枚見ないで選び、捨てさせる。その後、あなたのトラッシュから[ガード]を持たないシグニを、レベルの合計がこの方法で捨てられたシグニのレベルの合計と等しくなるように２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-004.jpg", //SRC
		"Ｈｅａｖｅｎ’ｓ　Ｄｏｏｒ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×３", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたのトラッシュに＜天使＞のシグニが７種類以上ある<br><br>対戦相手のシグニ１体を対象とし、それをトラッシュに置く。カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-005.jpg", //SRC
		"ゼノ・クラスタ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>以下の２つから１つを選ぶ。<br>①カードを１枚引く。このターンに対戦相手の効果によってあなたの手札からカードが１枚以上トラッシュに移動していた場合、代わりにカードを３枚引く。<br>②【エナチャージ１】をする。このターンに対戦相手の効果によってあなたのエナゾーンからカードが１枚以上トラッシュに移動していた場合、代わりに【エナチャージ３】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-006.jpg", //SRC
		"ＥＮＤ　ＯＦ　ＴＨＥ　ＴＵＲＮ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,スペルカットイン", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>以下の２つから１つを選ぶ。<br>①コストの合計が３以下のスペル１つを対象とし、それの効果を打ち消す。<br>（コストの合計とは、カードの左上のエナコストの数字の合計である。例えばコストが[白(1)][無(2)]の場合、コストの合計は３である）<br>②あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-007.jpg", //SRC
		"想いへ前進　アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
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
		"WXDi-P02-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-008.jpg", //SRC
		"輝きへ前進　アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
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
		"WXDi-P02-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-009.jpg", //SRC
		"勇気へ前進　アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【チーム】＜No Limit＞<br>【チーム常】：対戦相手のターンの間、あなたの中央のシグニゾーンにあるシグニのパワーを＋2000する。<br><br>【出】：カードを１枚引き【エナチャージ１】をする。<br><br>【起】（ゲーム１）アップ状態のレベル２のルリグ２体をダウンする：対戦相手のシグニを２体まで対象とし、手札から[ガード]を持つカードを１枚捨ててもよい。そうした場合、それらを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-010.jpg", //SRC
		"ヒラナ*ステージ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-011.jpg", //SRC
		"ヒラナ*グローイン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：カードを１枚引くか【エナチャージ１】をする。<br><br>【出】：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-012.jpg", //SRC
		"ヒラナ*ストレート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のレベル３のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-013.jpg", //SRC
		"ヒラナ*パワーオン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：カードを２枚引くか【エナチャージ２】をする。<br><br>【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-014.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－１ｓｔＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
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
		"WXDi-P02-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-015.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－２ｎｄＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
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
		"WXDi-P02-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-016.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－３ｒｄＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【チーム】＜Card Jockey＞<br>【チーム起】[ダウン]：対戦相手のセンタールリグがレベル３以上の場合、対戦相手のエナゾーンからカード１枚を対象とし、それをトラッシュに置く。<br><br>【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム１）[赤(0)]：ターン終了時まで、このルリグは「【起】アップ状態のレベル２のルリグ１体をダウンする：このルリグをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-017.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＤＩＧ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのデッキの上からカードを５枚見る。その中からあなたのセンタールリグと共通する色を持つシグニと、センタールリグではないあなたのいずれかのルリグと共通する色を持つシグニを、それぞれ１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-018.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＳＴＡＮＤＵＰ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのレベル１のシグニ１体を対象とし、ターン終了時まで、それは「【自】（ターン１）：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、このシグニをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-019.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＤＩＳＲＥＳＰＥＣＴ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】手札を２枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[白][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-020.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＤＯＰＥ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×５", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのデッキの上からカードを５枚見る。その中からカードを１枚まで手札に加え、シグニを２枚まで場に出し、残りを好きな順番でデッキの一番下に置く。それらのシグニの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-021.jpg", //SRC
		"ソラニウタウ　バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×０", //COST
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
		"WXDi-P02-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-022.jpg", //SRC
		"マエニタツ　バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×１", //COST
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
		"WXDi-P02-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-023.jpg", //SRC
		"タタカイススム　バン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：対戦相手は自分のシグニ１体を選びエナゾーンに置く。<br><br>【自】：あなたのアタックフェイズ開始時、このルリグの下にカードが５枚以上ある場合、【エナチャージ１】をする。７枚以上ある場合、あなたのレベル３の緑のシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。【起】（ゲーム１）[緑(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-024.jpg", //SRC
		"タマゴ＝ダブルストローク", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-025.jpg", //SRC
		"タマゴ＝ビーティング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のレベル１のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-026.jpg", //SRC
		"タマゴ＝ジェットスティック", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[無]：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-027.jpg", //SRC
		"タマゴ＝ドラムロール", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×６", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のすべてのシグニをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-028.jpg", //SRC
		"ＶＯＧＵＥ１ マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
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
		"WXDi-P02-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-029.jpg", //SRC
		"ＶＯＧＵＥ２ マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
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
		"WXDi-P02-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-030.jpg", //SRC
		"ＶＯＧＵＥ３ マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【チーム】＜DIAGRAM＞<br>【チーム自】（ターン１）：あなたの効果によって対戦相手が手札を１枚捨てたとき、カードを１枚引くか【エナチャージ１】をする。<br><br>【出】：カードを３枚引き、手札を２枚捨てる。<br><br>【起】（ゲーム１）[青(0)]：あなたの＜DIAGRAM＞のレベル１のルリグ１体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-031.jpg", //SRC
		"ムジカ／／ドルフィン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのデッキの上からカードを２枚トラッシュに置く。その後、あなたのトラッシュからそれぞれ共通する色を持たず無色ではないシグニ２枚を対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-032.jpg", //SRC
		"ムジカ／／パワームーブ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-033.jpg", //SRC
		"ムジカ／／スプリット", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。<br><br>【出】[黒][無][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-034.jpg", //SRC
		"ムジカ／／グルーヴィ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：ターン終了時まで、対戦相手のすべてのシグニは「【自】：このシグニがバニッシュされたとき、あなたのデッキの上からこのシグニのレベル１につきカードを２枚トラッシュに置く。」を得る。<br><br>【出】[無][無][無]：対戦相手のシグニ１体を対象とし、それをバニッシュする。その後、あなたのトラッシュからそれと同じレベルのシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-035.jpg", //SRC
		"大装　ヤエキリ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】赤のルリグ１体（このシグニが場に出たとき、あなたのアップ状態の赤のルリグ１体をダウンしないかぎり、これをダウンする）<br><br>【自】（ターン１）：あなたが【ガード】したとき、カードを１枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、[白][無]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-036.jpg", //SRC
		"羅星姫　カシオペヤ", //NAME
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
		"【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを４枚公開する。その中にレベル１のシグニが３枚以上ある場合、次の対戦相手のターン終了時まで、このシグニのパワーは＋3000され、このシグニは【シャドウ（シグニ）】を得る。この効果で公開したカードを好きな順番でデッキの一番下に置く。<br><br>【自】：あなたのメインフェイズ開始時、対戦相手のシグニ１体を対象とし、[白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-037.jpg", //SRC
		"紅魔姫　ダッキ", //NAME
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
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのライフクロス１枚がクラッシュされたとき、カードを１枚引く。<br><br>【自】（ターン１）：あなたのシグニ１体がコストかあなたの効果によって場からトラッシュに置かれたとき、【エナチャージ１】をする。<br><br>【出】：あなたのライフクロス１枚をクラッシュしてもよい。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-038.jpg", //SRC
		"羅星姫　ホウオーザ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】白のルリグ１体<br><br>【自】：あなたのアタックフェイズ開始時、このシグニがアップ状態の場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。<br><br>【自】：あなたのターン終了時、このターンにあなたの効果によって対戦相手のエナゾーンからカードが２枚以上トラッシュに置かれていた場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-039.jpg", //SRC
		"幻獣神　バッファロー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたの他の＜地獣＞のシグニ１体が場に出たとき、ターン終了時まで、そのシグニとこのシグニのパワーをそれぞれ＋4000する。<br><br>【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのパワー20000以上のすべてのシグニは「【自】：このシグニがアタックしたとき、正面のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-040.jpg", //SRC
		"蒼天姫　アマビエ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜天使＞のシグニが３体以上ある場合、カードを１枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュに＜天使＞のシグニが１５枚以上ある場合、対戦相手のルリグ１体を対象とし、[青][無]を支払ってもよい。そうした場合、それを凍結する。<br><br>【ライフバースト】：あなたのトラッシュから、対象のレベル２の＜天使＞のシグニ１枚を手札に加えて対象のレベル１の＜天使＞のシグニ１枚を場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-041.jpg", //SRC
		"羅輝石　ロイヤルブルー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】（ターン１）[青(0)]：対戦相手の凍結状態のシグニ１体を対象とし、ターン終了時まで、それは「【自】：アタックフェイズ開始時、あなたが[無][無]を支払わないかぎり、このシグニをバニッシュする。」を得る。<br><br>【ライフバースト】：対戦相手のルリグ１体と対戦相手のシグニ１体を対象とし、それらを凍結する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-042.jpg", //SRC
		"羅原姫　ＺｒＯ２", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】黒のルリグ１体<br><br>【自】：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－3000する。このターンに対戦相手が手札を２枚以上捨てていた場合、代わりにターン終了時まで、それのパワーを－8000する。<br><br>【出】[青]：カードを１枚引くか、対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-043.jpg", //SRC
		"ドライ＝インフルＤ型", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】青のルリグ１体（このシグニが場に出たとき、あなたのアップ状態の青のルリグ１体をダウンしないかぎり、これをダウンする）<br><br>【自】：このシグニがアタックしたとき、対戦相手のパワー10000以上のシグニを２体まで対象とし、[緑][緑][緑][無][無][無]を支払ってもよい。そうした場合、それらをバニッシュする。<br><br>【自】（ターン１）：このシグニが対戦相手の、能力か効果の対象になったとき、カードを１枚引き【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-044.jpg", //SRC
		"羅植姫　ゴーシュ・アグネーゼ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、このシグニをエナゾーンからデッキの一番下に置いてもよい。そうした場合、あなたのデッキの一番上を公開する。そのカードがレベル３のシグニの場合、そのシグニをダウン状態で場に出してもよい。<br><br>【自】：あなたのターン終了時、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-045.jpg", //SRC
		"凶天姫　ヴァルキリー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのトラッシュからレベル１の＜天使＞のシグニ１枚を対象とし、それを手札に加える。<br><br>【自】：このシグニがバニッシュされたとき、手札から＜天使＞のシグニを２枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-046.jpg", //SRC
		"コードアンシエンツ　ファラリス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】ルリグ２体（このシグニが場に出たとき、あなたのアップ状態のルリグ２体をダウンしないかぎり、これをダウンする）<br><br>【自】：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、対戦相手のデッキの上からカードを１０枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-047.jpg", //SRC
		"聖天　ペレ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[無][ダウン]：あなたの他の＜天使＞のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-048.jpg", //SRC
		"小装　コギツネマル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの場に他のシグニがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、[白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-049.jpg", //SRC
		"コードメイズ　トトリサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：対戦相手のシグニ１体が場からトラッシュに置かれたとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-050.jpg", //SRC
		"聖天　キルケー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-051.jpg", //SRC
		"羅星　キルキヌス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：あなたのデッキの上からカードを５枚見る。その中からレベル１のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-052.jpg", //SRC
		"コードメイズ　シンフォーズ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のシグニ１体がアタックしたとき、その正面にシグニがない場合、このシグニをアタックしたそのシグニの正面に配置してもよい。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-053.jpg", //SRC
		"コードメイズ　デカサンバシ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニの正面のシグニがアタックしたとき、このシグニを他のシグニゾーンに配置してもよい。<br><br>【自】：対戦相手のターン終了時、対戦相手のシグニ１体を対象とし、[白][白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-054.jpg", //SRC
		"幻水　ホワイトベタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、あなたの手札が４枚以上あるかぎり、このシグニのパワーは＋2000され、このシグニは【シャドウ（シグニ）】を得る。（このシグニは対戦相手のシグニによって対象にされない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-055.jpg", //SRC
		"ブレイブ・シェード", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×1", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"あなたのシグニ１体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋5000し、それは能力を失い、【シャドウ】と「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-056.jpg", //SRC
		"紅天　アペフチ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたの＜天使＞のシグニ１体がバニッシュされたとき、あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-057.jpg", //SRC
		"紅魔　ゼパル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】他の赤のシグニ１体を場からトラッシュに置く：対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-058.jpg", //SRC
		"羅星　テブルサン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】[ダウン]：このシグニをデッキの一番上に置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-059.jpg", //SRC
		"中装　ヌンチャ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のエナゾーンからカード１枚を対象とし、それをトラッシュに置く。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-060.jpg", //SRC
		"コードアート　Ｓトーブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000される。<br><br>【出】[赤][赤][赤]：あなたのトラッシュにスペルが５枚以上ある場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-061.jpg", //SRC
		"幻獣　ハムスター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このシグニのパワーが8000以上の場合、対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。このシグニのパワーが12000以上の場合、代わりに対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-062.jpg", //SRC
		"紅将　ブーディカ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-063.jpg", //SRC
		"騒音の調和", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"あなたのレベル３の赤のシグニ１体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを１枚ではなく２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-064.jpg", //SRC
		"蒼天　ヘケト", //NAME
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
		"【出】：あなたのデッキの上からカードを３枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番下に置き、残りを好きな順番でデッキの一番上に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-065.jpg", //SRC
		"コードメイズ　スノミュ", //NAME
		"R", //RARE
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
		"【自】：あなたのターン終了時、対戦相手の場に凍結状態のシグニが２体以上ある場合、対戦相手の凍結状態のシグニ１体を対象とし、それをデッキの一番下に置く。<br><br>【出】：対戦相手の中央のシグニゾーンにあるシグニ１体を対象とし、それを凍結する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-066.jpg", //SRC
		"幻水　チンアナゴ", //NAME
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
		"【常】：あなたの手札が４枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたの手札が４枚以上ある場合、対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-067.jpg", //SRC
		"蒼天　ガギエル", //NAME
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
		"【自】：このシグニがアタックしたとき、カードを１枚引き、手札を１枚捨てる。<br><br>【出】：カードを１枚引き、手札を１枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-068.jpg", //SRC
		"蒼将　ヒジカタ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このターンにあなたが手札を１枚以上捨てていた場合、このシグニのパワーは＋3000される。<br><br>【常】：このターンにあなたが手札を２枚以上捨てていた場合、このシグニは「【自】：このシグニがバトルによって対戦相手のシグニをバニッシュしたとき、対戦相手の手札を１枚見ないで選び、捨てさせる。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-069.jpg", //SRC
		"羅星　ドラド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：カードを２枚引く。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-070.jpg", //SRC
		"大罠　ウソスイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-071.jpg", //SRC
		"ＳＰＩＮＮＩＮＧ　ＨＡＲＭＯＮＹ", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、それを凍結する。カードを１枚引く。その後、対戦相手の場に凍結状態のシグニが３体以上ある場合、追加で対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-072.jpg", //SRC
		"翠天　カマプアア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのエナゾーンから＜天使＞のシグニ２枚をトラッシュに置いてもよい。そうした場合、【エナチャージ３】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-073.jpg", //SRC
		"羅星　オフューカス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの手札からレベル１のシグニを１枚までエナゾーンに置く。<br><br>【ライフバースト】：【エナチャージ２】をする。その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-074.jpg", //SRC
		"幻水　キュウセン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにあなたのデッキからカードが１枚以上エナゾーンに移動していた場合、対戦相手のパワー8000以下のシグニ１体を対象とし、[緑][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-075.jpg", //SRC
		"翠魔　シトリー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：【エナチャージ１】をする。その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-076.jpg", //SRC
		"ツヴァイ＝ドクゼリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[緑][黒][無] このシグニを場からトラッシュに置く：対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-077.jpg", //SRC
		"幻水　オオミズゴケ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が６枚以上ある場合、[緑]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-078.jpg", //SRC
		"コードメイズ　フジサパ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[緑][無][無]：対戦相手のパワー10000以上のシグニ１体を対象とし、それとこのシグニをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-079.jpg", //SRC
		"幻獣　フェネック", //NAME
		"R", //RARE
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
		"【自】：各アタックフェイズ開始時、シグニ１体を対象とし、ターン終了時まで、このシグニの基本パワーはそれのパワーと同じ値になる。<br><br>【自】（ターン１）：あなたのパワー15000以上のシグニ１体がアタックしたとき、【エナチャージ１】をする。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にシグニがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-080.jpg", //SRC
		"連奏", //NAME
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
		"0", //LB
		"", //TEAM
		"【エナチャージ３】をする。（あなたのデッキの上からカードを３枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-081.jpg", //SRC
		"凶天　ニュクス", //NAME
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
		"0", //LB
		"", //TEAM
		"【出】：あなたの場に＜天使＞のシグニが３体以上ある場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-082.jpg", //SRC
		"凶魔　ガミジン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このカードがあなたのデッキからトラッシュに置かれたとき、あなたのターンの場合、対戦相手のシグニ１体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-083.jpg", //SRC
		"羅原　Ｍｏ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のレベル２以下のシグニ１体がこのシグニの正面のシグニゾーンに出たとき、このシグニを場からトラッシュに置いてもよい。そうした場合、正面にあったそのシグニをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-084.jpg", //SRC
		"凶天　エレボス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：ターン終了時まで、対戦相手のすべてのシグニのパワーを－1000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-085.jpg", //SRC
		"凶将　チンキュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-086.jpg", //SRC
		"凶魔　アガレス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】（ターン１）デッキの上からカードを２枚トラッシュに置く：ターン終了時まで、このシグニのパワーを＋2000する。<br><br>【ライフバースト】：あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-087.jpg", //SRC
		"羅星　トゥカナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-088.jpg", //SRC
		"コードアート　Eヤーホ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：いずれかのプレイヤーがスペルを使用したとき、【エナチャージ１】をする。<br><br>【出】[黒][黒]：あなたのトラッシュから黒のスペル１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-089.jpg", //SRC
		"サーチ・ライト", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"各プレイヤーは自分のデッキの上からカードを３枚トラッシュに置く。その後、あなたのトラッシュにカードが２５枚以上ある場合、あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P02-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-090.jpg", //SRC
		"羅石　ブロンズ", //NAME
		"C", //RARE
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
		"WXDi-P02-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-091.jpg", //SRC
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
		"WXDi-P02-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-092.jpg", //SRC
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
		"WXDi-P02-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-093.jpg", //SRC
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
		"WXDi-P02-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-094.jpg", //SRC
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
		"WXDi-P02-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-095.jpg", //SRC
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
		"WXDi-P02-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P02-096.jpg", //SRC
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
		"WXDi-P03-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-001.jpg", //SRC
		"ＳＯＮＧ　ＯＦ　ＷＩＸＯＳＳ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に青のルリグがいる<br><br>カードを３枚引く。次のあなたのターン終了時、手札を２枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-002.jpg", //SRC
		"Ｇ－Ｇ－Ｇ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に緑のルリグがいる<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのターンの間、あなたのルリグがグロウしたとき、それがそのターンであなたの最初のグロウである場合、【エナチャージ１】をする。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-003.jpg", //SRC
		"頂点布武", //NAME
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
		"【使用条件】あなたのセンタールリグがレベル２以上<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたの中央のシグニゾーンにある＜武勇＞のシグニのパワーを＋1000し、そのシグニは「【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、【エナチャージ１】をする。」を得る。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-004.jpg", //SRC
		"ＬＩＦＥ　ＬＯＯＰ　ＲＥＳＰＥＣＴＳ", //NAME
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
		"あなたのライフクロスの一番上を見て、以下の２つから１つを選ぶ。<br>①カードを１枚引く。<br>②[無][無][無][無][無]を支払い、あなたのライフクロスの一番上のカードを手札に加える。そうした場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-005.jpg", //SRC
		"ＲＨＡＰＳＯＤＹ　ＰＡＲＴＹ", //NAME
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
		"このピースを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを５枚見る。その中から[ガード]を持たないシグニを１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。追加でエクシード４を支払っていた場合、代わりにその中から[ガード]を持たないシグニを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-006.jpg", //SRC
		"ｂｕｒｎｉｎｇ　ｃｕｒｉｏｓｉｔｙ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このピースを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ１体を対象とし、それをバニッシュする。追加でエクシード４を支払っていた場合、代わりにそれをゲームから除外する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-007.jpg", //SRC
		"真理へ飛翔　レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
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
		"WXDi-P03-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-008.jpg", //SRC
		"蒼穹へ飛翔　レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
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
		"WXDi-P03-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-009.jpg", //SRC
		"至高へ飛翔　レイ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【チーム】＜No Limit＞<br>【チーム自】：あなたのアタックフェイズ開始時、このターンにあなたが効果によってカードを２枚以上引いていた場合、レベル２以下のシグニ１体を対象とし、[青][無]を支払ってもよい。そうした場合、それをデッキの一番下に置く。<br><br>【出】：カードを１枚引き【エナチャージ１】をする。<br><br>【起】（ゲーム１）アップ状態のレベル２のルリグ２体をダウンする：手札をすべて捨てる。この方法で捨てた青のカードと同じ枚数、対戦相手は手札を捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-010.jpg", //SRC
		"アキノ＊クラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[無][無]：対戦相手のターンの場合、あなたのシグニ１体を対象とし、ターン終了時まで、それは「【常】：バニッシュされない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-011.jpg", //SRC
		"ヒラナ＊ドッカン", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】手札を３枚捨てる：対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[赤][赤][赤][赤][無][無]：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-012.jpg", //SRC
		"ヒラナ＊スタンプ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ヒラナ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無][無][無][無][無]：対戦相手のターンの場合、このターン、対戦相手は１以上のエナコストを支払えない。<br>（エナコストは[白][赤][青][緑][黒][無]で表記される）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-013.jpg", //SRC
		"レイ＊神威", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】手札を３枚捨てる：対戦相手のダウン状態のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-014.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－１ｓｔＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×０", //COST
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
		"WXDi-P03-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-015.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－２ｎｄＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×１", //COST
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
		"WXDi-P03-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-016.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－３ｒｄＶｅｒｓｅ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【チーム】＜Card Jockey＞<br>【チーム起】[ダウン]：【エナチャージ２】<br><br>【出】：ターン終了時まで、このルリグは「【常】：あなたのシグニのパワーを＋5000する。」を得る。<br><br>【起】（ゲーム１）[緑(0)]：ターン終了時まで、このルリグは「【起】アップ状態のレベル２のルリグ１体をダウンする：このルリグをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-017.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＢＵＩＬＤ　ＵＰ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[無][無][無][無][無][無]：対戦相手のレベル３のシグニ１体を対象とし、それをトラッシュに置く。<br><br>【出】[白][白]：あなたのデッキの上からカードを５枚見る。その中からカードを２枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-018.jpg", //SRC
		"ＭＣ．ＬＩＯＮ－ＤＲＯＰ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LION", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたのシグニ１体を対象とし、次の対戦相手のターン終了時まで、それは「【常】：対戦相手のターンの間、バニッシュされない。」を得る。<br><br>【出】[無][無]：対戦相手のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-019.jpg", //SRC
		"ＤＪ．ＬＯＶＩＴ－ＲＥ－ＥＤＩＴ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】すべてのシグニを場からトラッシュに置き、手札とエナゾーンにあるすべてのカードをトラッシュに置く：対戦相手のすべてのシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-020.jpg", //SRC
		"ＶＪ．ＷＯＬＦ－ＲＥＶＥＲＢ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無][無][無]：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-021.jpg", //SRC
		"前奏　ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
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
		"WXDi-P03-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-022.jpg", //SRC
		"闘魂　ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
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
		"WXDi-P03-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-023.jpg", //SRC
		"天翔　ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【チーム】＜うちゅうのはじまり＞<br>【チーム出】：対戦相手のシグニ１体を対象とし、それを手札に戻す。<br><br>【自】：このルリグがアタックしたとき、このルリグの下にカードが５枚以上ある場合、あなたのトラッシュから[ガード]を持つシグニを１枚まで対象とし、それをデッキの一番上に置く。７枚以上ある場合、追加でカードを１枚引く。<br><br>【起】（ゲーム１）[白(0)]：あなたの他のルリグの下にあるすべてのカードをこのルリグの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-024.jpg", //SRC
		"ノヴァ＝アウト", //NAME
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
		"【出】：対戦相手のシグニを２体まで対象とし、ターン終了時まで、それらは能力を失う。<br><br>【出】[白][無][無]：能力を持たない対戦相手のシグニ１体を対象とし、それを手札に戻す。<br><br>【出】手札を３枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-025.jpg", //SRC
		"タマゴ＝シンバルロール", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：カードを２枚引く。対戦相手の手札を見る。<br><br>【出】手札を１枚捨てる：対戦相手の手札を見て１枚選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-026.jpg", //SRC
		"タマゴ＝アクセント", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"タマゴ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[青][青][青][青][無][無]：対戦相手のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-027.jpg", //SRC
		"バン＝ソロ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【出】：あなたのシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）<br><br>【出】[無]：次の対戦相手のターン終了時まで、このルリグは「【常】：対戦相手は中央のシグニゾーンにあるシグニでアタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-028.jpg", //SRC
		"ＶＯＧＵＥ１　サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×０", //COST
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
		"WXDi-P03-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-029.jpg", //SRC
		"ＶＯＧＵＥ２　サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×１", //COST
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
		"WXDi-P03-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-030.jpg", //SRC
		"ＶＯＧＵＥ３　サンガ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【チーム】＜DIAGRAM＞<br>【チーム自】：あなたのアタックフェイズ開始時、あなたの場に青と緑と黒のシグニがある場合、【エナチャージ１】をし、その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。<br><br>【出】：【エナチャージ２】<br><br>【起】（ゲーム１）[緑(0)]：あなたの＜DIAGRAM＞のレベル１のルリグ１体を対象とし、それをルリグデッキに戻す。（下のカードは場に残す）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-031.jpg", //SRC
		"マドカ／／アレンジ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのエナゾーンにあるカードが持つ色が合計３種類以上ある場合、対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】：あなたのトラッシュにカードが１５枚以上ある場合、対戦相手のシグニ１体を対象とし、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-032.jpg", //SRC
		"サンガ／／リブート", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：【エナチャージ３】をする。その後、あなたのエナゾーンからカードを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-033.jpg", //SRC
		"ムジカ／／ストンピング", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[黒][黒][黒][黒][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-034.jpg", //SRC
		"ムジカ／／パワーボム", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ムジカ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【出】：あなたのトラッシュからシグニを２枚まで対象とし、それらを能力を持たないシグニとして場に出す。ターン終了時、それらを場からトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-035.jpg", //SRC
		"聖将姫　コウメイ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】緑のルリグ１体<br><br>【自】：あなたの白のルリグ１体がアタックしたとき、あなたのアップ状態のシグニ２体をダウンし[白][無]を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。<br><br>【自】：アップ状態のこのシグニがバニッシュされたとき、[白][無][無]を支払ってもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-036.jpg", //SRC
		"コードハート　Ｐンライト", //NAME
		"SR", //RARE
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
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のルリグ１体を対象とし、ターン終了時まで、それは「【常】：[無][無]を支払わないかぎりアタックできない。」を得る。<br><br>【自】：あなたのターン終了時、このターンにあなたがスペルを使用していた場合、次の対戦相手のターン終了時まで、このシグニは【シャドウ（シグニ）】を得る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①カードを１枚引く。②対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-037.jpg", //SRC
		"幻水姫　シロナクジ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの手札が対戦相手より多いかぎり、このシグニのパワーはその差１枚につき＋1000される。<br><br>【自】：対戦相手のアタックフェイズ開始時、あなたの手札が６枚の場合、カードを１枚引く。<br><br>【起】（ターン１）[白][白] 手札を２枚捨てる：対戦相手のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-038.jpg", //SRC
		"紅天姫　ゼウシアス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ライズ】あなたの＜天使＞のシグニ１体の上に置く<br><br>【自】：このシグニがアタックしたとき、このシグニの下に白の＜天使＞がある場合、次の対戦相手のターン終了時まで、このシグニのパワーは＋3000されこのシグニは【シャドウ（シグニ）】を得る。青の＜天使＞がある場合、カードを２枚引く。緑の＜天使＞がある場合、【エナチャージ２】をする。<br><br>【出】[無]：あなたのトラッシュから＜天使＞のシグニ１枚を対象とし、それをこのシグニの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-039.jpg", //SRC
		"幻獣神　コッコ・ルピコ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：空獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが中央のシグニゾーンにあるかぎり、あなたのルリグにグロウするためのコストは[無(1)]減る。<br><br>【自】（ターン１）：あなたのターンの間、あなたのルリグがグロウしたとき、対戦相手のパワー8000以下のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-040.jpg", //SRC
		"コードオーダー　ワッフルアイス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手の凍結状態のシグニ１体が場を離れたとき、あなたのデッキの一番上のカードをこのシグニの下に置く。（表向きで置く）<br><br>【自】：各アタックフェイズ開始時、このシグニの下からカード１枚を手札に加えるかエナゾーンに置く。<br><br>【出】：対戦相手のシグニを２体まで対象とし、それらを凍結する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-041.jpg", //SRC
		"幻水神　ホタルイカ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】白のルリグ１体（このシグニが場に出たとき、あなたのアップ状態の白のルリグ１体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、カードを１枚引く。<br><br>【自】（ターン１）：あなたが自分の効果によってカードを１枚以上捨てたとき、対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-042.jpg", //SRC
		"翠天姫　デメテル", //NAME
		"SR", //RARE
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
		"【ハーモニー】青のルリグ１体<br><br>【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニが持つ色が合計３種類以上ありこのシグニがアップ状態の場合、あなたの他のシグニ１体を対象とし、[緑][無]を支払ってもよい。そうした場合、ターン終了時まで、それは【ランサー】を得る。<br><br>【自】（ターン１）：あなたのターンの間、あなたの他のシグニ１体がバニッシュされたとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-043.jpg", //SRC
		"コードラビリンス　ギロッポン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：対戦相手がシグニを配置する場合、可能ならばこのシグニの正面に配置しなければならない。<br><br>【常】：あなたのターンの間、このシグニは対戦相手の効果によって場からエナゾーン以外の領域に移動しない。<br><br>【自】：対戦相手のシグニ１体がこのシグニの正面に配置されたとき、ターン終了時まで、それのパワーを－3000してもよい。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-044.jpg", //SRC
		"幻獣神　サーベルタイガー", //NAME
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
		"【ハーモニー】赤のルリグ１体（このシグニが場に出たとき、あなたのアップ状態の赤のルリグ１体をダウンしないかぎり、これをダウンする）<br><br>【常】：あなたの他のシグニのパワーを＋3000する。<br><br>【自】：このシグニがアタックしたとき、【エナチャージ１】をする。その後、このターンにあなたのデッキからカードが３枚以上エナゾーンに移動していた場合、[緑][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-045.jpg", //SRC
		"凶魔姫　エレシュキガル", //NAME
		"SR", //RARE
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
		"【出】：あなたのライフクロス２枚をトラッシュに置く。この方法でカードが２枚トラッシュに置かれた場合、対戦相手のすべてのシグニをトラッシュに置く。（コストのない【出】能力は発動しないことを選べない。ライフクロスが１枚の場合その１枚をトラッシュに置く）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-046.jpg", //SRC
		"羅原姫　Ａｃ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのターンの間、対戦相手のルリグがグロウしたとき、あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。<br><br>【起】（ターン１）[黒]：あなたのデッキの上からカードを５枚トラッシュに置く。その後、あなたのトラッシュから黒のシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-047.jpg", //SRC
		"聖天　アグライア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、手札から＜天使＞のシグニを２枚捨ててもよい。そうした場合、カードを３枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-048.jpg", //SRC
		"聖魔　アクィエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：あなたのデッキの上からカードを３枚見る。その中から＜悪魔＞のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-049.jpg", //SRC
		"羅星　タイポ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、あなたのエナゾーンにレベル１のシグニがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-050.jpg", //SRC
		"中装　イシキリマル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニのパワーは＋4000される。<br><br>【自】（ターン１）：あなたの他のシグニ１体が場に出たとき、あなたのデッキの一番上を見て、それをデッキの一番下に置いてもよい。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-051.jpg", //SRC
		"コードアート　Ａムライト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニを２体まで対象とし、ターン終了時まで、それらは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-052.jpg", //SRC
		"コードアンチ　エレナ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：すべてのプレイヤーは白ではないスペルを使用できない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-053.jpg", //SRC
		"コードメイズ　ヒメジジョ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、対戦相手は、シグニの能力かシグニの効果で対象を選ぶ際、可能ならばこのシグニを対象とする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-054.jpg", //SRC
		"ミラクル・ドロー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"このスペルを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>あなたのデッキの上からカードを５枚見る。その中からカードを１枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。追加でエクシード４を支払っていた場合、代わりにその中からカードを２枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-055.jpg", //SRC
		"紅魔　ビフロンス", //NAME
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
		"【自】（ターン１）：あなたのシグニ１体がコストか効果によって場からトラッシュに置かれたとき、カードを１枚引き、手札を１枚捨てる。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-056.jpg", //SRC
		"羅石　ルベライト", //NAME
		"R", //RARE
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
		"【自】（ターン１）：このシグニが対戦相手のシグニの、能力か効果の対象になったとき、その対戦相手のシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-057.jpg", //SRC
		"コードライド　トラックミキサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】[ダウン]：このシグニをあなたの他の赤のシグニ１体の下に置く。<br><br>【常】：このカードの上にある赤のシグニのパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-058.jpg", //SRC
		"紅天　イーリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたの場に＜天使＞のシグニが３種類以上ある場合、対戦相手のパワー8000以下のシグニ１体を対象とし、手札から＜天使＞のシグニを１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-059.jpg", //SRC
		"羅星　グロバエア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-060.jpg", //SRC
		"幻獣　テングザル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニはパワーが12000以上であるかぎり、「【常】：対戦相手の効果によってダウンしない。」を得る。<br><br>【起】[赤][無][無]：このシグニのパワーが15000以上の場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-061.jpg", //SRC
		"コードアート　Ｂランケット", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋3000される。<br><br>【出】：あなたのデッキの上からカードを５枚見る。その中からスペルを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。この方法で手札に加えたカード１枚につき手札を１枚捨てる。<br><br>【ライフバースト】：あなたのトラッシュからスペルを２枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-062.jpg", //SRC
		"幻獣　マンドリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[赤][無][ダウン]：このシグニのパワーが12000以上の場合、対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-063.jpg", //SRC
		"永劫の影響", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"このスペルを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。追加でエクシード４を支払っていた場合、代わりに対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-064.jpg", //SRC
		"蒼天　アウドムラ", //NAME
		"R", //RARE
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
		"【自】（ターン２）：ドローフェイズ以外であなたがカードを１枚引いたとき、ターン終了時まで、あなたのすべてのシグニのパワーを＋1000する。<br><br>【自】：あなたのアタックフェイズ開始時、手札から＜天使＞のシグニを１枚捨ててもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-065.jpg", //SRC
		"蒼魔　ロノウェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、このターンにあなたのデッキからカードが３枚以上トラッシュに置かれていた場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-066.jpg", //SRC
		"羅星　ハイドラス", //NAME
		"C", //RARE
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
		"【常】：あなたのトラッシュにレベル１のシグニが２枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-067.jpg", //SRC
		"羅石　アパタイト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：このシグニが対戦相手の、能力か効果の対象になったとき、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-068.jpg", //SRC
		"コードメイズ　プリモーラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：対戦相手のターン終了時、対戦相手のシグニ１体を対象とし、それを凍結する。<br><br>【自】：このシグニがバニッシュされたとき、対戦相手のシグニ１体を対象とし、それをダウンし凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-069.jpg", //SRC
		"幻水　トビエイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手は自分のシグニ１体を選びデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-070.jpg", //SRC
		"蒼将　リクソン", //NAME
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
		"【出】：対戦相手の手札が５枚以上ある場合、対戦相手は手札を１枚捨てる。<br><br>【起】[青][青][無]：対戦相手の手札が０枚の場合、ターン終了時まで、このシグニは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-071.jpg", //SRC
		"羅石　ラピスラズリ", //NAME
		"C", //RARE
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
		"【自】：対戦相手のターンの間、このシグニがバニッシュされたとき、手札から赤の＜宝石＞のシグニ１枚を場に出してもよい。そのシグニの【出】能力は発動しない。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のシグニ１体を対象とし、それをダウンする。対戦相手は手札を１枚捨てる。②カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-072.jpg", //SRC
		"ＴＨＲＩＬＬＩＮＧ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"このスペルを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>カードを２枚引き、手札を１枚捨てる。追加でエクシード４を支払っていた場合、代わりにカードを３枚引く。（エクシード４を支払っていたら「２枚引き１枚捨てる」の代わりに３枚引く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-073.jpg", //SRC
		"翠将　ゴツトツコツ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニが場からエナゾーンに置かれたとき、あなたのエナゾーンにあるカードが２枚以下の場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-074.jpg", //SRC
		"翠美　マーライ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニは対戦相手のレベル１のシグニの効果によってバニッシュされない。<br><br>【出】：あなたのルリグ１体を対象とし、ターン終了時まで、このシグニはそれが持つ色１つを得る。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-075.jpg", //SRC
		"幻獣　オランウータン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの他のシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-076.jpg", //SRC
		"羅植　チュリン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：このシグニが中央のシグニゾーンに出ていた場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-077.jpg", //SRC
		"コードメイズ　アクフク", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：【エナチャージ１】をする。このターン、あなたは対戦相手のレベル３以下のシグニによってダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-078.jpg", //SRC
		"幻獣　デグー", //NAME
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
		"【自】：あなたのターン終了時、あなたのエナゾーンからこのシグニよりパワーの低い＜地獣＞のシグニ１枚を対象とし、それを場に出す。それの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-079.jpg", //SRC
		"幻水　カミソリウオ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの手札が４枚以上あるかぎり、このシグニのパワーは＋3000される。<br><br>【出】[緑]：カードを１枚引く。<br><br>【ライフバースト】：カードを１枚引き【エナチャージ２】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-080.jpg", //SRC
		"愛情", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"このスペルを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000し、それは「【自】：このシグニがアタックしたとき、【エナチャージ１】をする。」を得る。追加でエクシード４を支払っていた場合、代わりにターン終了時まで、あなたのすべてのシグニのパワーを＋5000し、それらは「【自】：このシグニがアタックしたとき、【エナチャージ１】をする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-081.jpg", //SRC
		"羅星　レティクルム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このカードがデッキからトラッシュに置かれたとき、手札を１枚捨ててもよい。そうした場合、このカードをトラッシュから手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-082.jpg", //SRC
		"羅原　Ｐａ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】手札から＜原子＞のシグニを２枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-083.jpg", //SRC
		"コードアート　Ｕスレスボ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを２枚トラッシュに置く。その後、この方法でスペルが１枚以上トラッシュに置かれた場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-084.jpg", //SRC
		"凶天　サブナック", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-085.jpg", //SRC
		"凶魔　ルカ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ライズ】あなたの＜悪魔＞のシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[黒][無]：黒ではない対戦相手のパワー3000以下のすべてのシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-086.jpg", //SRC
		"中装　ティルヴィング", //NAME
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
		"【自】（ターン１）：あなたの他の＜アーム＞のシグニ１体が場に出たとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-087.jpg", //SRC
		"凶将　イゾウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【起】手札を２枚捨てる：このカードをトラッシュから中央のシグニゾーンに出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-088.jpg", //SRC
		"羅星　テレスコピウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：対戦相手のシグニ１体を対象とし、あなたのトラッシュにレベル１のシグニが５枚以上ある場合、ターン終了時まで、それのパワーを－5000する。１０枚以上ある場合、代わりにターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-089.jpg", //SRC
		"レティクル・ディガー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"このスペルを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。追加でエクシード４を支払っていた場合、代わりにターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P03-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-090.jpg", //SRC
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
		"WXDi-P03-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-091.jpg", //SRC
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
		"WXDi-P03-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-092.jpg", //SRC
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
		"WXDi-P03-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-093.jpg", //SRC
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
		"WXDi-P03-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-094.jpg", //SRC
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
		"WXDi-P03-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-095.jpg", //SRC
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
		"WXDi-P03-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P03-096.jpg", //SRC
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
		],
	[
		"WXDi-D07-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-001.jpg", //SRC
		"エクス・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-002.jpg", //SRC
		"エクス・ワン", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、カードを１枚引くか【エナチャージ１】をする。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場から離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-003.jpg", //SRC
		"エクス・ツー", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場から離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-004.jpg", //SRC
		"エクス・スリー", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【自】：あなたのシグニ１体に【ソウル】が付いたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。<br><br>【起】[赤(0)]：あなたのシグニ１体を対象とし、このルリグの下からカード１枚をそれの【ソウル】にする。<br><br>【起】（ゲーム１）エクシード３：あなたの赤のシグニを２体まで対象とし、あなたのルリグデッキにあるピース１枚をゲームから除外する。そうした場合、ターン終了時まで、それらは【アサシン】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-005.jpg", //SRC
		"デウス・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-006.jpg", //SRC
		"デウスドライブ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-007.jpg", //SRC
		"デウスシールド", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：このターン、次とその次にあなたがダメージを受ける場合、代わりにダメージを受けず、ターン終了時まで、このルリグは「【自】：ターン終了時、あなたのデッキの上からカードを５枚トラッシュに置く。」を得る。（ダメージを２回防いだら【自】能力を２つ得る）<br><br>【出】[黒][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けず、ターン終了時まで、このルリグは「【自】：ターン終了時、あなたのデッキの上からカードを５枚トラッシュに置く。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-008.jpg", //SRC
		"マキナ・ゼロ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-009.jpg", //SRC
		"マキナウィングスラッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のレベル１のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：あなたのトラッシュから[ガード]を持たないレベル１のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-010.jpg", //SRC
		"マキナスマッシュ", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[黒]：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-011.jpg", //SRC
		"ＴＲＩＧＧＥＲ　ＯＦ　ＶＩＣＴＯＲＹ", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤黒", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜デウス・エクス・マキナ＞＆全員レベル１以上<br><br>対戦相手のライフクロス１枚をクラッシュする。その後、あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-012.jpg", //SRC
		"祝福の鍵の音", //NAME
		"ST", //RARE
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
		"WXDi-D07-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-013.jpg", //SRC
		"コードライド　カモツ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：対戦相手のエナゾーンからカード１枚を対象とし、それをトラッシュに置いてもよい。そうした場合、対戦相手は【エナチャージ１】をしてもよい。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、[赤]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-014.jpg", //SRC
		"凶魔　バフォメット", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにカードが５枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【出】：あなたのデッキの上からカードを３枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-015.jpg", //SRC
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
		"WXDi-D07-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-016.jpg", //SRC
		"羅星　マースカ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】手札からレベル１のシグニを２枚捨てる：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-017.jpg", //SRC
		"コードアクセル　ガルウィング", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜デウス・エクス・マキナ＞<br>【チーム自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが２枚以上ありこのターンにあなたがカードを１枚以上捨てていた場合、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【起】[赤][赤][無]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-018.jpg", //SRC
		"幻水　オニオコゼ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】手札を３枚まで捨てる：この方法で捨てたカードの枚数に等しい枚数のカードを引く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-019.jpg", //SRC
		"コードアンチ　オベリスク", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニに【ソウル】が付いたとき、あなたか対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【出】[黒][赤][無][無]：あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。その後、場に出たそれよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-020.jpg", //SRC
		"小装　エケザクス", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D07-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-021.jpg", //SRC
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
		"WXDi-D07-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D07-022.jpg", //SRC
		"荘厳の絶火", //NAME
		"ST", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。あなたか対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②あなたか対戦相手のデッキの上からカードを４枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-001.jpg", //SRC
		"ホワイトヘブン", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×２《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に白のルリグが２体以上いる<br><br>対戦相手のシグニ１体を対象とし、それをトラッシュに置く。対戦相手のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-002.jpg", //SRC
		"世界逆流", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤青緑", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜アンシエント・サプライズ＞<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【自】（ターン１）：あなたのターンの間、あなたのシグニ１体が場に出たとき、以下の３つから１つを選ぶ。<br>①場に出たそのシグニが赤の場合、対戦相手のパワー8000以下のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。<br>②場に出たそのシグニが青の場合、カードを１枚引く。<br>③場に出たそのシグニが緑の場合、【エナチャージ１】をする。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-003.jpg", //SRC
		"サマーライブブルーズ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に青のルリグが２体以上いる<br><br>カードを２枚引く。その後、対戦相手のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-004.jpg", //SRC
		"DEATH DECK", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×２《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に黒のルリグが２体以上いる<br><br>対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。その後、以下の２つからあなたのトラッシュにあるカード１０枚につき１つを選ぶ。<br>①あなたのトラッシュからあなたのセンタールリグと共通する色を持つシグニを２枚まで対象とし、それらを手札に加える。<br>②対戦相手のデッキの上からカードを１０枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-005.jpg", //SRC
		"イノセントバトル", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>あなたか対戦相手は自分のトラッシュにあるすべてのカードをデッキに加えてシャッフルする。あなたはカードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-006.jpg", //SRC
		"DEVIL'S CARNIVAL", //NAME
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
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>あなたの＜悪魔＞のシグニ２体を場からトラッシュに置く。そうした場合、このゲームの間、あなたは以下の能力を得る。<br>『【自】：あなたのターン終了時、あなたのトラッシュから＜悪魔＞のシグニ１枚を対象とし、それを手札に加える。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-007.jpg", //SRC
		"明日へ前進　アキノ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"アキノ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【自】：あなたのメインフェイズ開始時、対戦相手のシグニ１体を対象とし、あなたの白のシグニ１体を場からトラッシュに置き[白]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【出】：カードを１枚引き【エナチャージ１】をする。<br><br>【起】（ゲーム１）[白(0)]：次の対戦相手のターンの、メインフェイズとアタックフェイズの間、あなたのシグニは【シャドウ】を得る。（この能力の使用後に場に出たシグニにも影響を与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-008.jpg", //SRC
		"MC.LION 3rdVerse-ALT", //NAME
		"L", //RARE
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
		"【自】（ターン１）：このルリグがアタックしたとき、あなたのデッキをシャッフルし一番上を公開する。それがレベル１のシグニの場合、カードを１枚引く。それが[ガード]を持つシグニの場合、対戦相手のライフクロス１枚をクラッシュする。<br><br>【起】（ゲーム１）[白(0)]：対戦相手のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-009.jpg", //SRC
		"ノンストップ　Ｄｒ．タマゴ", //NAME
		"L", //RARE
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
		"【自】：このルリグがアタックしたとき、このルリグの下からカード１枚をルリグトラッシュに置いてもよい。そうした場合、対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【自】：あなたの効果によって対戦相手が手札を１枚捨てたとき、対戦相手のシグニ１体を対象とし、それを凍結する。<br><br>【起】（ゲーム１）[青(0)]：各プレイヤーはカードを２枚引く。あなたは対戦相手の手札を２枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-010.jpg", //SRC
		"VOGUE3-EX マドカ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マドカ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【自】：あなたのアタックフェイズ開始時、各プレイヤーは、カードを１枚引き手札を１枚捨てる。<br><br>【出】：以下の２つから１つを選ぶ。①対戦相手は手札を２枚捨てる。②対戦相手のルリグ１体を対象とし、それを凍結する。<br><br>【起】（ゲーム１）[青(0)]：あなたの手札が対戦相手より３枚以上多い場合、対戦相手のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-011.jpg", //SRC
		"デウス・ワン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-012.jpg", //SRC
		"デウス・ツー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-013.jpg", //SRC
		"デウス・スリー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：あなたのターンの間、【ソウル】が付いているあなたのシグニの正面のシグニのパワーを－2000する。<br><br>【起】[黒(0)]：あなたのシグニ１体を対象とし、このルリグの下からカード１枚をそれの【ソウル】にする。<br><br>【起】（ゲーム１）エクシード３：あなたのトラッシュから[ガード]を持たないシグニを３枚まで対象とし、あなたのルリグデッキにあるピース１枚をゲームから除外する。そうした場合、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-014.jpg", //SRC
		"マキナ・ワン", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-015.jpg", //SRC
		"マキナ・ツー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【常】：このカードが【ソウル】として付いているシグニは「【自】（ターン１）：このシグニがアタックしたとき、対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。」を得る。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-016.jpg", //SRC
		"マキナ・スリー", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【自】：【ソウル】が付いているあなたのシグニ１体がアタックしたとき、対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【起】[黒(0)]：あなたのシグニ１体を対象とし、このルリグの下からカード１枚をそれの【ソウル】にする。<br><br>【起】（ゲーム１）エクシード３：対戦相手のシグニを２体まで対象とし、あなたのルリグデッキにあるピース１枚をゲームから除外する。そうした場合、ターン終了時まで、それらのパワーをそれぞれ－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-017.jpg", //SRC
		"エクスゲイザー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-018.jpg", //SRC
		"エクスエコー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】手札から赤のカードを１枚捨てる：カードを３枚引く。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-019.jpg", //SRC
		"エクスクロスビーム", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[赤][無][無][無][無]：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-020.jpg", //SRC
		"エクスクロスファイア", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それのレベル１につき[無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカードを２枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-021.jpg", //SRC
		"エクスステップアウト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：カードを２枚引くか【エナチャージ２】をする。<br><br>【出】：あなたのシグニ１体を対象とし、ターン終了時まで、それは【アサシン】を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-022.jpg", //SRC
		"デウスリカバリ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：あなたのデッキの上からカードを２枚トラッシュに置く。その後、あなたのトラッシュから赤と黒のシグニをそれぞれ１枚まで対象とし、それらを手札に加える。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、あなたのトラッシュから赤か黒のシグニ１枚を対象とし、手札を１枚捨ててもよい。そうした場合、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-023.jpg", //SRC
		"デウスリミテッド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：このターン、対戦相手はシグニで合計一度しかアタックできない。<br><br>【出】[無][無]：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-024.jpg", //SRC
		"デウスディガー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【出】：あなたのシグニ１体を対象とし、あなたのルリグトラッシュからルリグ１枚をそれの【ソウル】にする。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-025.jpg", //SRC
		"マキナシーズ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－7000する。<br><br>【自】：このカードがエクシードのコストとしてルリグトラッシュに置かれたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-026.jpg", //SRC
		"マキナリペア", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：あなたのトラッシュから【ライフバースト】を持たないカード１枚を対象とし、それをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-027.jpg", //SRC
		"マキナバインド", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、ターン終了時まで、それらは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。<br><br>【出】[黒][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-028.jpg", //SRC
		"開けし扉　アト＝トレ", //NAME
		"L", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。<br><br>【出】：あなたのトラッシュから[ガード]を持たないシグニを２枚まで対象とし、それらをエナゾーンに置く。<br><br>【起】（ゲーム１）エナゾーンからそれぞれ共通するクラスを持たないシグニ７枚をトラッシュに置く：対戦相手のすべてのシグニをエナゾーンに置き、【エナチャージ２】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-029.jpg", //SRC
		"タウィル＝ハングアウト", //NAME
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
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】手札を３枚まで捨てる：この方法で捨てたカードの枚数に等しい枚数のカードを引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-030.jpg", //SRC
		"ウムル＝アウトサイダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ウムル", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×６", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のすべてのシグニをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-031.jpg", //SRC
		"アト＝イジェクト", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"アト", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"アンシエント・サプライズ", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。<br><br>【出】[無][無]：対戦相手のシグニ１体を対象とし、このターン、次にそれがアタックしたとき、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-032.jpg", //SRC
		"聖天姫　エクシア", //NAME
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
		"【自】（ターン１）：あなたのシグニが対戦相手の、能力か効果の対象になったとき、対戦相手のシグニゾーン１つを指定する。このターン、対戦相手はそのシグニゾーンにあるシグニでアタックできない。<br><br>【自】：あなたのターン終了時、あなたのすべてのシグニをアップする。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-033.jpg", //SRC
		"聖魔姫　ドーマン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのメインフェイズ開始時、あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、このシグニを場からトラッシュに置いてもよい。そうした場合、それを手札に加える。<br><br>【出】手札から[ガード]を持つシグニを１枚捨てる：対戦相手のレベル２以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-034.jpg", //SRC
		"紅将姫　キントキ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】黒のルリグ１体（このシグニが場に出たとき、あなたのアップ状態の黒のルリグ１体をダウンしないかぎり、これをダウンする）<br><br>【自】：あなたのアタックフェイズ開始時、あなたの場に【ソウル】があり対戦相手のエナゾーンにカードが２枚以上ある場合、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【出】[赤][黒]：ターン終了時まで、このシグニは【アサシン】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-035.jpg", //SRC
		"羅輝石　アレキサンドライト", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたの他のシグニ１体が【アサシン】１つか【ランサー】１つか【ダブルクラッシュ】１つを得たとき、[赤][無]を支払ってもよい。そうした場合、ターン終了時まで、このシグニはその能力を得る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-036.jpg", //SRC
		"蒼将姫　コロンブス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ハーモニー】ルリグ２体（このシグニが場に出たとき、あなたのアップ状態のルリグ２体をダウンしないかぎり、これをダウンする）<br><br>【常】：あなたのルリグデッキにあるカードが１枚以下であるかぎり、このシグニのパワーは＋3000される。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニがアップ状態の場合、対戦相手のシグニ１体を対象とし、手札を３枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-037.jpg", //SRC
		"羅星姫　オリオン", //NAME
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
		"【常】：対戦相手のターンの間、対戦相手のシグニが場を離れる場合、代わりにトラッシュに置かれる。<br><br>【自】：対戦相手のターン終了時、カードを１枚引く。<br><br>【起】手札からレベル１のシグニを１枚捨てる：対戦相手のすべてのシグニを凍結する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-038.jpg", //SRC
		"コードラビリンス　ノートルダム", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：メインフェイズとアタックフェイズの間、対戦相手がカードを１枚引いたとき、対戦相手は手札を１枚捨てる。<br><br>【自】：このシグニがバニッシュされたとき、手札を２枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を２枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-039.jpg", //SRC
		"翠英姫　ニュートン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にいるルリグのレベルの合計が偶数の場合、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。<br><br>【出】：あなたの場にいるルリグのレベルの合計が奇数の場合、【エナチャージ１】をする。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②【エナチャージ１】", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-040.jpg", //SRC
		"翠魔姫　イバラキドウジ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：【ランサー】<br><br>【自】：あなたのアタックフェイズ開始時、[無][無][無]を支払わないかぎり、このシグニを場からトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-041.jpg", //SRC
		"大装　ムラマサ", //NAME
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
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、あなたのトラッシュからシグニ１枚を対象とし、あなたの他のシグニ１体を場からトラッシュに置き[黒]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【自】：対戦相手のアタックフェイズ開始時、あなたのトラッシュから黒のシグニ１枚を対象とし、[黒]を支払ってもよい。そうした場合、それを手札に加える。<br><br>【ライフバースト】：あなたのトラッシュからシグニを２枚まで対象とし、それらを手札に加える。手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-042.jpg", //SRC
		"コードアンシエンツ　スチームパンク", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのターンの間、あなたのルリグ１体の下からカード１枚が移動したとき、対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。<br><br>【起】アップ状態のレベル２のルリグ２体をダウンする：このカードをトラッシュから場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-043.jpg", //SRC
		"幻竜姫　ドラゴンメイド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：いずれかのプレイヤーがリフレッシュしたとき、対戦相手のシグニ１体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを４枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-044.jpg", //SRC
		"羅星　レプス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-045.jpg", //SRC
		"コードアート　Rングライト", //NAME
		"R", //RARE
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
		"【自】：このシグニがバニッシュされたとき、あなたの手札からスペル２枚を公開してもよい。そうした場合、カードを１枚引く。<br><br>【自】：あなたのメインフェイズ開始時、あなたのデッキの一番上を公開する。それがスペルの場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-046.jpg", //SRC
		"幻水　レモンテトラ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたが【ガード】したとき、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-047.jpg", //SRC
		"聖天　イシス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを３枚見る。その中から＜天使＞のシグニを１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。この方法でカードを手札に加えた場合、手札を１枚捨てる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-048.jpg", //SRC
		"聖将　ギエン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、【シャドウ（レベル３のシグニ）】を得る。（このシグニは対戦相手のレベル３のシグニによって対象にされない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-049.jpg", //SRC
		"コードメイズ　アントネスト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：各アタックフェイズ開始時、このシグニの正面のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【ライフバースト】：カードを１枚引く。このターン、あなたの手札にあるシグニは[ガード]を得る。（[ガード]を持つシグニは【ガード】を得る）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-050.jpg", //SRC
		"聖将　コウチュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニがアップ状態であるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：このシグニがアップ状態であるかぎり、このシグニの隣にあるあなたのシグニのパワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-051.jpg", //SRC
		"大装　ロンゴミニアド", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのルリグ１体がアタックしたとき、あなたのアップ状態の白のシグニ３体をダウンし[白]を支払ってもよい。そうした場合、そのルリグをアップし、ターン終了時まで、そのルリグは能力を失う。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-052.jpg", //SRC
		"リバース・リターン", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１《青》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のレベル２以下のシグニ１体を対象とし、それを手札に戻す。対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-053.jpg", //SRC
		"紅将　ガラシャ", //NAME
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
		"【常】：あなたのルリグトラッシュにカードがあるかぎり、このシグニのパワーは＋4000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-054.jpg", //SRC
		"小装　イワトオシ", //NAME
		"C", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、[無]を支払ってもよい。そうした場合、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-055.jpg", //SRC
		"幻竜　クエレペ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-056.jpg", //SRC
		"幻獣　コーギー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのターンの間、このシグニのパワーはあなたのセンタールリグのレベル１につき＋2000される。<br><br>【常】：このシグニのパワーが8000以上であるかぎり、このシグニは「【自】：このシグニがアタックしたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。」を得る。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-057.jpg", //SRC
		"紅将　ベディヴィエール", //NAME
		"R", //RARE
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
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、以下の２つから１つを選ぶ。<br>①対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。②対戦相手のパワー2000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-058.jpg", //SRC
		"紅魔　モラクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにあなたの効果によって対戦相手のエナゾーンからカードが１枚以上トラッシュに置かれていた場合、【エナチャージ１】をする。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、対戦相手が[無][無]を支払わないかぎり、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-059.jpg", //SRC
		"コードアート　Yキトリキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたがスペルを使用したとき、対戦相手のパワー5000以下のシグニ１体を対象とし、アップ状態のこのシグニをダウンしてもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-060.jpg", //SRC
		"紅魔　バティン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】（ターン１）[無] 他の＜悪魔＞のシグニ１体を場からトラッシュに置く：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-061.jpg", //SRC
		"羅星　キャンサー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】手札からレベル１のシグニを２枚捨てる：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-062.jpg", //SRC
		"白日の轟雷", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１《白》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、それをバニッシュする。あなたのデッキの上からカードを３枚見る。その中からカード１枚を手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。②対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-063.jpg", //SRC
		"羅星　ノーマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたの効果によって対戦相手が手札を１枚捨てたとき、対戦相手のシグニ１体を対象とし、それを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-064.jpg", //SRC
		"羅原　Ga", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：カードを２枚引く。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-065.jpg", //SRC
		"羅菌　プランクトン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：対戦相手のシグニ１体が凍結状態になったとき、ターン終了時まで、そのシグニのパワーを－1000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-066.jpg", //SRC
		"蒼将　ブルーノ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、カードを１枚引くか対戦相手は手札を１枚捨てる。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-067.jpg", //SRC
		"蒼美　パレット団", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、各プレイヤーはカードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-068.jpg", //SRC
		"蒼魔　ハルファス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、カードを１枚引く。<br><br>【出】：あなたは手札を１枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のルリグかシグニ１体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を３枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-069.jpg", //SRC
		"蒼魔　グラシャラ", //NAME
		"C", //RARE
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
		"【起】このシグニを場からトラッシュに置く：対戦相手のシグニを２体まで対象とし、それらを凍結する。<br><br>【起】[青][無] このシグニを場からトラッシュに置く：対戦相手の手札が０枚の場合、対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-070.jpg", //SRC
		"EXCHANGE", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手の手札を１枚見ないで選び、捨てさせる。その後、あなたのトラッシュからこの方法で捨てられたシグニと同じレベルの[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：どちらか１つを選ぶ。①カードを２枚引く。②あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-071.jpg", //SRC
		"翠天　サテュロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】エナゾーンから＜天使＞のシグニ３枚をトラッシュに置く：この方法でトラッシュに置いたカードが持つ色が合計３種類以上ある場合、あなたの＜天使＞のシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-072.jpg", //SRC
		"壱ノ遊　タカオニ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[無]：あなたのエナゾーンからレベル２のシグニ１枚を対象とし、それと場にあるこのシグニの場所を入れ替える。（それの【出】能力は発動する）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-073.jpg", //SRC
		"幻獣　タスマニアン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-074.jpg", //SRC
		"翠将　ボクロク", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、以下の２つから１つを選ぶ。①あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。②【エナチャージ１】」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-075.jpg", //SRC
		"翠魔　レラジェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それの基本パワーを10000にする。<br>（シグニのパワーを計算する場合、先に基本パワーを適用してプラスやマイナスをする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-076.jpg", //SRC
		"幻水　ウシガエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの手札が５枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：このシグニがアタックしたとき、[緑]を支払ってもよい。そうした場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[緑][緑]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-077.jpg", //SRC
		"翠天　ゼルエル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[白][赤][青][緑][黒]：対戦相手のシグニを２体まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-078.jpg", //SRC
		"コードイート　シーザー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン２）：対戦相手のシグニ１体が場に出たとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-079.jpg", //SRC
		"豪槍", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１《白》×１《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。ターン終了時まで、対戦相手のすべてのシグニは能力を失い、それらの基本パワーを10000にする。<br><br>【ライフバースト】：どちらか１つを選ぶ。①ターン終了時まで、あなたのすべてのシグニのパワーを＋10000する。②あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-080.jpg", //SRC
		"小装　イペタム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-081.jpg", //SRC
		"幻蟲　カミキリムシ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたの場に、シグニに付いているカードかシグニの下に置かれているカードがある場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－1000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-082.jpg", //SRC
		"凶将　ブルータス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは中央のシグニゾーンにあるかぎり、「【自】：このシグニがアタックしたとき、あなたか対戦相手のデッキの上からカードを４枚トラッシュに置く。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-083.jpg", //SRC
		"ツヴァイ＝ヒアリ", //NAME
		"C", //RARE
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
		"【常】：あなたのターンの間、このシグニの正面のシグニのパワーをそのシグニのレベル１につき－1000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-084.jpg", //SRC
		"コードアンチ　ドグー", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-085.jpg", //SRC
		"コードアート　Wインセラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたがスペルを使用したとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。対戦相手のデッキの上からカードを２枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-086.jpg", //SRC
		"ブラック・パック", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１《緑》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋10000する。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のレベル１のシグニ１体を対象とし、それをバニッシュする。②【エナチャージ２】", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-087.jpg", //SRC
		"聖紅魔　ザガン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
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
		"WXDi-P04-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-088.jpg", //SRC
		"聖紅魔　オリアス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
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
		"WXDi-P04-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-089.jpg", //SRC
		"小装　エケザクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-090.jpg", //SRC
		"中装　サンセツコン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P04-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-091.jpg", //SRC
		"翠凶天　ラファエ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
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
		"WXDi-P04-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-092.jpg", //SRC
		"翠凶天　アイゼン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
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
		"WXDi-P04-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P04-093.jpg", //SRC
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
		],
	[
		"WXDi-P05-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-001.jpg", //SRC
		"ＲＥＤ　ＺＯＮＥ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に赤のルリグが２体以上いる<br><br>あなたの赤のシグニ１体を対象とし、ターン終了時まで、それは【アサシン】を得る。手札を３枚まで捨て、この方法で捨てた枚数に２を加えた枚数のカードを引く。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-002.jpg", //SRC
		"ＤＡＮＣＥ　ＩＮ　ＴＨＥ　ＬＡＮＣＥ", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】あなたの場に緑のルリグが２体以上いる<br><br>以下の２つから１つを選ぶ。<br>①【エナチャージ４】をする。その後、あなたのエナゾーンからカードを２枚まで対象とし、それらを手札に加える。<br>②あなたの緑のシグニを２体まで対象とし、ターン終了時まで、それらは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-003.jpg", //SRC
		"Ｍ．Ｇ．Ｄ．", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"無", //CLASS
		"", //COLOR
		"", //LEVEL
		"《無》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>以下の２つから１つを選ぶ。<br>①対戦相手のルリグ１体を対象とし、「あなたのエナゾーンからカード１枚をトラッシュに置く。」か「手札を１枚捨てる。」を合計３回行う。そうした場合、このターン、それがアタックしたとき、そのアタックを無効にする。<br>②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-004.jpg", //SRC
		"パラダイスうちゅう", //NAME
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
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたの能力か効果１つによって、あなたのデッキとトラッシュにあるレベル３以下の＜宇宙＞のシグニのレベルを参照する場合、レベル１として扱ってもよい。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-005.jpg", //SRC
		"Ｄｏｎ’ｔ　ＳＴＯＰ！", //NAME
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
		"（ピースはあなたの場にルリグが３体いると使用できる）<br><br>このゲームの間、あなたは以下の能力を得る。<br>『【常】：対戦相手は追加で手札を１枚捨てるか[無]を支払わないかぎり【ガード】ができない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-006.jpg", //SRC
		"永遠♡不滅 きゅるきゅる～ん☆", //NAME
		"PI", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青白黒", //COLOR
		"", //LEVEL
		"《青》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【チーム】＜きゅるきゅるーん☆＞<br>このピースは、対戦相手が【使用条件】【チーム】を持つピースを使用する際、カットインして使用できる。<br><br>以下の２つから１つを選ぶ。<br>①【使用条件】【チーム】を持つ対戦相手のピース１枚を対象とし、それの効果を打ち消す。この方法で打ち消されたピースはゲームから除外される。<br>②カードを１枚引き【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-007.jpg", //SRC
		"煌きへ一歩　ヒラナ", //NAME
		"L", //RARE
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
		"【常】：あなたのターンの間、あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。<br><br>【出】：カードを１枚引き【エナチャージ１】をする。<br><br>【起】（ゲーム１）[赤(0)]：カードを２枚引き【エナチャージ２】をする。このターン終了時、あなたの手札とエナゾーンにあるすべてのカードをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-008.jpg", //SRC
		"ＶＪ．ＷＯＬＦ　３ｒｄＶｅｒｓｅ－ＡＬＴ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"WOLF", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【出】：あなたの場にいるアシストルリグのレベルの合計１につき【エナチャージ１】をする。<br><br>【起】（ターン１）[緑][緑][無]：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム１）[緑(0)]：このターン、あなたのエナゾーンにあるカードは【マルチエナ】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-009.jpg", //SRC
		"運鳴　ノヴァ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ノヴァ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【自】：このルリグがアタックしたとき、あなたのトラッシュからカード１枚を対象とし、このルリグの下からカード１枚をルリグトラッシュに置いてもよい。そうした場合、それをデッキの一番上に置く。<br><br>【出】：あなたのデッキの上からカードを３枚見る。その中からカードを１枚までデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ゲーム１）[白(0)]：あなたのトラッシュから白のシグニ１枚を対象とし、それをデッキの一番上に置く。このターン終了時、カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-010.jpg", //SRC
		"ＶＯＧＵＥ３－ＥＸ　ムジカ", //NAME
		"L", //RARE
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
		"【自】（ターン１）：あなたのターンの間、あなたの他のルリグがグロウしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。<br><br>【自】（ターン１）：対戦相手のターンの間、あなたの他のルリグがグロウしたとき、あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。<br><br>【起】（ゲーム１）[無]：【アタックフェイズ】を持たずグロウコストが[無(0)]ではないあなたのアシストルリグ１体を対象とし、それをルリグデッキに戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-011.jpg", //SRC
		"みこみこ☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-012.jpg", //SRC
		"みこみこ☆いち", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-013.jpg", //SRC
		"みこみこ☆にっ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-014.jpg", //SRC
		"みこみこ☆さ～ん", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【自】：このルリグがアタックしたとき、対戦相手の手札が３枚以下である場合、カードを１枚引く。４枚以上ある場合、対戦相手は手札を１枚捨てる。<br><br>【出】：対戦相手が手札を１枚捨てないかぎり、あなたはカードを２枚引く。<br><br>【起】（ゲーム１）[青(0)]：対戦相手の手札を見て１枚選び、ゲームから除外する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-015.jpg", //SRC
		"掲げし者　タウィル＝トレ", //NAME
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
		"【自】：あなたのアタックフェイズ開始時、あなたの場に赤のシグニが３体以上ある場合、【エナチャージ１】をする。<br><br>【起】（ゲーム１）[赤(0)]：あなたのデッキの上からカードを６枚見て、その中からカード３枚を表向きの束にし、残りを裏向きの束にする。対戦相手はどちらかの束をトラッシュに置き、あなたは残りの束を手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-016.jpg", //SRC
		"奏叫の鍵主　ウムル＝トレ", //NAME
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
		"【自】：あなたのアタックフェイズ開始時、あなたのシグニ２体を対象とし、それらの場所を入れ替えてもよい。<br><br>【出】：対戦相手の手札を見て１枚選び、デッキの一番下に置く。<br><br>【起】（ゲーム１）[青(0)]：対戦相手のシグニゾーン１つに【ハスターリク】１つを置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-017.jpg", //SRC
		"エクストラップ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"エクス", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、ターン終了時まで、それらは「【自】：このシグニがアタックしたとき、[無][無][無]を支払わないかぎり、このシグニをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-018.jpg", //SRC
		"デウスサンダー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"デウス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：対戦相手のデッキの一番上のカードをトラッシュに置く。その後、あなたのトラッシュからこの方法でトラッシュに置かれたシグニと同じレベルのシグニ１枚を対象とし、それを場に出す。<br><br>【出】[黒][無][無][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-019.jpg", //SRC
		"マキナネビュラ", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"マキナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"デウス・エクス・マキナ", //TEAM
		"【出】：あなたのシグニ１体を対象とし、あなたのルリグトラッシュからルリグ１枚をそれの【ソウル】にする。<br>（【ソウル】はシグニに１枚まで付き、そのシグニが場を離れるとルリグトラッシュに置かれる）<br><br>【出】[無][無]：対戦相手のシグニ１体を対象とし、あなたのトラッシュからそれぞれ共通する色を持つカード１０枚をデッキに加えてシャッフルする。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-020.jpg", //SRC
		"ゆかゆか☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-021.jpg", //SRC
		"ゆかゆか☆ぽーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：あなたのデッキの上からカードを３枚見る。その中から[ガード]を持たないカードを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-022.jpg", //SRC
		"ゆかゆか☆ずばーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：手札を１枚捨てないかぎりアタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-023.jpg", //SRC
		"ゆかゆか☆ぶっぶー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、対戦相手が手札を３枚捨てないかぎり、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】：対戦相手のシグニ１体を対象とし、対戦相手が[無][無][無]を支払わないかぎり、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[白][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-024.jpg", //SRC
		"ゆかゆか☆ずばばー", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：このターン、対戦相手はシグニを２体までしか場に出すことができない。（すでに場に３体以上ある場合は２体になるようにシグニをトラッシュに置く）<br><br>【出】[白][無]：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-025.jpg", //SRC
		"ゆかゆか☆ぴーひゃら", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：あなたのデッキの上からカードを５枚見る。その中からシグニを２枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【出】：次のあなたのエナフェイズ終了時まで、あなたのセンタールリグのリミットを＋２する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-026.jpg", //SRC
		"まほまほ☆ぜろ", //NAME
		"L", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-027.jpg", //SRC
		"まほまほ☆じゃじゃーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-028.jpg", //SRC
		"まほまほ☆ずががーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、対戦相手が手札を２枚捨てないかぎり、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-029.jpg", //SRC
		"まほまほ☆どがーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】[無][無][無]：あなたのトラッシュから[ガード]を持たないシグニを２枚まで対象とし、それらを手札に加える。<br><br>【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーをあなたの手札１枚につき－3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-030.jpg", //SRC
		"まほまほ☆ずどどーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のデッキの上からカードを４枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-031.jpg", //SRC
		"まほまほ☆べーん", //NAME
		"L", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×５", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：このターン、対戦相手はパワーが10000以下のシグニでアタックできない。<br><br>【出】手札を３枚まで捨てる：この方法で捨てたカードの枚数と同じ数の対戦相手のシグニを対象とし、ターン終了時まで、それらのパワーをそれぞれ－5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-032.jpg", //SRC
		"大装　ゲイヴォルグ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのセンタールリグは「【自】（ターン１）：このルリグがアタックしたとき、対戦相手のシグニ１体を対象とし、それをトラッシュに置く。」を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのアップ状態の白のシグニ１体をダウンしてもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-033.jpg", //SRC
		"幻怪姫　タマモゼン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライズ】あなたのシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：[無]を支払わないかぎりアタックできない。」を得る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-034.jpg", //SRC
		"コードアクセル　ヒャッハー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニの下にカードがあるかぎり、このシグニのパワーは＋5000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー8000以下のシグニ１体を対象とし、[赤][赤]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。<br><br>【出】：あなたのレベル３のシグニ１体を対象とし、それをこのシグニの下に置いてもよい。（あなたの場にあるシグニを対象とする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-035.jpg", //SRC
		"羅星姫　ドラコ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの上からカードを５枚公開し、それらのカードをシャッフルしてデッキの一番下に置く。その後、[無][無][無][無][無][無]からこの方法で公開されたレベル１のシグニ１枚につき[無]を減らしたエナコストを支払ってもよい。そうした場合、対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-036.jpg", //SRC
		"羅婚石　ダイヤブライド", //NAME
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
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたの赤のシグニ１体が対戦相手の、能力か効果の対象になったとき、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【出】手札を１枚捨てる：あなたのデッキの上からカードを２枚見る。その中からカード１枚を手札に加え、残りをトラッシュに置く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-037.jpg", //SRC
		"大罠　ハーメルン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、対戦相手は手札を２枚捨ててもよい。そうした場合、このアタックを無効にする。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニの正面のシグニ１体を対象とし、[青][青]を支払ってもよい。そうした場合、それを裏向きにする。このターン終了時、この方法で裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。同じ場所にシグニがある場合、トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-038.jpg", //SRC
		"羅原姫　Ｈ２Ｏ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"13000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライズ】あなたの＜原子＞のシグニ１体の上に置く<br><br>【常】：対戦相手のターンの間、下にカードが１枚以上あるこのシグニが対戦相手の効果によって場を離れる場合、代わりにこのシグニの下からすべてのカードをトラッシュに置いてもよい。<br><br>【自】：このシグニがアタックしたとき、カードを１枚引くか、対戦相手は手札を１枚捨てる。<br><br>【ライフバースト】：カードを２枚引く。あなたの手札から＜原子＞のシグニを１枚まで場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-039.jpg", //SRC
		"コードオーダー　ハニートアイス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【チーム】＜きゅるきゅるーん☆＞<br>【チーム自】：対戦相手のターン開始時、対戦相手の手札が２枚以上ある場合、そのターンのドローフェイズの間に対戦相手はカードを合計１枚までしか引けない。<br><br>【自】：あなたのアタックフェイズ開始時、各プレイヤーはカードを１枚引く。あなたは対戦相手の手札を見て[ガード]を持たないカード１枚を選び、デッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-040.jpg", //SRC
		"翠天姫　ガイア", //NAME
		"SR", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜天使＞のシグニが３体以上ある場合、【エナチャージ１】をする。<br><br>【自】：あなたのターン終了時、あなたのエナゾーンから＜天使＞のシグニを１枚まで対象とし、それを手札に加える。<br><br>【自】：あなたのターン終了時、あなたのトラッシュから＜天使＞のシグニ１枚を対象とし、[無][無]を支払ってもよい。そうした場合、それを場に出す。それの【出】能力は発動しない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-041.jpg", //SRC
		"轟砲　ティーガー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋1000され、このシグニは【ランサー】と【シャドウ（パワー10000以下のシグニ）】を得る。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ１体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-042.jpg", //SRC
		"羅星姫　イクリプス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを３枚トラッシュに置く。その後、この方法でトラッシュに置かれたすべてのカードがレベル１のシグニの場合、対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－10000する。<br><br>【自】：このカードがデッキからトラッシュに置かれたとき、あなたのトラッシュから[ガード]を持たないレベル１のシグニ１枚を対象とし、[無]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-043.jpg", //SRC
		"コードハート　Ｍデム", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、あなたのトラッシュにあるスペルを２枚までゲームから除外する。ターン終了時まで、それのパワーをこの方法でゲームから除外したスペル１枚につき－3000する。<br><br>【自】（ターン１）：あなたがスペルを使用したとき、あなたか対戦相手のデッキの上からカードを２枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-044.jpg", //SRC
		"聖将　トキユキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、あなたのセンタールリグが白であるかぎり、このシグニのパワーは＋5000される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-045.jpg", //SRC
		"小装　ヤエコリ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの場に《大装 ヤエキリ》があるかぎり、このシグニのパワーは＋5000され、このシグニは「【自】：各アタックフェイズ開始時、対戦相手のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。」を得る。<br><br>【出】：あなたの白のシグニ１体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋2000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-046.jpg", //SRC
		"コードアート　Ｈヤケマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[白][無] 手札からスペルを１枚捨てる：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-047.jpg", //SRC
		"聖天　クレイオス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのトラッシュに＜天使＞のシグニが５枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：あなたのトラッシュに＜天使＞のシグニが１０枚以上あるかぎり、このシグニは「【自】：このシグニがアタックしたとき、カードを１枚引く。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-048.jpg", //SRC
		"羅星　リンクス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-049.jpg", //SRC
		"コードメイズ　ルヴダビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニのパワーはあなたの場にいる白のルリグ１体につき＋2000される。<br><br>【ライフバースト】：あなたの場に白のルリグが２体以上いる場合、対戦相手のパワー10000以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-050.jpg", //SRC
		"コードアンチ　ビッグフット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[白]：あなたのデッキの上からカードを３枚を見る。その中から白のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【常】：このカードの上にあるシグニのパワーを＋1000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-051.jpg", //SRC
		"聖英　サンドリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのレベルの合計が偶数の場合、対戦相手のシグニ１体を対象とし、[白][白][無]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-052.jpg", //SRC
		"ゲット・ヴォルグ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"以下の２つを行う。<br>①あなたのデッキの上からカードを５枚見る。その中から白のシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br>②ターン終了時まで、あなたのセンタールリグは「【自】：このルリグがアタックしたとき、あなたの場に《大装 ゲイヴォルグ》がある場合、対戦相手のシグニ１体を対象とし、それをトラッシュに置く。」を得る。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-053.jpg", //SRC
		"紅天　ヘーメラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[赤]：あなたの場に＜天使＞のシグニが２体ある場合、対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。あなたの場に＜天使＞のシグニが３体以上ある場合、代わりに対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-054.jpg", //SRC
		"紅将　ヘイハチロウ", //NAME
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
		"1", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ１体をバニッシュしたとき、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-055.jpg", //SRC
		"幻獣　バーファ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの場に《幻獣神 バッファロー》があるかぎり、このシグニのパワーは＋7000される。<br><br>【出】：ターン終了時まで、このシグニのパワーをあなたの場にいるルリグのレベルの合計１につき＋1000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-056.jpg", //SRC
		"紅将　ナベノツナ", //NAME
		"C", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、あなたの場に赤のシグニが３種類以上あり対戦相手のエナゾーンにカードが２枚以上ある場合、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-057.jpg", //SRC
		"紅魔　デカラビア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-058.jpg", //SRC
		"羅石　ジャスパー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のターンの間、このシグニがバニッシュされたとき、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-059.jpg", //SRC
		"コードアート　Ｒンニング", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードが２枚以上ある場合、手札から赤のスペルを１枚捨ててもよい。そうした場合、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュから赤のスペル１枚を対象とし、[赤]を支払ってもよい。そうした場合、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-060.jpg", //SRC
		"世紀末の爆走", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたの赤のシグニ１体を対象とし、それの下にカードが無い場合、このカードをそれの下に置く。<br><br>【常】：このカードの上にある赤のシグニは「【自】：あなたのアタックフェイズ開始時、【エナチャージ１】をする。」を得る。<br><br>【常】：このカードの上にある《コードアクセル ヒャッハー》のパワーを＋2000する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-061.jpg", //SRC
		"蒼魔　マノミン", //NAME
		"C", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、手札を１枚捨ててもよい。そうした場合、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-062.jpg", //SRC
		"羅石　ベニトアイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：ドローフェイズ以外であなたがカードを１枚引いたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-063.jpg", //SRC
		"羅原　ＣＺ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、対戦相手はカードを１枚引き、あなたは対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【出】[青]：あなたの場に《羅原姫 ＺｒＯ２》がある場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－4000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-064.jpg", //SRC
		"羅石　アウイナイト", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場に青のシグニが３種類以上ある場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-065.jpg", //SRC
		"羅植　ムスカリ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を２枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-066.jpg", //SRC
		"幻水　アナハゼ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が７枚以上ある場合、対戦相手のレベル２以下のシグニ１体を対象とし、手札から青のカードを２枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-067.jpg", //SRC
		"羅原　Ｈ２", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがライズされたとき、対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【出】[青]：カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-068.jpg", //SRC
		"ＨＡＭＥＬＮ　ＳＴＥＰ", //NAME
		"R", //RARE
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
		"カードを２枚引き、あなたの手札から《大罠 ハーメルン》を１枚まで場に出す。その後、あなたの《大罠 ハーメルン》１体を対象とし、ターン終了時まで、それは「【常】：このシグニのアタックはこのシグニの効果によって無効にされない。」を得る。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-069.jpg", //SRC
		"翠将　リトルジョン", //NAME
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
		"0", //LB
		"", //TEAM
		"【常】：あなたの場かエナゾーンに《翠将姫 ロビンフッド》があるかぎり、このシグニのパワーは＋5000される。<br><br>【常】：あなたの《翠将姫 ロビンフッド》は「【常】：このシグニがアタックする場合、代わりにあなたのシグニを２体まで裏向きにしてアタックし、このターン終了時、これによって裏向きにしたシグニを、同じ場所にシグニがない場合、表向きにする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-070.jpg", //SRC
		"翠将　ウィリアムテル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバトルによって対戦相手のシグニ１体をバニッシュしたとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-071.jpg", //SRC
		"コードメイズ　トチョー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】：対戦相手のシグニが１体以上他のシグニゾーンに移動したとき、あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋2000する。<br><br>【出】：対戦相手のシグニ２体を対象とし、それらの場所を入れ替える。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-072.jpg", //SRC
		"翠魔　オルトロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、【エナチャージ１】をする。<br><br>【出】：対戦相手は【エナチャージ１】をしてもよい。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-073.jpg", //SRC
		"ツヴァイ＝イラクサ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のパワー5000以上のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-074.jpg", //SRC
		"羅植　トケイソウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンからあなたのセンタールリグと共通する色を持つシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-075.jpg", //SRC
		"幻水　ポリプテルス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】エクシード３（あなたのルリグの下からカードを合計３枚ルリグトラッシュに置く）：あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-076.jpg", //SRC
		"幻獣　カメレオン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたの場にそれぞれ共通する色を持つルリグが２体いるかぎり、このシグニのパワーは＋2000される。３体いるかぎり、代わりにこのシグニのパワーは＋3000される。<br><br>【自】：このシグニがアタックしたとき、あなたの場にパワー15000以上のシグニがある場合、【エナチャージ１】をする。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-077.jpg", //SRC
		"照地", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"以下の２つから１つを選ぶ。<br>①対戦相手のパワー8000以上のシグニ１体を対象とし、あなたのエナゾーンから＜天使＞のシグニ１枚をトラッシュに置き手札から＜天使＞のシグニを１枚捨てる。そうした場合、それをバニッシュする。<br>②あなたのエナゾーンから《翠天姫 ガイア》１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のレベル２以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-078.jpg", //SRC
		"凶天　ワルキューレ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたの《凶天姫 ヴァルキリー》１体がアタックしたとき、対戦相手のシグニ１体を対象とし、手札から＜天使＞のシグニを好きな枚数捨てる。ターン終了時まで、それのパワーをこの方法で捨てたカード１枚につき－4000する。<br><br>【起】[黒][ダウン]：あなたのトラッシュから黒の＜天使＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-079.jpg", //SRC
		"凶魔　マルファス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、手札から＜悪魔＞のシグニを２枚捨ててもよい。そうした場合、このシグニをエナゾーンからダウン状態で場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-080.jpg", //SRC
		"羅爆星　タイマーボム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無][無]：あなたのトラッシュから＜宇宙＞のシグニ１枚を対象とし、それを手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-081.jpg", //SRC
		"凶将　カエサル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[黒]：あなたのトラッシュにカードが７枚以上ある場合、ターン終了時まで、このシグニは「【常】：このシグニは正面のシグニのパワーが5000以下であるかぎり、【アサシン】を得る。」を得る。<br>（【アサシン】を持つシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-082.jpg", //SRC
		"凶魔　テューポーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋7000される。<br><br>【出】エクシード３（あなたのルリグの下からカードを合計３枚ルリグトラッシュに置く）：このシグニは覚醒する。<br>（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-083.jpg", //SRC
		"中装　バックラー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：対戦相手のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－15000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-084.jpg", //SRC
		"羅原　ＢＰ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】エナゾーンから＜原子＞のシグニ１枚をトラッシュに置き、手札から＜原子＞のシグニを１枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-085.jpg", //SRC
		"凶天　タルタロス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、あなたのトラッシュから[ガード]を持たないシグニ３枚を対象とし、それらをデッキに加えてシャッフルする。<br><br>【起】[ダウン]：あなたのデッキの上からカードを５枚トラッシュに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-086.jpg", //SRC
		"ムーン・バイツ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのトラッシュから＜宇宙＞のシグニ１枚を対象とし、それを手札に加える。その後、それが《羅星姫 イクリプス》の場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【常】：このカードがデッキかトラッシュにあるかぎり、あなたの効果１つによってこのカードを参照する場合、レベル１のシグニとして扱ってもよい。<br><br>【ライフバースト】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P05-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-087.jpg", //SRC
		"聖凶天　マスティマ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
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
		"WXDi-P05-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-088.jpg", //SRC
		"聖凶天　ウリエ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
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
		"WXDi-P05-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-089.jpg", //SRC
		"聖蒼将　ヨリシゲ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
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
		"WXDi-P05-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-090.jpg", //SRC
		"聖蒼将　トウタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
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
		"WXDi-P05-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-091.jpg", //SRC
		"羅原　Ｓｅ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
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
		"WXDi-P05-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-092.jpg", //SRC
		"羅原　Ｉ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
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
		"WXDi-P05-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P05-093.jpg", //SRC
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
		],
	[
		"WXDi-D08-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-001.jpg", //SRC
		"新月の巫女　タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-002.jpg", //SRC
		"三日月の巫女　タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-003.jpg", //SRC
		"半月の巫女　タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-004.jpg", //SRC
		"奏月の巫女　タマヨリヒメ", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】（ターン１）：このルリグがアタックしたとき、あなたのアップ状態のシグニ２体をダウンし[白][無]を支払ってもよい。そうした場合、このルリグをアップし、ターン終了時まで、このルリグは能力を失う。<br><br>【出】：あなたのデッキの上からカードを４枚見る。その中からカードを２枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【起】（ゲーム１）[白(0)]：ターン終了時まで、このルリグは「【自】（ターン１）：このルリグがアタックしたとき、あなたのすべてのシグニをアップする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-005.jpg", //SRC
		"花代・零", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-006.jpg", //SRC
		"花代・椿", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。カードを１枚引き、手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-007.jpg", //SRC
		"花代・蘭", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無]：対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-008.jpg", //SRC
		"闘娘　緑姫", //NAME
		"ST", //RARE
		"ルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-009.jpg", //SRC
		"緑姫・芽生", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：【エナチャージ２】（あなたのデッキの上からカードを２枚エナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-010.jpg", //SRC
		"緑姫・増強", //NAME
		"ST", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[無][無]：ターン終了時まで、あなたのすべてのシグニのパワーを＋5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-011.jpg", //SRC
		"GO TO the TOP!", //NAME
		"ST", //RARE
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
		"WXDi-D08-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-012.jpg", //SRC
		"burning curiosity", //NAME
		"ST", //RARE
		"ピース", //TYPE
		"", //CLASS
		"無", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このピースを使用する際、使用コストとして追加でエクシード４を支払ってもよい。（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）<br><br>対戦相手のシグニ１体を対象とし、それをバニッシュする。追加でエクシード４を支払っていた場合、代わりにそれをゲームから除外する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-013.jpg", //SRC
		"聖天　アグライア", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、手札から＜天使＞のシグニを２枚捨ててもよい。そうした場合、カードを３枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-014.jpg", //SRC
		"聖天　ハニエル", //NAME
		"ST", //RARE
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
		"WXDi-D08-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-015.jpg", //SRC
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
		"WXDi-D08-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-016.jpg", //SRC
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
		"WXDi-D08-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-017.jpg", //SRC
		"中装　ボウ", //NAME
		"ST", //RARE
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
		"WXDi-D08-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-018.jpg", //SRC
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
		"WXDi-D08-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-019.jpg", //SRC
		"聖天　アークアテナ", //NAME
		"ST", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場に＜アーム＞のシグニがある場合、このシグニをアップする。<br><br>【起】[白][ダウン]：対戦相手のパワー8000以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-020.jpg", //SRC
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
		"WXDi-D08-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-021.jpg", //SRC
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
		"WXDi-D08-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-022.jpg", //SRC
		"ゲット・ビッグバイブル", //NAME
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
		"あなたのデッキの上からカードを７枚見る。その中からシグニを２枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-D08-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-D08-023.jpg", //SRC
		"聖天姫　アークゲイン", //NAME
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
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニは【シャドウ】を得る。（このシグニは対戦相手によって対象にされない）<br><br>【出】[白]：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-001.jpg", //SRC
		"一覇一絡", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン１）：このルリグがアタックしたとき、対戦相手のライフクロス１枚をクラッシュする。対戦相手がそのカードのライフバーストを使用することを選んだ場合、[無][無]を支払ってもよい。そうした場合、そのカードのライフバーストは発動しない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-002.jpg", //SRC
		"ピーピング・フューチャー", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン１）：このルリグがアタックしたとき、対戦相手の手札を見て１枚選び、捨てさせる。次の対戦相手のアップフェイズに、対戦相手が[無][無][無]を支払わないかぎり、対戦相手のセンタールリグはアップしない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-003.jpg", //SRC
		"マイアズマ・ラビリンス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>以下の４つからあなたのセンタールリグのレベル１につき１つまで選ぶ。<br>①対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。<br>②あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。<br>③あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。<br>④各プレイヤーは自分のデッキの上からカードを７枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-004.jpg", //SRC
		"イノセント・ワンピース", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード４（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-005.jpg", //SRC
		"グリーン・ビッグス", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード４（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）：あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋10000する。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-006.jpg", //SRC
		"Garden of Singularity", //NAME
		"LR", //RARE
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
		"カードを１枚引く。このゲームの間、あなたは以下の能力を得る。<br>『【常】：あなたが【ガード】する際、[ガード]を持つカードを１枚捨てる代わりに手札を３枚捨ててもよい。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-007.jpg", //SRC
		"閃光へ飛翔　レイ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"レイ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"No Limit", //TEAM
		"【自】：あなたのアタックフェイズ開始時、このターンにあなたが効果によってカードを２枚以上引いていた場合、青のシグニ１体を対象とし、手札を３枚捨ててもよい。そうした場合、ターン終了時まで、それは【アサシン】を得る。<br><br>【出】：カードを１枚引き【エナチャージ１】をする。<br><br>【起】（ゲーム１）[青(0)]：ターン終了時まで、このルリグは「【自】（ターン２）：対戦相手のライフクロス１枚がクラッシュされたとき、カードを１枚引くか、対戦相手は手札を１枚捨てる。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-008.jpg", //SRC
		"DJ.LOVIT 3rdVerse-ALT", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"LOVIT", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"Card Jockey", //TEAM
		"【自】：あなたのターン終了時、対戦相手のエナゾーンにカードが３枚以上ある場合、対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【出】：対戦相手は自分のエナゾーンからカード１枚を選びトラッシュに置く。<br><br>【起】（ゲーム１）[赤(0)]：あなたの赤のシグニ１体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-009.jpg", //SRC
		"キセキオコス　バン", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"バン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"うちゅうのはじまり", //TEAM
		"【自】：あなたのアタックフェイズ開始時、このルリグの下からカード１枚をルリグトラッシュに置いてもよい。そうした場合、【エナチャージ１】をする。<br><br>【出】：このターン、あなたの中央のシグニゾーンにあるシグニは【ランサー】を得る。<br><br>【起】（ゲーム１）[緑][緑]：あなたの緑のシグニ１体を対象とし、ターン終了時まで、それは【Ｓランサー】を得る。（【Ｓランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスがある場合はそれを１枚クラッシュする。無い場合は対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-010.jpg", //SRC
		"VOGUE3-EX サンガ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"サンガ", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"DIAGRAM", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニが持つ色が合計３種類以上ある場合、以下の２つから１つを選ぶ。①あなたのエナゾーンからカード１枚を対象とし、それを手札に加える。②【エナチャージ１】<br><br>【出】：【エナチャージ２】<br><br>【起】（ゲーム１）[緑(0)]：対戦相手のパワー12000以上のシグニ１体を対象とし、それをバニッシュする。あなたのエナゾーンからカード１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-011.jpg", //SRC
		"炎唱火　遊月・参", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンからカード１枚を対象とし、それをトラッシュに置いてもよい。そうした場合、対戦相手は【エナチャージ１】をしてもよい。<br><br>【出】：対戦相手は自分のシグニ１体を選びバニッシュする。<br><br>【起】（ゲーム１）[赤(0)]：【エナチャージ２】をする。その後、対戦相手のエナゾーンにカードが４枚以上ある場合、対戦相手のエナゾーンからカードを２枚まで対象とし、それらをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-012.jpg", //SRC
		"コード・ピルルク・xi", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの手札が対戦相手より３枚以上多い場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。６枚以上多い場合、代わりにターン終了時まで、それのパワーを－6000する。<br><br>【出】：カードを２枚引く。<br><br>【起】（ゲーム１）[青(0)]：対戦相手のセンタールリグのレベル以下の数字１つを宣言する。対戦相手の手札を見て、[ガード]を持たず宣言した数字と同じレベルを持つすべてのシグニを捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-013.jpg", //SRC
		"狂騒の閻魔　ウリス", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのトラッシュから黒のシグニを２枚まで対象とし、それらを手札に加える。<br><br>【起】（ターン１）[黒(0)]：１～３の数字１つを宣言する。あなたのデッキの上からカードを宣言した数字に等しい枚数トラッシュに置く。<br><br>【起】（ゲーム１）手札を２枚捨てる：ターン終了時まで、このルリグは「【自】（ターン１）：このルリグがアタックしたとき、あなたのトラッシュから【ライフバースト】を持たないカード１枚を対象とし、それをライフクロスに加える。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-014.jpg", //SRC
		"遊月・零", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-015.jpg", //SRC
		"炎唱　遊月・壱", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-016.jpg", //SRC
		"炎唱　遊月・弐", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ユヅキ", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-017.jpg", //SRC
		"コード・ピルルク", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-018.jpg", //SRC
		"コード・ピルルク・Ｋ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-019.jpg", //SRC
		"コード・ピルルク・Ｍ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-020.jpg", //SRC
		"閻魔　ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-021.jpg", //SRC
		"灼熱の閻魔　ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-022.jpg", //SRC
		"衆合の閻魔　ウリス", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ウリス", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-023.jpg", //SRC
		"ゆかゆか☆どじゃーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】：このターン終了時、対戦相手が[無]を支払うか手札を１枚捨てないかぎり、このカードをルリグデッキに戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-024.jpg", //SRC
		"まほまほ☆ずーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[黒][無][無][無]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－20000する。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-025.jpg", //SRC
		"花代・桜", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：【エナチャージ１】", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-026.jpg", //SRC
		"花代・柘榴", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】手札を４枚捨てる：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-027.jpg", //SRC
		"花代・竜胆", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"花代", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：カードを２枚引くか【エナチャージ２】をする。<br><br>【出】：あなたのレベル３のシグニ１体を対象とし、ターン終了時まで、それは【ダブルクラッシュ】を得る。<br>（【ダブルクラッシュ】を持つシグニがアタックによってダメージを与えた場合ライフクロスを１枚ではなく２枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-028.jpg", //SRC
		"緑姫・雨槍", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのレベル２以下のシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-029.jpg", //SRC
		"緑姫・半月", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[無]：あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-030.jpg", //SRC
		"緑姫・修復", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"緑子", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。<br><br>【出】[緑][無][無][無]：あなたのトラッシュから【ライフバースト】を持たないカード１枚を対象とし、それをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-031.jpg", //SRC
		"コードハート　リメンバ//メモリア", //NAME
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
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、対戦相手の、センタールリグとシグニの【起】能力の使用コストは[無]増える。<br><br>【常】：このシグニがダウン状態であるかぎり、このシグニのパワーは＋3000され、対戦相手は追加で[無]を支払わないかぎり【ガード】ができない。<br><br>【起】[ダウン]：あなたのライフクロスの一番上を見る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-032.jpg", //SRC
		"コードアンシエンツ　オシリス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、レベルがあなたの場にいる白のルリグの数以下の対戦相手のシグニ１体を対象とし、[白][白]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【起】[白]：次の対戦相手のターン終了時まで、このシグニは「【常】：対戦相手のターンの間、【シャドウ】を得る。」を得る。<br><br>【起】[白][白][無][無][無] トラッシュにあるこのカードをゲームから除外する：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-033.jpg", //SRC
		"幻水姫　シィラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時。あなたと対戦相手のライフクロスの枚数が同じ場合、カードを１枚引く。<br><br>【自】（ターン１）：対戦相手のターンの間、対戦相手のシグニ１体がアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【出】[白]：あなたのデッキの上からカードを３枚見る。その中からカードを１枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-034.jpg", //SRC
		"紅将姫　クーフーリン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライズ】あなたのトラッシュにある＜武勇＞のシグニ２枚を下に重ねて場に出す（空いているシグニゾーンに出す）<br><br>【常】：このシグニがバニッシュされる場合、代わりに「アップ状態のこのシグニをダウンし、このシグニの下からカード１枚とあなたのエナゾーンからカード１枚をトラッシュに置く。」をしてもよい。<br><br>【常】：あなたの中央のシグニゾーンにあるシグニのパワーを＋3000する。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-035.jpg", //SRC
		"紅魔姫　シヴァ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのメインフェイズ以外でこのシグニが場を離れたとき、カードを１枚引く。<br><br>【出】：手札をすべて捨てる。その後、この方法でカードを２枚捨てた場合、対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。３枚以上捨てた場合、代わりに対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-036.jpg", //SRC
		"羅輝石　ブルーアダマス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上を公開し、カードを１枚引く。その後、この効果で公開したカードが＜宝石＞のシグニの場合、[青][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-037.jpg", //SRC
		"幻水姫　エルドラ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニのパワーはあなたの手札２枚につき＋1000される。<br><br>【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを３枚見る。その中から【ライフバースト】を持つカードを好きな枚数公開し手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-038.jpg", //SRC
		"翠美姫　アン//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのエナゾーンから効果によってカード１枚が他の領域に移動したとき、【エナチャージ１】をする。<br><br>【出】[白]：次の対戦相手のターン終了時まで、このシグニのパワーを＋2000し、このシグニは【シャドウ（レベル３以上のシグニ）】を得る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-039.jpg", //SRC
		"羅植姫　ラベンダー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのメインフェイズ以外でこのシグニが場を離れたとき、あなたのトラッシュからこのシグニの下にあったシグニ１枚を対象とし、[無][無]を支払ってもよい。[無][無]を支払った場合、それをダウン状態で場に出す。それの【出】能力は発動しない。[無][無]を支払わなかった場合、それを手札に加える。<br><br>【出】：あなたのエナゾーンから[ガード]を持たないシグニ１枚を対象とし、それをこのシグニの下に置く。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-040.jpg", //SRC
		"凶天姫　タマ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにカードが１０枚以上あるかぎり、このシグニのパワーは＋3000され、このシグニは【シャドウ（レベル２以下のシグニ）】を得る。<br><br>【常】：あなたの、場とエナゾーンにあるシグニは追加で黒を得る。<br><br>【自】（ターン１）：あなたのメインフェイズ以外であなたの黒のシグニ１体が場を離れたとき、対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-041.jpg", //SRC
		"凶魔姫　ルシファル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーをあなたの場にいる黒のルリグ１体につき－2000する。この効果によってそれのパワーが０以下になった場合、対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【起】（ターン１）手札を２枚捨てる：あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-042.jpg", //SRC
		"コードアンシエンツ　イオナ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニの正面のシグニは可能ならばアタックしなければならない。（他のシグニよりも先にアタックしなければならない）<br><br>【自】：このシグニがアタックしたとき、表記されているパワーと異なるパワーの対戦相手のシグニ１体を対象とし、[黒][黒]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【出】：このシグニがトラッシュから場に出た場合、対戦相手のシグニ１枚を対象とし、ターン終了時まで、それのパワーを－1000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-043.jpg", //SRC
		"聖天　マルティエル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：対戦相手のトラッシュからカード１枚を対象とし、それをデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-044.jpg", //SRC
		"羅星　サシェ//メモリア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】手札から＜宇宙＞のシグニを１枚捨てる：あなたのデッキの上からカードを５枚見る。その中から＜宇宙＞のシグニ１枚を公開して手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-045.jpg", //SRC
		"コードメイズ　ユキ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：以下の２つから１つを選ぶ。<br>①対戦相手のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。<br>②対戦相手のシグニ１体を対象とし、それを他のシグニゾーン１つに配置する。（すでにシグニのあるシグニゾーンには配置できない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-046.jpg", //SRC
		"聖将　ラウンド", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのライフクロスが２枚以下であるかぎり、このシグニのパワーは＋4000される。<br><br>【常】：あなたのライフクロスが０枚であるかぎり、このシグニは「【常】：対戦相手のターンの間、対戦相手の効果によってバニッシュされない。」を得る。（シグニとのバトルやパワーが０以下になった場合はバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-047.jpg", //SRC
		"聖魔　サキュ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、このシグニを場からトラッシュに置いてもよい。そうした場合、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-048.jpg", //SRC
		"聖魔　オセ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"1", //TIMING
		"", //LB
		"", //TEAM
		"【ライフバースト】：あなたのデッキの上からカードを５枚見る。その中からカードを３枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-049.jpg", //SRC
		"中装　ミカガミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのルリグ１体がアタックしたとき、アップ状態のこのシグニをダウンしてもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-050.jpg", //SRC
		"ゲット・リメンバ―", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"", //COST
		"", //LIMIT
		"", //POWER
		"《白》×１", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"以下の２つを行う。<br>①あなたのデッキの上からカードを３枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br>②カードを１枚引く。ターン終了時まで、あなたの場に《コードハート リメンバ//メモリア》がある場合、代わりにカードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-051.jpg", //SRC
		"紅将　イモコ", //NAME
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
		"【常】：このシグニのパワーは他のシグニ１体につき＋1000される。（対戦相手の場にあるシグニも参照する）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-052.jpg", //SRC
		"紅魔　アリトン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、対戦相手のパワー5000以下のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-053.jpg", //SRC
		"小装　ボーニャ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】[無][無][無]：あなたのデッキの上からカードを５枚見る。その中から赤のシグニを１枚までと、白か青か緑か黒のシグニを１枚まで公開し手札に加え、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-054.jpg", //SRC
		"コードアート　Dンドウバ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニが《コードアート ララ・ルー//メモリア》にライズされたとき、対戦相手のパワー5000以下のシグニ１体を対象とし、[無]を支払ってもよい。そうした場合、それをバニッシュする。<br><br>【常】：このカードの上にある赤のシグニは「【自】：このシグニがバニッシュされたとき、このシグニをエナゾーンから手札に加えてもよい。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-055.jpg", //SRC
		"紅天　アフロディテ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のパワー12000以下のシグニ１体を対象とし、あなたの手札から＜天使＞のシグニを６枚公開し[赤][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-056.jpg", //SRC
		"紅将　トリスタン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのデッキの上からカードを５枚見る。その中からカードを３枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-057.jpg", //SRC
		"コードアート　ララ・ルー//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライズ】あなたのレベル１のシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【常】：このシグニは対戦相手の効果によって新たに能力を得られない。<br><br>【自】：このシグニがアタックしたとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-058.jpg", //SRC
		"幻焼獣　ベイア", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、このシグニのパワーが8000以上の場合、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-059.jpg", //SRC
		"電動馬の発掘", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"以下の２つから１つを選ぶ。<br>①[ライズ]を持つあなたのシグニの下にある赤のシグニ１枚を対象とし、それを手札に加える。<br>②[ライズ]を持つあなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋3000し、それは「【自】：このシグニがアタックしたとき、自身のパワー以下の対戦相手のシグニ１体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-060.jpg", //SRC
		"蒼天　サニエル", //NAME
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
		"【自】：あなたのターン終了時、あなたのトラッシュに＜天使＞のシグニが１０枚以上ある場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-061.jpg", //SRC
		"蒼将　ソウイ//メモリア", //NAME
		"R", //RARE
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
		"【出】手札を２枚まで捨てる：この方法で捨てたカード１枚につきカードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-062.jpg", //SRC
		"蒼美　ふたせ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、あなたの手札の枚数が対戦相手の手札の枚数以上であるかぎり、このシグニは【シャドウ（レベル２以下のシグニ）】を得る。（このシグニは対戦相手のレベル２以下のシグニによって対象にされない）<br><br>【ライフバースト】：対戦相手のルリグかシグニ１体を対象とする。このターン、それがアタックしたとき、対戦相手が手札を３枚捨てないかぎり、そのアタックを無効にする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-063.jpg", //SRC
		"蒼魔　ジャックフロストC", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】エクシード３（あなたのルリグの下からカードを合計３枚ルリグトラッシュに置く）：対戦相手のすべてのシグニを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-064.jpg", //SRC
		"羅星　デルフィヌス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのデッキの一番上を公開する。そのカードがレベル１のシグニの場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-065.jpg", //SRC
		"羅石　アイオライト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのデッキの上からカードを５枚見る。その中からカードを３枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-066.jpg", //SRC
		"羅原　ミルルン//メモリア", //NAME
		"R", //RARE
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
		"【出】：このターン、あなたが次にスペルを使用する場合、その使用コストに含まれるエナコスト１つを選んで代わりに[無]として支払ってもよい。（例えば[青][青][赤]の場合、[青][青][無]か[青][赤][無]として支払える）<br><br>【起】（ターン１）[無]：対戦相手のトラッシュからスペル１枚を対象とし、それを使用する。このターン、それがチェックゾーンから別の領域に移動される場合、代わりにゲームから除外される。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-067.jpg", //SRC
		"羅植　オカトトキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのエナゾーンにカードが６枚以上あるかぎり、このシグニのパワーは＋5000される。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンにあるカードが５枚以下の場合、各プレイヤーは【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-068.jpg", //SRC
		"DISCOVERY", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのデッキの上からカードを５枚見る。その中から《幻水姫 エルドラ//メモリア》を１枚まで公開し手札に加え、カード１枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：対戦相手のシグニを２体まで対象とし、それらをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-069.jpg", //SRC
		"翠魔　オロバス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋3000する。<br><br>【出】：あなたのエナゾーンからカード１枚を選びトラッシュに置く。<br>（コストのない【出】能力は発動しないことを選べない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-070.jpg", //SRC
		"壱ノ公遊　ウンテイ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにこのシグニがエナゾーンから場に出ていた場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-071.jpg", //SRC
		"羅星　カプリコーン", //NAME
		"C", //RARE
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
		"【出】：あなたのデッキの一番上を公開し、そのカードをデッキの一番下に置いてもよい。この効果で公開されたカードがレベル１のシグニの場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋4000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-072.jpg", //SRC
		"幻獣　ポニー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのパワー8000以上のシグニが対戦相手のシグニ１体をバニッシュしたとき、[無]を支払ってもよい。そうした場合、カードを１枚引く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-073.jpg", //SRC
		"翠天　スクナビコナ", //NAME
		"R", //RARE
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
		"【自】：このシグニがアタックしたとき、以下の２つから１つを選ぶ。<br>①あなたのトラッシュから＜天使＞のシグニ１枚を対象とし、それをエナゾーンに置く。<br>②あなたのエナゾーンから＜天使＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-074.jpg", //SRC
		"翠天　ハヌマーン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのデッキの上からカードを５枚見る。その中からカードを３枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-075.jpg", //SRC
		"弍ノ遊　アイヤイ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：あなたのエナゾーンからシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-076.jpg", //SRC
		"幻水　カミツキガメ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、あなたの手札からカード１枚をエナゾーンに置いてもよい。<br><br>【出】[無][無][無]：カードを２枚引く。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-077.jpg", //SRC
		"遭遇", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"あなたの緑のシグニ１体を対象とし、次の対戦相手のターン終了時まで、それは「【自】：あなたのメインフェイズ以外でこのシグニがバニッシュされたとき、【エナチャージ２】をする。」を得る。<br><br>【起】[緑(0)]：あなたのエナゾーンからこのカードを手札に加える。この能力はあなたの場に＜美巧＞のシグニがある場合にしか使用できない。（この能力はこのスペルがエナゾーンにある場合にしか使用できない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-078.jpg", //SRC
		"凶将　カラサワ", //NAME
		"C", //RARE
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
		"【自】（ターン１）：あなたのターンの間、あなたがエクシードのコストを支払ったとき、対戦相手のシグニ１体を対象とし、[黒]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－5000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-079.jpg", //SRC
		"アイン＝ハナレ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[ダウン]：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－1000する。あなたのトラッシュにカードが１５枚以上ある場合、代わりにターン終了時まで、それのパワーを－3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-080.jpg", //SRC
		"コードアート　Jヨシツキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋4000される。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないレベル２以下のシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-081.jpg", //SRC
		"ツヴァイ＝ヴァイアル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：あなたのデッキの上からカードを５枚見る。その中からカードを３枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-082.jpg", //SRC
		"羅星　マイクロスコピウム", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのデッキの一番上のカードをトラッシュに置く。その後、この方法でレベル１のシグニがトラッシュに置かれた場合、[無]を支払ってもよい。そうした場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-083.jpg", //SRC
		"幻黒竜　ティラノ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、このシグニの下からカード３枚をトラッシュに置き[黒][無]を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－8000する。<br><br>【出】：あなたのトラッシュからレベル１、レベル２、レベル３のシグニをそれぞれ１枚まで対象とし、それらをこのシグニの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-084.jpg", //SRC
		"幻蟲　ミュウ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】[黒][ダウン]：あなたのトラッシュからレベル２以下の黒のシグニ１枚を対象とし、それを手札に加える。場にシグニに付いているカードかシグニの下に置かれているカードがある場合、代わりにあなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。（対戦相手の場にあるカードも参照する）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-085.jpg", //SRC
		"ワンス・サルベージ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P06-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-086.jpg", //SRC
		"幻水　シースター", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
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
		"WXDi-P06-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-087.jpg", //SRC
		"幻水　ピグミーシーホース", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
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
		"WXDi-P06-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-088.jpg", //SRC
		"羅星　カネスヴィナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
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
		"WXDi-P06-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-089.jpg", //SRC
		"羅星　セルペンス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
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
		"WXDi-P06-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-090.jpg", //SRC
		"羅原　Tc", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
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
		"WXDi-P06-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-091.jpg", //SRC
		"羅原　Te", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
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
		"WXDi-P06-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P06-092.jpg", //SRC
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
		],
	[
		"WXDi-P07-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-001.jpg", //SRC
		"キラキラ☆メモリーズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたのレベル３のルリグ１体を対象とし、ターン終了時まで、それは以下の能力を得る。<br>『【自】（ターン１）：このルリグがアタックしたとき、対戦相手のライフクロス１枚を手札に加えさせる。その後、あなたの手札からシグニを１枚まで場に出す。そのシグニの【出】能力は発動しない。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-002.jpg", //SRC
		"ENERGY DOOR", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>以下の４つからあなたのセンタールリグのレベル１につき１つまで選ぶ。<br>①あなたのトラッシュから[ガード]を持たないカードを２枚まで対象とし、それらをエナゾーンに置く。<br>②カードを２枚引く。<br>③対戦相手のレベル３以上のシグニ１体を対象とし、それをバニッシュする。<br>④次の対戦相手のターンの間、あなたが対戦相手のルリグによって最初にダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-003.jpg", //SRC
		"まっすぐオーネスト", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード４（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）：対戦相手のレベル１のシグニ１体を対象とし、それをバニッシュする。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-004.jpg", //SRC
		"Can't stop Pretty!", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード４（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）：対戦相手のシグニ１体を対象とし、対戦相手が手札を３枚捨てないかぎり、それをダウンする。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-005.jpg", //SRC
		"瞬間explosion", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"このゲームの間、あなたのセンタールリグは以下の能力を得る。（グロウしても新しいセンタールリグは能力を得たままである）<br>『【起】【メインフェイズ】【アタックフェイズ】エクシード４（あなたのルリグの下からカードを合計４枚ルリグトラッシュに置く）：あなたのトラッシュからシグニ１枚を対象とし、それを能力を持たないシグニとして場に出す。ターン終了時、それを場からトラッシュに置く。』", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-006.jpg", //SRC
		"発進！WIXOSSロボ", //NAME
		"LR", //RARE
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
		"このゲームの間にあなたが◎を得ていない場合、◎◎◎◎◎を得る。このゲームの間、あなたは◎を得られない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-007.jpg", //SRC
		"まほまほ☆さ～ん", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手は以下の２つから１つを選び、あなたはそれを行う。<br>①対戦相手のデッキの上からカードを４枚トラッシュに置く。<br>②あなたのトラッシュからシグニ１枚を対象とし、それを手札に加える。<br><br>【出】：あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。<br><br>【起】（ゲーム１）[黒(0)]：以下を３回行う。「対戦相手は手札を１枚捨てるか[無]を支払わないかぎり、自分のデッキの上からカードを４枚トラッシュに置く。」", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-008.jpg", //SRC
		"武踊の記憶　リル", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"《赤》×２", //COST
		"6", //LIMIT
		"", //POWER
		"4", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】（ターン１）：[ライズ]を持つあなたのシグニ１体が場に出たとき、手札を１枚捨ててもよい。そうした場合、カードを１枚引く。<br><br>【起】（ターン１）[赤(0)]：あなたの場にいるアシストルリグのレベルの合計が１以上の場合、◎を得る。４以上の場合、追加で◎を得る。<br><br>【起】（ゲーム１）[赤(0)]：対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-009.jpg", //SRC
		"ドーナ　SUN", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのレベル３の白のシグニ１体を対象とし、次の対戦相手のターン終了時まで、それは「【常】：対戦相手のターンの間、このシグニは【シャドウ（シグニ）】を得る。」を得る。<br><br>【起】（ゲーム１）[白(0)]：あなたのトラッシュからそれぞれ共通する色を持つシグニ２枚を対象とし、それらを手札に加える。（無色は色に含まれない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-010.jpg", //SRC
		"でじたるあーや！Ⅲ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"1", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【自】：このルリグがアタックしたとき、対戦相手のデッキの一番上を公開する。それがレベル１のシグニの場合、①を行う。レベル２のシグニの場合、②を行う。レベル３のシグニの場合、①か②を行う。スペルの場合、①と②を行う。<br>①カードを１枚引く。<br>②対戦相手は手札を１枚捨てる。<br><br>【起】（ゲーム１）[青(0)]：対戦相手のシグニ１体を対象とし、それを裏向きにする。各アタックフェイズ開始時、裏向きのそれと同じ場所にシグニがない場合、対戦相手は[無][無]を支払うか手札を２枚捨ててもよい。そうした場合、それを表向きにする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-011.jpg", //SRC
		"まほまほ☆いち", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-012.jpg", //SRC
		"まほまほ☆にっ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"まほまほ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-013.jpg", //SRC
		"純真の記憶　リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"0", //LEVEL
		"《赤》×０", //COST
		"0", //LIMIT
		"", //POWER
		"1", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-014.jpg", //SRC
		"求新の記憶　リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《赤》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-015.jpg", //SRC
		"明滅の記憶　リル", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《赤》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-016.jpg", //SRC
		"ドーナ　ＳＴＡＲＴ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"0", //LEVEL
		"《白》×０", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-017.jpg", //SRC
		"ドーナ　ＦＩＲＳＴ＋＋", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-018.jpg", //SRC
		"ドーナ　ＳＥＣＯＮＤ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ドーナ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-019.jpg", //SRC
		"あーや！０", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"4", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-020.jpg", //SRC
		"ぴこぴこあーや！Ⅰ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-021.jpg", //SRC
		"ぐれーとあーや！Ⅱ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"あや", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-022.jpg", //SRC
		"みこみこ☆がっちゃん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"メインフェイズ", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のレベル１のシグニ１体を対象とし、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-023.jpg", //SRC
		"みこみこ☆きらっきら", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：カードを３枚引き、手札を２枚捨てる。このターンに対戦相手の効果によってあなたの手札からカードが１枚以上トラッシュに移動していた場合、代わりにカードを５枚引き、手札を２枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-024.jpg", //SRC
		"みこみこ☆ばしーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×４", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニを２体まで対象とし、それらをダウンする。<br><br>【出】[青][無]：対戦相手のシグニ１体を対象とし、対戦相手が手札を３枚捨てないかぎり、それをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-025.jpg", //SRC
		"みこみこ☆ずばしゃーん", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをデッキの一番下に置く。<br><br>【出】手札を３枚捨てる：対戦相手の手札を見て１枚選び、捨てさせる。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-026.jpg", //SRC
		"みこみこ☆ぽいぽい", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"みこみこ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-027.jpg", //SRC
		"メル＝レディ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"3", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-028.jpg", //SRC
		"メル・バースト", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-029.jpg", //SRC
		"メル・リバイズ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのトラッシュから[ガード]を持たないカードを２枚まで対象とし、それらをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-030.jpg", //SRC
		"メル・インビジブル", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】手札を２枚捨てる：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。<br><br>【出】[緑][無][無]：このターン、次にあなたがダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-031.jpg", //SRC
		"メル・オーバーラン", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】[緑][無][無][無][無]：あなたのいずれかのシグニよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-032.jpg", //SRC
		"メル・プレゼント", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"メル", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのエナゾーンからシグニ１枚を対象とし、それを場に出す。それの【出】能力は発動しない。<br><br>【起】（ゲーム１）[緑][無]：あなたのシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-033.jpg", //SRC
		"ナナシ　其ノ無", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"2", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-034.jpg", //SRC
		"ナナシ・散布", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【出】[無]：対戦相手のすべてのシグニゾーンに【ウィルス】を１つずつ置く。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-035.jpg", //SRC
		"ナナシ・探索", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを２枚トラッシュに置く。その後、あなたのトラッシュから[ガード]を持たないそれぞれレベルの異なるシグニ２枚を対象とし、それらを手札に加える。<br><br>【出】[無]：対戦相手のすべてのシグニゾーンに【ウィルス】を１つずつ置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-036.jpg", //SRC
		"ナナシ・浄化", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。それが感染状態の場合、代わりにそれをトラッシュに置く。<br>（【ウィルス】と同じシグニゾーンにあるシグニは感染状態である）<br><br>【出】[無][無]：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-037.jpg", //SRC
		"ナナシ・施錠", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。<br><br>【出】手札を２枚捨てる：対戦相手の感染状態のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】[黒]無][無]：対戦相手の感染状態のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br>（【ウィルス】と同じシグニゾーンにあるシグニは感染状態である）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-038.jpg", //SRC
		"ナナシ・ご選択", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ナナシ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【起】（ターン１）対戦相手の場にある【ウィルス】１つを取り除く：以下の３つから１つを選ぶ。<br>①あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。<br>②対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。<br>③【エナチャージ２】", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-039.jpg", //SRC
		"聖将姫　ゆきめ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：アタックフェイズの間、このシグニの正面のシグニがバニッシュされる場合、エナゾーンに置かれる代わりにトラッシュに置かれる。<br><br>【自】：あなたのアタックフェイズ開始時、数字１つを宣言する。対戦相手のデッキの一番上を公開し、そのカードが宣言された数字と同じレベルのシグニの場合、カードを１枚引く。<br><br>【起】◎：対戦相手はデッキの一番上と手札を公開する。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-040.jpg", //SRC
		"羅星姫　ペガサス", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にレベル１のシグニがある場合、カードを１枚引く。<br><br>【自】：このシグニがアタックしたとき、あなたのトラッシュにレベル１のシグニが１０枚以上ある場合、【エナチャージ１】をする。<br><br>【起】エナゾーンからレベル１のシグニ４枚をトラッシュに置く：対戦相手のシグニ１体を対象とし、それをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-041.jpg", //SRC
		"羅星姫　カーニバル//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[赤]◎◎◎：対戦相手のシグニ１体を対象とし、ターン終了時まで、それを《サーバント ＺＥＲＯ》にする。<br>（《サーバント ＺＥＲＯ》はレベル１、＜精元＞、パワー1000、無色で能力を持たないシグニである）<br><br>【起】（ターン１）[赤(0)]：【　　】アイコンを持たないシグニ１体を対象とする。このシグニに付いているすべてのカードと、下に置かれているすべてのカードをトラッシュに置く。ターン終了時まで、このシグニはそれと同じカードになる。（【ライズ】と【ハーモニー】は【　　】に含まれる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-042.jpg", //SRC
		"幻獣神　サラブレッド", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【自】：あなたのターン終了時、あなたの場にあるシグニのパワーの合計が30000以上の場合、カードを１枚引く。<br><br>【出】[赤][無]：あなたのトラッシュからレベル２以下の＜地獣＞のシグニ１枚を対象とし、それを場に出す。ターン終了時まで、それのパワーを＋4000する。<br><br>【ライフバースト】：対戦相手のパワー10000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-043.jpg", //SRC
		"蒼天姫　ブリュンヒルデ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン２）：あなたの＜天使＞のシグニ１体が場に出たとき、カードを１枚引いてもよい。そうした場合、手札を１枚捨てる。<br><br>【自】（ターン１）：あなたの＜天使＞のシグニ１体がアタックしたとき、対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のシグニ１体を対象とし、手札を２枚捨ててもよい。そうした場合、それをバニッシュする。②対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-044.jpg", //SRC
		"大幻蟲　アロス・ピルルク//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：凶蟲", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのメインフェイズの間、あなたがシグニを１枚捨てたとき、そのカードをトラッシュから場に出す。<br><br>【自】（ターン１）：あなたのターンの間、あなたのシグニ１体が手札以外の領域から場に出たとき、対戦相手のシグニ１体を対象とし、それを凍結し、ターン終了時まで、それのパワーを－2000する。<br><br>【起】（ターン１）◎◎：対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-045.jpg", //SRC
		"翠英姫　ママ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのパワーの合計が30000の場合、【エナチャージ２】をする。<br><br>【自】：このシグニがアタックしたとき、このシグニのパワーが13000の場合、次の対戦相手のターン終了時まで、このシグニは【シャドウ（パワー10000以下のシグニ）】を得る。<br><br>【起】◎：次の対戦相手のターン終了時まで、このシグニのパワーを＋3000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-046.jpg", //SRC
		"ドライ＝パトラ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[緑]：あなたのエナゾーンからシグニ１枚を対象とし、それを手札に加える。<br><br>【出】[黒]：あなたのトラッシュから緑のシグニ１枚を対象とし、それを場に出す。<br><br>【起】（ターン１）ターン終了時まで、このシグニのパワーを－10000する：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－10000する。この能力はこのシグニのパワーが20000以上の場合にしか使用できない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-047.jpg", //SRC
		"惨之遊姫　グズ子//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：遊具", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：対戦相手がダメージを受けたとき、[黒][黒][黒][無][無]を支払ってもよい。そうした場合、対戦相手のライフクロス１枚をクラッシュする。<br><br>【自】（ターン１）：あなたのターンの間、あなたのトラッシュからあなたのシグニ１体が場に出たとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－3000する。<br><br>【起】（ターン１）◎◎◎：あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-048.jpg", //SRC
		"コードハート　Aトマッサージャー", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにあなたがスペルを１枚以上使用していた場合、対戦相手のデッキの上からカードを２枚トラッシュに置く。その後、このターンにあなたがスペルを２枚以上使用していた場合、あなたのトラッシュから黒のシグニ１枚を対象とし、それを手札に加える。<br><br>【出】[黒]：あなたのトラッシュから黒のスペル１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-049.jpg", //SRC
		"透天姫　リワト//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、以下の３つから１つを選ぶ。<br>①カードを１枚引くか【エナチャージ１】をする。<br>②対戦相手のレベル１のシグニ１体を対象とし、それをバニッシュする。<br>③対戦相手のシグニ１体を対象とし、[無][無][無]を支払ってもよい。そうした場合、それを手札に戻す。<br><br>【出】：あなたの公開領域に＜天使＞ではない、色を持つ表向きのシグニであるカードがある場合、このシグニを場からトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-050.jpg", //SRC
		"夢限//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏元", //CLASS
		"無", //COLOR
		"3", //LEVEL
		"", //COST
		"7", //LIMIT
		"∞", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：【マルチエナ】<br><br>【常】：このシグニは対戦相手の効果によって場から他の領域に移動しない。<br><br>【起】エクシード４：他のすべてのシグニをトラッシュに置く。このターン、あなたは他のシグニを場に出せない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-051.jpg", //SRC
		"聖将　ヤギュウ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが白の場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-052.jpg", //SRC
		"聖魔　ハイティ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのライフクロス１枚がクラッシュされるかトラッシュに置かれたとき、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-053.jpg", //SRC
		"コードアート　Dスペンサー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの手札からスペルを１枚公開してもよい。そうした場合、次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-054.jpg", //SRC
		"聖天　タウィル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュに＜天使＞のシグニが７枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【常】：対戦相手のターンの間、あなたのトラッシュに白のシグニが７枚以上あるかぎり、このシグニは【シャドウ（赤）】を得る。（このシグニは対戦相手の赤の能力と効果によって対象にされない）<br><br>【ライフバースト】：あなたのデッキの上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-055.jpg", //SRC
		"聖将　モヘイヘ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：どちらか１つを選ぶ。①対戦相手のパワー5000以下のシグニ１体を対象とし、それを手札に戻す。②対戦相手のパワー12000以下のシグニ１体を対象とし、◎を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-056.jpg", //SRC
		"聖美　ガクブチ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニがアップ状態であるかぎり、このシグニのパワーは＋4000される。<br><br>【自】（ターン１）：あなたのルリグ１体がアタックしたとき、あなたのシグニ１体を対象とし、それをアップする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-057.jpg", //SRC
		"幻白水　ウナ", //NAME
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
		"【常】：対戦相手のアタックフェイズの間、あなたの手札が４枚以上あるかぎり、このシグニは【シャドウ】を得る。<br>（このシグニは対戦相手によって対象にされない）<br><br>【出】◎◎：カードを１枚引く。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-058.jpg", //SRC
		"幻怪　カラテン", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：怪異", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：【出】能力を持つあなたのシグニ１体が場に出たとき、【エナチャージ１】をする。（その【出】能力より先にこの能力を発動できる）<br><br>【起】（ターン１）[白][無]◎◎：あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-059.jpg", //SRC
		"サーブ・カラー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"白", //CLASS
		"", //COLOR
		"", //LEVEL
		"《白》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ベット―◎<br><br>カードを１枚引く。その後、色１つを宣言する。あなたのシグニ１体を対象とし、次の対戦相手のターン終了時まで、それは①を得る。あなたがベットしていた場合、代わりに②を得る。<br>①「【常】：対戦相手のターンの間、これは【シャドウ（宣言された色のシグニ）】を得る。」<br>②「【常】：対戦相手のターンの間、これは【シャドウ（宣言された色）】を得る。」<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-060.jpg", //SRC
		"紅天　ヒュペリオン", //NAME
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
		"0", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-061.jpg", //SRC
		"羅星　フォルナックス", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンから対戦相手のセンタールリグと共通する色を持たないカード１枚を対象とし、手札からレベル１のシグニを１枚捨ててもよい。そうした場合、それをトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-062.jpg", //SRC
		"羅寂石　ルリル", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"7000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたの場に他の＜宝石＞のシグニがない場合、あなたは手札を１枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-063.jpg", //SRC
		"中装　バルディッシュ", //NAME
		"C", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、あなたの場にレベル３のシグニが２体以上ある場合、[赤][赤]を支払ってもよい。そうした場合、ターン終了時まで、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-064.jpg", //SRC
		"羅星　ジオールタ", //NAME
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
		"【出】：あなたのデッキの上からカードを３枚公開し、それらのカードを好きな順番でデッキの一番下に置く。その後、この方法で公開されたすべてのカードがレベル１のシグニの場合、対戦相手のパワー3000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-065.jpg", //SRC
		"コードライド　レイラ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを自身の下にあるすべてのシグニのパワーの合計と同じだけ＋（プラス）する。その後、このシグニのパワーが15000以上の場合、[赤][赤][無]を支払ってもよい。そうした場合、対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：あなたのデッキの一番上のカードをこのシグニの下に置く。<br><br>【起】◎：あなたのデッキの一番上のカードをこのシグニの下に置く。<br>（シグニの下に置かれるカードは表向きである）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-066.jpg", //SRC
		"コードライド　バギーカー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：乗機", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：どちらか１つを選ぶ。①対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。②対戦相手のパワー12000以下のシグニ１体を対象とし、◎を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-067.jpg", //SRC
		"紅将　ギルガメジ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ライズ】あなたの赤のシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[赤][赤][赤]：ターン終了時まで、このシグニは【ダブルクラッシュ】を得る。（アタックによるダメージでライフクロスを２枚クラッシュする）<br><br>【起】◎◎◎◎◎：ターン終了時まで、このシグニは【アサシン】を得る。（このシグニがアタックすると正面のシグニとバトルをせず対戦相手にダメージを与える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-068.jpg", //SRC
		"仮面の伝説", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ベット―◎◎（このスペルを使用する際、使用コストとして追加で◎◎を支払ってもよい）<br><br>対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。あなたがベットしていた場合、代わりに対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-069.jpg", //SRC
		"蒼魔　スキュラ", //NAME
		"R", //RARE
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
		"【自】：このシグニがアタックしたとき、対戦相手は手札を１枚捨てる。<br><br>【出】：あなたは手札を１枚捨てる。<br>（コストのない【出】能力は発動しないことを選べない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-070.jpg", //SRC
		"羅石　カイヤナイト", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、このシグニがアップ状態の場合、あなたのデッキの一番上を公開する。そのカードが青の場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-071.jpg", //SRC
		"羅植　ヒヤシンス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】手札を１枚捨てる：このターン終了時、【エナチャージ１】をする。<br>（【出】能力の：の左側はコストである。コストを支払わず発動しないことを選んでもよい）<br><br>【ライフバースト】：カードを２枚引き【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-072.jpg", //SRC
		"蒼天　カイニス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：どちらか１つを選ぶ。①対戦相手のパワー3000以下のシグニ１体を対象とし、それをデッキの一番下に置く。②対戦相手のパワー8000以下のシグニ１体を対象とし、◎を支払ってもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-073.jpg", //SRC
		"羅原　In", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のアタックフェイズ開始時、ターン終了時まで、あなたのセンタールリグは「【自】：対戦相手のターン終了時、あなたのすべてのシグニをバニッシュする。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-074.jpg", //SRC
		"羅植　フジノハナ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】◎：【エナチャージ１】（あなたのデッキの一番上のカードをエナゾーンに置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-075.jpg", //SRC
		"コードパレス　リュウジョウ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、このターンにこのシグニが手札以外の領域から場に出ていた場合、カードを１枚引くか、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-076.jpg", //SRC
		"大罠　ハニトラ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手は手札を１枚捨てる。<br><br>【起】（ターン１）◎◎：カードを１枚引く。<br><br>【自】：このカードが対戦相手の効果によってデッキか手札からトラッシュに置かれたとき、対戦相手のトラッシュからカード１枚を対象とし、それをデッキの一番上に置いてもよい。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-077.jpg", //SRC
		"RECOVERY", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《青》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"ベット―◎（このスペルを使用する際、使用コストとして追加で◎を支払ってもよい）<br><br>カードを２枚引き、手札を２枚捨てる。あなたがベットしていた場合、代わりにカードを３枚引き、手札を２枚捨てる。<br><br>このターン、あなたはスペルを使用できない。<br><br>【ライフバースト】：対戦相手のアップ状態のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-078.jpg", //SRC
		"翠将　ジェロニモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、【エナチャージ１】をする。」を得る。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-079.jpg", //SRC
		"アイン＝グリーンルクボル", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏武：毒牙", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】このシグニを場からトラッシュに置く：あなたのシグニ１体を対象とし、ターン終了時まで、それのパワーを＋5000する。それが＜毒牙＞のシグニの場合、代わりにターン終了時まで、それのパワーを＋10000する。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-080.jpg", //SRC
		"コードフード　ツナマヨ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのシグニの下にあるカード１枚を対象とし、それをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-081.jpg", //SRC
		"爆砲　センチュリオン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウェポン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】◎◎【エナチャージ１】（あなたのデッキの一番上のカードをエナゾーンに置く）<br><br>【起】[緑][緑] このシグニを場からトラッシュに置く：対戦相手のレベル３以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-082.jpg", //SRC
		"羅星　コルト", //NAME
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
		"【自】：このシグニがアタックしたとき、あなたのトラッシュから[ガード]を持たないレベル１のシグニ１枚を対象とし、それをエナゾーンに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-083", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-083.jpg", //SRC
		"羅星　ラセルタ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：どちらか１つを選ぶ。①対戦相手のパワー12000以上のシグニ１体を対象とし、それをバニッシュする。②対戦相手のパワー5000以上のシグニ１体を対象とし、◎を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-084", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-084.jpg", //SRC
		"コードメイズ　レースコース", //NAME
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
		"【出】[緑]：あなたのデッキの一番下のカードを公開する。そのカードを場に出すかトラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[無][無]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-085", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-085.jpg", //SRC
		"翠英　ナイチール", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[緑][緑]：以下の３つから１つを選ぶ。<br>①ターン終了時まで、このシグニは基本パワーが5000になり、【ランサー】を得る。<br>②ターン終了時まで、このシグニは基本パワーが10000になり、「【常】：対戦相手の効果によってこのシグニのパワーは－（マイナス）されない。」を得る。<br>③ターン終了時まで、このシグニは基本パワーが12000になり、「【常】：対戦相手の効果によってダウンしない。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-086", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-086.jpg", //SRC
		"演算", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"シグニ１体を対象とする。２～２０の数字１つを宣言し、ターン終了時まで、それの基本パワーを「この方法で宣言した数字×1000」にする。<br><br>【ライフバースト】：対戦相手のパワー7000以上のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-087", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-087.jpg", //SRC
		"羅星　ベレニケ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにカードが１０枚以上あるかぎり、このシグニのパワーは＋4000される。<br><br>【自】：このシグニがバニッシュされたとき、あなたか対戦相手のデッキの上からカードを２枚トラッシュに置く。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないレベル２以下のシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-088", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-088.jpg", //SRC
		"羅油菌　ショウコカビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、このシグニは「【自】：このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。」を得る。<br>（パワーが０以下のシグニはルールによってバニッシュされる）<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-089", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-089.jpg", //SRC
		"コードアンチ　ウムル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：古代兵器", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"1000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：このシグニがアタックしたとき、このターンにこのシグニがトラッシュから場に出ていた場合、カードを１枚引く。<br><br>【起】手札を２枚捨てる：このカードをトラッシュから場に出す。（この能力はこのカードがトラッシュにある場合にしか使用できない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-090", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-090.jpg", //SRC
		"凶天　タナトス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：天使", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】[黒]：対戦相手のシグニ１体を対象とし、あなたのトラッシュからそれぞれレベルの異なる＜天使＞のシグニ３枚をデッキに加えてシャッフルする。そうした場合、ターン終了時まで、それのパワーを－5000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-091", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-091.jpg", //SRC
		"凶将　アグラヴェイン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：武勇", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【ライズ】あなたの＜武勇＞のシグニ１体の上に置く（この条件を満たさなければ場に出せない）<br><br>【出】[黒]：以下の２つから１つを選ぶ。<br>①対戦相手のレベル１のシグニ１体を対象とし、それをバニッシュする。<br>②あなたのトラッシュから＜武勇＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-092", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-092.jpg", //SRC
		"凶魔　アルフォウ//メモリア", //NAME
		"R", //RARE
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
		"【自】：このシグニがアタックしたとき、各プレイヤーは自分のデッキの上からカードを２枚トラッシュに置く。<br><br>【自】：あなたがリフレッシュしたとき、対戦相手のシグニ１体を対象とし、[黒][黒][黒]を支払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-093", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-093.jpg", //SRC
		"凶魔　サユラギ", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのデッキからカード１枚がトラッシュに置かれたとき、ターン終了時まで、このシグニのパワーを＋5000する。<br><br>【自】（ターン１）：あなたがリフレッシュしたとき、【エナチャージ１】をする。<br><br>【起】（ターン１）[黒(0)]：あなたのデッキの上からカードを３枚トラッシュに置く。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-094", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-094.jpg", //SRC
		"凶魔　リリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【ライフバースト】：どちらか１つを選ぶ。①対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－5000する。②対戦相手のシグニ１体を対象とし、◎を支払ってもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-095", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-095.jpg", //SRC
		"ブラック・メモリー", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"以下の２つから１つを選ぶ。<br>①あなたのトラッシュからレベル２以下のシグニを２枚まで対象とし、それらを場に出す。<br>②あなたのトラッシュから《惨之遊姫 グズ子//メモリア》とレベル２以下のシグニをそれぞれ１枚まで対象とし、それらを場に出す。<br><br>【ライフバースト】：あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加えるか場に出す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-096", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-096.jpg", //SRC
		"聖翠美　オリガミ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
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
		"WXDi-P07-097", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-097.jpg", //SRC
		"聖翠美　シュレリス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
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
		"WXDi-P07-098", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-098.jpg", //SRC
		"コードアート　Cレプヤキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-099", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-099.jpg", //SRC
		"コードアート　Tコヤキキ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤黒", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"（エナコストを支払う際、このカードは赤か黒１つとして支払える）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P07-100", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P07-100.jpg", //SRC
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
		"WXDi-P08-001", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-001.jpg", //SRC
		"アグレッシブな夜", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたの場に青のルリグがいる場合、対戦相手の手札を見て１枚選び、捨てさせる。<br>その後、あなたの場に緑のルリグがいる場合、【エナチャージ３】をする。<br>その後、あなたの場に黒のルリグがいる場合、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-002", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-002.jpg", //SRC
		"Colorful Wish", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、あなたのトラッシュから[ガード]を持つシグニ１枚を対象とし、それを手札に加える。<br>その後、あなたの場に緑のルリグがいる場合、対戦相手のパワー10000以上のシグニ１体を対象とし、それをバニッシュする。<br>その後、あなたの場に黒のルリグがいる場合、あなたのトラッシュからレベル２のシグニとレベル３のシグニをそれぞれ１枚まで対象とし、それらを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-003", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-003.jpg", //SRC
		"ウルトラスーパーヒーローズ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"青", //COLOR
		"", //LEVEL
		"《無》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、あなたのデッキの上からカードを５枚見る。その中からカードを２枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。<br>その後、あなたの場に赤のルリグがいる場合、対戦相手のパワー12000以下のシグニ１体を対象とし、それをバニッシュする。<br>その後、あなたの場に黒のルリグがいる場合、対戦相手のデッキの上からカードを１０枚トラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-004", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-004.jpg", //SRC
		"舞イ踊リ色紬", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたの場に白のルリグがいる場合、対戦相手のシグニ１体を対象とし、それを手札に戻す。<br>その後、あなたの場に赤のルリグがいる場合、あなたのレベル３以上のシグニ１体を対象とし、ターン終了時まで、それは【アサシン】を得る。<br>その後、あなたの場に青のルリグがいる場合、対戦相手のルリグ１体を対象とし、それを凍結する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-005", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-005.jpg", //SRC
		"デス・ビーム・ディーヴァ", //NAME
		"LR", //RARE
		"ピース", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《無》×２", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【使用条件】【ドリームチーム】合計３種類以上の色を持つ（あなたの場にいるルリグ３体がこの条件を満たす）<br><br>あなたの場に赤のルリグがいて対戦相手のセンタールリグがレベル３以上の場合、対戦相手は自分のエナゾーンからカード３枚を選びトラッシュに置く。（２枚以下の場合、それらをすべて選ぶ）<br>その後、あなたの場に青のルリグがいる場合、カードを３枚引く。<br>その後、あなたの場に緑のルリグがいる場合、あなたのシグニ１体を対象とし、ターン終了時まで、それは【ランサー】を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-006", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-006.jpg", //SRC
		"リセット・メモリア", //NAME
		"LR", //RARE
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
		"カードを１枚引く。ターン終了時まで、対戦相手のすべてのシグニは能力を失う。（このピースの後に場に出たシグニはこの効果の影響を受けない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-007", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-007.jpg", //SRC
		"ゆかゆか☆さ～ん", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"《白》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"【自】：対戦相手のシグニ１体がアタックしたとき、対戦相手が[無]を支払わないかぎり、ターン終了時まで、そのシグニは能力を失う。<br><br>【出】：対戦相手のシグニ１体を対象とし、それを手札に戻す。<br><br>【起】（ゲーム１）[白(0)]：以下を３回行う。「対戦相手が手札を１枚捨てるか[無]を支払わないかぎり、あなたは自分のデッキの上からカードを３枚見る。その中からカードを１枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。」", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-008", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-008.jpg", //SRC
		"エルドラ×マークν", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"《青》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【常】：あなたのライフクロスとチェックゾーンにある【ライフバースト】を持たないカードは【ライフバースト】「どちらか１つを選ぶ。①カードを１枚引く。②【エナチャージ１】」を得る。<br><br>【出】：対戦相手のライフクロスの一番上を公開する。あなたはそのカードと対戦相手のデッキの一番上のカードを入れ替えてもよい。<br><br>【起】（ゲーム１）[青(0)]：あなたのライフクロス１枚をクラッシュする。そうした場合、あなたのデッキをシャッフルし一番上のカードをライフクロスに加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-009", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-009.jpg", //SRC
		"結団の決断　アン＝サード", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"《緑》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのエナゾーンからシグニを２枚まで対象とし、それらを手札に加える。<br><br>【起】（ターン１）[緑(0)]：あなたのエナゾーンにあるカード１枚を対象とし、ターン終了時まで、それは【マルチエナ】を得る。<br><br>【起】（ゲーム１）[緑(0)]：対戦相手のシグニのうち、最も高いパワーを持つすべてのシグニを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-010", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-010.jpg", //SRC
		"トライアングル/メイデン　イオナ", //NAME
		"LR", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"《黒》×２", //COST
		"6", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのトラッシュからシグニ１枚を対象とし、それを場に出す。<br><br>【起】（ターン１）デッキの上からカードを２枚トラッシュに置く：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br><br>【起】（ゲーム１）[黒][無]：次の対瀬相手のターンの間、対戦相手のシグニは可能ならばアタックしなければならない。そのターン終了時、そのターンにアタックしていたすべてのシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-011", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-011.jpg", //SRC
		"ゆかゆか☆いち", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《白》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-012", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-012.jpg", //SRC
		"ゆかゆか☆にっ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"ゆかゆか", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《白》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"きゅるきゅるーん☆", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-013", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-013.jpg", //SRC
		"エルドラ×マーク０", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"0", //LEVEL
		"《青》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-014", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-014.jpg", //SRC
		"エルドラ×マークⅠ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《青》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-015", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-015.jpg", //SRC
		"エルドラ×マークⅡ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"エルドラ", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《青》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-016", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-016.jpg", //SRC
		"奇跡の軌跡　アン", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"0", //LEVEL
		"《緑》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-017", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-017.jpg", //SRC
		"想像の創造　アン＝ファースト", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"《緑》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-018", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-018.jpg", //SRC
		"過知の価値　アン＝セカンド", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"アン", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"《緑》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-019", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-019.jpg", //SRC
		"ゼロ/メイデン　イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"0", //LEVEL
		"《黒》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-020", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-020.jpg", //SRC
		"ネプト/メイデン　イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"《黒》×０", //COST
		"2", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-021", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-021.jpg", //SRC
		"ウラヌス/メイデン　イオナ", //NAME
		"LC", //RARE
		"ルリグ", //TYPE
		"イオナ", //CLASS
		"黒", //COLOR
		"2", //LEVEL
		"《黒》×１", //COST
		"5", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"", //LB
		"", //TEAM
		"", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-022", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-022.jpg", //SRC
		"タマ・おおごえ", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー10000以下のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-023", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-023.jpg", //SRC
		"タマ・ばいぶる", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを７枚見る。その中からシグニを１枚まで公開し手札に加え、残りをシャッフルしてデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-024", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-024.jpg", //SRC
		"タマ・しーるど", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【出】手札を２枚捨てる：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【出】[白][無][無]：対戦相手のレベル１のシグニ１体を対象とし、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-025", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-025.jpg", //SRC
		"タマ・ばうんだり", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：数字１つを宣言する。その後、あなたのデッキの上からカードを３枚公開する。その中に宣言した数字と同じレベルのシグニがある場合、対戦相手のシグニ１体を対象とし、それを手札に戻す。この効果で公開したカードを好きな順番でデッキの一番上に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-026", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-026.jpg", //SRC
		"タマ・おーら", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"タマ", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：あなたのルリグ１体を対象とし、ターン終了時まで、それは「【自】（ターン１）：このルリグがアタックしたとき、このルリグをアップし、ターン終了時まで、このルリグは能力を失う。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-027", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-027.jpg", //SRC
		"リル・一閃", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のレベル２以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-028", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-028.jpg", //SRC
		"リル・炎舞", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。<br><br>【出】：◎◎を得る。<br>（プレイヤーが保持できる◎の上限は５枚である）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-029", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-029.jpg", //SRC
		"リル・抜刀", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをバニッシュする。<br><br>【起】（ゲーム１）[赤][無][無]：対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-030", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-030.jpg", //SRC
		"リル・祈祷", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×０", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手は自分のシグニを好きな数選ぶ。このターン、対戦相手は選んだシグニで可能ならばアタックしなければならず、それら以外のシグニでアタックできない。<br><br>【出】[無][無][無]：このターン、対戦相手のシグニ１体がアタックしたとき、そのアタックがこのターンで二度目以降の対戦相手によるアタックの場合、そのアタックしたシグニをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-031", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-031.jpg", //SRC
		"リル・鼓舞", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"リル", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：カードを３枚引き、あなたの手札からシグニを１枚まで場に出す。その後、そのシグニよりパワーの低い対戦相手のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-032", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-032.jpg", //SRC
		"ピルルク/DRAW", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-033", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-033.jpg", //SRC
		"ピルルク/SNIPE", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"《無》×０", //COST
		"0", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手の手札を見て[ガード]を持たないカード１枚を選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-034", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-034.jpg", //SRC
		"ピルルク/D-E", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×１", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ,アタックフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ１体を対象とし、それをダウンする。<br><br>【出】[青][無][無][無][無]：レベルの合計が４以下になるように対戦相手のシグニを２体まで対象とし、それらをダウンする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-035", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-035.jpg", //SRC
		"ピルルク/D-M", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×３", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"メインフェイズ,アタックフェイズ", //LB
		"", //TEAM
		"【出】：対戦相手のシグニ２体まで対象とし、それらをダウンする。<br><br>【出】[無][無]：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-036", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-036.jpg", //SRC
		"ピルルク/P-A", //NAME
		"LC", //RARE
		"アシストルリグ", //TYPE
		"ピルルク", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"《無》×２", //COST
		"1", //LIMIT
		"", //POWER
		"", //COIN
		"メインフェイズ", //TIMING
		"", //LB
		"", //TEAM
		"【出】：対戦相手の手札を見て１枚選び、捨てさせる。<br><br>【出】：対戦相手のルリグ１体を対象とし、それを凍結する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-037", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-037.jpg", //SRC
		"大装　タマ//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニが覚醒状態であるかぎり、このシグニのパワーは＋2000され、【シャドウ（レベル３以上のシグニ）】を得る。<br><br>【自】：このシグニがアタックしたとき、あなたのデッキの一番上を公開する。そのカードがシグニの場合、そのシグニとあなたのアップ状態のシグニ１体の場所を入れ替えてもよい。そのシグニの【出】能力は発動しない。<br><br>【自】：このシグニがバトルによって対戦相手のシグニ１体をバニッシュしたとき、このシグニは覚醒する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-038", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-038.jpg", //SRC
		"大盗罠　ルパンヌ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：トリック", //CLASS
		"白", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、あなたのライフクロス１枚をトラッシュに置いてもよい。そうした場合、このシグニをエナゾーンからライフクロスに加える。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②あなたのデッキの上からカードを４枚見る。その中からカードを２枚まで手札に加え、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-039", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-039.jpg", //SRC
		"羅輝石　花代//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"5000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたのエナゾーンにカードがない場合、ターン終了時まで、このシグニの基本レベルは３になり、基本パワーは12000になる。<br><br>【自】：あなたのアタックフェイズ開始時、このシグニのレベル以下の対戦相手のシグニ１体を対象とし、手札から赤のカードか＜宝石＞のシグニを合計２枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-040", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-040.jpg", //SRC
		"紅天姫　ヒラナ//メモリア", //NAME
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
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、[無][無]を支払ってもよい。そうした場合、あなたの手札から白か青のシグニ１枚をダウン状態で場に出す。そのシグニの【出】能力は発動しない。<br><br>【起】エクシード４：あなたのエナゾーンとライフクロスにあるすべてのカードをトラッシュに置き、手札をすべて捨てる。カードを２枚引き【エナチャージ２】をする。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-041", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-041.jpg", //SRC
		"大装　ハルバード", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】（ターン１）：あなたのアップ状態のシグニ１体が対戦相手の、アシストルリグかライフバーストの能力か効果の対象になったとき、[赤][赤][赤][無]を支払ってもよい。そうした場合、対戦相手のライフクロス１枚をクラッシュする。<br><br>【出】[赤] 手札を１枚捨てる：カードを２枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-042", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-042.jpg", //SRC
		"羅星姫　タマゴ//メモリア", //NAME
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
		"0", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、カードを１枚引く。<br><br>【自】：対戦相手のターン終了時、対戦相手の手札を見ないで１枚選び、捨てさせる。<br><br>【出】[ダウン]：次の対戦相手のターン終了時まで、このシグニのパワーを＋8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-043", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-043.jpg", //SRC
		"幻水歌姫　ダイホウイカ", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】；あなたのアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、手札を３枚まで捨てる。ターン終了時まで、それのパワーをこの方法で捨てたカード１枚につき－3000する。<br><br>【出】：あなたの場に青のシグニが３体以上ある場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-044", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-044.jpg", //SRC
		"翠将姫　ヒデヨシ", //NAME
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
		"【常】：対戦相手のシグニの【自】【出】【起】能力が発動する場合、このシグニの下からカード２枚をトラッシュに置いてもよい。そうした場合、代わりに発動したその能力は何もしない。<br><br>【常】：このシグニが対戦相手の効果によって場を離れる場合、代わりにこのシグニの下からカード２枚をトラッシュに置いてもよい。そうした場合、このシグニをダウンする。<br><br>【出】：あなたのエナゾーンからカードを４枚までこのシグニの下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-045", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-045.jpg", //SRC
		"翠英姫　アインシュタイン", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場にあるシグニのレベルの合計が偶数の場合、【エナチャージ１】をする。<br><br>【自】；このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、あなたのエナゾーンからレベルの合計が８になるようにシグニを好きな枚数トラッシュに置いてもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-046", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-046.jpg", //SRC
		"コードラビリンス　アト//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニが場を離れる場合、代わりにこれをデッキの一番下に置いてもよい。<br><br>【自】：このシグニが場を離れたとき、あなたのデッキをシャッフルしてもよい。そうした場合、あなたのデッキの上から、カードを２枚トラッシュに置きカードを４枚を見る。その見たカードの中から《コードラビリンス アト//メモリア》を１枚までダウン状態で場に出し、残りを好きな順番でデッキの一番下に置く。<br><br>【ライフバースト】：あなたのデッキの一番上と一番下を見る。その中からシグニを１枚まで場に出し、残りを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-047", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-047.jpg", //SRC
		"凶魔姫　ウリス//メモリア", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、手札から＜悪魔＞のシグニを２枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。<br><br>【出】[無]：あなたのトラッシュから《凶魔姫 ウリス//メモリア》以外の＜悪魔＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-048", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-048.jpg", //SRC
		"幻竜姫　ダークゲツァル", //NAME
		"SR", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは下にレベル１、レベル２、レベル３のシグニがそれぞれ１枚以上あるかぎり、「【自】；このシグニがアタックしたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－12000する。」を得る。それぞれ２枚以上あるかぎり、追加で【アサシン】を得る。<br><br>【自】：あなたのアタックフェイズ開始時、あなたのデッキをシャッフルし上からカード４枚をこのシグニの下に置く。（表向きで置く）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-049", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-049.jpg", //SRC
		"聖美　チョウコクトー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：美巧", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：対戦相手のターンの間、このシグニは【シャドウ（レベル２のシグニ）】を得る。（対戦相手のレベル２のシグニによって対象にされない）<br><br>【自】：対戦相手のアタックフェイズ開始時、対戦相手のレベル１のシグニ１体を対象とし、ターン終了時まで、それは能力を失う。<br><br>【ライフバースト】：ターン終了時まで、対戦相手のすべてのシグニは能力を失う。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-050", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-050.jpg", //SRC
		"小装　プロトエナジェ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：アーム", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】：あなたのデッキの上からカードを３枚見る。その中から《大装 タマ//メモリア》を１枚まで公開し手札に加え、カード１枚をデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-051", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-051.jpg", //SRC
		"幻水　アキノ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：水獣", //CLASS
		"白", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：このシグニは覚醒状態であるかぎり、「【自】：このシグニがアタックしたとき、あなたのデッキの上からカードを２枚見る。その中からカードを１枚まで手札に加え、残りを好きな順番デッキの一番下に置く。」を得る。<br><br>【出】：対戦相手の手札が６枚以上ある場合、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-052", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-052.jpg", //SRC
		"聖英　タンゴカード", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏像：英知", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、あなたの場に白のシグニが３体以上ある場合、対戦相手のパワー3000以下のシグニ１体を対象とし、[白]を支払ってもよい。そうした場合、それを手札に戻す。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-053", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-053.jpg", //SRC
		"羅星　ノヴァ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"白", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のレベル２以下のシグニを１体まで対象とし、このシグニを場から手札に戻してよい。そうした場合、ターン終了時まで、それは「【常】：アタックできない。」を得る。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【常】：アタックできない。」を得る。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-054", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-054.jpg", //SRC
		"聖天　ヘスチア", //NAME
		"C", //RARE
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
		"【常】：あなたが対戦相手のシグニかルリグのアタックによってダメージを受ける場合、代わりにこのシグニを場からトラッシュに置いてもよい。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のアップ状態のシグニ１体を対象とし、それを手札に戻す。②カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-055", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-055.jpg", //SRC
		"オーバー・パシュート", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"白", //COLOR
		"", //LEVEL
		"《白》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"対戦相手のレベル１のシグニ１体を対象とし、それを手札に戻す。あなたの場に白のシグニが３体以上ある場合、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-056", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-056.jpg", //SRC
		"コードアート　Ｐテトフライヤー", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"1", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたのトラッシュにスペルがあるかぎり、このシグニのパワーは＋4000される。<br><br>【出】スペルを１枚捨てる：対戦相手のパワー2000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-057", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-057.jpg", //SRC
		"幻竜　遊月//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏生：龍獣", //CLASS
		"赤", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、対戦相手のエナゾーンにカードがシグニ４枚以上ある場合、[赤][無][無]を支払ってもよい。そうした場合、対戦相手は自分のエナゾーンからカードを２枚選びトラッシュに置く。<br><br>【ライフバースト】：対戦相手のパワー8000以下のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-058", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-058.jpg", //SRC
		"紅魔　タウィル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏像：悪魔", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：対戦相手のアタックフェイズ開始時、対戦相手のシグニ１体を対象とし、ターン終了時まで、それは「【自】：このシグニがアタックしたとき、[無]を支払わないかぎり、このシグニをバニッシュする。」を得る。<br><br>【自】：対戦相手のターン終了時、このシグニを場からデッキの一番下に置いてもよい。そうした場合、カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-059", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-059.jpg", //SRC
		"羅踊石　ガーネット", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"赤", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニがダウン状態であるかぎり、このシグニのパワーは＋4000される。<br><br>【起】[ダウン]：対戦相手のエナゾーンからカード１枚を対象とし、それをトラッシュに置く。そうした場合、対戦相手は【エナチャージ１】をしてもよい。<br><br>【ライフバースト】：対戦相手のパワー12000以下のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-060", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-060.jpg", //SRC
		"轟砲　ランチャン", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏武：ウエポン", //CLASS
		"赤", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【起】[赤][赤] このシグニを場からトラッシュに置く：あなたの赤のシグニ１体を対象とし、ターン終了時まで、それは「【自】（ターン１）：このシグニがアタックしたとき、このシグニの正面のシグニ１体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-061", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-061.jpg", //SRC
		"楽天の共鳴", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"赤", //COLOR
		"", //LEVEL
		"《赤》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"あなたの《紅天姫 ヒラナ//メモリア》か《幻水 アキノ//メモリア》か《羅石 レイ//メモリア》か赤のシグニ１体を対象とし、ターン終了時まで、それは「【自】（ターン１）：このシグニがアタックしたとき、対戦相手のパワー5000以下のシグニ１体を対象とし、それをバニッシュする。」を得る。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-062", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-062.jpg", //SRC
		"コードメイズ　ウムル//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：迷宮", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"2000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【出】：あなたのデッキの一番上を見る。そのカードをデッキの一番下に置いてもよい。<br><br>【起】このシグニを場からデッキの一番下に置く：あなたのデッキの一番上を公開する。そのカードが《コードメイズ ウムル//メモリア》以外のシグニの場合、そのシグニを場に出してもよい。<br><br>【ライフバースト】；あなたのデッキの一番上からカードを３枚見る。その中からシグニ１枚を公開し手札に加えるか場に出し、残りを好きな順番でデッキの一番下に置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-063", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-063.jpg", //SRC
		"コードアート　ピルルク//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"青", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】手札からスペルを１枚捨てる：あなたのデッキの上からカードを３枚見る。その中から好きな枚数のカードを好きな順番でデッキの一番上に戻し、残りを好きな順番でデッキの一番下に置く。カードを１枚引く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-064", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-064.jpg", //SRC
		"蒼天　カナロア", //NAME
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
		"0", //LB
		"", //TEAM
		"【出】：あなたの場にいる青のルリグ１体につき対戦相手のシグニを１体まで対象とし、それらを凍結する。<br>（凍結されたシグニは次の自分のアップフェイズにアップしない）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-065", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-065.jpg", //SRC
		"羅石　レイ//メモリア", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏羅：宝石", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【常】：あなたの他の、赤のシグニと＜宝石＞のシグニのパワーを＋2000する。<br><br>【自】（ターン１）：あなたの他の＜宝石＞のシグニ１体が対戦相手のシグニの、【出】能力か【出】能力の効果の対象になったとき、対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-066", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-066.jpg", //SRC
		"羅原　ＶＯ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：原子", //CLASS
		"青", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：あなたのターン終了時、対戦相手のシグニ１体を対象とし、それらバニッシュする。<br><br>【ライフバースト】：あなたの手札が４枚以上ある場合、対戦相手のアップ状態のシグニ１体を対象とし、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-067", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-067.jpg", //SRC
		"羅淡菌　ミズカビ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：微菌", //CLASS
		"青", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：このシグニがバニッシュされたとき、以下の２つから１つを選ぶ。<br>①対戦相手のシグニ１体を対象とし、それをダウンし凍結する。<br>②対戦相手の手札を１枚見ないで選び、捨てさせる。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。対戦相手の手札を１枚見ないで選び、捨てさせる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-068", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-068.jpg", //SRC
		"FAILURE", //NAME
		"C", //RARE
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
		"このスペルはあなたの場に《羅星姫 タマゴ//メモリア》か《羅星 ノヴァ//メモリア》か《翠魔 バン//メモリア》があるか、対戦相手の手札が１枚以下の場合にしか使用できない。<br><br>対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、それをダウンし凍結する。対戦相手は手札を１枚捨てる。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-069", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-069.jpg", //SRC
		"翠魔　バン//メモリア", //NAME
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
		"【出】手札を２枚まで捨てる：この方法で捨てたカード１枚につき【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-070", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-070.jpg", //SRC
		"コードイート　ケバブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏械：調理", //CLASS
		"緑", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【起】手札からこのカードを捨てる：あなたの緑のシグニ１体を対象とし、次の対戦相手のターン終了時まで、それのパワーを＋5000する。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、[無][無]を払ってもよい。そうした場合、それをバニッシュする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-071", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-071.jpg", //SRC
		"羅踊植　ハイビス", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：植物", //CLASS
		"緑", //COLOR
		"2", //LEVEL
		"", //COST
		"", //LIMIT
		"8000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【常】：このシグニのパワーはあなたのエナゾーンにあるカードが持つ色の種類１つにつき＋1000される。（無色は色に含まれない）<br><br>【常】：対戦相手のターンの間、あなたのエナゾーンにあるカードが持つ色が合計３種類以上あるかぎり、このシグニは【シャドウ（レベル２以下のシグニ）】を得る。<br><br>【ライフバースト】：【エナチャージ１】をする。このターン、次にあなたがシグニによってダメージを受ける場合、代わりにダメージを受けない。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-072", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-072.jpg", //SRC
		"幻獣　緑子//メモリア", //NAME
		"R", //RARE
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
		"【自】：あなたのアタックフェイズ開始時、表記されているパワーよりパワーの高いあなたのシグニ１体を対象とし、[緑][緑][無]を支払ってもよい。そうした場合、ターン終了時まで、それは【ランサー】を得る。<br>（【ランサー】を持つシグニがバトルでシグニをバニッシュしたとき、対戦相手のライフクロスを１枚クラッシュする）<br><br>【出】エクシード３（あなたのルリグの下からカードを合計３枚ルリグトラッシュに置く）：次の対戦相手のターン終了時まで、このシグニのパワーを＋5000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-073", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-073.jpg", //SRC
		"幻獣　マンモ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏生：地獣", //CLASS
		"緑", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"10000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【自】：あなたのアタックフェイズ開始時、ターン終了時まで、あなたのすべてのシグニのパワーを＋3000する。<br><br>【自】（ターン２）：あなたのパワー10000以上の＜地獣＞のシグニ１体がアタックしたとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-074", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-074.jpg", //SRC
		"量産", //NAME
		"C", //RARE
		"スペル", //TYPE
		"", //CLASS
		"緑", //COLOR
		"", //LEVEL
		"《緑》×０", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"以下の２つから１つを選ぶ。<br>①あなたのエナゾーンから緑のシグニ１枚を対象とし、それを場に出す。<br>②あなたのエナゾーンから《コードラビリンス アト//メモリア》か《コードメイズ ウムル//メモリア》か《紅魔 タウィル//メモリア》１枚を対象とし、それを場に出す。次の対戦相手のターン終了時まで、それのパワーを＋3000する。<br><br>【ライフバースト】：【エナチャージ１】をする。その後、あなたのエナゾーンからシグニを１枚まで対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-075", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-075.jpg", //SRC
		"凶魔　ワイト", //NAME
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
		"【自】：あなたの効果によってこのカードが捨てられたとき、[無]を支払ってもよい。そうした場合、このカードをトラッシュから手札に加える。<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、手札を１枚捨ててもよい。そうした場合、ターン終了時まで、それのパワーを－12000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-076", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-076.jpg", //SRC
		"小装　テツアレイ", //NAME
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
		"1", //LB
		"", //TEAM
		"【常】：あなたの覚醒状態のシグニのパワーを＋3000する。<br><br>【自】：あなたのターン終了時、このシグニは覚醒する。（シグニは覚醒すると場にあるかぎり覚醒状態になる）<br><br>【ライフバースト】：対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-077", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-077.jpg", //SRC
		"コードアート　Ｓカイキャット", //NAME
		"R", //RARE
		"シグニ", //TYPE
		"奏械：電機", //CLASS
		"黒", //COLOR
		"1", //LEVEL
		"", //COST
		"", //LIMIT
		"3000", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"【出】手札からスペルを１枚捨てる：あなたのデッキの上からカードを３枚見る。その中からカードを１枚まで手札に加え、残りをトラッシュに置く。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-078", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-078.jpg", //SRC
		"凶魔　センベロ", //NAME
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
		"【自】：このシグニがコストか効果によって場からトラッシュに置かれたとき、【エナチャージ１】をする。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-079", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-079.jpg", //SRC
		"ツヴァイ＝マムシ", //NAME
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
		"【自】（ターン１）：あなたの間、コストが効果１つによってあなたのデッキからカードが合計２枚以上トラッシュに置かれたとき、対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－2000する。<br>（パワーが０以下のシグニはルールによってバニッシュされる）", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-080", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-080.jpg", //SRC
		"羅星　ハルッブ", //NAME
		"C", //RARE
		"シグニ", //TYPE
		"奏羅：宇宙", //CLASS
		"黒", //COLOR
		"3", //LEVEL
		"", //COST
		"", //LIMIT
		"12000", //POWER
		"", //COIN
		"", //TIMING
		"1", //LB
		"", //TEAM
		"【自】：対戦相手のアタックフェイズ開始時、ターン終了時まで、対戦相手のすべてのレベル１のシグニは「【自】：このシグニがアタックしたとき、ターン終了時まで、このシグニのパワーを－8000する。」を得る。<br><br>【ライフバースト】：どちらか１つを選ぶ。①対戦相手のシグニ１体を対象とし、ターン終了時まで、それのパワーを－8000する。②あなたのトラッシュから[ガード]を持たないシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-081", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-081.jpg", //SRC
		"インサイド・デビルズ", //NAME
		"R", //RARE
		"スペル", //TYPE
		"", //CLASS
		"黒", //COLOR
		"", //LEVEL
		"《黒》×１", //COST
		"", //LIMIT
		"", //POWER
		"", //COIN
		"", //TIMING
		"0", //LB
		"", //TEAM
		"以下の２つから１つを選ぶ。<br>①対戦相手のシグニ１体を対象とし、あなたの＜悪魔＞のシグニ１体を場からトラッシュに置く。そうした場合、ターン終了時まで、それのパワーを－10000する。<br>②あなたのトラッシュから＜悪魔＞のシグニ１枚を対象とし、それを手札に加える。", //JP_TEXT
		""	//TW_TEXT
		],
	[
		"WXDi-P08-082", //ID
		"https://www.takaratomy.co.jp/products/wixoss/img/card/WXDi/WXDi-P08-082.jpg", //SRC
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
	];