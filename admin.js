/* =========================
   SNOW GENERATOR
========================= */
const snow = document.getElementById("snow");

for (let i = 0; i < 20; i++) {
  const s = document.createElement("span");
  s.textContent = "❄";
  s.style.left = Math.random() * 100 + "%";
  s.style.fontSize = 0.6 + Math.random() * 0.8 + "rem";
  s.style.animationDuration = 12 + Math.random() * 18 + "s";
  s.style.animationDelay = Math.random() * 10 + "s";
  snow.appendChild(s);
}

/* =========================
   BUTTON STATE DEMO
   (YOU WILL REPLACE THIS)
========================= */
const btn = document.getElementById("actionBtn");

setTimeout(() => {
  btn.disabled = false;
  btn.textContent = "Verifying...";
}, 2500);

setTimeout(() => {
  btn.textContent = "Continue";
}, 4500);

/* =========================
   AD TOGGLE
========================= */
const showAd = false; // set true to show ad
if (showAd) {
  document.getElementById("adBadge").style.display = "block";
}
