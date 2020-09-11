// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays where I will pull the password from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// array where I will put all the other arrays 
var combinedArray = [];
// array where i will put the password
var passwordArray = [];

var confirmSpecialChar;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var userPassword;



function generatePassword() {
  // asking how big does the user want the password to be
  var numberOfChars = prompt("How many characters would you like your password to contain?");
  // password not large enough
  if (numberOfChars < 8) {
    alert("Password length must be at least 8 characters");
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
    // they WANT special characters
    if (confirmSpecialChar) {
      // looping through specialChar array
      for (var i = 0; i < specialChar.length; i++) {
          // putting all the stuff from specialChar array into combinedArray
          combinedArray.push(specialChar[i]);
      }
    }
    
    // ask user if they want numbers
    confirmNumbers = confirm("Click OK if you want numbers in your password");
    // they WANT numbers
    if (confirmNumbers) {
      // looping through numb array
      for (var i = 0; i < numb.length; i++) {
        // putting all the stuff from numb array into combinedArray
        combinedArray.push(numb[i]);
      }
    }

    // ask user if they want lowercase letters
    confirmLowercase = confirm("Click OK if you want lowercase letters in your password");
    // they WANT lowercase letters
    if (confirmLowercase) {
      // looping through lowercase array
      for (var i = 0; i < lowercase.length; i++) {
        // putting all the stuff from lowercase array into combinedArray
        combinedArray.push(lowercase[i]);
      }
    }
 
    // ask user if they want uppercase letters
    confirmUppercase = confirm("CLick OK if you want uppercase letters in your password");
    // they WANT uppercase letters
    if (confirmUppercase) {
      // looping through uppercase array
      for (var i = 0; i < uppercase.length; i++) {
        // putting all the stuff from uppercase array into combinedArray
        combinedArray.push(uppercase[i]);
      }
    }

    // looping to build the array with the password
    for (var i = 0; i < numberOfChars; i++) {
      //choosing random index from combined array
      passwordArray.push(combinedArray[(Math.floor(Math.random() * combinedArray.length))]);

    }
      //turning passwordArray into a string
      userPassword = passwordArray.join("");

      return userPassword;

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
