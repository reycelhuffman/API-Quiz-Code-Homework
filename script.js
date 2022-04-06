let highScoreSection = document.querySelector("highScoreSection");
let finalScore = document.querySelector("finalScore");
let clearHighScoreBtn = document.querySelector("clearHighScoreBtn");
let viewHighScore = document.querySelector("viewHighScore");
let listOfHighScores = document.que("listOfHighScores");
let startButton = document.querySelector('#startQuiz');
let timerEl = document.querySelector('#timer');
let = questionNumber = 0;
let = answerNumber - 0;
let one = 1;
let two = 2;
let three = 3; 
let four = 4;


let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2'); 
let answer3 = document.querySelector('#answer3'); 
let answer4 = document.querySelector('#answer4'); 

answer1.addEventListener('click', answer1click);
answer2.addEventListener('click', answer2click);
answer3.addEventListener('click', answer3click);
answer4.addEventListener('click', answer4click);


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

document.querySelector("#question").innerHTML = questions[questionNumber];
document.querySelector("#answer1").innerHTML = answerquestion[0];
document.querySelector("#answer2").innerHTML = answerquestionone[1];
document.querySelector("#answer3").innerHTML = answerquestiontwo[2];
document.querySelector("#answer4").innerHTML = answerquestionthree[3];
document.querySelector("#answer5").innerHTML = answerquestionfour[4];

function answer1click() {
    if (questionNumber == 0) {
        wrong ();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong ();
}   if (questionNumber == 3) {
        right ();
    
}
questionNumber++;
start();
}

function answer2click() {
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
}
questionNumber++;
start();
}

function answer3click() {
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

questionNumber++;
start();
}

function answer4click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        right();
    }
    if (questionNumber == 2) {
        wrong ();
    }
    if (questionNumber == 2) {
    }   wrong ();
}   

function answer5click() {
        if (questionNumber == 0) {
            wrong();
        }
        if (questionNumber == 1) {
            right();
        }
        if (questionNumber == 2) {
            right ();
        }
        if (questionNumber == 2) {
        }   wrong ();
}
questionNumber++;
start();


function wrong() {
    console.log("wrong")
}

function right() {
    console.log("right")
}

function start() {
    if (questionNumber == 0) {
        document.querySelector("#question").innerHTML = [questionNumber];
        document.querySelector("#answer1").innerHTML = answerQuestion[0];
        document.querySelector("#answer2").innerHTML = answerQuestionone[1];
        document.querySelector("#answer3").innerHTML = answerQuestiontwo[2];
        document.querySelector("#answer4").innerHTML = answerQuestionthree[3];
    }
    else if (questionNumber == 1) {
        let drawAnswer = answerQuestiontwo
        document.querySelector("#question").innerHTML = [questionNumber];
        document.querySelector("#answer1").innerHTML = answerQuestion[0];
        document.querySelector("#answer2").innerHTML = answerQuestionone[1];
        document.querySelector("#answer3").innerHTML = answerQuestiontwo[2];
        document.querySelector("#answer4").innerHTML = answerQuestionthree[3];
    }
    else if (questionNumber == 2) {
        document.querySelector("#question").innerHTML = [questionNumber];
        document.querySelector("#answer1").innerHTML = answerQuestion[0];
        document.querySelector("#answer2").innerHTML = answerQuestionone[1];
        document.querySelector("#answer3").innerHTML = answerQuestiontwo[2];
        document.querySelector("#answer4").innerHTML = answerQuestionthree[3];
    }
    else if (questionNumber == 3) {
        document.querySelector("#question").innerHTML = [questionNumber];
        document.querySelector("#answer1").innerHTML = answerQuestion[0];
        document.querySelector("#answer2").innerHTML = answerQuestionone[1];
        document.querySelector("#answer3").innerHTML = answerQuestiontwo[2];
        document.querySelector("#answer4").innerHTML = answerQuestionthree[3];
    }
    else if (questionNumber == 4) {
        document.querySelector("#question").innerHTML = [questionNumber];
        document.querySelector("#answer1").innerHTML = answerQuestion[0];
        document.querySelector("#answer2").innerHTML = answerQuestionone[1];
        document.querySelector("#answer3").innerHTML = answerQuestiontwo[2];
        document.querySelector("#answer4").innerHTML = answerQuestionthree[3];
    }
}   
