/* ==========================================
    TABS AND BOOKMARKS CONFIG
========================================== */

const data = [
    {
        id: "content1", 
        label: "1", 
        content: ``
    },

    {
        id: "content2", 
        label: "2", 
        content: ``
    },
                                                                                
    {
        id: "content3", 
        label: "3", 
        content: `weather`
    },

    {
        id: "content4", 
        label: "4", 
        content: `tools`
    },
]

function create_tabs() {
    var tabs = document.getElementById("tab-group");
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
        tabs.appendChild(tab);
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

create_tabs();
var default_tab = document.querySelector('.tab[data-content-id="content1"]');
show_content({ currentTarget: default_tab });