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
    document.getElementById("lockScreen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("lockScreen").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 400);
  } else {
    error.textContent = "Incorrect password";
  }
}
