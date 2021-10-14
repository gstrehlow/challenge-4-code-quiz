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

// Shows score when quiz is over.
function showScore(){
    quizbody.style.display = "none";
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// Saves highscores in local storage, then runs function that shows the high scores.
submitScoreBtn.addEventListener("click", function highscore(){
    if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } 
    else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        
    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
    }
});
// This function gives the ability to clear all inputted highscores and makes new list for local storage.
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newName);
        highscoreDisplayScore.appendChild(newScore);
    }
}

// When the highscore page opens, this function should hide all pages that are not the highscore page.
function showHighscore(){
    startQuizDiv.style.display = "none";
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

// This function will clear all trace of the highscores from both the local storage and the highscores page
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}
// this will allow the quiz to be restarted and everything to go back to its original position
function replayQuiz() {
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}

// this will check whether a response is correct or incorrect 
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    }
    else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("Incorrect!");
        currentQuestionIndex++;
        generateQuizQuestion();
        timeLeft--;
    }
    else {
        showScore();
    }
}

// start button
startQuizButton.addEventListener("click",startQuiz);
