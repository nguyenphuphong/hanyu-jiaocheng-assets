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
		[30, "&nbsp;"], [75, "离合词"], [150, "líhécí"], [75, "( 离合 )"], ["200 vietnamese", "động từ ly hợp"]
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
		[30, "&nbsp;"], [75, "语气助词"], [150, "yǔqì zhùcí"], [75, "&nbsp;"], ["200 vietnamese", "trợ từ ngữ khí"]
	],
	[
		[30, "11."], [75, "叹词"], [150, "tàncí"], [75, "叹"], ["200 vietnamese", "thán từ"]
	],
	[
		[30, "12."], [75, "象声词"], [150, "xiàngshēngcí"], [75, "象"], ["200 vietnamese", "từ tượng thanh"]
	],
	[
		[30, "13."], [75, "词头"], [150, "cítóu"], [75, "头"], ["200 vietnamese", "tiền tố"]
	],
	[
		[30, "14."], [75, "词尾"], [150, "cíwěi"], [75, "尾"], ["200 vietnamese", "hậu tố"]
	]
];

var abbreviation_explaination_array = [
	"<b>■ Danh từ</b> dùng để biểu thị người hoặc sự vật, thời gian địa điểm. Trong câu danh từ chủ yếu đảm nhận vai trò chủ ngữ. Danh từ được chia thành 4 loại sau: <ul><li>Danh từ chỉ người và vật:  <span class=\"chinese\">猫、狗</span></li><li>Danh từ chỉ thời gian: <span class=\"chinese\">春天、夏天</span></li><li>Danh từ chỉ địa điểm:  <span class=\"chinese\">学校</span></li><li>Danh từ chỉ phương vị: <span class=\"chinese\">上、下</span></li></ul>",
	"<b>■ Đại từ</b> là các loại từ thay thế cho các từ ngữ trong câu. Gồm ba loại đại từ chính: đại từ nhân xưng, đại từ chỉ thị và đại từ nghi vấn. Đại từ gồm 3 loại:<ul><li>Đại từ chỉ người: <span class=\"chinese\">我们、他们</span></li><li>Đại từ nghi vấn: <span class=\"chinese\">谁、什么、哪</span></li><li>Đại từ chỉ sự: <span class=\"chinese\">这、那、这儿</span></li></ul>",
	"<b>■ Động từ</b> là những từ chỉ động tác, hành vi, hoạt động tâm lý hoặc biểu thị sự tồn tại, thay đổi, biến mất, … Động từ gồm 7 loại:<ul><li>Động từ chỉ động tác, hành vi: <span class=\"chinese\">跳、坐</span></li><li>Động từ chỉ hoạt động tâm lý: <span class=\"chinese\">喜欢、讨厌</span></li><li>Động từ chỉ sự tồn tại, thay đổi, biến mất: <span class=\"chinese\">在、消亡</span></li><li>Động từ phán đoán: <span class=\"chinese\">是</span></li><li>Động từ năng nguyện: <span class=\"chinese\">能、 会</span></li><li>Động từ xu hướng: <span class=\"chinese\">下来、进去</span></li><li>Động từ chỉ sự thêm vào: <span class=\"chinese\">进行、加以</span></li></ul>",
	"<b>■ Tính từ</b> Tính từ là những từ biểu thị trạng thái, tính chất của người và sự vật hoặc mô tả trạng thái của hành vi hay động tác. Tính từ gồm 2 loại lớn:<ul><li>Tính từ chỉ tính chất: <span class=\"chinese\">酸、甜、苦、辣</span></li><li>Tính từ chỉ trạng thái: <span class=\"chinese\">火红、水江江</span></li></ul>"
];

//<span class=\"chinese\"></span>
/*
	<ul>
		<li>Danh từ chỉ người và vật:  <span class=\"chinese\">猫、狗</span></li>
		<li>Danh từ chỉ thời gian: <span class=\"chinese\">春天、夏天</span></li>
		<li>Danh từ chỉ địa điểm:  <span class=\"chinese\">学校</span></li>
		<li>Danh từ chỉ phương vị: <span class=\"chinese\">上、下</span></li>
	</ul>
	
	<ul>
		<li>Đại từ chỉ người: <span class=\"chinese\">我们、他们</span></li>
		<li>Đại từ nghi vấn: <span class=\"chinese\">谁、什么、哪</span></li>
		<li>Đại từ chỉ sự: <span class=\"chinese\">这、那、这儿</span></li>
	</ul>
	
	<ul>
		<li>Động từ chỉ động tác, hành vi: <span class=\"chinese\">跳、坐</span></li>
		<li>Động từ chỉ hoạt động tâm lý: <span class=\"chinese\">喜欢、讨厌</span></li>
		<li>Động từ chỉ sự tồn tại, thay đổi, biến mất: <span class=\"chinese\">在、消亡</span></li>
		<li>Động từ phán đoán: <span class=\"chinese\">是</span></li>
		<li>Động từ năng nguyện: <span class=\"chinese\">能、 会</span></li>
		<li>Động từ xu hướng: <span class=\"chinese\">下来、进去</span></li>
		<li>Động từ chỉ sự thêm vào: <span class=\"chinese\">进行、加以</span></li>
	</ul>
	
	<ul>
		<li>Tính từ chỉ tính chất: <span class=\"chinese\">酸、甜、苦、辣</span></li>
		<li>Tính từ chỉ trạng thái: <span class=\"chinese\">火红、水江江</span></li>
	</ul>
*/