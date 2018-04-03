'use strict';

// question #1

var question = 'Am I a native Seattlite?';
var userAnswer = prompt(question).toLowerCase();
var response = '';
console.log('Question: ', question);
console.log('>>>User answer: ', userAnswer);

if (userAnswer === 'n') {
  response = 'That is correct!';
  console.log('Answer status:');
} else if (userAnswer === 'no') {
  response = 'That is correct!';
  console.log('Answer status:');
} else {
  response = 'Sorry, that is incorrect.';
  console.log('>>>Answer status: Incorrect!');
}
response += '\nLike 93.6% of the people that live in Seattle, I grew up in California!';
alert(response);
// question #2


// question #3


// question #4


// question #5

