// getting all the elements 
var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = info_box.querySelector(".buttons .exit");
var continue_btn = info_box.querySelector(".buttons .continue");
var quiz_box = document.querySelector(".quiz_box");
var result_box = document.querySelector(".result_box");
var finish_box = document.querySelector(".finish_box");
var que_text = document.querySelector(".que_text");
var option_list = document.querySelector(".option_list");
var next_btn = quiz_box.querySelector(".next_question");
var timeCount = quiz_box.querySelector(".timer .timer_sec");
var replay_quiz = finish_box.querySelector(".buttons .continue");
var quit_quiz = finish_box.querySelector(".buttons .exit");
 
//when start button is clicked, show the info box
start_btn.addEventListener("click",function(){
  info_box.classList.add("activeInfo");
});

// when exit button is clicked, hide the info box
 exit_btn.addEventListener("click",function(){
    info_box.classList.remove("activeInfo");
 });
  
  
  //when continue button is clicked, show the quiz
  continue_btn.addEventListener("click",function(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    quesCounter(1);
    startTimer(120);
  });

  var que_count = 0;
  var que_num = 1;
  var counter = 100;
  var score = 0;

  //when next question is clicked
  
  next_btn.addEventListener("click",function(){
     if(que_count < questions.length - 1){
        que_count++;
        que_num++;
        showQuestions(que_count);
        quesCounter(que_num);
        next_btn.style.display = "none";
     } else{
         
         showResultBox();
         
     }
  });

  // function to show questions
  function showQuestions(index){
         
     var que_tag =  '<span>' +questions[index].num + ". "+ questions[index].question + '</span>' ;
     var option_tag ='<div class="option"><span>'+ questions[index].options[0] + '</span></div>'
                     + '<div class="option"><span>'+ questions[index].options[1] + '</span></div>'
                     + '<div class="option"><span>'+ questions[index].options[2] + '</span></div>'
                     + '<div class="option"><span>'+ questions[index].options[3] + '</span></div>';
     que_text.innerHTML = que_tag;
     option_list.innerHTML = option_tag;

  
  var option = option_list.querySelectorAll(".option");
  for(var i=0; i<option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

var tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
var crossIcon ='<div class="icon cross"><i class="fas fa-times"></i></div>';

// function to get the user answer and to check it
  function optionSelected(answer){
      var userAns = answer.textContent;
      
      console.log(userAns);
      var correctAns = questions[que_count].answer;
      var allOptions = option_list.children.length;
      if(userAns == correctAns){
         console.log("answer is correct");
         answer.classList.add("correct");
         answer.insertAdjacentHTML("beforeend", tickIcon);
         
         

      }else{
        console.log("answer is incorrect");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

  //if answer is incorrect then show the correct answer
        for(var i=0; i<allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
            }
        }
      }
 for(var i=0; i< allOptions; i++){
     option_list.children[i].classList.add("disabled");
 }
     next_btn.style.display = "block";
  }
  
 

  // no of questions
  function quesCounter(index){
  var ques_left = quiz_box.querySelector(".total_questions");
  var ques_tag ='<span><p>' + index + '</p>of<p>' + questions.length + '</p> Questions</span>';
  ques_left.innerHTML = ques_tag;
  }

  //  function for the timer
  function startTimer(time){
    counter = setInterval (timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;

        if(time === 0){
            clearInterval(counter);
      }
    }}
  
    //function for the score
    function finalScore(){

    }


    function showResultBox(){
        info_box.classList.remove("activeInfo");
        quiz_box.classList.remove("activeQuiz");
        result_box.classList.add("activeResult");
    }

    var nameInput = document.querySelector("#name");
    var submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
      
        var name = document.querySelector("#name").value;
        console.log(name);
    })

    