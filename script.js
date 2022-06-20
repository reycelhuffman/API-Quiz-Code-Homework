let quizTime = document.querySelector("#quizTime");
let startQuiz = document.querySelector("#startQuiz");
let quizContainer = document.querySelector("#main");
// question display
let question = document.querySelector("#question");
// choice display
let optionOne = document.querySelector("#A");
let optionTwo = document.querySelector("#B");
let optionThree = document.querySelector("#C");
let optionFour = document.querySelector("#D");
// score display
let scoreContainer = document.querySelector("#score");
// score and timer init count
let score = 0;
let startTime = 50;

let currentQuestion = 0;
let questionsCorrect = 0

let questions = [
    {
        question: "What is Katniss sister's full name?",
        optionOne: "Pamela",
        optionTwo: "Primly",
        optionThree: "Prim",
        optionFour: "Primrose",
        answer: "Primrose",
    },
    {
        question: "Why does the Capital hold the Hunger Games?",
        optionOne: "As a way to control the size of the population",
        optionTwo: "To keep the districts happy",
        optionThree: "Because they are part of a religious festival",
        optionFour: "To remind the districts that they are powerless against it",
        answer: "To remind the districts that they are powerless against it",
    },
    {
        question: "Under what circumstances did Katniss first meet Peeta?",
        optionOne: "Katniss was looking for food and Peeta gave her bread",
        optionTwo: "They were both in the woods hunting",
        optionThree: "They did a project at school together",
        optionFour: "Peeta was injured and Katniss mother helped him",
        answer: "Katniss was looking for food and Peeta gave her bread",
    },
    {
        question:
            "What does Rue point out to Katniss that let her get away form the group of Career Tributes?",
        optionOne: "A sheaf of arrows",
        optionTwo: "A tracker jacker nest",
        optionThree: "A boulder",
        optionFour: "A mockingjay nest",
        answer: "A tracker jacker nest",
    },
    {
        question:
            "How do Katniss and Peeta force the Capitol to declare them both winners?",
        optionOne: "They threaten to run away",
        optionTwo: "They threaten that the winner will tell about everything",
        optionThree: "They threaten to commit suicide",
        optionFour: "They threaten to cause a rebellion against the Capitol",
        answer: "They threaten to commit suicide",
    },
];

// Click start to function quiz
startQuiz.addEventListener("click", beginQuiz);
// start func
function beginQuiz() {
    quizTimer();
    showQuestion();

    document.querySelectorAll(".answerButton").forEach((item) => {
        item.addEventListener("click", (event) => {
            if (event.currentTarget.innerText === questions[currentQuestion].answer) {
                score ++;
            } else {
                startTime -= 10;
            }
            currentQuestion ++;
            if (currentQuestion > 4) {
                endQuiz();
            } else {
                showQuestion();
            }
        });
    });
}

function quizTimer() {
    let timeInterval;
    timeInterval = setInterval(function() {
        if (startTime >= 1) {
            startTime--;
            quizTime.textContent = startTime +  "  Second left";
        } else {
            clearInterval(timeInterval);
            timer.textContent = "  Out of Time";
        }
    }, 1000);
}

function showQuestion() {
    question.innerText = questions[currentQuestion].question;
    A.innerText = questions[currentQuestion].optionOne;
    B.innerText = questions[currentQuestion].optionTwo;
    C.innerText = questions[currentQuestion].optionThree;
    D.innerText = questions[currentQuestion].optionFour;
    

}

function endQuiz() {
    let nameInput = document.createElement("input");
    let scoreSubmit = document.createElement("button");
    quizContainer.innerHTML = "";
    nameInput.setAttribute("id", "nameInput");
    scoreSubmit.setAttribute("id", "scoreSubmit");
    scoreSubmit.innerText = "Submit";
    quizContainer.append(nameInput);
    quizContainer.append(scoreSubmit);
    scoreSubmit.addEventListener("Click", submitScore);
    document.querySelector("#startQuiz").remove();
    startTime = 0;
}

function submitScore() {
    let scores = [];
    let name = document.querySelector("nameInput").value;
    if ( localStorage.getItem("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
    scores.push({
        name: name,
        score: score,
    });
    localStorage.setItem("scores", JSON.stringify(scores));
    displayScores(scores);
}






