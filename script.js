// class Game {
//    constructor() {
//     this.result = 0;
//     this.userName;
//     this.country;
//    } 


// Begin Button, Populate Name & Hide Div
let userName = document.getElementById('user-name');
    document.getElementById('begin-button').onclick = function() {
        if (!userName.value) {
            alert('Please enter your name to continue!');
        } else {
        document.getElementById('output-name').innerText = userName.value;
        document.getElementById('game-intro').style.display = "none";
        }
    };

// Country Click
let country;
    document.getElementsByTagName('svg')[0].addEventListener('click', function(event) {
        if (event.target.id ===  'AR' || 
             event.target.id === 'AU' || 
             event.target.id === 'CL' || 
             event.target.id === 'DE' || 
             event.target.id === 'ES' ||
             event.target.id === 'FR' || 
             event.target.id === 'IT' || 
             event.target.id === 'PT' || 
             event.target.id === 'NZ' || 
             event.target.id === 'US' || 
             event.target.id === 'ZA') {
            // document.getElementById('content-div').style.display = "block";
            country = event.target.id;
            // if (!userName.value) {
            //     alert('Please enter your name to continue!');
            // } else {
            // document.getElementById('content-div').style.display = "block";
            // }
            startGame();
        } else {
            alert('Please select a valid wine region');
        }
     
    });


