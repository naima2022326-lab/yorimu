const content = document.getElementById("content");

function showLibrary() { renderLibrary(); }

function showBrowse() {
  content.innerHTML = `
    <h2>Browse</h2>
    <input id="searchInput" placeholder="Search..." />
    <div id="results"></div>
  `;
  searchInput.onkeydown = e => e.key === "Enter" && searchManga(e.target.value);
}

function showSettings() {
  content.innerHTML = "<h2>Settings</h2><p>More coming soon</p>";
}

showLibrary();
