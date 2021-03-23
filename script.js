let randomNumber = 0
let guessNumber = 0
// the following code sets up my button so that it activates a function
document.getElementById('guess').addEventListener('click', randomize)

function randomize () {
  // First the code gets the value of the textbox and converts it into an integer, and assigns it to the variable "guessNumber"
  guessNumber = document.getElementById('my-guess').value
  guessNumber = parseInt(guessNumber)
  // Next the code generates a random number between 1-6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  // Then the code sees if the guessed number and randomized number match.
  if (guessNumber === randomNumber) {
    // This is the block of code to be executed if the guess number equals the number chosen by the computer
    document.getElementById('answer').innerHTML = 'Congratulations! you were right!'
  } else {
    // This is the block of code to be executed if the guess number does not equal the number chosen by the computer.
    document.getElementById('answer').innerHTML = 'Sorry, that was not my number.'
  }
}
