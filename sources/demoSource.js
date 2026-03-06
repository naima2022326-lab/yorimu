import axios from "axios";
import cheerio from "cheerio";

export default {
  async search(query) {
    // DEMO DATA (replace later with real scraping)
    return [
      {
        id: "demo-manga",
        title: "Demo Manga",
        cover: "https://via.placeholder.com/300x420",
        chapters: 12
      }
    ];
  },

  async manga(id) {
    return {
      id,
      title: "Demo Manga",
      chapters: Array.from({ length: 12 }, (_, i) => ({
        id: `ch-${i + 1}`,
        title: `Chapter ${i + 1}`
      }))
    };
  },

  async pages(chapterId) {
    return [
      "https://via.placeholder.com/900x1400",
      "https://via.placeholder.com/900x1400",
      "https://via.placeholder.com/900x1400"
    ];
  }
};
