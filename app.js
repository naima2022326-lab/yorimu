const content = document.getElementById("content");

function showLibrary() {
  content.innerHTML = `
    <h2>Home</h2>

    <section class="section">
      <h3>Library</h3>
      <div class="grid" id="libraryGrid"></div>
    </section>

    <section class="section">
      <h3>Discover</h3>
      <div class="grid" id="discoverGrid"></div>
    </section>
  `;

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

function searchAll(query) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  sources.forEach(src => {
    src.search(query).forEach(manga => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${manga.cover}" />
        <h4>${manga.title}</h4>
        <p>${manga.chapters} chapters</p>
      `;
      card.onclick = () => openManga(manga, src);
      results.appendChild(card);
    });
  });
}
