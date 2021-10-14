// List of HTML id's for manipulation
var quizbody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// List of the code quiz questions seen in the mock-up
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correctAnswer: "c"},
{
    question: "The condition in an if / else statement is enclosed with ______.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis", 
    choiceD: "square brackets",
    correctAnswer: "b"},
{
    question: "Arrays in JavaScript can be used to store ______.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans", 
    choiceD: "all of the above",
    correctAnswer: "d"},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes", 
    choiceD: "parenthesis",
    correctAnswer: "c"},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops", 
    choiceD: "console log",
    correctAnswer: "d"}];

// More global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// This function goes through the array with the quiz questions
function generateQuizQuestion(){
    gameoverDiv.style.display="none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
var currentQuestion = quizQuestions[currentQuestionIndex];
questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
buttonA.innerHTML = currentQuestion.choiceA;
buttonB.innerHTML = currentQuestion.choiceB;
buttonC.innerHTML = currentQuestion.choiceC;
buttonD.innerHTML = currentQuestion.choiceD;
};

// This function will initialize the quiz, the time will start, and the first question will appear.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
}, 1000);
quizbody.style.display = "block";
}


function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}
























startQuizButton.addEventListener("click",startQuiz);
