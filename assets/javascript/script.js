let intro = document.getElementById('intro');
const answerButtons = document.getElementsByClassName('answer-btn');
const startButton = document.querySelector('.start-btn');
const nextButton = document.getElementsByClassName('next-btn');
const SubmitButton = document.getElementsByClassName('submit-btn');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame (){
    console.log('hello');
    startButton.classList.remove('.startButton');
}
