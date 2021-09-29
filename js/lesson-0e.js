var abbreviation_array = [
	[
		[30, "1."], [75, "名词"], [150, "míngcí"], [75, "( 名 )"], ["200 vietnamese", "danh từ"]
	],
	[
		[30, "2."], [75, "代词"], [150, "dàicí"], [75, "( 代 )"], ["200 vietnamese", "đại từ"]
	],
	[
		[30, "3."], [75, "动词"], [150, "dòngcí"], [75, "( 动 )"], ["200 vietnamese", "động từ"]
	],
	[
		[30, "&nbsp;"], [75, "离合词"], [150, "líhécí"], [75, "&nbsp;"], ["200 vietnamese", "động từ ly hợp"]
	],
	[
		[30, "4."], [75, "形容词"], [150, "xíngróngcí"], [75, "( 形 )"], ["200 vietnamese", "tính từ (hình dung từ)"]
	],
	[
		[30, "5."], [75, "数词"], [150, "shùcí"], [75, "( 数 )"], ["200 vietnamese", "số từ"]
	],
	[
		[30, "6."], [75, "量词"], [150, "liàngcí"], [75, "( 量 )"], ["200 vietnamese", "lượng từ"]
	],
	[
		[30, "&nbsp;"], [75, "数量词"], [150, "shùliàngcí"], [75, "( 数量 )"], ["200 vietnamese", "số lượng từ"]
	],
	[
		[30, "7."], [75, "副词"], [150, "fùcí"], [75, "( 副 )"], ["200 vietnamese", "phó từ"]
	],
	[
		[30, "8."], [75, "介词"], [150, "jiècí"], [75, "( 介 )"], ["200 vietnamese", "giới từ"]
	],
	[
		[30, "9."], [75, "连词"], [150, "liáncí"], [75, "( 连 )"], ["200 vietnamese", "liên từ"]
	],
	[
		[30, "10."], [75, "助词"], [150, "zhùcí"], [75, "( 助 )"], ["200 vietnamese", "trợ từ"]
	],
	[
		[30, "&nbsp;"], [75, "动泰助词"], [150, "dòngtài zhùcí"], [75, "&nbsp;"], ["200 vietnamese", "trợ từ động thái"]
	],
	[
		[30, "&nbsp;"], [75, "结构助词"], [150, "jiégòu zhùcí"], [75, "&nbsp;"], ["200 vietnamese", "trợ từ kết cấu"]
	],
	[
		[30, "11."], [75, "叹词"], [150, "tàncí"], [75, "( 叹 )"], ["200 vietnamese", "thán từ"]
	],
	[
		[30, "12."], [75, "象声词"], [150, "xiàngshēngcí"], [75, "( 象 )"], ["200 vietnamese", "từ tượng thanh"]
	],
	[
		[30, "13."], [75, "语气词"], [150, "yǔqì cí"], [75, "( 语气 )"], ["200 vietnamese", "từ ngữ khí"]
	]
];

