// Hiệu ứng fade khi cuộn
const sections = document.querySelectorAll(".fade-section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("fade-in");
    }
  });
});

// Countdown
const eventDate = new Date("2025-11-20T10:00:00").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<h2>Chúc mừng ngày cưới 💕</h2>";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// Nhạc nền YouTube
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '3gK_2XdjOdY', // Beautiful in White
    playerVars: { 'autoplay': 1, 'loop': 1, 'playlist': '3gK_2XdjOdY' }
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

// Ẩn player YouTube
const hiddenPlayer = document.createElement('div');
hiddenPlayer.id = 'player';
hiddenPlayer.style.display = 'none';
document.body.appendChild(hiddenPlayer);
