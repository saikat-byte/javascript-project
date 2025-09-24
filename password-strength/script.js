const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");

inputField.addEventListener("input", function () {
  const password = inputField.value.trim();

  if (password.length < 8) {
    outputField.innerText = "Password is too short";
    outputField.style.color = "red";
  } else if (password.length > 8 && password.search(/[a-z]/) == -1) {
    // outputField.innerText = "Password is stander charecter";
    // outputField.style.color = "green";

    // a-z
    // A-Z
    // 0-9
    //  ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
    outputField.innerText = "Password is missing a lower case";
  } else if (password.length > 8 && password.search(/[A-Z]/) == -1) {
    outputField.innerText = "Password is missing a upper case";
  } else if (password.length > 8 && password.search(/[0-9]/) == -1) {
    outputField.innerText = "Password is missing a number";
  } else if (
    password.length > 8 &&
    password.search(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/) == -1
  ) {
    outputField.innerText = "Password is missing a special charecter";
  } else {
    outputField.innerText = "Password is strong";
    outputField.style.color = "green";
  }
});
