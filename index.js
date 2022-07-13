const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


let generatePasswordBtn = document.getElementById("GBb");
let changePasswordLength = document.getElementById("CIb");
let displayPassword = document.querySelectorAll(".pw-display");

let num = changePasswordLength.min;
changePasswordLength.value = num;
changePasswordLength.addEventListener("input", function () {
    num = changePasswordLength.value;
    return num;
});

function generatePassword(num = 8) {
    const pwArray = [];

    for (let j = 1; j <= 2; j++) {
        let resultStr = "";
        for (let i = 1; i <= num; i++) {
            let randomPassword = Math.floor(Math.random() * characters.length);
            resultStr += characters[randomPassword];
        }
        pwArray.push(resultStr);
    }
    return pwArray;
}


function renderPassword() {
    let passwords = generatePassword(num);
    // console.log(passwords);
    for (let i = 0; i < displayPassword.length; i++) {

        displayPassword[i].textContent = passwords[i];
    }
}

