/* ==========================================
TABS AND BOOKMARKS CONFIG
========================================== */

const DATA = {
  "tabs": [
    {
      "id": "content1",
      "label": "1",
      "categories": [
        {
          "name": "Category 1",
          "links": [
            { "text": "Link #1", "href": "" },
            { "text": "Link #2", "href": "" },
            { "text": "Link #3", "href": "" },
            { "text": "Link #4", "href": "" }
          ]
        },
        {
          "name": "Category 2",
          "links": [
            { "text": "Link #5", "href": "" },
            { "text": "Link #6", "href": "" },
            { "text": "Link #7", "href": "" },
            { "text": "Link #8", "href": "" }
          ]
        },
        {
          "name": "Category 3",
          "links": [
            { "text": "Link #9", "href": "" },
            { "text": "Link #10", "href": "" },
            { "text": "Link #11", "href": "" },
            { "text": "Link #12", "href": "" }
          ]
        },
        {
          "name": "Category 4",
          "links": [
            { "text": "Link #13", "href": "" },
            { "text": "Link #14", "href": "" },
            { "text": "Link #15", "href": "" },
            { "text": "Link #16", "href": "" }
          ]
        },
        {
          "name": "Category 5",
          "links": [
            { "text": "Link #17", "href": "" },
            { "text": "Link #18", "href": "" },
            { "text": "Link #19", "href": "" },
            { "text": "Link #20", "href": "" }
          ]
        },
        {
          "name": "Category 6",
          "links": [
            { "text": "Link #21", "href": "" },
            { "text": "Link #22", "href": "" },
            { "text": "Link #23", "href": "" },
            { "text": "Link #24", "href": "" }
          ]
        }
      ]
    },
    {
      "id": "content2",
      "label": "2",
      "categories": [
        {
          "name": "Category 1",
          "links": [
            { "text": "Link #1", "href": "" },
            { "text": "Link #2", "href": "" },
            { "text": "Link #3", "href": "" },
            { "text": "Link #4", "href": "" }
          ]
        },
        {
          "name": "Category 2",
          "links": [
            { "text": "Link #5", "href": "" },
            { "text": "Link #6", "href": "" },
            { "text": "Link #7", "href": "" },
            { "text": "Link #8", "href": "" }
          ]
        },
        {
          "name": "Category 3",
          "links": [
            { "text": "Link #9", "href": "" },
            { "text": "Link #10", "href": "" },
            { "text": "Link #11", "href": "" },
            { "text": "Link #12", "href": "" }
          ]
        },
        {
          "name": "Category 4",
          "links": [
            { "text": "Link #13", "href": "" },
            { "text": "Link #14", "href": "" },
            { "text": "Link #15", "href": "" },
            { "text": "Link #16", "href": "" }
          ]
        },
        {
          "name": "Category 5",
          "links": [
            { "text": "Link #17", "href": "" },
            { "text": "Link #18", "href": "" },
            { "text": "Link #19", "href": "" },
            { "text": "Link #20", "href": "" }
          ]
        },
        {
          "name": "Category 6",
          "links": [
            { "text": "Link #21", "href": "" },
            { "text": "Link #22", "href": "" },
            { "text": "Link #23", "href": "" },
            { "text": "Link #24", "href": "" }
          ]
        }
      ]
    },
    {
      "id": "content3",
      "label": "3"
    },
    {
      "id": "content4",
      "label": "4"
    }
  ]
}

function populateTabs() {
    const tabs = document.getElementById("tab-group");
    const container = document.querySelector(".container");
    
    DATA.tabs.forEach(tabData => {
        const tab = document.createElement("button");
        tab.className = "tab";
        tab.textContent = tabData.label;
        tab.addEventListener("click", showContent);
        tab.dataset.contentId = tabData.id;
        tabs.appendChild(tab);
        
        const content = document.getElementById(tabData.id);
        if (!content) {
            const bookmarksDiv = document.createElement("div");
            bookmarksDiv.className = "content";
            bookmarksDiv.id = tabData.id;
            container.appendChild(bookmarksDiv);
        }
    });
    
    const defaultTab = document.querySelector('.tab[data-content-id="content1"]');
    if (defaultTab) showContent({ currentTarget: defaultTab });
}

async function populateContent(contentId) {
    const response = await fetch('bookmarks.json');
    const jsonData = await response.json();
    
    const tabData = jsonData.tabs.find(tab => tab.id === contentId);
    const contentElement = document.getElementById(contentId);
    
    if (!tabData || !contentElement) return;
    
    const columns = contentElement.getElementsByClassName("column");
    
    // Clear previous content in columns
    Array.from(columns).forEach(column => (column.innerHTML = ""));
    
    tabData.categories.forEach((category, i) => {
        const j = Math.floor(i / 2);
        if (columns[j]) {
            const html = `
                <li>
                    <span class="folder">${category.name}</span>
                    <ul class="sub-list">
                        ${category.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
                    </ul>
                </li>
            `;
            const bookmarksContainer = document.createElement("div");
            bookmarksContainer.className = "bookmarks-container";
            bookmarksContainer.innerHTML = `<ul class="bookmark-list">${html}</ul>`;
            columns[j].appendChild(bookmarksContainer);
        }
    });
}

function showContent(event) {
    const contentId = event.currentTarget.dataset.contentId;
    const contents = document.getElementsByClassName("content");
    
    Array.from(contents).forEach(content => {
        content.style.display = "none";
    });
    
    const contentElement = document.getElementById(contentId);
    if (!contentElement.dataset.populated) {
        populateContent(contentId);
        contentElement.dataset.populated = "true";
    }
    contentElement.style.display = "block";
    
    const tabs = document.getElementsByClassName("tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("active"));
    event.currentTarget.classList.add("active");
}


// Loads the bookmarks for the tabs
populateTabs();
