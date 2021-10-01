var listening_array = [
	["（一）他在做什么呢"],
	["（玛丽去找麦克，她问麦克的同屋爱德华，麦克在不在宿舍）"],
	["玛丽", "麦克在宿舍吗？", "Màikè zài sùshè ma?"],
	["爱德华", "在。", "Zài."],
	["玛丽", "他在做什么呢？", "Tā zài zuò shénme ne?"],
	["爱德华", "我出来的时候，他正在听音乐呢。", "Wǒ chūlái de shíhòu, tā zhèngzài tīng yīnyuè ne."],
	["（玛丽到麦克宿舍）"],
	["玛丽", "你是不是在听音乐呢？", "Nǐ shì bùshì zài tīng yīnyuè ne?"],
	["麦克", "没有，我正听课文录音呢。", "Méiyǒu, wǒ zhèng tīng kèwén lùyīn ne."],
	["玛丽", "下午你有事儿吗？", "Xiàwǔ nǐ yǒushì er ma?"],
	["麦克", "没有事儿。", "Méiyǒu shì er."],
	["玛丽", "我们一起去书店，好吗？", "Wǒmen yīqǐ qù shūdiàn, hǎo ma?"],
	["麦克", "你要买什么书？", "Nǐ yāomǎi shénme shū?"],
	["玛丽", "我想买一本《汉英词典》。", "Wǒ xiǎng mǎi yī běn “hàn yīng cídiǎn”."],
	["麦克", "咱们怎么去呢？", "Zánmen zěnme qù ne?"],
	["玛丽", "坐车去吧。", "Zuòchē qù ba."],
	["麦克", "今天星期六，坐车太挤，骑车去怎么样？", "Jīntiān xīngqíliù, zuòchē tài jǐ, qí chē qù zěnme yàng?"],
	["玛丽", "行。", "Xíng."],
	["（二）谁教你们语法"],
	["田芳", "玛丽，你们有几门课？", "Mǎlì, nǐmen yǒu jǐ mén kè?"],
	["玛丽", "现在只有四门课：综合课，口语课，听力课和阅读课。", "Xiànzài zhǐyǒu sì mén kè: zònghé kè, kǒuyǔ kè, tīnglì kè hé yuèdú kè."],
	["田芳", "有文化课和体育课吗？", "Yǒu wénhuà kè hé tǐyù kè ma?"],
	["玛丽", "没有。", "Méiyǒu."],
	["田芳", "林老师教你们什么？", "Lín lǎoshī jiào nǐmen shénme?"],
	["玛丽", "她教我们听力和阅读。", "Tā jiào wǒmen tīnglì hé yuèdú."],
	["田芳", "谁教你们综合科和口语课。", "Shéi jiào nǐmen zònghé kē hé kǒuyǔ kè."],
	["玛丽", "王老师。", "Wáng lǎoshī."]
];

var vocabulary_array = [
	['1.', '在', '副', 'zài', 'đang'],
	['2.', '出来', '动', 'chūlái', 'ra đây, ra'],
	['', '来', '动', 'lái', 'đến, tới'],
	['3.', '正在', '副', 'zhèngzài', 'đang'],
	['4.', '音乐', '名', 'yīnyuè', 'âm nhạc'],
	['5.', '没有', '副', 'méiyǒu', 'không có'],
	['6.', '正', '副', 'zhèng', 'chỉ (đang)'],
	['7.', '录音', '名, 动', 'lùyīn', 'ghi âm'],
	['8.', '事', '名', 'shì', 'sự việc, việc'],
	['9.', '书店', '名', 'shūdiàn', 'hiệu sách'],
	['10.', '想', '动', 'xiǎng', 'muốn'],
	['11.', '汉英', '', 'hàn yīng', 'Trung-Anh'],
	['12.', '坐', '动', 'zuò', 'ngồi'],
	['13.', '挤', '形, 动', 'jǐ', 'bóp, nặn, chen chúc, dồn đống'],
	['14.', '骑', '动', 'qí', 'cưỡi, đi'],
	['15.', '行', '动', 'xíng', 'được, không sao'],
	['16.', '门', '量', 'mén', 'môn (học)'],
	['17.', '课', '名', 'kè', 'bài, môn học'],
	['18.', '综合', '名', 'zònghé', 'tổng hợp'],
	['19.', '口语', '名', 'kǒuyǔ', 'khẩu ngữ'],
	['20.', '听力', '名', 'tīnglì', 'nghe hiểu'],
	['21.', '阅读', '名', 'yuèdú', 'đọc'],
	['22.', '文化', '名', 'wénhuà', 'văn hóa'],
	['23.', '体育', '名', 'tǐyù', 'thể dục'],
	['24.', '教', '动', 'jiào', 'dạy']
];
