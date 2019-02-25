function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  else {
    this.classList.remove("playing");
  }
}
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const drumpad = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0;
  audio.play();
  drumpad.classList.add("playing");
}

function playSoundByClick() {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0;
  audio.play();
  this.classList.add("playing");
}

function changeVolume() {
  let volume = this.value;
  let volumeOutput = document.querySelector("#volume");
  volumeOutput.innerHTML = "Volume: " + this.value;
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.volume = parseFloat(volume / 100).toFixed(1);
  });
}

// Select every keys
const drumpads = document.querySelectorAll(".drum-pad");
drumpads.forEach(drumpad => {
  // Call removeTransition when transition end
  drumpad.addEventListener("transitionend", removeTransition);
  drumpad.addEventListener("click", playSoundByClick);
});

const slider = document.querySelector(".slider");
slider.addEventListener("change", changeVolume);
slider.addEventListener("mousemove", changeVolume);
// Call playSound when user press a key
window.addEventListener("keydown", playSound);
