/* parse_card.js - parse one takaratomy card_detail page into a cardData row.
 * Shared by scrape_allstar.js (Node). No dependencies. */
(function (root) {
	function z2h(s) {
		return s
			.replace(/[０-９Ａ-Ｚａ-ｚ＋－＝！？＆～／（）]/g, function (c) {
				return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
			})
			.replace(/　/g, ' ')
			.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
	}
	function strip(s) { return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }
	function dash(s) { return (s === '-' || s === '－') ? '' : s; }
	// <img ... alt="X"> -> X  (ライフバースト -> 【ライフバースト】)
	function iconsToText(html) {
		return html.replace(/<img[^>]*?alt="([^"]*)"[^>]*>/g, function (m, alt) {
			if (alt === 'ライフバースト') return '【ライフバースト】';
			return alt;
		});
	}
	function parseCardDetail(html) {
		var a = html.indexOf('class="cardDetail"');
		if (a < 0) return null;
		var body = html.slice(a);
		var faq = body.indexOf('class="cardFaq"');
		if (faq > 0) body = body.slice(0, faq);

		var g = function (re) { var m = body.match(re); return m ? m[1] : ''; };
		var id = strip(g(/<p class="cardNum">([\s\S]*?)<\/p>/));
		var nameHtml = g(/<p class="cardName">([\s\S]*?)<\/p>/);
		var name = z2h(strip(nameHtml.split(/<br/)[0])).replace(/\s+/g, ' ').trim();
		var rare = strip(g(/<div class="cardRarity">([\s\S]*?)<\/div>/));
		var src = g(/<div class="cardImg">[\s\S]*?<img src="([^"]+)"/);

		// <dl> fields
		var fields = {};
		var dl = g(/<dl>([\s\S]*?)<\/dl>/);
		var re = /<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g, m;
		while ((m = re.exec(dl))) {
			var key = strip(m[1]);
			var v = m[2].replace(/<br\s*\/?>\s*/g, '\n');
			v = iconsToText(v);
			v = z2h(strip(v.replace(/\n/g, '\u0001'))).replace(/\u0001\s*/g, '\n').trim();
			fields[key] = dash(v);
		}
		var kind = (fields['カード種類'] || '').replace(/\s*\n\s*/g, ' ');
		var cls = (fields['カードタイプ'] || '').replace(/\s*\n\s*：/g, '：').replace(/\s*\n\s*/g, '/');
		var isLrig = kind === 'ルリグ';
		var cost = isLrig ? (fields['グロウコスト'] || '') : (fields['コスト'] || '');
		cost = cost.replace(/\n/g, '');
		var timing = (fields['使用タイミング'] || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean).join(',');

		// skills
		var skills = [], hasLB = false;
		var sre = /<div class="cardSkill">([\s\S]*?)<\/div>/g;
		while ((m = sre.exec(body))) {
			var s = m[1];
			if (/icon_txt_burst/.test(s)) hasLB = true;
			s = iconsToText(s);
			s = s.replace(/<br\s*\/?>\s*/g, '\u0001');
			s = z2h(strip(s)).replace(/\s*\u0001\s*/g, '<br>').trim();
			if (s) skills.push(s);
		}
		var lb = '';
		if (kind === 'シグニ' || kind === 'スペル') lb = hasLB ? '1' : '0';

		var team = fields['チーム'] || fields['限定条件'] || '';
		var story = fields['ストーリー'] || '';
		var format = fields['フォーマット'] || '';

		return {
			row: [
				id, src, name, rare, kind, cls,
				fields['色'] || '', fields['レベル'] || '', cost,
				fields['リミット'] || '', fields['パワー'] || '', fields['コイン'] || '',
				timing, lb, team, story, skills.join('<br><br>'), '', ''
			],
			format: format,
			guard: fields['ガード'] || ''
		};
	}
	root.parseCardDetail = parseCardDetail;
	root.z2h = z2h;
	if (typeof module !== 'undefined') module.exports = { parseCardDetail: parseCardDetail, z2h: z2h };
})(typeof window !== 'undefined' ? window : this);
