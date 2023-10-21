let intro = document.getElementById('intro');
let answerButtons = document.querySelector('.answer-btn');
let startButton = document.querySelector('.start-btn');
let nextButton = document.querySelector('.next-btn');
let submitButton = document.querySelector('.submit-btn');
let restart = document.querySelector('.restart-btn');
let options = document.querySelector('options-btn');
let randomQuestions = questions.sort(() => Math.random() - .5);
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startGame);

function startGame (){
    console.log('hello');
    startButton.classList.add('hide');
    answerButtons.classList.remove('hide');
    //Questions will show in a random order
    randomQuestions();
    showQuestion();
}

//Display the questions
function showQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    intro.innerHTML = questionNum + ' out of 15' + "<br>" + currentQuestion.question;

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
    nextButton.classList.remove('hide');

}

restart.addEventListener('click', restartGame);

function restartGame(){
    startGame();
}