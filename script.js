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
  // Variable to set password length
  var passwordLength = parseInt(
    prompt(
      "How long do you want the password to be? Choose between 8 and 128 characters."
    )
  );
  console.log("users initial choice: " + passwordLength);
  // While loop confirming the user input between 8 and 128 characters
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    if (passwordLength < 8) {
      passwordLength = parseInt(
        prompt(
          "You chose less than 8 characters. Please choose a length between 8-128 characters."
        )
      );
      console.log("user chose less than 8. New choice: " + passwordLength);
    } else if (passwordLength > 128) {
      passwordLength = parseInt(
        prompt(
          "You chose more than 128 characters. Please choose a length between 8-128 characters."
        )
      );
      console.log("user chose more than 8. New choice: " + passwordLength);
    } else {
      passwordLength = parseInt(
        prompt(
          "Password length is required to continue. Please choose a length between 8-128 characters."
        )
      );
      console.log("user chose nothing. New choice: " + passwordLength);
    }
  }
}
