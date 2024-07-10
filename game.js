const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
        answer: 'Mars'
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'H2SO4'],
        answer: 'H2O'
    },
    {
        question: 'What is the capital of India?',
        options: ['Chandigrah', 'Mumbai', 'Jaipur', 'New Delhi'],
        answer: 'New Delhi'

    },
    {
        question:'Who was the P.M. of india in 2016?',
        options:['Narendar Modi','manmohan singh','Amit shah','Rahul Gandhi'],
        answer:'Narendar Modi'
    },
    
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}">${option}`;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;

    if (selectedOption.value === quizData[currentQuestion].answer) {
        score++;
    }
 
    currentQuestion++;
    selectedOption.checked = false;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
        submitButton.style.display = 'none';
    }
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
