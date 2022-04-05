let quizQuestions = document.querySelector('quiz-questions');
let timer = document.querySelector('timer');
let startBtn = document.querySelector('start button');
let timeCounter = document.querySelector('time counter');
let titleItem = document.querySelector('title-item');
let nextQuestions
let questionAnswers = document.querySelector("question-answer");
let myScore = document.querySelector('my-score');
let btnScore = document.querySelector('btn-score');




let questions = [
    {
        question: "Who invented JavaScript?"
        answer: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },

    {   question: "Where is the correct place to insert a JavaScript?"
        answer: {
            a: "The <body> section",
            b: "Both the <head> section and the <body> section are correct",
            c: "The <head> section"
        },
        correctAnswer: "b"
        
    },

    {
        question: "How to write an IF statement for executing some code if "i" is NOT equal to 5?"
        answer: {
            a: "if (i != 5)",
            b: "if i =! 5 then",
            c: "if (i <> 5)"
        },
        correctAnswer: "a"
    },

    {
        question: "How does a WHILE loop start?"
        answer: {
            a: "while (i <= 10; i++)",
            b: "while i = 1 to 10",
            c: "while (i <= 10) "
        },
        correctAnswer: "c"
    },

    {
        question: "How do you declare a JavaScript variable?"
        answer: {
            a: "var carName",
            b: "variable carName",
            c: "v carName"
        },
        correct answer: "a"
    }

    {
        question: "What will the following code return: Boolean(10 > 9)?"
        answer: {
            a: "NaN",
            b: "false",
            c: "true  "
        },
        correct answer: "c"
    }

    {
        question: "What is the correct syntax for referring to an external script called "xxx.js?"
        answer: {
            a: "<script href="xxx.js"> ",
            b: "<script name="xxx.js">",
            c: "<script src="xxx.js">"
        },
        correct answer: "a"
    },
];

startBtn.addEventListener('click', startQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }