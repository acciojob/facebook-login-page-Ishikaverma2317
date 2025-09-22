// script.js

// Helper: show a temporary message below the form (simple approach)
function showMessage(text, kind = "info") {
  // remove existing
  const old = document.querySelector(".form-msg");
  if (old) old.remove();

  const form = document.querySelector(".login-card form");
  const msg = document.createElement("div");
  msg.className = "form-msg";
  msg.style.marginTop = "10px";
  msg.style.fontSize = "14px";
  msg.style.textAlign = "center";
  msg.textContent = text;
  if (kind === "error") {
    msg.style.color = "#c32";
  } else {
    msg.style.color = "#2b7a0b";
  }
  form.appendChild(msg);

  // auto remove after 4s
  setTimeout(() => msg.remove(), 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const forgot = document.getElementById("forgot");
  const create = document.getElementById("createAccount");

  // Handle form submit (Log in)
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation
    if (!email || !password) {
      showMessage("Please enter both email/phone and password.", "error");
      // highlight missing fields a bit
      if (!email) emailInput.style.borderColor = "#c32";
      if (!password) passwordInput.style.borderColor = "#c32";
      return;
    }

    // Reset border colors
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    // Fake "login" flow (since we don't have a backend)
    // You can replace this with actual API call later.
    showMessage("Logging in…", "info");

    // Simulate async check
    setTimeout(() => {
      // fake success if password length >= 4 (just demo)
      if (password.length >= 4) {
        alert("Login successful (demo). Welcome!");
        // In real app you would redirect:
        // window.location.href = "/home";
      } else {
        showMessage("Wrong password. Try again.", "error");
      }
    }, 800);
  });

  // "Forgotten account?"
  forgot.addEventListener("click", function (e) {
    e.preventDefault();
    // Simple behavior: show a message / open recovery page
    alert("Account recovery demo: we would redirect you to the recovery page.");
    // Example real redirect:
    // window.location.href = "/recover";
  });

  // "Create new account"
  create.addEventListener("click", function () {
    // Redirect to a registration page (placeholder)
    alert("Redirecting to registration page (demo).");
    // Replace with the actual registration URL when you have it:
    // window.location.href = "register.html";
  });
});
