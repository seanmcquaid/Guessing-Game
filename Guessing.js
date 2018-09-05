var secretNumber = 4;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

if(guess === secretNumber) {
  alert("CONGRATS!!! You are correct");
}

else if(guess > secretNumber) {
  alert("TOO HIGH");
}

else {
  alert("TOO LOW");
}