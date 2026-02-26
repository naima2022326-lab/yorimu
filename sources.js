const sources = [];

function registerSource(source) {
  sources.push(source);
}

registerSource({
  id: "demo",
  name: "Demo Source",
  type: "manga",
  search: q => `https://www.google.com/search?q=${q}+manga`
});

function searchManga(query) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  sources.forEach(src => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `${query} (via ${src.name})`;
    card.onclick = () => openManga(query, src);
    results.appendChild(card);
  });
}
