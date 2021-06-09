const keys = document.querySelectorAll(".key");
note = document.querySelector(".nowplaying");
hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
const regulars = document.querySelectorAll(".key.white");

const sharpKeys = document.querySelectorAll(".key.sharp");
var sharpKeyLength = document.querySelectorAll(".key.sharp").length;
console.log(sharpKeyLength);

const whiteKeys = document.querySelectorAll(".key.white");
var whiteKeyLength = document.querySelectorAll(".key.white").length;

console.log(whiteKeyLength);

const darkButton = document.getElementById("darkButton");

const whiteButton = document.getElementById("whiteButton");

darkButton.addEventListener("click", () => {
  // body.classList.add("darkColor");
  console.log("hellow hii");
  for (var i = 0; i < sharpKeyLength; i++) {
    sharpKeys[i].classList.add("changeSharpColor");
  }
  for (var i = 0; i < whiteKeyLength; i++) {
    whiteKeys[i].classList.add("changeWhiteColor");
  }
});

whiteButton.addEventListener("click", () => {
  for (var i = 0; i < sharpKeyLength; i++) {
    sharpKeys[i].classList.remove("changeSharpColor");
  }
  for (var i = 0; i < whiteKeyLength; i++) {
    whiteKeys[i].classList.remove("changeWhiteColor");
  }
});

whiteButton.addEventListener("click", () => {
  body.classList.remove("darkColor");
});

// for click

// let playNoteClick = (key) => {
//   const noteSound = document.getElementById(key.dataset.note);
//   noteSound.currentTime = 0;
//   noteSound.play();
//   console.log("heelo");
//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;

//   setTimeout(function () {
//     key.classList.remove("active");
//   }, 100);

//   // noteSound.addEventListener("ended", () => {
//   //   key.classList.remove("active");
//   // });
// };

// let playNoteClick = (e) => {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//   if (!key) return;

//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;
//   audio.currentTime = 0;
//   audio.play();
// };

// keys.forEach((key) => {
//   key.addEventListener("click", () => playNoteClick(key));
// });
