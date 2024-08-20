//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
      question: "Claudia is currently completing a PhD focused on:",
      answers: {
        a: "Psychology to help children who have experienced early life adversity",
        b: "Occupational Therapy to help children who have experienced early life adversity",
        c: "Therapy dog training",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Claudia's dog is named:",
      answers: {
        a: "Biscuit",
        b: "Cisco",
        c: "Sisko",
        d: "Bisco"
      },
      correctAnswer: "c"
    },
    {
      question: "Claudia's skills include:",
      answers: {
        a: "Synthesising information",
        b: "Planning and organising",
        c: "Conducting interviews",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Claudia is passionate about:",
      answers: {
        a: "Helping children and young people",
        b: "Coding",
        c: "Doing the dishes",
        d: "All of the above"
      },
      correctAnswer: "a"
    }
];

function buildQuiz(){
    // variable to store the HTML output
        const output = [];
    for(i=0; i<quizQuestions.length; i++) {
    // variable to store the list of possible answers
        const answers = [];
        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers) {
            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
            + '</label>'
            );
        }
        
        // add this question and its answers to the output
        output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>' 
        + '<div class="answers">' + answers.join('') + '</div>'
        );
        // combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }
}
    function showResults(){
        // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
// keep track of user's answers
    var numCorrect = 0;
    // for each question...
    for(i=0; i<quizQuestions.length; i++){
    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
     // if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
    // color the answers green
      answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
    // color the answers red
    answerContainers[i].style.color = 'red';
    }
    }
    // show number of correct answers out of total
if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - read the page again before your next try!";
    }
    if (numCorrect === 1) { 
    resultsContainer.innerHTML = "There's room for improvement - only one right answer.";
    }
    if (numCorrect === 2) { 
    resultsContainer.innerHTML = "That was okay! 50% - but you know you can do better :)";
    }
    if (numCorrect === 3) { 
    resultsContainer.innerHTML = "You are close - 3 out of 4 - can you find one more?";
    }
    if (numCorrect === 4) { 
    resultsContainer.innerHTML = "Congratulations! You got a perfect score. Thanks for reading the page so completely!";
    }
}
// load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
     }