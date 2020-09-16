// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword() {
  while (passwordLength !== null) {
    var passwordLength = prompt(
      "How long do you want the password to be? Choose between 8 and 128 characters."
    );
    console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128) {
      alert(
        "You have chosen a password length of " +
          passwordLength +
          " characters."
      );
      console.log("valid password length");
    } else {
      alert(
        "Input invalid. You must choose a password length between 8 and 128 characters."
      );
      console.log("NOT a valid password length");
    }
  }
}
