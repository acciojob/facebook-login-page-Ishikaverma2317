// script.js

function showMessage(text, kind = "info") {
  const old = document.querySelector(".form-msg");
  if (old) old.remove();

  const form = document.querySelector(".login-card form");
  const msg = document.createElement("div");
  msg.className = "form-msg";
  msg.style.marginTop = "10px";
  msg.style.fontSize = "14px";
  msg.style.textAlign = "center";
  msg.textContent = text;
  msg.style.color = kind === "error" ? "#c32" : "#2b7a0b";
  form.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const forgot = document.getElementById("forgot");
  const signup = document.getElementById("signup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showMessage("Please enter both email/phone and password.", "error");
      if (!email) emailInput.style.borderColor = "#c32";
      if (!password) passwordInput.style.borderColor = "#c32";
      return;
    }

    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    showMessage("Logging in…", "info");

    setTimeout(() => {
      if (password.length >= 4) {
        alert("Login successful (demo). Welcome!");
      } else {
        showMessage("Wrong password. Try again.", "error");
      }
    }, 800);
  });

  forgot.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Account recovery demo: would redirect to /recover/initiate");
  });

  signup.addEventListener("click", function () {
    alert("Redirecting to registration page (demo).");
  });
});
