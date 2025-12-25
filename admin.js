document.addEventListener("DOMContentLoaded", () => {
  const savedToken = localStorage.getItem("api_token");

  if (savedToken) {
    document.getElementById("tokenCard").classList.add("hidden");
    document.getElementById("updateTokenBtn").classList.remove("hidden");
  }
});

function saveToken() {
  const token = document.getElementById("tokenInput").value.trim();
  if (!token) {
    alert("Token cannot be empty");
    return;
  }

  localStorage.setItem("api_token", token);

  document.getElementById("tokenCard").classList.add("hidden");
  document.getElementById("updateTokenBtn").classList.remove("hidden");
}

function showTokenCard() {
  document.getElementById("tokenCard").classList.remove("hidden");
  document.getElementById("updateTokenBtn").classList.add("hidden");
}

function generateLink() {
  const link = document.getElementById("linkInput").value.trim();
  if (!link) {
    alert("Enter a link");
    return;
  }

  const finalLink = link + "?processed=true";

  document.getElementById("outputLink").textContent = finalLink;
  document.getElementById("outputSection").classList.remove("hidden");
}

function copyLink() {
  const text = document.getElementById("outputLink").textContent;
  navigator.clipboard.writeText(text);

  const btn = document.querySelector(".copy-btn");
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = "Copy"), 1200);
}
