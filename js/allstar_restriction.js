/* ALLSTAR 繭の部屋 (official: https://www.takaratomy.co.jp/products/wixoss/faq/mayu_room/)
 * 使用禁止カード  : library/rule/150821   (latest 2021-05-07)
 * 同時使用制限カード: library/rule/concurrent (latest 2024-07-22)
 * Names are matched after NFKC + whitespace removal, so full/half width does not matter.
 * concurrent: cards in different groups of the same rule cannot be in one deck together. */
var allstarRestriction = {
	updated: "2024-07-22",
	banned: [
		"破戒の轟牙 シヴァ",
		"幻水 ヒナニギス",
		"幻水 シィラ",
		"水流の打落 *マーライ*",
		"復活",
		"羅星 ≡テンドウ≡",
		"ＤＹＮＡＭＩＴＥ",
		"修復",
		"コードアート Ｃ・Ｌ",
		"ＲＡＩＮＹ",
		"四面楚火",
		"サーバントＺ",
		"大器晩成",
		"ノー・ゲイン"
	],
	concurrent: [
		{ title: "《創鍵の巫女 マユ》と《メル＝マティーニ》《真情の記憶 リル》", groups: [["創鍵の巫女 マユ"], ["メル＝マティーニ", "真情の記憶 リル"]] },
		{ title: "《ホーリー・グランドスラム》と《ビカム・ユー》《四炎楚歌》", groups: [["ホーリー・グランドスラム"], ["ビカム・ユー", "四炎楚歌"]] },
		{ title: "《糾う者》と《幻竜 エキドーナ》", groups: [["糾う者"], ["幻竜 エキドーナ"]] },
		{ title: "《コードイート トンカツ》と《幻怪姫 ユニカーン》", groups: [["コードイート トンカツ"], ["幻怪姫 ユニカーン"]] },
		{ title: "《創世の巫女 マユ》と《真名の巫女 マユ》と《再会の巫女 マユ》", groups: [["創世の巫女 マユ"], ["真名の巫女 マユ"], ["再会の巫女 マユ"]] },
		{ title: "《ＣＲＹＳＴＡＬ ＳＥＡＬ》と《コードハート Ｍ・Ｐ・Ｐ》", groups: [["ＣＲＹＳＴＡＬ ＳＥＡＬ"], ["コードハート Ｍ・Ｐ・Ｐ"]] },
		{ title: "《台風一過》と《コードアンシエンツ ヘルボロス》", groups: [["台風一過"], ["コードアンシエンツ ヘルボロス"]] },
		{ title: "《烈情の割裂》《スピリット・サルベージ》と《ロック・ユー》", groups: [["烈情の割裂", "スピリット・サルベージ"], ["ロック・ユー"]] },
		{ title: "《羅原 Ａｒ》と《ＭＡＧＩＣ ＨＡＮＤ》", groups: [["羅原 Ａｒ"], ["ＭＡＧＩＣ ＨＡＮＤ"]] },
		{ title: "《レゾナンス・マーチ》《レゾナンス》と《コードブルーハート Ｖ・＠・Ｃ》", groups: [["レゾナンス・マーチ", "レゾナンス"], ["コードブルーハート Ｖ・＠・Ｃ"]] }
	]
};
