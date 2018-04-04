'use strict';
var question;
var userAnswer;
var response;
/*
// question #1
question = 'Am I a native Seattlite?';
userAnswer = prompt(question).toLowerCase();
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 'n') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else if (userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
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

if (userAnswer === 'n') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else if (userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
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

if (userAnswer === 'y') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else if (userAnswer === 'yes') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
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

if (userAnswer === 'n') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else if (userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
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

if (userAnswer === 'n') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else if (userAnswer === 'no') {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);

//question #6
question = 'How many pairs of pants do I own?';
userAnswer = parseInt(prompt(question));
console.log('Question: ', question);
console.log('...User answer: ', userAnswer);

if (userAnswer === 4) {
  response = 'That is correct!';
  console.log('...Answer status: Correct');
} else {
  response = 'Sorry, that is incorrect.';
  console.log('...Answer status: Incorrect!');
}
alert(response);
*/
//question #7
question = 'Can you guess a state that I\'ve lived in?';
console.log('Question: ', question);

var states = ['california', 'maine', 'washington'];
var answerIsCorrect = false;
var userIsGuessing = true;
var numberOfGuesses = 0;
var maxGuesses = 6;

while ((numberOfGuesses < maxGuesses) && userIsGuessing) {
  numberOfGuesses++;
  userAnswer = prompt(question).toLowerCase();
  console.log('...User answer #', numberOfGuesses, ': ', userAnswer);

  for (var i = 0; i < states.length && !answerIsCorrect; i++) {
    if (userAnswer === states[i]) {
      userIsGuessing = false;
      answerIsCorrect = true;
    }
  }
}

if (answerIsCorrect) {
  alert('Nice guess! You\'re right!');
  console.log('...Answer status: Correct');
} else {
  alert('Better luck next time!');
  console.log('...Answer status: Incorrect');
}