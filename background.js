// Load token on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedToken = localStorage.getItem("api_token");
  if (savedToken) {
    document.getElementById("tokenInput").value = savedToken;
  }
});

function saveToken() {
  const token = document.getElementById("tokenInput").value.trim();
  if (!token) return alert("Token cannot be empty");
  localStorage.setItem("api_token", token);
  alert("Token saved locally");
}

function generateLink() {
  const link = document.getElementById("linkInput").value.trim();
  if (!link) return alert("Enter a link first");

  // STATIC placeholder (API will replace this)
  const finalLink = link + "?processed=true";

  document.getElementById("outputLink").textContent = finalLink;
}
