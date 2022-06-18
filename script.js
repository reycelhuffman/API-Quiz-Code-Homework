let quizTimer = document.querySelector("quizTimer");
let startQuiz = document.querySelector("#startQuiz");
let quizContainer = document.querySelector("#main");
let question = document.querySelector("#question");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let scoreContainer = document.querySelector("#score");
let score = 0;
let timer = 80;



let currentQuestion = 0 
// let questionsCorrect = 0  

let questions = [
    {
        question: "What is Katniss sister's full name?",
        A: "Pamela", 
        B: "Primly", 
        C: "Prim",
        D: "Primrose",
        answer: "Primrose",
    },
    {
        question: "Why does the Capital hold the Hunger Games?",
        A: "As a way to control the size of the population", 
        B: "To keep the districts happy", 
        C: "Because they are part of a religious festival",
        D: "To remind the districts that they are powerless against it",
        answer: "To remind the districts that they are powerless against it",
    },
    {
        question: "Under what circumstances did Katniss first meet Peeta?",
        A:  "Katniss was looking for food and Peeta gave her bread", 
        B: "They were both in the woods hunting", 
        C: "They did a project at school together", 
        D: "Peeta was injured and Katniss mother helped him", 
        answer: "Katniss was looking for food and Peeta gave her bread",
    },
    {
        question: "What does Rue point out to Katniss that let her get away form the group of Career Tributes?",
        A: "A sheaf of arrows", 
        B: "A tracker jacker nest", 
        C: "A boulder", 
        D: "A mockingjay nest",
        answer: "A tracker jacker nest",
    },
    {
        question: "How do Katniss and Peeta force the Capitol to declare them both winners?", 
        A: "They threaten to run away",
        B: "They threaten that the winner will tell about everything",
        C: "They threaten to commit suicide",
        D: "They threaten to cause a rebellion against the Capitol",
        answer: "They threaten to commit suicide",
    },
    
]

startQuiz.addEventListener('click', beginQuiz);
    function startQuiz() {
        timerStart();
        showQuestion();

        document.querySelectorAll(".answerButton").forEach((item) => {
            item.addEventListener("click", (event) => {
                if (
                    event.currentTarget.innerText === questions[currentQuestion].answer
                ) {
                    score ++;
                } else {
                    startTime -= 10;
                }
                currentQuestion ++;
                if (currentQuestion > 3) {
                    endQuiz();
                } else {
                    showQuestion();
                }
            });
        });
    }
function endQuiz() {
    let typeName = document.createElement("name");
    let scoreSubmit = document.createElement("button");
    quizContainer.innerHTML = "";
    typeName.setAttribute("id", "typeName");
    scoreSubmit.setAttribute("id", "scoreSubmit");
    scoreSubmit.innerText = "Submit";
    quizContainer.append(typeName);
    quizContainer.append(scoreSubmit);
    scoreSubmit.addEventListener("Click", submitScore);
    document.getElementsById("startQuiz").remove();
    startTime = 0;
}

function submitScore() {
    let scores = []
    let name = document.querySelector("typeName").value;
    if (localStorage.getItem ("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
scores.push({
    name: name,
    score: score,
});
localStorage.setItem("scores", JSON.stringify(scores));
displayScores(scores);
}
function displayScores(scores) {
    quizContainer.innerHTML = "";
    for (entry of scores) {
        let scoreEntry = document.createElement("p");
        scoreEntry.innerText = `Name: ${entry.name}, Score: ${entry.score}`;
        quizContainer.append(scoreEntry);
    }
}
function quizTimer() {
    let timeInterval;
    timeInterval = setInterval(function () {
        if (startTime >= 1) {
            startTime --;
            timer.textContent = startTime + "Second left";
        }
        else {
            clearInterval(timeInterval);
            timer.textContent = "Out of Time";
        }
    }, 1000);
}

function showQuestion() {
    question.innerText = questions[currentQuestion].question;
    A.innerText = questions[currentQuestion].A;
    B.innerText = questions[currentQuestion].B;
    C.innerText = questions[currentQuestion].C;
    D.innerText = questions[currentQuestion].D;
}



