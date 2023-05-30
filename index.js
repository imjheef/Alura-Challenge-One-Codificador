let textArea = document.querySelector(".text-area")
let message = document.querySelector('.message')

/*  La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncrypt(){
  const textEncrypted = encrypt(textArea.value);
  message.value = textEncrypted;
  textArea.value = '';
  message.style.backgroudImage = none;
}

function encrypt(stringEncrypted){
  let arrayCode = [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let i = 0; i < arrayCode.length; i++) {
      if (stringEncrypted.includes(arrayCode[i][0])) {
        stringEncrypted = stringEncrypted.replaceAll(arrayCode[i][0], arrayCode[i][1])
      }
    }
    return stringEncrypted
}