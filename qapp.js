

// Create y

// our initial state object


 	// .val()
 	//

var state = {

 questions: [{
        	questionNumber: 1,
        	questionText: "what is the home town of the Simpsons?",
        	questionAnswers: ["Washington" , "Hollywood", "Springfield", "Pasadena"],
            correctAnswer: "2",
        },
        {
        	questionNumber: 2,
        	questionText: "Who is Homer's wife?",
        	questionAnswers: ["Marge" , "Peggy", "Mary", "Susan"],
            correctAnswer: "0",
        },
        {
        	questionNumber: 3,
        	questionText: "How many months does it take to create an Simpsons episode?",
        	questionAnswers: ["1","2","4","6"],
            correctAnswer: "3",
        },	
        {
        	questionNumber: 4,
        	questionText: "What is the family's dog name?",
        	questionAnswers: ["Santa's Little Helper" , "Ralphy the eater", "Johnny the killer", "Brea the breather"],
            correctAnswer: "0",
        },
        {
        	questionNumber: 5,
        	questionText: "How many children are in the Simpson family?",
        	questionAnswers: ["6" , "2", "3", "5"],
            correctAnswer: "2",
        }
 ],

 score: 0,
 correctAnsMsg: "Cowabunga man!",
 wrongAnsMsg: "Doh!",
 counter: 0

    // Questions
    // Answers
    // Your choice of answer	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};

// State manipulation functions

    //If the answer choice correct?
   





    // Update Progress Property
   



   // Update Score Property
       // if answer is correct
         //   increment score 



// Render functions

    //Hides Start Page and Renders Question Page



    //Renders Questions Page after advancing past Start Page


// displays question text inside of span.

function createQuizItems(state, index) {
  $('.question').html(state.questions[index].questionText);
  $('.progress').html("Progress: " + state.questions[index].questionNumber + " of 5");
  $('.score').html("Score: " + state.score);

  // state.questions[index].questionText === 
  $('.first-answer').html(state.questions[index].questionAnswers[0]);
  $('.second-answer').html(state.questions[index].questionAnswers[1]);
  $('.third-answer').html(state.questions[index].questionAnswers[2]);
  $('.fourth-answer').html(state.questions[index].questionAnswers[3]);
}


// Event handlers
// When start button is submitted
$('#startButton').click(function(event) {
	event.preventDefault();	
$('#div2').removeClass("hidden");
$('#div1').addClass("hidden");
createQuizItems(state, 0);

//find me this inside the answers 

// $('.startpage').addclass()
	//hide .startpage and .final and only show .qustions div
});

$('#submitButton').click(function(event) {
    event.preventDefault(); 
if (state.counter === 0) {

    checkAnswer(state, 0);
}
else { 
  checkAnswer(state, state.counter);
}
});

 function checkAnswer(state, index) {
    console.log(index);
        if ($("input[type='radio'][name='answer1']:checked").val() === state.questions[index].correctAnswer) {
            toastr.success(state.correctAnsMsg);
            $('#nextButton').removeClass("hidden");
        }
        else {
            toastr.error(state.wrongAnsMsg);
        }

    }





// Current answer is submitted
// $('.answer').submit(function(event) {
//     $('#nextButton').removeClass("hidden");
// });

// Next question
$('.next').click(function(event) {
    event.preventDefault();   
    state.counter++;    // the same as:- state.counter = state.counter + 1;
    console.log(state.counter);
    nextQuestion(state, state.counter);
    $('#nextButton').addClass("hidden");
});

console.log('tec');

     
function nextQuestion(state, questionNumber) {
    createQuizItems(state, questionNumber);
    }


// Restart button is clicked
$('.restart').click(function(event) {
});		