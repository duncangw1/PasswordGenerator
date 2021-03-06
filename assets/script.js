// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Establishing Variables to be defined by user
var passwordLength = parseInt("");
var lowercase;
var uppercase;
var numeric;
var special;

// Creating variables for character types
var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericOptions = "0123456789";
var specialOptions = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Generate password function
function generatePassword() {
  // Prompt for the user to set password length
  var passwordLength = parseInt(
    prompt(
      "How long do you want the password to be? Choose between 8-128 characters."
    )
  );

  // While loop confirming the user input is between 8 and 128 characters
  // If their input is not in the specified range they have to keep trying until their input is valid
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    if (passwordLength < 8) {
      passwordLength = parseInt(
        prompt(
          "You chose less than 8 characters. Please choose a length between 8-128 characters."
        )
      );
    } else if (passwordLength > 128) {
      passwordLength = parseInt(
        prompt(
          "You chose more than 128 characters. Please choose a length between 8-128 characters."
        )
      );
    } else {
      passwordLength = parseInt(
        prompt(
          "Password length is required to continue. Please choose a length between 8-128 characters."
        )
      );
    }
  }

  // Confirms for the user to set character types
  var lowercase = confirm("Do you want lowercase letters in the password?");
  var uppercase = confirm("Do you want uppercase letters in the password?");
  var numeric = confirm("Do you want numbers in the password?");
  var special = confirm("Do you want special characters in the password?");

  // While loop ensuring the user picks at least one character type
  while (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    special === false
  ) {
    alert("You must choose at least one character type!");
    var lowercase = confirm("Do you want lowercase letters in the password?");
    var uppercase = confirm("Do you want uppercase letters in the password?");
    var numeric = confirm("Do you want numbers in the password?");
    var special = confirm("Do you want special characters in the password?");
  }

  // Array that fills based on user's chosen character types
  var passwordSettings = [];

  if (lowercase) {
    passwordSettings = passwordSettings.concat(lowercaseOptions.split(""));
  }
  if (uppercase) {
    passwordSettings = passwordSettings.concat(uppercaseOptions.split(""));
  }
  if (numeric) {
    passwordSettings = passwordSettings.concat(numericOptions.split(""));
  }
  if (special) {
    passwordSettings = passwordSettings.concat(specialOptions.split(""));
  }

  // Variable that will hold the randomly generated password
  var passwordRandom = "";

  // For loop that builds random password based on the user created passwordSettings array
  for (var i = 0; i < passwordLength; i++) {
    passwordRandom =
      passwordRandom +
      passwordSettings[Math.floor(Math.random() * passwordSettings.length)];
  }

  // Returns entire randomly generated password for the writePassword function to display to the user
  return passwordRandom;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
