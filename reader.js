function openManga(manga, source) {
  content.innerHTML = `
    <h2>${manga.title}</h2>
    <div id="chapters"></div>
  `;

  const chapters = source.chapters(manga.id);
  const container = document.getElementById("chapters");

  chapters.forEach(ch => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = ch.title;
    div.onclick = () => openChapter(ch, source);
    container.appendChild(div);
  });
}

function openChapter(chapter, source) {
  content.innerHTML = `<div class="reader"></div>`;
  const reader = document.querySelector(".reader");

  source.pages(chapter.id).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    reader.appendChild(img);
  });
}
