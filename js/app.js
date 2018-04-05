'use strict';
var question;
var userAnswer;
var response;
var correctGuesses = 0;
var userName = prompt('Hello! What is your name?');

// question #1
question = 'Am I a native Seattlite?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'n' || userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);

// question #2
question = 'Have I successfully ridden my bicycle all the way from San Fransisco to Virginia?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'n' || userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);

// question #3
question = 'Do I have a wife?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'y' || userAnswer === 'yes') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);

// question #4
question = 'Do I have any pets?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'n' || userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}

alert(response);
// question #5
question = 'Do I like sports?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'n' || userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);

//question #6
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

//question #7
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
  alert('Nice guess! You\'re right!]\nI have lived in the following states: ' + states);
  console.log('...Answer status: Correct');
  correctGuesses++;
} else {
  alert('Better luck next time!');
  console.log('...Answer status: Incorrect');
}

alert('You got ' + correctGuesses + ' answers correct! That\'s the end of the guessing game! See you next time ' + userName + '!');