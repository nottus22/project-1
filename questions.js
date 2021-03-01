const checkAnswerButton = document.getElementById("check-answer-button");



// QUESTIONS ARRAY
const questionsUsArr = [
    'What are the two most popular grapes planted in California?',
    'How many states in the US produce wine?',
    'What percentage of US wine is made in California?',
    'What grape varietal is planted most in Oregon?'
]

const answersUsArr = [
    ['Cabernet Sauvignon, Sauvignon Blanc', 'Chardonnay, Merlot', 'Cabernet Sauvignon, Chardonnay', 'Cabernet Sauvignon, Merlot'],
    ['5', '10', '25', '50'],
    ['20%', '55%', '75%', '90%'],
    ['Riesling', 'Pinot Noir', 'Zinfandel', 'Pinot Grigio']
]


// FUNCITON FOR RANDOM QUESTION
function getRandomUsQuestions() {
    let randomUsQuestion = questionsUsArr[Math.floor(Math.random() * questionsUsArr.length)];
    // randomQuestion.map(questionsActive);
    document.getElementById('question-holder').innerText = randomUsQuestion;
    document.getElementById('choice-1').value = answersUsArr[0];
    console.log(randomUsQuestion);
}

function linkAnswers() {
    let answerPosition;
    if (randomQuestion === questionsUsArr[i]) {
       console.log(questionsUsArr[i])
        // answerPosition === answersUsArr[i]
    }
}


const correctUsAnswers = [2, 3, 3, 1]
const gameAnswers = []

// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function() {
//     return this.question[this.questionIndex];
// }

// Quiz.prototype.guess = function(answer) {
//     if (this.getQuestionIndex().isCorrectAnswer(answer)) {
//         this.score++;
//     }
//     this.questionIndex++;
// }

// Quiz.prototype.isEnded = function() {
//     return this.questionIndex === this.questions.length;
// }

// function Question (text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// Question.prototype.isCorrectAnswer = function (choice) {
//     return this.answer === choice;
// }

// function populate() {
//     if (quiz.isEnded()) {
//         showScores();
//     } else {
//         // QUESTION
//         const element = document.getElementById('question-holder');
//         element.innerHTML = quiz.getQuestionIndex().text;

//         // ANSWERS
//         const choices = quiz.getQuestionIndex().choices;
//         for (let i = 0; i < choices.length; i++) {
//             let element = document.getElementById('choice' + i);
//             element.innerHTML = choices[i];
//             guess('radio' + i, choices[i]);
//         }
//         showProgress();
//     }
// };

// // US Questions
// const questionsUS = [
//     new Question('What are the two most popular grapes planted in California?', ['Cabernet Sauvignon, Sauvignon Blanc', 'Chardonnay, Merlot', 'Cabernet Sauvignon, Chardonnay', 'Cabernet Sauvignon, Merlot'], 'Cabernet Sauvignon, Chardonnay'),
//     new Question('How many states in the US produce wine?', ['5', '10', '25', '50'], '50'),
//     new Question('What percentage of US wine is made in California?', ['20%', '55%', '75%', '90%'], '90%'),
//     new Question('What grape varietal is planted most in Oregon?', ['Riesling', 'Pinot Noir', 'Zinfandel', 'Pinot Grigio'], 'Pinot Noir')
// ];

// // Quiz
// let quiz = new quiz(questions);

// // Display Quiz
// populate();




// 