const AR = [
    { question: 'What is the most common wine produced in Argentina?', answers: ['Cabernet Sauvignon', 'Carménère', 'Malbec', 'Syrah'] },
    { question: 'What region in Argentina produces the most wine?', answers: ['Buenos Aires', 'Catamarca', 'Mendoza', 'Salta' ] },
    { question: 'Many vineyards in Argentina are typically well-known for what?', answers: ['A lot of Cliffs', 'High Altitude', 'Low Altitude', 'Speaking Mandarin'] },
    { question: 'What geographic feature most influences the climate in Mendoza?', answers: ['Amazon Rainforest', 'Andes Mountains', 'Colombia River', 'Pacific Ocean'] },
]
const AU = [
    { question: 'The Barossa Valley is famous for producing world class wine from which grape?', answers: ['Merlot', 'Sangiovese', 'Sauvignon Blanc', 'Shiraz'] },
    { question: 'An Australian wine label stating GSM stands for what?', answers: ['Great Shiraz, Man!', 'Grenache, Syrah, Merlot', 'Grenache, Shiraz, Mourvedre', 'Great Shiraz from Macedon'] },
    { question: 'What is the most expensive Australian wine?', answers: ['Grande', 'Grange', 'Red Tail', 'Yellowtail'] },
    { question: 'What is Terra Rossa?', answers: ['The mountain range near Barossa Valley', 'A type of red soil in Coonawarra', 'A grape variety', 'The name of the most popular wine in Australia'] },
]
const CL = [
    { question: 'What full-bodied wine is a common export of Chile?', answers: ['Cabernet Sauvignon', 'Chardonnay', 'Pinot Noir', 'Syrah'] },
    { question: 'What grape is considered the signature of Chile?', answers: ['Cachaça', 'Carménère', 'Carignan', 'Cinsault'] },
    { question: 'Which ocean influences the weather in Chile?', answers: ['Arctic', 'Atlantic', 'Indian', 'Pacific'] }
]
const DE = [
    { question: 'Germany is best known for what wines?', answers: ['Eiswein', 'White Wine', 'Red Wine', 'All of the Above'] },
    { question: 'What is the most produced German wine?', answers: ['Gewürztraminer', 'Grüner Veltliner', 'Riesling', 'Viognier'] },
    { question: 'Spätburgunder is the german name for what varietal?', answers: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Zinfandel'] },
    { question: 'Which of the following is not a German wine region?', answers: ['Mosel', 'Nahe', 'Rapel', 'Rheingau'] },
]
const ES = [
    { question: 'Rioja is made from what grape?', answers: ['Albariño', 'Carignan', 'Garnacha', 'Tempranillo'] },
    { question: 'What is the most popular white wine made in Spain?', answers: ['Albariño', 'Godello', 'Macabeo', 'Verdejo'] },
    { question: 'Is Rioja a region or a grape?', answers: ['Grape', 'Region'] },
    { question: 'What is cava?', answers: ['Famous soil in Spain', 'Prestigous Wine Region', 'Spanish Grape', 'Spanish Sparkling Wine'] },
]
const FR = [
    { question: 'For a sparkling wine to be called Champagne, it must be from what region?', answers: ['Alsace', 'Champagne', 'Châteauneuf-du-Pape', 'Paris'] },
    { question: 'Which is a popular wine region in Southern France?', answers: ['Alsace', 'Bordeaux', 'Burgundy', 'Rhône Valley'] },
    { question: 'What French wine region borders the Atlantic Ocean?', answers: ['Alsace', 'Bordeaux', 'Burgundy', 'Western Rhône'] },
    { question: 'Which red grape is predominantly grown in Burgundy?', answers: ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Syrah'] },
]
const IT = [
    { question: 'What grape is used to make Chianti Classico?', answers: ['Barbera', 'Montepulciano', 'Nebbiolo', 'Sangiovese'] },
    { question: 'Primitivo, a red grape of Southern Italy, is the genetically linked to what common American varietal?', answers: ['Cabernet Sauvignon', 'Petite Sirah', 'Zinfandel'] },
    { question: 'Of the top five wine producing countries, Italy ranks where?', answers: ['First', 'Second', 'Third', 'Fourth'] },
    { question: 'Prosecco is made from what grape?', answers: ['Cortese', 'Glera', 'Spumante', 'Valdobbiadene'] },
]
const PT = [
    { question: 'Port wine is made from what grape?', answers: ['Mataro', 'Petit Verdot', 'Touriga Nacional', 'Trebbiano'] },
    { question: 'What are the two major styles of port wine?', answers: ['Rosé & Ruby', 'Ruby & Tawny', 'Ruby & White', 'Tawny & White'] },
    { question: 'Green wine from Portugal is called what?', answers: ['Antao Vaz', 'Alvarinho', 'Mourinho', 'Vinho Verde'] },
    { question: 'Bual, Malvasia, Sercial, and Verdelho are all grape varieties used to make what?', answers: ['Madeira', 'Marsala', 'Moscatel de Setubal', 'Port'] },
]
const NZ = [
    { question: 'What wine is New Zealand predominantly known for?', answers: ['Chardonnay', 'Pinot Grigio', 'Merlot', 'Sauvignon Blanc'] },
    { question: 'What is the second most produced wine in New Zealand?', answers: ['Cabernet Franc', 'Gamay', 'Pinot Noir', 'Shiraz'] },
    { question: 'New Zealand Sauvignon blanc is popularly from what region?', answers: ['Central Otago', 'Marlborough', 'Martinborough', 'Waipara'] },
    { question: 'Which country dominates the New Zealand export market?', answers: ['Australia', 'China', 'Japan', 'United States'] },
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
    { question: 'What is another name for Chenin Blanc?', answers: ['Skeen', 'Steen', 'Stein', 'Sveil'] }
]

// US Answers
const correctArAnswers = ['Malbec', 'Mendoza', 'High Altitude', 'Andes Mountains']
const correctAuAnswers = ['Shiraz', 'Grenache, Shiraz, Mourvedre', 'Grange', 'A type of red soil in Coonawarra']
const correctClAnswers = ['Cabernet Sauvignon', 'Carménère', 'Pacific']
const correctDeAnswers = ['All of the Above', 'Riesling', 'Pinot Noir', 'Rapel']
const correctEsAnswers = ['Tempranillo', 'Albariño', 'Region', 'Spanish Sparkling Wine']
const correctFrAnswers = ['Champagne', 'Rhône Valley', 'Bordeaux', 'Pinot Noir']
const correctItAnswers = ['Sangiovese', 'Zinfandel', 'Second', 'Glera']
const correctNzAnswers = ['Sauvignon Blanc', 'Pinot Noir', 'Marlborough', 'United States']
const correctPtAnswers = ['Touriga Nacional', 'Ruby & Tawny', 'Vinho Verde', 'Madeira']
const correctUsAnswers = ['Cabernet Sauvignon, Chardonnay', '50', '90%', 'Pinot Noir']
const correctZaAnswers = ['Pinotage', 'Chenin Blanc', 'Steen']


let randomQuestion, randomAnswer, randomQuestionIndex
// Start Game
function startGame(country) {
    if (!userName.value) {
        alert('Please enter your name to continue!');
    } else {
        document.getElementById('content-div').style.display = "block";
    const answer = getRandomQuestion(country);
    randomQuestion = answer.question;
    randomAnswer = answer.answers;
    generateQuestion();
    generateRadio();
    checkAnswer();
    }
}


// Global Variables - deal with later
let tracker = 2;
let score = document.querySelector('#score');
let result = 0;

function getRandomQuestion() {
    let countryName = eval(country);
    randomQuestionIndex = Math.floor(Math.random() * countryName.length);
    randomQuestion = countryName[randomQuestionIndex];
    return randomQuestion;
}

    // Had to remove splice as it was throwing of random correct answer linking
    // US.splice(randomQuestionIndex, 1);

// Create Answer Radio Buttons
function generateRadio() {
    let usRadio = randomAnswer;
    document.getElementById('answer-holder').innerText = '';
    usRadio.forEach((usRadioValue, i) => {
        let labelValue = document.createElement('label');
            labelValue.innerHTML = usRadioValue;
            labelValue.id = 'radio-answer';
        let newLine = document.createElement('br');
        let inputValue = document.createElement('input');
            inputValue.type = 'radio';
            inputValue.name = 'answer-radio';
            inputValue.id = 'answer' + i;
            inputValue.usRadioValue = i; 
            inputValue.value = usRadioValue;
        document.getElementById('answer-holder').appendChild(inputValue);
        document.getElementById('answer-holder').appendChild(labelValue);
        document.getElementById('answer-holder').appendChild(newLine);
    });
}

// Question Generator
function generateQuestion() {
    document.getElementById('question-holder').innerText = randomQuestion;
}

// Check Answer Functions
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
            if (answerValue === correctUsAnswers[randomQuestionIndex] || answerValue === correctArAnswers[randomQuestionIndex] ||
                answerValue === correctAuAnswers[randomQuestionIndex] || answerValue === correctClAnswers[randomQuestionIndex] ||
                answerValue === correctDeAnswers[randomQuestionIndex] || answerValue === correctEsAnswers[randomQuestionIndex] ||
                answerValue === correctFrAnswers[randomQuestionIndex] || answerValue === correctItAnswers[randomQuestionIndex] ||
                answerValue === correctPtAnswers[randomQuestionIndex] || answerValue === correctNzAnswers[randomQuestionIndex] ||
                answerValue === correctZaAnswers[randomQuestionIndex]) {
                showCorrect();
                result += 1
                score.textContent = result;
            } else {        
                showIncorrect();
                result += -1
            }
        } else if (document.getElementById('answer1').checked) {
            answerValue = document.getElementById('answer1').value;
            if (answerValue === correctUsAnswers[randomQuestionIndex] || answerValue === correctArAnswers[randomQuestionIndex] ||
                answerValue === correctAuAnswers[randomQuestionIndex] || answerValue === correctClAnswers[randomQuestionIndex] ||
                answerValue === correctDeAnswers[randomQuestionIndex] || answerValue === correctEsAnswers[randomQuestionIndex] ||
                answerValue === correctFrAnswers[randomQuestionIndex] || answerValue === correctItAnswers[randomQuestionIndex] ||
                answerValue === correctPtAnswers[randomQuestionIndex] || answerValue === correctNzAnswers[randomQuestionIndex] ||
                answerValue === correctZaAnswers[randomQuestionIndex]) {
                showCorrect();
                result += 1
                score.textContent = result;
            } else {
                showIncorrect();
                result += -1
            }
        } else if (document.getElementById('answer2').checked) {
            answerValue = document.getElementById('answer2').value;
            if (answerValue === correctUsAnswers[randomQuestionIndex] || answerValue === correctArAnswers[randomQuestionIndex] ||
                answerValue === correctAuAnswers[randomQuestionIndex] || answerValue === correctClAnswers[randomQuestionIndex] ||
                answerValue === correctDeAnswers[randomQuestionIndex] || answerValue === correctEsAnswers[randomQuestionIndex] ||
                answerValue === correctFrAnswers[randomQuestionIndex] || answerValue === correctItAnswers[randomQuestionIndex] ||
                answerValue === correctPtAnswers[randomQuestionIndex] || answerValue === correctNzAnswers[randomQuestionIndex] ||
                answerValue === correctZaAnswers[randomQuestionIndex]) {
                showCorrect();
                result += 1
                score.textContent = result;
            } else {
                showIncorrect();
                result += -1
            } 
        } else if (document.getElementById('answer3').checked) {
            answerValue = document.getElementById('answer3').value;
            if (answerValue === correctUsAnswers[randomQuestionIndex] || answerValue === correctArAnswers[randomQuestionIndex] ||
                answerValue === correctAuAnswers[randomQuestionIndex] || answerValue === correctClAnswers[randomQuestionIndex] ||
                answerValue === correctDeAnswers[randomQuestionIndex] || answerValue === correctEsAnswers[randomQuestionIndex] ||
                answerValue === correctFrAnswers[randomQuestionIndex] || answerValue === correctItAnswers[randomQuestionIndex] ||
                answerValue === correctPtAnswers[randomQuestionIndex] || answerValue === correctNzAnswers[randomQuestionIndex] ||
                answerValue === correctZaAnswers[randomQuestionIndex]) {
                showCorrect();
                result += 1
                score.textContent = result;
            } else {
                showIncorrect();
                result += -1
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

function showCorrect() {
    document.getElementById('popup-div').style.display = 'block';
    document.getElementById('result').style.borderColor = 'green';
    document.getElementById('result').style.color = 'green';
    document.getElementById('result').innerText = 'CORRECT';
    setTimeout(() => {
        document.getElementById('popup-div').style.display = 'none'
    }, 1000);
}

function showIncorrect() {
    document.getElementById('popup-div').style.display = 'block';
    document.getElementById('result').style.borderColor = 'red';
    document.getElementById('result').style.color = 'red';
    document.getElementById('result').innerText = 'INCORRECT';
    setTimeout(() => {
        document.getElementById('popup-div').style.display = 'none'
    }, 1000);
}
        
function win() {
    if (result > 4) {
        alert('Congratulations! You passed Level 1!');
    } 
}
 win()
}
