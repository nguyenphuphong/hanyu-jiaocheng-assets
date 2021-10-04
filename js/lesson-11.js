var listening_array = [
	["（一）这位是王教授"],
	["（秘书给校长介绍王教授）"],
	["秘书", "我先介绍一下儿，这位是王教授。这是马校长。", "Wǒ xiān jièshào yīxià er, zhè wèi shì wáng jiàoshòu. Zhè shì mǎ xiàozhǎng.", "Trước tiên, tôi xin giới thiệu một chút. Vị này là thầy giáo Vương. Đây là hiệu trưởng Mã."],
	["校长", "欢迎您，王教授。", "Huānyíng nín, wáng jiàoshòu.", "Hoan nghênh ngài, thầy giáo Vương."],
	["王教授", "谢谢！", "Xièxiè!", "Cám ơn!"],
	["（二）我们都是留学生"],
	["麦克", "你是留学生吗？", "Nǐ shì liúxuéshēng ma?", "Bạn là du học sinh à?"],
	["玛丽", "是。", "Shì.", "Ừm."],
	["麦克", "罗兰也是留学生吗？", "Luólán yěshì liúxuéshēng ma?", "Roland cũng là du học sinh à?"],
	["玛丽", "她也是留学生。我们都是留学生。", "Tā yěshì liúxuéshēng. Wǒmen dōu shì liúxuéshēng.", "Anh ấy cũng là du học sinh. Chúng tôi đều là du học sinh."],
	["麦克", "张东和田芳也都是留学生吗？", "Zhāng dōng hé tiánfāng yě dūo shì liúxuéshēng ma?", "Trương Đông và Điền Phương cũng đều là du học sinh à?"],
	["玛丽", "不，他们俩不是留学生。他们都是中国学生。", "Bù, tāmen liǎ bùshì liúxuéshēng. Tāmen dōu shì zhōngguó xuéshēng.", "Không, cả hai bọn họ đều không phải du học sinh. Bọn học đều là học sinh người Trung Quốc."],
	["（三）你也是中国人吗"],
	["爱德华", "他是中国人吗？", "Tā shì zhōngguó rén ma?", "Anh ấy là người Trung Quốc à?"],
	["李昌浩", "是。", "Shì.", "Ừm."],
	["爱德华", "你也是中国人吗？", "Nǐ yěshì zhōngguó rén ma?", "Bạn cũng là người Trung Quốc à?"],
	["李昌浩", "不是。我是韩国人。", "Bùshì. Wǒ shì hánguó rén.", "Không phải. Tôi là người Hàn Quốc."],
	["爱德华", "对不起。", "Duìbùqǐ.", "Xin lỗi."],
	["李昌浩", "没什么。", "Méishénme.", "Không có gì."]
];

var vocabulary_array = [
	['1.', '秘书', '名', 'mìshū', 'thư ký'],
    ['2.', '先', '副', 'xiān', 'trước, trước tiên'],
    ['3.', '介绍', '动', 'jièshào', 'giới thiệu'],
    ['4.', '一下儿', '数量', 'yīxià er', 'một chút, một tí'],
    ['5.', '位', '量', 'wèi', 'vị (chỉ người)'],
    ['6.', '教授', '名', 'jiàoshòu', 'giáo sư'],
    ['7.', '校长', '名', 'xiàozhǎng', 'hiệu trưởng'],
    ['8.', '欢迎', '动', 'huānyíng', 'hoan nghênh'],
    ['9.', '留学生', '名', 'liúxuéshēng', 'du học sinh'],
    ['', '留学', '动', 'liúxué', 'du học'],
    ['10.', '也', '副', 'yě', 'cũng'],
    ['11.', '我们', '代','wǒmen', 'chúng tôi'],
    ['', '你们', '代', 'nǐmen', 'các bạn, các anh, các chị'],
    ['', '他们', '代', 'tāmen', 'bọn họ'],
    ['12.', '都', '副', 'dōu', 'đều'],
    ['13.', '和', '连', 'hé', 'và'],
    ['14.', '俩', '数', 'liǎ', 'hai'],
    ['15.', '学生', '名', 'xuéshēng', 'học sinh'],
    ['16.', '没什么', '', 'méishénme', 'không có gì']
];

var name_array = [
	["马", "mǎ", "Họ Mã"],
	["田芳", "tián fāng", "Điền Phương"],
	["罗兰", "luólán", "Roland"],
	["爱德华", "àidéhuá", "Edward"]
];
