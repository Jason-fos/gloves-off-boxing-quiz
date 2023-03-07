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

            } else if (this.getAttribute("id") === "start-quiz") {
                displayQuestions();

            } else if (this.getAttribute("id") === "submit-answer") {

            } else if (this.getAttribute("id") === "nextQ-button") {
                nextQuestion()
            }
        })
    }
})

/**
 * createUsername function gets the username submitted by the user and
 * stores it in session storage so it can be added to highscore table on quiz completion
 */
function createUsername() {
    let username = document.getElementById("username").innerText;
}

// function runQuiz()

/**
 * the checkAnswer function checks answers to each question
 * updataes the allanswers array with this information
 * if correct then answer highlights green and score increments by 10pts
 * if incorrect then answer highlights red and score decrements by 5pts
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
let answerInfo = 0;

function checkAnswer() {
    let choices = document.getElementsByName("choices");

    for (let chosen = 0; chosen < choices.length; chosen++) {
        if (choices[chosen].checked) {
            let usersAnswer = choices[chosen].nextElementSibling.innerHTML;
            allAnswers[answerInfo][0] = questions[position].question;
            allAnswers[answerInfo][1] = usersAnswer;
            allAnswers[answerInfo][2] = questions[position].answer;

            // Users answer is correct
            if (usersAnswer == questions[position].answer) {
                allAnswers[answerInformation][3] = true;
            } else {
                allAnswers[answerInformation][3] = false;
            }
            answerInformation++;
        }
    }
    
}

// function correctAnswerGreen ()

// function wrongAnswerRed()

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
 * the nextQuestion function changes the html content and displays the next question to the user
 */
function nextQuestion() {
    document.getElementById("quiz-status").innerHTML = ("Question " + (position++) + " of " + questions.length);

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

    if (position >= questions.length) {
        //winShowScore();
    }
}

// function addHighscore()

// function winShowScore()

// function gameOver ()