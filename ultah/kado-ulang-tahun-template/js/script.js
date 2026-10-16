const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");
const envelope = document.querySelector(".envelope");
const openGift = document.getElementById("openGift");
const backToStart = document.getElementById("backToStart");
const audio = document.getElementById("birthdayMusic");
const recordButton = document.getElementById("recordButton");
const musicStatus = document.getElementById("musicStatus");
const photoModal = document.getElementById("photoModal");
const modalCaption = document.getElementById("modalCaption");
const closePhotoModal = document.getElementById("closePhotoModal");

function showPage(pageToShow, pageToHide) {
  pageToHide.classList.remove("active");
  pageToHide.setAttribute("aria-hidden", "true");
  pageToShow.classList.add("active");
  pageToShow.setAttribute("aria-hidden", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

openGift.addEventListener("click", async () => {
  envelope.classList.add("opened");
  openGift.disabled = true;
  openGift.querySelector("span:first-child").textContent = "Membuka kejutan...";
  // Beri animasi amplop waktu untuk terbuka, lalu tampilkan halaman kedua.
  window.setTimeout(async () => {
    showPage(pageTwo, pageOne);
    openGift.disabled = false;
    openGift.querySelector("span:first-child").textContent = "Buka Kadonya";
    try {
      await audio.play();
      setMusicState(true);
    } catch (error) {
      // Browser bisa memblokir audio; penerima tetap bisa menekan piringan hitam.
      setMusicState(false);
    }
  }, 650);
});

backToStart.addEventListener("click", () => {
  showPage(pageOne, pageTwo);
  envelope.classList.remove("opened");
});

function setMusicState(isPlaying) {
  recordButton.classList.toggle("playing", isPlaying);
  recordButton.setAttribute("aria-label", isPlaying ? "Jeda musik" : "Putar musik");
  musicStatus.textContent = isPlaying ? "NOW PLAYING" : "PLAY A LITTLE MUSIC";
}

recordButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      setMusicState(true);
    } catch (error) {
      musicStatus.textContent = "AUDIO TIDAK DAPAT DIPUTAR";
    }
  } else {
    audio.pause();
    setMusicState(false);
  }
});

audio.addEventListener("ended", () => setMusicState(false));
audio.addEventListener("pause", () => setMusicState(false));
audio.addEventListener("play", () => setMusicState(true));

// Klik polaroid akan memunculkan caption dalam overlay.
document.querySelectorAll(".polaroid").forEach((photo) => {
  photo.addEventListener("click", () => {
    modalCaption.textContent = photo.dataset.caption || "Kenangan kecil yang berharga. ♡";
    photoModal.classList.add("show");
    photoModal.setAttribute("aria-hidden", "false");
    closePhotoModal.focus();
  });
});

function hidePhotoModal() {
  photoModal.classList.remove("show");
  photoModal.setAttribute("aria-hidden", "true");
}
closePhotoModal.addEventListener("click", hidePhotoModal);
photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) hidePhotoModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hidePhotoModal();
});

// Dekorasi di halaman pertama bisa diklik untuk memunculkan hati/bintang kecil.
document.querySelectorAll(".floating-deco").forEach((deco) => {
  deco.addEventListener("click", (event) => {
    const symbols = ["♡", "✦", "✿", "♥", "✨"];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const pop = document.createElement("span");
    pop.className = "float-pop";
    pop.textContent = symbol;
    pop.style.left = `${event.clientX}px`;
    pop.style.top = `${event.clientY}px`;
    document.body.appendChild(pop);
    window.setTimeout(() => pop.remove(), 1200);
  });
});
