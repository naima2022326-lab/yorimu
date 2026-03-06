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
