const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&*";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}
    
    function copyPassword(){
        passwordBox.select();
        

    navigator.clipboard.writeText(passwordBox.value).then(function() {
        alert("Password copied to clipboard!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}
    