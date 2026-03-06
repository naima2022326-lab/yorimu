function searchManga(query) {
  const results = document.getElementById("results");
  results.innerHTML = "<p>Searching sources...</p>";

  searchAllSources(query);
}

function renderResults(list) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  list.forEach(manga => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${manga.cover}" class="cover">
      <div>
        <h3>${manga.title}</h3>
        <p>${manga.source}</p>
      </div>
    `;

    card.onclick = () => openReader(manga);

    results.appendChild(card);
  });
}
