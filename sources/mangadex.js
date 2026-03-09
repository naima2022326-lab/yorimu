const axios = require("axios")

const API = "https://api.mangadex.org"

async function search(title) {

  const res = await axios.get(`${API}/manga`, {
    params: {
      title: title,
      limit: 12,
      includes: ["cover_art"],
      contentRating: ["safe","suggestive","erotica"]
    }
  })

  return res.data.data.map(m => {

    const cover = m.relationships.find(r => r.type === "cover_art")

    return {
      id: m.id,
      title: m.attributes.title.en || "No title",
      cover: cover
        ? `https://uploads.mangadex.org/covers/${m.id}/${cover.attributes.fileName}.256.jpg`
        : ""
    }

  })
}

async function chapters(mangaId){

  const res = await axios.get(`${API}/chapter`,{
    params:{
      manga: mangaId,
      translatedLanguage:["en"],
      order:{chapter:"desc"},
      limit:100
    }
  })

  return res.data.data

}

async function pages(chapterId){

  const res = await axios.get(`${API}/at-home/server/${chapterId}`)

  const base = res.data.baseUrl
  const hash = res.data.chapter.hash

  return res.data.chapter.data.map(page =>
    `${base}/data/${hash}/${page}`
  )

}

module.exports = { search, chapters, pages }
