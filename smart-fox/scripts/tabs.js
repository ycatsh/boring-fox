function create_tabs() {
    var tabs_left = document.getElementById("left");
    var container = document.querySelector(".container");
                                                                                
    for (var i = 0; i < data.length; i++) {
        var tab = document.createElement("button");
        var content = document.createElement("div");

        tab.className = "tab";
        tab.textContent = data[i].label;
        tab.addEventListener("click", show_content);
        tab.dataset.contentId = data[i].id;

        content.className = "content";
        content.id = data[i].id;
        tabs_left.appendChild(tab);
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
        <h1><pre class="ascii" id="ascii-placeholder-1"></h1></pre>
        <h1 id="time-line">Better not be slackin cuz its already&nbsp<span id="clock" style="color: #c9c9c9;"></span></h1>
            <div class="columns">
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 1</span>
                            <ul class="sub-list">
                                <li><a href="">link #1</a></li>
                                <li><a href="">link #2</a></li>
                                <li><a href="">link #3</a></li>
                                <li><a href="">link #4</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 2</span>
                            <ul class="sub-list">
                                <li><a href="">link #5</a></li>
                                <li><a href="">link #6</a></li>
                                <li><a href="">link #7</a></li>
                                <li><a href="">link #8</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 3</span>
                            <ul class="sub-list">
                                <li><a href="">link #9</a></li>
                                <li><a href="">link #10</a></li>
                                <li><a href="">link #11</a></li>
                                <li><a href="">link #12</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 4</span>
                            <ul class="sub-list">
                                <li><a href="">link #13</a></li>
                                <li><a href="">link #14</a></li>
                                <li><a href="">link #15</a></li>
                                <li><a href="">link #16</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 5</span>
                            <ul class="sub-list">
                                <li><a href="">link #17</a></li>
                                <li><a href="">link #18</a></li>
                                <li><a href="">link #19</a></li>
                                <li><a href="">link #20</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 6</span>
                            <ul class="sub-list">
                                <li><a href="">link #21</a></li>
                                <li><a href="">link #22</a></li>
                                <li><a href="">link #23</a></li>
                                <li><a href="">link #24</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>`
    },
                                                                                                                                                                
                                                                                                                                                                
    {
        id: "content2", 
        label: "2", 
        content: `
        <br>
        <br>
            <div class="columns">
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 7</span>
                            <ul class="sub-list">
                                <li><a href="">link #25</a></li>
                                <li><a href="">link #26</a></li>
                                <li><a href="">link #27</a></li>
                                <li><a href="">link #28</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 8</span>
                            <ul class="sub-list">
                                <li><a href="">link #29</a></li>
                                <li><a href="">link #30</a></li>
                                <li><a href="">link #31</a></li>
                                <li><a href="">link #32</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 9</span>
                            <ul class="sub-list">
                                <li><a href="">link #33</a></li>
                                <li><a href="">link #34</a></li>
                                <li><a href="">link #35</a></li>
                                <li><a href="">link #36</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 10</span>
                            <ul class="sub-list">
                                <li><a href="">link #37</a></li>
                                <li><a href="">link #38</a></li>
                                <li><a href="">link #39</a></li>
                                <li><a href="">link #40</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul class="bookmark-list">
                        <li>
                            <span class="folder">Category 11</span>
                            <ul class="sub-list">
                                <li><a href="">link #41</a></li>
                                <li><a href="">link #42</a></li>
                                <li><a href="">link #43</a></li>
                                <li><a href="">link #44</a></li>
                            </ul>
                        </li>
                        <br>
                        <li>
                            <span class="folder">Category 12</span>
                            <ul class="sub-list">
                                <li><a href="">link #45</a></li>
                                <li><a href="">link #46</a></li>
                                <li><a href="">link #47</a></li>
                                <li><a href="">link #48</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
                                                                                
    {
        id: "content3", 
        label: "3", 
        content: `weather`
    },

    {
        id: "content4", 
        label: "4", 
        content: `notes`
    },

    {
        id: "content5", 
        label: "5", 
        content: `tools`
    },
];
                                                                                
                                                                                
                                                                                
create_tabs();
                                                                                
var default_tab = document.querySelector('.tab[data-content-id="content1"]');
show_content({ currentTarget: default_tab });