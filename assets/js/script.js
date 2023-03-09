/**
 * wait for DOM content to load before getting all buttons
 * then adding event listeners to them
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "rules-button") {
                toggleRules();
            } else if (this.getAttribute("id") === "submit-username") {
                createUsername();
                alert("Username Submitted");
            } else if (this.getAttribute("id") === "start-quiz") {
                runQuiz();
            } else if (this.getAttribute("id") === "submit-answer") {
                checkAnswer();
            } else if (this.getAttribute("id") === "nextQ-button") {
                nextQuestion();
                document.getElementById("right-wrong-text").innerHTML = clearText;
            }
        })
    }
})

// quiz variables
let score = 0;
let position = 0;
let currentScore = 0;
let correctText = `<h3>Correct Answer!</h3>`;
let wrongText = `<h3>Wrong Answer!</h3>`;
let clearText = `<h3></h3>`;

/**
 * when rules button is clicked
 * toggleRules function hides and displays a div with rules recap
 */
function toggleRules() {
    let r = document.getElementById("rules-toggle");
    if (r.style.display === "none") {
        r.style.display = "block";
    } else {
        r.style.display = "none";
    }
}

/**
 * createUsername function gets the username submitted by the user and
 * stores it in a variable so it can be used to display the final score on quiz completion
 */
function createUsername() {
    let username = document.getElementById("username").value;

    console.log(username);
}

/**
 * runQuiz function starts the quiz and is the main structure of the quiz
 * it calls the next
 */
function runQuiz() {
    if (position < questions.length) {
        nextQuestion();
    } else if (currentScore < 0) {
        gameOver();
    } else {
        winShowScore();
    }
}




/**
 * the nextQuestion function changes the content of the html elements
 *  and displays the next question to the user along with the 4 potential answers
 */
function nextQuestion() {
    document.getElementById("quiz-status").innerHTML = ("Question " + (position + 1) + " of " + questions.length);

    let question = questions[position].question;
    let choiceA = questions[position].a;
    let choiceB = questions[position].b;
    let choiceC = questions[position].c;
    let choiceD = questions[position].d;

    document.getElementById("quiz-question").innerHTML = (position + 1 + ". " + question);
    document.getElementById("label-optionA").innerHTML = choiceA;
    document.getElementById("label-optionB").innerHTML = choiceB;
    document.getElementById("label-optionC").innerHTML = choiceC;
    document.getElementById("label-optionD").innerHTML = choiceD;
   

}

/**
 * the checkAnswer function checks answers to each question
 * updates the allAnswers array with this information
 * if correct the score increments by 10pts
 * if incorrect the score decrements by 5pts
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
            console.log(usersAnswer);
            allAnswers[answerInfo][0] = questions[position].question;
            allAnswers[answerInfo][1] = usersAnswer;
            allAnswers[answerInfo][2] = questions[position].answer;

            if (usersAnswer === questions[position].answer) {
                incrementScore();
                currentScore += 10;
                document.getElementById("right-wrong-text").innerHTML = correctText;
            } else {
                decrementScore();
                currentScore -= 10;
                document.getElementById("right-wrong-text").innerHTML = wrongText;
            }
            answerInfo++;
            position++;
        }
    }
}
/**
 * incrementScore adds 10 pts to current-score for each correct answer 
 */
function incrementScore() {
    score += 10;
    document.getElementById("current-score").innerText = ("Current Score:" + score);
}

/**
 * decrementScore takes 5 pts away from current-score for each incorrect answer
 */
function decrementScore() {
    score -= 10;
    document.getElementById("current-score").innerText = ("Current Score:" + score);
}

/**
 * winShowScore function provides the user with a congratulatory message and there final score
 * takes the currentScore value and adds it to the HTML using template literal
 */
function winShowScore() {
    let winMessage = `<h2>Congratulations ${username.value} You Completed The Quiz!</h2>
    <p>You're Score: ${currentScore}</p>`;
    document.getElementById("game-area").innerHTML = winMessage;
}

/**
 * gameOver function provides the user with a commiserations message
 * uses template literal to use the users username in the message
 */
function gameOver() {
    let gameOverMessage = `<h2>Unlucky ${username.value} You Lose!</h2>
    <p>Better luck next time, click start quiz button to try again.</p>`
    document.getElementById("game-area").innerHTML = gameOverMessage;
}