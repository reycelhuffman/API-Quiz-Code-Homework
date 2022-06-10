let quizTimer = document.querySelector("#quizTimer");
let startQuiz = document.querySelector("#startQuiz");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let timer = 80;



let question = document.querySelector("#question");
let choiceA = document.querySelector(".A"); 
let choiceB = document.querySelector(".B"); 
let choiceC = document.querySelector(".C"); 
let choiceD = document.querySelector(".D"); 
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

startButton.addEventListener('click', startQuiz);
    function startQuiz(){
        quizTimer();
        showQuestion();

        document.querySelectorAll(".answerButton").forEach(item) => {
            item.addEventListener("click", (event) => {
                if (
                    event.currentTarget.innerText === myQuestion[currentQuestion].answer
                ) {
                    score++;
                } else {
                    startTime -= 10;
                }
                currentQuestion++;
                if (currentQuestion > 3) {
                    endQuiz();
                } else {
                    showQuestion();
                }
            });
        }
    }

function showQuestion() {
    question.textContent = questions[currentQuestion].question;
    choiceA.textContent = questions[currentQuestion].choices[0];
    choiceB.textContent = questions[currentQuestion].choices[1];
    choiceC.textContent = questions[currentQuestion].choices[2];
    choiceD.textContent = questions[currentQuestion].choices[3];
}

choiceA.addEventListener("click", choseA);
choiceB.addEventListener("click", choseB);
choiceC.addEventListener("click", choseC);
choiceD.addEventListener("click", choseD);


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
    
};



    function choseA() {
        //var itemA = this.value;
        console.log(itemA)


        clickAnswer(itemA)
    };
    function choseB() {
        clickAnswer(1)
    };
    function choseC() {
        clickAnswer(2)
    };
    function choseD() {
        clickAnswer(3)
    };

function clickAnswer(x){
    console.log(x)
    
}
    
function quizFinished() {
    finalScore.textContent = "Your final score:" + questionCorrect + "/5";
} 

function showScores() {
    let finalScore = JSON.parse(localStorage.getItem("scores"))
}



