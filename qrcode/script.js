const inputValue = document.querySelector("#qrInput");
const qrImg = document.querySelector("#qrImg");
const qrButton = document.querySelector("#qrButton");

qrButton.addEventListener("click", function () {
  const inpVal = inputValue.value.trim();

  if (!inpVal) {
    alert("Write something here");
  }else{

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpVal}`;
    qrImg.alt = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpVal}`;
  }


});
