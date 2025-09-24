const lengthp  = document.querySelector("#length")
const upper = document.querySelector("#uppercase")
const lower = document.querySelector("#lowercase")
const numbers = document.querySelector("#numbers")
const symbol = document.querySelector("#symbol")
const copyInput = document.querySelector("#copyInput")
const copyBtn = document.querySelector("#copyBtn")
const generate = document.querySelector("#generate")



console.log(lengthp.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(numbers.checked)
console.log(symbol.checked)
console.log(copyInput.value)


let str = ""
generate.addEventListener("click", function () { 
        if (upper.checked) {
            str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (lower.checked) {
            str += "abcdefghijklmnopqrstuvwxyz";
        }
        if (numbers.checked) {
            str += "0123456789";
        }
        if (symbol.checked) {
            str += "!@#$%^&*()_+{}[]:;<>,.?/~`-=";
        }
        console.log(str, "String")
 })

