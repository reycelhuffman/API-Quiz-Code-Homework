let highScoreSection = document.querySelector("highScoreSection");
let finalScore = document.querySelector("finalScore");
let clearHighScoreBtn = document.querySelector("clearHighScoreBtn");
let viewHighScore = document.querySelector("viewHighScore");
let listOfHighScores = document.querySelector("listOfHighScores");
let startButton = document.querySelector('#startQuiz');
// let timerEl = document.querySelector('#timer');
let timeInterval = document.querySelector(".timeInterval")
let setInterval = document.querySelector(".setInterval")
let questionNumber = 0;
let answerNumber = 0;
let one = 1;
let two = 2;
let three = 3; 
let four = 4;
let timer = 105;
let quizTimer = document.querySelector("#quizTimer")


function countdown() {

    let timeLeft = setInterval(() => {
        if (timer >= 0 || questionIndex < 5) {
            quizTimer.textContent = timer + " seconds left";
            timer--;
        //questionIndex ++;
            }else {
                    clearInterval(timeLeft);        
        }
    }, 1000);
}


// function beginQuiz(){
//     countdown();
//     showQuestion();
// }


startButton.addEventListener('click', startQuiz);
    function startQuiz(){
        //console.log('startButton');
        countdown();
        start();

    }

let answer0 = document.querySelector('#answer0');
let answer1 = document.querySelector('#answer1'); 
let answer2 = document.querySelector('#answer2'); 
let answer3 = document.querySelector('#answer3'); 

answer0.addEventListener('click', answer0click);
answer1.addEventListener('click', answer1click);
answer2.addEventListener('click', answer2click);
answer3.addEventListener('click', answer3click);




const questions = [
    "What is Katniss sister's full name?",
    "Why does the Capital hold the Hunger Games?",
    "Under what circumstances did Katniss first meet Peeta?",
    "What does Rue point out to Katniss that let her get away form the group of Career Tributes?",
    "How do Katniss and Peeta force the Capitol to declare them both winners?"
]

const answerquestionone = [
    "Pamela",
    "Primly",
    "Prim",
    "Primrose",
];

const answerquestiontwo = [
    "As a way to control the size of the population",
    "To keep the districts happy",
    "Because they are part of a religious festival",
    "To remind the districts that they are powerless against it",
];

const answerquestionthree = [
    "Katniss was looking for food and Peeta gave her bread",
    "They were both in the woods hunting",
    "They did a project at school together",
    "Peeta was injured and Katniss’s mother helped him",
];

const answerquestionfour = [
    "A sheaf of arrows",
    "A tracker jacker nest",
    "A boulder",
    "A mockinjay nest",
];

const answerquestionfive = [
    "They threaten to run away",
    "They threaten that the winner will tell about everything",
    "They threaten to commit suicide",
    "They threaten to cause a rebellion against the Capitol",
];

// document.querySelector("#question").innerHTML = questions[questionNumber];
// document.querySelector("#answer1").innerHTML = answerquestionone[0];
// document.querySelector("#answer2").innerHTML = answerquestiontwo[1];
// document.querySelector("#answer3").innerHTML = answerquestionthree[2];
// document.querySelector("#answer4").innerHTML = answerquestionfour[3];
// document.querySelector("#answer5").innerHTML = answerquestionfive[4];

function answer0click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong ();
    }   
    if (questionNumber == 3) {
        right ();
    }
    function wrong() {
        console.log("new wrong")
    }
    
    function right() {
        console.log("new right")
    }
    questionNumber++;
    start();
}

function answer1click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong ();
    }
    if (questionNumber == 3) {
        right ();
    }
    function wrong() {
        console.log("new wrong")
    }
    
    function right() {
        console.log("new right")
    }
    questionNumber++;
    start();
}



function answer2click() {
    if (questionNumber == 0) {
        right ();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong ();
    }
    if (questionNumber == 3) {
        wrong ();
    }
    function wrong() {
        console.log("new wrong")
    }
    
    function right() {
        console.log("new right")
    }
    questionNumber++;
    start();
}

function answer3click() {

    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        right();
    }
    if (questionNumber == 2) {
        wrong ();
    }
    if (questionNumber == 3) {
        wrong ();
    }  
    function wrong() {
        console.log("new wrong")
    }
    
    function right() {
        console.log("new right")
    }
    questionNumber++;
    start();

}   

function answer4click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        right ();
    }
    if (questionNumber == 3) {
        wrong ();
    }
    function wrong() {
        console.log("new wrong")
    }
    
    function right() {
        console.log("new right")
    }
    questionNumber++;
    start();
    
    
}   



function wrong() {
    console.log("wrong")
}

function right() {
    console.log("right")
}

function start() {
    if (questionNumber == 0) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
        document.querySelector("#answer0").innerHTML = answerquestionone[0];
        document.querySelector("#answer1").innerHTML = answerquestionone[1];
        document.querySelector("#answer2").innerHTML = answerquestionone[2];
        document.querySelector("#answer3").innerHTML = answerquestionone[3];
    }
    else if (questionNumber == 1) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
        document.querySelector("#answer0").innerHTML = answerquestiontwo[0];
        document.querySelector("#answer1").innerHTML = answerquestiontwo[1];
        document.querySelector("#answer2").innerHTML = answerquestiontwo[2];
        document.querySelector("#answer3").innerHTML = answerquestiontwo[3];
    }
    else if (questionNumber == 2) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
        document.querySelector("#answer0").innerHTML = answerquestionthree[0];
        document.querySelector("#answer1").innerHTML = answerquestionthree[1];
        document.querySelector("#answer2").innerHTML = answerquestionthree[2];
        document.querySelector("#answer3").innerHTML = answerquestionthree[3];
    }
    else if (questionNumber == 3) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
        document.querySelector("#answer0").innerHTML = answerquestionfour[0];
        document.querySelector("#answer1").innerHTML = answerquestionfour[1];
        document.querySelector("#answer2").innerHTML = answerquestionfour[2];
        document.querySelector("#answer3").innerHTML = answerquestionfour[3];
    }
    else if (questionNumber == 4) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
        document.querySelector("#answer0").innerHTML = answerquestionfive[0];
        document.querySelector("#answer1").innerHTML = answerquestionfive[1];
        document.querySelector("#answer2").innerHTML = answerquestionfive[2];
        document.querySelector("#answer3").innerHTML = answerquestionfive[3];
    }
    
}     