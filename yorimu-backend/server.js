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

app.get("/sources/extensions", (req, res) => {
  res.json([
    { id: "mangadex", name: "MangaDex" },
    { id: "demo", name: "Demo Source" }
  ]);
});

const express = require("express")
const cors = require("cors")

const mangadex = require("./sources/mangadex")

const app = express()
app.use(cors())


// SEARCH
app.get("/api/search", async (req,res)=>{
  const results = await mangadex.searchManga(req.query.q)
  res.json(results)
})


// CHAPTER LIST
app.get("/api/chapters/:id", async (req,res)=>{
  const chapters = await mangadex.getChapters(req.params.id)
  res.json(chapters)
})


// CHAPTER PAGES
app.get("/api/pages/:id", async (req,res)=>{
  const pages = await mangadex.getPages(req.params.id)
  res.json(pages)
})

app.listen(3000, ()=>{
  console.log("Yorimu backend running")
})
