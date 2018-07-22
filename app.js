function populate(){
	if(quiz.isEnded()){
		showScores();


	}
	else{
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;


		//show choices

		var choices = quiz.getQuestionIndex().choices;
		for(var i=0;i< choices.length; i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];	
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};


	function guess(id, guess){
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			populate();
		}
	}


function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question "+ currentQuestionNumber+" of "+quiz.questions.length;	
}

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score: "+quiz.score+"</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML= gameOverHtml;
}


	

var questions = [
	new Question("which one is not an object oriented programming language?",["Java","C#","C","C++"],"C"),
	new Question("which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
	new Question("There are_____ main components of object oriented programming.",["1","3","6","4"],"4"),
	new Question("MVC is a _____",["language","library","Framework","All above"],"Framework"),
];


var quiz = new Quiz(questions);

populate();