const mainVideo = document.getElementById("mainVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const muteBtn = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");
const videoControls = document.getElementById("videoControls");
const mobileControlsToggle = document.getElementById("mobileControlsToggle");

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (mainVideo.play) {
    mainVideo.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    mainVideo.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});

// Mute/Unmute functionality
muteBtn.addEventListener("click", () => {
  if (mainVideo.muted) {
    mainVideo.muted = false;
    muteIcon.classList.remove("fa-volume-off");
    muteIcon.classList.add("fa-volume-up");
  } else {
    mainVideo.muted = true;
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-off");
  }
});

// Mobile controls toggle
mobileControlsToggle.addEventListener("click", () => {
  videoControls.classList.toggle("d-none");
});
