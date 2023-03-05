/**
 * wait for DOM content to load before getting all buttons
 * then adding event listeners to them
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.id === "rules-button") {
                let rulesDiv = document.getElementById("rules-div");

            } else if (this.id === "submit-username") {
                createUsername();
            } else if (this.id === "submit-answer") {
                checkAnswer()
            } else if (this.id === "nextQ-btn") {
                displayNextQuestion()
            }
        })
    }
})

function createUsername()

function runQuiz()

function checkAnswer()

function correctAnswer()

function wrongAnswer()

function nextQuestion()


/**
 * shuffleQuestions function sorts and shuffles the questions array
 */

function shuffleQuestions()

function
