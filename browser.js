const frame = document.getElementById("browserFrame");

function go() {
  const input = document.getElementById("urlBar").value;
  if (input.startsWith("http")) {
    frame.src = input;
  } else {
    frame.src = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }
}

function openBrowser() {
  frame.style.display = "block";
  document.getElementById("reader").style.display = "none";
}
