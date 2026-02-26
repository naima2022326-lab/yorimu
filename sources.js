const sources = [
  {
    name: "Tachiyomi Style",
    search: q => `https://www.google.com/search?q=${q}+manga`
  },
  {
    name: "Mihon Style",
    search: q => `https://www.google.com/search?q=${q}+read+online`
  },
  {
    name: "Tachimanga Style",
    search: q => `https://www.google.com/search?q=${q}+chapter`
  }
];

const sourceSelect = document.getElementById("sourceSelect");
sources.forEach((s, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = s.name;
  sourceSelect.appendChild(opt);
});
