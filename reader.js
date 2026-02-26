function openReader() {
  document.getElementById("browserFrame").style.display = "none";
  document.getElementById("reader").style.display = "block";
}

document.getElementById("searchManga").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const q = e.target.value;
    const src = sources[sourceSelect.value];
    const url = src.search(q);

    const res = document.createElement("div");
    res.textContent = "Open: " + q;
    res.onclick = () => {
      document.getElementById("browserFrame").src = url;
      openBrowser();
    };

    document.getElementById("results").appendChild(res);
  }
});
