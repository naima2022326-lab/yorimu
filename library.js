function getLibrary() {
  return JSON.parse(localStorage.getItem("yorimu-library") || "[]");
}

function saveLibrary(lib) {
  localStorage.setItem("yorimu-library", JSON.stringify(lib));
}

function renderLibrary() {
  const lib = getLibrary();
  content.innerHTML = "<h2>Library</h2>";

  if (lib.length === 0) {
    content.innerHTML += "<p>No manga yet.</p>";
    return;
  }

  lib.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = m.title;
    card.onclick = () => openReader(m);
    content.appendChild(card);
  });
}

function openManga(title, source) {
  const lib = getLibrary();
  lib.push({ title, source: source.name });
  saveLibrary(lib);
  renderLibrary();
}
