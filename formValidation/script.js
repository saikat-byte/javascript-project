const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formSubmit = document.querySelector("#formSubmit");
// Error message
let fnameError = document.querySelector("#fnameError")
let phoneError = document.querySelector("#phoneError")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  
  let fName = fullName.value.trim();
  let phn = phone.value.trim();
  let mail = email.value.trim();
  let psw = password.value.trim();

  if (fName !== "") {
    fnameError.textContent = "";
  } else {
    fnameError.textContent = "Full name is required";
    valid = false;
  }
  if (phn !== "") {
    phoneError.textContent = "";
  } else {
    phoneError.textContent = "Phone number is required";
    valid = false;
  }
  if (mail !== "") {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Email id is required";
    valid = false;
  }
  if (psw !== "") {
    passwordError.textContent = "";
  } else {
    passwordError.textContent = "Password is required";
    valid = false;
  }

  if (valid) {
      alert("Form submitted successfully");
  }

});