var abbreviation_explaination_array = [
	"<b>■ Danh từ</b> dùng để biểu thị người hoặc sự vật, thời gian địa điểm. Trong câu danh từ chủ yếu đảm nhận vai trò chủ ngữ. Danh từ được chia thành 4 loại sau: <ul><li>Danh từ chỉ người và vật:  <span class=\"chinese\">猫、狗</span></li><li>Danh từ chỉ thời gian: <span class=\"chinese\">春天、夏天</span></li><li>Danh từ chỉ địa điểm:  <span class=\"chinese\">学校</span></li><li>Danh từ chỉ phương vị: <span class=\"chinese\">上、下</span></li></ul>",
	"<b>■ Đại từ</b> là các loại từ thay thế cho các từ ngữ trong câu. Gồm ba loại đại từ chính: đại từ nhân xưng, đại từ chỉ thị và đại từ nghi vấn. Đại từ gồm 3 loại:<ul><li>Đại từ chỉ người: <span class=\"chinese\">我们、他们</span></li><li>Đại từ nghi vấn: <span class=\"chinese\">谁、什么、哪</span></li><li>Đại từ chỉ sự: <span class=\"chinese\">这、那、这儿</span></li></ul>",
	"<b>■ Động từ</b> là những từ chỉ động tác, hành vi, hoạt động tâm lý hoặc biểu thị sự tồn tại, thay đổi, biến mất, … Động từ gồm 7 loại:<ul><li>Động từ chỉ động tác, hành vi: <span class=\"chinese\">跳、坐</span></li><li>Động từ chỉ hoạt động tâm lý: <span class=\"chinese\">喜欢、讨厌</span></li><li>Động từ chỉ sự tồn tại, thay đổi, biến mất: <span class=\"chinese\">在、消亡</span></li><li>Động từ phán đoán: <span class=\"chinese\">是</span></li><li>Động từ năng nguyện: <span class=\"chinese\">能、 会</span></li><li>Động từ xu hướng: <span class=\"chinese\">下来、进去</span></li><li>Động từ chỉ sự thêm vào: <span class=\"chinese\">进行、加以</span></li></ul>",
	"<b>■ Tính từ</b> Tính từ là những từ biểu thị trạng thái, tính chất của người và sự vật hoặc mô tả trạng thái của hành vi hay động tác. Tính từ gồm 2 loại lớn:<ul><li>Tính từ chỉ tính chất: <span class=\"chinese\">酸、甜、苦、辣</span></li><li>Tính từ chỉ trạng thái: <span class=\"chinese\">火红、水江江</span></li></ul>",
	"<b>■ Số từ</b> là các từ chỉ số lượng, các con số. Số từ bao gồm 2 loại:<ul><li>Số đếm: <span class=\"chinese\">一、二、三</span></li><li>Số thứ tự： <span class=\"chinese\">第一、第二、第三</span></li></ul>",
	"<b>■ Lượng từ</b> là loại từ chỉ đơn vị của người, sự vật hoặc đơn vị của động tác hành vi. Trong tiếng Trung có đến hơn 500 lượng từ. Lượng từ bao gồm 2 loại:<ul><li>Danh lượng từ: <span class=\"chinese\">年、周</span></li><li>Động lượng từ: <span class=\"chinese\">趟、遍</span></li></ul>",
	"<b>■ Phó từ</b> là những từ bổ sung ý nghĩa về các mặt như phương thức, trình độ, tần suất, ngữ khí…cho động từ, tính từ hoặc cả câu. Phó từ gồm 7 loại:<ul><li>Phó từ chỉ mức độ: <span class=\"chinese\">很、最、太</span></li><li>Phó từ chỉ phạm vi: <span class=\"chinese\">都、全、单</span></li><li>Phó từ chỉ thời gian, tần suất: <span class=\"chinese\">立刻、马上、暂时、尽量</span></li><li>Phó từ chỉ nơi chốn: <span class=\"chinese\">四处、 处处</span></li><li>Phó từ biểu thị khẳng định, phủ định: <span class=\"chinese\">必须、 的确、 不、没</span></li><li>Phó từ biểu thị tình trạng, phương thức: <span class=\"chinese\">特意、 突然、大力、尽量</span></li><li>Phó từ biểu thị ngữ khí: <span class=\"chinese\">难道、 简直、却</span></li></ul>",
	"<b>■ Giới từ</b> thường được đặt trước danh từ, đại từ hoặc cụm danh từ, tạo thành các cụm giới từ bổ sung ý nghĩa cho động từ, tính từ hoặc cả câu về đối tượng, thời gian, nơi chốn, phương thức, nguyên nhân, bị động, so sánh, bài trừ… Giới từ có 5 loại chính:<ul><li>Giới từ chỉ thời gian, nơi chốn, phương hướng: <span class=\"chinese\">从、在、向</span></li><li>Giới từ chỉ phương thức, phương pháp, công cụ, so sánh: <span class=\"chinese\">按照、用、比</span></li><li>Giới từ chỉ nguyên nhân, mục đích: <span class=\"chinese\">因为、 为了</span></li><li>Giới từ chỉ thực hiện động tác hoặc chịu sự tác động của hành vi, động tác： <span class=\"chinese\">被、让、把</span></li><li>Giới từ chỉ đối tượng liên quan: <span class=\"chinese\">对、跟、和</span></li></ul>",
	"<b>■ Liên từ</b> có tác dụng nối từ, đoản ngữ, phân câu, và câu, …biểu thị quan hệ đẳng lập, tăng tiến, chuyển ngoặt, điều kiện, … Để nói được những câu tiếng Trung dài thì cần phải nhớ kĩ cách sử dụng liên từ. Liên từ có thể chia thành 3 loại: <ul><li>Liên từ để nối từ, đoản ngữ: <span class=\"chinese\">和、跟、同</span></li><li>Liên từ để nối từ hoặc phân câu: <span class=\"chinese\">而、而且、或者</span></li><li>Liên từ để nối phân câu trong câu phức: <span class=\"chinese\">不但、不仅、但是</span></li></ul>",
	"<b>■ Trợ từ</b> thường đi kèm với từ, cụm từ hoặc câu để biểu thị quan hệ ngữ pháp như quan hệ kết cấu hoặc động thái. Trợ từ chia thành 4 loại: <ul><li>Trợ từ kết cấu: <span class=\"chinese\">的、地、得</span></li><li>Trợ từ động thái: <span class=\"chinese\">着、了、过</span></li><li>Trợ từ so sánh: <span class=\"chinese\">似的、一样、（一）般</span></li><li>Trợ từ khác: <span class=\"chinese\">所、给、连</span></li></ul>",
	"<b>■ Thán từ</b> là những từ biểu thị cảm thán và sự hoan hô, ứng đáp. Ví dụ <span class=\"chinese\">哎呀、哎哟、啊</span>",
	"<b>■ Từ tượng thanh</b> là những từ mô phỏng âm thanh. Ví dụ <span class=\"chinese\">哈哈、叮当、咚咚</span>",
	"<b>■ Từ ngữ khí</b> thường đứng ở cuối câu biểu thị ngữ khí, cũng có thể dùng ở giữa câu để ngắt nghỉ. Từ ngữ khí chia thành 4 loại: <ul><li>Ngữ khí trần thuật: <span class=\"chinese\">的、了、吧</span></li><li>Ngữ khí nghi vấn: <span class=\"chinese\">吗、呢</span></li><li>Ngữ khí cầu khiến: <span class=\"chinese\">吧、了、啊</span></li><li>Ngữ khí cảm thán: <span class=\"chinese\">啊</span></li></ul>"
];
