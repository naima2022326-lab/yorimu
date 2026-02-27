import express from "express";
import mangadex from "./sources/mangadex.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q || "";
    const results = await mangadex.search(q);
    res.json(results);
  } catch (e) {
    res.status(500).json({ error: "Search failed" });
  }
});

app.get("/api/manga", async (req, res) => {
  try {
    const id = req.query.id;
    const manga = await mangadex.manga(id);
    res.json(manga);
  } catch (e) {
    res.status(500).json({ error: "Manga fetch failed" });
  }
});

app.get("/api/pages", async (req, res) => {
  try {
    const id = req.query.id;
    const pages = await mangadex.pages(id);
    res.json(pages);
  } catch (e) {
    res.status(500).json({ error: "Pages fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Yorimu backend running on http://localhost:${PORT}`);
});
