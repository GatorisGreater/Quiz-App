// Create your initial state object


 	// .val()
 	//

var state = {
	
 questions: [{
        	questionNumber: 1,
        	questionText: "what is the home town of the Simpsons?",
        	questionAnswers: ["Washington" , "Hollywood", "Springfield", "Pasadena"],
            correctAnswer: "Springfield",
            correctAnsMsg: "Cowabunga man!",
            wrongAnsMsg: "Doh!",
        },
        {
        	questionNumber: 2,
        	questionText: "Who is Homer's wife?",
        	questionAnswers: ["Marge" , "Peggy", "Mary", "Susan"],
            correctAnswer: "Marge",
            correctAnsMsg: "Cowabunga man!",
            wrongAnsMsg: "Doh!",
        },
        {
        	questionNumber: 3,
        	questionText: "How many months does it take to create an Simpsons episode?",
        	questionAnswers: ["1","2","4","6"],
            correctAnswer: "6",
            correctAnsMsg: "Cowabunga man!",
            wrongAnsMsg: "Doh!",
        },	
        {
        	questionNumber: 4,
        	questionText: "What is the family's dog name?",
        	questionAnswers: ["Santa's Little Helper" , "Ralphy the eater", "Johnny the killer", "Brea the breather"],
            correctAnswer: "Santa's Little Helper",
            correctAnsMsg: "Cowabunga man!",
            wrongAnsMsg: "Doh!",
        },

        {

        	questionNumber: 5,
        	questionText: "How many children are in the Simpson family?",
        	questionAnswers: ["6" , "2", "3", "5"],
            correctAnswer: "3",
            correctAnsMsg: "Cowabunga man!",
            wrongAnsMsg: "Doh!",

// add the progress bar in the state as well 


 }]


    // Questions
    // Answers
    // Your choice of answer	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};

// State manipulation functions
// Render functions


// displays question text inside of span.
//displays question responses inside of Ul,li.

function createQuizItems(state, index) {
  $('.question').html(state.questions[index].questionText);
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
createQuizItems(state, 3);

//find me this inside the answers 

// $('.startpage').addclass()
	//hide .startpage and .final and only show .qustions div
});









// Current answer is submitted
$('.answer').submit(function(event) {
});

// Next question
$('.next').click(function(event) {
});

// Restart button is clicked
$('.restart').click(function(event) {
});		