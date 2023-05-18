// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const valuesForPasswords = {
  uppercaseLetters: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowercaseLetters: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
}

generatePassword: () => {
  return console.log("fdfds");
}

// Write password to the #password input
function writePassword() {
  var passwordLength = getPassLength();
  console.log(passwordLength);
  // let passLength = parseInt(prompt('How many characters would you like your password to contain?'));
  // if(passLength < 8) {
  //   alert("Password length must be at least 8 characters")
  // } else if (passLength >= 129) {
  //     alert("Password length must less than 129 characters")
  // } else {
  //   if(passLength) {
  //     let specialChar = confirm('Click Ok to confirm including special characters ?');
  //     console.log(specialChar);
  //   }
  //   console.log(passLength);
  //   retVal = ""
  //   for( var i = 0, n = valuesForPasswords.uppercaseLetters.length; i < passLength; ++i) {
  //     retVal += valuesForPasswords.uppercaseLetters.charAt(Math.floor(Math.random() * n));
  //   }
  //   return console.log('%cscript.js line:30 retVal', 'color: #007acc;', retVal);

  // }
  console.log("just testing!")
  var password = generatePassword(passwordLength);
  console.log(password);
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

    } if (numb) {
      console.log(numb);
      selectedTypeOfChacters.push(...valuesForPasswords.numbers)
    }
    if (upperCase) {
      console.log(upperCase);
      selectedTypeOfChacters.push(...valuesForPasswords.uppercaseLetters)
    }
    if (loverCase) {
      console.log(loverCase);
      selectedTypeOfChacters.push(...valuesForPasswords.lowercaseLetters)
    }
    stringChar += selectedTypeOfChacters.join('').toString();
    return randomPassword(passLength, stringChar);
   
  }
  else {
    return alert("Please add number of length password")
  }

  console.log(selectedTypeOfChacters.join('').toString());
  // for( var i = 0, n = selectedTypeOfChacters.length; i < pass; ++i) {
  //     retVal += selectedTypeOfChacters.map((el) => el.charAt(Math.floor(Math.random() * n)));
  //   }
  //   console.log(retVal);
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
  for( var i = 0, n = char.length; i < pass; ++i) {
    generatedPass += char.charAt(Math.floor(Math.random() * n));
  }
  return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
