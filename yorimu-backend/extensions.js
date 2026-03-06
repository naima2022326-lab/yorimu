const extensions = [];

function registerExtension(ext) {
  extensions.push(ext);
}

function getEnabledExtensions() {
  return extensions.filter(e => e.enabled !== false);
}

function searchAllSources(query) {
  const results = [];

  getEnabledExtensions().forEach(ext => {
    ext.search(query).then(res => {
      results.push(...res);
      renderResults(results);
    });
  });
}

const fs = require("fs")
const path = require("path")

const EXT_DIR = "./extensions"

function loadExtensions() {
  if (!fs.existsSync(EXT_DIR)) return []

  const files = fs.readdirSync(EXT_DIR)

  return files.map(file => {
    return require(path.join("../extensions", file))
  })
}

module.exports = { loadExtensions }
