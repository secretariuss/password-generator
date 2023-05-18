// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const valuesForPasswords = {
  uppercaseLetters: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowercaseLetters: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
}

// Write password to the #password input
function writePassword() {
  var passwordLength = getPassLength();
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passLength) {
  let selectedTypeOfChacters = [];
  let stringChar = "";
  if (passLength) {
    let specialChar = confirm('Click Ok to confirm including special characters ?');
    let numb = confirm('Click Ok to confirm including numeric characters.');
    let loverCase = confirm('Click Ok to confirm including lovercase characters.');
    let upperCase = confirm('Click Ok to confirm including uppercase characters.');

    if (specialChar) {
      selectedTypeOfChacters.push(...valuesForPasswords.symbols)
    }
    if (numb) {
      selectedTypeOfChacters.push(...valuesForPasswords.numbers)
    }
    if (upperCase) {
      selectedTypeOfChacters.push(...valuesForPasswords.uppercaseLetters)
    }
    if (loverCase) {
      selectedTypeOfChacters.push(...valuesForPasswords.lowercaseLetters)
    }
    stringChar += selectedTypeOfChacters.join('').toString();
    return randomPassword(passLength, stringChar);
  }
  else {
    return "If you want still generate a password please press red button below!"
  }
}

function getPassLength() {
  let passLength = parseInt(prompt('How many characters would you like your password to contain?'));
  if (passLength < 8) {
    alert("Password length must be at least 8 characters")
  } else if (passLength >= 129) {
    alert("Password length must less than 129 characters")
  } else {
    return passLength;
  }
}

function randomPassword(pass, char) {
  let generatedPass = ""
  for (var i = 0, n = char.length; i < pass; ++i) {
    generatedPass += char.charAt(Math.floor(Math.random() * n));
  }
  return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
