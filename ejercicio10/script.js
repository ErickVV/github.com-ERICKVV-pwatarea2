let currentQuestion = 0;
let score = 0;

const questions = [
    
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "París", "Berlín", "Londres"],
        answer: 1
    },
   
    {
        question: "¿En qué año cayó el muro de Berlín?",
        options: ["1983", "1989", "1991", "1995"],
        answer: 1
    },
    
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        answer: 1
    },
    
];

function displayQuestion(questionIndex) {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const question = questions[questionIndex];

    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionEl = document.createElement('li');
        optionEl.textContent = option;
        optionEl.onclick = function() { selectOption(index, question.answer); };
        optionsEl.appendChild(optionEl);
    });
}

function selectOption(selected, correct) {
    if (selected === correct) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function showResults() {
    const resultEl = document.getElementById('result');
    resultEl.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
    document.getElementById('next-button').style.display = 'none';
}


displayQuestion(currentQuestion);
