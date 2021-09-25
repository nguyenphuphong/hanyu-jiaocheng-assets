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
