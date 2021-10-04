var listening_array = [
	["（一）您有体好吗"],
	["关经理", "王老师，好久不见了。", "Wáng lǎoshī, hǎojiǔ bùjiànle.", "Thầy giáo Vương, đã lâu không gặp."],
	["王老师", "啊！关经理，欢迎，欢迎！", "A! Guān jīnglǐ, huānyíng, huānyíng!", "A! Giám đốc Quan, hoan nghênh, hoan nghênh!"],
	["关经理", "你身体好吗？", "Nǐ shēntǐ hǎo ma?", "Bạn sức khỏe tốt chứ?"],
	["王老师", "很好。您身体怎么样？", "Hěn hǎo. Nín shēntǐ zěnme yàng?", "Rất tốt. Sức khỏe của ngài như thế nào?"],
	["关经理", "马马虎虎。", "Mǎmǎhǔhǔ.", "Bình thường!"],
	["王老师", "最近工作忙不忙？", "Zuìjìn gōngzuò máng bù máng?", "Gần đây công việc bận hay không?"],
	["关经理", "不太忙，您呢？", "Bù tài máng, nín ne?", "Không bận lắm, ngài thì sao?"],
	["王老师", "刚开学，有点儿忙。喝点儿什么？茶还是咖啡？", "Gāng kāixué, yǒudiǎn er máng. Hē diǎn er shénme? Chá háishì kāfēi?", "Vừa khai giảng, có một chút bận. Uống một chút gì không? Trà hay là cà phê."],
	["关经理", "喝杯茶吧！", "Hē bēi chá bā!", "Uống một cốc trà."],
	["（二）你的自行车是新的还是旧的"],
	["（楼下的自行车很多，下课后，田芳找自行车）"],
	["田芳", "我的车呢？", "Wǒ de chē ne?", "Xe của tôi ở đâu nhĩ?"],
	["张东", "你的车是什么颜色的？", "Nǐ de chē shì shénme yánsè de?", "Xe của bạn là chiếc màu gì?"],
	["田芳", "蓝的。", "Lán de.", "Chiếc màu xanh dương."],
	["张东", "是新的还是旧的？", "Shì xīn de háishì jiù de?.", "Là chiếc mới hay là chiếc củ?"],
	["田芳", "新的。", "Xīn de.", "Chiếc mới."],
	["张东", "那辆蓝的是不是你的？", "Nà liàng lán de shì bùshì nǐ de?", "Chiếc màu xanh dương kia có phải của bạn hay không?"],
	["田芳", "哪辆？", "Nǎ liàng?", "Chiếc nào?"],
	["张东", "那辆。", "Nà liàng.", "Chiếc đó."],
	["田芳", "不是。啊，我的车在那儿呢。", "Bùshì. A, wǒ de chē zài nà'er ne.", "Không phải. A, xe của tôi ở đây này."]
];

var vocabulary_array = [
	['1.', '经理', '名', 'jīnglǐ', 'giám đốc'],
    ['2.', '好久', '名', 'hǎojiǔ', 'đã lâu, rất lâu rồi'],
    ['3.', '啊', '叹', 'a', 'thán từ thể hiện sự vừa nhận ra một điều gì đó'],
    ['4.', '马马虎虎', '形', 'mǎmǎhǔhǔ', 'tàm tạm, bình thường'],
    ['5.', '最近', '名', 'zuìjìn', 'gần đây, sắp tới'],
    ['6.', '刚', '副', 'gāng', 'vừa, mới'],
    ['7.', '开学', '', 'kāixué', 'khai giảng'],
    ['', '开', '动', 'kāi', 'bắt đầu, mỡ'],
    ['8.', '有（一）点儿', '', 'yǒu (yī) diǎn er', 'một chút, hơi'],
    ['', '点儿', '量', 'diǎn er', 'một chút'],
    ['9.', '还是', '连', 'háishì', 'hay là'],
    ['10.', '咖啡', '名', 'kāfēi', 'cà phê'],
    ['11.', '杯', '名', 'bēi', 'cốc'],
    ['12.', '车', '名', 'chē', 'xe'],
    ['', '自行车', '名', 'zìxíngchē', 'xe đạp'],
    ['', '汽车', '名', 'qìchē', 'xe bus'],
    ['', '摩托车', '名', 'mótuō chē', 'xe máy'],
    ['', '出租车', '名', 'chūzū chē', 'xe taxi'],
    ['13.', '颜色', '名', 'yánsè', 'màu sắc'],
    ['14.', '蓝', '形', 'lán', 'màu xanh dương'],
    ['15.', '辆', '量', 'liàng', 'chiếc, cái xe (loại xe)']
];

var name_array = [
	["关", "guān", "Họ Quan"]
];
