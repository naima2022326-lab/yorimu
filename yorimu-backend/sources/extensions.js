import mangadex from "./mangadex.js";
import gogoanime from "./gogoanime.js";

export const extensions = [
  mangadex,
  gogoanime
];

export function getEnabledExtensions() {
  const saved = JSON.parse(localStorage.getItem("yorimuExtensions") || "[]");

  if (saved.length === 0) {
    return extensions;
  }

  return extensions.filter(ext => saved.includes(ext.id));
}

export function toggleExtension(id) {
  let saved = JSON.parse(localStorage.getItem("yorimuExtensions") || "[]");

  if (saved.includes(id)) {
    saved = saved.filter(e => e !== id);
  } else {
    saved.push(id);
  }

  localStorage.setItem("yorimuExtensions", JSON.stringify(saved));
}
