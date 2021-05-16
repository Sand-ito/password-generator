// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomLowerCaseLetter(){
  var lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";

  return lettersLowerCase[Math.floor(Math.random() * lettersLowerCase.length)];
}

function getRandomUpperCaseLetter(){
  var lettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return lettersUpperCase[Math.floor(Math.random() * lettersUpperCase.length)];
}

function getRandomInt(){
  return Math.floor(Math.random() * 10);
}

function getRandomPunc(){
  var punctuation = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", "?", "/"];

  return punctuation[Math.floor(Math.random() * punctuation.length)];
}


// Test my functions
// console.log(getRandomLowerCaseLetter());
// console.log(getRandomUpperCaseLetter());
// console.log(getRandomInt());
// console.log(getRandomPunc());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
