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
                alert("button works");
            } else if (this.getAttribute("id") === "submit-answer") {
                alert("button works");
            } else if (this.getAttribute("id") === "nextQ-button") {
                alert("button works");
            }
        })
    }
})
// variable for position in quiz question array
let position = 0;
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

function nextQuestion() {
    document.getElementById("test-status").innerHTML = ("Question " + (position + 1) + " of " + questions.length);
}

function displayQuestions() {
    let question = questions[position].question;
    let choiceA = questions[position].a;
    let choiceB = questions[position].b;
    let choiceC = questions[position].c;
    let choiceD = questions[position].d;

    document.getElementById("quiz-question").innerText = question;
    document.getElementById("label-optionA").innerText = choiceA;
    document.getElementById("label-optionB").innerText = choiceB;
    document.getElementById("label-optionC").innerText = choiceC;
    document.getElementById("label-optionD").innerText = choiceD;
}

// function addHighscore()

// function gameOver ()