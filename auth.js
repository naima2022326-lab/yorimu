const passwords = [
  "flamnigo",
  "hamster",
  "hams",
  "flams",
  "nasra",
  "muna"
];

function checkPassword() {
  const input = passwordInput.value.toLowerCase();
  if (passwords.includes(input)) {
    fadeOut("lockScreen", "intro1");
  } else {
    error.textContent = "Incorrect password";
  }
}

function fadeOut(current, next) {
  const c = document.getElementById(current);
  c.style.opacity = "0";
  setTimeout(() => {
    c.classList.add("hidden");
    document.getElementById(next).classList.remove("hidden");
  }, 600);
}

function nextIntro(n) {
  fadeOut(`intro${n-1}`, `intro${n}`);
}

function enterApp() {
  document.getElementById("intro3").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}
