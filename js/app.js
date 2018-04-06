'use strict';

// Creates an array of questions to ask the user
var questionArray = [
  'Am I a native Seattlite?',
  'Have I successfully ridden my bicycle all the way from San Fransisco to Virginia?',
  'Do I have a wife?',
  'Do I have any pets?',
  'Do I like sports?'];

// Creates an array of answers for each of the questions
var answerArray = [['n','n','y','n','n'],['no','no','yes','no','no']];

// Creates an array of responses to correct and incorrect answers
var responseArray = ['That is correct!','Sorry, that is incorrect.'];

// Declares variables for use in functions
var correctGuesses = 0;
var userName = 'Anonymous Person';

function greetUser() {
  userName = prompt('Hello! What is your name?');
}

// Function to enable for-loop to ask questions #1-5 and utilize user response
function askQuestion(i) {
  var question = questionArray[i];
  var userAnswer = prompt(question).toLowerCase();
  console.log('Question # ' + (i + 1) + ': ', question);

  if (userAnswer === answerArray[0][i] || userAnswer === answerArray[1][i]) {
    alert(responseArray[0]);
    console.log('...User answer (Correct): ', userAnswer);
    correctGuesses++;
  } else {
    alert(responseArray[1]);
    console.log('...User answer (Incorrect): ', userAnswer);
  }
}

// Loops through questions #1-5
function askQuestions1thru5 () {
  for (var i = 0; i < 5; i++) {
    askQuestion(i);
  }
}

// Function to ask question #6
function askQuestion6() {
  var userIsGuessing = true;
  var maxGuesses = 4;
  var numberOfGuesses = 0;
  var question = 'How many pairs of pants do I own? Please enter a number. You have ' + (maxGuesses - numberOfGuesses) + ' guesses remaining.';
  console.log('Question # 6: ', question);

  while ((numberOfGuesses < maxGuesses) && userIsGuessing) {
    var userAnswer = parseInt(prompt(question));
    numberOfGuesses++;
    question = 'How many pairs of pants do I own? Please enter a number. You have ' + (maxGuesses - numberOfGuesses) + ' guesses remaining.';

    if (userAnswer === 4) {
      alert('That is correct!');
      console.log('...User answer #', numberOfGuesses, '(Correct!): ', userAnswer);
      correctGuesses++;
      userIsGuessing = false;
    } else if (userAnswer > 4) {
      alert('Sorry, that TOO HIGH!.');
      console.log('...User answer #', numberOfGuesses, '(Too high): ', userAnswer);
    } else if (userAnswer < 4) {
      alert('Sorry, that TOO LOW!.');
      console.log('...User answer #', numberOfGuesses, '(Too low): ', userAnswer);
    } else {
      alert('Please enter a number.');
      console.log('...User answer #', numberOfGuesses, '(Incorrect!): ', userAnswer);
    }
  }
}
// Function to ask question #7
function askQuestion7() {
  var question = 'Can you guess a state that I\'ve lived in?';
  var states = ['California', 'Maine', 'Washington'];
  var answerIsCorrect = false;
  var numberOfGuesses = 0;
  var maxGuesses = 6;

  console.log('Question # 7: ', question);

  while ((numberOfGuesses < maxGuesses) && !answerIsCorrect) {
    var userAnswer = prompt('Can you guess a state that I\'ve lived in? You have ' + (maxGuesses - numberOfGuesses) + ' guesses remaining');
    userAnswer = userAnswer.slice(0,1).toUpperCase() + userAnswer.slice(1).toLowerCase();
    numberOfGuesses++;

    answerIsCorrect = states.includes(userAnswer);
    if (answerIsCorrect) {
      alert('Nice guess! You\'re right!\nI have lived in the following states:\n' + states);
      console.log('...User answer #' + numberOfGuesses + ' (Correct!): ' + userAnswer);
      correctGuesses++;
    } else {
      alert('Sorry, that\'s incorrect. You have ' + (maxGuesses - numberOfGuesses) + ' guesses remaining.');
      console.log('...User answer #' + numberOfGuesses + ' (Incorrect!): ' + userAnswer);
    }
  }
  if (!answerIsCorrect) {
    alert('Better luck next time!\nI have lived in the following states:\n' + states);
  }
}

// Function to bid farewell to a user after completing the guessing game
function adiosUser () {
  alert('You got ' + correctGuesses + ' answers correct! That\'s the end of the guessing game! See you next time ' + userName + '!');
}

greetUser();
askQuestions1thru5();
askQuestion6();
askQuestion7();
adiosUser();
