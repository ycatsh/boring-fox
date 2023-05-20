function show_content(content_id) {
	var contents = document.getElementsByClassName("content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}

	document.getElementById(content_id).style.display = "block";

	var tabs = document.getElementsByClassName("tab");
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
	}

	event.currentTarget.classList.add("active");
}

show_content("content1");