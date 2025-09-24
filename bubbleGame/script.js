const bubbleBox = document.querySelector("#bubbleBox");
const timerVal = document.querySelector("#timerVal");
const hitValue = document.querySelector("#hitValue");
const scoreVal = document.querySelector("#scoreVal");

let targetNum = 0;
// Make bubble
function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 162; i++) {
    const hitRnd = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble bg-success d-flex justify-content-evenly align-items-center text-white">${hitRnd}</div>`;
  }

  bubbleBox.innerHTML = clutter;
}

// Increase score
let scoreIn = 0;
function increaseScore() {
  scoreIn += 10;
  scoreVal.textContent = scoreIn;
}

// new hit refresh
function getNewHit() {
  targetNum = Math.floor(Math.random() * 10);
  hitValue.textContent = targetNum;
}

// Timer function
let timer = 60;
function runTimer() {
  const timerClear = setInterval(function () {
    if (timer > 0) {
      timer--;
      timerVal.textContent = timer;
    } else {
      clearInterval(timerClear);
      bubbleBox.innerHTML = "<h1 class='text-center'>Game Over</h1>";
    }
  }, 1000);
}

bubbleBox.addEventListener("click", function (e) {
  let bubbleSelect = Number(e.target.textContent);

  if (bubbleSelect === targetNum) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
getNewHit();
runTimer();
increaseScore();
