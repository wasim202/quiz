//Declare reference variables
var startQuizEl = document.getElementById("start-quiz");
var headerEl = document.getElementById("haeder");
var mainEl = document.querySelector(".content");
var timerEL = document.querySelector(".timer");

//Declare setTime function for the timer count down 5 minutes

function setTime() {
  var minutesLeft = 300;

  var timerInterval = setInterval(function () {
    // timerEL.textContent = minutesLeft + "minutesLeft";
    if (minutesLeft > 1) {
      timerEL.textContent = minutesLeft + " minutes left";
      minutesLeft--;
    } else if (minutesLeft === 1) {
      timerEL.textContent = minutesLeft + " minute left";
      minutesLeft--;
    } else {
      timerEL.textContent = "TIME IS UP";
      clearInterval(timerInterval);
    }
  }, 1000);
}

startQuizEl.addEventListener("click", function (event) {
  event.preventDefault();
  mainEl.remove();
  setTime();
});
