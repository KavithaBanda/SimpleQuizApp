const questions=[
    {
        question:"What is the largest river in India?",
        answers:[
            {
                text:"Bramhaputra",correct:false
            },
            {
                text:"Ganga",correct:true
            },
            {
                text:"Godavari",correct:false
            },
            {
                text:"Indus",correct:false
            },
        ]
    },
    {
        question:"Who is the father of computer?",
        answers:[
            {
                text:"Charles Nicolas",correct:false
            },
            {
                text:"Floydd Warshal",correct:false
            },
            {
                text:"Charles Babbage",correct:true
            },
            {
                text:"Sir Issac Newton",correct:false
            },
        ]
    },
    {
        question:"Which cricketer scored three double hundreds in ODIs?",
        answers:[
            {
                text:"Glenn Maxwell",correct:false
            },
            {
                text:"Sachin Tendulkar",correct:false
            },
            {
                text:"Joe Root",correct:false
            },
            {
                text:"Rohit Sharma",correct:true
            },
        ]
    },
    {
        question:"In which country Chess was invented?",
        answers:[
            {
                text:"India",correct:true
            },
            {
                text:"Great Britan",correct:false
            },
            {
                text:"Greece",correct:false
            },
            {
                text:"Australia",correct:false
            },
        ]
    },
    {
        question:"What is the full form of SEBI?",
        answers:[
            {
                text:"Securities and Expenditure Board of India",correct:false
            },
            {
                text:"Stocks and Exchange Board of India",correct:false
            },
            {
                text:"Stocks and Expenditure Board of India",correct:false
            },
            {
                text:"Securities and Exchange Board of India",correct:true
            },
        ]
    },
];
const qEle=document.getElementById("Q");
const aEle=document.getElementById("AButtons");
const nextbutton=document.getElementById("next");
let currentQuestionIndex=0;
let score=0;

function startQ(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    qEle.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        aEle.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextbutton.style.display="none";
    while(aEle.firstChild){
        aEle.removeChild(aEle.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct=="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(aEle.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}
function show_score(){
    resetState();
    qEle.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        show_score();
    }
}
nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQ();
    }
})
startQ();