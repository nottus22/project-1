// function displayName(name) {
//     document.getElementById('country-name').firstChild.data = name;
//     console.log(name);
// }

let state = {
    gameIntro: true,
    argentinaWindow: false,
    chileWindow: false,
    franceWindow: false,
    italyWindow: false,
    usWindow: false,
    
};


// Begin Button, Populate Name & Hide Div
let userName = document.getElementById('user-name');
document.getElementById('begin-button').onclick = function() {
    if (!userName.value) {
        alert('Please enter your name to continue!');
    } else {
    document.getElementById('output-name').innerText = userName.value;
    document.getElementById('game-intro').style.display = "none";
    }
}


// Country Click
let country;
document.getElementsByTagName('svg')[0].addEventListener('click', function(event) {
    if (event.target.id ===  'AR' || event.target.id === 'AU' || event.target.id === 'CL' || event.target.id === 'DE' || event.target.id ===  'ES' ||
    event.target.id === 'FR' || event.target.id === 'IT' || event.target.id === 'PT' || event.target.id === 'NZ' || 
    event.target.id === 'US' || event.target.id === 'ZA') {
         document.getElementById('content-div').style.display = "block";
         country = event.target.id;
         console.log(country);
         startGame();
    } else {
        alert('Please select a valid wine region');
    }
});


// Country Arrays
// const countries = [
//     { [
//         { question: 'What are the two most popular grapes planted in California?', answers: ['Cabernet Sauvignon, Sauvignon Blanc', 'Chardonnay, Merlot', 'Cabernet Sauvignon, Chardonnay', 'Cabernet Sauvignon, Merlot']},
//         { question: 'How many states in the US produce wine?', answers: ['5', '10', '25', '50']},
//         { question: 'What percentage of US wine is made in California?', answers: ['20%', '55%', '75%', '90%']},
//         { question: 'What grape varietal is planted most in Oregon?', answers: ['Riesling', 'Pinot Noir', 'Zinfandel', 'Pinot Grigio']}
//     ]
//     }:

//     {

//     },
//     {

//     }
// ]

