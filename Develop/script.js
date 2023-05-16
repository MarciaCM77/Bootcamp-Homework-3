// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt for password criteria and generate a random password
function generatePassword() {
  // Prompt for password length
  let length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  // Validate password length
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a valid length between 8 and 128 characters.");
    length = prompt("Enter the length of the password (between 8 and 128 characters):");
    length = parseInt(length);
  }

  // Prompt for character types to include
  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("You must select at least one character type.");
    const includeLowercase = confirm("Include lowercase characters?");
    const includeUppercase = confirm("Include uppercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecialChars = confirm("Include special characters?");
  }

  // Define character sets based on selected criteria
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()";

  let charset = "";

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumeric) {
    charset += numericChars;
  }

  if (includeSpecialChars) {
    charset += specialChars;
  }

  let password = "";

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
