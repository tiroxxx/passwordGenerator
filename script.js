// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays where I will pull the password from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// array where I will put the password
var combinedArray = [];

var confirmSpecialChar;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;


function generatePassword() {
  // asking how big does the user want the password to be
  var numberOfChars = prompt("How many characters would you like your password to contain?");

  if (numberOfChars < 8) {
    alert("Password length must be at least 8 characters");

    return "Try Again!"
  }
  else if (numberOfChars > 128) {
    alert("Password length must be less than 129 characters");

    return "Try Again!"
  }

  // if user enters correct value, run this code!
  else {
    // ask user if he wants special characters in the password
    confirmSpecialChar = confirm("Click OK if you want special characters in your passwork");
    // user WANTS special characters
    if (confirmSpecialChar) {
      return "I do want special characters"

    
    }

    // user DOESN'T want special characters
    







  }








}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
