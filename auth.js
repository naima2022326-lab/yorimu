const passwords = ["flamnigo","hamster","hams","flams","nasra","muna"];

function unlock() {
  document.getElementById("lockScreen").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 500);
}

function checkPassword() {
  const input = passwordInput.value.toLowerCase();
  if (passwords.includes(input)) unlock();
  else error.textContent = "Incorrect password";
}

function googleLogin() {
  alert("Google OAuth ready. Add your API key in Google Cloud Console.");
}
