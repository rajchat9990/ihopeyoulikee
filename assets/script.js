// Confetti generator
function launchConfetti() {
  const colors = ['#ff0', '#0f0', '#0ff', '#f0f', '#f00'];
  for (let i = 0; i < 30; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.position = "fixed";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = "-20px";
    conf.style.opacity = Math.random();
    conf.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(conf);

    let fall = conf.animate([
      { transform: `translateY(0px)` },
      { transform: `translateY(${window.innerHeight + 100}px)` }
    ], {
      duration: 2000 + Math.random() * 2000,
      iterations: 1
    });
    fall.onfinish = () => conf.remove();
  }
}

// Button run away
function runaway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

function playSong() {
  let song = document.getElementById("birthdaySong");
  if (song) {
    song.play().catch(error => {
      console.log("Autoplay prevented, will play after interaction:", error);
    });
  }
}

let isPlaying = false;

function toggleMusic() {
  let song = document.getElementById("birthdaySong");
  let btn = document.getElementById("music-btn");

  if (!isPlaying) {
    song.play().catch(error => console.log("Autoplay prevented:", error));
    btn.textContent = "🔇 Pause Music";
    isPlaying = true;
  } else {
    song.pause();
    btn.textContent = "🎵 Play Music";
    isPlaying = false;
  }
}

// ===== Pop-up messages for NO button =====
const messages = [
  "Maaf kr bhii do yrr 😅",
  "Itna toh Ambani bhi bhav kahta 😜",
  "Abe yaar, forgive me na! 😂",
  "Dil se sorry, thoda Bollywood style 🤏🎬",
  "Arre bhai, ek baar maaf kr de yrr 😎"
];
let msgIndex = 0;

// ===== Runaway + pop-up + vibration =====
function runawayAndPop(button) {
  // Move button randomly
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';

  // Vibration for mobile
  if (navigator.vibrate) navigator.vibrate(100);

  // Pop-up message
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.textContent = messages[msgIndex];
  document.body.appendChild(popup);

  // Remove after 2 seconds
  setTimeout(() => popup.remove(), 2000);

  // Update message index
  msgIndex = (msgIndex + 1) % messages.length;
}

// ===== Music toggle =====
let isPlaying = false;
function toggleMusic() {
  let song = document.getElementById("birthdaySong");
  let btn = document.getElementById("music-btn");
  if (!isPlaying) {
    song.play().catch(err => console.log(err));
    btn.textContent = "🔇 Pause Music";
    isPlaying = true;
  } else {
    song.pause();
    btn.textContent = "🎵 Play Music";
    isPlaying = false;
  }
}

// ===== Confetti on YES click =====
function launchConfetti() {
  const colors = ['#ff0','#0f0','#0ff','#f0f','#f00'];
  for (let i=0;i<30;i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.position = "fixed";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.background = colors[Math.floor(Math.random()*colors.length)];
    conf.style.left = Math.random()*window.innerWidth+"px";
    conf.style.top = "-20px";
    conf.style.opacity = Math.random();
    conf.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(conf);

    let fall = conf.animate([
      { transform: `translateY(0px)` },
      { transform: `translateY(${window.innerHeight + 100}px)` }
    ], { duration: 2000 + Math.random()*2000, iterations:1 });

    fall.onfinish = () => conf.remove();
  }
}