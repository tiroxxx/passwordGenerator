// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays where I will pull the password from
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
  // array where I will put all the other arrays 
  var bigArray = [];
  // array where i will put the password
  var passwordArray = [];


  // asking how big does the user want the password to be
  var lengthOfPass = prompt("How many characters would you like your password to contain?");
  // password not large enough
  if (lengthOfPass < 8) {
    alert("Password length must be at least 8 characters");
    return "Try Again!";
  }
  // password too large
  else if (lengthOfPass > 128) {
    alert("Password length must be less than 129 characters");
    return "Try Again!";
  }
  // password is not a letter
  else if (isNaN(lengthOfPass) === true) {
    alert("Nice try buddy, length cannot be measured in letters")
    return "Try Again!";
  }
  // if user enters correct value, run this code!
  else {

    // ask user if they wants special characters
    var wantSpecialChar = confirm("Click OK if you want special characters in your password");
    // they WANT special characters
    if (wantSpecialChar) {
      // looping through specialChar array
      for (var i = 0; i < specialChar.length; i++) {
        // putting all the stuff from specialChar array into bigArray
        bigArray.push(specialChar[i]);
      }
    }

    // ask user if they want numbers
    var wantNumbers = confirm("Click OK if you want numbers in your password");
    // they WANT numbers
    if (wantNumbers) {
      // looping through numb array
      for (var i = 0; i < numb.length; i++) {
        // putting all the stuff from numb array into bigArray
        bigArray.push(numb[i]);
      }
    }

    // ask user if they want lowercase letters
    var wantLowercase = confirm("Click OK if you want lowercase letters in your password");
    // they WANT lowercase letters
    if (wantLowercase) {
      // looping through lowercase array
      for (var i = 0; i < lowercase.length; i++) {
        // putting all the stuff from lowercase array into bigArray
        bigArray.push(lowercase[i]);
      }
    }

    // ask user if they want uppercase letters
    var wantUppercase = confirm("CLick OK if you want uppercase letters in your password");
    // they WANT uppercase letters
    if (wantUppercase) {
      // looping through uppercase array
      for (var i = 0; i < uppercase.length; i++) {
        // putting all the stuff from uppercase array into bigArray
        bigArray.push(uppercase[i]);
      }
    }

    // looping to build the array with the password
    for (var i = 0; i < lengthOfPass; i++) {
      //choosing random index from combined array
      passwordArray.push(bigArray[(Math.floor(Math.random() * bigArray.length))]);

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
