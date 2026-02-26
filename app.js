const content = document.getElementById("content");

function showLibrary() {
  content.innerHTML = `
    <div class="home">
      <h1 class="home-title">YORIMU</h1>

      <div class="home-nav">
        <button onclick="showLibraryPage()">📚 Library</button>
        <button onclick="showRecommendations()">✨ Recommendations</button>
        <button onclick="showHistory()">🕘 History</button>
        <button onclick="showExtensions()">🧩 Extensions</button>
        <button onclick="showSettings()">⚙️ Settings</button>
      </div>
    </div>
  `;
}

  renderLibraryGrid();
  renderDiscover();
}

function showBrowse() {
  content.innerHTML = `
    <h2>Browse Sources</h2>
    <input id="searchInput" placeholder="Search manga or anime..." />
    <div class="grid" id="results"></div>
  `;

  document.getElementById("searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter") searchAll(e.target.value);
  });
}

async function searchAll(query) {
  const results = document.getElementById("results");
  results.innerHTML = "Searching...";

  const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();

  results.innerHTML = "";

  data.forEach(manga => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${manga.cover}">
      <h4>${manga.title}</h4>
      <p>${manga.chapters} chapters</p>
    `;
    card.onclick = () => openMangaFromApi(manga.id);
    results.appendChild(card);
  });
}
