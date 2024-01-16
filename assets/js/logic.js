var button = document.getElementById("start");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("#question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var score = 0

window.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", startQuiz1);
  });


function startQuiz1() {
    questions.classList.remove("hide");
    
    questionH2 = document.createElement("h2");
    questionH2.textContent = questionsArray[0].question;
    questions.appendChild(questionH2);

    for (var i = 0; i < questionsArray[0].answers.length; i++) {
        answerLi = document.createElement("li");
        answerLi.textContent = questionsArray[0].answers[i];

        (function(correctAnswer) {
            answerLi.addEventListener("click", function() {
              if (correctAnswer === 3) {
                console.log("Correct!");
                score++
                console.log(score)
                alert("Correct. You scored 1 point.")
                startQuiz2();
              } else {
                console.log("Incorrect");
                score--
                alert("Incorrect. You lose 1 point.")
              }
            });
          })(i);

        questions.appendChild(answerLi);
      }
    }

    function startQuiz2() {
        questions.classList.remove("hide");
        
        questionH2 = document.createElement("h2");
        questionH2.textContent = questionsArray[1].question;
        questions.appendChild(questionH2);
    
        for (var i = 0; i < questionsArray[1].answers.length; i++) {
            answerLi = document.createElement("li");
            answerLi.textContent = questionsArray[1].answers[i];
    
            (function(correctAnswer) {
                answerLi.addEventListener("click", function() {
                  if (correctAnswer === 1) {
                    console.log("Correct!");
                    score++
                    console.log(score)
                    alert("Correct. You scored 1 point.")
                  } else {
                    console.log("Incorrect");
                    score--
                    alert("Incorrect. You lose 1 point.")
                  }
                });
              })(i);
    
            questions.appendChild(answerLi);
          }
        }