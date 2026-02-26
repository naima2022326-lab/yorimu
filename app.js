const content = document.getElementById("content");

function showLibrary() {
  renderLibrary();
}

function showBrowse() {
  content.innerHTML = `
    <h2>Browse Sources</h2>
    <input id="searchInput" placeholder="Search manga..." />
    <div id="results"></div>
  `;

  document.getElementById("searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter") searchManga(e.target.value);
  });
}

function showSettings() {
  content.innerHTML = `<h2>Settings (coming soon)</h2>`;
}

showLibrary(); // default page
