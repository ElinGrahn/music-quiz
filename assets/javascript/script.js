let intro = document.getElementById('intro');
let answerButtons = document.querySelector('.answer-btn');
let startButton = document.querySelector('.start-btn');
let nextButton = document.querySelector('.next-btn');
let submitButton = document.querySelector('.submit-btn');
let restart = document.querySelector('.restart-btn');
let options = document.querySelector('options-btn');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('hello');
    startButton.classList.add('hide');
    answerButtons.classList.remove('hide');
    //Questions will show in a random order
    randomQuestions();
    showQuestion();
}
//w3schools thank you
function randomQuestions() {
    let x = questions;
    for(let i = x.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        let k = x[i];
        x[i] = x[j];
        x[j] = k;
    }
}

//Display the questions
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    intro.innerHTML = questionNum + ' out of 16' + "<br>" + currentQuestion.question;


    showActualQuestions();
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('options-btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            answerButtons.dataset.correct = answer.correct;
        }
        answerButtons.addEventListener('click', selectAnswer);
    });
}

// To show the answers written in the questions.js
function showActualQuestions() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//When submit button is clicked, next button will show
submitButton.addEventListener('click', submitAnswer);

function submitAnswer() {
    nextButton.classList.remove('hide');
}


nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        console.log(currentQuestionIndex);
    } else {
        endOfGame();
    }

    showQuestion();
    currentQuestionIndex++;
    submitButton.classList.add('hide');
    nextButton.classList.add('hide');
}

restart.addEventListener('click', startOver);

function startOver(){
    startButton.classList.remove('hide');
    restart.classList.add('hide');
    currentQuestionIndex = 0;
    intro.innerHTML = questionNum + ' out of 16' + "<br>" + currentQuestion.question;
}

function endOfGame() {
    console.log('good');
    intro.innerHTML = `Good job! Your score is <br> ${currentQuestionIndex} out of 16.<br> Would you like to try again?`;
    answerButtons.classList.add('hide');
    nextButton.classList.add('hide');
    submitButton.classList.add('hide');
    restart.classList.remove('hide');
}

function selectAnswer(event) {
    let chosenAnswer = event.target;
    let correctAnswer = chosenAnswer.dataset.correct;
    if (correctAnswer) {
        chosenAnswer.classList.add('correct');
        score++;
    } else {
        chosenAnswer.classList.add('incorrect');
    }
    submitButton.classList.remove('hide');
}