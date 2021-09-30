function toogle_nav_display () {
	var nav_right = document.getElementById("nav-right");
	var nav_content = document.getElementById("nav-content");
	
	if (nav_right.innerHTML == '课') {
		nav_right.innerHTML = '回';
		nav_content.style.display = "inherit";
	} else {
		nav_right.innerHTML = '课';
		nav_content.style.display = "none";
	}
}

function build_lesson_navigation(page) {
	var build_string = "";
	
	for (var i = 0; i < lesson_navigator_array.length; i++) {
		var lesson_navigator_title = lesson_navigator_array[i][0];
		var lesson_navigator_url = lesson_navigator_array[i][1];
		
		if (page == i) {
			build_string += "<li><a class=\"active\" href=\"" + lesson_navigator_url + "\">" + lesson_navigator_title + "</a></li>";
		} else {
			build_string += "<li><a href=\"" + lesson_navigator_url + "\">" + lesson_navigator_title + "</a></li>";
		}
	}
	
	var nav_content_ul = document.getElementById("nav-content-list");
	nav_content_ul.innerHTML = build_string;
}

function build_text_block(text_block_array, target_div_id) {
	var build_string = "";
	
	for (var i = 0; i < text_block_array.length; i++) {
		build_string += "<p class=\"vietnamese\">" + text_block_array[i] + "</p>";
	}
	
	var target_div = document.getElementById(target_div_id);
	target_div.innerHTML = build_string;
}

function build_row_block(row_array, target_div_id) {
	var build_string = "";
	
	for (var i = 0; i < row_array.length; i++) {
		var row = row_array[i];
		
		build_string += "<div class=\"row\">";
		for (var j = 0; j < row.length; j++) {
			var col = row[j];
			
			build_string += "<div class=\"col-" + col[0] + "\">" + col[1] + "</div>";
		}
		
		build_string += "</div>";
	}
	
	var target_div = document.getElementById(target_div_id);
	target_div.innerHTML = build_string;
}

function build_list_block(item_array, target_list_id) {
	var build_string = "";
	
	for (var i = 0; i < item_array.length; i++) {
		build_string += "<li>" + item_array[i] + "</li>";
	}
	
	var target_div = document.getElementById(target_list_id);
	target_div.innerHTML = build_string;
}

function building_listening_block() {
	var build_string = "";
	for (var i = 0; i < listening_array.length; i++) {
		var speech = listening_array[i];
		
		if (speech.length == 1) {
			build_string += "<h4>" + speech[0] + "</h4>";
			continue;
		}

		build_string += "<div class=\"row\">";
		build_string += "<div class=\"col-400\">";
		build_string += "<span class=\"width-80 chinese-pinyin\">" + speech[0] + ": </span>" + speech[1];
		build_string += "</div>";
		build_string += "<div class=\"col-minus-420 margin-left-30-at-smallscreen\">" + speech[2] + "</div>";
		build_string += "</div>";
	}

	var target_div = document.getElementById("listening");
	target_div.innerHTML = build_string;
}

function building_vocabulary_block() {
	var build_string = "";
	for (var i = 0; i < vocabulary_array.length; i++) {
		var vocabulary = vocabulary_array[i];
		var no = vocabulary[0];
		var word = vocabulary[1];
		var abbreviation = vocabulary[2];
		var pinyin = vocabulary[3];
		var meaning = vocabulary[4];

		build_string += "<div class=\"row\">";
		if (no != '') {
			build_string += "<div class=\"col-30\">" + no + "</div>";
		} else {
			build_string += "<div class=\"col-30 none-display-at-smallscreen\">&nbsp;</div>";
		}
		build_string += "<div class=\"col-150\">" + word + "</div>";
		if (abbreviation != '') {
			build_string += "<div class=\"col-100\">（" + abbreviation + "）</div>";
		} else {
			build_string += "<div class=\"col-100 none-display-at-smallscreen\">&nbsp;</div>";
		}
		build_string += "<div class=\"col-150\">" + pinyin + "</div>";
		build_string += "<div class=\"col-free-for-smallscreen margin-left-30-at-smallscreen vietnamese\">" + meaning + "</div>";
		build_string += "</div>";
	}

	var target_div = document.getElementById("vocabulary");
	target_div.innerHTML = build_string;
}

function building_hanzi_block() {
	var build_string = "";
	
	var hanzi = extract_hanzi_from_vocabulary_array();
	build_string += "<div class=\"row\">";
	for (var i = 0; i < hanzi.length; i++) {
		build_string += "<div class=\"hanzi-square\">" + hanzi[i] + "</div>";
	}
	build_string += "</div>";
	
	var target_div = document.getElementById("hanzi");
	target_div.innerHTML = build_string;
}

function extract_hanzi_from_vocabulary_array() {
	var hanzi = [];
	for (var i = 0; i < vocabulary_array.length; i++) {
		var word = vocabulary_array[i][1].trim();
		for (var j = 0; j < word.length; j++) {
			var ch = word.charAt(j).trim();
			if (ch != '(' && ch != ')' && ch != '（' && ch != '）' && ch != '／' && ch != ''
					&& hanzi.includes(ch) == false) {
				hanzi.push(ch);
			}
		}
	}
	return hanzi;
}
