const express = require("express")
const cors = require("cors")

const mangadex = require("./sources/mangadex")

const app = express()

app.use(cors())

app.get("/search", async (req,res)=>{
  const data = await mangadex.search(req.query.q)
  res.json(data)
})

app.get("/chapters/:id", async (req,res)=>{
  const data = await mangadex.chapters(req.params.id)
  res.json(data)
})

app.get("/pages/:id", async (req,res)=>{
  const data = await mangadex.pages(req.params.id)
  res.json(data)
})

app.listen(3000, ()=>{
  console.log("Yorimu backend running on port 3000")
})
