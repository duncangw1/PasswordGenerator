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
  // Variable for the user to set password length
  var passwordLength = parseInt(
    prompt(
      "How long do you want the password to be? Choose between 8 and 128 characters."
    )
  );
  console.log("users initial choice: " + passwordLength);
  // While loop confirming the user input is between 8 and 128 characters. If their input is not in that range they have to keep trying until their input is between 8 and 128
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
  // Variables for ther user to set character types
  var lowercase = confirm("Do you want lowercase letters in the password?");
  console.log(lowercase);
  var uppercase = confirm("Do you want uppercase letters in the password?");
  console.log(uppercase);
  var numeric = confirm("Do you want numeric characters in the password?");
  console.log(numeric);
  var special = confirm("Do you want special characters in the password?");
  console.log(special);
}
