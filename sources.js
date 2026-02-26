const sources = [
  {
    id: "demo-manga",
    name: "Demo Manga Source",
    type: "manga",
    search(query) {
      return [
        {
          id: "demo1",
          title: "Demo Manga",
          cover: "https://via.placeholder.com/300x420",
          chapters: 12
        }
      ];
    },
    chapters(mangaId) {
      return Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Chapter ${i + 1}`
      }));
    },
    pages(chapterId) {
      return [
        "https://via.placeholder.com/900x1400",
        "https://via.placeholder.com/900x1400",
        "https://via.placeholder.com/900x1400"
      ];
    }
  }
];
