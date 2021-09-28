var tone_array = [
	[
		[100, "第一声"], [40, "ā"], [40, "ī"], [40, "ū"]
	],
	[
		[100, "第二声"], [40, "á"], [40, "í"], [40, "ú"]
	],
	[
		[100, "第三声"], [40, "ǎ"], [40, "ǐ"], [40, "ǔ"]
	],
	[
		[100, "第四声"], [40, "à"], [40, "ì"], [40, "ù"]
	]
];

var tone_3_transform_array = [
	"Trong phát âm tiếng Trung, 2 thanh 3 đứng liền nhau, thanh 3 phía trước đọc gần như thanh 2. Ví dụ: <span class=\"chinese\"><br/>你好 &rarr; nǐ hǎo &rarr; ní hǎo. <br/>也写 &rarr; yě xiě &rarr; yé xiě.</span>",
	"Khi ba âm tiết cùng thanh 3 đứng cạnh nhau, âm tiết thứ 2 sẽ đọc thành thanh 2, hoặc cả hai âm tiết đầu đều đọc thành thanh 2. Ví dụ: <span class=\"chinese\"><br />我很好 &rarr; wǒ hěn hǎo &rarr; wǒ hén hǎo. <br />展览馆 &rarr; zhǎn lǎn guǎn &rarr; zhán lán guǎn.</span>",
	"Khi bốn âm tiết cùng thanh 3 đứng cạnh nhau, âm tiết thứ nhất và âm tiết thứ 3 sẽ đọc thành thanh 2. Ví dụ: <span class=\"chinese\"><br/>我也很好 &rarr; wǒ yě hěn hǎo &rarr; wó yě hén hǎo.</span>"
];

var er_tone_array = [
	"Khi /er/ đứng sau một chữ khác thì phát âm là \"r\" vào sau phần đã có. Về chữ viết thì thêm chữ <span class=\"chinese\">“儿”</span> vào sau chữ gốc (có lúc được lược bỏ).",
	"Ví dụ: <span class=\"chinese\"><br />画 儿 &rarr; huà ér &rarr; huàr. <br />哪 儿 &rarr; nǎ ér &rarr; nǎr. <br />玩 &rarr; wán ér &rarr; wánr.</span>"
];

var yi_transform_array = [
	"Trong phát âm tiếng Trung, <span class=\"chinese\">“一” /yī/</span> dùng đơn độc hay dùng liền nhau, đứng cuối từ/cụm từ hoặc đứng giữa số từ, thanh điệu không đổi, đều đọc đúng thanh 1. Ví dụ: <span class=\"chinese\"><br />一 &rarr; yī. <br/>一 一介绍 &rarr; yīyī jièshào. <br/>第一 &rarr; dìyī. <br/>一百一 十 一 &rarr; yībǎi yī shí yī.</span>",
	"Khi <span class=\"chinese\">“一” /yī/</span> đứng trước thanh 1, thanh 2, thanh 3 đọc thành thanh 4. Ví dụ: <span class=\"chinese\"><br/> 一 天 &rarr; yītiān &rarr; yìtiān. <br/>一 年 &rarr; yī nián &rarr; yì nián. <br/>一 本 &rarr; yī běn &rarr; yì běn.</span>",
	"Khi <span class=\"chinese\">“一” /yī/</span> đứng trước thanh 4 thì đọc thành thanh 2.<span class=\"chinese\"><br/>一样 &rarr; yīyàng &rarr; yíyàng. <br/>一共 &rarr; yīgòn &rarr; yígòn.</span>"
];

var bu_transform_array = [
	"Khi <span class=\"chinese\">“不”</span> dùng đơn độc hay dùng đứng trước thanh 1, thanh 2, thanh 3 thì thanh điệu không thay đổi, đều đọc thanh 4. Ví dụ: <span class=\"chinese\"><br/>不 &rarr; bù. <br/>不多 &rarr; bù duò. <br/>不来 &rarr; bù lái. <br/>不好 &rarr; bù hǎo.</span>",
	"Khi <span class=\"chinese\">“不”</span> đứng trước thanh 4 thì đọc thành thanh 2. Ví dụ: <span class=\"chinese\"><br/>不对 &rarr; bù duì &rarr; bú duì. <br/>不去 &rarr; bù qù &rarr; bú qù.</span>"
];
