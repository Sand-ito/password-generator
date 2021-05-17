var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var int = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var punctuation = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", "?", "/"];
var pool = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

}

function generatePassword(message){
  var defaultMsg;

    if (message){
        defaultMsg = message
    } else {
        defaultMsg = "How long do you want your password to be? Password must be a minimum of 8 characters, and no more than 128 characters.";
    } 

    var choice = prompt(defaultMsg);

    if (choice >= 8 && choice < 128){
      console.log(choice);
    } else {
        var msg = "You chose an invalid option. Please try again. How long do you want your password to be? Password must be a minimum of 8 characters, and no more than 128 characters.";
        generatePassword(msg);
    }

    var letters = confirm("Press OK to use lowercase letters in your password.");
    console.log(letters)
    if (letters === true){
      console.log(pool.concat(pool, lowerCase));
    } else {
      console.log(pool)
    }

    var caps = confirm("Press OK to use uppercase letters in your password.");
    console.log(caps)
    if (letters === true){
      console.log(pool.concat(pool, upperCase));
    } else {
      console.log(pool)
    }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
