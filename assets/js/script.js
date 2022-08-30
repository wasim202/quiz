var questionIndex = 0;

var questions = [
  {
    question: " what is the capital of Colorado?",
    userChoices: ["Denver", "Salem", "Seattle", "Austin"],
    correctAnswer: "Denver",
  },

  {
    question: " what is the capital of California?",
    userChoices: ["Springfield", "Seattle", "Sacramento", "Austin"],
    correctAnswer: "Sacramento",
  },

  {
    question: " what is the capital of Texas?",
    userChoices: ["Austin", "Houston", "Carson City", "Denver"],
    correctAnswer: "Austin",
  },

  {
    question: " what is the capital of Nevada?",
    userChoices: ["Carson City", "Salem", "San Antoio", "Denver"],
    correctAnswer: "Carson City",
  },

  {
    question: " what is the capital of Illinois?",
    userChoices: ["Montpelier", "Seattle", "Springfield", "Baton Rouges"],
    correctAnswer: "Springfield",
  },
];
//Declare reference variables
var startQuizEl = document.getElementById("start-quiz");
var headerEl = document.getElementById("haeder");
var mainEl = document.querySelector(".content");
var timerEL = document.querySelector(".timer");

//var submitEl = document.querySelector(".btn-submit");

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

function getQuestion() {
  var divQuestions = document.getElementById("questions");
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion);
  var questionTitleEl = document.getElementById("question-title");
  //var currentQuestion = questions[questionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  //console.log(questionTitleEl);
  console.log(currentQuestion.question);
  //console.log(currentQuestion.userChoices);
  console.log(questionIndex);
  //create a button for each userchoice
  //create a button with createElement()

  currentQuestion.userChoices.forEach(function (choice, i) {
    //create a button for each choice
    choiceBtnEl = document.createElement("button");
    choiceBtnEl.setAttribute("data-btn", choice);
    //update the text content of the button to equal the value
    choiceBtnEl.textContent = choice;
    //console.log(choice);
    //append it to the DOM
    choicesEl = document.getElementById("choices");
    choicesEl.append(choiceBtnEl);
  });

  choicesEl = document.getElementById("choices");
  choicesEl.addEventListener("click", function (event) {
    var element = event.target;
    var buttonAnswer = element.getAttribute("data-btn"); // get data-btn for this button
    //console.log(buttonAnswer);

    if (buttonAnswer === currentQuestion.correctAnswer) {
      check1El.textContent = "correct";
    } else {
      check1El.textContent = "wrong";
    }
    choicesEl.textContent = "";
    questionIndex++;

    getQuestion();
  });
  console.log(questionIndex);
}

// nextEl = document.createElement("button");
// nextEl.textContent = "Next";
// choicesEl.append(nextEl);

// function checkAnswers() {}

//getQuestion();
startQuizEl.addEventListener("click", function (event) {
  event.preventDefault();
  mainEl.remove();
  setTime();
  getQuestion();
});

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   choicesEl.remove();
//   questionTitleEl.remove();
//   getQuestion();

// });
