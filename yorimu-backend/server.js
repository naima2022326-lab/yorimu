import mangadex from "./sources/mangadex.js";
app.get("/api/search", async (req, res) => {
  const q = req.query.q;
  const results = await mangadex.search(q);
  res.json(results);
});

app.get("/api/manga", async (req, res) => {
  const id = req.query.id;
  const manga = await mangadex.manga(id);
  res.json(manga);
});

app.get("/api/pages", async (req, res) => {
  const id = req.query.id;
  const pages = await mangadex.pages(id);
  res.json(pages);
});
