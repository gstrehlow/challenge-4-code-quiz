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