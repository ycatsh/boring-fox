function create_tabs() {
	var tabs_left = document.getElementById("left");
	var tabs_right = document.getElementById("right");
	var container = document.querySelector(".content-container");

	for (var i = 0; i < data.length; i++) {
		var tab = document.createElement("button");
		var content = document.createElement("div");

		tab.className = "tab";
		tab.textContent = data[i].label;
		tab.addEventListener("click", show_content);
		tab.dataset.contentId = data[i].id;

		if (i <= 3){
			content.className = "content";
			content.id = data[i].id;
		}

		if (data[i].label.length < 2) {
			tabs_left.appendChild(tab);
		} 
		else {
			tab.id = 'tab-right';
			tabs_right.appendChild(tab);
		}
		container.appendChild(content)
	}
}


function show_content(event) {
	var content_id = event.currentTarget.dataset.contentId;
	var contents = document.getElementsByClassName("content");
  
	for (var i = 0; i < contents.length; i++) {
	  contents[i].style.display = "none";
	}
  
	var content_element = document.getElementById(content_id);
  
	if (content_element.innerHTML.trim() === "") {
	  	var tab = data.find(function (tab) {
			return tab.id === content_id;
		});
		content_element.innerHTML = tab.content;
	}
  
	content_element.style.display = "block";
	var tabs = document.getElementsByClassName("tab");
  
	for (var i = 0; i < tabs.length; i++) {
	  	tabs[i].classList.remove("active");
	}
	event.currentTarget.classList.add("active");
}


const data = [
	{
		id: "content1", 
		label: "1", 
		content: `
		
		<div class="random-line">better not be slacking it's&nbsp;<span id="clock"></span></div>

		<div class="bookmark">
		  <div class="category">
			<div class="bookmarks">
			  <div class="heading">work</div>
			  <li><a href="https://gmail.com">gmail</a></li>
			  <li><a href="https://lichess.org/">lichess</a></li>
			  <li><a href="https://adventofcode.com/">advent</a></li>
			  <li><a href="https://linkedin.com">linkedin</a></li>
			</div>
		  </div>
	
		  <div class="category">
			<div class="bookmarks">
			  <div class="heading">dev</div>
			  <li><a href="https://github.com/">github</a></li>
			  <li><a href="https://docs.google.com/document/u/0/">documents</a></li>
			  <li><a href="https://docs.google.com/spreadsheets/u/0/">sheets</a></li>
			  <li><a href="https://discord.com/developers/applications">devportal</a></li>
			</div>
		  </div>

		  <div class="category">
			<div class="bookmarks">
			  <div class="heading">social</div>
			  <li><a href="https://reddit.com/">reddit</a></li>
			  <li><a href="https://instagram.com/">instagram</a></li>
			  <li><a href="https://twitter.com/">twitter</a></li>
			  <li><a href="https://discord.com/channels/@me">discord</a></li>
			</div>
		  </div>

		  <div class="category">
			<div class="bookmarks">
			  <div class="heading">media</div>
			  <li><a href="https://youtube.com/">youtube</a></li>
			  <li><a href="https://primevideo.com/">prime video</a></li>
			  <li><a href="https://twitch.tv/">twitch</a></li>
			  <li><a href="https://netflix.com/">netflix</a></li>
			</div>
		  </div>
		</div>` 
	},


	{
		id: "content2", 
		label: "2", 
		content: `
		<div class="random-line">resources and other important stuff</div>

          <div class="bookmark">
            <div class="category">
              <div class="bookmarks">
                <div class="heading">docs</div>
                  <li><a href="https://devdocs.io/cpp/">c++</a></li>
                  <li><a href="https://www.sfml-dev.org/documentation/2.5.1/">sfml</a></li>
                  <li><a href="https://www.pygame.org/docs/">pygame</a></li>
                  <li><a href="https://flask.palletsprojects.com/en/2.3.x/">flask</a></li>
              </div>
            </div>

            <div class="category">
              <div class="bookmarks">
                <div class="heading">shop</div>
                  <li><a href="https://amazon.in/">amazon</a></li>
                  <li><a href="https://www.uniqlo.com/in/en/">uniqlo</a></li>
                  <li><a href="https://store.steampowered.com/explore/">steam</a></li>
                  <li><a href="https://www.nintendo.com/store/">eshop</a></li>
              </div>
            </div>

			<div class="category">
			  <div class="bookmarks">
			    <div class="heading">learn</div>
				  <li><a href="https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/home">cs50ai</a></li>
				  <li><a href="https://www.kaggle.com/">kaggle</a></li>
			  </div>
		  	</div>

          </div>` 
	},

	{
		id: "content3", 
		label: "3", 
		content: ""
	},

	{
		id: "content4", 
		label: "music", 
		content: ""
	},

	{
		id: "content5", 
		label: "weather", 
	},

	{
		id: "content6", 
		label: "notes", 
	},
];
  

create_tabs();

var default_tab = document.querySelector('.tab[data-content-id="content1"]');
show_content({ currentTarget: default_tab });