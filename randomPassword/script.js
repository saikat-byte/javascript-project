const passwordOutput = document.querySelector("#passwordOutput");
const copyBtn = document.querySelector("#copyBtn");
const lenRange = document.querySelector("#lenRange");
const incLower = document.querySelector("#incLower");
const incUpper = document.querySelector("#incUpper");
const incNumber = document.querySelector("#incNumber");
const incSymbol = document.querySelector("#incSymbol");
const generateBtn = document.querySelector("#generateBtn");

const length = 12;

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYM = "!@#$%^&*()_+[]{}|;:,.<>?~";

const allChars = UPPER + LOWER + NUM + SYM;

function createPassword() {
  let password = "";
  password += UPPER[Math.floor(Math.random() * UPPER.length)];
  password += LOWER[Math.floor(Math.random() * LOWER.length)];
  password += NUM[Math.floor(Math.random() * NUM.length)];
  password += SYM[Math.floor(Math.random() * SYM.length)];

    while (length>password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordOutput.value = password;
}

function copyPassword(){
    passwordOutput.select();
    document.execCommand("copy")
}
