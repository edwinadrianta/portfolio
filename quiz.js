var pos = 0;
var correct = 0;
var quiz, quiz_status, question, choice, choices, chA, chB, chC, chD;

var quizQuestions = [
  {question: "Thank you for coming to my profile. Here are some trivia quiz related to psychology. First, who is the most prominent figure in psychoanalysis?",
  a: "John Watson.",
  b: "Erich Fromm.",
  c: "Sigmund Freud.",
  d: "Ivan Pavlov.",
  correctAnswer: "c"
  },
  {question: "Area in psychology that looks at psychopathology:",
    a: "Developmental Psychology.",
    b: "Abnormal Psychology.",
    c: "Health Psychology.",
    d: "Experimental Psychology.",
        correctAnswer: "b"
      },
{question: "Hormone and neurotransmitter regulating empathy, trust, and relationship building:",
    a: "Oxytocin.",
    b: "Adrenaline.",
    c: "Epinephrine.",
    d: "Norepinephrine.",
            correctAnswer: "a"
          },
];

function get(x){
  return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion(){
  quiz = get("quiz");
  if(pos >= quizQuestions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+quizQuestions.length+" questions correct</h2>";
    get("quiz_status").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+quizQuestions.length;

  question = quizQuestions[pos].question;
  chA = quizQuestions[pos].a;
  chB = quizQuestions[pos].b;
  chC = quizQuestions[pos].c;
  chD = quizQuestions[pos].d;
  // display the question
  quiz.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'> "+chA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='b'> "+chB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='c'> "+chC+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='d'> "+chD+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == quizQuestions[pos].correctAnswer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
