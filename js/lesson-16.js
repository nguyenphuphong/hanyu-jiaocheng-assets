var listening_array = [
	["（一）你常去图书馆吗"],
	["玛丽", "我现在去图书馆，你跟我一起去，好吗？", "Wǒ xiànzài qù túshū guǎn, nǐ gēn wǒ yīqǐ qù, hǎo ma?", "Bây giờ tôi đi thư viện, bạn đi cùng tôi, được không?"],
	["麦克", "好，咱们走吧。… 你常去图书馆吗？", "Hǎo, zánmen zǒu ba.… Nǐ cháng qù túshū guǎn ma?", "Được, chúng ta đi nào. Bạn thường đi thư viện không?"],
	["玛丽", "常去。我常借书，也常在那儿看书。你呢？常去吗？", "Cháng qù. Wǒ cháng jiè shū, yě cháng zài nà'er kànshū. Nǐ ne? Cháng qù ma?", "Thường đi. Tôi thường mượn sách, cũng thường đọc sách tại đó. Bạn thì sao? thường đi không?"],
	["麦克", "我也常去。有时候借书，有时候上网查资料，但不常在那儿看书。我总在宿舍看书。", "Wǒ yě cháng qù. Yǒu shíhòu jiè shū, yǒu shíhòu shàngwǎng chá zīliào, dàn bù cháng zài nà'er kànshū. Wǒ zǒng zài sùshè kànshū.", "Tôi cũng thường đi. Cũng thỉnh thoảng mượn sách, nhưng không đọc sách tại đó. Tôi luôn luôn đọc sách tại kí túc xá."],
	["玛丽", "你的宿舍安静吗？", "Nǐ de sùshè ānjìng ma?", "Ký túc xá của bạn yên tĩnh không?"],
	["麦克", "很安静。", "Hěn ānjìng.", "Rất yên tĩnh."],
	["（二）晚上你常做什么"],
	["A", "晚上你常做什么？", "Wǎnshàng nǐ cháng zuò shénme?", "Buổi tối, bạn thường làm gì?"],
	["B", "复习课文，预习生词，或者做练习。有时候上网跟朋友聊天儿或者收发伊妹儿。", "Fùxí kèwén, yùxí shēngcí, huòzhě zuò liànxí. Yǒu shíhòu shàngwǎng gēn péngyǒu liáotiān er huòzhě shōufā yī mèi er.", "Ôn tập bài đọc, chuẩn bị từ mới, hoặc là làm bài tập. Cũng có lúc lên mạng trò chuyện cùng bạn bè hoặc là duyệt email."],
	["A", "我也是，我还常看中文电影和电视剧的DVD。你常看吗？", "Wǒ yěshì, wǒ hái cháng kàn zhòng wén diànyǐng hé diànshìjù de DVD. Nǐ cháng kàn ma?", "Tôi cũng thê, tôi vẫn thường xem DVD phim lẽ và phim bộ Trung Quốc. Bạn có thường xem không?"],
	["B", "我很少看。", "Wǒ hěn shǎo kàn.", "Tôi hiếm khi xem."],
	["A", "星期六和星期日你做什么？", "Xīngqíliù hé xīngqírì nǐ zuò shénme?", "Thứ bảy và chủ nhật bạn làm gì?"],
	["B", "有时候在宿舍休息，有时候跟朋友一起去公园玩儿或者去超市买东西。", "Yǒu shíhòu zài sùshè xiūxí, yǒu shíhòu gēn péngyǒu yīqǐ qù gōngyuán wán er huòzhě qù chāoshì mǎi dōngxī.", "Đôi lúc nghỉ ngơi tại kí túc xác, đôi lúc cùng bạn bè đi công viên chơi hoặc là đi siêu thị mua đồ."]
];

var vocabulary_array = [
	['1.', '现在', '名', 'xiànzài', 'bây giờ'],
    ['2.', '跟', '介, 动', 'gēn', 'cùng, với'],
    ['3.', '一起', '副', 'yīqǐ', 'cùng nhau'],
    ['4.', '咱们', '代', 'zánmen', 'chúng tôi'],
    ['5.', '走', '动', 'zǒu', 'đi'],
    ['6.', '常（常）', '副', 'cháng (cháng)', 'thường, thông thường'],
    ['7.', '有时候', '', 'yǒu shíhòu', 'có lúc, có khi, thỉnh thoảng'],
    ['', '时候', '名', 'shíhòu', 'thời gian, khi, lúc'],
    ['8.', '借', '动', 'jiè', 'vay, mượn'],
    ['9.', '上网', '', 'shàngwǎng', 'lên mạng'],
    ['', '网', '名', 'wǎng', 'mạng internet'],
    ['10.', '查', '动', 'chá', 'kiểm tra, tìm kiếm'],
    ['11.', '资料', '名', 'zīliào', 'tư liệu, tài liệu'],
    ['12.', '总（是）', '副', 'zǒng (shì)', 'tổng, luôn luôn'],
    ['13.', '安静', '形', 'ānjìng', 'yên tĩnh, yên lặng'],
    ['14.', '晚上', '名', 'wǎnshàng', 'buổi tối'],
    ['15.', '复习', '动', 'fùxí', 'ôn tập'],
    ['16.', '课文', '名', 'kèwén', 'bài khóa, bài đọc'],
    ['17.', '预习', '动', 'yùxí', 'chuẩn bị bài, xen trước bài'],
    ['18.', '生词', '名', 'shēngcí', 'từ mới'],
    ['19.', '或者', '连', 'huòzhě', 'hoặc, hoặc là'],
    ['20.', '练习', '动, 名', 'liànxí', 'luyện tập'],
    ['21.', '聊天儿', '', 'liáotiān er', 'trò chuyện, tán chuyện'],
    ['22.', '收发', '动', 'shōufā', 'nhận và chuyện đi'],
    ['', '收', '动', 'shōu', 'thu, nhận'],
    ['', '发', '动', 'fā', 'gửi, chuyển đi'],
    ['23.', '伊妹儿', '名', 'yī mèi er', 'email'],
    ['24.', '电影', '名', 'diànyǐng', 'điện ảnh, phim'],
    ['25.', '电视剧', '名', 'diànshìjù', 'phim truyền hình nhiều tập'],
    ['', '电视', '名', 'diànshì', 'TV'],
    ['26.', '休息', '动', 'xiūxí', 'nghỉ ngơi'],
    ['27.', '宿舍', '名', 'sùshè', 'kí túc xá'],
    ['28.', '公园', '名', 'gōngyuán', 'công viên'],
    ['29.', '超市', '名', 'chāoshì', 'siêu thị'],
    ['30.', '东西', '名', 'dōngxī', 'đồ vật']
];
