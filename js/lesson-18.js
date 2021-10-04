var listening_array = [
	["（一）我去邮局寄包裹"],
	["（田芳在楼门口遇见张东）"],
	["田芳", "张东，你要去哪儿？", "Zhāng dōng, nǐ yào qù nǎ'er?", "Trương Đông, bạn muốn đi đâu?"],
	["张东", "我去邮局寄包裹，顺便去书店买一本书。你去吗？", "Wǒ qù yóujú jì bāoguǒ, shùnbiàn qù shūdiàn mǎi yī běn shū. Nǐ qù ma?", "Tôi đi bưu cục để gửi bưu phẩm, nhân tiện đi nhà sách mua một cuốn sách. Bạn đi không?"],
	["田芳", "不去，一会儿玛丽来找我。你顺便替我买几张邮票和一份青年报吧。", "Bù qù, yīhuǐ'er mǎlì lái zhǎo wǒ. Nǐ shùnbiàn tì wǒ mǎi jǐ zhāng yóupiào hé yī fèn qīngnián bào ba.", "Không đi, lát nữa Mary đến tìm tôi. Bạn tiện thể thay tôi mua một vài con tem và một tờ báo thanh niên nhé."],
	["张东", "好的。", "Hǎo de.", "Được thôi."],
	["田芳", "我给你拿钱。", "Wǒ gěi nǐ ná qián.", "Tôi đưa bạn cầm tiền."],
	["张东", "不用，先用我的钱买吧。", "Bùyòng, xiān yòng wǒ de qián mǎi ba.", "Không cần, dùng tiền của tôi mua trước nhé."],
	["（二）外贸代表团明天去上海参观"],
	["（珍妮来宿舍找玛丽）"],
	["珍妮", "玛丽，我明天去上海。", "Mǎlì, wǒ míngtiān qù shànghǎi.", "Mary, ngày mai tôi đi Thượng Hải."],
	["玛丽", "你去上海旅行吗？", "Nǐ qù shànghǎi lǚxíng ma?", "Bạn đi Thượng Hải du lịch à?"],
	["珍妮", "不，明天一个外贸代表团去上海参观，我去给他们当翻译。", "Bù, míngtiān yīgè wàimào dàibiǎo tuán qù shànghǎi cānguān, wǒ qù gěi tāmen dāng fānyì.", "Không, ngày mai một đoàn đại biểu ngoại thương đi Thượng Hải tham quan, tôi đi với bọn họ làm phiên dịch."],
	["玛丽", "坐飞机去还是坐火车去？", "Zuò fēijī qù háishì zuò huǒchē qù?", "Đi bằng tàu hỏa hay là đi bằng máy bay?"],
	["珍妮", "坐飞机去。", "Zuò fēijī qù.", "Đi bằng máy bay."],
	["玛丽", "什么时候回来？", "Shénme shíhòu huílái?", "Khi nào thì trở về?"],
	["珍妮", "八号回来。替我办一件事，行吗？", "Bā hào huílái. Tì wǒ bàn yī jiàn shì, xíng ma?", "Trở lại vào mùng 8. Thay tôi làm một việc, được không?"],
	["玛丽", "什么事？你说吧。", "Shénme shì? Nǐ shuō ba.", "Việc gì? Bạn nói đi."],
	["珍妮", "帮我浇一下儿化。", "Bāng wǒ jiāo yīxià ér huà.", "Giúp tôi tưới hoa một lúc."],
	["玛丽", "行，没问题。", "Xíng, méi wèntí.", "Được, không vấn đề."]
];

var vocabulary_array = [
	['1.', '包裹', '名', 'bāoguǒ', 'bưu phẩm, bưu kiện'],
	['2.', '顺便', '副', 'shùnbiàn', 'nhân tiện, tiện thể'],
	['3.', '替', '介', 'tì', 'thế, thay thế'],
	['4.', '邮票', '名', 'yóupiào', 'tem thư'],
	['5.', '份', '量', 'fèn', 'phần, số, bản (chỉ báo chí, tài liệu, ...)'],
	['6.', '青年', '名', 'qīngnián', 'thanh niên'],
	['7.', '报', '名', 'bào', 'báo'],
	['', '报纸', '名', 'bàozhǐ', 'báo chí'],
	['8.', '拿', '动', 'ná', 'cầm, lấy, nhặt'],
	['9.', '不用', '副', 'bùyòng', 'không cần, không dùng'],
	['', '用', '动', 'yòng', 'dùng'],
	['10.', '旅行', '动', 'lǚxíng', 'du lịch'],
	['11.', '代表', '名, 动', 'dàibiǎo', 'đại biểu, đại diện'],
	['12.', '团', '名, 量', 'tuán', 'đoàn'],
	['13.', '参观', '动', 'cānguān', 'tham quan'],
	['14.', '当', '动', 'dāng', 'làm'],
	['15.', '翻译', '名, 动', 'fānyì', 'phiên dịch, dịch'],
	['16.', '飞机', '名', 'fēijī', 'máy bay'],
	['', '飞', '动', 'fēi', 'bay'],
	['17.', '火车', '名', 'huǒchē', 'tàu hỏa'],
	['18.', '回来', '动', 'huílái', 'về, trở về'],
	['19.', '办', '动', 'bàn', 'làm, quản lý'],
	['20.', '帮', '动', 'bāng', 'giúp đỡ'],
	['21.', '浇', '动', 'jiāo', 'tưới, dội, đổ'],
	['22.', '花', '名', 'huā', 'hoa'],
	['23.', '没问题', '', 'méi wèntí', 'không việc gì, không sao'],
	['', '问题', '名', 'wèntí', 'vấn đề, câu hỏi']
];

var name_array = [
	["上海", "shànghǎi", "Thượng Hải"],
	["珍妮", "zhēnnī", "Janet"]
];
