var time = 20;
var score = 0;
var hit = 0;

function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 159; i++) {
    clutter += `<div class="round">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

function runTimer() {
  var timeint = setInterval(function () {
    if (time > 0) {
      time--;
      document.getElementById("timervalue").textContent = time;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `
    <div id="gameOverMessage">
         <h1>Game Over !</h1>
         <h3>You scored ${score} points</h3>
    </div>
   `;
    }
  }, 1000);
}
runTimer();

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.getElementById("hitval").textContent = hit;
}
getNewHit();

function increaseScore() {
  score += 10;
  document.getElementById("score").textContent = score;
}
// increaseScore();

document.querySelector("#pbtm").addEventListener("click", function (event) {
  var clickedNum = Number(event.target.textContent);
  if (clickedNum === hit) {
    increaseScore();
    getNewHit();
  }
});
