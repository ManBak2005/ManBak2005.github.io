const quizData = [

    {
        question: "Wie was de eerste president van Turkmenistan",
        a: "Gurbanguly Berdimuhamedow",
        b: "Stalin",
        c: "Saparmyrat Nyýazow",
        d: "Serdar Berdimuhamedow",
        correct: "c",
    },

    {
        question: "Wat is een geliefd biermerk van Turkmenistan",
        a: "Sapporo",
        b: "Efes",
        c: "Heineken",
        d: "Berk",
        correct: "d",
    },

    {
        question: "Sinds wanneer brand de Krater van Derweze al",
        a: "1971",
        b: "1970",
        c: "1972",
        d: "1969",
        correct: "a",
    },

    {
        question: "Waar in Azie bevind Turkmenistan zich",
        a: "Noord azie",
        b: "Zuid azie",
        c: "Centraal azie",
        d: "Oost azie",
        correct: "c",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0

let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Je hebt ${score}/${quizData.length} vragen correct</h2>
           <button onclick="location.reload()">klik hier om opnieuw te proberen</button>
           `
       }
    }
})