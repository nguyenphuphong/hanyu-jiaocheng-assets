var pinyin_array = [
	"Thời xa xưa thì chưa bao giờ xuất hiện khái niệm phiên âm Pinyin trong đời sống của người dân Trung Hoa. Cũng không có khái niệm bảng phiên âm tiếng Trung. Vì đơn giản vì Pinyin mới xuất hiện và được phê chuẩn năm 1958, cách đây chưa quá xa xôi.",
	"Còn chữ Trung quốc thuộc nhóm chữ tượng hình, viết loằng ngoằng làm gì có bảng chữ cái mà áp dụng theo. Họa chăng lắm người ta tổng hợp các từ có nét giống nhau lại thành bộ thủ. Nhưng 214 bộ thủ xét về quy tắc thì không thể nào chặt chẽ và chính xác như việc ghép các từ trong chữ latinh.",
	"Phiên âm pinyin chính là việc sử dụng các chữ cái latinh để mô phỏng lại cách phát âm trong hán ngữ. Việc này giúp cho người mới sẽ dễ học hơn, dễ bắt chước hơn nhất là người nước ngoài.",
	"Pinyin nói nôm na nó giống cấu trúc của tiếng Việt. Sử dụng nguyên âm để ghép với phụ âm vào tạo ra cách đọc. Chúng ta nên học pinyin vì nó còn dể dàng để sử dụng các kiểu gõ phím trên điện thoại và máy tính."
];

var initial_01_array = [
	[
		[30, 'b'], [30, 'p'], [30, 'm'], [30, 'f'], [30, 'd'], [30, 't'], [30, 'n'], [30, 'l'], [30, 'g'], [30, 'k'], [30, 'h']
	]
];

var final_01_array = [
	[
		[30, 'a'], [30, 'o'], [30, 'e'], [30, 'i'], [30, 'u'], [30, 'ü'], [30, 'ai'], [30, 'ei'], [30, 'ao'], [30, 'ou']
	]
];

var combination_01_array = [
	[
		[30, 'ba'], [30, 'bo'], [30, '&nbsp;'], [30, 'bi'], [30, 'bu'], [30, '&nbsp;'], [40, 'bai'], [40, 'bei'], [40, 'bao'], [40, '&nbsp;']
	],
	[
		[30, 'pa'], [30, 'po'], [30, '&nbsp;'], [30, 'pi'], [30, 'pu'], [30, '&nbsp;'], [40, 'pai'], [40, 'pei'], [40, 'pao'], [40, 'pou']
	],
	[
		[30, 'ma'], [30, 'mo'], [30, 'me'], [30, 'mi'], [30, 'mu'], [30, '&nbsp;'], [40, 'mai'], [40, 'mei'], [40, 'mao'], [40, 'mou']
	],
	[
		[30, 'fa'], [30, 'fo'], [30, '&nbsp;'], [30, '&nbsp;'], [30, 'fu'], [30, '&nbsp;'], [40, '&nbsp;'], [40, 'fei'], [40, '&nbsp;'], [40, 'fou']
	],
	[
		[30, 'da'], [30, '&nbsp;'], [30, 'de'], [30, 'di'], [30, 'du'], [30, '&nbsp;'], [40, 'dai'], [40, 'dei'], [40, 'dao'], [40, 'dou']
	],
	[
		[30, 'ta'], [30, '&nbsp;'], [30, 'te'], [30, 'ti'], [30, 'tu'], [30, '&nbsp;'], [40, 'tai'], [40, '&nbsp;'], [40, 'tao'], [40, 'tou']
	],
	[
		[30, 'na'], [30, '&nbsp;'], [30, 'ne'], [30, 'ni'], [30, 'nu'], [30, 'nü'], [40, 'nai'], [40, 'nei'], [40, 'nao'], [40, 'nou']
	],
	[
		[30, 'la'], [30, '&nbsp;'], [30, 'le'], [30, 'li'], [30, 'lu'], [30, 'lü'], [40, 'lai'], [40, 'lei'], [40, 'lao'], [40, 'lou']
	],
	[
		[30, 'ga'], [30, '&nbsp;'], [30, 'ge'], [30, '&nbsp;'], [30, 'gu'], [30, '&nbsp;'], [40, 'gai'], [40, 'gei'], [40, 'gao'], [40, 'gou']
	],
	[
		[30, 'ka'], [30, '&nbsp;'], [30, 'ke'], [30, '&nbsp;'], [30, 'ku'], [30, '&nbsp;'], [40, 'kai'], [40, 'kei'], [40, 'kao'], [40, 'kou']
	],
	[
		[30, 'ha'], [30, '&nbsp;'], [30, 'he'], [30, '&nbsp;'], [30, 'hu'], [30, '&nbsp;'], [40, 'hai'], [40, 'hei'], [40, 'hao'], [40, 'hou']
	],
	[
		[30, '&nbsp;'], [30, '&nbsp;'], [30, '&nbsp;'], [30, 'yi'], [30, 'wu'], [30, 'yu'], [40, '&nbsp;'], [40, '&nbsp;'], [40, '&nbsp;'], [40, '&nbsp;']
	],
];
