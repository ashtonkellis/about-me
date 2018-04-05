'use strict';

// Creates an array of questions to ask the user
var questionArray = [
  'Am I a native Seattlite?',
  'Have I successfully ridden my bicycle all the way from San Fransisco to Virginia?',
  'Do I have a wife?',
  'Do I have any pets?',
  'Do I like sports?'];

// Creates an array of answers for each of the questions
// Multidimensional to allow for whole word or first letter
var answerArray = [['n','n','y','n','n'],['no','no','yes','no','no']];

// Creates an array of responses to correct and incorrect answers
var responseArray = ['That is correct!','Sorry, that is incorrect.'];

// Declares variables for use in functions
var question;
var userAnswer;
var response;
var correctGuesses = 0;
var userName = prompt('Hello! What is your name?');

// Loops through questions #1-5
for (var index = 0; index < 5; index++) {
  askQuestion(index);
}

askQuestion6(); // Asks question #6
askQuestion7(); // Asks question #7

// Notifies the user of their total score at end of game
alert('You got ' + correctGuesses + ' answers correct! That\'s the end of the guessing game! See you next time ' + userName + '!');

// Function to enable for-loop to ask questions #1-5 and utilize user response
function askQuestion(i) {
  question = questionArray[i];
  userAnswer = prompt(question).toLowerCase();
  console.log('Question: ', question);
  console.log('...User answer: ', userAnswer);

  if (userAnswer === answerArray[0][i] || userAnswer === answerArray[1][i]) {
    alert(responseArray[0]);
    console.log('...Answer status: Correct');
    correctGuesses++;
  } else {
    alert(responseArray[1]);
    console.log('...Answer status: Incorrect!');
  }
}

// Function to ask question #6
function askQuestion6() {
  question = 'How many pairs of pants do I own? Please enter a number.';
  userAnswer = parseInt(prompt(question));
  console.log('Question: ', question);
  console.log('...User answer: ', userAnswer);

  if (userAnswer === 4) {
    response = 'That is correct!';
    console.log('...Answer status: Correct');
    correctGuesses++;
  } else {
    response = 'Sorry, that is incorrect.';
    console.log('...Answer status: Incorrect!');
  }
  alert(response);
}

// Function to ask question #7
function askQuestion7() {
  question = 'Can you guess a state that I\'ve lived in?';
  console.log('Question: ', question);

  var states = ['California', 'Maine', 'Washington'];
  var answerIsCorrect = false;
  var userIsGuessing = true;
  var numberOfGuesses = 0;
  var maxGuesses = 6;

  while ((numberOfGuesses < maxGuesses) && userIsGuessing) {
    numberOfGuesses++;
    userAnswer = prompt(question).toLowerCase();
    console.log('...User answer #', numberOfGuesses, ': ', userAnswer);

    for (var i = 0; i < states.length && !answerIsCorrect; i++) {
      if (userAnswer === states[i].toLowerCase()) {
        userIsGuessing = false;
        answerIsCorrect = true;
      }
    }
    if (!answerIsCorrect) {
      alert('Sorry, that\'s incorrect. You have ' + (maxGuesses - numberOfGuesses) + ' guesses remaining.');
    }
  }

  if (answerIsCorrect) {
    alert('Nice guess! You\'re right!\nI have lived in the following states: ' + states);
    console.log('...Answer status: Correct');
    correctGuesses++;
  } else {
    alert('Better luck next time!');
    console.log('...Answer status: Incorrect');
  }
}