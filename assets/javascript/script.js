let intro = document.getElementById('intro');
const answerButtons = document.querySelector('.answer-btn');
const startButton = document.querySelector('.start-btn');
const nextButton = document.querySelector('.next-btn');
const submitButton = document.querySelector('.submit-btn');
const restart = document.querySelector('.restart-btn');
const options = document.querySelector('options-btn');


let currentQuestionIndex = 1;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame (){
    console.log('hello');
    startButton.classList.add('hide');
    answerButtons.classList.remove('hide');
    //Questions will show in a random order
    const randomQuestions = questions.sort(() => Math.random() - .5);
    showQuestion();
}

//Display the questions
function showQuestion() {

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

// To show the answers written in the questions.js
function showActualQuestions(){
    nextButton.style.display = 'none';
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//When an option is clicked, submit button will show
answerButtons.addEventListener('click', chooseAnswer);

function chooseAnswer(){
    submitButton.classList.remove('hide');
}

//When submit button is clicked, next button will show
submitButton.addEventListener('click', submitAnswer);

function submitAnswer(){
    nextButton.style.display = 'none';
}

restart.addEventListener('click', restartGame);

function restartGame(){

}