const AR = [
    { question: 'What is the most common wine produced in Argentina?', answers: ['Cabernet Sauvignon', 'Carménère', 'Malbec', 'Syrah'] },
    { question: 'What region in Argentina produces the most wine?', answers: ['Buenos Aires', 'Catamarca', 'Mendoza', 'Salta' ] },
    { question: 'Many vineyards in Argentina are typically well-known for what?', answers: ['A lot of Cliffs', 'High Altitude', 'Low Altitude', 'Speaking Chinese'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const AU = [
    { question: 'The Barossa Valley is famous for producing world class wine from which grape?', answers: ['Merlot', 'Sangiovese', 'Sauvignon Blanc', 'Shiraz'] },
    { question: 'An Australian wine label stating GSM stands for what?', answers: ['Great Shiraz, Man!', 'Grenache, Syrah, Merlot', 'Grenache, Shiraz, Mourvedre', 'Great Shiraz from Macedon'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const CL = [
    { question: 'What full-bodied wine is a common export of Chile?', answers: ['Cabernet Sauvignon', 'Chardonnay', 'Pinot Noir', 'Syrah'] },
    { question: 'What grape is considered the signature of Chile?', answers: ['Cachaça', 'Carménère', 'Carignan', 'Cinsault'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const DE = [
    { question: 'Being that Germany is generally a cool, northern climate it is best known for what wines?', answers: ['Eiswein', 'White Wine', 'Red Wine', 'All of the Above'] },
    { question: 'What is the most produced German wine?', answers: ['Gewürztraminer', 'Grüner Veltliner', 'Riesling', 'Viognier'] },
    { question: 'Spätburgunder is the german name for what varietal?', answers: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Zinfandel'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const ES = [
    { question: 'Rioja is made from what grape?', answers: ['Albariño', 'Carignan', 'Garnacha', 'Tempranillo'] },
    { question: 'What is the most popular white wine made in Spain?', answers: ['Albariño', 'Godello', 'Macabeo', 'Verdejo'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const FR = [
    { question: 'In order for a sparkling wine to be called Champagne, it must be from what region in France?', answers: ['Alsace', 'Champagne', 'Châteauneuf-du-Pape', 'Paris'] },
    { question: 'What is the most popular wine region in Souther France?', answers: ['Alsace', 'Bordeaux', 'Burgundy', 'Rhône Valley'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const IT = [
    { question: 'What grape is used to make Chianti Classico?', answers: ['Barbera', 'Montepulciano', 'Nebbiolo', 'Sangiovese'] },
    { question: 'Primitivo, a red grape of Southern Italy, is the genetically linked to what common American varietal?', answers: ['Cabernet Sauvignon', 'Petite Sirah', 'Zinfandel'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const PT = [
    { question: 'Port wine is made from what grape?', answers: ['Mataro', 'Petit Verdot', 'Touriga Nacional', 'Trebbiano'] },
    { question: 'What are the two major styles of port wine?', answers: ['Rosé & Ruby', 'Ruby & Tawny', 'Ruby & White', 'Tawny & White'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const NZ = [
    { question: 'What wine is New Zealand predominantly known for?', answers: ['Chardonnay', 'Pinot Grigio', 'Merlot', 'Sauvignon Blanc'] },
    { question: 'What is the second most produced wine in New Zealand?', answers: ['Cabernet Franc', 'Gamay', 'Pinot Noir', 'Shiraz'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]
const US = [
    { question: 'What are the two most popular grapes planted in California?', answers: ['Cabernet Sauvignon, Sauvignon Blanc', 'Chardonnay, Merlot', 'Cabernet Sauvignon, Chardonnay', 'Cabernet Sauvignon, Merlot']},
    { question: 'How many states in the US produce wine?', answers: ['5', '10', '25', '50']},
    { question: 'What percentage of US wine is made in California?', answers: ['20%', '55%', '75%', '90%']},
    { question: 'What grape varietal is planted most in Oregon?', answers: ['Riesling', 'Pinot Noir', 'Zinfandel', 'Pinot Grigio']}
]
const ZA = [
    { question: 'What is the flahship grape of South Africa?', answers: ['Cinsault', 'Merlot', 'Pinotage', 'Sémillon'] },
    { question: 'What is the most widely planted white grape in South Africa?', answers: ['Chasselas', 'Chenin Blanc', 'Marsanne', 'Viognier'] },
    { question: 'Q3', answers: ['1', '2', '3', '4'] },
    { question: 'Q4', answers: ['1', '2', '3', '4'] },
]

// US Answers
const correctAnswers = ['Cabernet Sauvignon, Chardonnay', '50', '90%', 'Pinot Noir']

// const usedQuestions = []

let tracker = 2

// Show Content Div
document.getElementById('US').onclick = () => {
    if (!userName.value) {
        alert('Please enter your name to continue!');
    } else {
    document.getElementById('content-div').style.display = "block";
    console.log('Hello');
        // startGame();
    }
}

let randomQuestion, randomAnswer, randomQuestionIndex
// Start Game
function startGame() {
    if (!userName.value) {
        alert('Please enter your name to continue!');
    } else {
    document.getElementById('content-div').style.display = "block";
    }
    // while(tracker > 0 ){
    const answer = getRandomQuestion();
    randomQuestion = answer.question;
    randomAnswer = answer.answers;
    generateQuestion();
    generateRadio();
    checkAnswer();
    // }
    console.log(randomQuestion);

}


// Global Variables - deal with later
let score = document.querySelector('#score');
let result = 0;
function getRandomQuestion() {
            randomQuestionIndex = Math.floor(Math.random() * US.length);
            randomQuestion = US[randomQuestionIndex];
            return randomQuestion;
    }
    

    // Had to remove splice as it was throwing of random correct answer linking
    // US.splice(randomQuestionIndex, 1);

//    
   
// }

function generateRadio() {
    let usRadio = randomAnswer;
    document.getElementById('answer-holder').innerText = '';
    usRadio.forEach((usRadioValue, i) => {
        let labelValue = document.createElement('label');
            labelValue.innerHTML = usRadioValue;
            labelValue.id = 'radio-answer';
        let inputValue = document.createElement('input');
        let newLine = document.createElement('br');
            inputValue.type = 'radio';
            inputValue.name = 'answer-radio';
            inputValue.id = 'answer' + i;
            inputValue.usRadioValue = i; 
            inputValue.value = usRadioValue;
        document.getElementById('answer-holder').appendChild(inputValue);
        document.getElementById('answer-holder').appendChild(labelValue);
        document.getElementById('answer-holder').appendChild(newLine);
            console.log(labelValue);
            console.log(inputValue);
    });
}

function generateQuestion() {
    // console.log(randomAnswer);
    document.getElementById('question-holder').innerText = randomQuestion;
        // console.log(randomQuestion);
}

// function generateNextQuestion() {

//     document.getElementById('question-holder').innerText = randomQuestion;
// }

function checkAnswer() {
    let checkAnswer = document.createElement('input');
    document.getElementById('check-answer-button').innerText = '';
    checkAnswer.type = 'button';
    checkAnswer.name = '';
    checkAnswer.value = 'CHECK ANSWER';
    checkAnswer.id = 'check-answer';  
    document.getElementById('check-answer-button').appendChild(checkAnswer);
    let answerValue;
   
    checkAnswer.onclick = () => {
        tracker--;
        if (document.getElementById('answer0').checked) {
            answerValue = document.getElementById('answer0').value;
            if (answerValue === correctAnswers[randomQuestionIndex]) {
                alert('Correct!');
                result += 1
                score.textContent = result;
            } else {        
                alert('Incorrect');
            }
        } else if (document.getElementById('answer1').checked) {
            answerValue = document.getElementById('answer1').value;
            if (answerValue === correctAnswers[randomQuestionIndex]) {
                alert('Correct!');
                result += 1
                score.textContent = result;
            } else {
                alert('Incorrect!');
            }
        } else if (document.getElementById('answer2').checked) {
            answerValue = document.getElementById('answer2').value;
            if (answerValue === correctAnswers[randomQuestionIndex]) {
                alert('Correct!');
                result += 1
                score.textContent = result;
            } else {
                alert('Incorrect!')
            } 
        } else if (document.getElementById('answer3').checked) {
            answerValue = document.getElementById('answer3').value;
            if (answerValue === correctAnswers[randomQuestionIndex]) {
                alert('Correct!');
                result += 1
                score.textContent = result;
            } else {
                alert('Incorrect!')
            }       
    }
    if (tracker > 0) {
        startGame();
    } else {
        toMap();
    }
}

function toMap() {
    document.getElementById('content-div').style.display = "none";
}

        
    

}


