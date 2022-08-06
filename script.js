const quizData = [
    {
        question: "how old is Aswan?",
        a:'19',
        b: '17',
        c: '20',
        d: '12',
        correct: 'c'
    },{
        question: "what is the most used programming language in 2019?",
        a:'java',
        b: 'c',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: "who is the president of the US(2022)?",
        a:'Barack Obama',
        b: 'Donald Trump',
        c: 'Joseph Biden',
        d: 'Aswan Abdi',
        correct: 'C'
    }, {
        question: "What does HTML stand for?",
        a:'High Level Machine Learning',
        b: 'Hypertext Markup Language',
        c: 'Hazardous Materials Marketing League',
        d: 'Head To This Page',
        correct: 'B'
    }, {
        question: "what year was html invented?",
        a:'1993',
        b: '1981',
        c: '2003',
        d: '2000',
        correct: 'a'
    }

];

const answerEls = document.querySelectorAll
(".answer");
const questionEl = document.getElementById
('question');
const d_text = document.getElementById("d_text");
const c_text = document.getElementById("c_text");
const b_text = document.getElementById("b_text");
const a_text = document.getElementById("a_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.
question;
d_text.innerText = currentQuizData.d;
c_text.innerText = currentQuizData.c;
b_text.innerText = currentQuizData.b;
a_text.innerText = currentQuizData.a;
}

function getSelected(){
   let answer = undefined;

   answerEls.forEach((answerEl) => {
       if(answerEl.checked){
           answer = answerEl.id;
        }
   });

   return answer; 
}

function deselectAnswers() {
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
const answer = getSelected();

if(answer){
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
}
currentQuiz++;
        if(currentQuiz < quizData.length){
             loadQuiz(); 
         }else {
            //TO DO
             alert("you finished. GOOD JOB!!");
        }
});
