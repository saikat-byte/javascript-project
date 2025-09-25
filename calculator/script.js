let string = "";

const btnCal = document.querySelectorAll(".btnCal");
const display = document.querySelector(".screen");
let btnArray = Array.from(btnCal);

btnArray.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML == "C") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "="){
      string  =  eval(string)
      display.value = string
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
