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
                alert("button works");
                console.log("button works");
            } else if (this.getAttribute("id") === "submit-username") {
                alert("button works");
            } else if (this.getAttribute("id") === "start-quiz") {
                displayQuestions();
                alert("button works");
            } else if (this.getAttribute("id") === "submit-answer") {
                alert("button works");
            } else if (this.getAttribute("id") === "nextQ-button") {
                alert("button works");
            }
        })
    }
})
// variables starting at value of 0.
let position = 0;
let percentage = 0;
/**
 * createUsername function gets the username submitted by the user and
 * stores it in session storage so it can be added to highscore table on quiz completion
 */
function createUsername() {
    let username = document.getElementById("username").innerText;
}

// function runQuiz()

// function checkAnswer()

// function correctAnswer()

// function wrongAnswer()

function displayQuestions() {
    document.getElementById("quiz-status").innerHTML = ("Question " + [position] + " of " + (questions.length));
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

function nextQuestion() {
    document.getElementById("quiz-status").innerHTML = ("Question " + ([position] + 1) + " of " + (questions.length));
}

// function addHighscore()

// function gameOver ()