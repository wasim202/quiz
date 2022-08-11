//Declare reference variables
var startQuizEl = document.getElementById("start-quiz");
var headerEl = document.getElementById("haeder");
var mainEl = document.querySelector(".content");
var timerEL = document.querySelector(".timer");
var quizFormEl = document.getElementById("quiz-form");
var p1El = document.getElementById("p1");
var p2El = document.getElementById("p2");
var p3El = document.getElementById("p3");
var p4El = document.getElementById("p4");
var p5El = document.getElementById("p5");

var options1EL = document.getElementById("options1");

//Declare setTime function for the timer count down 5 minutes

function setTime() {
  var minutesLeft = 5;
  timerEL.textContent = minutesLeft + " minutes left";
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
  }, 60000);
}

function quizQuestions() {
  // grap a reference to the element that display the question
  // able to show the question to the user - completed
  //how do i show the choices tpo the user
  // for loop to iterate over the userchoice array and show the value in the button
  //update text content of the button

  //console.log(p1El);
  //console.log(quizFormEl);

  // how to get these questions displayed to the DOM
  var questions = [
    {
      question: " what is the capital of Colorado?",
      userChoices: ["Denver", "Salem", "Seattle", "Austin"],
      correctAnswer: "Denver",
    },

    {
      question: " what is the capital of California?",
      userChoices: ["Springfield", "Seattle", "Sacramento", "Austin"],
      correctAnswer: "OptionC",
    },

    {
      question: " what is the capital of Texas?",
      userChoices: ["Austin", "Huston", "Carson City", "Denver"],
      correctAnswer: "OptionB",
    },

    // {
    //   question: " what is the capital of Nevada?",
    //   OptionA: "Austin",
    //   OptionB: "Seattle",
    //   OptionC: "Salem",
    //   OptionD: "Carson City",
    //   correctAnswer: "OptionA",
    // },

    // {
    //   question: " what is the capital of Illinois?",
    //   OptionA: "Montpelier",
    //   OptionB: "Seattle",
    //   OptionC: "Springfield",
    //   OptionD: "Baton Rouge",
    //   correctAnswer: "OptionC",
    // },
  ];
  //console.log(questions[0].question);

  //how can i show this value to the user?

  p1El.textContent = questions[0].question;
  // for (var i = 0; i <= userChoices.length; i++) {
  //   options1EL.createElement("button");
  //   options1EL.textContent = userChoices(i);
  //   options1EL.appendChild("button");
  // }

  p2El.textContent = questions[1].question;
  // for (var i = 0; i <= userChoices.length; i++)

  p3El.textContent = questions[2].question;
}

startQuizEl.addEventListener("click", function (event) {
  event.preventDefault();
  mainEl.remove();

  //setTime();
  quizQuestions();
});
