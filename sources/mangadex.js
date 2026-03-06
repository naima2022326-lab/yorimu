registerExtension({
  id: "mangadex",
  name: "MangaDex",
  enabled: true,

  async search(query) {

    const res = await fetch(
      `https://api.mangadex.org/manga?title=${query}&limit=10&includes[]=cover_art`
    );

    const data = await res.json();

    return data.data.map(m => {

      const cover = m.relationships.find(r => r.type === "cover_art");

      return {
        title: m.attributes.title.en || "Unknown",
        cover: `https://uploads.mangadex.org/covers/${m.id}/${cover.attributes.fileName}.256.jpg`,
        source: "MangaDex",
        id: m.id
      };

    });

  }
});

const axios = require("axios")

const BASE_URL = "https://api.mangadex.org"

// SEARCH MANGA
async function searchManga(title) {
  const res = await axios.get(`${BASE_URL}/manga`, {
    params: {
      title: title,
      limit: 10,
      contentRating: ["safe","suggestive","erotica"],
      includes: ["cover_art"]
    }
  })

  return res.data.data
}


// GET CHAPTER LIST
async function getChapters(mangaId) {
  const res = await axios.get(`${BASE_URL}/chapter`, {
    params: {
      manga: mangaId,
      translatedLanguage: ["en"],
      order: { chapter: "asc" },
      limit: 100
    }
  })

  return res.data.data
}


// GET CHAPTER PAGES
async function getPages(chapterId) {
  const res = await axios.get(`${BASE_URL}/at-home/server/${chapterId}`)

  const base = res.data.baseUrl
  const hash = res.data.chapter.hash
  const pages = res.data.chapter.data

  const pageUrls = pages.map(page =>
    `${base}/data/${hash}/${page}`
  )

  return pageUrls
}

module.exports = {
  searchManga,
  getChapters,
  getPages
}
