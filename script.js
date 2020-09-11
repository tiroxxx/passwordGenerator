// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays where I will pull the password from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// array of the character arrays
var ultimateArray = [lowercase, uppercase, numb, specialChar];
// array where I will put the password
var combinedArray = [];


var confirmSpecialChar = false;
var confirmUppercase = false;
var confirmLowercase = false;
var confirmNumbers = false;

function generateChar() {
  // random number between 0 and length of ultimateArray - 1
  var arrayIndex1 = Math.floor(Math.random() * ultimateArray.length);
  alert("value of arrayIndex1" , arrayIndex1);
  // random number between 0 and length of a random array length inside the ultimate array - 1
  var arrayIndex2 = Math.floor(Math.random() * ultimateArray[arrayndex1].length);
  alert("value of arrayIndex2");
  // getting a random character out of all arrays
  var newChar = ultimateArray[arrayIndex1][arrayIndex2];

  return newChar;
}



function generatePassword() {
  // asking how big does the user want the password to be
  var numberOfChars = prompt("How many characters would you like your password to contain?");
  // password not large enough
  if (numberOfChars < 8) {
    alert("Password length must be at least 8 characters");
    generateChar();
    return "Try Again!"
  }
  // password too large
  else if (numberOfChars > 128) {
    alert("Password length must be less than 129 characters");
    return "Try Again!"
  }
  // if user enters correct value, run this code!
  else {

    // ask user if they wants special characters
    confirmSpecialChar = confirm("Click OK if you want special characters in your password");
 
    // ask user if they want numbers
    confirmNumbers = confirm("Click OK if you want numbers in your password");

    // ask user if they want lowercase letters
    confirmLowercase = confirm("Click OK if you want lowercase letters in your password");
 
    // ask user if they want uppercase letters
    confirmUppercase = confirm("CLick OK if you want uppercase letters in your password");





}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
