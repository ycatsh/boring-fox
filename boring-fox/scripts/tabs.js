/* ==========================================
TABS AND BOOKMARKS CONFIG
========================================== */

async function loadBookmarks() {
    const response = await fetch('bookmarks.json');
    const jsonData = await response.json();
    populateTabs(jsonData);
}

function populateTabs(data) {
    const tabs = document.getElementById("tab-group");
    const container = document.querySelector(".container");

    data.tabs.forEach(tabData => {
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

    const html = tabData.categories.map(category => `
        <li>
            <span class="folder">${category.name}</span>
            <ul class="sub-list">
                ${category.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
            </ul>
        </li>
    `).join('');

    const bookmarksContainer = document.createElement("div");
    bookmarksContainer.className = "dynamic-bookmarks";
    bookmarksContainer.innerHTML = `<ul class="bookmark-list">${html}</ul>`;
    contentElement.appendChild(bookmarksContainer);
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
loadBookmarks();
