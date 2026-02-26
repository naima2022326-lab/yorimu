import express from "express";
import demoSource from "./sources/demoSource.js";

const app = express();
const PORT = 3000;

app.get("/api/search", async (req, res) => {
  const q = req.query.q;
  const results = await demoSource.search(q);
  res.json(results);
});

app.get("/api/manga", async (req, res) => {
  const id = req.query.id;
  const manga = await demoSource.manga(id);
  res.json(manga);
});

app.get("/api/pages", async (req, res) => {
  const id = req.query.id;
  const pages = await demoSource.pages(id);
  res.json(pages);
});

app.listen(PORT, () => {
  console.log("Yorimu backend running on port", PORT);
});
