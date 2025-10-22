// Fade-in effect
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add("fade-in");
  });
});

// Countdown
const eventDate = new Date("2025-11-20T10:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  if (diff < 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}, 1000);

// YouTube Background Music
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '3gK_2XdjOdY', // Beautiful in White
    playerVars: { autoplay: 1, loop: 1, playlist: '3gK_2XdjOdY' }
  });
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const musicBtn = document.getElementById("music-btn");
musicBtn.addEventListener("click", () => {
  if (player && player.getPlayerState() === 1) {
    player.pauseVideo();
    musicBtn.textContent = "🔇";
  } else {
    player.playVideo();
    musicBtn.textContent = "🎵";
  }
});

const hiddenPlayer = document.createElement('div');
hiddenPlayer.id = 'player';
hiddenPlayer.style.display = 'none';
document.body.appendChild(hiddenPlayer);

// Lightbox
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("active"); });
