let score = 0
/**
 * wait for DOM content to load before getting all buttons
 * then adding event listeners to them
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "rules-button") {
                let rulesDiv = document.getElementById("rules-div");

            } else if (this.getAttribute("id") === "submit-username") {
                createUsername();
            } else if (this.getAttribute("id") === "start-quiz") {
                displayQuestions();

            } else if (this.getAttribute("id") === "submit-answer") {
                checkAnswer()
            } else if (this.getAttribute("id") === "nextQ-button") {
                nextQuestion()
            }
        })
    }
})

/**
 * createUsername function gets the username submitted by the user and
 * stores it in a variable so it can be used to display the final score on quiz completion
 */
function createUsername() {
    let username = document.getElementById("username").innerHTML;
    console.log(username);
}

// function runQuiz()

/**
 * the displayQuestions function sets the  initail quiz area with its content of the first question
 * and answers 
 */
let position = 0;

function displayQuestions() {
    document.getElementById("quiz-status").innerHTML = ("Question " + (position + 1) + " of " + (questions.length));
    let question = questions[position].question;
    let choiceA = questions[position].a;
    let choiceB = questions[position].b;
    let choiceC = questions[position].c;
    let choiceD = questions[position].d;

    document.getElementById("quiz-question").innerHTML = question;
    document.getElementById("label-optionA").innerHTML = choiceA;
    document.getElementById("label-optionB").innerHTML = choiceB;
    document.getElementById("label-optionC").innerHTML = choiceC;
    document.getElementById("label-optionD").innerHTML = choiceD;
}
/**
 * the nextQuestion function changes the content of the html elements
 *  and displays the next question to the user
 */
function nextQuestion() {
    document.getElementById("quiz-status").innerHTML = ("Question " + (position++) + " of " + (questions.length));

    let question = questions[position].question;
    let choiceA = questions[position].a;
    let choiceB = questions[position].b;
    let choiceC = questions[position].c;
    let choiceD = questions[position].d;

    document.getElementById("quiz-question").innerHTML = question;
    document.getElementById("label-optionA").innerHTML = choiceA;
    document.getElementById("label-optionB").innerHTML = choiceB;
    document.getElementById("label-optionC").innerHTML = choiceC;
    document.getElementById("label-optionD").innerHTML = choiceD;
}

/**
 * the checkAnswer function checks answers to each question
  updataes the allanswers array with this information
  if correct the user is alerted and score increments by 10pts
 if incorrect the user is alerted and score decrements by 5pts
 */
let allAnswers = [];
allAnswers[0] = [];
allAnswers[1] = [];
allAnswers[2] = [];
allAnswers[3] = [];
allAnswers[4] = [];
allAnswers[5] = [];
allAnswers[6] = [];
allAnswers[7] = [];
allAnswers[8] = [];
allAnswers[9] = [];
allAnswers[10] = [];
allAnswers[11] = [];
allAnswers[12] = [];
allAnswers[13] = [];
allAnswers[14] = [];
allAnswers[15] = [];
allAnswers[16] = [];
allAnswers[17] = [];
allAnswers[18] = [];
allAnswers[19] = [];
let answerInfo = 0

function checkAnswer() {
    let choices = document.getElementsByName("choices");

    for (let chosen = 0; chosen < choices.length; chosen++) {
        if (choices[chosen].checked) {
            let usersAnswer = choices[chosen].nextElementSibling.innerHTML;
            allAnswers[answerInfo][0] = questions[position].question;
            allAnswers[answerInfo][1] = usersAnswer;
            allAnswers[answerInfo][2] = questions[position].answer;

            if (usersAnswer === questions[position].answer) {
                alert("Well Done, Correct Answer!")
                incrementScore();
            } else {
                alert("Ooops, Wrong answer!")
                decrementScore();
            }
            // answerInformation++;
        }
    }
}

function incrementScore() {
    score += 10;
    document.getElementById("current-score").innerText = ("Current Score:" + score);
}

function decrementScore() {
    score -= 5;
    document.getElementById("current-score").innerText = ("Current Score:" + score);
}

/**
 * timer function, credit: https://jsfiddle.net/Daniel_Hug/pvk6p/
 * the function updates the timer as time passes
 */
function timerDetails() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    timer.textContent = "Timer(MM:SS): " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timerStart();
}
// function timerStart()

// function winShowScore()

// function gameOver()