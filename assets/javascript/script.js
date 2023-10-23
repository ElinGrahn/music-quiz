let intro = document.getElementById('intro');
let answerButtons = document.querySelector('.answer-btn');
let startButton = document.querySelector('.start-btn');
let nextButton = document.querySelector('.next-btn');
let submitButton = document.querySelector('.submit-btn');
let restart = document.querySelector('.restart-btn');
let options = document.querySelector('options-btn');

let currentQuestionIndex = 1;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('hello');
    startButton.classList.add('hide');
    answerButtons.classList.remove('hide');
    //Questions will show in a random order
    let randomQuestions = questions.sort(() => Math.random() - '.5');
    showQuestion();
}

//Display the questions
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    intro.innerHTML = currentQuestionIndex + ' out of 15' + "<br>" + currentQuestion.question;


    showActualQuestions();
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('options-btn');
        answerButtons.appendChild(button);
        if(answer.correct){
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

function nextQuestion(){
    for (let i = 0; i === questions.length; i++);
    showQuestion();
    currentQuestionIndex++;
    startGame();
    submitButton.classList.add('hide');
    nextButton.classList.add('hide');
}

restart.addEventListener('click', restartGame);

function restartGame() {
    startGame();
}

function selectAnswer(event){
    let chosenAnswer = event.target;
    let correctAnswer = chosenAnswer.dataset.correct;
    if(correctAnswer){
        chosenAnswer.classList.add('.correct');
        score++;
    } else{
        chosenAnswer.classList.add('incorrect');
    }
    submitButton.classList.remove('hide');
}