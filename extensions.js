const installedExtensions = [];

function registerExtension(ext) {
  installedExtensions.push(ext);
}

function showExtensions() {
  content.innerHTML = "<h2>Extensions</h2>";
  installedExtensions.forEach(ext => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<b>${ext.name}</b><br><small>${ext.version}</small>`;
    content.appendChild(card);
  });
}
