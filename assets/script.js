// To Do: make my bank var reset each time I generate a Password, and finish generateing password by selecting random characters from the array by the # from the initail prompt
// !! Also figure out a way to also have one of each character selected in the password "its the difference between an A and an A+"

var lowerCase =  ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var int = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var punctuation = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", "?", "/"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


function generatePassword(message){
  var bank = []
  var defaultMsg;

    if (message){
        defaultMsg = message;
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
    console.log(letters);
    if (letters === true){
      Array.prototype.push.apply(bank, lowerCase);
      console.log(bank);
    } else {
      console.log(bank);
    }

    var caps = confirm("Press OK to use uppercase letters in your password.");
    console.log(caps);
    if (caps === true){
      Array.prototype.push.apply(bank, upperCase);
      console.log(bank);
    } else {
      console.log(bank);
    }

    var numb = confirm("Press OK to use numbers in your password.");
    console.log(numb);
    if (numb === true){
      Array.prototype.push.apply(bank, int);
      console.log(bank);
    } else {
      console.log(bank);
    }

    var specail = confirm("Press OK to use specail characters in your password.");
    console.log(specail);
    if (specail === true){
      Array.prototype.push.apply(bank, punctuation);
      console.log(bank);
    } else {
      console.log(bank);
    }

    if (letters === true ||
      caps === true ||
      numb === true ||
      specail === true){
        return error;
    } else {
      var error = alert("Please select atleast one character type to create your password.")
      generatePassword();
    }

    // var i;
    // for (i = 0; i < choice; i++) {
    //   password += bank[i] 
    // }
    // console.log(password)
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
