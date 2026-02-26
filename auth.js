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
    transition("lockScreen", "intro1");
  } else {
    error.textContent = "Incorrect password";
  }
}

function transition(from, to) {
  const a = document.getElementById(from);
  const b = document.getElementById(to);

  a.classList.add("fade-out");

  setTimeout(() => {
    a.classList.add("hidden");
    b.classList.remove("hidden");
  }, 800);
}

function nextIntro(n) {
  transition(`intro${n - 1}`, `intro${n}`);
}

function enterApp() {
  document.getElementById("intro3").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("intro3").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }, 800);
}

// ENTER KEY = CLICK ENTER BUTTON
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && !document.getElementById("lockScreen").classList.contains("hidden")) {
    checkPassword();
  }
});
