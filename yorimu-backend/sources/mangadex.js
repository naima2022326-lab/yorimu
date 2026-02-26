import axios from "axios";

const API = "https://api.mangadex.org";

export default {
  async search(query) {
    const res = await axios.get(`${API}/manga`, {
      params: {
        title: query,
        limit: 12,
        includes: ["cover_art"]
      }
    });

    return res.data.data.map(m => {
      const coverRel = m.relationships.find(r => r.type === "cover_art");
      const cover = coverRel
        ? `https://uploads.mangadex.org/covers/${m.id}/${coverRel.attributes.fileName}`
        : "";

      return {
        id: m.id,
        title: m.attributes.title.en || "No title",
        cover,
        chapters: "?"
      };
    });
  },

  async manga(id) {
    const res = await axios.get(`${API}/chapter`, {
      params: {
        manga: id,
        translatedLanguage: ["en"],
        order: { chapter: "asc" },
        limit: 100
      }
    });

    return {
      id,
      title: "Manga",
      chapters: res.data.data.map(ch => ({
        id: ch.id,
        title: `Chapter ${ch.attributes.chapter || "?"}`
      }))
    };
  },

  async pages(chapterId) {
    const res = await axios.get(`${API}/at-home/server/${chapterId}`);
    const base = res.data.baseUrl;
    const hash = res.data.chapter.hash;

    return res.data.chapter.data.map(
      p => `${base}/data/${hash}/${p}`
    );
  }
};
