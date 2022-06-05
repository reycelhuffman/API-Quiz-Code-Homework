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


function beginQuiz(){
    countdown();
    showQuestion();
}


startButton.addEventListener('click', startQuiz);
    function startQuiz(){
        //console.log('startButton');
        countdown();
        start();

    }

let question = document.querySelector("#question");
let choiceA = document.querySelector("A"); 
let choiceB = document.querySelector("B"); 
let choiceC = document.querySelector("C"); 
let choiceD = document.querySelector("D"); 
let currentQuestion = 0 
let questionsCorrect = 0  

let questions = [
    {
        question: "What is Katniss sister's full name?",
        choices: ["Pamela", "Primly", "Prim","Primrose"],
        answer: "Primrose"
    },
    {
        question: "Why does the Capital hold the Hunger Games?",
        choices: ["As a way to control the size of the population", "To keep the districts happy", "Because they are part of a religious festival",
        "To remind the districts that they are powerless against it"],
        answer: "To remind the districts that they are powerless against it"
    },
    {
        question: "Under what circumstances did Katniss first meet Peeta?",
        choices: [ "Katniss was looking for food and Peeta gave her bread", "They were both in the woods hunting", "They did a project at school together", "Peeta was injured and Katniss mother helped him"], 
        answer: "Katniss was looking for food and Peeta gave her bread"
    },
    {
        question: "What does Rue point out to Katniss that let her get away form the group of Career Tributes?",
        choices: ["A sheaf of arrows", "A tracker jacker nest", "A boulder", "A mockinjay nest"],
        answer: "A tracker jacker nest"
    },
    {
        question: "How do Katniss and Peeta force the Capitol to declare them both winners?",
        answer: ["They threaten to run away",
        "They threaten that the winner will tell about everything",
        "They threaten to commit suicide",
        "They threaten to cause a rebellion against the Capitol"],
        answer: "They threaten to commit suicide"
    },
    
]

function showQuestions() {
    question.textContent = questions[currentQuestion].question;
    choiceA.textContent = questions[currentQuestion].choices[0];
    choiceB.textContent = questions[currentQuestion].choices[1];
    choiceC.textContent = questions[currentQuestion].choices[2];
    choiceD.textContent = questions[currentQuestion].choices[3];
}

choiceA.addEventListener("Click", choseA);
choiceB.addEventListener("Click", choseB);
choiceC.addEventListener("Click", choseC);
choiceD.addEventListener("Click", choseD);


function checkAnswer(answer) {
    if (questions[currentQuestion].choices[answer] === questions[currentQuestion].answer) {
        answerStanding.textContent = "Correct"
        questionsRight ++;
    }
    else {
        answerStanding.textContent = "Wrong. 6 second will be subtracted from your timer."
    }
    if (questionNumber == 2) {
        wrong ();
    }   
    
    CurrentQuestion ++;
    if (questionQuestion < question.length) {
        showQuestions();
    }
    else {
        quizFinished();
    }
    
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