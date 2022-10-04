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
var choicesEl = document.getElementById("choices");

//var submitEl = document.querySelector(".btn-submit");

var check1El = document.getElementById("check1");

//Declare setTime function for the timer count down 80 seconds

var secondsLeft = 80;
var timer;
function setTime() {
  timerEL.textContent = secondsLeft + " seconds left";
  //var timerInterval = setInterval(function () {
    // timerEL.textContent = secondsLeft + "secondsLeft";
    if (secondsLeft > 1) {
      timerEL.textContent = secondsLeft + " seconds left";
      secondsLeft--;
    } else if (secondsLeft === 1) {
      timerEL.textContent = secondsLeft + " seconds left";
      secondsLeft--;
    } else {
      timerEL.textContent = "TIME IS UP";
      clearInterval(timer);
    }
  //}, 1000);
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

  currentQuestion.userChoices.forEach(function (choice) {
    //create a button for each choice
    choiceBtnEl = document.createElement("button");
    choiceBtnEl.setAttribute("data-btn", choice);
    //update the text content of the button to equal the value
    choiceBtnEl.textContent = choice;
    //console.log(choice);
    //append it to the DOM
    
    choicesEl.append(choiceBtnEl);
  });

 
  console.log(questionIndex);
}
choicesEl.addEventListener("click", function (event) {
  var element = event.target;
  var buttonAnswer = element.getAttribute("data-btn"); // get data-btn for this button
  //console.log(buttonAnswer);
  var currentQuestion = questions[questionIndex];
  if (buttonAnswer === currentQuestion.correctAnswer) {
    check1El.textContent = "correct";
  } else {
    check1El.textContent = "wrong";
    secondsLeft -=1;
  }
  choicesEl.textContent = "";
  questionIndex++;
  if (questionIndex >= questions.length){
    clearInterval(timer);
    alert(`game over, your final score is ${secondsLeft}`)
  }else{
    getQuestion();
  }
});

// nextEl = document.createElement("button");
// nextEl.textContent = "Next";
// choicesEl.append(nextEl);

// function checkAnswers() {}

//getQuestion();
startQuizEl.addEventListener("click", function (event) {
  event.preventDefault();
  mainEl.remove();
  timer = setInterval(setTime,1000);
  getQuestion();
});

// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   choicesEl.remove();
//   questionTitleEl.remove();
//   getQuestion();

// });
