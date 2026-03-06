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
