let intro = document.getElementById('intro');
const answerButtons = document.getElementsByClassName('.answer-btn');
const startButton = document.querySelector('.start-btn');
const nextButton = document.getElementsByClassName('.next-btn');
const SubmitButton = document.getElementsByClassName('.submit-btn');
const restart = document.getElementsByClassName('.restart-btn');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame (){
    console.log('hello');
    intro.remove();
}


answerButtons.addEventListener('click', chooseAnswer);

function chooseAnswer(){

}

nextButton.addEventListener('click', nextQuestion);

function nextQuestion(){

}

SubmitButton.addEventListener('click', submitAnswer);

function submitAnswer(){

}

restart.addEventListener('click', restartGame);

function restartGame(){

}