var pinyin_array = [
	"Thời xa xưa thì chưa bao giờ xuất hiện khái niệm phiên âm Pinyin trong đời sống của người dân Trung Hoa. Cũng không có khái niệm bảng phiên âm tiếng Trung. Vì đơn giản vì Pinyin mới xuất hiện và được phê chuẩn năm 1958, cách đây chưa quá xa xôi.",
	"Còn chữ Trung quốc thuộc nhóm chữ tượng hình, viết loằng ngoằng làm gì có bảng chữ cái mà áp dụng theo. Họa chăng lắm người ta tổng hợp các từ có nét giống nhau lại thành bộ thủ. Nhưng 214 bộ thủ xét về quy tắc thì không thể nào chặt chẽ và chính xác như việc ghép các từ trong chữ latinh.",
	"Phiên âm pinyin chính là việc sử dụng các chữ cái latinh để mô phỏng lại cách phát âm trong hán ngữ. Việc này giúp cho người mới sẽ dễ học hơn, dễ bắt chước hơn nhất là người nước ngoài.",
	"Pinyin nói nôm na nó giống cấu trúc của tiếng Việt. Sử dụng nguyên âm để ghép với phụ âm vào tạo ra cách đọc. Chúng ta nên học pinyin vì nó còn dể dàng để sử dụng các kiểu gõ phím trên điện thoại và máy tính."
];

var initial_01_array = [
	[
		[50, 'b'], [50, 'p'], [50, 'm'], [50, 'f'], [50, 'd'], [50, 't'], [50, 'n'], [50, 'l'], [50, 'g'], [50, 'k'], [50, 'h']
	]
];

var final_01_array = [
	[
		[50, 'a'], [50, 'o'], [50, 'e'], [50, 'i'], [50, 'u'], [50, 'ü'], [50, 'ai'], [50, 'ei'], [50, 'ao'], [50, 'ou']
	]
];

var combination_01_array = [
	[
		[50, 'ba'], [50, 'bo'], [50, '&nbsp;'], [50, 'bi'], [50, 'bu'], [50, '&nbsp;'], [50, 'bai'], [50, 'bei'], [50, 'bao'], [50, '&nbsp;']
	],
	[
		[50, 'pa'], [50, 'po'], [50, '&nbsp;'], [50, 'pi'], [50, 'pu'], [50, '&nbsp;'], [50, 'pai'], [50, 'pei'], [50, 'pao'], [50, 'pou']
	],
	[
		[50, 'ma'], [50, 'mo'], [50, 'me'], [50, 'mi'], [50, 'mu'], [50, '&nbsp;'], [50, 'mai'], [50, 'mei'], [50, 'mao'], [50, 'mou']
	],
	[
		[50, 'fa'], [50, 'fo'], [50, '&nbsp;'], [50, '&nbsp;'], [50, 'fu'], [50, '&nbsp;'], [50, '&nbsp;'], [50, 'fei'], [50, '&nbsp;'], [50, 'fou']
	],
	[
		[50, 'da'], [50, '&nbsp;'], [50, 'de'], [50, 'di'], [50, 'du'], [50, '&nbsp;'], [50, 'dai'], [50, 'dei'], [50, 'dao'], [50, 'dou']
	],
	[
		[50, 'ta'], [50, '&nbsp;'], [50, 'te'], [50, 'ti'], [50, 'tu'], [50, '&nbsp;'], [50, 'tai'], [50, '&nbsp;'], [50, 'tao'], [50, 'tou']
	],
	[
		[50, 'na'], [50, '&nbsp;'], [50, 'ne'], [50, 'ni'], [50, 'nu'], [50, 'nü'], [50, 'nai'], [50, 'nei'], [50, 'nao'], [50, 'nou']
	],
	[
		[50, 'la'], [50, '&nbsp;'], [50, 'le'], [50, 'li'], [50, 'lu'], [50, 'lü'], [50, 'lai'], [50, 'lei'], [50, 'lao'], [50, 'lou']
	],
	[
		[50, 'ga'], [50, '&nbsp;'], [50, 'ge'], [50, '&nbsp;'], [50, 'gu'], [50, '&nbsp;'], [50, 'gai'], [50, 'gei'], [50, 'gao'], [50, 'gou']
	],
	[
		[50, 'ka'], [50, '&nbsp;'], [50, 'ke'], [50, '&nbsp;'], [50, 'ku'], [50, '&nbsp;'], [50, 'kai'], [50, 'kei'], [50, 'kao'], [50, 'kou']
	],
	[
		[50, 'ha'], [50, '&nbsp;'], [50, 'he'], [50, '&nbsp;'], [50, 'hu'], [50, '&nbsp;'], [50, 'hai'], [50, 'hei'], [50, 'hao'], [50, 'hou']
	],
	[
		[50, '&nbsp;'], [50, '&nbsp;'], [50, '&nbsp;'], [50, 'yi'], [50, 'wu'], [50, 'yu'], [50, '&nbsp;'], [50, '&nbsp;'], [50, '&nbsp;'], [50, '&nbsp;']
	],
];
