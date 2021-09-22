function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;    
}

// Question prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;    
}

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;    
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];    
}

// Quiz isFinished
Quiz.prototype.isFinished = function () {
    return this.questions.length === this.questionIndex;    
}

// Quiz guess
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++    
}

var q1 = new Question("what's the best programming language? ", ["C#", "javascript", "python", "php"], "javascript");
var q2 = new Question("what's the most popular language? ", ["C#", "javascript", "python", "java"], "javascript");
var q3 = new Question("what's the best modern programming language? ", ["C++", "javascript", "asp.net", "java"], "javascript");
var q4 = new Question("what's the worst programming language? ", ["Pascal", "Go", "asp.net", "php"], "Pascal");
/**
 * console.log(q1.checkAnswer('C#'));
 * console.log(q1.checkAnswer('javascript'));
 * console.log(q2.checkAnswer('asp.net'));
 * console.log(q2.checkAnswer('javascript'));
 */
var questions = [q1, q2, q3, q4];

// Start quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(params) {
    if(quiz.isFinished()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.choices;
        console.log(choices);
        document.querySelector('#question').textContent = question.text;

        for(var i=0; i < choices.length; i++){
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];
            guess('btn'+i, choices[i])
        }
        showProgress();
    }    
}

function guess(id ,guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion()
    }   
}

function showScore() {
    var html = `<h2>Score:</h2><h4>${quiz.score * 25}</h4>`;
    document.querySelector('.card-body').innerHTML= html;    
}

function showProgress() {
    var totalQuestions = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + ' of ' + totalQuestions;
}


// console.log(quiz.isFinished());

// console.log((quiz.getQuestion())); 
// quiz.guess("javascript");

// console.log((quiz.getQuestion())); 
// quiz.guess("javascript");

// console.log((quiz.getQuestion())); 
// quiz.guess("javascript");

// console.log((quiz.getQuestion())); 
// quiz.guess("Pascal");

// console.log(quiz.score);

// console.log(quiz.isFinished());

