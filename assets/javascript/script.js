let intro = document.getElementById('intro');
const answerButtons = document.querySelector('.answer-btn');
const startButton = document.querySelector('.start-btn');
const nextButton = document.querySelector('.next-btn');
const SubmitButton = document.querySelector('.submit-btn');
const restart = document.querySelector('.restart-btn');
const options = document.querySelector('options-btn');


let currentQuestionIndex = 1;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame (){
    console.log('hello');
    startButton.classList.add('hide');
    answerButtons.classList.remove('hide');
    const randomQuestions = questions.sort(() => Math.random() - .5);
    nextQuestion();
}

function nextQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    intro.innerHTML = currentQuestionIndex + ' out of 15' + "<br>" + currentQuestion.question;

    showActualQuestions();
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('options-btn');
        answerButtons.appendChild(button);
    })
}

function showActualQuestions(){

}

answerButtons.addEventListener('click', chooseAnswer);

function chooseAnswer(){

}

SubmitButton.addEventListener('click', submitAnswer);

function submitAnswer(){

}

restart.addEventListener('click', restartGame);

function restartGame(){

}