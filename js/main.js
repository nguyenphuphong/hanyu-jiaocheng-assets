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
			build_string += "<li class=\"active\"><a href=\"" + lesson_navigator_url + "\">" + lesson_navigator_title + "</a></li>";
		} else {
			build_string += "<li><a href=\"" + lesson_navigator_url + "\">" + lesson_navigator_title + "</a></li>";
		}
	}
	
	var nav_content_list = document.getElementById("nav-content-list");
	nav_content_list.innerHTML = build_string;
}
