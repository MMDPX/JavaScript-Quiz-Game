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
                    startQuiz3();
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

        function startQuiz3() {
            questions.classList.remove("hide");
            
            questionH2 = document.createElement("h2");
            questionH2.textContent = questionsArray[2].question;
            questions.appendChild(questionH2);
        
            for (var i = 0; i < questionsArray[2].answers.length; i++) {
                answerLi = document.createElement("li");
                answerLi.textContent = questionsArray[2].answers[i];
        
                (function(correctAnswer) {
                    answerLi.addEventListener("click", function() {
                      if (correctAnswer === 2) {
                        console.log("Correct!");
                        score++
                        console.log(score)
                        alert("Correct. You scored 1 point.")
                        startQuiz4();
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

            function startQuiz4() {
                questions.classList.remove("hide");
                
                questionH2 = document.createElement("h2");
                questionH2.textContent = questionsArray[3].question;
                questions.appendChild(questionH2);
            
                for (var i = 0; i < questionsArray[3].answers.length; i++) {
                    answerLi = document.createElement("li");
                    answerLi.textContent = questionsArray[3].answers[i];
            
                    (function(correctAnswer) {
                        answerLi.addEventListener("click", function() {
                          if (correctAnswer === 2) {
                            console.log("Correct!");
                            score++
                            console.log(score)
                            alert("Correct. You scored 1 point.")
                            startQuiz5();
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

                function startQuiz5() {
                    questions.classList.remove("hide");
                    
                    questionH2 = document.createElement("h2");
                    questionH2.textContent = questionsArray[4].question;
                    questions.appendChild(questionH2);
                
                    for (var i = 0; i < questionsArray[4].answers.length; i++) {
                        answerLi = document.createElement("li");
                        answerLi.textContent = questionsArray[4].answers[i];
                
                        (function(correctAnswer) {
                            answerLi.addEventListener("click", function() {
                              if (correctAnswer === 3) {
                                console.log("Correct!");
                                score++
                                console.log(score)
                                alert("Correct. You scored 1 point.")
                                startQuiz6();
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

                    function startQuiz6() {
                        questions.classList.remove("hide");
                        
                        questionH2 = document.createElement("h2");
                        questionH2.textContent = questionsArray[5].question;
                        questions.appendChild(questionH2);
                    
                        for (var i = 0; i < questionsArray[5].answers.length; i++) {
                            answerLi = document.createElement("li");
                            answerLi.textContent = questionsArray[5].answers[i];
                    
                            (function(correctAnswer) {
                                answerLi.addEventListener("click", function() {
                                  if (correctAnswer === 1) {
                                    console.log("Correct!");
                                    score++
                                    console.log(score)
                                    alert("Correct. You scored 1 point.")
                                    endScreen.classList.remove("hide");
                                  } else {
                                    console.log("Incorrect");
                                    score--
                                    alert("Incorrect. You lose 1 point.")
                                  }
                                });
                              })(i);
                    
                            questions.appendChild(answerLi);
                            var finalScore = document.getElementById("final-score");
                            finalScore.textContent = score
                          }
                        }
