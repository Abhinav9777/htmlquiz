const startbutton= document.getElementById("start-btn")
const nextbutton= document.getElementById("next-btn")

const questionContainerElement= document.getElementById("question-container")
const questionElememnt= document.getElementsByClassName("questions")
const answerButtonElement= document.getElementById("answer-button")

let ShuffledQuestions,correctquestionIndex;
let quizScore=0


startbutton.addEventListener('click',startGame)

nextbutton.addEventListener('click',() =>{
    correctquestionIndex++
    setNextQuestion()
}
)



function startGame(){
    startbutton.classList.add('hide')
    ShuffledQuestions=questions.sort(() =>Math.random() -0.5)
    correctquestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore=0;
}
 





function setNextQuestion(){
    resetState();
    showQuestion(ShuffledQuestions[correctquestionIndex]);
}




function showQuestion(questions){
    questionElememnt.innerText=questions.question;
    questions.answers.forEach((answer) =>{
        const button= document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


function resetState(){
    clearstatusClass(document.body)
    nextbutton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setstatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setstatusClass(button,button.dataset.correct)
    })
    if(ShuffledQuestions.length>correctquestionIndex +1){
        nextbutton.classList.remove("hide")
    }else{
        startbutton.innerText="restart"
        startbutton.classList.remove("hide")
    }
    if(selectedButton.dataset=correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setstatusClass(element, correct){
    clearstatusClass(element)
    if (correct){
            element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
    
}

function clearstatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// const questions=[
//     {
//         question: "which of these is the framework of javascript?",
//         answers: [
//             {text: "python", correct:false},
//             {text: "django", correct:false},
//             {text: "react", correct:true},
//             {text: "eclips", correc:false},
//         ],
//     },
//     {
//         question: "who is the prime minister of india",
//         answers: [
//             {text: "Narendra modi", correct:true},
//             {text: "rahul gandhi", correct:false},
//             {text: "priyanka ", correct:false},
//             {text: "yogi maharaj", correc:false},
//         ]
//     },
//     {
//         question: "what is 4*3",
//         answers: [
//             {text: "5", correct:false},
//             {text: "12", correct:true},
//             {text: "8 ", correct:false},
//             {text: "6", correc:false},
//         ]
//     }
// ]

