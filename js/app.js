'use strict';
var question;
var userAnswer;
var response;

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
