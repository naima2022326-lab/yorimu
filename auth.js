const passwords = [
  "flamnigo",
  "hamster",
  "hams",
  "flams",
  "nasra",
  "muna"
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const error = document.getElementById("error");

  if (passwords.includes(input)) {
    showScreen("lockScreen", "intro1");
  } else {
    error.textContent = "Incorrect password";
  }
}

function showScreen(from, to) {
  const current = document.getElementById(from);
  const next = document.getElementById(to);

  current.classList.add("fade-out");

  setTimeout(() => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
    next.classList.remove("fade-out");
  }, 800);
}

function nextIntro(num) {
  showScreen(`intro${num - 1}`, `intro${num}`);
}

function enterApp() {
  const last = document.getElementById("intro3");
  last.classList.add("fade-out");

  setTimeout(() => {
    last.classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }, 800);
}
