var generateBtn = document.querySelector("#generate");

var charPool = [];
var upperA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbA = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialA = ['!', '@', '#', '$', '%', '&', '*', '?'];

var characterSelect = prompt("How many characters do you need your password to be?");

    
while (characterSelect < 8 || characterSelect > 128) {
    alert("Value must be between 8 and 128.")

    var characterSelect = prompt("How many characters do you need your password to be?");
}

var uppercase = confirm("Does your password require at least on uppercase letter?");
if (uppercase) {
    var charPool = charPool.concat(upperA);
    console.log(charPool);
}
var lowercase = confirm("Does your password require at least one lowercase letter?");
if (lowercase) {
    var charPool = charPool.concat(lowerA);
    console.log(charPool);
}
var number = confirm("Does your password require at least one number?");
if (number) {
    var charPool = charPool.concat(numbA);
    console.log(charPool);
}
var specialcharacter = confirm("Does your password require at least one special character?");
if (number) {
    var charPool = charPool.concat(specialA);
    console.log(charPool);
}


while (uppercase === false && lowercase === false && number === false && specialcharacter === false) {

    alert("Password must include at least one of the following: lowercase letter, uppercase letter, number, or special character")

    var uppercase = confirm("Does your password require at least on uppercase letter?");
    var lowercase = confirm("Does your password require at least one lowercase letter?");
    var number = confirm("Does your password require at least one number?");
    var specialcharacter = confirm("Does your password require at least one special character?");

}

function generatePassword() {
    var together = [];

    for (var i = 0; i < characterSelect; i++) {
        var result = Math.floor(Math.random() * charPool.length);
        console.log(result);
        together.push(charPool[result]);
        console.log(together); 
    }
    
    return together.join('');  
    
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
