var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var int = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var punctuation = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", "?", "/"];

var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Main function to prompt use in creating their own password.
function generatePassword() {

  // This is the variable that will hold all the arrays 
  var bank = []

  // Asking user how long they want the password to be With error messages for nonIntegers and Integers either too large or small
  var passwordLength = parseInt(prompt("How long do you want your password to be? Password must be a minimum of 8 characters, and no more than 128 characters."));

  if (!passwordLength) {
    alert("You chose an invalid option. Please try again. How long do you want your password to be? Password must be a minimum of 8 characters, and no more than 128 characters.");
    generatePassword();
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You chose an invalid option. Please try again. How long do you want your password to be? Password must be a minimum of 8 characters, and no more than 128 characters.");
    generatePassword();
  }

  // Confirm statements to add or exclude different character types to password
  var useLowerCase = confirm("Press OK to use lowercase letters in your password.");
  if (useLowerCase) {
    bank.push(lowerCase);
  }

  var useUpperCase = confirm("Press OK to use uppercase letters in your password.");
  if (useUpperCase) {
    bank.push(upperCase);
  }

  var useNumbers = confirm("Press OK to use numbers in your password.");
  if (useNumbers) {
    bank.push(int);
  }

  var usePunctuation = confirm("Press OK to use specail characters in your password.");
  if (usePunctuation) {
    bank.push(punctuation);
  }

  // As long as one character type is choosen and passwordLength was true, this will randomly select arrays, and then randomly select from those arrays.
  if (useLowerCase || useUpperCase || useNumbers || usePunctuation) {

    var passwordString = '';

    for (var i = 0; i < passwordLength; i++) {


      var bankIndex = Math.floor(Math.random() * bank.length);

      var charLength = bank[bankIndex].length

      var charIndex = Math.floor(Math.random() * charLength)


      passwordString += bank[bankIndex][charIndex]
    }

    // After everything is done, passwordString is returned and assigned to var password to be displayed
    return passwordString;

    // If user didn't choose a character type they resart the function with an alert why they are being reset
  } else {
    alert("Please select atleast one character type to create your password.");
    generatePassword();
  }


}

// When the button is clicked writePassword starts, which starts the generatePassword function.
generateBtn.addEventListener("click", writePassword);
