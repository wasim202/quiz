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
//var options1EL = document.getElementById("options1");
var answer1El = document.getElementById("o1-q1");
var answer2El = document.getElementById("o2-q2");
var answer3El = document.getElementById("o3-q3");
var answer4El = document.getElementById("o4-q4");
var answer5El = document.getElementById("o5-q5");
var submitEl = document.querySelector(".btn-submit");
var check1El = document.getElementById("check1");

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
  //how do i show the choices tpo the user - completed
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

    {
      question: " what is the capital of Nevada?",
      userChoices: ["Carson City", "Salem", "San Antoio", "Denver"],
      correctAnswer: "OptionA",
    },

    {
      question: " what is the capital of Illinois?",
      userChoices: ["Montpelier", "Seattle", "Springfield", "Baton Rouges"],
      correctAnswer: "OptionC",
    },
  ];

  //how can i show this value to the user?

  quizFormEl.removeAttribute("class");

  // show the first question to the user
  p1El.textContent = questions[0].question;

  // for (var i = 0; i <= userChoices.length; i++) {
  //   if (questions[0].userChoices[0] === questions[0].correctAnswer) {
  //     check1El.textContent = "CORRECT";
  //   } else {
  //     check1El.textContent = "WRONG";
  //   }
  // }

  // show the second question to the user
  p2El.textContent = questions[1].question;
  // show the third question to the user
  p3El.textContent = questions[2].question;
  // show the fourth question to the user
  p4El.textContent = questions[3].question;
  // show the fifth question to the user
  p5El.textContent = questions[4].question;
}

function checkAnswers() {
  var answers;
  var correct = 0;
  var wrong = 0;
  //for loop to iterater over questions array - correctAnswer
  if (answer1El.click) {
    correct++;
  } else {
    wrong++;
  }

  if (answer2El.click) {
    correct++;
  } else {
    wrong++;
  }

  if (answer3El.click) {
    correct++;
  } else {
    wrong++;
  }

  if (answer4El.click) {
    correct++;
  } else {
    wrong++;
  }

  if (answer5El.click) {
    correct++;
  } else {
    wrong++;
  }

  console.log(correct);
}

startQuizEl.addEventListener("click", function (event) {
  event.preventDefault();
  mainEl.remove();
  setTime();
  quizQuestions();
});

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  quizFormEl.remove();
  checkAnswers();
});
