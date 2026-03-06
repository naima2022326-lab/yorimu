let enabledSources = ["mangadex"];

async function loadSources() {
  const response = await fetch("/sources/extensions");
  const data = await response.json();

  return data.filter(src => enabledSources.includes(src.id));
}

async function searchManga(query) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  const sources = await loadSources();

  sources.forEach(src => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `${query} (via ${src.name})`;

    card.onclick = () => openManga(query, src);

    results.appendChild(card);
  });
}
