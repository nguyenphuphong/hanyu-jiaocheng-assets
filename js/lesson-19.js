var listening_array = [
	["（一）可以试试吗"],
	["（玛丽在商店买羽绒服）"],
	["玛丽", "我看看羽绒服。", "Wǒ kàn kàn yǔróngfú."],
	["售货员", "你看看这件怎么样？又好又便宜。", "Nǐ kàn kàn zhè jiàn zěnme yàng? Yòu hǎo yòu piányí."],
	["玛丽", "这件有一点儿长。有短一点儿的吗？", "Zhè jiàn yǒu yīdiǎn er zhǎng. Yǒu duǎn yīdiǎn er de ma?"],
	["售货员", "你要深颜色的还是要浅颜色的？", "Nǐ yào shēn yánsè de háishì yào qiǎn yánsè de?"],
	["玛丽", "浅颜色的。我试试可以吗？", "Qiǎn yánsè de. Wǒ shì shì kěyǐ ma?"],
	["售货员", "当然可以。", "Dāngrán kěyǐ."],
	["玛丽", "这件太肥了，有没有瘦一点儿的？", "Zhè jiàn tài féile, yǒu méiyǒu shòu yīdiǎn er de?"],
	["售货员", "你再试试这一件。", "Nǐ zài shì shì zhè yī jiàn."],
	["玛丽", "这件不大不小，正合适，颜色也很好看。", "Zhè jiàn bù dà bù xiǎo, zhèng héshì, yánsè yě hěn hǎokàn."],
	["（二）便宜一点儿吧"],
	["玛丽", "这种羽绒服怎么买？", "Zhè zhǒng yǔróngfú zěnme mǎi?"],
	["售货员", "一件四百块。", "Yī jiàn sìbǎi kuài."],
	["玛丽", "太贵了。便宜一点儿吧，二百怎么样？", "Tài guìle. Piányí yīdiǎn er ba, èrbǎi zěnme yàng?"],
	["售货员", "二百台少了，不买。可以打八折，你给三百二把。", "Èrbǎi tái shǎole, bú mǎi. Kěyǐ dǎ bā zhé, nǐ gěi sānbǎi èr bǎ."],
	["玛丽", "三百行不行？", "Sānbǎi xíng bùxíng?"],
	["售货员", "给你吧。", "Gěi nǐ ba."]
];

var vocabulary_array = [
	['1.', '羽绒服', '名', 'yǔróngfú', 'áo lông vũ'],
	['2.', '又…又…', '', 'yòu…yòu…', 'vừa ... vừa ...'],
	['3.', '便宜', '形', 'piányí', 'rẻ'],
	['4.', '长', '形', 'zhǎng', 'dài'],
	['5.', '一点儿', '数量', 'yīdiǎn er', 'một chút'],
	['6.', '短', '形', 'duǎn', 'ngắn'],
	['7.', '深', '形', 'shēn', 'đậm, sâu'],
	['8.', '浅', '形', 'qiǎn', 'nhạt, cạn'],
	['9.', '试', '动', 'shì', 'thử'],
	['10.', '可以', '', 'kěyǐ', 'có thể'],
	['11.', '当然', '副', 'dāngrán', 'tất nhiên, dĩ nhiên'],
	['12.', '肥', '形', 'féi', 'to, béo, rộng'],
	['', '胖', '形', 'pàng', 'béo, mập'],
	['13', '瘦', '形', 'shòu', 'nhỏ, gầy, chật, hẹp'],
	['14', '合适', '形', 'héshì', 'thích hợp, vừa vặn'],
	['15', '好看', '形', 'hǎokàn', 'đẹp, xinh, ưa nhìn'],
	['16', '种', '量', 'zhǒng', 'chủng, loại'],
	['17', '打折', '', 'dǎzhé', 'giảm giá, chiết khấu']
];
